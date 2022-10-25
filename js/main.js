let milanesas=2500;
let pizza=1500;
let empanada= 2000;
let miTel="";


function Bienvenida(){
    alert ("Bienvenidos a Platos Del Día");
    let registrado=confirm ("Usted está registrado?");
    if(registrado==true){
        acceso();   
    }else{
        alert("por favor registrese para poder tomar su pedido. Gracias")
        alert (Bienvenida());
    }   
}

function acceso(){
    let nombre= prompt("ingrese su nombre");
    let apellido= prompt ("ingrese su apellido");
    miTel= Number( prompt ("ingrese su teléfono de contacto"));
    let datosdelapersona= ( nombre +" " +" "+ apellido );
    alert ("Bienvenido" + " " + datosdelapersona + "! ... " +"Por favor ingrese su pedido");
    platodCarta();
    return miTel;
}

function platodCarta(){
    console.log("**************************");
    console.log("**************************");
    console.log("****MENUES DE LA CASA*****");
    console.log("**************************");
    console.log("**************************");
    console.log("1- Milanesas con papas fritas");
    console.log("2- Pizza Muzzarella");
    console.log("3- Empanadas Salteñas");
    console.log("4- Compraré en otro momento(SALIR)...")
    console.log("**************************");
    console.log("**************************");
    
    let operacion = prompt("Ingrese el número de menúa elegir")

    switch (operacion){
        case "1":
            console.log("Milanesa con papas fritas" + " el valor es: " + milanesas);
            tipoDePago();
            break;
        case "2":
            console.log("Pizza Muzzarella" + " el valor es: " + pizza);
            tipoDePlatopizza();
            break; 
        case "3":
        console.log("Docena de empanadas Salteñas" + " el valor es: " + empanada);
        tipoDePlatoempanada();
        break;
        case "4":
            salir();
            break;
        default:
            alert("operación inválida");  
            alert("Ingrese nuevamente la operación");
            alert (platodCarta());  
    }
}


function tipoDePago(){
    let pago= prompt("Ingrese si es mercadopago o efectivo");
    if (pago =="mercadopago"||"efectivo"){
        let dinero = Number( prompt("Ingrese el dinero de mercadopago"+" $" +milanesas));
        if(milanesas < dinero || milanesas > dinero ){
            alert ("ingrese la cifra correcta, " + "el valor es " + milanesas);
        }if(milanesas==dinero){
            alert ("Hemos recibido su pago, su pedido se encuentra en proceso de elaboracion ... el tiempo de envío es de 30 a 45 minutos ");
            alert ("muchas gracias, por su compra!!")
            alert(" En caso de demora nos estaremos comunicando al " + miTel)
            console.log("fin del algoritmo");
        }if (pago== "Efectivo") {
            alert("recuerde tener el efectivo ni bien llegue el DELIVERY " + " el valor es " + milanesas);
            console.log("fin del algoritmo");
        }
    }else{
        alert("por favor ingrese un dato correcto");
        alert(tipoDePago());
    }
}

function tipoDePlatopizza(){
    let pago=prompt("Ingrese si es mercadopago o efectivo");
    if (pago =="mercadopago"||"efectivo"){
        let dinero = Number( prompt("Ingrese el dinero de mercadopago  " +" $" +pizza));
        if(pizza < dinero || pizza > dinero ){
            alert ("ingrese la cifra correcta, " + "el valor es " + pizza);
        }if(pizza==dinero){
            alert ("Hemos recibido su pago, su pedido se encuentra en proceso de elaboracion ... el tiempo de envío es de 30 a 45 minutos ");
            alert ("muchas gracias, por su compra!!");
            alert(" En caso de demora nos estaremos comunicando al " + miTel)
            console.log("fin del algoritmo");
        }if(pago=="efectivo"){
            alert("recuerde tener el efectivo ni bien llegue el DELIVERY " + " el valor es " + pizza)
            console.log("fin del algoritmo");
        }
    }else{
        alert("por favor ingrese un dato correcto");
        alert(tipoDePago());
    }
}
function tipoDePlatoempanada(){
    let pago=prompt("Ingrese si es mercadopago o efectivo");
    if (pago =="mercadopago"||"efectivo"){
        let dinero = Number( prompt("Ingrese el dinero de mercadopago"+" $" +empanada));
        if(empanada< dinero || empanada > dinero ){
            alert ("ingrese la cifra correcta, " + "el valor es " + empanada);
        }if(empanada==dinero){
            alert ("Hemos recibido su pago, su pedido se encuentra en proceso de elaboracion ... el tiempo de envío es de 30 a 45 minutos ");
            alert ("muchas gracias, por su compra!!");
            alert(" En caso de demora nos estaremos comunicando al " + miTel)
            console.log("fin del algoritmo");
        }if(pago=="efectivo"){
            alert("recuerde tener el efectivo ni bien llegue el DELIVERY " + " el valor es " + empanada)
            console.log("fin del algoritmo");
        }
    }else{
        alert("por favor ingrese un dato correcto");
        alert(tipoDePago());
    }
}

function salir(){
    alert ("Hasta proto , lo esperamos para una futura compra...")
    console.log("fin del algoritmo");
}

Bienvenida();
