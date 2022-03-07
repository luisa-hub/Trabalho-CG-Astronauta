var cena = new THREE.Scene(); //Cria cena


var render = new THREE.WebGLRenderer(); //cria render
render.setSize(window.innerWidth, window.innerHeight); 
var canvas = render.domElement; //cria canvas
document.body.appendChild(canvas);

var luzAmbiente = new THREE.AmbientLight(0x333333); //cria luz
luzAmbiente.position.set(5,5,5); //posiciona luz
cena.add(luzAmbiente); //adiciona luz

var luzAmbiente2 = new THREE.AmbientLight(0x333333); //cria mais luz
luzAmbiente2.position.set(0,0,2); //posiciona mais luz
cena.add(luzAmbiente2); //adiciona mais luz


//coloca textura de lua
loader = new THREE.TextureLoader()
texture1 = loader.load('https://i.imgur.com/6P4QXif.jpeg');
texture1.wrapS = THREE.RepeatWrapping;
texture1.wrapT = THREE.RepeatWrapping;
texture1.repeat.set( 1, 1 );
var materialChao = new THREE.MeshLambertMaterial({map: texture1});
var geoChao = new THREE.PlaneGeometry(4000, 4000, 100, 100); //cria geometria do chão
var chao = new THREE.Mesh(geoChao, materialChao); //cria chão
chao.position.x = 0
chao.position.y = 0 //posiciona chão
chao.position.z = 0
chao.rotation.x = Math.PI/2 + Math.PI //gira chão pra ele ficar... no chão
cena.add(chao) //adiciona chão

var geometriaOcto = new THREE.OctahedronGeometry(1,1,1);
var materialOCto = new THREE.MeshLambertMaterial({color: 0x59fd8b});
var Octo = new THREE.Mesh(geometriaOcto, materialOCto);
cena.add(Octo)

texture = new THREE.TextureLoader().load('https://s3.amazonaws.com/duhaime/blog/tsne-webgl/assets/cat.jpg');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 1, 1 );
var material = new THREE.MeshLambertMaterial({
    map: texture
  });
  var geometry = new THREE.PlaneGeometry(10, 10*.75);
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(3,3,3)
  cena.add(mesh);
  

//criação de céu
ceu = new THREE.TextureLoader().load('https://iscale.iheart.com/catalog/artist/32471814'); //pega imagem do céu
ceu.wrapS = THREE.RepeatWrapping;
ceu.wrapT = THREE.RepeatWrapping;
ceu.repeat.set( 1, 1 );
cena.background = ceu //adiciona céu no fundo





var cubeGeometry = new THREE.BoxGeometry (3,3,3);
var cubeMaterial = new THREE.MeshBasicMaterial ({color: 0x1ec876});
cube = new THREE.Mesh (cubeGeometry, cubeMaterial);
cube.position.set (0, 3, 0);
cena.add (cube);


//cria câmera
camera = new THREE.PerspectiveCamera (45, window.innerWidth/window.innerHeight, 1, 1000);
camera.position.y = 3;
camera.position.z = 0;
camera.enableZoom = true;

controls = new FirstPersonControls(camera, canvas); //cria firstPersonControls

//configura 
controls.movementSpeed = 100; 
controls.lookSpeed = 0.125; 
controls.lookVertical = false;
    

//grid de textes 
//var gridXZ = new THREE.GridHelper(10000, 1000, 0x121e79, 0x121e79);
//cena.add(gridXZ);


//cria relógio pra executar
cloqui = new THREE.Clock()

raycaster = new THREE.Raycaster();

function desenhar() {
    render.render(cena, camera)
    delta = cloqui.getDelta()
    controls.update(delta);

    //fazer cair
    if (camera.position.y > 3){
        camera.position.y = camera.position.y - (0.1+(camera.position.y/80));
    }
    //fazer não passar do chão
    if (camera.position.y < 3){
        camera.position.y = 3
    }

    raycaster.setFromCamera( controls.object, camera );
    const intersects = raycaster.intersectObjects( cube, true );
    if ( intersects.length > 0 ) {
            console.log('PEW!')
}

    requestAnimationFrame(desenhar);

}


requestAnimationFrame(desenhar);

