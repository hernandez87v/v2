import React from 'react';
import './Skills.css';
import { Canvas } from 'react-three-fiber';
import { Plane, TextMesh } from '../Scene/Scene';

export default function Skills() {
  return (
    <div className="Skills">
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [0, 0, 100], fov: 100 }}
        gl={{
          powerPreference: 'high-performance',
        }}
      >
        <ambientLight intensity={0.1} />
        <spotLight
          intensity={0.4}
          position={[-80, 90, 250]}
          penumbra={1}
          castShadow
        />
        <group>
          <Plane />
          <TextMesh args="SKILLS" position={[-50, 50, 0]} />
        </group>
      </Canvas>
    </div>
  );
}
