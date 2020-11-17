import React, { useRef } from 'react';
import './Code.css';
import { Canvas } from 'react-three-fiber';
import { FontLoader } from 'three';
import Modak from '../fonts/Modak.json';
// import { a } from 'react-spring';
import { Plane } from '../Scene/Scene';

function TextMesh({ args, position }) {
  const font = new FontLoader().parse(Modak);

  const textOptions = {
    font,
    size: 25,
    height: 3,
    curveSegments: 15,
    bevelEnabled: true,
    bevelThickness: 2,
    bevelSize: 1,
    bevelSegments: 5,
  };
  const ref = useRef(null);

  return (
    <mesh position={position} ref={ref} castShadow receiveShadow>
      <textBufferGeometry
        attach="geometry"
        args={[args, textOptions]}
        factor={0.7}
      />
      <meshPhysicalMaterial
        clearcoat={1}
        reflectivity={1}
        roughness={0.3}
        // color="#fec89a"
        color="cyan"
        attach="material"
      />
    </mesh>
  );
}
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
