/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei/useGLTF';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/React.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, 8.96, 50]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.82, 0.82, 0.82]}
        userData={{ name: 'Cube' }}
      >
        <mesh
          material={materials['React Dark Blue']}
          geometry={nodes.Cube001.geometry}
        />
        <mesh
          material={materials['React Blue']}
          geometry={nodes['Cube.001_1'].geometry}
        />
      </group>
      <mesh
        material={materials['React Blue']}
        geometry={nodes.BezierCurve001.geometry}
        position={[-9.53, 9, 0]}
        userData={{ name: 'BezierCurve.001' }}
      />
    </group>
  );
}

useGLTF.preload('/React.glb');
