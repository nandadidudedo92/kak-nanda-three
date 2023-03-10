import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// scene and camera 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// torus
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const torus = new THREE.Mesh(geometry, material);
torus.position.setX(-5);
torus.position.setY(3);

scene.add(torus);

// light and camera
const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight);

// const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper);

const controls = new OrbitControls(camera, renderer.domElement);

//star

function addStar() {

    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);

}

Array(200).fill().forEach(addStar);

// background
const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

// avatar
const avaTexture = new THREE.TextureLoader().load('ava.png');

const ava = new THREE.Mesh(
    new THREE.BoxGeometry(5, 5, 5),
    new THREE.MeshBasicMaterial({ map: avaTexture })
);
// ava.position.z = 5;
// ava.position.setX(5);
// ava.position.setY(5);
ava.position.setZ(-10);
scene.add(ava);

// item spring
const springTexture = new THREE.TextureLoader().load('spring.png');

const spring = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshBasicMaterial({ map: springTexture })
);

// spring.position.setX(8);
// spring.position.setY(8);
spring.position.setZ(-15);
scene.add(spring);

// item swift
const swiftTexture = new THREE.TextureLoader().load('swift.png');

const swift = new THREE.Mesh(
    new THREE.BoxGeometry(4, 4, 4),
    new THREE.MeshBasicMaterial({ map: swiftTexture })
);

// swift.position.setX();
// swift.position.setY(8);
swift.position.setZ(-17);
scene.add(swift);

// item oracle
const oracleTexture = new THREE.TextureLoader().load('oracle-db.png');

const oracle = new THREE.Mesh(
    new THREE.BoxGeometry(3, 3, 3),
    new THREE.MeshBasicMaterial({ map: oracleTexture })
);

oracle.position.setZ(-19);
scene.add(oracle);

// item nodejs
const nodeJsTexture = new THREE.TextureLoader().load('nodejs.jpeg');

const nodeJs = new THREE.Mesh(
    new THREE.BoxGeometry(3, 3, 3),
    new THREE.MeshBasicMaterial({ map: nodeJsTexture })
);

nodeJs.position.setZ(-21);
scene.add(nodeJs);


// item nginx
const nginxTexture = new THREE.TextureLoader().load('nginx.jpeg');

const nginx = new THREE.Mesh(
    new THREE.BoxGeometry(5, 3, 3),
    new THREE.MeshBasicMaterial({ map: nginxTexture })
);

nginx.position.setZ(-19);
scene.add(nginx);

// item ionic
const ionicTexture = new THREE.TextureLoader().load('ionic.png');

const ionic = new THREE.Mesh(
    new THREE.BoxGeometry(4, 4, 4),
    new THREE.MeshBasicMaterial({ map: ionicTexture })
);

ionic.position.setZ(-17);
scene.add(ionic);


// item logo
const logoTexture = new THREE.TextureLoader().load('logo.png');

const logo = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshBasicMaterial({ map: logoTexture })
);

logo.position.setZ(-15);
scene.add(logo);


// move camera
function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    // ava
    ava.rotation.x += 0.05;
    ava.rotation.x += 0.075;
    ava.rotation.x += 0.05;
    // ava.position.z = t * -5;
    ava.position.setX(t * -0.01);
    ava.position.setY(t * -0.001);
    
    // spring
    spring.rotation.x += 0.05;
    spring.rotation.y += 0.075;
    spring.rotation.z += 0.05;
    spring.position.setX(t * -0.009);
    spring.position.setY(t * -0.009);

    // swift
    swift.rotation.x += 0.05;
    swift.rotation.y += 0.075;
    swift.rotation.z += 0.05;
    swift.position.setX(t * -0.016);
    swift.position.setY(t * -0.008);

    // oracle
    oracle.rotation.x += 0.05;
    oracle.rotation.y += 0.075;
    oracle.rotation.z += 0.05;
    oracle.position.setX(t * -0.021);
    oracle.position.setY(t * -0.005);

    // nodeJs
    nodeJs.rotation.x += 0.05;
    nodeJs.rotation.y += 0.075;
    nodeJs.rotation.z += 0.05;
    nodeJs.position.setX(t * -0.023);
    // nodeJs.position.setY(t * -0.002);

    // nginx
    nginx.rotation.x += 0.05;
    nginx.rotation.y += 0.075;
    nginx.rotation.z += 0.05;
    nginx.position.setX(t * -0.021);
    nginx.position.setY(t * 0.005);

    // ionic
    ionic.rotation.x += 0.05;
    ionic.rotation.y += 0.075;
    ionic.rotation.z += 0.05;
    ionic.position.setX(t * -0.016);
    ionic.position.setY(t * 0.008);


    // logo
    logo.rotation.x += 0.05;
    logo.rotation.y += 0.075;
    logo.rotation.z += 0.05;
    logo.position.setX(t * -0.009);
    logo.position.setY(t * 0.009);

    // torus
    torus.rotation.x += 0.05;
    torus.rotation.y += 0.075;
    torus.rotation.z += 0.05;
    torus.position.setX(t * 0.009);
    // torus.position.setY(t * 0.009);

    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.position.y = t * -0.0005;




}
document.body.onscroll = moveCamera


function animate() {
    requestAnimationFrame(animate);

    // spring
    spring.rotation.x += 0.01;
    spring.rotation.y += 0.005;
    spring.rotation.z += 0.01;

    // swift
    swift.rotation.x += 0.01;
    swift.rotation.y += 0.005;
    swift.rotation.z += 0.01;

    // oracle
    oracle.rotation.x += 0.01;
    oracle.rotation.y += 0.005;
    nodeJs.rotation.z += 0.01;

    // nodeJs
    nodeJs.rotation.x += 0.01;
    nodeJs.rotation.y += 0.005;
    nodeJs.rotation.z += 0.01;

    // nginx
    nginx.rotation.x += 0.01;
    nginx.rotation.y += 0.005;
    nginx.rotation.z += 0.01;

    // ionic
    ionic.rotation.x += 0.01;
    ionic.rotation.y += 0.005;
    ionic.rotation.z += 0.01;

    // logo

    logo.rotation.x += 0.01;
    logo.rotation.y += 0.005;
    logo.rotation.z += 0.01;

    // torus
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;
    controls.update();

    renderer.render(scene, camera);
}

animate();