"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useIsMobile } from "@/hooks";

const ACCENT_COLOR = new THREE.Color("#3b82f6");
const DIM_COLOR = new THREE.Color("#222222");

function ParticleNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const { viewport } = useThree();
  const isMobile = useIsMobile();

  const PARTICLE_COUNT = isMobile ? 600 : 1500;
  const CONNECTION_DISTANCE = isMobile ? 1.8 : 1.5;
  const MOUSE_RADIUS = 2.5;

  const { positions, velocities, originalPositions } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const vel = new Float32Array(PARTICLE_COUNT * 3);
    const orig = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      // Distribute in a sphere with some clustering
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 3;

      pos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6; // Flatten Y
      pos[i3 + 2] = r * Math.cos(phi) * 0.5;

      orig[i3] = pos[i3];
      orig[i3 + 1] = pos[i3 + 1];
      orig[i3 + 2] = pos[i3 + 2];

      vel[i3] = (Math.random() - 0.5) * 0.002;
      vel[i3 + 1] = (Math.random() - 0.5) * 0.002;
      vel[i3 + 2] = (Math.random() - 0.5) * 0.001;
    }

    return {
      positions: pos,
      velocities: vel,
      originalPositions: orig,
    };
  }, [PARTICLE_COUNT]);

  const pointColors = useMemo(() => {
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const brightness = 0.3 + Math.random() * 0.7;
      colors[i3] = ACCENT_COLOR.r * brightness;
      colors[i3 + 1] = ACCENT_COLOR.g * brightness;
      colors[i3 + 2] = ACCENT_COLOR.b * brightness;
    }
    return colors;
  }, [PARTICLE_COUNT]);

  const maxLines = PARTICLE_COUNT * 6;
  const linePositions = useMemo(
    () => new Float32Array(maxLines * 6),
    [maxLines]
  );
  const lineColors = useMemo(
    () => new Float32Array(maxLines * 6),
    [maxLines]
  );

  const handlePointerMove = useCallback(
    (e: THREE.Event & { point?: THREE.Vector3 }) => {
      if (e.point) {
        mouseRef.current.set(e.point.x, e.point.y);
      }
    },
    []
  );

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return;

    const posAttr = pointsRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    const posArray = posAttr.array as Float32Array;
    const time = state.clock.elapsedTime;

    // Animate particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // Gentle drift
      posArray[i3] += velocities[i3] + Math.sin(time * 0.3 + i * 0.1) * 0.001;
      posArray[i3 + 1] +=
        velocities[i3 + 1] + Math.cos(time * 0.2 + i * 0.05) * 0.001;
      posArray[i3 + 2] += velocities[i3 + 2];

      // Spring back to original position
      posArray[i3] += (originalPositions[i3] - posArray[i3]) * 0.005;
      posArray[i3 + 1] += (originalPositions[i3 + 1] - posArray[i3 + 1]) * 0.005;
      posArray[i3 + 2] += (originalPositions[i3 + 2] - posArray[i3 + 2]) * 0.005;

      // Mouse interaction: attract nearby particles
      const dx = mouseRef.current.x - posArray[i3];
      const dy = mouseRef.current.y - posArray[i3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MOUSE_RADIUS && dist > 0.01) {
        const force = (1 - dist / MOUSE_RADIUS) * 0.02;
        posArray[i3] += dx * force;
        posArray[i3 + 1] += dy * force;
      }
    }
    posAttr.needsUpdate = true;

    // Build connections
    const lineGeo = linesRef.current.geometry;
    const linePosAttr = lineGeo.attributes.position as THREE.BufferAttribute;
    const lineColAttr = lineGeo.attributes.color as THREE.BufferAttribute;
    const lPos = linePosAttr.array as Float32Array;
    const lCol = lineColAttr.array as Float32Array;

    let lineIndex = 0;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      if (lineIndex >= maxLines) break;
      const i3 = i * 3;

      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        if (lineIndex >= maxLines) break;
        const j3 = j * 3;

        const dx = posArray[i3] - posArray[j3];
        const dy = posArray[i3 + 1] - posArray[j3 + 1];
        const dz = posArray[i3 + 2] - posArray[j3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE) {
          const li = lineIndex * 6;
          const opacity = 1 - dist / CONNECTION_DISTANCE;

          lPos[li] = posArray[i3];
          lPos[li + 1] = posArray[i3 + 1];
          lPos[li + 2] = posArray[i3 + 2];
          lPos[li + 3] = posArray[j3];
          lPos[li + 4] = posArray[j3 + 1];
          lPos[li + 5] = posArray[j3 + 2];

          const c = DIM_COLOR.clone().lerp(ACCENT_COLOR, opacity * 0.4);
          lCol[li] = c.r * opacity;
          lCol[li + 1] = c.g * opacity;
          lCol[li + 2] = c.b * opacity;
          lCol[li + 3] = c.r * opacity;
          lCol[li + 4] = c.g * opacity;
          lCol[li + 5] = c.b * opacity;

          lineIndex++;
        }
      }
    }

    // Clear remaining lines
    for (let i = lineIndex; i < maxLines; i++) {
      const li = i * 6;
      lPos[li] = lPos[li + 1] = lPos[li + 2] = 0;
      lPos[li + 3] = lPos[li + 4] = lPos[li + 5] = 0;
      lCol[li] = lCol[li + 1] = lCol[li + 2] = 0;
      lCol[li + 3] = lCol[li + 4] = lCol[li + 5] = 0;
    }

    linePosAttr.needsUpdate = true;
    lineColAttr.needsUpdate = true;
    lineGeo.setDrawRange(0, lineIndex * 2);

    // Slow scene rotation
    pointsRef.current.rotation.y = time * 0.05;
    linesRef.current.rotation.y = time * 0.05;
  });

  return (
    <group>
      {/* Invisible plane for mouse raycasting */}
      <mesh
        position={[0, 0, 0]}
        onPointerMove={handlePointerMove}
        visible={false}
      >
        <planeGeometry args={[viewport.width * 2, viewport.height * 2]} />
        <meshBasicMaterial />
      </mesh>

      {/* Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[pointColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Connection lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[lineColors, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.3}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export function ParticleMeshCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}
