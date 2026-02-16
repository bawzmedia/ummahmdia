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
  water: "#FAF8F3",
  atmosphere: "#C9A961",
  marker: "#FFD475",
  ring: (t: number) => `rgba(255,212,117,${Math.max(0, 1 - t * 1.1)})`,
};

const globeMat = new MeshPhongMaterial({
  color: COLORS.water,
  transparent: false,
  flatShading: false,
});

// Filter out Greenland (ISO 304) to prevent jitter
const filterPolygons = (features: any[]) =>
  features.filter((f: any) => f.id !== "304" && f.properties?.name !== "Greenland");

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
        setPolygons(filterPolygons(geo.features));
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

  const labels = PARTNERS.map((p) => ({
    ...p,
    id: p.city,
    text: `${p.city}, ${p.country}`,
  }));

  const rings = PARTNERS.map((p) => ({
    lat: p.lat,
    lng: p.lng,
    maxR: 6,
    propagationSpeed: 1,
    repeatPeriod: 2000,
  }));

  const handleLabelHover = useCallback((label: any) => {
    setHovered(label ? label.id : null);
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
        // Countries — no stroke lines to eliminate all jitter
        polygonsData={polygons}
        polygonCapColor={() => COLORS.land}
        polygonSideColor={() => "rgba(26,94,81,0.06)"}
        polygonStrokeColor={() => "rgba(0,0,0,0)"}
        polygonAltitude={0.003}
        // City labels — always visible, grow on hover
        labelsData={labels}
        labelLat={(d: any) => d.lat}
        labelLng={(d: any) => d.lng}
        labelText={(d: any) => d.text}
        labelSize={(d: any) => hovered === d.id ? 2.2 : 1.4}
        labelDotRadius={(d: any) => hovered === d.id ? 0.6 : 0.35}
        labelColor={() => COLORS.marker}
        labelAltitude={(d: any) => hovered === d.id ? 0.15 : 0.06}
        labelResolution={2}
        onLabelHover={handleLabelHover}
        // Thick radar pulse rings — elevated above globe surface
        ringsData={rings}
        ringColor={() => COLORS.ring}
        ringMaxRadius={6}
        ringPropagationSpeed={1}
        ringRepeatPeriod={2000}
        ringAltitude={0.015}
        animateIn={true}
      />
    </div>
  );
};

export default PartnerGlobe;
