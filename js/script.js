var cena = new THREE.Scene(); //Cria cena
//var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); //Cria camera

var render = new THREE.WebGLRenderer(); //cria render
render.setSize(window.innerWidth, window.innerHeight);
var canvas = render.domElement;
document.body.appendChild(canvas);

var luzAmbiente = new THREE.AmbientLight(0x333333);
luzAmbiente.position.set(5,5,5);
cena.add(luzAmbiente);

var luzAmbiente2 = new THREE.AmbientLight(0x333333);
luzAmbiente2.position.set(0,0,2);
cena.add(luzAmbiente2);



var materialChao = new THREE.MeshPhongMaterial({color: 0x454f7a});
//var materialChao = new THREE.TextureLoader().load('js/lua.jpg');
var geoChao = new THREE.PlaneGeometry(5000, 5000, 100, 100);
var chao = new THREE.Mesh(geoChao, materialChao);
chao.position.x = 0
chao.position.y = 0
chao.position.z = 0
chao.rotation.x = Math.PI/2 + Math.PI
cena.add(chao)

var geometriaOcto = new THREE.OctahedronGeometry(1,1,1);
var materialOCto = new THREE.MeshLambertMaterial({color: 0x59fd8b});
var Octo = new THREE.Mesh(geometriaOcto, materialOCto);
cena.add(Octo)


//camera.position.x = 2
//camera.position.y = 6
//camera.position.z = 2

var x = 0;
var xi;
var yi;

//canvas.addEventListener("mousedown", function (e){
//    xi = e.offsetX;
//    yi = e.offsetY;
//}, false);

//canvas.addEventListener("mousemove", function (e){
//    if (e.buttons > 0){
//        camera.position.x = 8 * (xi - e.offsetX)/canvas.width;
 //       camera.position.y = 8 * (e.offsetY - yi)/canvas.height;
//        
//
 //   }
//}
//,false);

var cubeGeometry = new THREE.BoxGeometry (3,3,3);
    var cubeMaterial = new THREE.MeshBasicMaterial ({color: 0x1ec876});
    cube = new THREE.Mesh (cubeGeometry, cubeMaterial);

    cube.position.set (0, 3, 0);
    cena.add (cube);

    camera = new THREE.PerspectiveCamera (45, window.innerWidth/window.innerHeight, 1, 1000);
    camera.position.y = 20;
    camera.position.z = 20;
    camera.enableZoom = true;
    //camera.autoRotate = true;
    //camera.lookAt (new THREE.Vector3(5,90,5));
    //controls = new THREE.OrbitControls(camera, canvas.domElement);
    controls = new FirstPersonControls(camera, canvas);
    
    controls.movementSpeed = 1000; controls.lookSpeed = 0.125; controls.lookVertical = true;
    console.log(controls)

    
    var gridXZ = new THREE.GridHelper(100, 10, 0x7A4549, 0x7A4549);
    //gridXZ.setColors( new THREE.Color(0xff0000), new THREE.Color(0xffffff) );
    //gridXZ.setColors( new THREE.Color(0x7A4549), new THREE.Color(0x7A4549) );
    cena.add(gridXZ);

function desenhar() {
    render.render(cena, camera)
    console.log('aqui')
    //console.log(clock.getDelta)
    console.log('aqui')
    //var delta = this.clock.getDelta();
    //controls.update(delta);
    //update.object.y = 25;
    controls.update()
    requestAnimationFrame(desenhar);
    



				

}


requestAnimationFrame(desenhar);

var teclas = [];
/*
document.onkeydown = function (evt) {
    teclas[evt.keyCode] = true;
}

document.onkeyup = function (evt) {
    teclas[evt.keyCode] = false;
}

function movimentar() {
    if (teclas[65]) {// A
        //Tecla a
        console.log('clicado')
        camera.position.z += 1
    }
    if (teclas[68]) {// D
        //Tecla d
        camera.position.y += 1
    }
    if (teclas[87]) {// W
        // Tecla w
        camera.position.y += 80
    }

    if (teclas[83]) {// S
        // Tecla s
        camera.position.y += 80
    }
    
    if(teclas[37]){// seta esquerda
         // Tecla Seta Esquerda
    }
    if(teclas[39]){// seta direira
         // Tecla Seta Direita
    }

    if(teclas[40]){// seta baixo
        // Tecla Seta baixo
   }
   if(teclas[38]){// seta cima
        // Tecla Seta cima
   }

   if(teclas[32]){// epasso
    //espaço
   }
} */