import React, { Suspense, useState } from 'react';
import './Welcome.css';
import { Canvas } from 'react-three-fiber';
import { Plane, WLighting, WTextMesh } from '../../Scene/Scene';

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
        <group>
          <Plane />
          <WTextMesh args="Good" position={[-55, 40, 0]} />
          <Suspense fallback={null}>
            {time < 12 ? (
              <WTextMesh args="Morning," position={[-55, 15, 0]} />
            ) : time < 18 ? (
              <WTextMesh args="Afternoon," position={[-55, 15, 0]} />
            ) : (
              <WTextMesh args="Evening," position={[-55, 15, 0]} />
            )}
          </Suspense>
          <WTextMesh args="my name" position={[-55, -10, 0]} />
          <WTextMesh args="is Vlad." position={[-55, -35, 0]} />
        </group>
      </Canvas>
    </div>
  );
}
