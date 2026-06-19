import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

function HeroScene({ onMonitorClick }) {
const { scene } = useGLTF("./models/workstation.glb");

const groupRef = useRef();

const [isMobile, setIsMobile] = useState(
window.innerWidth <= 768
);

useEffect(() => {
const handleResize = () => {
setIsMobile(window.innerWidth <= 768);
};


window.addEventListener("resize", handleResize);

return () =>
  window.removeEventListener("resize", handleResize);


}, []);

useFrame((state) => {
if (groupRef.current) {
groupRef.current.rotation.y =
Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
}
});

const handleClick = (e) => {
if (e.object.name === "Computer_Screen_2") {
onMonitorClick();
}
};

const handlePointerOver = (e) => {
if (e.object.name === "Computer_Screen_2") {
document.body.style.cursor = "pointer";
}
};

const handlePointerOut = () => {
document.body.style.cursor = "default";
};

return ( <group ref={groupRef}>
<primitive
object={scene}
scale={isMobile ? 4.8 : 3}
position={
isMobile
? [0, -1.1, 0]
: [1.6, -1.55, 0]
}
rotation={[0, 0.7, 0]}
onClick={handleClick}
onPointerOver={handlePointerOver}
onPointerOut={handlePointerOut}
/> </group>
);
}

export default HeroScene;

useGLTF.preload("./models/workstation.glb");
