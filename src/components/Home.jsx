// components/Home.jsx
import React, {  Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stars } from "@react-three/drei";
import "./Home.css";
import * as THREE from "three";


const LaptopModel = () => {
  const gltf = useGLTF("/laptop/scene.gltf");
  const modelRef = useRef();

  const textRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (textRef.current) {
        textRef.current.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.3}px))`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    if (modelRef.current) {
      const t = state.clock.getElapsedTime();
      modelRef.current.position.y = -1 + Math.sin(t) * 0.2; // centered floating
      modelRef.current.rotation.y += 0.003; // slow rotation
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} scale={[4, 4, 4]} position={[3, -3, -2]} />;
};

const Home = () => {
  return (
    <section className="home-container">
      <Canvas camera={{ position: [3, 2, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Suspense fallback={null}>
          <LaptopModel />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="hero-text">
        <h1>Hi, I'm Abhishek</h1>
        <p>Frontend Developer | React.js | Three.js Enthusiast</p>
      </div>
    </section>
  );
};

export default Home;