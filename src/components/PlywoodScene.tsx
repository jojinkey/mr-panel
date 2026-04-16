"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

function createWoodTexture(variant: number, width = 512, height = 1024) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;

  const palettes = [
    { base: "#6B4226", mid: "#8B5E3C", light: "#A67B5B", grain: "#4A2E1A" },
    { base: "#C8A97E", mid: "#B89468", light: "#D4B896", grain: "#8B6343" },
    { base: "#A0784E", mid: "#B8956A", light: "#CCAB82", grain: "#6B4226" },
    { base: "#D4A76A", mid: "#E0BC8A", light: "#ECD1A8", grain: "#9C7A4E" },
  ];

  const p = palettes[variant % palettes.length];

  ctx.fillStyle = p.base;
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 120; i++) {
    ctx.beginPath();
    ctx.strokeStyle = i % 3 === 0 ? p.grain : i % 3 === 1 ? p.mid : p.light;
    ctx.lineWidth = 0.3 + Math.random() * 2.5;
    ctx.globalAlpha = 0.08 + Math.random() * 0.2;
    const x = Math.random() * width;
    ctx.moveTo(x, 0);
    for (let y = 0; y < height; y += 3) {
      ctx.lineTo(x + Math.sin(y * 0.008 + i * 0.7) * (3 + Math.random() * 8), y);
    }
    ctx.stroke();
  }

  ctx.globalAlpha = 0.08;
  for (let k = 0; k < 3; k++) {
    const kx = 60 + Math.random() * (width - 120);
    const ky = 100 + Math.random() * (height - 200);
    const radius = 10 + Math.random() * 18;
    const grad = ctx.createRadialGradient(kx, ky, 0, kx, ky, radius);
    grad.addColorStop(0, p.grain);
    grad.addColorStop(0.6, p.mid);
    grad.addColorStop(1, "transparent");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(kx, ky, radius, radius * 1.4, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.globalAlpha = 1;
  return canvas;
}

function createEdgeTexture(numLayers = 7, width = 256, height = 64) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;

  const layerHeight = height / numLayers;
  const colors = ["#D4B896", "#8B6343", "#C8A97E", "#6B4226", "#BFA37A", "#7A5232", "#D4B896"];

  for (let i = 0; i < numLayers; i++) {
    ctx.fillStyle = colors[i % colors.length];
    ctx.fillRect(0, i * layerHeight, width, layerHeight);
    if (i > 0) {
      ctx.fillStyle = "#E8D5B0";
      ctx.globalAlpha = 0.6;
      ctx.fillRect(0, i * layerHeight - 0.5, width, 1);
      ctx.globalAlpha = 1;
    }
  }

  return canvas;
}

function PlywoodPlank({
  position,
  rotation,
  index,
  dimensions,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  index: number;
  dimensions: [number, number, number];
}) {
  const groupRef = useRef<THREE.Group>(null);

  const materials = useMemo(() => {
    const faceCanvas = createWoodTexture(index);
    const faceTexture = new THREE.CanvasTexture(faceCanvas);
    const faceMat = new THREE.MeshStandardMaterial({
      map: faceTexture,
      roughness: 0.6,
      metalness: 0.02,
    });

    const edgeCanvas = createEdgeTexture(7);
    const edgeTexture = new THREE.CanvasTexture(edgeCanvas);
    const edgeMat = new THREE.MeshStandardMaterial({
      map: edgeTexture,
      roughness: 0.7,
      metalness: 0.02,
    });

    return [edgeMat, edgeMat, edgeMat, edgeMat, faceMat, faceMat];
  }, [index]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    // All panels share the same Y float phase so they stay aligned at the same level
    groupRef.current.position.y = position[1] + Math.sin(t * 0.4) * 0.06;
    groupRef.current.rotation.x = rotation[0] + Math.sin(t * 0.25 + index * 1.3) * 0.012;
    groupRef.current.rotation.y = rotation[1] + Math.cos(t * 0.3 + index * 0.9) * 0.01;
    groupRef.current.rotation.z = rotation[2] + Math.sin(t * 0.2 + index * 1.7) * 0.008;
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <mesh castShadow receiveShadow material={materials}>
        <boxGeometry args={dimensions} />
      </mesh>
    </group>
  );
}

function FloatingPlanks() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const scale = Math.min(viewport.width / 10, 1);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.08) * 0.02;
  });

  // Symmetric layout: panels evenly spaced, same vertical center, slight angle variations
  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      {/* Far left plank — dark walnut */}
      <PlywoodPlank position={[-3.6, 0, 0.2]} rotation={[0.0, 0.18, 0.02]} index={0} dimensions={[1.3, 3.2, 0.12]} />
      {/* Inner left plank — light oak, slightly behind */}
      <PlywoodPlank position={[-1.4, 0, -0.8]} rotation={[0.0, 0.1, -0.01]} index={1} dimensions={[1.2, 3.0, 0.11]} />
      {/* Center plank — medium birch, behind text */}
      <PlywoodPlank position={[0, 0, -1.6]} rotation={[0.0, 0.0, 0.0]} index={3} dimensions={[1.4, 3.4, 0.13]} />
      {/* Inner right plank — blonde maple, slightly behind */}
      <PlywoodPlank position={[1.4, 0, -0.8]} rotation={[0.0, -0.1, 0.01]} index={2} dimensions={[1.2, 3.0, 0.11]} />
      {/* Far right plank — dark walnut */}
      <PlywoodPlank position={[3.6, 0, 0.2]} rotation={[0.0, -0.18, -0.02]} index={0} dimensions={[1.3, 3.2, 0.12]} />
    </group>
  );
}

export default function PlywoodScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onCreated = useCallback(({ gl }: { gl: THREE.WebGLRenderer }) => {
    const canvas = gl.domElement;
    canvas.addEventListener("webglcontextlost", (e) => {
      e.preventDefault();
    });
    canvas.addEventListener("webglcontextrestored", () => {
      gl.setSize(canvas.clientWidth, canvas.clientHeight);
    });
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        ref={canvasRef}
        shadows
        camera={{ position: [0, 0.5, 6], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
        onCreated={onCreated}
      >
        <ambientLight intensity={0.6} color="#FFF5E1" />
        <directionalLight position={[4, 6, 5]} intensity={1.0} color="#FFD89E" castShadow />
        <directionalLight position={[-4, 3, -3]} intensity={0.35} color="#FFE4C4" />
        <pointLight position={[0, 2, 3]} intensity={0.2} color="#FFECD2" />
        <FloatingPlanks />
        <Environment preset="apartment" environmentIntensity={0.25} />
      </Canvas>
    </div>
  );
}
