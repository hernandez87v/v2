/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import { useFrame } from 'react-three-fiber';

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/logos.glb')

    useFrame((state) => {
      const t = state.clock.getElapsedTime();
      group.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
      group.current.rotation.x = Math.cos(t / 4) / 8;
      group.current.rotation.y = Math.sin(t / 4) / 8;
      // group.current.position.y = (1 + Math.sin(t / 1.5)) / 6;
    });
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[8.51, -20, 25]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.19, 1.19, 1.19]}
        userData={{ name: 'react-Background' }}>
        <mesh material={materials.darkBlue} geometry={nodes.reactBackground.geometry} />
        <mesh material={materials.cyan} geometry={nodes.reactBackground_1.geometry} />
      </group>
      <mesh
        material={materials.app}
        geometry={nodes.appBackground.geometry}
        position={[27.4, 39, 15]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.67, 8, 8]}
        userData={{ name: 'appBackground' }}
      />
      <group position={[-50, 1.08, 20]} scale={[2.31, 2.31, 2.31]} userData={{ name: 'HTML5' }}>
        <mesh material={materials.outerOrange} geometry={nodes.html5.geometry} />
        <mesh material={materials.innerOrange} geometry={nodes.html5_1.geometry} />
        <mesh material={materials.five} geometry={nodes.html5_2.geometry} />
      </group>
      <group position={[-13.45, 20, 5]} scale={[2.31, 2.31, 2.31]} userData={{ name: 'css3' }}>
        <mesh material={materials.white} geometry={nodes.css3_1.geometry} />
        <mesh material={materials.outerBlue} geometry={nodes.css3_2.geometry} />
        <mesh material={materials.innerBlue} geometry={nodes.css3_3.geometry} />
      </group>
    </group>
  )
}

useGLTF.preload('/logos.glb')
