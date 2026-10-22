"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import * as THREE from "three";
import Link from "next/link";
import {
  Compass,
  MapPin,
  Plane,
  RotateCcw,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Clock,
  ShieldCheck,
  ChevronRight,
  Globe2,
} from "lucide-react";

export interface GlobeDestination {
  id: string;
  name: string;
  code: string;
  flag: string;
  lat: number;
  lng: number;
  region: "Middle East" | "Europe" | "Asia" | "Africa";
  tagline: string;
  visaType: string;
  processingTime: string;
  validity: string;
  tourSlug?: string;
  image: string;
}

const DESTINATIONS: GlobeDestination[] = [
  {
    id: "saudi",
    name: "Saudi Arabia",
    code: "SA",
    flag: "🇸🇦",
    lat: 23.8859,
    lng: 45.0792,
    region: "Middle East",
    tagline: "Sacred Makkah Clock Tower & Holy Madinah Ziyarat",
    visaType: "1-Yr Multiple / Tourist & Umrah",
    processingTime: "24–48 Hours",
    validity: "365 Days Multiple",
    tourSlug: "/umrah",
    image: "/images/Mecca.jpeg",
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    code: "AE",
    flag: "🇦🇪",
    lat: 23.4241,
    lng: 53.8478,
    region: "Middle East",
    tagline: "Burj Khalifa, Desert Safari & Luxury Dubai Marina",
    visaType: "30 & 60 Days E-Visa",
    processingTime: "24–48 Hours",
    validity: "60 Days Validity",
    tourSlug: "/tours?destination=dubai",
    image: "/images/dest-dubai.jpg",
  },
  {
    id: "turkey",
    name: "Türkiye",
    code: "TR",
    flag: "🇹🇷",
    lat: 38.9637,
    lng: 35.2433,
    region: "Europe",
    tagline: "Bosphorus Cruises, Hagia Sophia & Cappadocia Valleys",
    visaType: "Official Sticker / E-Visa",
    processingTime: "7–10 Work. Days",
    validity: "90 Days Validity",
    tourSlug: "/tours?destination=turkey",
    image: "/images/dest-istanbul.jpg",
  },
  {
    id: "azerbaijan",
    name: "Azerbaijan",
    code: "AZ",
    flag: "🇦🇿",
    lat: 40.1431,
    lng: 47.5769,
    region: "Asia",
    tagline: "Flame Towers, Caspian Sea & Gabala Cable Cars",
    visaType: "ASAN 3-Days Express E-Visa",
    processingTime: "3 Work. Days",
    validity: "30 Days Single",
    tourSlug: "/tours?destination=azerbaijan",
    image: "/images/hero-baku.jpg",
  },
  {
    id: "uk",
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    lat: 55.3781,
    lng: -3.436,
    region: "Europe",
    tagline: "London Big Ben, Buckingham Palace & English Heritage",
    visaType: "Standard 6-Months Visitor Visa",
    processingTime: "15–20 Work. Days",
    validity: "180 Days Stay",
    tourSlug: "/tours?destination=uk",
    image: "/images/hero-london.jpg",
  },
  {
    id: "switzerland",
    name: "Switzerland",
    code: "CH",
    flag: "🇨🇭",
    lat: 46.8182,
    lng: 8.2275,
    region: "Europe",
    tagline: "Swiss Alps, Glacier Express & Emerald Lakes",
    visaType: "Schengen Visa Type C",
    processingTime: "15–21 Work. Days",
    validity: "90 Days Stay",
    tourSlug: "/tours?destination=switzerland",
    image: "/images/dest-switzerland.jpg",
  },
  {
    id: "france",
    name: "France",
    code: "FR",
    flag: "🇫🇷",
    lat: 46.2276,
    lng: 2.2137,
    region: "Europe",
    tagline: "Eiffel Tower Sunset, Louvre & Seine River Cruises",
    visaType: "Schengen Visa Type C",
    processingTime: "15–20 Work. Days",
    validity: "90 Days Stay",
    tourSlug: "/tours?destination=paris",
    image: "/images/hero-paris.jpg",
  },
  {
    id: "malaysia",
    name: "Malaysia",
    code: "MY",
    flag: "🇲🇾",
    lat: 4.2105,
    lng: 101.9758,
    region: "Asia",
    tagline: "Petronas Twin Towers & Langkawi Pristine Beaches",
    visaType: "30 Days Official E-Visa",
    processingTime: "3 Work. Days",
    validity: "90 Days Validity",
    tourSlug: "/tours?destination=malaysia",
    image: "/images/seeview_malysia.jpeg",
  },
  {
    id: "qatar",
    name: "Qatar",
    code: "QA",
    flag: "🇶🇦",
    lat: 25.3548,
    lng: 51.1839,
    region: "Middle East",
    tagline: "Doha Corniche, Souq Waqif & Pearl Island",
    visaType: "Hayya Visa / Visa On Arrival",
    processingTime: "Instant / 24h",
    validity: "30 Days Stay",
    image: "/images/dest-dubai.jpg",
  },
  {
    id: "oman",
    name: "Oman",
    code: "OM",
    flag: "🇴🇲",
    lat: 21.5126,
    lng: 55.9233,
    region: "Middle East",
    tagline: "Muscat Grand Mosque, Desert Oases & Coastal Fjords",
    visaType: "Official Royal Police E-Visa",
    processingTime: "24–48 Hours",
    validity: "30 Days Single",
    image: "/images/dest-dubai.jpg",
  },
  {
    id: "egypt",
    name: "Egypt",
    code: "EG",
    flag: "🇪🇬",
    lat: 26.8206,
    lng: 30.8025,
    region: "Africa",
    tagline: "Giza Pyramids, Nile River Cruise & Red Sea Sharm",
    visaType: "Tourist E-Visa / Sticker",
    processingTime: "5–7 Work. Days",
    validity: "90 Days Validity",
    image: "/images/dest-istanbul.jpg",
  },
  {
    id: "kenya",
    name: "Kenya",
    code: "KE",
    flag: "🇰🇪",
    lat: -0.0236,
    lng: 37.9062,
    region: "Africa",
    tagline: "Masai Mara Wildlife Safari & Great Rift Valley",
    visaType: "Electronic Travel Auth (eTA)",
    processingTime: "3–5 Days",
    validity: "90 Days Single",
    image: "/images/dest-dubai.jpg",
  },
  {
    id: "singapore",
    name: "Singapore",
    code: "SG",
    flag: "🇸🇬",
    lat: 1.3521,
    lng: 103.8198,
    region: "Asia",
    tagline: "Marina Bay Sands, Gardens by the Bay & Sentosa",
    visaType: "Official E-Visa",
    processingTime: "4–5 Work. Days",
    validity: "30 Days Stay",
    image: "/images/seeview_malysia.jpeg",
  },
  {
    id: "thailand",
    name: "Thailand",
    code: "TH",
    flag: "🇹🇭",
    lat: 15.87,
    lng: 100.9925,
    region: "Asia",
    tagline: "Bangkok Temples, Phuket Emerald Bays & Floating Markets",
    visaType: "Official Royal Sticker / E-Visa",
    processingTime: "5–7 Work. Days",
    validity: "90 Days Validity",
    image: "/images/seeview_malysia.jpeg",
  },
];

// Lahore Origin Coordinates
const LAHORE_COORDS = { lat: 31.5204, lng: 74.3587 };

// Convert Lat/Lng to 3D Cartesian coordinates on sphere
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

export default function ThreeDInteractiveGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [activeDestination, setActiveDestination] = useState<GlobeDestination>(DESTINATIONS[0]);
  const [isRotating, setIsRotating] = useState(true);

  // Filtered destinations list
  const filteredDestinations = useMemo(() => {
    if (selectedRegion === "all") return DESTINATIONS;
    return DESTINATIONS.filter((d) => d.region === selectedRegion);
  }, [selectedRegion]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight || 520;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group that holds the globe and elements
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const GLOBE_RADIUS = 75;

    // 1. Dark Luxury Base Sphere
    const sphereGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x071526,
      emissive: 0x040c16,
      specular: 0x244265,
      shininess: 35,
      transparent: true,
      opacity: 0.94,
    });
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeGroup.add(sphereMesh);

    // 2. Glowing Atmosphere Outer Ring / Halo
    const atmosphereGeometry = new THREE.SphereGeometry(GLOBE_RADIUS * 1.14, 48, 48);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    globeGroup.add(atmosphereMesh);

    // 3. Mathematical Dot-Matrix Grid for Continents & Global Graticules
    const particleCount = 2800;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Fibonacci sphere distribution for uniform luxury dot lattice
      const y = 1 - (i / (particleCount - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = 2.399963229728653 * i; // Golden angle

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      positions[i * 3] = x * GLOBE_RADIUS;
      positions[i * 3 + 1] = y * GLOBE_RADIUS;
      positions[i * 3 + 2] = z * GLOBE_RADIUS;

      // Color variation: Gold shimmer and soft cyan
      const isGold = i % 7 === 0;
      colors[i * 3] = isGold ? 0.85 : 0.25;
      colors[i * 3 + 1] = isGold ? 0.7 : 0.45;
      colors[i * 3 + 2] = isGold ? 0.3 : 0.65;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    globeGroup.add(particleSystem);

    // 4. Orbital Inclined Rings
    const ringGeo = new THREE.RingGeometry(GLOBE_RADIUS * 1.35, GLOBE_RADIUS * 1.37, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.22,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.6;
    ringMesh.rotation.y = Math.PI / 7;
    globeGroup.add(ringMesh);

    // 5. Lahore Hub Origin Pin (Glowing Central Hub)
    const lahoreVec = latLngToVector3(LAHORE_COORDS.lat, LAHORE_COORDS.lng, GLOBE_RADIUS);
    const lahorePinGeo = new THREE.SphereGeometry(2.5, 16, 16);
    const lahorePinMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const lahorePin = new THREE.Mesh(lahorePinGeo, lahorePinMat);
    lahorePin.position.copy(lahoreVec);
    globeGroup.add(lahorePin);

    // 6. Destination Pins & Animated Flight Route Arcs
    const destinationPins: { mesh: THREE.Mesh; dest: GlobeDestination }[] = [];
    const arcCurves: { curve: THREE.QuadraticBezierCurve3; particles: THREE.Points }[] = [];

    DESTINATIONS.forEach((dest) => {
      const destVec = latLngToVector3(dest.lat, dest.lng, GLOBE_RADIUS);

      // Gold Pin
      const pinGeo = new THREE.SphereGeometry(1.6, 12, 12);
      const pinMat = new THREE.MeshBasicMaterial({ color: 0xd4af37 });
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      pinMesh.position.copy(destVec);
      globeGroup.add(pinMesh);
      destinationPins.push({ mesh: pinMesh, dest });

      // Arc: Calculate curved control point in 3D space elevated above surface
      const midPoint = new THREE.Vector3().addVectors(lahoreVec, destVec).multiplyScalar(0.5);
      const distance = lahoreVec.distanceTo(destVec);
      const elevation = GLOBE_RADIUS + Math.min(distance * 0.45, 45);
      midPoint.normalize().multiplyScalar(elevation);

      const curve = new THREE.QuadraticBezierCurve3(lahoreVec, midPoint, destVec);
      const curvePoints = curve.getPoints(50);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
      const curveMat = new THREE.LineBasicMaterial({
        color: 0xd4af37,
        transparent: true,
        opacity: 0.35,
      });
      const arcLine = new THREE.Line(curveGeo, curveMat);
      globeGroup.add(arcLine);

      // Animated Pulse along the arc
      const arcParticleGeo = new THREE.BufferGeometry();
      arcParticleGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array([midPoint.x, midPoint.y, midPoint.z]), 3)
      );
      const arcParticleMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 3.5,
        transparent: true,
        opacity: 0.9,
      });
      const arcParticle = new THREE.Points(arcParticleGeo, arcParticleMat);
      globeGroup.add(arcParticle);
      arcCurves.push({ curve, particles: arcParticle });
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xd4af37, 1.2);
    dirLight.position.set(150, 150, 150);
    scene.add(dirLight);

    // Initial globe orientation centered towards Pakistan & Middle East
    globeGroup.rotation.y = -2.1;
    globeGroup.rotation.x = 0.35;

    // Mouse Interaction for Dragging / Orbiting Globe
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsRotating(false);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      globeGroup.rotation.y += deltaX * 0.006;
      globeGroup.rotation.x = Math.max(-0.9, Math.min(0.9, globeGroup.rotation.x + deltaY * 0.006));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Raycaster for Clicking Destination Pins directly on 3D globe
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onGlobeClick = (e: MouseEvent) => {
      const rect = domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const meshes = destinationPins.map((p) => p.mesh);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const hit = destinationPins.find((p) => p.mesh === intersects[0].object);
        if (hit) {
          setActiveDestination(hit.dest);
        }
      }
    };
    domElement.addEventListener("click", onGlobeClick);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow Auto-rotation when not being dragged
      if (!isDragging && isRotating) {
        globeGroup.rotation.y += 0.002;
      }

      // Orbital ring micro-oscillation
      ringMesh.rotation.z = elapsedTime * 0.05;

      // Pulse traveling particles along arcs
      arcCurves.forEach(({ curve, particles }, idx) => {
        const t = (elapsedTime * 0.35 + idx * 0.08) % 1;
        const point = curve.getPoint(t);
        const posAttr = particles.geometry.attributes.position;
        posAttr.setXYZ(0, point.x, point.y, point.z);
        posAttr.needsUpdate = true;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 520;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      domElement.removeEventListener("click", onGlobeClick);
      window.removeEventListener("resize", handleResize);
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
      renderer.dispose();
    };
  }, [isRotating]);

  return (
    <section id="interactive-map" className="py-20 sm:py-28 bg-[#091524] text-white relative overflow-hidden border-b border-navy-800">
      {/* Luxury Atmospheric Glow Background */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 text-xs font-bold tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5 text-gold-400" />
              <span>3D Global Flight Route &amp; Visa Hub</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight leading-tight">
              Interactive 3D Flight &amp; Visa Network
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore direct visa processing, consular guidelines, and bespoke international flight routes
              departing seamlessly from our <strong>Lahore Hub</strong>.
            </p>
          </div>

          {/* Region Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "Worldwide" },
              { id: "Middle East", label: "Middle East" },
              { id: "Europe", label: "Europe" },
              { id: "Asia", label: "Asia" },
              { id: "Africa", label: "Africa" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedRegion(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  selectedRegion === tab.id
                    ? "bg-gradient-to-r from-gold-500 to-amber-400 text-navy-950 shadow-md font-extrabold scale-105"
                    : "bg-navy-900/80 hover:bg-navy-800 text-slate-300 border border-white/10 hover:border-gold-400/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: 3D Globe Viewer (7 cols) + Interactive Directory & Details (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 3D Interactive Three.js Globe */}
          <div className="lg:col-span-7 bg-navy-950/80 rounded-3xl border border-gold-400/30 p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden flex flex-col justify-between">
            {/* Top Globe HUD Overlay */}
            <div className="flex items-center justify-between z-20 pb-2">
              <div className="flex items-center gap-2 bg-navy-900/90 px-3.5 py-1.5 rounded-full border border-white/10 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold text-white text-[11px]">Origin: Lahore (LHE)</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsRotating((prev) => !prev)}
                  className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-gold-500 hover:text-navy-950 text-xs font-semibold border border-white/20 transition-all flex items-center gap-1.5"
                  title="Toggle Auto-Rotation"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{isRotating ? "Pause Spin" : "Auto Spin"}</span>
                </button>
              </div>
            </div>

            {/* Three.js Canvas Container */}
            <div
              ref={mountRef}
              className="w-full h-[400px] sm:h-[480px] cursor-grab active:cursor-grabbing relative flex items-center justify-center select-none"
            />

            {/* Bottom 3D Helper Badge */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 border-t border-white/10 gap-2">
              <div className="flex items-center gap-2 text-[11px]">
                <Globe2 className="w-3.5 h-3.5 text-gold-400" />
                <span>Drag to spin 3D globe • Click pin or list to view visa details</span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                <span className="text-white font-medium">Lahore Hub</span>
                <span className="w-2 h-2 rounded-full bg-gold-400 inline-block ml-2" />
                <span className="text-gold-300 font-medium">Active Destinations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Country Directory & Active Destination Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Active Destination Spotlight Card */}
            <div className="bg-gradient-to-br from-navy-900/90 to-navy-950 rounded-3xl p-6 sm:p-7 border border-gold-400/40 shadow-xl space-y-4 backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{activeDestination.flag}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                      {activeDestination.name}
                    </h3>
                    <span className="text-xs text-gold-400 font-medium">
                      Direct Route from Lahore (LHE)
                    </span>
                  </div>
                </div>

                <span className="bg-gold-500/20 text-gold-300 border border-gold-500/40 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {activeDestination.region}
                </span>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {activeDestination.tagline}
              </p>

              {/* Visa & Processing Specs */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">
                    Visa Category
                  </span>
                  <span className="font-bold text-white text-xs sm:text-sm mt-0.5 block">
                    {activeDestination.visaType}
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">
                    Processing Time
                  </span>
                  <span className="font-bold text-emerald-400 text-xs sm:text-sm mt-0.5 block">
                    {activeDestination.processingTime}
                  </span>
                </div>
              </div>

              {/* Consultation Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/923065602040?text=${encodeURIComponent(
                    `Assalam-o-Alaikum, I want to inquire about the visa and tour packages for ${activeDestination.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>

                {activeDestination.tourSlug && (
                  <Link
                    href={activeDestination.tourSlug}
                    className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs py-3 px-4 rounded-xl shadow-lg transition-all"
                  >
                    <span>View Tour</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>

            {/* Quick Destination Select Directory List */}
            <div className="bg-navy-950/80 rounded-3xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                <span className="font-bold text-slate-300 uppercase tracking-wider">
                  Available Flight Destinations ({filteredDestinations.length})
                </span>
                <span className="text-gold-400 text-[11px] font-mono">Instant Dossier Filing</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[170px] overflow-y-auto scrollbar-none pr-1">
                {filteredDestinations.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => setActiveDestination(dest)}
                    className={`flex items-center gap-2 p-2 rounded-xl text-left text-xs transition-all duration-200 ${
                      activeDestination.id === dest.id
                        ? "bg-gold-500 text-navy-950 font-bold shadow-md"
                        : "bg-white/5 hover:bg-white/10 text-slate-300"
                    }`}
                  >
                    <span className="text-base">{dest.flag}</span>
                    <span className="truncate text-[11px]">{dest.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
