// Configuración básica de la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // Asegúrate de agregar el canvas al body o a un contenedor específico

// Añadir luz ambiental y direccional
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Configurar la posición de la cámara
camera.position.set(0, 10, 50);
camera.lookAt(0, 0, 0);

// Crear un grupo vacío para manejar la rotación
const pivot = new THREE.Group();
scene.add(pivot);

// Cargar el modelo 3D usando GLTFLoader
const loader = new THREE.GLTFLoader();
loader.load(
  'models/prision_realm.glb', // Ruta del modelo
  function (gltf) {
    const model = gltf.scene;
    pivot.add(model); // Añadir el modelo al grupo para la rotación

    // Ajustar posición, escala y rotación inicial del modelo
    model.position.set(0, 0, 0);
    model.scale.set(60, 60, 60); // Escalar el modelo
    model.rotation.set(Math.PI / 4, Math.PI / 4, 0); // Rotar 45° en los ejes X e Y

    console.log('Modelo cargado correctamente');
  },
  undefined,
  function (error) {
    console.error('Error al cargar el modelo:', error);
  }
);

// Función de animación para renderizar la escena
function animate() {
  requestAnimationFrame(animate);

  // Rotar el grupo pivot alrededor del eje Y
  pivot.rotation.y += 0.005; // Rotación suave en diagonal

  renderer.render(scene, camera);
}
animate();
