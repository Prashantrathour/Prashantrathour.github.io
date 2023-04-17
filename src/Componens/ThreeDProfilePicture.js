import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function ThreeDProfilePicture() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    // Create a geometry
    const geometry = new THREE.BoxGeometry(5,5, 5);

    // Create a material
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // Create a mesh
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animate the cube
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <canvas ref={canvasRef} />;
}

export default ThreeDProfilePicture;
