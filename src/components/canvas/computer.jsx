/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
// import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { CanvasLoader } from "@common/loader"

const rotationSpeed = 0.002
// const rotationLimitMin = -Math.PI / 8
// const rotationLimitMax = Math.PI / 1.3

const Computer = ({ isMobile, computerModel }) => {
  const [rotationY, setRotationY] = useState(0)

  // Use the useFrame hook to update the rotation on each frame
  useFrame(() => {
    // Calculate the new rotation based on the current state and rotationSpeed
    const newRotationY = rotationY + rotationSpeed

    // Set the new rotation
    setRotationY(newRotationY)
  })

  return (
    <mesh rotation={[0, rotationY, 0]}>
      {/* Update the rotation in Y-axis */}
      {/* lights start */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* lights end */}
      <primitive
        object={computerModel.scene}
        scale={isMobile ? 0.35 : 0.75}
        position={isMobile ? [0, -3, -0.7] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  // const computerModel = useGLTF("./src/assets/models/desktop_pc/scene.gltf")
  const computerModel = useGLTF("/models/desktop_pc/scene.gltf")

  useEffect(() => {
    // Adding listener to detect changes in screen size
    const mediaQuery = window.matchMedia(`(max-width: 500px)`)
    // Set initial value to the 'isMobile' state variable
    setIsMobile(mediaQuery.matches)
    // Defining a callback function to handle changes in media query
    const handleMediaQueryChange = e => {
      setIsMobile(e.matches)
    }
    // Adding the callback function to a listener to monitor media query changes
    mediaQuery.addEventListener("change", handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <EffectComposer multisampling={0} disableNormalPass={true}>
				<Bloom
					luminanceThreshold={0}
					luminanceSmoothing={0.9}
					height={300}
					opacity={3}
				/>
			</EffectComposer> */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate
          enableZoom={false}
          // vertical rotation:
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          // horizontal rotation:
          // minAzimuthAngle={rotationLimitMin}
          // maxAzimuthAngle={rotationLimitMax}
        />
        {/* Pass the loaded model as a prop to the Computer component */}
        <Computer isMobile={isMobile} computerModel={computerModel} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export { ComputerCanvas }
