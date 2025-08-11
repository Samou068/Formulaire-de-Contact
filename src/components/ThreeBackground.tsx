
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Enhanced sophisticated lighting for silver appearance
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight1.position.set(20, 20, 15);
    directionalLight1.castShadow = true;
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xc0c0c0, 1.2);
    directionalLight2.position.set(-20, -15, 10);
    scene.add(directionalLight2);

    const spotLight = new THREE.SpotLight(0xffffff, 2);
    spotLight.position.set(0, 30, 0);
    spotLight.angle = Math.PI / 4;
    scene.add(spotLight);

    // Sophisticated silver material with high reflectivity
    const silverMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc0c0c0,
      metalness: 0.9,
      roughness: 0.1,
      reflectivity: 0.8,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.85
    });

    const silverWireframeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xe5e5e5,
      metalness: 0.8,
      roughness: 0.2,
      wireframe: true,
      wireframeLinewidth: 3,
      transparent: true,
      opacity: 0.7
    });

    // Create much larger, more sophisticated animated geometric shapes
    const shapes: THREE.Mesh[] = [];

    // Massive Complex Torus Knot - significantly larger
    const massiveTorusKnotGeometry = new THREE.TorusKnotGeometry(8, 3, 300, 64, 2, 3);
    const massiveTorusKnot = new THREE.Mesh(massiveTorusKnotGeometry, silverMaterial);
    massiveTorusKnot.position.set(-15, 8, -35);
    scene.add(massiveTorusKnot);
    shapes.push(massiveTorusKnot);

    // Giant Icosahedron with subdivisions
    const giantIcosahedronGeometry = new THREE.IcosahedronGeometry(10, 2);
    const giantIcosahedron = new THREE.Mesh(giantIcosahedronGeometry, silverWireframeMaterial);
    giantIcosahedron.position.set(20, -10, -25);
    scene.add(giantIcosahedron);
    shapes.push(giantIcosahedron);

    // Enormous Dodecahedron
    const enormousDodecahedronGeometry = new THREE.DodecahedronGeometry(12, 3);
    const enormousDodecahedron = new THREE.Mesh(enormousDodecahedronGeometry, silverMaterial);
    enormousDodecahedron.position.set(-25, -15, -40);
    scene.add(enormousDodecahedron);
    shapes.push(enormousDodecahedron);

    // Massive Octahedron with high detail
    const massiveOctahedronGeometry = new THREE.OctahedronGeometry(9, 3);
    const massiveOctahedron = new THREE.Mesh(massiveOctahedronGeometry, silverWireframeMaterial);
    massiveOctahedron.position.set(0, 20, -50);
    scene.add(massiveOctahedron);
    shapes.push(massiveOctahedron);

    // Complex Polyhedron - Large Tetrahedron
    const largeTetrahedronGeometry = new THREE.TetrahedronGeometry(11, 4);
    const largeTetrahedron = new THREE.Mesh(largeTetrahedronGeometry, silverMaterial);
    largeTetrahedron.position.set(30, 12, -30);
    scene.add(largeTetrahedron);
    shapes.push(largeTetrahedron);

    // Giant Torus with complex geometry
    const giantTorusGeometry = new THREE.TorusGeometry(15, 4, 32, 200);
    const giantTorus = new THREE.Mesh(giantTorusGeometry, silverWireframeMaterial);
    giantTorus.position.set(-10, -25, -60);
    scene.add(giantTorus);
    shapes.push(giantTorus);

    // Massive Sphere with complex wireframe
    const massiveSphereGeometry = new THREE.SphereGeometry(8, 64, 32);
    const massiveSphere = new THREE.Mesh(massiveSphereGeometry, silverMaterial);
    massiveSphere.position.set(25, 0, -45);
    scene.add(massiveSphere);
    shapes.push(massiveSphere);

    // Complex Ring Geometry
    const ringGeometry = new THREE.RingGeometry(6, 14, 32, 8);
    const complexRing = new THREE.Mesh(ringGeometry, silverWireframeMaterial);
    complexRing.position.set(-30, 5, -35);
    scene.add(complexRing);
    shapes.push(complexRing);

    camera.position.z = 15;

    // Much more sophisticated animation loop with complex movements
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Complex rotations with varying speeds and axes
      massiveTorusKnot.rotation.x += 0.02;
      massiveTorusKnot.rotation.y += 0.025;
      massiveTorusKnot.rotation.z += 0.015;

      giantIcosahedron.rotation.x += 0.018;
      giantIcosahedron.rotation.y += 0.022;
      giantIcosahedron.rotation.z += 0.012;

      enormousDodecahedron.rotation.x += 0.015;
      enormousDodecahedron.rotation.y += 0.028;
      enormousDodecahedron.rotation.z += 0.008;

      massiveOctahedron.rotation.x += 0.012;
      massiveOctahedron.rotation.y += 0.02;
      massiveOctahedron.rotation.z += 0.025;

      largeTetrahedron.rotation.x += 0.025;
      largeTetrahedron.rotation.y += 0.015;
      largeTetrahedron.rotation.z += 0.018;

      giantTorus.rotation.x += 0.008;
      giantTorus.rotation.y += 0.035;
      giantTorus.rotation.z += 0.012;

      massiveSphere.rotation.x += 0.02;
      massiveSphere.rotation.y += 0.03;

      complexRing.rotation.x += 0.028;
      complexRing.rotation.z += 0.022;

      // Sophisticated floating animations with larger amplitudes
      massiveTorusKnot.position.y = 8 + Math.sin(time * 0.8) * 4;
      massiveTorusKnot.position.x = -15 + Math.cos(time * 0.6) * 6;
      massiveTorusKnot.position.z = -35 + Math.sin(time * 0.3) * 8;

      giantIcosahedron.position.y = -10 + Math.cos(time * 1.2) * 5;
      giantIcosahedron.position.z = -25 + Math.sin(time * 0.7) * 10;
      giantIcosahedron.position.x = 20 + Math.sin(time * 0.4) * 4;

      enormousDodecahedron.position.x = -25 + Math.sin(time * 0.5) * 8;
      enormousDodecahedron.position.y = -15 + Math.cos(time * 0.9) * 6;
      enormousDodecahedron.position.z = -40 + Math.sin(time * 0.2) * 12;

      massiveOctahedron.position.z = -50 + Math.sin(time * 1.1) * 15;
      massiveOctahedron.position.y = 20 + Math.cos(time * 0.6) * 8;
      massiveOctahedron.position.x = Math.sin(time * 0.8) * 10;

      largeTetrahedron.position.y = 12 + Math.sin(time * 1.3) * 7;
      largeTetrahedron.position.x = 30 + Math.cos(time * 0.4) * 5;
      largeTetrahedron.position.z = -30 + Math.sin(time * 0.6) * 9;

      giantTorus.position.x = -10 + Math.sin(time * 0.3) * 12;
      giantTorus.position.y = -25 + Math.cos(time * 0.8) * 6;
      giantTorus.position.z = -60 + Math.sin(time * 0.5) * 20;

      massiveSphere.position.y = Math.sin(time * 0.9) * 8;
      massiveSphere.position.x = 25 + Math.cos(time * 0.7) * 6;
      massiveSphere.position.z = -45 + Math.sin(time * 0.4) * 10;

      complexRing.position.x = -30 + Math.sin(time * 0.6) * 8;
      complexRing.position.y = 5 + Math.cos(time * 1.1) * 10;
      complexRing.position.z = -35 + Math.sin(time * 0.3) * 15;

      // Dynamic lighting animations for enhanced silver shine
      directionalLight1.intensity = 1.5 + Math.sin(time * 2.5) * 0.5;
      directionalLight2.intensity = 1.2 + Math.cos(time * 1.8) * 0.4;
      spotLight.intensity = 2 + Math.sin(time * 3) * 0.8;

      // Rotate lights for dynamic reflection effects
      directionalLight1.position.x = 20 + Math.cos(time * 0.5) * 10;
      directionalLight1.position.y = 20 + Math.sin(time * 0.3) * 5;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of geometries and materials
      shapes.forEach(shape => {
        shape.geometry.dispose();
        if (Array.isArray(shape.material)) {
          shape.material.forEach(material => material.dispose());
        } else {
          shape.material.dispose();
        }
      });
      
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default ThreeBackground;
