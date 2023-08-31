import React from 'react'
import { Canvas } from 'react-three-fiber'
import Ball from './ball'

const Loading = () => {
  return (
    <Canvas
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url('//unpkg.com/three-globe/example/img/night-sky.png')`,
      }}
      shadowMap
    >
      <ambientLight intensity={0.3} />
      <directionalLight castShadow position={[0, 10, 0]} intensity={0.5} />
      <Ball />
    </Canvas>
  )
}

export default Loading
