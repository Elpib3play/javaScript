const shopContent= document.getElementById ("shopContent");
const carritoDeCompras= document.getElementById ("verCarrito");
const modalContainer= document.getElementById("modal-container");
const cantidadCarrito=document.getElementById("cantidadCarrito");

//MIS PRODUCTOS
const productos = [{
    tipo_comida: "Pizza",
    precio: 1500,
    id:1,
    src:"https://media.istockphoto.com/id/848661766/es/foto/la-fresca-pizza-al-horno-con-salami-en-plato-blanco.jpg?s=612x612&w=0&k=20&c=GK_NG_6b7UpMNdOcU6_a-IJdKQoMEk4Jg6mxie468lU=",
    valorCantidad:1, 
    },
    {
    tipo_comida: "Empanada",
    precio: 300,
    id:2,
    src:"https://media.istockphoto.com/id/1171946922/es/foto/empanadas.jpg?b=1&s=170667a&w=0&k=20&c=O59fCoJ8vOkSBi3jiXP-Cp9ynklskHO5Z7mD8wPl_nk=" ,  
    valorCantidad:1,
    },
    {
    tipo_comida: "Milanesa",
        precio: 2000,
    id:3,
    src:"https://media.istockphoto.com/id/1389082623/es/foto/chuleta-de-cerdo-al-horno-con-patatas-fritas.jpg?s=612x612&w=0&k=20&c=cQcWxm3rv9T09oxE0d0-tm5XnBZftDEX-ZxWI7dBl7w=" ,  
    valorCantidad:1,
    },
    {
    tipo_comida: "Ravioles",
    precio: 1800,
    id:4,
    src:"https://media.istockphoto.com/id/154961079/es/foto/ravioles-de-carne-de-res-en-salsa-de-tomate-carne.jpg?s=612x612&w=0&k=20&c=waYJ46ccfTRhe9P6BCCMY_TD970XV3FmZZRe8O1HrNA=" ,  
    valorCantidad:1,
    },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
    // dentro del document creo el elemento que sea div
    let content=document.createElement("div");
    content.className="card";
    //con esto creo etiquetas html a mi html
    content.innerHTML = `
        <img src="${product.src}">
        <h3>${product.tipo_comida}</h3>
        <p class="price">${product.precio} $</p>
    `;
    //ingreso todo lo que esta en mi foreach
    shopContent.append(content);

    
    let comprar=document.createElement ("button");
    comprar.innerText="comprar";
    comprar.className="comprar";

    content.append(comprar);

    // lo que me va a agregar detro de carrito
    comprar.addEventListener("click", () =>{
        //con esto logro sumar las cantidades con un true del repeat
        const repeat= carrito.some ((repeatProduct)=> repeatProduct.id === product.id);
        //if me suma otra cantidad en caso de que ya se encuentr el productoid, else me suma un nuevo producto escogido 
        if (repeat ===true){
            carrito.map((prod)=>{
                if(prod.id === product.id){
                    prod.valorCantidad++;
                }
            });
        }else{
            carrito.push({
            id: product.id,
            nombre:product.tipo_comida,
            img: product.src,
            precio: product.precio,
            valorCantidad: product.valorCantidad,
            });
        }
        console.log(carrito);
        console.log(carrito.length);
        carritoContenido();
        guardadoLocal();
    });
});

// Toastify
const toastify=document.querySelector(".shop-content");
toastify.addEventListener("click",() =>{
    Toastify({
        text: "Has agregado un producto",
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
})
    

//carrito de compras

const pintarCarrito = () =>{

    //no replico la misma info ya que limpio el carrito
    modalContainer.innerHTML="";
    //cierro y abro mi carrito
    modalContainer.style.display="flex";

    const modalHeader =document.createElement ("div");
    modalHeader.className= "modal-header"
    modalHeader.innerHTML=`
        <h1 class="modal-header-title"> Carrito. </h1>
    `;

    modalContainer.append(modalHeader);

    const modalbutton=document.createElement ("h1");
    modalbutton.innerText = "X";
    modalbutton.className= "modal-header-button";
    modalHeader.append(modalbutton);

    
    //cierro mi modal
    modalbutton.addEventListener("click" ,() =>{
        modalContainer.style.display="none";
    });

    carrito.forEach((product)=>{
    let carritoContenido=document.createElement("div");
    carritoContenido.className="modal-content"
    carritoContenido.innerHTML=`
        <img src="${product.img}">
        <p>${product.nombre}</p>
        <h3>${product.precio} $</h3>
        <span class="restar"> - </span>
        <p>Cantidad: ${product.valorCantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${product.valorCantidad*product.precio}</p>
        
        
    `;

    modalContainer.append(carritoContenido);

    //capturo eventos de botones sumo o resto del modal
    let restar= carritoContenido.querySelector (".restar");   
    restar.addEventListener("click", ( ) => {
        if(product.valorCantidad!==1){
            product.valorCantidad-- ;
        }
        guardadoLocal();
        pintarCarrito();
    });
    let sumar = carritoContenido.querySelector(".sumar")
    sumar.addEventListener("click", ()=>{
        product.valorCantidad++;
        guardadoLocal();
        pintarCarrito();
    });


    // elimino productos de mi carrito
    let eliminar = document.createElement ("span");
    eliminar.innerText="❌";
    eliminar.className="eliminar-producto";
    carritoContenido.append(eliminar);
    eliminar.addEventListener("click", eliminarItems);

});
    //suma el total de mi recorrida de objeto con el acumulador
    const total= carrito.reduce ((acc, el ) => acc + el.precio * el.valorCantidad,0);
    const totalCompra = document.createElement ("div");
    totalCompra.className="total-content";
    totalCompra.innerHTML=`Total a pagar: ${total} $ <button id="boton" >Finalizar compra</button>`

    modalContainer.append(totalCompra);
    let boton=document.getElementById("boton");
    boton.onclick=finalizar;
    function finalizar(){
        if (true){
            Swal.fire({
                title: 'Deseas Realizaar la compra?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Realizar Compra',
                denyButtonText: `Seguir Comprando`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                Swal.fire('Hemos tomado su pedido!', '', '')
                } else if (result.isDenied) {
                Swal.fire('Aún no se ha completado la compra', '', 'Seguir comprando?')
                }
            });
        }
    }

};


carritoDeCompras.addEventListener(("click"), pintarCarrito);
//con esta funcion busco todo lo que esta dentro del carrito por su id al apretar el boton asociado al producto que elegí
const eliminarItems = () => {
    const foundId=carrito.find((element) => element.id);
//capturado en la variable que me devuelve todos los productps distintos qye contebga el id
    carrito = carrito.filter((Idcarrito) => {
        return Idcarrito !== foundId;
    });
    carritoContenido();
    guardadoLocal();
    pintarCarrito();
}; 

//marcar mi carrito de cantidades
const carritoContenido=()=>{
    cantidadCarrito.style.display="block";
    const carritoLength=carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify (carritoLength));
    cantidadCarrito.innerText= JSON.parse(localStorage.getItem("carritoLength"));
};

const showAlert = ()=> {
    alert("comprar");
}


carritoContenido();

//set item
const guardadoLocal = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

//get item

JSON.parse(localStorage.getItem("carrito"));