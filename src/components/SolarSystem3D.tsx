import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Icons } from './Icons';
import { soundFX } from '../utils/sound';

interface PlanetData {
  name: string;
  radius: number;
  distance: number;
  speed: number;
  color: number;
  emissive?: number;
  hasRings?: boolean;
  hasMoon?: boolean;
  specs: {
    diameter: string;
    orbitPeriod: string;
    atmosphere: string;
    features: string;
  };
}

const PLANETS: PlanetData[] = [
  {
    name: 'Mercury',
    radius: 0.6,
    distance: 7,
    speed: 0.035,
    color: 0x9e9e9e,
    specs: {
      diameter: '4,879 km',
      orbitPeriod: '88 Days',
      atmosphere: 'Trace Sodium & Helium',
      features: 'Extreme surface temperature swings'
    }
  },
  {
    name: 'Venus',
    radius: 1.1,
    distance: 11,
    speed: 0.025,
    color: 0xe6b87d,
    specs: {
      diameter: '12,104 km',
      orbitPeriod: '225 Days',
      atmosphere: 'Dense CO2 & Sulfuric Acid',
      features: 'Retrograde rotation & runaway greenhouse'
    }
  },
  {
    name: 'Earth',
    radius: 1.25,
    distance: 16,
    speed: 0.018,
    color: 0x2277bb,
    hasMoon: true,
    specs: {
      diameter: '12,742 km',
      orbitPeriod: '365.25 Days',
      atmosphere: 'Nitrogen & Oxygen',
      features: 'Liquid water oceans & active biosphere'
    }
  },
  {
    name: 'Mars',
    radius: 0.8,
    distance: 21,
    speed: 0.014,
    color: 0xcc4422,
    specs: {
      diameter: '6,779 km',
      orbitPeriod: '687 Days',
      atmosphere: 'Thin CO2',
      features: 'Olympus Mons & polar ice deposits'
    }
  },
  {
    name: 'Jupiter',
    radius: 2.8,
    distance: 28,
    speed: 0.009,
    color: 0xd9a066,
    specs: {
      diameter: '139,820 km',
      orbitPeriod: '11.86 Years',
      atmosphere: 'Hydrogen & Helium',
      features: 'Great Red Spot & 95 confirmed moons'
    }
  },
  {
    name: 'Saturn',
    radius: 2.2,
    distance: 36,
    speed: 0.006,
    color: 0xf3d8a5,
    hasRings: true,
    specs: {
      diameter: '116,460 km',
      orbitPeriod: '29.45 Years',
      atmosphere: 'Hydrogen & Helium',
      features: 'Iconic planetary ice & rock ring system'
    }
  }
];

export const SolarSystem3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData>(PLANETS[2]); // Earth default
  const [isPaused, setIsPaused] = useState(false);
  const [renderMode, setRenderMode] = useState<'realistic' | 'wireframe'>('realistic');

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const planetsGroupRef = useRef<THREE.Group | null>(null);
  const meshesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 32, 55);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    container.replaceChildren(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x222233, 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.PointLight(0xfffaed, 3.5, 300, 0.5);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    // Starfield Particles
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 800;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 300;
      starPositions[i + 1] = (Math.random() - 0.5) * 300;
      starPositions[i + 2] = (Math.random() - 0.5) * 300;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.8,
      transparent: true,
      opacity: 0.6
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // Sun Mesh
    const sunGeometry = new THREE.SphereGeometry(3.6, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      wireframe: renderMode === 'wireframe'
    });
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sunMesh);

    // Sun Glow Halo
    const sunHaloGeom = new THREE.SphereGeometry(4.2, 32, 32);
    const sunHaloMat = new THREE.MeshBasicMaterial({
      color: 0xff8800,
      transparent: true,
      opacity: 0.2,
      wireframe: true
    });
    const sunHalo = new THREE.Mesh(sunHaloGeom, sunHaloMat);
    scene.add(sunHalo);

    // Group for all planets
    const planetsGroup = new THREE.Group();
    planetsGroupRef.current = planetsGroup;
    scene.add(planetsGroup);

    // Create Planets and Orbit Rings
    const createdMeshes: THREE.Mesh[] = [];
    const planetOrbitContainers: { container: THREE.Group; speed: number; planetMesh: THREE.Mesh }[] = [];

    PLANETS.forEach((planet) => {
      // Orbit Ring
      const orbitCurve = new THREE.EllipseCurve(0, 0, planet.distance, planet.distance, 0, 2 * Math.PI, false, 0);
      const points = orbitCurve.getPoints(100);
      const orbitGeom = new THREE.BufferGeometry().setFromPoints(
        points.map(p => new THREE.Vector3(p.x, 0, p.y))
      );
      const orbitMat = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.15
      });
      const orbitLine = new THREE.Line(orbitGeom, orbitMat);
      scene.add(orbitLine);

      // Planet Orbit Pivot Container
      const orbitPivot = new THREE.Group();
      planetsGroup.add(orbitPivot);

      // Planet Mesh
      const pGeom = new THREE.SphereGeometry(planet.radius, 24, 24);
      const pMat = new THREE.MeshStandardMaterial({
        color: planet.color,
        roughness: 0.8,
        wireframe: renderMode === 'wireframe'
      });
      const pMesh = new THREE.Mesh(pGeom, pMat);
      pMesh.position.x = planet.distance;
      orbitPivot.add(pMesh);
      createdMeshes.push(pMesh);

      // Moon for Earth
      if (planet.hasMoon) {
        const moonGeom = new THREE.SphereGeometry(0.3, 16, 16);
        const moonMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.9 });
        const moonMesh = new THREE.Mesh(moonGeom, moonMat);
        moonMesh.position.x = 2.2;
        pMesh.add(moonMesh);
      }

      // Rings for Saturn
      if (planet.hasRings) {
        const ringGeom = new THREE.RingGeometry(2.8, 4.4, 32);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0xc8b082,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.7
        });
        const ringMesh = new THREE.Mesh(ringGeom, ringMat);
        ringMesh.rotation.x = Math.PI / 2.5;
        pMesh.add(ringMesh);
      }

      planetOrbitContainers.push({
        container: orbitPivot,
        speed: planet.speed,
        planetMesh: pMesh
      });
    });

    meshesRef.current = createdMeshes;

    // Mouse Drag Rotation
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;

      scene.rotation.y += deltaX * 0.006;
      scene.rotation.x = Math.max(-0.6, Math.min(0.6, scene.rotation.x + deltaY * 0.004));

      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z = Math.max(25, Math.min(100, camera.position.z + e.deltaY * 0.05));
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: false });

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Rotate Sun
      sunMesh.rotation.y += 0.003;
      sunHalo.rotation.y -= 0.002;

      // Animate Planet Orbits
      if (!isPaused) {
        planetOrbitContainers.forEach(item => {
          item.container.rotation.y += item.speed * 0.5;
          item.planetMesh.rotation.y += 0.02;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 450;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [isPaused, renderMode]);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-xl overflow-hidden shadow-2xl relative">
      {/* Top Header & Interactive Controls */}
      <div className="px-6 py-4 bg-slate-950/80 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
              3D AR Solar System Simulator
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
              Interactive WebGL
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Real-time planetary motion simulator inspired by my Unity AR Solar System project
          </p>
        </div>

        {/* View mode & control toggles */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setRenderMode(prev => prev === 'realistic' ? 'wireframe' : 'realistic');
              soundFX.playBlip();
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              renderMode === 'wireframe'
                ? 'bg-purple-500 text-slate-950 border-purple-400 font-bold'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            {renderMode === 'wireframe' ? 'Wireframe Mode' : 'Realistic Render'}
          </button>

          <button
            onClick={() => {
              setIsPaused(prev => !prev);
              soundFX.playBlip();
            }}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            title={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? <Icons.Gauge className="w-4 h-4 text-emerald-400" /> : <Icons.Activity className="w-4 h-4 text-cyan-400" />}
          </button>
        </div>
      </div>

      {/* 3D WebGL Canvas Viewport */}
      <div className="relative w-full h-[400px] sm:h-[460px] cursor-grab active:cursor-grabbing bg-radial from-slate-900 via-slate-950 to-slate-950">
        <div ref={mountRef} className="w-full h-full" />

        {/* Floating 3D Interaction Instructions */}
        <div className="absolute top-4 left-4 pointer-events-none text-[11px] font-mono text-slate-400 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800">
          <span>🖱️ Drag to rotate 3D view • Scroll to zoom</span>
        </div>

        {/* Planet Quick Select Strip */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1.5 bg-slate-950/80 backdrop-blur-md rounded-xl border border-slate-800 text-xs overflow-x-auto max-w-[95%]">
          {PLANETS.map((planet) => (
            <button
              key={planet.name}
              onClick={() => {
                setSelectedPlanet(planet);
                soundFX.playBlip();
              }}
              className={`px-3 py-1 rounded-lg font-mono transition-all whitespace-nowrap ${
                selectedPlanet.name === planet.name
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold shadow-md shadow-purple-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {planet.name}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Planet Telemetry HUD */}
      <div className="p-5 bg-slate-950/90 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
        <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
          <div className="text-slate-500 uppercase text-[10px]">Planet Target</div>
          <div className="text-sm font-bold text-white mt-0.5">{selectedPlanet.name}</div>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
          <div className="text-slate-500 uppercase text-[10px]">Diameter</div>
          <div className="text-sm font-bold text-cyan-400 mt-0.5">{selectedPlanet.specs.diameter}</div>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
          <div className="text-slate-500 uppercase text-[10px]">Orbital Period</div>
          <div className="text-sm font-bold text-purple-400 mt-0.5">{selectedPlanet.specs.orbitPeriod}</div>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
          <div className="text-slate-500 uppercase text-[10px]">Atmospheric Profile</div>
          <div className="text-xs font-semibold text-slate-300 mt-0.5 truncate">{selectedPlanet.specs.atmosphere}</div>
        </div>
      </div>
    </div>
  );
};

