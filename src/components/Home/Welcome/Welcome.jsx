import React, { useRef } from 'react';
import './Welcome.css';
import { Canvas } from 'react-three-fiber';
import { FontLoader } from 'three';
import Modak from './Modak.json';
// import Constellation from '../../Constellation/Constellation';
import { OrbitControls, Stars, Text } from 'drei';

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
    bevelOffset: -0.1,
    bevelSegments: 4,
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
        clearcoat={1}
        reflectivity={1}
        roughness={0}
        color="lemonchiffon"
        attach="material"
      />
      <OrbitControls
        enableZoom={false}
        enabled={false}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </mesh>
  );
}
// function Plane() {
//   const ref = useRef(null);
//   // const [ref, api] = usePlane(() => ({
//   //   position: [0, -1, 0],
//   //   rotation: [-Math.PI / 2, 0, 0],
//   //   onCollide: () => {
//   //     api.position.set(0, 0, 0);
//   //     api.velocity.set(0, 1, 0);
//   //   },
//   // }));

//   return (
//     <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
//       <planeBufferGeometry attach="geometry" args={[300, 300]} />
//       <shadowMaterial attach="material" color="#246623" opacity={0.2} />
//     </mesh>
//   );
// }
export default function Welcome() {
  return (
    <div className="Welcome">
      <Canvas colorManagement camera={{ position: [0, 30, 100], fov: 85 }}>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.7} position={[0, 200, 60]} penumbra={1} />
        <spotLight intensity={0.5} position={[200, 100, 100]} penumbra={1} />
        <spotLight intensity={0.5} position={[-200, -150, -150]} penumbra={1} />
        <group>
          <TextMesh args="Hello," position={[-43, 20, 0]} />
          <TextMesh args="my name" position={[-43, 0, 0]} />
          <TextMesh args="is Vlad," position={[-43, -20, 0]} />
          <TextMesh args="Web Developer." position={[-43, -40, 0]} />
          <Stars radius={75} count={1000} />
          <Text
            color="gray"
            anchorX="center"
            anchorY="top"
            textAlign="left"
            lineHeight="1"
            fontSize="16"
            maxWidth="4"
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          >
            WEB DEVELOPER
          </Text>
        </group>
      </Canvas>
    </div>
  );
}
