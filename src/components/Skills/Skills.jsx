import React, { Suspense } from 'react';
import './Skills.css';
import { Canvas } from 'react-three-fiber';
import { Lighting, Plane, TextMesh } from '../Scene/Scene';
import Model from '../../React1';

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
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <TextMesh args={'<skills>'} position={[-45, 70, 0]} />
          <TextMesh args={'</skills>'} position={[-45, -75, 0]} />
        </group>
      </Canvas>
      {/* <h1>
        {' '}
        React - ThreeJS - Javascript - ExpressJS - NodeJS - Ruby - RubyOnRails -
        AJAX - JQuery - HTML - CSS - Docker - Google - Analytics - Gatsby - Jira
        - Firebase - Figma - Fusion360 - Blender - Mocha - Chai - Selenium -
        RSpec - Jest - Cypress - PSQL
      </h1> */}
    </div>
  );
}
