import logo from './logo.svg';
import './App.css';
import Accordion from './component/Acordion';
import {Button} from 'reactstrap';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

function App() {

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const loader = new THREE.ObjectLoader();

  loader.load('./models/pressure.json', function (object) {
    console.log(object);
  });

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
