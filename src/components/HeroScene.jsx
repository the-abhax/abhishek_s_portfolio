import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function HeroScene({ onMonitorClick }) {
  const { scene } = useGLTF("/models/workstation.glb");
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
    }
  });

  const handleClick = (e) => {
    if (e.object.name === "Computer_Screen_2") {
      onMonitorClick();
    }
  };

  const handlePointerOver = (e) => {
    if (e.object.name === "Computer_Screen_2") {
      setHovered(true);
      document.body.style.cursor = "pointer";
    }
  };

  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = "default";
  };

  return (
    <group ref={groupRef}>
      <primitive
        object={scene}
        scale={3}
        position={[1.6, -1.55, 0]}
        rotation={[0, 0.7, 0]}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      />
    </group>
  );
}

export default HeroScene;
useGLTF.preload("/models/workstation.glb");
