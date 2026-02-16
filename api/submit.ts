import type { VercelRequest, VercelResponse } from "@vercel/node";

const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE = process.env.AIRTABLE_TABLE || "Submissions";

const SERVICE_MAP: Record<string, string> = {
  brand: "Brand Development",
  video: "Video Marketing",
  ugc: "UGC Content",
  ai: "AI Education",
};

const STAGE_MAP: Record<string, string> = {
  starting: "Just Starting",
  growing: "Growing",
  rebuilding: "Rebuilding",
};

const TIMELINE_MAP: Record<string, string> = {
  asap: "ASAP",
  "1-3": "1-3 Months",
  flexible: "Flexible",
};

const BUDGET_MAP: Record<string, string> = {
  "500-2k": "$500-2K",
  "2k-5k": "$2K-5K",
  "5k-15k": "$5K-15K",
  "15k+": "$15K+",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    const { service, stage, timeline, budget, name, email, message } = req.body;

    if (!name || !email || !service) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: name,
              Email: email,
              Service: SERVICE_MAP[service] || service,
              Stage: STAGE_MAP[stage] || stage,
              Timeline: TIMELINE_MAP[timeline] || timeline,
              Budget: BUDGET_MAP[budget] || budget,
              Message: message || "",
            },
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Airtable error:", response.status, errorText);
      return res.status(500).json({ error: "Failed to save submission", detail: errorText });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Submit error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
