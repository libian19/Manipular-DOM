const contenedor = document.querySelector('.container')
const elementoP = document.createElement('p')
const elementoP1 = document.createElement('p')
const elementoP2 = document.createElement('p')
const texto = document.createTextNode('Esto es un ejemplo de createTextNode e inserción con appendChild')
const texto2 = document.createTextNode('Esto es un ejemplo de createTextNode e insercion antes de la REFERENCIA')
const texto3 = document.createTextNode('Esto es una inserción a partir de una REFERENCIA con posición BEFOREBEGIN')
const ref= document.querySelector('.ref')

//INSERTAR UN TEXTO EN UN ELEMENTO Y LUEGO EN EL DOM
const buton1 = document.querySelector('.boton-append')
buton1.addEventListener('click', () => {
    elementoP.appendChild(texto);
    contenedor.appendChild(elementoP);
})

//INSERTAR ELEMENTOS ANTES DE UNA REFERENCIA
const buton2 = document.querySelector('.boton-insertBefore')
buton2.addEventListener('click', () => {
    contenedor.insertBefore(texto2, ref)  
})

//INSERTAR ELEMENTOS USANDO ELEMENTOS ADYACENTES
const buton3 = document.querySelector('.boton-insertAdyacentElement')
buton3.addEventListener('click', () =>{
    elementoP1.appendChild(texto3)
    ref.insertAdjacentElement('beforebegin', elementoP1)
})

//INSERTAR ELEMENTOS CON INNERHTML
const buton4 = document.querySelector('.boton-innerHTML')
buton4.addEventListener('click', () =>{
    contenedor.appendChild(elementoP2)
    elementoP2.innerHTML = `Esta es una inserción directa al DOM con innerHTML`
})

//REINICIAR LA DEMOSTRACION
const reiniciar = document.querySelector('.reiniciar')
reiniciar.addEventListener('click', () => {
    location.reload()
})
