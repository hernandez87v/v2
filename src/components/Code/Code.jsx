import React from 'react';
import './Code.css';
import { Canvas } from 'react-three-fiber';
import { Lighting, Plane, TextMesh } from '../Scene/Scene';
import CubeText from '../Skills/CubeText';

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
        <Lighting />
        {/* <a.div> */}
        <Plane />
        <TextMesh args="<code>" position={[-45, 50, 0]} />
        {/* <h1> PWA Weather App</h1>
          </a.div> */}
      </Canvas>
      <CubeText />
    </div>
  );
}
