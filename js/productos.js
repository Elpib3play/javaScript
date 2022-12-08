const renderArray = (listaProductos)=>{
    const contenido = document.querySelector('#contenido')
    let html = "";
    listaProductos.forEach(comida => {
        html += `
            <p>Tipo de Plato: ${comida.tipo_comida}</p>
            <p>Precio: ${comida.precio}</p>
            <img src="${comida.src}">
            <hr>
        `
    });
    contenido.innerHTML = html
}

const obtenerDatosTXT = () =>{
    fetch('../js/data.txt')
    .then((respuesta)=>{
        return respuesta.text()
    })
    .then((datos)=>{
        console.log(datos)
        document.querySelector('#contenido').textContent = datos
    })
    .catch((error)=> {
        console.log(error)
    })
}

const obtenerDatosArray = () =>{
    fetch('../js/productos.json')
    .then((respuesta)=>{
        //console.log(respuesta)
        return respuesta.json()
        //document.querySelector('#contenido').textContent = respuesta.text()
    })
    .then((datos)=>{
        renderArray(datos)
    })
    .catch((error)=> {
        console.log(error)
    })
}

const btnTxt = document.querySelector('#btnTxt')
const btnArray = document.querySelector('#btnArray')
btnTxt.addEventListener('click', obtenerDatosTXT)
btnArray.addEventListener('click', obtenerDatosArray)

