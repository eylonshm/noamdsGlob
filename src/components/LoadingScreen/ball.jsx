import React, { useRef, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/three'
import { useLoader } from 'react-three-fiber'
import * as THREE from 'three'

const Ball = () => {
  const ballRef = useRef()

  // Define spring animation
  const springProps = useSpring({
    from: { position: [0, 2, 0] },
    to: async (next) => {
      while (true) {
        await next({
          position: [0, 0, 0],
          config: { mass: 100 },
        })
        await next({
          position: [0, 0.2, 0],
          config: { mass: 100 },
        })
      }
    },
  })

  const texture = useLoader(THREE.TextureLoader, '/assets/flags.png') // Update path to your texture image

  useEffect(() => {
    const animate = () => {
      ballRef.current.rotation.x += 0.005 // Rotate diagonally on X axis
      ballRef.current.rotation.y += 0.005 // Rotate diagonally on Y axis

      // ... (rest of your animation logic)
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <animated.mesh ref={ballRef} position={springProps.position} castShadow>
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial map={texture} />
    </animated.mesh>
  )
}

export default Ball
