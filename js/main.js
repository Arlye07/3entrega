//entrega n:2
//login


//let intentos=3;
//let palabraClave = "JesusCristo";
//for (let i = 1; i<=intentos; i++ ){
  //  let ingresoUsuario= prompt("Ingresa la palabra clave")
    //if(ingresoUsuario===palabraClave){
      //  console.log("Acertaste"); break
  //  }
//}

//alert(Factura);
//alert("Bienvenido a una experiencia inolvidable ");

//let pin = 123456
//console.log("Hola");
//let nombre2 = prompt("Ingresa tu nombre de usuario");//string
//let apellido2 = prompt("Ahora ingresa tu apellido de usuario");
//console.log("Hola "+nombre2+" "+ apellido2);
//let numeroFavorito = prompt("Ahora ingresa tu numero favorito requerido");
//numeroFavorito = parseInt (numeroFavorito);
//console.log(numeroFavorito);


//let clima= prompt("Quieres comenzar?");
//if (clima == 'si') {
  // console.log("comenzemos cuanto antes"); 
//}else{"comenzemos en otro momento"};


//if(nombre2 !="" || apellido2 !=""){
  //  console.log("Bienvenido/a " + nombre2 +"" + apellido2);
//}else
//console.log("los campos son requeridos");


const practicas =[
  {id:1, nombre:"consulta odontologia", precio: 2000},
  {id:2, nombre:"consulta dolor odontologia", precio: 3500},
  {id:3, nombre:"limpieza dental", precio: 3500},
  {id:4, nombre:"blanqueamiento consultorio", precio: 15000},
  {id:5, nombre:"relleno ac.hialuronico", precio: 30000},
  {id:6, nombre:"mesoterapia", precio: 5000},
  {id:7, nombre:"limpieza facial profunda", precio: 3500},
  {id:8, nombre:"drenaje linfatico manual", precio: 2200},
  {id:9, nombre:"masoterapia", precio: 2000},
]

let PIN="0000";

function login(){
    let ingresar = false;
for (let i = 2; i>=0; i-- ) {
    let userPIN= prompt ("ingresa tu PIN");   
    if (userPIN ===PIN) { alert ("Ingreso exitoso");
    ingresar = true;
    break;  
    } else{alert("Error te quedan" + i + "intentos")}
} return ingresar
}
let logueo= login();
console.log (logueo);


if (logueo){
    let scores = 001;
    let opcion= prompt ("Elige una opcion: \n1 -Scores \n2 -Usar scores acumulados \n3 -Agregar comprando \n4 -Especialidad \n5 -Buscar practica por nombre \n6 -Buscar practica por precio \n -Presiona z para finalizar.")
    //let Turneros= prompt ("Elige una Especialidad: \n1 -Estetica \n2 -Odontologia \n3 -Fisioterapia \n -Presiona z para finalizar.")
    while (opcion != "z" && opcion != "Z") {
     switch (opcion) {
        case "1":
         alert("Tienes $" + scores)   
        break;

            case "2":
                let usar= parseInt (prompt("ingresa el monto a usar"))
               if(usar <=scores){
                    scores = scores - usar;
                    alert ("Usaste $ " + usar + " Te quedan $ " + scores)
                }
                else{alert("Puntos insuficientes consigue mas")}
             break;
                
     case "3":
     let agregar = parseInt(prompt("Ingresa el monto a agregar"))
     scores = scores + agregar;
     alert("Deposito excitoso, tu nuevo saldo es de $"+ scores );
     break;
        default:
            alert ("Opcion no valida")
            break;
            
            case "4":
         alert("Turnero") 
         let Turneros= prompt ("Elige un turno: \n1 -Estetica \n2 -Odontologia \n3 -Fisioterapia \n -Presiona z para finalizar.")
         switch (Turneros) {
            case "1":
                let Estetica = prompt("Ingresa un mail, en momentos nos estaremos comunicando su turno ")
                console.log("Elegiste Estetica " + Estetica);
                alert("Elegiste Estetica " + Estetica);
                break;
                      case "2":
                    let Odontologia = prompt("Ingresa un mail, en momentos nos estaremos comunicando su turno ")
                    console.log("Elegiste Odontologia " + Odontologia);
                    alert("Elegiste Odontologia " + Odontologia);
                break;
                case "3":
                    let Fisioterapia = prompt("Ingresa un mail, en momentos nos estaremos comunicando su turno ")
                    console.log("Elegiste Fisioterapia " + Fisioterapia);
                    alert("Elegiste Fisioterapia " + Fisioterapia);
                break;
         
            default:alert ("Opcion no valida ")
                console.log("Opcion no valida");
                break;
                //Turneros= prompt ("Le gustaria seguir ? \n Elige un turno: \n1 -Estetica \n2 -Odontologia \n3 -Fisioterapia \n -Presiona z para finalizar.")
         }  
         break;
         case "5":
          //filter
let filtro= prompt("Ingresa la practica, en la especialidad que asignaste")
const encontrado = practicas.filter((practicas)=> {
  return practicas.nombre.includes(filtro.toLowerCase())
} )
console.log("Elegiste " + filtro);
console.log(encontrado);
                    alert("Elegiste  " + filtro);
          break;
          case "6":
            let filtros = prompt("Ingresa precio")
const filtrado = practicas.filter((practica)=>{
  return practica.precio <= filtros; 
} )

            console.log(filtrado);
            alert("Elegiste $" + filtros);
            break
     }  opcion= prompt ("Le gustaria seguir ? \n Elegi una opcion: \n1 -Scores \n2 -Usar scores acumulados \n3 -Agregar \n4 -Turno \n5 -Busca practica por nombre  \n6 -Buscar practica por precio \n -Presiona z para finalizar.")
    }
}
else{alert("FIN de la actividad")}
alert ("Gracias por tu particiapacion, si quieres ganar mas scores gratis puedes jugar en nuestra app, o en nuestros locales");




                                 //Entrega n:2




//map actualizar precio porcentual
const actualizacion = practicas.map(el=>{
  return{
    id: el.id,
    nombre: el.nombre,
    precio: el.precio * 1.2
  }
})
//console.log(actualizacion);

//funcion de filtrado
function findServices(arr,filtro){
  const encontrados = arr.find((practicas)=>{
    return practicas.nombre == filtro;
  })
return encontrados;
}
//let practicasEncontrado = encontrado(practicas, filtro);
//console.log(practicasEncontrado);

//filtro precio
function filtrarPorPrecio(arr, filtro){
  return arr.filter((servicio)=>{
    return servicio.precio <= filtro;
  })
  
}



//filtro generico comparativo
const filtrar= (arr, filtro, param)=>{
  return arr.filter(el=>{
    if(param == "precio"){
      return el[param]<= parseFloat(filtro);
    }
    else if(param ==  "id"){
      return el[param] == parseFloat(filtro);
    }
    else{
      return el[param].includes(filtro);
    }
  })
}

const filtroPrecio= filtrar(practicas, 2500, "precio")
const porNombre= filtrar(practicas, "imp", "nombre")
const porId= filtrar(practicas, 3, "id")

//console.log(filtroPrecio);
//console.log(porNombre);
//console.log(porId);


       //entregable 3
function calcular (op){
  switch (op){
    case "suma":
  return (param1, param2)=>param1 + param2;
  case "resta":
    return (param1, param2)=>param1 - param2;
  default:
    break;
}}
let suma= ("suma")
let resta= ("resta")
//console.log (suma(1,3,));
//console.log(resta(2,5));


//seteo variables si LS vacio entonces  =[]
let libros;
if (JSON.parse(localStorage.getItem("inventario"))){
  libro= JSON.parse(localStorage.getItem("inventario"));
}
  else {
    libros =[];
  }

//constructor del objeto
function Libro(titulo,autor,isbn,categoria,precio,img){
  this.titulo=titulo;
  this.autor=autor;
  this.isbn=isbn;
  this.categoria=categoria;
  this.precio=parseFloat(precio);
  //si campo precio vacio precio = 1
  if (precio==""){
    this.precio = 1;
  }else{
    this.precio = parseFloat (precio);
  }
  //sin campo img  vacio img  generica
  if(img==""){
    this.img= 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.960sa.com.ar%2Fplaceholder-png%2F&psig=AOvVaw26vmYJWnzNdRONlKgWf0i-&ust=1668799484920000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCID95bz5tfsCFQAAAAAdAAAAABAE';
  }else{
    this.img=img;
  }
}
//*decaracion de funciones
//cargar el inventario
function cargarInventario(arr,libro){ 
  return arr.push(libro);
}
//funcion de ls
function guardarLS(arr){
  localStorage.setItem("inventario", JSON.stringify(arr));
}
function recuperarLS(key){
return JSON.parse(localStorage.getItem(key));
}
//function busqueda general
//function filtrar(arr,filtro, param){
  //return arr.filter((el)=>{
    //if (param == "precio"){
      //return el ['$ {param} '] <=parseFloat(filtro);
    //}else{
      //return el['$ {param} '].includes(filtro);
    //}
//  });
//}
//manipular el dom
function crearHtml(arr) {
  tbody.innerHTML = "";

  let html = "";
  for (const item of arr){
    html = `<tr>
    <td>${item.titulo}</td>
    <td>${item.autor}</td>
    <td>${item.isbn}</td>
    <td>${item.categoria}</td>
    <td>${item.precio}</td>
    <td><button class="btn red" id="${item.isbn}">Borrar</button></td>
    </tr>`;
    tbody.innerHTML += html;
  }
  //agregar evento a los botones//
  const arrayBotones = document.querySelectorAll("td .btn");
  arrayBotones.forEach(btn=>{
    btn.addEventListener("click",()=>{ 
    console.log(btn.id);
    libros= libros.filter(el=>el.isbn !=btn.id);
    guardarLS(libros);
    crearHtml(libros)
   })
  })
}
function limpiarCampos(){
  titulos.value ="";
  autor.value="";
  isbn.value="";
  categoria.value="";
  precio.value="";
  img.value="";
}
//listeners
// btnGuardar.addEventListener("click",()=>{
// const nuevoLibro = new Libro(
//   titulos.value,
//   autor.value,
//   isbn.value,
//   categoria.value,
//   precio.value,
//   img.value,
// );
// cargarInventario(libros,nuevoLibro);
// limpiarCampos();
// guardarLS(libros);
// crearHtml(libros);
// });

//listeners de busqueda
// search.addEventListener("input",()=>{
//   let nuevoFiltro = Filtrar(libros,search.value,"titulo");
//   crearHtml(nuevoFiltro);
// })
//busqueda personalizada
// for(const radio of radios){
//   console.log(radio);
//   radio.addEventListener("change",()=>{
//     if(radio.checked) {
//       //llamo a funcion generica
//       search.addEventListener("input",()=>{
//         let nuevoFiltro = Filtrar(libros,search.value,radio.value);
//         crearHtml(nuevoFiltro);
//       })
//     }
//   })
// }
//json
//setear claves y valores
//  localStorage.setItem("saludo","Hola tarola");
//  localStorage.setItem("numero", 1);
//  localStorage.setItem("esValido", true);

// const btnIngresar = document.querySelector("ingresar"),
// user = document.querySelector("#user"),
// pass = document.querySelector("#pass"),
// check = document.querySelector("#recordar");

// function inicioSesion (usuarios){

// }
function recuperarLS(){
  let datos = JSON.parse(localStorage.getItem("usuarios"));
  return datos;
}
//const usuariosLS = recuperarLS();

// btnIngresar.addEventListener("click",(e)=>{

// })

const guardarLocal = (clave, valor)=> { localStorage.setItem (clave, valor)

};
//almacenar practicas
for (const practica of  practicas){
  guardarLocal(practica.id, JSON.stringify(practica));
}
//almacenar array completo
guardarLocal("listaPracticas", JSON.stringify(practicas));

const register = document.querySelector("#register"),
email = document.querySelector("#email"),
nombre = document.querySelector("#nombre"),
userReg = document.querySelector("#userReg"),
passReg = document.querySelector("#passReg"),
btnRegistrar = document.querySelector("#btnRegistrar");





//registrar

let usuario;

if (localStorage.getItem("usuarios")){
  usuarios = JSON.parse(localStorage.getItem("usuarios"));
}else
usuario = [];
//constructor del usuario
class Usuario{
  constructor(nombre,usuario,email,password){
    this.nombre=nombre;
    this.usuario=usuario;
    this.email=email;
    this.password=password;

  }
}
function limpiarCampos(){
  nombre.value ="";
  userReg.value ="";
  passReg.value ="";
  email.value  ="";
}

function guardarUsuario(usuario){
//codigo a ejecutar
return usuario.push(usuario);
}
function guardarEnStorage(elemento){
//codigo a ejecutar
let ls = localStorage.setItem("usuarios",JSON.stringify(elemento));
return ls;
}

btnRegistrar.addEventListener("click", (e)=>{
  e.preventDefault();
  const newUser = new Usuario(
    nombre.value,
    userRg.value,
    email.value,
    passReg.value
  );
  guardarUsuario(newUser);
  limpiarCampos
  guardarEnStorage(usuarios);
});

//login

const btnIngresar = document.querySelector("#ingresar"),
user = document.querySelector("#user"),
pass = document.querySelector("#pass"),
check = document.querySelector("#recordar");

//funciones
function inicioSesion(usuarios){
  let= userFound = usuarios.find(usuario=>{
    return usuario.nombre == user.value && usuario.pass == pass.value
  })
  if (userFound){
    window.location.href='./servicios'
  }else{
    document.querySelector("#mensaje").innerText ="usuario no encontrado"
  }

return userFound;
}
function recuperarLS(){
  let datos = JSON.parse(localStorage.getItem("usuarios"));
  return datos;
}
//ejecutar funciones
const usuariosLS = recuperarLS();

//listeners
btnIngresar.addEventListener("click",(e)=>{
e.preventDefault();
inicioSesion(usuarioLS)
 })




 //servicios

 const search = document.querySelector("#searchBox"),
 btnBuscar = document.querySelector("#search"),
 contenedor = document.querySelector("#.servicios"),
 nombreUser = document.querySelector("#nombreUser");

 function filtrarServicios(filtro){
  let filtrado = servicio.filter((el)=>{
    return el.nombre.includes(filtro);
  })
  return filtrado;
 }

 console.log(servicios);

 function crearHTML(array){
  let html;
  for (const servicio of array){
    html =`
    <div class="">
    <div class="card">
    <div class="card-image">
    <img src="./">
    <span class="card-title">${servicio.nombre.toUpperCase()}</span>
    </div>
    <div class="card-content">
    <p>$${servicio.precio}<p>
    </div>
    <div class="card-action">
    <button class="btn" id="${servicio.id}">comprar</button>
    </div>
    </div>
    </div>`;
contenedor.innerHTML += html;
  }
 }

 crearHTML(servicios);
// busquedas
 search.addEventListener("input", (e)=>{
  e.preventDefault();
  contenedor.innerHTML = "";
  let filtro = filtrarServicios(search.value);
  crearHTML(filtro);
 });

btnBuscar.addEventListener("click", (e)=>{
  e.preventDefault();
  contenedor.innerHTML = "";
  let filtro = filtrarServicios(search.value);
  crearHTML(filtro);
 });