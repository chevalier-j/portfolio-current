/*
 * path: /src/components/common/loader.jsx
 */
// refactor this component to make it reusable as a general loader
import React from "react"
import { Html, useProgress } from "@react-three/drei"

export const CanvasLoader = () => {
  const { progress } = useProgress()
  return (
    <Html>
      <span className="canvas-loader" aria-label="Loading"></span>
      <p className="canvas-loader-progress">{progress.toFixed(2)}&nbsp;%</p>
    </Html>
  )
}
