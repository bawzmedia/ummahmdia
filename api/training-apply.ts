import type { VercelRequest, VercelResponse } from "@vercel/node";

const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TRAINING_TABLE =
  process.env.AIRTABLE_TRAINING_TABLE || "UMTI Applications";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    const { name, email, phone, motivation, niche } = req.body;

    if (!name || !email || !phone || !motivation) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TRAINING_TABLE)}`;

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
              Phone: phone,
              Motivation: motivation,
              "Niche Interest": niche || "",
              Status: "New",
              "Applied At": new Date().toISOString(),
            },
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Airtable error:", response.status, errorText);
      return res.status(500).json({ error: "Failed to save application" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Training apply error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
