import React from 'react';
import './Skills.css';
import { Canvas } from 'react-three-fiber';
import { Lighting, Plane, TextMesh } from '../Scene/Scene';
import { Text } from 'drei';
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
          <TextMesh args={'<skills>'} position={[-45, 50, 0]} />
          {/* <Text
            color="white"
            anchorX="center"
            anchorY="middle"
            textAlign="justify"
            lineHeight=".90"
            fontSize="8"
            maxWidth="100"
            // letterSpacing="0.29"
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          >
            React ThreeJS Javascript ExpressJS NodeJS Ruby RubyOnRails AJAX
            JQuery HTML CSS Docker Google Analytics Gatsby Jira Firebase Figma
            Fusion360 Blender Testing with Mocha Chai Selenium RSpec Jest
            Cypress SQL Databases PSQL
          </Text> */}

          <TextMesh args={'</skills>'} position={[-45, -65, 0]} />
        </group>
      </Canvas>
      <h1>
        {' '}
        React - ThreeJS - Javascript - ExpressJS - NodeJS - Ruby - RubyOnRails -
        AJAX - JQuery - HTML - CSS - Docker - Google - Analytics - Gatsby - Jira
        - Firebase - Figma - Fusion360 - Blender - Mocha - Chai - Selenium -
        RSpec - Jest - Cypress - PSQL
      </h1>
    </div>
  );
}
