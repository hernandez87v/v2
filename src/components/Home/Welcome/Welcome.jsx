import React, { useRef, useState } from 'react';
import './Welcome.css';
import { Canvas } from 'react-three-fiber';
import { FontLoader } from 'three';
import Modak from './Modak.json';
// import Constellation from '../../Constellation/Constellation';
import { OrbitControls, Stars } from 'drei';

function Planet({ args, position, color, ...props }) {
  const ref = useRef();
  return (
    <mesh position={position} {...props} ref={ref}>
      <sphereBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial color={color} attach="material" />
    </mesh>
  );
}

function TextMesh({ args, position }) {
  const font = new FontLoader().parse(Modak);

  const textOptions = {
    font,
    size: 15,
    height: 3,
    curveSegments: 15,
    bevelEnabled: true,
    bevelThickness: 1.2,
    bevelSize: 1,
    bevelSegments: 2,
  };
  const ref = useRef(null);

  return (
    <mesh position={position} ref={ref}>
      <textBufferGeometry
        attach="geometry"
        args={[args, textOptions]}
        factor={0.7}
      />
      <meshPhysicalMaterial
        clearcoat={0}
        reflectivity={1}
        roughness={1}
        // metalness={1}
        color="lemonchiffon"
        attach="material"
      />
      <OrbitControls
        enableZoom={false}
        enabled={false}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </mesh>
  );
}

export default function Welcome() {
  // const date = new Date();
  // const hour = date.getHours();
  // this.setState({
  //   hour,
  // });

  const date = new Date();
  const [hour] = useState(date);
  console.log(hour.getHours());

  return (
    <div className="Welcome">
      <Canvas colorManagement camera={{ position: [0, 30, 100], fov: 85 }}>
        <ambientLight intensity={0.2} />
        <spotLight intensity={0.2} position={[50, 80, 30]} penumbra={1} />
        <spotLight intensity={0.2} position={[70, 30, 30]} penumbra={1} />
        <spotLight intensity={0.2} position={[-200, -150, -150]} penumbra={1} />
        <group>
          {hour.getHours() < 18 ? (
            <Planet
              clearcoat={0}
              reflectivity={0}
              roughness={1}
              args={[50, 32, 32]}
              position={[0, 90, -310]}
              color="orange"
            />
          ) : (
            <Planet
              clearcoat={0}
              reflectivity={0}
              roughness={1}
              args={[10, 32, 32]}
              position={[150, 50, 50]}
              color="gray"
            />
          )}

          {/* <TextMesh args="Vlad Hernandez" position={[-50, 0, 0]} />
          <TextMesh args="Web Developer" position={[-43, -15, 0]} /> */}
          <TextMesh args="Hello," position={[-43, 30, 0]} />
          <TextMesh args="my name" position={[-43, 10, 0]} />
          <TextMesh args="is Vlad," position={[-43, -10, 0]} />
          <TextMesh args=">Web" position={[-43, -30, 0]} />
          <TextMesh args="Developer." position={[-43, -50, 0]} />
          <Stars radius={75} count={1000} />
        </group>
      </Canvas>
    </div>
  );
}
