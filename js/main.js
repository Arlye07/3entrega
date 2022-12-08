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
////}else
//console.log("los campos son requeridos");

const practicas = [
  { id: 1, nombre: "consulta odontologia", precio: 2000 },
  { id: 2, nombre: "consulta dolor odontologia", precio: 3500 },
  { id: 3, nombre: "limpieza dental", precio: 3500 },
  { id: 4, nombre: "blanqueamiento consultorio", precio: 15000 },
  { id: 5, nombre: "relleno ac.hialuronico", precio: 30000 },
  { id: 6, nombre: "mesoterapia", precio: 5000 },
  { id: 7, nombre: "limpieza facial profunda", precio: 3500 },
  { id: 8, nombre: "drenaje linfatico manual", precio: 2200 },
  { id: 9, nombre: "masoterapia", precio: 2000 },
];
const productos = [
  { id: 1, marca: "fine ", nombre: "beauty", precio: 7000 },
  { id: 2, marca: "fine ", nombre: "power", precio: 8000 },
  { id: 3, marca: "lidherma", nombre: "mascara", precio: 1500 },
  { id: 4, marca: "lidherma", nombre: "texture", precio: 1500 },
  { id: 5, marca: "lidherma", nombre: "consealer", precio: 1500 },
  { id: 6, marca: "lidherma", nombre: "cerum consealer", precio: 1500 },
  { id: 7, marca: "lidherma", nombre: "treatment oil", precio: 1800 },
  { id: 8, marca: "lidherma", nombre: "skinBooster", precio: 2200 },
  { id: 9, marca: "lidherma", nombre: "biosmotic", precio: 2000 },
  { id: 10, marca: "lidherma", nombre: "lips Care 3D", precio: 2000 },
  { id: 11, marca: "lidherma", nombre: "Lumi ", precio: 2000 },
  { id: 12, marca: "lidherma", nombre: "ultra retinol", precio: 2000 },
  { id: 13, marca: "lidherma", nombre: "sense control", precio: 2000 },
  { id: 14, marca: "lidherma", nombre: "anti age factor", precio: 3000 },
  { id: 14, marca: "lidherma", nombre: "cell active", precio: 2000 },
  { id: 16, marca: "kamikaze", nombre: "limpiador facial", precio: 800 },
  { id: 17, marca: "kamikaze", nombre: "Lucero", precio: 900 },
  { id: 18, marca: "kamikaze", nombre: "cielo", precio: 2200 },
  { id: 19, marca: "kamikaze", nombre: "agua termal", precio: 1500 },
  { id: 20, marca: "Biobellus", nombre: "jojoba", precio: 1500 },
  { id: 21, marca: "Biobellus", nombre: "suero", precio: 1200 },
  { id: 22, marca: "Biobellus", nombre: "gel", precio: 2200 },
  { id: 23, marca: "Biobellus", nombre: "skin cell", precio: 3200 },
  { id: 24, marca: "Biobellus", nombre: "emulsion ", precio: 1200 },
  { id: 25, marca: "Biobellus", nombre: "facila relax", precio: 1200 },
  { id: 26, marca: "Biobellus", nombre: "suero", precio: 1200 },
];

// let PIN="0000";

// function login(){
//     let ingresar = false;
// for (let i = 2; i>=0; i-- ) {
//     let userPIN= prompt ("ingresa tu PIN");
//     if (userPIN ===PIN) { alert ("Ingreso exitoso");
//     ingresar = true;
//     break;
//     } else{alert("Error te quedan" + i + "intentos")}
// } return ingresar
// }
// let logueo= login();
// console.log (logueo);

// if (logueo){
//     let scores = 001;
//     let opcion= prompt ("Elige una opcion: \n1 -Scores \n2 -Usar scores acumulados \n3 -Agregar comprando \n4 -Especialidad \n5 -Buscar practica por nombre \n6 -Buscar practica por precio \n -Presiona z para finalizar.")
//     //let Turneros= prompt ("Elige una Especialidad: \n1 -Estetica \n2 -Odontologia \n3 -Fisioterapia \n -Presiona z para finalizar.")
//     while (opcion != "z" && opcion != "Z") {
//      switch (opcion) {
//         case "1":
//          alert("Tienes $" + scores)
//         break;

//             case "2":
//                 let usar= parseInt (prompt("ingresa el monto a usar"))
//                if(usar <=scores){
//                     scores = scores - usar;
//                     alert ("Usaste $ " + usar + " Te quedan $ " + scores)
//                 }
//                 else{alert("Puntos insuficientes consigue mas")}
//              break;

//      case "3":
//      let agregar = parseInt(prompt("Ingresa el monto a agregar"))
//      scores = scores + agregar;
//      alert("Deposito excitoso, tu nuevo saldo es de $"+ scores );
//      break;
//         default:
//             alert ("Opcion no valida")
//             break;

//             case "4":
//          alert("Turnero")
//          let Turneros= prompt ("Elige un turno: \n1 -Estetica \n2 -Odontologia \n3 -Fisioterapia \n -Presiona z para finalizar.")
//          switch (Turneros) {
//             case "1":
//                 let Estetica = prompt("Ingresa un mail, en momentos nos estaremos comunicando su turno ")
//                 console.log("Elegiste Estetica " + Estetica);
//                 alert("Elegiste Estetica " + Estetica);
//                 break;
//                       case "2":
//                     let Odontologia = prompt("Ingresa un mail, en momentos nos estaremos comunicando su turno ")
//                     console.log("Elegiste Odontologia " + Odontologia);
//                     alert("Elegiste Odontologia " + Odontologia);
//                 break;
//                 case "3":
//                     let Fisioterapia = prompt("Ingresa un mail, en momentos nos estaremos comunicando su turno ")
//                     console.log("Elegiste Fisioterapia " + Fisioterapia);
//                     alert("Elegiste Fisioterapia " + Fisioterapia);
//                 break;

//             default:alert ("Opcion no valida ")
//                 console.log("Opcion no valida");
//                 break;
//                 //Turneros= prompt ("Le gustaria seguir ? \n Elige un turno: \n1 -Estetica \n2 -Odontologia \n3 -Fisioterapia \n -Presiona z para finalizar.")
//          }
//          break;
//          case "5":
//           //filter
//let filtro= prompt("Ingresa la practica, en la especialidad que asignaste")
const encontrado = practicas.filter((practicas) => {
  // return practicas.nombre.includes(filtro.toLowerCase())
});
//console.log("Elegiste " + filtro);
//console.log(encontrado);
//                    alert("Elegiste  " + filtro);
//        break;
//           case "6":
//             let filtros = prompt("Ingresa precio")
// const filtrado = practicas.filter((practica)=>{
//   return practica.precio <= filtros;
// } )

//             console.log(filtrado);
//             alert("Elegiste $" + filtros);
//             break
//      }  opcion= prompt ("Le gustaria seguir ? \n Elegi una opcion: \n1 -Scores \n2 -Usar scores acumulados \n3 -Agregar \n4 -Turno \n5 -Busca practica por nombre  \n6 -Buscar practica por precio \n -Presiona z para finalizar.")
//     }
// }
// else{alert("FIN de la actividad")}
// alert ("Gracias por tu particiapacion, si quieres ganar mas scores gratis puedes jugar en nuestra app, o en nuestros locales");

//Entrega n:2

// //map actualizar precio porcentual
// const actualizacion = practicas.map(el=>{
//   return{
//     id: el.id,
//     nombre: el.nombre,
//     precio: el.precio * 1.2
//   }
// })
// //console.log(actualizacion);

// funcion de filtrado
function findServices(arr, filtro) {
  const encontrados = arr.find((practicas) => {
    return practicas.nombre == filtro;
  });
  return encontrados;
}
//let practicasEncontrado = encontrado(practicas, filtro);
//console.log(practicasEncontrado);

// //filtro precio
// function filtrarPorPrecio(arr, filtro){
//   return arr.filter((servicio)=>{
//     return servicio.precio <= filtro;
//   })

// }

// //filtro generico comparativo
// const filtrar= (arr, filtro, param)=>{
//   return arr.filter(el=>{
//     if(param == "precio"){
//       return el[param]<= parseFloat(filtro);
//     }
//     else if(param ==  "id"){
//       return el[param] == parseFloat(filtro);
//     }
//     else{
//       return el[param].includes(filtro);
//     }
//   })
// }

// const filtroPrecio= filtrar(practicas, 2500, "precio")
// const porNombre= filtrar(practicas, "imp", "nombre")
// const porId= filtrar(practicas, 3, "id")

// //console.log(filtroPrecio);
// //console.log(porNombre);
// //console.log(porId);

//        //entregable 3
// function calcular (op){
//   switch (op){
//     case "suma":
//   return (param1, param2)=>param1 + param2;
//   case "resta":
//     return (param1, param2)=>param1 - param2;
//   default:
//     break;
// }}
// let suma= ("suma")
// let resta= ("resta")
// //console.log (suma(1,3,));
// //console.log(resta(2,5));

// //seteo variables si LS vacio entonces  =[]
// let libros;
// if (JSON.parse(localStorage.getItem("inventario"))){
//   libro= JSON.parse(localStorage.getItem("inventario"));
// }
//   else {
//     libros =[];
//   }

// //constructor del objeto
// function Libro(titulo,autor,isbn,categoria,precio,img){
//   this.titulo=titulo;
//   this.autor=autor;
//   this.isbn=isbn;
//   this.categoria=categoria;
//   this.precio=parseFloat(precio);
//   //si campo precio vacio precio = 1
//   if (precio==""){
//     this.precio = 1;
//   }else{
//     this.precio = parseFloat (precio);
//   }
//   //sin campo img  vacio img  generica
//   if(img==""){
//     this.img= 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.960sa.com.ar%2Fplaceholder-png%2F&psig=AOvVaw26vmYJWnzNdRONlKgWf0i-&ust=1668799484920000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCID95bz5tfsCFQAAAAAdAAAAABAE';
//   }else{
//     this.img=img;
//   }
// }
// //*decaracion de funciones
// //cargar el inventario
// function cargarInventario(arr,libro){
//   return arr.push(libro);
// }
//funcion de ls
// function guardarLS(arr){
//   localStorage.setItem("inventario", JSON.stringify(arr));
// }
// function recuperarLS(key){
// return JSON.parse(localStorage.getItem(key));
// }
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
  for (const item of arr) {
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
  arrayBotones.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(btn.id);
      libros = libros.filter((el) => el.isbn != btn.id);
      guardarLS(libros);
      crearHtml(libros);
    });
  });
}
function limpiarCampos() {
  titulos.value = "";
  autor.value = "";
  isbn.value = "";
  categoria.value = "";
  precio.value = "";
  img.value = "";
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
//sweetalert
// cargarInventario(local, nuevolibro);
// limpiarCampos();
// guardarLS(local);

/* swal.fire({
  position: 'top-end',
  icon: 'succes',
  title: 'libro Guardado'
  showConfirmButton: false,
  timer: 1500 } ) */

// Toastify({
//   Text: "libro guardado",
//   duration: 3000,
//   gravity:"top",
//   position: "left",
//   stopOnFucos: true,
//   style:{
//     background: "linear-gradient(to right,#00b09b, #96c93d)",
//     fontSize: "20px",
//   },
//   onclick:function([])
// })//.showToast();
//crearHtml(local);

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
//  localStorage.removeItem('listaPracticas')
//localStorage.clear()
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
// function recuperarLS(){
//   let datos = JSON.parse(localStorage.getItem("usuarios"));
//   return datos;
// }
//const usuariosLS = recuperarLS();

// btnIngresar.addEventListener("click",(e)=>{

// })

// const guardarLocal = (clave, valor)=> { localStorage.setItem (clave, valor)

// };
//almacenar practicas
// for (const practica of  practicas){
//   guardarLocal(practica.id, JSON.stringify(practica));
// }
// //almacenar array completo
// guardarLocal("listaPracticas", JSON.stringify(practicas));

// const register = document.querySelector("#register"),
// email = document.querySelector("#email"),
// nombre = document.querySelector("#nombre"),
// userReg = document.querySelector("#userReg"),
// passReg = document.querySelector("#passReg"),
// btnRegistrar = document.querySelector("#btnRegistrar");

//registrar

// let usuario;

// if (localStorage.getItem("usuarios")){
//   usuarios = JSON.parse(localStorage.getItem("usuarios"));
// }else
// usuario = [];
// //constructor del usuario
// class Usuario{
//   constructor(nombre,usuario,email,password){
//     this.nombre=nombre;
//     this.usuario=usuario;
//     this.email=email;
//     this.password=password;

//   }
// }
// function limpiarCampos(){
//   nombre.value ="";
//   userReg.value ="";
//   passReg.value ="";
//   email.value  ="";
// }

// function guardarUsuario(usuario){
// //codigo a ejecutar
// return usuario.push(usuario);
// }
// function guardarEnStorage(elemento){
// //codigo a ejecutar
// let ls = localStorage.setItem("usuarios",JSON.stringify(elemento));
// return ls;
// }

// btnRegistrar.addEventListener("click", (e)=>{
//   e.preventDefault();
//   const newUser = new Usuario(
//     nombre.value,
//     userRg.value,
//     email.value,
//     passReg.value
//   );
//   guardarUsuario(newUser);
//   limpiarCampos
//   guardarEnStorage(usuarios);
// });

// //login

// const btnIngresar = document.querySelector("#ingresar"),
// user = document.querySelector("#user"),
// pass = document.querySelector("#pass"),
// check = document.querySelector("#recordar");

// //funciones
// function inicioSesion(usuarios){
//   let= userFound = usuarios.find(usuario=>{
//     return usuario.nombre == user.value && usuario.pass == pass.value
//   })
//   if (userFound){
//     window.location.href='./servicios'
//   }else{
//     document.querySelector("#mensaje").innerText ="usuario no encontrado"
//   }

// return userFound;
// }
// function recuperarLS(){
//   let datos = JSON.parse(localStorage.getItem("usuarios"));
//   return datos;
// }
// //ejecutar funciones
// const usuariosLS = recuperarLS();

// //listeners
// btnIngresar.addEventListener("click",(e)=>{
// e.preventDefault();
// inicioSesion(usuarioLS)
//  })

//servicios

//  const search = document.querySelector("#searchBox"),
//  btnBuscar = document.querySelector("#search"),
//  //contenedor = document.querySelector("#.servicios"),
//  nombreUser = document.querySelector("#nombreUser");

//  function filtrarServicios(filtro){
//   let filtrado = servicio.filter((el)=>{
//     return el.nombre.includes(filtro);
//   })
//   return filtrado;
//  }

//  //console.log(servicios);

//  function crearHTML(array){
//   let html;
//   for (const servicio of array){
//     html =`
//     <div class="">
//     <div class="card">
//     <div class="card-image">
//     <img src="./">
//     <span class="card-title">${servicio.nombre.toUpperCase()}</span>
//     </div>
//     <div class="card-content">
//     <p>$${servicio.precio}<p>
//     </div>
//     <div class="card-action">
//     <button class="btn" id="${servicio.id}">comprar</button>
//     </div>
//     </div>
//     </div>`;
// contenedor.innerHTML += html;
//   }
//  }

//crearHTML(servicios);
// busquedas
//  search.addEventListener("input", (e)=>{
//   e.preventDefault();
//   contenedor.innerHTML = "";
//   let filtro = filtrarServicios(search.value);
//   crearHTML(filtro);
//  });

// btnBuscar.addEventListener("click", (e)=>{
//   e.preventDefault();
//   contenedor.innerHTML = "";
//   let filtro = filtrarServicios(search.value);
//   crearHTML(filtro);
//  });

// entrega 3

// document.title = "login"
// //querySelector
// const titulo = document.querySelector("h1 span"),
// tituloSecundario = document.querySelector("h2");

// titulo.innerText = "Login";
// TituloSecundario.innerText =  "Eventos";

//Array Servicios

// //funcion de busqueda
//  function buscarServicio(arr,filtro){
//  const encontrado =arr.find((el)=>{
//   return el.nombre.includes(filtro);
//  });
//  return encontrado;
// }
// function filtrarServicios(arr,filtro){

// }

//eventos click
const btnBuscar = document.querySelector("#btnSearch");
console.log("btnSearch");
btnBuscar.addEventListener("click", () => {
  console.log("Hiciste click");
});
//evento input
const input = document.querySelectorAll("input");
console.log(input);
// const button = document.querySelectorAll("button");
// console.log(button);

const select = document.querySelector('select[name="talles"]');
console.log(select);
// const button = document.querySelectorAll("button");
// console.log(button);

//change
select.addEventListener("change", () => {
  let option = select.options[select.selectedIndex].value;
  console.log(option);
});
//funcion de busqueda
function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}
// funcion de busqueda filtro
function filtarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}

//evento input
inputSearch.addEventListener("input", () => {
  const encontrado = buscarServicio(practicas, inputSearch.value.toLowerCase());
  console.log(encontrado);
});
//evento input filtro
// inputSearch.addEventListener('input',()=>{
//   const filtrado = filtrarServicio(practicas,inputSearch.value.toLowerCase())
//   console.log(filtrado);
// })

//formularios
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let formu = e.target;
  console.log("formulario enviado");
  console.log(formu);
  console.log(formu.children[2].value);
  console.log(formu.children[6].value);
  console.log(formu.children[9].value);
  console.log(formu.children[12].value);
});
const almacenados = [];
const formularios = document.querySelector("form"),
  checkbok = document.getElementById("check"),
  edad = document.getElementById("edad"),
  nombre = document.getElementById("nombre"),
  password = document.getElementById("password"),
  email = document.getElementById("email"),
  p = document.querySelector("p");

function guardarLS(valor) {
  let user = {
    usuario: nombre.value,
    edad: edad.value,
    email: email.value,
    password: password.value,
  };
  if (
    user.usuario == "" ||
    user.edad == "" ||
    user.email == "" ||
    user.password == ""
  ) {
    pract.innerText = "Todos los campos son necesarios";
    return;
  } else {
    if (valor === "sessionStorage") {
      sessionStorage.setItem("item", JSON.stringify(user));
    }
    if (valor === "localStorage") {
      localStorage.setItem("item", JSON.stringify(user));
    }
  }
  return user;
}
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkbok.checked) {
    guardarLS("localStorage");
  } else {
    guardarLS("sessionStorage");
  }
});
//local storage JSON
// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);
//   console.log(clave);
// }
const pract = { nombre: "consulta odontologica", precio: 2000 };
const practLS = JSON.stringify(pract);
//console.log(practLS);

localStorage.setItem("practicas", practLS);
const practObj = JSON.parse(localStorage.getItem("practicas"));
//console.log(practObj);

function filtrar(arr, filtro) {
  return arr.filter((el) => el.nombre.includes(filtro));
}
function encontrar(arr, filtro) {
  return arr.find((el) => el.nombre.includes(filtro));
}
// let filtrado= filtar(practicas, "ma")
// console.log(filtrado);
// const encontrados= encontrar(practicas,email.value)
// almacenado.push(encontrados)
// localStorage.setItem("filtrado",JSON.stringify(almacenado))

// ///////
// const span= document.querySelector("span"),
// guardar = document.querySelector(".btn-success"),
// mostrar = document.querySelector(".btn-primary"),
// borrar = document.querySelector(".btn-danger");

// function crearLS(){
//   const ingreso= document.getElementById("ingreso");
//   localStorage.setItem("valor",ingreso.value);
// }
// function mostrarLS() {
//   span.innerText = localStorage.getItem("valor");
// }
// function borrarLS() {
//   localStorage.removeItem("valor")
// }
// //listeners
// guardar.addEventListener("click", crearLS);
// mostrar.addEventListener('click', mostrarLS)
// borrar.addEventListener('click', borrarLS)
// //////

//Entrega finallllll

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const cardProd = document.getElementById("prodCard");
const verCarrito = document.getElementById("carrito");
const carritoCard = document.getElementById("carritoCard");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const pagarP = document.getElementById("pagar");
const search = document.getElementById("search");
const radio = document.querySelectorAll('input[typer="radio"]');

//ruta relativa
// const divProductos= document.getElementById('productos');
// let carro = []

// fetch('https://api.npoint.io/1564735a417761fa8283')
//   .then(res=>res.json())
//   .then(data=>{
//    console.log(data);
//   // renderServicios(data)
//    })

//    productos.forEach((producto) =>{
//     const div = document.createElement('div')
//     div.classList.add('producto')
//     div.innerHTML=`
//     <div class="card">
//     <img src="${producto.img}">
//     <h2 class = "nombre">${producto.nombre}</h2>
//     <p class = "precio">precio:$ ${producto.precio} </p>
//     <button id="agregar${producto.id}"class= "boton-agregar">Agregar <i class="fas fa-shopping-cart>"</i></button>
//     `
//     divProductos.appendChild(div)
//    })

// const agregarAlCarro = (prodId) =>{
//   const item = stockProductos.find(  (prod)=> prod.id === prodId )
// }

//ASYNC AWAIT
//  async function fetchProd() {
//   const response = await fetch("./data/datos.json");
//    const datos = await response.json();

//    console.log(datos);
//    renderServicios(datos);

//fetchProd()

function crearHtml(arr) {
  cards.innerHTML = "";
}
// const card = document.createElement("div");
//card.className = "card";

//   for (const item of arr) {
//     cards.innerHTML = `
//     <div class="card">
//     <img src="${item.img}">
//     <h2 class = "nombre">${item.nombre}</h2>
//     <p> class = "precio"$ ${item.precio} </p>
//     </div>
//     `;

//     //cardProd.append(card);

//     let comprar = document.createElement("button");
//     comprar.className = "comprar";
//     comprar.innerText = "Comprar";
//     cardProd.append(comprar);

//     comprar.addEventListener("click", () => {
//       const repetido = carrito.some(
//         (prodRepetido) => prodRepetido.id === product.id
//       );

//       if (repetido) {
//         carrito.map((el) => {
//           if (el.id === product.id) {
//             el.cantidad++;
//           }
//         });
//       } else {
//         carrito.push({
//           id: producto.id,
//           nombre: producto.nombre,
//           precio: producto.precio,
//           img: producto.img,
//           cantidad: producto.cantidad,
//         });
//       }
//       cantidadCarrito();
//       guardarLS();
//       // carritoCantidad();
//       //guardarLocal();

//       Toastify({
//         text: "Producto agregado al carrito",
//         className: "agregar",
//         gravity: "top",
//         position: "right",
//         duration: 2300,
//         style: {
//           background: "linear-gradient(to right, #0012b0, #3f4aad)",
//         },
//       }).showToast();
//     });
//     cardProd.innerHTML += cards;
//   }

// crearHtml(datos);
// function filtrar(arr, filtro, param) {
//   return arr.filter((el) => {
//     if (param == "precio") {
//       return el[`${param}`] <= filtro;
//     } else {
//       return el[`${param}`].includes(filtro);
//     }
//   });
// }

// search.addEventListener("input", () => {
//   let nuevoFiltro = filtrar(dats, search.value.toLowerCase(), "nombre");
//   crearHtml(nuevoFiltro);
// });

// for (const radio of radios) {
//   radio.addEventListener("change", () => {
//     if (radio.checked) {
//       search.addEventListener("input", () => {
//         let nuevoFiltro = filtrar(datos, search.value, radio.value);
//         crearHtml(nuevoFiltro);
//       });
//     }
//   });
// }
// }

// ejemplo

// const contenedor = document.querySelector('#contenedorTarjeta');
// const container = document.querySelector('#cardContainer');
// const selectCasa = document.querySelector('#casa');
// const btnBusca = document.querySelector('#buscar');
// const searchBtn = document.querySelector('#search');

// function filtrarCasa(array){
//   const casa = selectCasa.value;
//   if(!casa){
//     return array;
//   }else{
//     return array.filter((item)=> item.casaDeHowarts == casa);
//   }

// }

// function crearHTML(array){
//   contenedor.innerHTML = '';
//   container.innerHTML = '';
//   array.forEach((personaje) => {
//     const tarjeta = `
//     <div class="col">
//     <div class="card h-100">
//         <img src="${personaje.imagen}" class="card-img-top" alt="${personaje.apodo}">
//         <div class="card-body">
//             <h5 class="card-title">${personaje.apodo} </h5>
//             <p class="card-text">Nombre: ${personaje.personaje} </p>
//             <p class="card-text">Casa: ${personaje.casaDeHogwarts} </p>
//             <p class="card-text">Interpretado: ${personaje.interpetrado_por} </p>
//         </div>
//     </div>
// </div>`;
// contenedor.innerHTML += tarjeta;
//   })
// }

// btnBuscar.addEventListener('click',()=>{
//   fetch('https://api.npoint.io/1564735a417761fa8283')
//   .then(response => response.json())
//   .then(data=>{
//     console.log(data);
//     const filtrado =  filtrarCasa(data)
//     crearHTML(filtrado)
//   } )

// })

// function houseFilter(array){
//   let house = selectCasa.value;
//   if(!house){
//     return array;
//   }else{
//     return array.filter((item)=> item.house== house);
//   }

// }

// function createHTML(array){
//   contenedor.innerHTML=''
//   container.innerHTML=''
//   array.forEach((character)=>{
//     const card = `
//     <div class="col">
//     <div class="card h-100">
//         <img src="${character.image}" class="card-img-top" alt="${character.name}">
//         <div class="card-body">
//             <h5 class="card-title">${character.name} </h5>
//             <p class="card-text">Especie: ${character.specie} </p>
//             <p class="card-text">Nacimiento: ${character.dateOfBirth} </p>
//             <p class="card-text">Casa: ${character.house} </p>
//             <p class="card-text">Patronus: ${character.patronus} </p>
//             <p class="card-text">Interpretado: ${character.actor} </p>
//         </div>
//     </div>
// </div>`;
// container.innerHTML +=  card;
//   })
// }

// async function bringData(){
//   const response = await fetch ('./js/data.json');
//   const data = await response.json();

//   crearHTML(houseFilter(data));
// }
//  searchBtn.addEventListener('click',()=>{
//    bringData();
//  })

////////////////////

////////////////////////////////////////////
const divProductos = document.getElementById("productos");

let cart = {
  items: [],
};

console.log("Carrito inicializado", cart);

async function getProductos() {
  const productos = await fetch('https://api.npoint.io/1c01982519be34f2cd5e').then(res => res.json());
  //const productos = await fetch('https://api.npoint.io/1c01982519be34f2cd5e').then(res => res.json());
  //const productos = await fetch('https://api.npoint.io/51afc3f3c79d952e78e5').then(res => res.json());
  //https://www.npoint.io/docs/24ca3428992e2b54ce76
  //const productos = await fetch('https://api.npoint.io/24ca3428992e2b54ce76').then(res => res.json());
  productos.forEach((prod) => {
    const producto = document.createElement("div");

    producto.setAttribute("class", "productoClase");

    const botonAgregarCarrito = document.createElement("button");
    const botonBorrarDelCarrito = document.createElement("button");
    //const botonFinDelCarrito = document.createElement('button');
    // const inImg = document.createElement('img');

    //imagen
    const imagenElement = document.createElement("img");
    imagenElement.setAttribute("src", prod.image);
    
    //texto a cada uno
    botonAgregarCarrito.innerText = "Agregar";
    botonBorrarDelCarrito.innerText = "Quitar";
    //botonFinDelCarrito.innerText = 'Finalizar'
    //inImg.innerHTML=` <div class="card fondoDos fon">
    //<img src="./Imagenes/productos/fine beauty.jpg" alt="">
    //</div>`

    // Le colocamos el value
    botonAgregarCarrito.setAttribute("value", prod.nombre);
    botonBorrarDelCarrito.setAttribute("value", prod.nombre);
    // botonFinDelCarrito.setAttribute('value', prod.nombre);
    /*
        Equivalen a
        <button value='nombredeproducto'>Agregar al carrito</button>
        <button value='nombredeproducto'>Quitar del carrito</button>
        <button value='nombredeproducto'>Gracias por tu compra</button>
        */

        //nuestro div que contiene los botones un texto donde va a ser el nombre y precio
    producto.innerText = prod.nombre + " precio: " + prod.precio;

    //Al boton agregar carrito le colocamos un escucha
    botonAgregarCarrito.addEventListener("click", () => {
      cart.items.push(prod.nombre);
      swal({
        title: "Agregaste al carrito",
        text: prod.nombre,
        icon: "success",
      });

      console.log("Carrito actual", cart);

      localStorage.setItem("carrito", JSON.stringify(cart));
    });

    botonBorrarDelCarrito.addEventListener("click", (event) => {
      cart.items = cart.items.filter(function (p) {
        return p !== event.target.value;
      });
      //Lanzamos sweet alert
      swal({
        title: "Borraste del carrito",
        text: prod.nombre,
        icon: "warning",
      });
      //Log del estado actual del carrito
      console.log("Carrito actual", cart);
      //Actualizamos localStorage
      localStorage.setItem("carrito", JSON.stringify(cart));
    });
    //   botonFinDelCarrito.addEventListener('click', (event) => {

    //     function recuperarLS(carrito){
    //       return JSON.parse(localStorage.getItem(carrito))
    //     }
    //     //Lanzamos sweet alert
    //     swal({
    //         title: "Gracias por tu compra",
    //         text: "Puede retirar por el local (Catamarca al 1212) ",
    //         icon: "info",
    //     });
    //     //Log del estado actual del carrito
    //     console.log('Carrito Fin', cart);
    //     //Actualizamos localStorage
    //     localStorage.setItem('carrito', JSON.stringify(cart))
    // })

    //A nuestro div que encapsula el producto le agregamos el boton de agregar carrito y borrar del carrito
    // appendChild
    producto.appendChild(imagenElement);
    producto.appendChild(botonAgregarCarrito);
    producto.appendChild(botonBorrarDelCarrito);
    //producto.appendChild(botonFinDelCarrito);
    // Equivale a:
    /*
        <div>
        fine , beauty precio: 7000
            <button value='fine , beauty'>Agregar al carrito</button>
            <button value='fine , beauty'>Quitar del carrito</button>
            <button value='fine , beauty'>Finalizar compra</button>
        </div>
        */
    divProductos.appendChild(producto);
    const carrito = [];
    carrito.length === 0 && console.log("El carrito esta vacio!");
  })
}
const finishPurchase = document.getElementById('finishPurchase');
finishPurchase.addEventListener('click', function(){
    console.log('Presionaste el boton finalizar compra');
    console.log('carrito:', cart);
    swal({
        title: "Compra exitosa",
        text: cart.items.toString(),
        icon: "success",
    });
})
//Ejecutamos
getProductos();








/////// ///////////////////////////////////////
//////////////////////////////
const prodd = document.getElementsByClassName("btn");
//console.log(prodd[2].innerText);

const botonFinDelCarrito = document.createElement("button");
botonFinDelCarrito.innerText = "Finalizar";

//$contenedor.appendChild(botonFinDelCarrito);

const btn = document.getElementsByClassName("btn");
// console.log(btn[2].innerHTML);
//console.log(btn[3].innerText= "<button>hola</button>");
// console.log(btn[4].innerHTML);
// for (const p of btn){
//   console.log(p.innerHTML);
// }
//h2[4].classname

//////////////////////////

// const contenedorProductos = document.getElementById('contenedor-productos');

// productos.forEach((producto)=>{
//   const div = document.createElement('div')
//   div.classList.add('producto')
//   div.innerHTML = `
//       <img src="${producto.img}" class="card-img-top" alt="${productos.name}">
//           <h5 class="card-title">${producto.nombre} </h5>
//           <p class="card-text">Nombre ${producto.nombre} </p>
//           <p class="card-text">Precio: ${producto.precio} </p>
//           <button id="agregar${producto.id}" class="boton-agregar">Agregar <i>  ${character.actor} </button>
//       `;
// contenedorProductos.appendChild(div)
// })

////////////////////////////////////////////////////
const nombre1 = document.querySelector("#nombre1"),
  id = document.querySelector("#id"),
  precio = document.querySelector("#precio"),
  img = document.querySelector("#img"),
  marca = document.querySelector("#marca"),
  btnRegistrar = document.querySelector("#btnRegistrar");
const radio1 = document.querySelectorAll('input[type="radio"]');

//Libros ya guardados en inventario
const inventario = [
  {
    nombre: "lidherma",
    marca: "lidherma",
    precio: "0",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.lidherma.com%2Fresources%2Ffrontend%2Fimagenes%2Fmeta_home_new_grande.jpg&imgrefurl=https%3A%2F%2Fwww.lidherma.com%2F&tbnid=owzJMU-BRephVM&vet=12ahUKEwiCluS8h-T7AhWKjZUCHVTwBrcQMygAegUIARC2AQ..i&docid=jISWC_Ov3Cg0CM&w=800&h=800&q=lidherma%20logo&client=firefox-b-d&ved=2ahUKEwiCluS8h-T7AhWKjZUCHVTwBrcQMygAegUIARC2AQ",
  },
  {
    nombre: "biobellus",
    marca: "biobellus",
    precio: "0",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D331599683637575&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FBiobellusSRL%2F&tbnid=mIyED5OsVY7boM&vet=12ahUKEwj-5YC6ieT7AhVggpUCHW4nC3YQMygAegQIARBF..i&docid=PJP5oHNBEBSnZM&w=789&h=788&q=biobellus%20logo&client=firefox-b-d&ved=2ahUKEwj-5YC6ieT7AhVggpUCHW4nC3YQMygAegQIARBF",
  },
  {
    nombre: "kamikaze",
    marca: "kamikaze",
    precio: "0",
    img: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fd3ugyf2ht6aenh.cloudfront.net%2Fstores%2F931%2F176%2Fthemes%2Fcommon%2Flogo-2003513700-1630020896-4727570f03e27fdf4405b255a34bfa971630020896.png%3F0&imgrefurl=https%3A%2F%2Fwww.kamikazecosmetica.com%2F&tbnid=cxn6wECEPqr29M&vet=12ahUKEwjig6SJiuT7AhUzr5UCHbVGDesQMygAegQIARBB..i&docid=Rmopsyyo4BKiYM&w=252&h=278&q=kamikaze%20logo%20belleza&client=firefox-b-d&ved=2ahUKEwjig6SJiuT7AhUzr5UCHbVGDesQMygAegQIARBB",
  },
  {
    nombre: "fine",
    marca: "fine",
    precio: "0",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fyomisma.net%2FPromos-en-Combo%2FFINESTRONGX2&psig=AOvVaw2028k07qWZWed-ASk2gu75&ust=1670384791854000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOi7zKeL5PsCFQAAAAAdAAAAABAD",
  },
];
