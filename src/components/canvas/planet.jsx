/* eslint-disable react/no-unknown-property */
import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { CanvasLoader } from "@common/loader"

const Planet = ({ model }) => {
  return (
    <primitive object={model.scene} scale={2.5} position-y={0} rotation-y={0} />
  )
}

const PlanetCanvas = () => {
  // const model = useGLTF("./src/assets/models/planet/scene.gltf")
  const model = useGLTF("/models/planet/scene.gltf")

  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      // camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}

      camera={{ fov: 55, near: 0.1, far: 200, position: [-2, 3, 5] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <Planet model={model} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export { PlanetCanvas }
