// Configuración básica de la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Añadir una luz ambiental para iluminar el modelo
const light = new THREE.AmbientLight(0xffffff, 1); // Luz blanca
scene.add(light);

// Posicionar la cámara
camera.position.z = 5; // Aleja la cámara para ver el modelo

// Cargar el modelo 3D usando GLTFLoader
const loader = new THREE.GLTFLoader();
loader.load(
  'models/prision_realm.glb', // Ruta al modelo (ajusta si está en otra carpeta)
  function (gltf) {
    const model = gltf.scene; // El modelo cargado
    scene.add(model); // Añadir el modelo a la escena
    model.position.set(0, -1, 0); // Posición inicial del modelo
    model.scale.set(1, 1, 1); // Escalar el modelo si es necesario
  },
  undefined,
  function (error) {
    console.error('Error al cargar el modelo:', error);
  }
);

// Animación para actualizar la escena
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
