import React from 'react';
import './Code.css';
import { Canvas } from 'react-three-fiber';
import { Plane, TextMesh } from '../Scene/Scene';

export default function Code() {
  return (
    <div className="Code">
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
          {/* <a.div> */}
          <Plane />
          <TextMesh args="CODE" position={[-50, 50, 0]} />
          {/* <h1> PWA Weather App</h1>
          </a.div> */}
        </group>
      </Canvas>
    </div>
  );
}
