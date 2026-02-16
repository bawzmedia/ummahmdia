import { useEffect, useRef, useState, useCallback } from "react";
import Globe from "react-globe.gl";
import { feature } from "topojson-client";
import { MeshPhongMaterial } from "three";

// ─── Partner locations (add a new partner = add one line) ───
export const PARTNERS = [
  { city: "Edmonton", country: "Canada", lat: 53.5461, lng: -113.4937 },
  { city: "Red Deer", country: "Canada", lat: 52.2681, lng: -113.8112 },
  { city: "Halifax", country: "Canada", lat: 44.6488, lng: -63.5752 },
  { city: "Lahore", country: "Pakistan", lat: 31.5497, lng: 74.3436 },
];

// ─── Palette ───
const COLORS = {
  land: "#1A5E51",
  landStroke: "rgba(201,169,97,0.25)",
  water: "#FAF8F3",
  atmosphere: "#C9A961",
  marker: "#FFD475",
  markerGlow: "rgba(255,212,117,0.6)",
  ring: (t: number) => `rgba(255,212,117,${1 - t})`,
};

const globeMat = new MeshPhongMaterial({
  color: COLORS.water,
  transparent: false,
  flatShading: false,
});

const PartnerGlobe = () => {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [polygons, setPolygons] = useState<any[]>([]);
  const [globeSize, setGlobeSize] = useState(500);
  const [hovered, setHovered] = useState<string | null>(null);

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
    ctrl.autoRotateSpeed = 0.5;
    ctrl.enableZoom = false;
    globeRef.current.pointOfView({ lat: 30, lng: 50, altitude: 2.2 }, 0);
  }, [polygons]);

  const points = PARTNERS.map((p) => ({
    ...p,
    id: p.city,
    label: `${p.city}, ${p.country}`,
  }));

  const rings = PARTNERS.map((p) => ({
    lat: p.lat,
    lng: p.lng,
    maxR: 5,
    propagationSpeed: 1.2,
    repeatPeriod: 1800,
  }));

  const handlePointHover = useCallback((point: any) => {
    setHovered(point ? point.id : null);
  }, []);

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
        atmosphereAltitude={0.18}
        // Countries — no stroke to fix jitter, use slightly different cap shading
        polygonsData={polygons}
        polygonCapColor={() => COLORS.land}
        polygonSideColor={() => "rgba(26,94,81,0.08)"}
        polygonStrokeColor={() => COLORS.landStroke}
        polygonAltitude={0.004}
        // Bright gold marker points — elevated above land
        pointsData={points}
        pointColor={() => COLORS.marker}
        pointAltitude={(d: any) => hovered === d.id ? 0.12 : 0.08}
        pointRadius={(d: any) => hovered === d.id ? 0.7 : 0.5}
        pointsMerge={false}
        onPointHover={handlePointHover}
        // Labels — only show on hover
        labelsData={points}
        labelLat={(d: any) => d.lat}
        labelLng={(d: any) => d.lng}
        labelText={(d: any) => d.label}
        labelSize={(d: any) => hovered === d.id ? 1.8 : 0}
        labelDotRadius={(d: any) => hovered === d.id ? 0.5 : 0}
        labelColor={() => COLORS.marker}
        labelAltitude={0.12}
        labelResolution={2}
        // Radar pulse rings
        ringsData={rings}
        ringColor={() => COLORS.ring}
        ringMaxRadius={5}
        ringPropagationSpeed={1.2}
        ringRepeatPeriod={1800}
        animateIn={true}
      />
    </div>
  );
};

export default PartnerGlobe;
