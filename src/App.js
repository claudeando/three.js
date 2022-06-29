
import './App.css';
import * as THREE from 'three';


const scene = new THREE.Scene(); // シーンの作成
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); //　カメラの作成、属性は 1. Focal Length 2. Aspect Ratio 3. far 4. near

const renderer = new THREE.WebGLRenderer(); //　レンダラーの作成
renderer.setSize(window.innerWidth, window.innerHeight); //　インスタンスで細かい設定が可能
document.body.appendChild(renderer.domElement); //　HTMLに <canvas> 要素を組み込んでいる



const geometry = new THREE.BoxGeometry(10, 10, 10); //　形状の選択
const material = new THREE.MeshBasicMaterial({ color: 0x00ff99 }); //　色の選択
const cube = new THREE.Mesh(geometry, material); // 形状と色の混合
scene.add(cube);

camera.position.z = 100; //　デフォルトで呼び出されたオブジェクトは (0, 0, 0)　の座標に置かれるので、カメラを移動させる



function animate() { // 宣言されたシーン、カメラ、レンダラーは描写されなくては動かない
  requestAnimationFrame(animate);

  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;
  cube.rotation.z += 0.05;

  renderer.render(scene, camera);
};

animate();

function App() {
  return
}

export default App;
