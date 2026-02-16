import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { feature } from "topojson-client";
import { MeshPhongMaterial } from "three";

// ─── Partner locations (add a new partner = add one line) ───
export const PARTNERS = [
  { city: "Edmonton", country: "Canada", lat: 53.5461, lng: -113.4937 },
  { city: "Lahore", country: "Pakistan", lat: 31.5497, lng: 74.3436 },
];

// ─── Palette (matches site) ───
const COLORS = {
  land: "#1A5E51",
  landBorder: "#C9A961",
  water: "#FAF8F3",
  atmosphere: "#C9A961",
  marker: "#C9A961",
  markerRing: "rgba(201,169,97,0.35)",
};

const globeMat = new MeshPhongMaterial({ color: COLORS.water, transparent: false });

const PartnerGlobe = () => {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [polygons, setPolygons] = useState<any[]>([]);
  const [globeSize, setGlobeSize] = useState(500);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((r) => r.json())
      .then((topo) => {
        const geo = feature(topo, topo.objects.countries) as any;
        setPolygons(geo.features);
      });
  }, []);

  useEffect(() => {
    const sync = () => {
      if (containerRef.current) {
        setGlobeSize(Math.min(containerRef.current.offsetWidth, 600));
      }
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;
    const ctrl = globeRef.current.controls();
    ctrl.autoRotate = true;
    ctrl.autoRotateSpeed = 0.6;
    ctrl.enableZoom = false;
    globeRef.current.pointOfView({ lat: 30, lng: 50, altitude: 2.2 }, 0);
  }, [polygons]);

  const points = PARTNERS.map((p) => ({
    ...p,
    label: `${p.city}, ${p.country}`,
  }));

  const rings = PARTNERS.map((p) => ({
    lat: p.lat,
    lng: p.lng,
    maxR: 4,
    propagationSpeed: 1.5,
    repeatPeriod: 1400,
  }));

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Globe
        ref={globeRef}
        width={globeSize}
        height={globeSize}
        backgroundColor="rgba(0,0,0,0)"
        globeMaterial={globeMat}
        atmosphereColor={COLORS.atmosphere}
        atmosphereAltitude={0.2}
        polygonsData={polygons}
        polygonCapColor={() => COLORS.land}
        polygonSideColor={() => "rgba(26,94,81,0.12)"}
        polygonStrokeColor={() => COLORS.landBorder}
        polygonAltitude={0.005}
        pointsData={points}
        pointColor={() => COLORS.marker}
        pointAltitude={0.06}
        pointRadius={0.45}
        pointsMerge={false}
        labelsData={points}
        labelLat={(d: any) => d.lat}
        labelLng={(d: any) => d.lng}
        labelText={(d: any) => d.label}
        labelSize={1.4}
        labelDotRadius={0.35}
        labelColor={() => COLORS.marker}
        labelAltitude={0.07}
        labelResolution={2}
        ringsData={rings}
        ringColor={() => COLORS.markerRing}
        ringMaxRadius={4}
        ringPropagationSpeed={1.5}
        ringRepeatPeriod={1400}
        animateIn={true}
      />
    </div>
  );
};

export default PartnerGlobe;
