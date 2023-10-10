import { Canvas, CanvasProps } from "@react-three/fiber";
import { SceneRenderer } from "./renderScene";
import React from "react";

export default function Background({ ...props }: CanvasProps) {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "#010208",
      }}
      {...props}>
      <SceneRenderer />
    </Canvas>
  );
}
