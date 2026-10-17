import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface PlanetData {
  name: string;
  radius: number;
  distance: number;
  speed: number;
  color: number;
  hasRings?: boolean;
  hasMoon?: boolean;
  specs: {
    diameter: string;
    orbitPeriod: string;
    atmosphere: string;
  };
}

const PLANETS: PlanetData[] = [
  {
    name: 'Mercury',
    radius: 0.6,
    distance: 7,
    speed: 0.035,
    color: 0x888888,
    specs: { diameter: '4,879 km', orbitPeriod: '88 Days', atmosphere: 'None' }
  },
  {
    name: 'Venus',
    radius: 1.1,
    distance: 11,
    speed: 0.025,
    color: 0xd4a373,
    specs: { diameter: '12,104 km', orbitPeriod: '225 Days', atmosphere: 'CO2 & Sulfuric Acid' }
  },
  {
    name: 'Earth',
    radius: 1.25,
    distance: 16,
    speed: 0.018,
    color: 0x2b6cb0,
    hasMoon: true,
    specs: { diameter: '12,742 km', orbitPeriod: '365 Days', atmosphere: 'Nitrogen & Oxygen' }
  },
  {
    name: 'Mars',
    radius: 0.8,
    distance: 21,
    speed: 0.014,
    color: 0xc53030,
    specs: { diameter: '6,779 km', orbitPeriod: '687 Days', atmosphere: 'CO2' }
  },
  {
    name: 'Jupiter',
    radius: 2.8,
    distance: 28,
    speed: 0.009,
    color: 0xdd6b20,
    specs: { diameter: '139,820 km', orbitPeriod: '11.8 Years', atmosphere: 'Hydrogen & Helium' }
  },
  {
    name: 'Saturn',
    radius: 2.2,
    distance: 36,
    speed: 0.006,
    color: 0xd69e2e,
    hasRings: true,
    specs: { diameter: '116,460 km', orbitPeriod: '29.5 Years', atmosphere: 'Hydrogen & Helium' }
  }
];

export const SolarSystem3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData>(PLANETS[2]); // Earth
  const [isPaused, setIsPaused] = useState(false);
  const [renderMode, setRenderMode] = useState<'realistic' | 'wireframe'>('realistic');

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 30, 52);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.replaceChildren(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x3f3f46, 1.5);
    scene.add(ambientLight);

    const sunLight = new THREE.PointLight(0xfff5eb, 3.2, 300, 0.5);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    // Stars
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 500;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 300;
      starPositions[i + 1] = (Math.random() - 0.5) * 300;
      starPositions[i + 2] = (Math.random() - 0.5) * 300;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0xa1a1aa,
      size: 0.7,
      transparent: true,
      opacity: 0.5
    });
    scene.add(new THREE.Points(starGeometry, starMaterial));

    // Sun
    const sunGeom = new THREE.SphereGeometry(3.5, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: renderMode === 'wireframe'
    });
    const sunMesh = new THREE.Mesh(sunGeom, sunMat);
    scene.add(sunMesh);

    const planetsGroup = new THREE.Group();
    scene.add(planetsGroup);

    const planetOrbitContainers: { container: THREE.Group; speed: number; planetMesh: THREE.Mesh }[] = [];

    PLANETS.forEach((planet) => {
      // Orbit Line
      const orbitCurve = new THREE.EllipseCurve(0, 0, planet.distance, planet.distance, 0, 2 * Math.PI, false, 0);
      const points = orbitCurve.getPoints(80);
      const orbitGeom = new THREE.BufferGeometry().setFromPoints(
        points.map(p => new THREE.Vector3(p.x, 0, p.y))
      );
      const orbitMat = new THREE.LineBasicMaterial({
        color: 0x52525b,
        transparent: true,
        opacity: 0.35
      });
      scene.add(new THREE.Line(orbitGeom, orbitMat));

      const orbitPivot = new THREE.Group();
      planetsGroup.add(orbitPivot);

      const pGeom = new THREE.SphereGeometry(planet.radius, 24, 24);
      const pMat = new THREE.MeshStandardMaterial({
        color: planet.color,
        roughness: 0.8,
        wireframe: renderMode === 'wireframe'
      });
      const pMesh = new THREE.Mesh(pGeom, pMat);
      pMesh.position.x = planet.distance;
      orbitPivot.add(pMesh);

      if (planet.hasMoon) {
        const moonGeom = new THREE.SphereGeometry(0.3, 16, 16);
        const moonMat = new THREE.MeshStandardMaterial({ color: 0xbbbbbb, roughness: 0.9 });
        const moonMesh = new THREE.Mesh(moonGeom, moonMat);
        moonMesh.position.x = 2.0;
        pMesh.add(moonMesh);
      }

      if (planet.hasRings) {
        const ringGeom = new THREE.RingGeometry(2.8, 4.2, 32);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0xa8a29e,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.6
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

    // Mouse drag
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
      scene.rotation.y += deltaX * 0.005;
      scene.rotation.x = Math.max(-0.6, Math.min(0.6, scene.rotation.x + deltaY * 0.003));
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => { isDragging = false; };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z = Math.max(25, Math.min(90, camera.position.z + e.deltaY * 0.05));
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: false });

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      sunMesh.rotation.y += 0.002;
      if (!isPaused) {
        planetOrbitContainers.forEach(item => {
          item.container.rotation.y += item.speed * 0.4;
          item.planetMesh.rotation.y += 0.015;
        });
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 420;
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
    <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-xs">
      {/* Header Bar */}
      <div className="px-5 py-3.5 bg-zinc-50 border-b border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-zinc-900">
            Unity AR Solar System (WebGL Preview)
          </h3>
          <p className="text-xs text-zinc-500">
            Interactive planetary orbit model built to test spatial 3D concepts
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setRenderMode(prev => prev === 'realistic' ? 'wireframe' : 'realistic')}
            className={`px-2.5 py-1 rounded text-xs font-medium border transition-colors ${
              renderMode === 'wireframe'
                ? 'bg-zinc-900 text-white border-zinc-900'
                : 'bg-white border-zinc-200 text-zinc-700 hover:text-black shadow-2xs'
            }`}
          >
            {renderMode === 'wireframe' ? 'Wireframe' : 'Standard'}
          </button>

          <button
            onClick={() => setIsPaused(prev => !prev)}
            className="px-2.5 py-1 rounded border border-zinc-200 bg-white text-xs text-zinc-700 hover:text-black shadow-2xs cursor-pointer"
          >
            {isPaused ? 'Resume' : 'Pause'}
          </button>
        </div>
      </div>

      {/* 3D Canvas in deep space viewport */}
      <div className="relative w-full h-[380px] sm:h-[420px] cursor-grab active:cursor-grabbing bg-[#09090b]">
        <div ref={mountRef} className="w-full h-full" />

        <div className="absolute top-3 left-3 text-[11px] font-mono text-zinc-400 pointer-events-none">
          Click & drag to rotate • Scroll to zoom
        </div>

        {/* Planet Selector */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1 bg-zinc-900/90 rounded-lg border border-zinc-700 text-xs">
          {PLANETS.map((planet) => (
            <button
              key={planet.name}
              onClick={() => setSelectedPlanet(planet)}
              className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                selectedPlanet.name === planet.name
                  ? 'bg-white text-zinc-950 font-medium'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {planet.name}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Planet Stats */}
      <div className="p-4 bg-zinc-50 border-t border-zinc-200 grid grid-cols-3 gap-3 text-xs">
        <div>
          <span className="text-zinc-500 block">Planet</span>
          <span className="text-zinc-900 font-semibold">{selectedPlanet.name}</span>
        </div>
        <div>
          <span className="text-zinc-500 block">Diameter</span>
          <span className="text-zinc-900 font-semibold">{selectedPlanet.specs.diameter}</span>
        </div>
        <div>
          <span className="text-zinc-500 block">Orbit Period</span>
          <span className="text-zinc-900 font-semibold">{selectedPlanet.specs.orbitPeriod}</span>
        </div>
      </div>
    </div>
  );
};
