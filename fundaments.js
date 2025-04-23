console.log("Welcome to TecnomegaStore");

                //   String
'use strict';

let nombrePruducto = "Azus vivobook"
let tipoProducto = 'Laptop'

console.log(nombrePruducto,tipoProducto);

            //   metodos
'use strict';

console.log("Número de letras:",nombrePruducto.length);
console.log("Encotrar alguna palabra:",nombrePruducto.includes("Kart"));
console.log("Convertir a mayúsculas:",nombrePruducto.toUpperCase());
console.log("Convertir a minusculas:",nombrePruducto.toLowerCase());
console.log("Quitar espacios adelante y atrás:",nombrePruducto.trim());
console.log("Reemplazar una palabra:",nombrePruducto.replace('Kart','Kart-Rider'));
console.log("Cortar un texto:",nombrePruducto.slice(1,6));
console.log("Cortar un texto:",nombrePruducto.substring(1,6));
console.log("Cortar un texto:",nombrePruducto.charAt(1));
console.log("Repetir un texto:",nombrePruducto.repeat(2));
console.log("Dividir un texto:",nombrePruducto.split(" "));

'use strict';

let formUsername = 'Tosh'
console.log("Útil para validar el campo nombre del formulario:",formUsername.length);
let emailUser = 'eddy.morales@epn.edu.ec'
console.log("Útil para encotrar algún patrón:",emailUser.includes("@epn.edu.ec"));
let rolUser = 'Administrador'
console.log("Útil para convertir a mayúsculas y presentar en la UI:",rolUser.toUpperCase());
let addressUser = 'COTOCOLLAHO ÑAN 456'
console.log("Útil para convertir a minusculas y guardar en BDD:",addressUser.toLowerCase());
let formLastName = '    Morales  '
console.log("Útil para quitar espacios adelante y atrás en el campo del formulario:",formLastName.trim());
let discountProduct = "El precio de descuento es del 20%"
console.log("Útil para reemplazar el precio de un descuento:",discountProduct.replace('20%','50%'));
let detailProduct = "Mouse gamer de juego inalámbrico Logitech Serie G Lightspeed G305 blue - Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. "
console.log("Útil para hacer el efecto leer más o expander de un texto largo:",detailProduct.slice(0,50)+'....');
let creditCardUser = "1234 5678 9851 9937"
console.log("Útil para cortar número de tarjeta de crédito en el proceso de facturación:",creditCardUser.substring(15,19));
let numFlight = "AA4569"
console.log("Útil para saber el prefijo del vuelo que indica la aerolínea:",numFlight.charAt(0)+numFlight.charAt(1));
let userAdmin = "Eddy Morales"
let avatarUser = userAdmin.split(" ")
console.log("Útil para cortar un texto y colocar como avatar de perfil:",avatarUser[0].charAt(0),avatarUser[1].charAt(0));

// template literals
'use strict';

const name = "Eddy"
const lastName= "Morales"
const city ="Quito"
const age = 24
const active = false
console.log(name+"-"+lastName+"-"+city)
console.log(`${name} - ${lastName} - ${city} - ${active ? age : 'No se encuentra activo'}`);

// numeros
'use strict';

// Es importante reconocer el tipo de valor asignado
const numeroProducto = "20"
const numeroPuntos = 20

console.log(numeroPuntos,numeroProducto);
console.log(typeof(numeroPuntos), typeof(numeroProducto));

console.log("suma:",numeroPuntos+20);
console.log("resta:",numeroPuntos-20);
console.log("multiplicación:",numeroPuntos*20);
console.log("división:",numeroPuntos/20);
console.log("módulo:",numeroPuntos%20);


// Importante el manejo de operadores de incremento y decremento
let numeroPuntosActual = 20

console.log(++numeroPuntosActual );
console.log(numeroPuntosActual++);

let numeroVidasActual = 20

console.log(--numeroVidasActual);
console.log(numeroVidasActual--);

// math
'use strict';
console.log("El método Math es un: ", Math);
console.log("Para obtener la constante PI:",Math.PI);
console.log("Para redondear el precio de un producto: ", Math.round(2.43));
console.log("Para sacar la raíz cudrada de un valor:", Math.sqrt(25));
console.log("Para sacar el valor absoluto de un valor:",Math.abs(-450));
console.log("Para sacar el exponente de un valor:", Math.pow(2,5));
console.log("Para obtener el valor mínimo de entre 2 valores:", Math.min(10,4));
console.log("Para obtener el valor máximo de entre 2 valores:", Math.max(58,-4));
console.log("Para obtener el valor random de entre o a 20:", Math.round(Math.random()*20));

// orden de presedencia
'use strict';

console.log(3 + 4 * 5)
console.log(4 * 3 ** 2)
console.log(200 * 0.2)
console.log(200 * 1.12)

// conersion
'use strict';

let edadJugador = "20"
let precioProducto = "525.63"

console.log(Number.parseInt(edadJugador));
console.log(Number.parseFloat(precioProducto));

console.log(Number.isInteger(edadJugador));

console.log(`${+edadJugador + +precioProducto}`);

// BOOLENOS
'use strict';

     // operadores de asignación 
let saldoTarjetaUsuario = 500
let saldoTarjeta = 1000
let estadoCuenta
let emailConfirmado=null


     // operadores de asignación de adición
saldoTarjetaUsuario += 100
console.log(saldoTarjetaUsuario);

     // operadores de comparación
saldoTarjetaUsuario="1000"
console.log(saldoTarjeta == saldoTarjetaUsuario)
     // evalua tipo de dato y contenido
console.log(saldoTarjeta === saldoTarjetaUsuario)
console.log(estadoCuenta === emailConfirmado);


    // operadores aritméticos
console.log(saldoTarjeta + parseInt(saldoTarjetaUsuario));


     // operadores lógicos 
console.log(saldoTarjeta != saldoTarjetaUsuario);

      // evalua tipo de dato y contenido
console.log(saldoTarjeta !== parseInt(saldoTarjetaUsuario));

// operador ternario
'use strict';

let saldoTarjetaUsuario2 = 500
let saldoTarjeta2 = 1000

const respuesta = saldoTarjeta2 <= saldoTarjetaUsuario2 ? "Pagar" : "Seguir consumiendo"
console.log(respuesta);

// ONDICIONAL SIMPLE
'use strict'

const carritoCompras = []

    // utilizando el condicional clásico
if (carritoCompras.length===0)
{
    console.log("Agregar productos")
}

    // utilizando operador ternario
carritoCompras.length===0 ? console.log("Agregar productos") :""

// CONSICIONAL DOBLE
'use strict'

const carritoCompras2 = ['Tv','Pc','Tablet','Laptop']

    // utilizando el condicional clásico
if (carritoCompras2.length!=0)
{
    console.log("Proceder al pago de los productos")
}
else{
    console.log("Agregar productos")
}

    // utilizando operador ternario
console.log(carritoCompras2.length!==0 ? "Proceder al pago de los prodcutos": "Agregar productos")

// CONSICIONAL MULTIPLE
'use strict'

const actividadSiri = 2

switch (actividadSiri) {
    case 1:
        console.log("Prender el equipo");
    break;
    case 2:
        console.log("Prender la tv");
    break;
    case 3:
        console.log("Cerrar cortinas");
    break;
    default:
        console.log(`No existe tarea para la actividad ${actividadSiri}`);
    break;
}


// BUCLES
// for
'use strict'

const contador = 10

for (let i = contador; i >= 0; i--) {
    
    i <=0 ? console.log("Compra finalizada"):console.log(i);
}
// while
'use strict'

let contador2 = 10
while (contador2 >= 0)
{
    contador2<=0 ? console.log("Compra finalizada"):console.log(contador2)
    contador2--
}

// do-while
'use strict'

let contador3= 10

do {
    contador3<=0 ? console.log("Compra finalizada"):console.log(contador3)
    contador3--
} while (contador3 >= 0);

// for each
'use strict'

const tareasPendientes = ['Trabajar','Estudiar','Ver series','Viajar','Aprender Js']
const usuario ={
    nombre:"Eddy",
    apellido:"Morales",
}

// uso del forEach 
tareasPendientes.forEach((t,i)=> console.log(`${i} - ${t}`))

// uso del for of -> usado para arreglos
for (const t of tareasPendientes) {
    console.log(`${t}`)
}


// uso del for in -> usado para objetos
for (const clave in usuario) {
    console.log(`${usuario[clave]}`)
}

// uso del map -> retorna un nuevo arreglo
const nuevasTareas = tareasPendientes.map((t)=> t)
console.log(nuevasTareas);