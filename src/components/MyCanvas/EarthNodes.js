import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from "@react-three/fiber"
import model from '../../assets/Earth_Nodes_ss.glb'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, model)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions.EarthRotation.setDuration("90").play();
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['Material.009']} scale={20}>
          {props.children}
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/Earth_Nodes_ss.glb')