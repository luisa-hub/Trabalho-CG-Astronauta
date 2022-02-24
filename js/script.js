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

let raycaster
raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );
controls = new PointerLockControls( camera, document.body );

function desenhar() {
    render.render(cena, camera)
    requestAnimationFrame(desenhar);


    raycaster.ray.origin.copy( controls.getObject().position );
					raycaster.ray.origin.y -= 10;

					const intersections = raycaster.intersectObjects( objects, false );

					const onObject = intersections.length > 0;

					const delta = ( time - prevTime ) / 1000;

					velocity.x -= velocity.x * 10.0 * delta;
					velocity.z -= velocity.z * 10.0 * delta;

					velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

					direction.z = Number( moveForward ) - Number( moveBackward );
					direction.x = Number( moveRight ) - Number( moveLeft );
					direction.normalize(); // this ensures consistent movements in all directions

					if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta;
					if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta;

					if ( onObject === true ) {

						velocity.y = Math.max( 0, velocity.y );
						canJump = true;

					}

					controls.moveRight( - velocity.x * delta );
					controls.moveForward( - velocity.z * delta );

					controls.getObject().position.y += ( velocity.y * delta ); // new behavior

					if ( controls.getObject().position.y < 10 ) {

						velocity.y = 0;
						controls.getObject().position.y = 10;

						canJump = true;

					}

				


}

requestAnimationFrame(desenhar);

const onKeyDown = function ( event ) {

    switch ( event.code ) {

        case 'ArrowUp':
        case 'KeyW':
            moveForward = true;
            break;

        case 'ArrowLeft':
        case 'KeyA':
            moveLeft = true;
            break;

        case 'ArrowDown':
        case 'KeyS':
            moveBackward = true;
            break;

        case 'ArrowRight':
        case 'KeyD':
            moveRight = true;
            break;

        case 'Space':
            if ( canJump === true ) velocity.y += 350;
            canJump = false;
            break;

    }

};

const onKeyUp = function ( event ) {

    switch ( event.code ) {

        case 'ArrowUp':
        case 'KeyW':
            moveForward = false;
            break;

        case 'ArrowLeft':
        case 'KeyA':
            moveLeft = false;
            break;

        case 'ArrowDown':
        case 'KeyS':
            moveBackward = false;
            break;

        case 'ArrowRight':
        case 'KeyD':
            moveRight = false;
            break;

    }

};

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;