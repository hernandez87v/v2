/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei/useGLTF';
import { useFrame } from 'react-three-fiber';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/React1.glb');
  // Animate model
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
    group.current.rotation.x = Math.cos(t / 4) / 8;
    group.current.rotation.y = Math.sin(t / 4) / 8;
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 6;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, 5, 60]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.19, 1.19, 1.19]}
        userData={{ name: 'React-Background' }}
      >
        <mesh
          material={materials.darkBlue}
          geometry={nodes.reactBackground.geometry}
        />
        <mesh
          material={materials.cyan}
          geometry={nodes.reactBackground_1.geometry}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/React1.glb');