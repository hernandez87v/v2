import React, { useRef, useState } from 'react';
import { FontLoader } from 'three';
import Modak from '../fonts/Modak.json';

export function Plane() {
  const ref = useRef(null);
  return (
    <mesh ref={ref} position={[0, 0, -5]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color="#0e1119" />
    </mesh>
  );
}

export function TextMesh({ args, position }) {
  const font = new FontLoader().parse(Modak);

  const textOptions = {
    font,
    size: 25,
    height: 2,
    curveSegments: 15,
    bevelEnabled: true,
    bevelThickness: 2,
    bevelSize: 0.9,
    bevelSegments: 5,
  };
  const ref = useRef(null);

  const [hovered, setHover] = useState(false);

  return (
    <mesh
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      position={position}
      ref={ref}
      castShadow
      receiveShadow
    >
      <textBufferGeometry
        attach="geometry"
        args={[args, textOptions]}
        factor={0.7}
      />
      <meshPhysicalMaterial
        clearcoat={1}
        reflectivity={1}
        roughness={0.3}
        color={hovered ? 'black' : 'cyan'}
        attach="material"
      />
    </mesh>
  );
}

export function Lighting() {
  return (
    <mesh>
      <ambientLight intensity={0.1} />
      <spotLight
        intensity={0.4}
        position={[-80, 90, 250]}
        penumbra={1}
        castShadow
      />
    </mesh>
  );
}

// function Box({ args, position, map, color, ...props }) {
//   const ref = useRef();

//   return (
//     <mesh position={position} {...props} ref={ref}>
//       <boxBufferGeometry attach="geometry" args={args} />
//       {/* <meshStandardMaterial color={color} map={map} /> */}
//       <MeshWobbleMaterial
//         attach="material"
//         color={color}
//         // map={map}
//         speed={2}
//         factor={0.7}
//       />
//     </mesh>
//   );
// }
