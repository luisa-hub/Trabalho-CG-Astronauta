var cena = new THREE.Scene(); //Cria cena
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); //Cria camera

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
var geoChao = new THREE.PlaneGeometry(5000, 5000, 100, 100);
var chao = new THREE.Mesh(geoChao, materialChao);
chao.position.x = 0
chao.position.y = 0
chao.position.z = 0
cena.add(chao)

var geometriaOcto = new THREE.OctahedronGeometry(1,1,1);
var materialOCto = new THREE.MeshLambertMaterial({color: 0x59fd8b});
var Octo = new THREE.Mesh(geometriaOcto, materialOCto);
cena.add(Octo)


camera.position.x = 2
camera.position.y = 6
camera.position.z = 2

var x = 0;
var xi;
var yi;

canvas.addEventListener("mousedown", function (e){
    xi = e.offsetX;
    yi = e.offsetY;
}, false);

canvas.addEventListener("mousemove", function (e){
    if (e.buttons > 0){
        camera.position.x = 8 * (xi - e.offsetX)/canvas.width;
        camera.position.y = 8 * (e.offsetY - yi)/canvas.height;
        

    }
}
,false);

var cubeGeometry = new THREE.BoxGeometry (10,10,10);
    var cubeMaterial = new THREE.MeshBasicMaterial ({color: 0x1ec876});
    cube = new THREE.Mesh (cubeGeometry, cubeMaterial);

    cube.position.set (0, 0, 0);
    cena.add (cube);

    camera = new THREE.PerspectiveCamera (45, window.innerWidth/window.innerHeight, 1, 10000);
    camera.position.y = 460;
    camera.position.z = 400;
    camera.lookAt (new THREE.Vector3(0,0,0));

    controls = new THREE.OrbitControls (camera, canvas.domElement);
    
    var gridXZ = new THREE.GridHelper(100, 10);
    gridXZ.setColors( new THREE.Color(0xff0000), new THREE.Color(0xffffff) );
    cena.add(gridXZ);

function desenhar() {
    render.render(cena, camera)
    requestAnimationFrame(desenhar);



				

}


requestAnimationFrame(desenhar);

