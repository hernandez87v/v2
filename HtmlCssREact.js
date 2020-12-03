/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/htmlCssREact.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, 9, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.19, 1.19, 1.19]}
        userData={{ name: 'React-Background' }}>
        <mesh material={materials.darkBlue} geometry={nodes.reactBackground.geometry} />
        <mesh material={materials.cyan} geometry={nodes.reactBackground_1.geometry} />
      </group>
      <mesh
        material={materials['Material.003']}
        geometry={nodes.appBackground.geometry}
        position={[-32.39, 9, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.67, 8, 8]}
        userData={{ name: 'appBackground' }}
      />
      <group position={[-37.31, 1.08, 0]} scale={[2.31, 2.31, 2.31]} userData={{ name: 'HTML5' }}>
        <mesh material={materials.outerOrange} geometry={nodes.html5.geometry} />
        <mesh material={materials.innerOrange} geometry={nodes.html5_1.geometry} />
        <mesh material={materials.five} geometry={nodes.html5_2.geometry} />
      </group>
      <group position={[-21.96, 1.08, 0]} scale={[2.31, 2.31, 2.31]} userData={{ name: 'css3' }}>
        <mesh material={materials.white} geometry={nodes.css3_1.geometry} />
        <mesh material={materials.outerBlue} geometry={nodes.css3_2.geometry} />
        <mesh material={materials.innerBlue} geometry={nodes.css3_3.geometry} />
      </group>
    </group>
  )
}

useGLTF.preload('/htmlCssREact.glb')