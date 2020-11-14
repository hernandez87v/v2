import React, { useRef } from 'react';
import './Skills.css';
import { Canvas } from 'react-three-fiber';
import { FontLoader } from 'three';
import Modak from '../fonts/Modak.json';

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
        color="teal"
        attach="material"
      />
    </mesh>
  );
}

function Plane({ position }) {
  const ref = useRef(null);

  return (
    <mesh ref={ref} position={position} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color="#61e8e1" />
    </mesh>
  );
}
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
        <ambientLight intensity={0.2} />
        <spotLight
          intensity={0.5}
          position={[-100, 40, 180]}
          penumbra={1}
          castShadow
        />
        <group>
          <Plane position={[0, 0, -20]} />
          <TextMesh args="Code" position={[-50, 30, 0]} />
        </group>
      </Canvas>
    </div>
  );
}
