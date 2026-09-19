// skill: frontend-react — Paper3D per checklist §5
// Certificat 3D custom (la source Pro threeui 3d-paper n'est pas distribuée) : plan texturé
// procédural + parallaxe pointeur, DPR capé, pause hors-écran, cleanup complet.
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Reveal from './Reveal';

function drawCertificate(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.fillStyle = '#0e1226';
  ctx.fillRect(0, 0, w, h);
  const border = ctx.createLinearGradient(0, 0, w, h);
  border.addColorStop(0, '#6366f1');
  border.addColorStop(0.5, '#8b5cf6');
  border.addColorStop(1, '#22d3ee');
  ctx.strokeStyle = border;
  ctx.lineWidth = 6;
  ctx.strokeRect(28, 28, w - 56, h - 56);
  ctx.strokeStyle = 'rgba(148,163,255,0.25)';
  ctx.lineWidth = 1;
  ctx.strokeRect(48, 48, w - 96, h - 96);
  ctx.textAlign = 'center';
  ctx.fillStyle = '#22d3ee';
  ctx.font = '700 34px "Space Mono", monospace';
  ctx.fillText('CODING PRO 3D', w / 2, 130);
  ctx.fillStyle = '#e2e8f0';
  ctx.font = '700 64px "Space Grotesk", sans-serif';
  ctx.fillText('CERTIFICAT', w / 2, 230);
  ctx.fillStyle = '#94a3b8';
  ctx.font = '400 30px "DM Sans", sans-serif';
  ctx.fillText('décerné à', w / 2, 300);
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 72px "Space Grotesk", sans-serif';
  ctx.fillText('Ton Nom Ici', w / 2, 390);
  ctx.fillStyle = '#94a3b8';
  ctx.font = '400 30px "Space Mono", monospace';
  ctx.fillText('THREE.JS · WEBGL · GLSL · 60 FPS', w / 2, 460);
  ctx.strokeStyle = border;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(w / 2, 545, 34, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = '#8b5cf6';
  ctx.font = '700 28px "Space Mono", monospace';
  ctx.fillText('3D', w / 2, 555);
}

function CertificateScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Garde-fou mobile : sans WebGL, on ne monte rien (le contenu reste visible).
    const probe = document.createElement('canvas');
    if (!probe.getContext('webgl2') && !probe.getContext('webgl')) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 50);
    camera.position.set(0, 0, 6);

    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 640;
    const ctx = canvas.getContext('2d');
    if (ctx) drawCertificate(ctx, canvas.width, canvas.height);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;

    const paper = new THREE.Mesh(
      new THREE.PlaneGeometry(3.6, 2.25),
      new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide }),
    );
    scene.add(paper);

    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = 256;
    glowCanvas.height = 256;
    const gctx = glowCanvas.getContext('2d');
    if (gctx) {
      const grad = gctx.createRadialGradient(128, 128, 10, 128, 128, 128);
      grad.addColorStop(0, 'rgba(139,92,246,0.55)');
      grad.addColorStop(0.5, 'rgba(99,102,241,0.18)');
      grad.addColorStop(1, 'rgba(9,11,24,0)');
      gctx.fillStyle = grad;
      gctx.fillRect(0, 0, 256, 256);
    }
    const glowTexture = new THREE.CanvasTexture(glowCanvas);
    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: glowTexture, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    glow.scale.set(6.5, 4.5, 1);
    glow.position.z = -1.2;
    scene.add(glow);

    const target = { x: 0, y: 0 };
    const onPointer = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 0.7;
      target.y = -((e.clientY - rect.top) / rect.height - 0.5) * 0.5;
    };

    let raf = 0;
    let running = false;
    let t = 0.6;
    const render = () => renderer.render(scene, camera);
    const tick = () => {
      if (!running) return;
      t += 0.012;
      paper.position.y = Math.sin(t * 0.9) * 0.12;
      paper.rotation.y += (target.x - paper.rotation.y) * 0.06;
      paper.rotation.x += (target.y - paper.rotation.x) * 0.06;
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

    let observer: IntersectionObserver | null = null;
    if (reduceMotion) {
      paper.rotation.set(0, -0.12, 0);
      render();
    } else {
      mount.addEventListener('pointermove', onPointer);
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) start();
          else stop();
        },
        { threshold: 0 },
      );
      observer.observe(mount);
      document.addEventListener('visibilitychange', stop);
      window.addEventListener('resize', () => {
        camera.aspect = mount.clientWidth / mount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        render();
      });
    }

    return () => {
      stop();
      observer?.disconnect();
      mount.removeEventListener('pointermove', onPointer);
      document.removeEventListener('visibilitychange', stop);
      paper.geometry.dispose();
      (paper.material as THREE.Material).dispose();
      texture.dispose();
      glowTexture.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" className="absolute inset-0 cursor-grab active:cursor-grabbing" />;
}

export default function Paper3D() {
  return (
    <section id="papier" aria-labelledby="papier-titre" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <Reveal>
            <p className="mb-4 font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase">Projet final</p>
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              Repars avec un certificat <span className="text-gradient">qui en jette.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg">
              Ton diplôme de fin de formation : un certificat 3D interactif que tu codes toi-même —
              parallaxe, verre, textures procédurales. Bouge ta souris dessus.
            </p>
            <p className="mt-4 font-mono text-xs tracking-widest text-cyan-400 uppercase">
              drag · tilt · glow — 100% code élève
            </p>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="panel relative aspect-[4/3] overflow-hidden">
            <CertificateScene />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
