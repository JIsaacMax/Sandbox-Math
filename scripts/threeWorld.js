const generalWidth = window.innerWidth;
const generalHeight = window.innerHeight;
const choosePixelRatio = window.devicePixelRatio;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, generalWidth / generalHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#ambientCanvas'),
});

renderer.setPixelRatio(choosePixelRatio);
renderer.setSize(generalWidth, generalHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({
    color: 0xFF6347,
    wireframe: true
});

const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    renderer.render(scene, camera);
}

animate();