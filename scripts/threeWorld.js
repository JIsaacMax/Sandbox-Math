import {MOUSE} from 'three';

const generalWidth = window.innerWidth;
const generalHeight = window.innerHeight;
const choosePixelRatio = window.devicePixelRatio;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(90, generalWidth / generalHeight, 0.1, 1000);
const pointLight = new THREE.PointLight(0xFFFFFF);
const sun = new THREE.AmbientLight(0xFFFFFF);
const gridMesh = new THREE.GridHelper(100, 100, 0x000000, 0x000000);

const euTexture = new THREE.TextureLoader().load('/images/GATODEBOSTA.jpeg');


pointLight.position.set(15, 25, 15);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#ambientCanvas'),
});

// const controls = new THREE.OrbitControls(camera, renderer.domElement);

renderer.setPixelRatio(choosePixelRatio);
renderer.setSize(generalWidth, generalHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({
    color: 0xFF6347
});

const materialDeBosta = new THREE.MeshBasicMaterial({
    map: euTexture,
});

const torus = new THREE.Mesh(geometry, materialDeBosta);

scene.add(torus, pointLight, sun);

function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    // controls.update();
    renderer.render(scene, camera);
}

animate();