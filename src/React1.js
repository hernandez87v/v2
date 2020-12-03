/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/React1.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, 8.96, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.19, 1.19, 1.19]}
        userData={{ name: 'React-Background' }}>
        <mesh material={materials['React-Dark-Blue']} geometry={nodes.Cube001.geometry} />
        <mesh material={materials['React-Blue']} geometry={nodes['Cube.001_1'].geometry} />
      </group>
    </group>
  )
}

useGLTF.preload('/React1.glb')
