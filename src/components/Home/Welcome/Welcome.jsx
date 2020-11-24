import React, { useState } from 'react';
import './Welcome.css';
import { Canvas } from 'react-three-fiber';
import { Plane, WLighting, TextMesh } from '../../Scene/Scene';

export default function Welcome() {
  const date = new Date();
  const [hour] = useState(date);
  const time = hour.getHours();

  return (
    <div className="Welcome">
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [0, 0, 100], fov: 100 }}
        gl={{
          powerPreference: 'high-performance',
        }}
      >
        <WLighting />
        <Plane />
        <TextMesh args="<greeting>" position={[-60, 75, 0]} />
        <TextMesh args="Good" position={[-55, 40, 0]} />
        {time < 12 ? (
          <TextMesh args="Morning," position={[-55, 15, 0]} />
        ) : time < 18 ? (
          <TextMesh args="Afternoon," position={[-55, 15, 0]} />
        ) : (
          <TextMesh args="Evening," position={[-55, 15, 0]} />
        )}
        <TextMesh args="my name" position={[-55, -10, 0]} />
        <TextMesh args="is Vlad." position={[-55, -35, 0]} />
        <TextMesh args="</greeting>" position={[-60, -65, 0]} />
      </Canvas>
    </div>
  );
}
