// simulador de pago y entrega de pedidos de una hamburguseria //
let cuentaTotal = 0
let hamburguesas = ""
let cantidadhamburguesas = 0
let hamburguesasimple = "Hamburguesa Simple"
let precioHamburguesaSimple = 1200
let hamburguesadoble = "Hamburguesa Doble"
let precioHamburguesaDoble = 1300
let hamburguesatriple = "Hamburguesa Triple"
let precioHamburguesaTriple = 1400
let hamburguesacuadruple = "Hamburguesa Cuadruple"
let precioHamburguesaCuadruple = 1500
let mensajeHamburguesas = ""
let mensajeEntregas = ""
let Hamburguesa = ""
let contacto = ""

function preguntaOtroHamburguesas() {
    let n = prompt(`¿Te gustaría agregar otra hamburguesas?
    [1] SI
    [2] NO`)
    while (n !== "1" && n !== "2") {
        n = prompt(`La opción elegida no es correcta. ¿Te gustaría agregar otra hamburguesa?
        [1] SI
        [2] NO`)
    }
    if (n == "1") {
        agregarHamburguesas();
    } else if (n == "2") {
        alert(`Muchas gracias, a continuación tus elecciones...`)
    } else {
        alert(`La opción elegida no es correcta`)
    }
}

function alertaCase (tipoHamburguesa, precioHamburguesa) {
    hamburguesas = hamburguesas + `- ${tipoHamburguesa} \n`
    cantidadhamburguesas++
    cuentaTotal += precioHamburguesa
    alert(`${tipoHamburguesa}:
    - Costo: $${precioHamburguesa}
    - Cantidad de hamburguesas: ${cantidadhamburguesas}
    - Subtotal: ${cuentaTotal}`)
}

function otraHamburguesa() {
    cuentaTotal = 0
    cantidadhamburguesas = 0
    do{
    let input = prompt(`Dejanos aquí tu Hamburguesa:`)
    Hamburguesa=input;
    }while( Hamburguesa == null || Hamburguesa.length == 0 || /^\s+$/.test(Hamburguesa) ) 
    
    do{
    let input = prompt(`Ingresá tu email o telefono:`)
    contacto=input;
}while( contacto == null || contacto.length == 0) 
    alert(`Muchas gracias ${nombre}.
    Nos comunicaremos en breve contigo a: ${contacto}.
    Por la Hamburguesa:
    ${Hamburguesa}`)
}

function agregarHamburguesas() {
    let hamburguesa = prompt(`¿Que hamburguesa te gustaría encargar? 
    (ingrese el número correspondiente)
        [1] ${hamburguesasimple}
        [2] ${hamburguesadoble}
        [3] ${hamburguesatriple}
        [4] ${hamburguesacuadruple}
        [5] Otro tipo de Hamburguesa (borrará las hamburguesas previas que hayas elegido)
        [6] No necesito nada más`)

    switch (hamburguesa) {
        case "1":
            alertaCase(hamburguesasimple, precioHamburguesaSimple)
            preguntaOtroHamburguesas()

            break;
        case "2":
            alertaCase(hamburguesadoble, precioHamburguesaDoble)
            preguntaOtroHamburguesas()

            break;
        case "3":
            alertaCase(hamburguesatriple, precioHamburguesaTriple)
            preguntaOtroHamburguesas()

            break;
        case "4":
            alertaCase(hamburguesacuadruple, precioHamburguesaCuadruple)
            preguntaOtroHamburguesas()

            break;
        case "5": otraHamburguesa()

            break;
        case "6":
            if (cantidadhamburguesas == 0) {
                alert(`Gracias ${nombre} por visitar Beker Burger, esperamos para la próxima puedas elegirnos.`)
            }
            break;

        default:
            alert("Ingrese un número correcto")
            agregarHamburguesas()
            break;
        }
}


function reservaPedido(cantidadhamburguesas) {
    let hora = 0
    do{
        let input = prompt(`Ingrese la HORA para la entrega \n
        [Trabajamos de 20 a 23 horas]`)
        hora = parseInt(input);
    }
    while  (isNaN(hora) || !(hora >= 20 && hora <= 23));
    mensajeHamburguesas = mensajeHamburguesas + ` El pedido sera entregado a las ${hora}hs. \n`
    alert(`${mensajeHamburguesas} \n \n ${mensajeEntregas}  Agradecemos tu pedido y te esperamos para que disfrutes de nuestro trabajo.`)
}

const nombre = prompt(`Bienvenido a Beker Burger, vamos a guiarte en tu proceso de pedido.
        -¿Cómo es tu nombre?`).toUpperCase()
if (nombre != "") {
    agregarHamburguesas()
} else {
    alert("Gracias por visitar Beker Burger")
}

if (cantidadhamburguesas != 0) {
    mensajeHamburguesas = `${nombre}, has elegido las siguientes hamburguesas: \n${hamburguesas} \n Cantidad de hamburguesas: ${cantidadhamburguesas} \n El total es: $${cuentaTotal}`
    alert(mensajeHamburguesas)
    reservaPedido(cantidadhamburguesas)
}