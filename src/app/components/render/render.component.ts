import { Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';

@Component({
  selector: 'app-render',
  standalone: true,
  imports: [],
  templateUrl: './render.component.html',
  styleUrl: './render.component.scss',
})
export class RenderComponent {
  @ViewChild('rendererContainer', { static: true })
  rendererContainer!: ElementRef;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private modelGroup: THREE.Group = new THREE.Group(); // Group to control pivot
  private spotLight!: THREE.SpotLight; // Spotlight

  ngOnInit(): void {
    this.initThree();
    this.addSpotlight(); // Add the spotlight to the scene
    this.loadModel();
    this.animate();
  }

  private initThree(): void {
    // Set up the renderer with alpha enabled
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // Create the scene with a transparent background
    this.scene = new THREE.Scene();
    this.scene.background = null;

    // Set up the camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    // Add the group to the scene
    this.scene.add(this.modelGroup);
  }

  private addAmbientLight(): void {
    // Create ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // White color, intensity 0.5
    this.scene.add(ambientLight); // Add to the scene
  }

  private addSpotlight(): void {
    // Create the spotlight
    this.spotLight = new THREE.SpotLight(0xffffff, 50); // Color: white, Intensity: 1
    this.spotLight.position.set(0, 5, 0); // Position the spotlight in the scene
    this.spotLight.angle = Math.PI / 6; // Set the spotlight's angle
    this.spotLight.penumbra = 0.1; // Softness of the spotlight's edges
    this.spotLight.decay = 2; // Controls how quickly the light dims
    this.spotLight.distance = 30; // Range of the spotlight

    // Enable shadows for the spotlight
    this.spotLight.castShadow = true;
    this.spotLight.shadow.mapSize.width = 1024;
    this.spotLight.shadow.mapSize.height = 1024;

    // Add the spotlight to the scene
    this.scene.add(this.spotLight);

    // // Optional: Add a spotlight helper to visualize the spotlight during development
    // const spotLightHelper = new THREE.SpotLightHelper(this.spotLight);
    // this.scene.add(spotLightHelper);
  }

  private loadModel(): void {
    const loader = new GLTFLoader();
    loader.load(
      '3d/scene.gltf', // Path to the model file in the assets folder
      (gltf) => {
        const model = gltf.scene;

        // Adjust the model's position within the group
        model.position.set(0, 0, -1); // Example: move down along the Y-axis
        this.modelGroup.add(model); // Add the model to the group

        // Optional: Scale the model
        model.scale.set(1, 1, 1);
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the model:', error);
      }
    );
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());

    // Rotate the group instead of the model
    this.modelGroup.rotation.y += 0.0004;

    // Render the scene
    this.renderer.render(this.scene, this.camera);
  }
}
