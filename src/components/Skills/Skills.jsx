import React, { Suspense } from 'react';
import './Skills.css';
import { Canvas } from 'react-three-fiber';
import { Lighting, Plane, TextMesh } from '../Scene/Scene';
// import Model from '../../Html';

export default function Skills() {
  return (
    <div className="Skills">
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [0, 0, 100], fov: 100 }}
      >
        <Lighting />
        <group>
          <Plane />
          {/* <Suspense fallback={null}>
            <Model />
          </Suspense> */}
          <TextMesh args={'SKILLS'} position={[-50, 50, 0]} />
        </group>
      </Canvas>
    </div>
  );
}
