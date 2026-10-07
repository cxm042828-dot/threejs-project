import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// 행성 만들기
const geometry = new THREE.SphereGeometry(2, 64, 64);

const material = new THREE.MeshStandardMaterial({
    color: 0x2288ff,
    roughness: 0.7
});

const planet = new THREE.Mesh(geometry, material);

scene.add(planet);


// 빛 만들기
const light = new THREE.PointLight(0xffffff, 3);

light.position.set(5, 5, 5);

scene.add(light);


const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);

scene.add(ambientLight);


// 카메라 위치
camera.position.z = 6;


// 애니메이션
function animate() {

    requestAnimationFrame(animate);

    planet.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();


// 브라우저 크기 변경
window.addEventListener('resize', () => {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );
});