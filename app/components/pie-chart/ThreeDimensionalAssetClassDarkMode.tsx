'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { calculateAssetClassPieChartData } from './utils';

type ThreeDimensionalAssetClassDarkModeProps = {
  summary: any;
};

const ThreeDimensionalAssetClassDarkMode = ({
  summary,
}: ThreeDimensionalAssetClassDarkModeProps) => {
  const totalCurrentValueOfHoldings = Object.values(summary).reduce(
    (acc: number, curr: any) => acc + parseFloat(curr.presentValue),
    0
  );

  const pieChartData = calculateAssetClassPieChartData(
    summary,
    totalCurrentValueOfHoldings
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen is mobile-sized
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !pieChartData || pieChartData.length === 0)
      return;

    // Clear previous content
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    // Setup Three.js scene
    const width = isMobile ? Math.min(320, window.innerWidth - 40) : 900;
    const canvasHeight = isMobile ? 250 : 500;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x080808); // Changed to very dark black #080808

    const camera = new THREE.PerspectiveCamera(
      40,
      width / canvasHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0.7, isMobile ? 10 : 8); // Adjust camera on mobile
    camera.lookAt(0, 0.7, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, canvasHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Add controls for testing (can be removed in production)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;

    // Lighting
    const ambientLightIntensity = 0.6; // Dark theme ambient
    const ambientLight = new THREE.AmbientLight(
      0xffffff,
      ambientLightIntensity
    );
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight2.position.set(-5, -5, 3);
    scene.add(directionalLight2);

    // Sort data by value in descending order
    const sortedData = [...pieChartData].sort((a, b) => b.value - a.value);

    // Pie chart parameters
    const radius = isMobile ? 1.5 : 2; // Smaller on mobile
    const segmentHeight = isMobile ? 0.3 : 0.4; // Thinner on mobile
    const segments = 64; // Smoothness of the curved edges

    // Define segment colors based on the provided image/legend
    const segmentColors = [
      0x2b4895, // EQUITY: Blue
      0xd6455c, // DEBT: Red
      0xe07c45, // GOLD: Orange
      0x7cc474, // LIQUID: Green
      0x9333ea, // CASH: Purple
      0xec4899, // INVITS/REITs: Pink
      0x3b82f6, // SILVER: Lighter Blue (adjust as needed)
      0xf43f5e, // PORTFOLIO HEDGE: Lighter Red (adjust as needed)
      // Add more fallback colors if needed
      0x10b981,
      0xf59e0b,
      0x6366f1,
      0xfacc15,
    ];

    // Create pie chart group (for easier rotation)
    const pieGroup = new THREE.Group();
    pieGroup.position.x = 0; // Shift the entire group to the right
    pieGroup.position.y = 0.7; // Shift the entire group upwards

    scene.add(pieGroup);
    pieGroup.rotation.x = Math.PI / 6; // 30 degrees from bottom (π/6 radians = 30 degrees)
    pieGroup.rotation.y = Math.PI / 8; // Slight Y axis rotation
    pieGroup.rotation.z = 0; // No Z rotation

    // Define a common material for the sides (height) of all segments
    const sideMaterial = new THREE.MeshBasicMaterial({
      color: 0x555555, // A medium-dark grey for the sides
    });

    // Material for the separator lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff, // White lines for dark mode? Or maybe a lighter grey?
      linewidth: 1,
    });

    // --- Store segment ANGLES and necessary data ---
    const segmentsData: {
      midAngle: number;
      name: string;
      value: number;
    }[] = [];

    // Create pie segments (Loop)
    let startAngle = -Math.PI / 2; // Start from top (-90 degrees)
    sortedData.forEach((segment, index) => {
      const angleSize = (segment.value / 100) * Math.PI * 2;
      const endAngle = startAngle + angleSize;
      const midAngle = startAngle + angleSize / 2;

      // Create geometry, material, mesh (same as before)
      const geometry = new THREE.CylinderGeometry(
        radius,
        radius,
        segmentHeight,
        segments,
        1,
        false,
        startAngle,
        angleSize
      );
      const faceColor = new THREE.Color(
        segmentColors[index % segmentColors.length]
      );
      const faceMaterial = new THREE.MeshBasicMaterial({ color: faceColor });
      const mesh = new THREE.Mesh(geometry, [
        sideMaterial,
        faceMaterial,
        faceMaterial,
      ]);
      mesh.position.y = 0;
      pieGroup.add(mesh);

      // Store the correct midAngle
      segmentsData.push({
        midAngle,
        name: segment.name,
        value: segment.value,
      });

      startAngle = endAngle;
    });

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Add legend (using DOM elements)
    const legendContainer = document.createElement('div');
    legendContainer.style.position = 'absolute';
    // Position bottom-center
    legendContainer.style.bottom = '10px';
    legendContainer.style.left = '50%';
    legendContainer.style.transform = 'translateX(-50%)';
    legendContainer.style.display = 'flex';
    legendContainer.style.flexDirection = 'row'; // Change to row layout
    legendContainer.style.flexWrap = 'wrap'; // Allow wrapping if needed
    legendContainer.style.justifyContent = 'center'; // Center items horizontally
    legendContainer.style.backgroundColor = 'transparent';
    legendContainer.style.padding = '5px 10px'; // Adjust padding
    legendContainer.style.borderRadius = '8px';
    legendContainer.style.color = 'white'; // Dark theme legend color
    legendContainer.style.fontSize = isMobile ? '10px' : '12px'; // Smaller on mobile
    legendContainer.style.pointerEvents = 'none'; // Prevent legend from blocking controls
    containerRef.current.appendChild(legendContainer);

    sortedData.forEach((segment, index) => {
      const item = document.createElement('div');
      item.style.display = 'flex';
      item.style.alignItems = 'center';
      item.style.marginRight = isMobile ? '8px' : '15px'; // Spacing for row layout, smaller on mobile
      item.style.marginBottom = '5px'; // Spacing if wrapping occurs

      const colorBox = document.createElement('div');
      colorBox.style.width = isMobile ? '8px' : '12px'; // Smaller box on mobile
      colorBox.style.height = isMobile ? '8px' : '12px';
      colorBox.style.backgroundColor = `#${segmentColors[
        index % segmentColors.length
      ]
        .toString(16)
        .padStart(6, '0')}`;
      colorBox.style.marginRight = '5px'; // Smaller margin
      colorBox.style.borderRadius = '2px';

      const label = document.createElement('div');
      label.textContent = `${segment.name}: ${Math.round(segment.value)}%`;

      item.appendChild(colorBox);
      item.appendChild(label);
      legendContainer.appendChild(item);
    });

    // Add FnO legend item manually
    const fnoItem = document.createElement('div');
    fnoItem.style.display = 'flex';
    fnoItem.style.alignItems = 'center';
    fnoItem.style.marginRight = isMobile ? '8px' : '15px'; // Spacing for row layout, smaller on mobile
    fnoItem.style.marginBottom = '5px'; // Spacing if wrapping occurs

    const fnoColorBox = document.createElement('div');
    fnoColorBox.style.width = isMobile ? '8px' : '12px'; // Smaller box on mobile
    fnoColorBox.style.height = isMobile ? '8px' : '12px';
    fnoColorBox.style.backgroundColor = `#${sideMaterial.color.getHexString()}`; // Use side color
    fnoColorBox.style.marginRight = '5px'; // Smaller margin
    fnoColorBox.style.borderRadius = '2px';

    const fnoLabel = document.createElement('div');
    fnoLabel.textContent = `FnO`; // Or other relevant text

    fnoItem.appendChild(fnoColorBox);
    fnoItem.appendChild(fnoLabel);
    legendContainer.appendChild(fnoItem);

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current) {
        if (renderer.domElement) {
          containerRef.current.removeChild(renderer.domElement);
        }
        if (legendContainer && legendContainer.parentNode === containerRef.current) {
          containerRef.current.removeChild(legendContainer);
        }
      }
    };
  }, [pieChartData, isMobile]); // Re-render when isMobile changes

  return <div ref={containerRef} className="w-full flex justify-center"></div>;
};

export default ThreeDimensionalAssetClassDarkMode;
