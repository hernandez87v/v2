import React, { useEffect, useMemo, useRef } from 'react';
import { IcosahedronGeometry } from 'three';
import { Canvas } from 'react-three-fiber';
import { Text, OrbitControls } from '@react-three/drei';

const textProps = {
  fontSize: 3.9,
  font: 'http://fonts.gstatic.com/s/modak/v5/EJRYQgs1XtIEskMA-hI.woff',
};

function Title({ layers = undefined, ...props }) {
  const group = useRef();
  useEffect(() => {
    group.current.lookAt(0, 0, 0);
  }, []);

  return (
    <group {...props} ref={group}>
      <Text
        depthTest={false}
        material-toneMapped={false}
        {...textProps}
        layers={layers}
      >
        React - ThreeJS - Javascript - ExpressJS - NodeJS - HTML - CSS - Docker
        - Google - Analytics - Gatsby - Firebase - Figma - Fusion360 - Blender
      </Text>
    </group>
  );
}

function TitleCopies({ layers }) {
  const vertices = useMemo(() => {
    const y = new IcosahedronGeometry(102);
    return y.vertices;
  }, []);

  return (
    <group name="titleCopies">
      {vertices.map((vertex, i) => (
        <Title name={'titleCopy-' + i} position={vertex} layers={layers} />
      ))}
    </group>
  );
}

function Scene() {
  return (
    <group name="sceneContainer">
      <TitleCopies />
    </group>
  );
}

export default function CubeText() {
  return (
    <Canvas concurrent shadowMap camera={{ position: [-10, 4, 20], fov: 70 }}>
      <color attach="background" args={['#000']} />
      <Scene />
      <ambientLight intensity={0.4} />
      <OrbitControls />
    </Canvas>
  );
}