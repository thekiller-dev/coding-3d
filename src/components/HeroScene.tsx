// skill: frontend-react — HeroScene per checklist §5
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const COLS = 110;
const ROWS = 55;
const SEP = 0.16;

function paintWave(attribute: THREE.BufferAttribute, t: number) {
  const arr = attribute.array as Float32Array;
  let k = 0;
  for (let x = 0; x < COLS; x++) {
    for (let z = 0; z < ROWS; z++) {
      arr[k * 3 + 1] = Math.sin(x * 0.28 + t) * 0.45 + Math.cos(z * 0.32 + t * 0.8) * 0.45;
      k++;
    }
  }
  attribute.needsUpdate = true;
}

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 2.4, 9);
    camera.lookAt(0, 0, 0);

    const count = COLS * ROWS;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [new THREE.Color('#6366f1'), new THREE.Color('#8b5cf6'), new THREE.Color('#22d3ee')];
    let i = 0;
    for (let x = 0; x < COLS; x++) {
      for (let z = 0; z < ROWS; z++) {
        positions[i * 3] = (x - COLS / 2) * SEP;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = (z - ROWS / 2) * SEP;
        const c = palette[(x + z) % palette.length] as THREE.Color;
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
        i++;
      }
    }
    const geometry = new THREE.BufferGeometry();
    const positionAttribute = new THREE.BufferAttribute(positions, 3);
    geometry.setAttribute('position', positionAttribute);
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let raf = 0;
    let running = false;
    let t = 0;

    const render = () => renderer.render(scene, camera);

    const tick = () => {
      if (!running) return;
      t += 0.012;
      paintWave(positionAttribute, t);
      points.rotation.y = Math.sin(t * 0.12) * 0.12;
      render();
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      render();
    };

    let observer: IntersectionObserver | null = null;
    if (reduceMotion) {
      paintWave(positionAttribute, 1.2);
      render();
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) start();
          else stop();
        },
        { threshold: 0 },
      );
      observer.observe(mount);
      document.addEventListener('visibilitychange', stop);
      window.addEventListener('resize', onResize);
    }

    return () => {
      stop();
      observer?.disconnect();
      document.removeEventListener('visibilitychange', stop);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" className="absolute inset-0" />;
}
