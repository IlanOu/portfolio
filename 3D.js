let scene = new THREE.Scene();

let Card;

let renderer = new THREE.WebGLRenderer({antialias:true, alpha: false});
renderer.setClearColor( 0x000000, 0 );
renderer.setSize( window.innerWidth/2.2, window.innerHeight );
document.querySelector("#Div3D").appendChild( renderer.domElement );


let camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 5000);
camera.position.z = 5;


const controls = new THREE.OrbitControls(camera, renderer.domElement)


const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444, 3 );
hemiLight.position.set( 0, 1, 0);
scene.add( hemiLight );



const sphere = new THREE.SphereGeometry( 0.01, 8, 8 );
const sphereLight = new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) 
sphereLight.scale.x = sphereLight.scale.y * 2
let light1 = new THREE.PointLight( 0xff0040, 20, 50 );
light1.position.set(0,0,2.5);
scene.add( light1 );



const sphereLight2 = new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xffffff } ) ) 
sphereLight2.scale.x = sphereLight2.scale.y * 2
let light2 = new THREE.PointLight( 0xffffff, 30, 50 );
light2.position.set(0,0,2.5);
scene.add( light2 );

light2.position.x = 3
light1.position.x = -15

let CanCardRotate = true;



controls.enableRotate = false;
controls.enableZoom = false;
controls.enablePan = false;

controls.maxPolarAngle = Math.PI / 1.5;
controls.minPolarAngle = Math.PI / 3;

controls.minAzimuthAngle = Math.PI / 0.6;
controls.maxAzimuthAngle = Math.PI / 3;


const loader = new THREE.GLTFLoader();

const loadCard = () => {
    
    loader.load('./Models3D/Carte3D.glb', function(gltf){
        Card = gltf.scene.children[0];
        Card.scale.set(1.3, 0.4, 0.01);
        Card.position.y = 0.15;

        // console.log(Card.children[1].material);

        scene.add(Card);

        Card.children[1].material.metalness = 0.7;
        Card.children[1].material.roughness = 0.4;

        

        window.addEventListener("mousemove", (event) => {
            RotateCard(event);
        })

    });
}


loadCard();






const RotateCard = (event) => {
    if (CanCardRotate){
        renderer.render(scene, camera);
    
        let mouseX = event.clientX / window.innerWidth;
        mouseX = mouseX - 0.75;
        
        let mouseY = event.clientY / window.innerHeight;
        mouseY = mouseY - 0.5;


        let mouseXUnchanged = (event.clientX / window.innerWidth * 8) - 6;
        let mouseYUnchanged = (event.clientY / window.innerHeight * 2) - 1.2;

        // rotation speed ( / ou *) | rotation (+ ou -)
        Card.rotation.y = mouseX/1.5;
        Card.rotation.x = mouseY/2;



        // light1.position.x = mouseXUnchanged;
        // light1.position.y = -mouseYUnchanged;
    }
}

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth/2.2, window.innerHeight );
})


