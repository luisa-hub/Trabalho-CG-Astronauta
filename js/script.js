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



//planetas
const terra = new THREE.SphereGeometry( 40, 32, 16 );
var textura = new THREE.TextureLoader().load('https://media.istockphoto.com/photos/world-topographic-map-picture-id182058785?k=20&m=182058785&s=612x612&w=0&h=9ZQVMBQfHI-lWe1YFR2ps5e8UNBiHHKCsDmyvp9ZmLc=');
const terra_material = new THREE.MeshBasicMaterial( {map: textura, side: THREE.DoubleSide} );
const sphere = new THREE.Mesh( terra, terra_material );
sphere.position.set (1000, 60, 0);
cena.add( sphere );

const jupiter = new THREE.SphereGeometry( 440, 80, 16 );
var textura = new THREE.TextureLoader().load('http://www.textures4photoshop.com/tex/thumbs/jupiter-texture-thumb15.jpg');
const jupiter_material = new THREE.MeshBasicMaterial( {map: textura, side: THREE.DoubleSide} );
const sphere_jup = new THREE.Mesh( jupiter, jupiter_material );
sphere_jup.position.set (1600, 500, 500);
cena.add( sphere_jup );

const saturno = new THREE.SphereGeometry( 360, 42, 16 );
var textura = new THREE.TextureLoader().load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/297733/saturnSurface.jpg');
const saturno_material = new THREE.MeshBasicMaterial( {map: textura, side: THREE.DoubleSide} );
const sphere_saturno = new THREE.Mesh( saturno, saturno_material );
sphere_saturno.position.set (1800, 500, -500);
cena.add( sphere_saturno );

const geometry_anel2 = new THREE.CircleGeometry( 700, 60 );
var textura = new THREE.TextureLoader().load('https://www.americanscientist.org/sites/americanscientist.org/files/2017-105-6-tiscareno-3-figcap.jpg');
const material_anel2 = new THREE.MeshBasicMaterial( {map: textura,  side: THREE.DoubleSide} );
const anel2 = new THREE.Mesh( geometry_anel2, material_anel2 );
anel2.position.set (1800, 500, -500);
anel2.rotateX(200);
cena.add( anel2 );

const marte = new THREE.SphereGeometry( 20, 32, 16 );
var textura = new THREE.TextureLoader().load('https://media.istockphoto.com/photos/alien-planet-with-craters-4-picture-id488156684?b=1&k=20&m=488156684&s=170667a&w=0&h=ob6jfa9H4UDiRRnRcJtmutBd5fn39H5OfjVE2Tu6GRA=');
const marte_material = new THREE.MeshBasicMaterial( {map: textura,  side: THREE.DoubleSide} );
const sphere_mart = new THREE.Mesh( marte, marte_material );
sphere_mart.position.set (1000, 50, -100);
cena.add( sphere_mart );

const netuno = new THREE.SphereGeometry( 160, 32, 16 );
var textura = new THREE.TextureLoader().load('https://static.wikia.nocookie.net/planet-texture-maps/images/c/c1/Planetarium_neptune.jpg/revision/latest?cb=20190320175442');
const netuno_material = new THREE.MeshBasicMaterial( {map: textura, side: THREE.DoubleSide} );
const sphere_netuno = new THREE.Mesh( netuno, netuno_material );
sphere_netuno.position.set (1000, 200, -300);
cena.add( sphere_netuno );

const urano = new THREE.SphereGeometry( 160, 32, 16 );
var textura = new THREE.TextureLoader().load('https://media.istockphoto.com/vectors/abstract-background-of-uranus-surface-vector-id1309211565?b=1&k=20&m=1309211565&s=170667a&w=0&h=GlmhtT77HXr5tkPDt3X__CsBoTnuXaO38_jkg_7Ha2o=');
const urano_material = new THREE.MeshBasicMaterial( {map: textura, side: THREE.DoubleSide} );
const sphere_urano = new THREE.Mesh( urano, urano_material );
sphere_urano.position.set (1000, 200, -900);
cena.add( sphere_urano );

const venus = new THREE.SphereGeometry( 38, 32, 16 );
var textura = new THREE.TextureLoader().load('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/90ad8232-4e09-4675-b9e7-bc2898960870/dc0ss1u-9ce1cbd0-6f56-4bb1-ab24-e64089914504.png/v1/fill/w_1024,h_512,q_80,strp/venus_cloud_texture_map_by_jcp_johncarlo_dc0ss1u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvOTBhZDgyMzItNGUwOS00Njc1LWI5ZTctYmMyODk4OTYwODcwXC9kYzBzczF1LTljZTFjYmQwLTZmNTYtNGJiMS1hYjI0LWU2NDA4OTkxNDUwNC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.W_cmzd6frwnuf_p4_K40ME9cIai41bgUtrIImysmwaM');
const venus_material = new THREE.MeshBasicMaterial( {map: textura, side: THREE.DoubleSide} );
const sphere_venus = new THREE.Mesh( venus, venus_material );
sphere_venus.position.set (1000, 60, -600);
cena.add( sphere_venus );


const mercurio = new THREE.SphereGeometry( 15.3, 32, 16 );
var textura = new THREE.TextureLoader().load('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e527eb9-99dc-4554-9ea2-dd0e84e79860/dcklc0u-feeae0dc-f164-436a-8e75-5c9a7f3e3c71.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZlNTI3ZWI5LTk5ZGMtNDU1NC05ZWEyLWRkMGU4NGU3OTg2MFwvZGNrbGMwdS1mZWVhZTBkYy1mMTY0LTQzNmEtOGU3NS01YzlhN2YzZTNjNzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Rvqb6JB7rcl6c5uQgEh-wIHbhNeqiIe7arbgKfBwAmY');
const mercurio_material = new THREE.MeshBasicMaterial( {map: textura, side: THREE.DoubleSide} );
const sphere_mercurio = new THREE.Mesh( mercurio, mercurio_material );
sphere_mercurio.position.set (1000, 40, 100);
cena.add( sphere_mercurio );

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

//cria relógio pra executar
cloqui = new THREE.Clock()

raycaster = new THREE.Raycaster();

function desenhar() {
    render.render(cena, camera)
    delta = cloqui.getDelta()
    controls.update(delta);

    //fazer cair
    if (camera.position.y > 700){
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

