// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import myPicture from './my-picture.jpg'; // Import your picture here

// function {
//   return{
//     <h1>hi</h1>
//   }
//   // const canvasRef = useRef(null);

//   // useEffect(() => {
//   //   // Create a scene
//   //   const scene = new THREE.Scene();

//   //   // Create a camera
//   //   const camera = new THREE.PerspectiveCamera(
//   //     75,
//   //     canvasRef.current.clientWidth / canvasRef.current.clientHeight,
//   //     0.1,
//   //     1000
//   //   );
//   //   camera.position.z = 5;

//   //   // Create a renderer
//   //   const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

//   //   // Create a geometry
//   //   const geometry = new THREE.BoxGeometry(2, 2, 2);

//   //   // Create a texture loader
//   //   const textureLoader = new THREE.TextureLoader();

//   //   // Load your picture as a texture
//   //   const texture = textureLoader.load("https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAGNmyxZgsY5XvGsPwf9n7xBHmgYxBcfJEhbvXtwc_hS8Vg%3Ds96-c&w=32&q=75");

//   //   // Create a material using the texture
//   //   const material = new THREE.MeshBasicMaterial({ map: texture });

//   //   // Create a mesh
//   //   const mesh = new THREE.Mesh(geometry, material);
//   //   scene.add(mesh);

//   //   // Animate the mesh
//   //   const animate = () => {
//   //     requestAnimationFrame(animate);
//   //     mesh.rotation.x += 0.01;
//   //     mesh.rotation.y += 0.01;
//   //     renderer.render(scene, camera);
//   //   };
//   //   animate();
//   // }, []);

//   // return <canvas ref={canvasRef} />;
// }

// export default ThreeDProfilePicture;
