
const agregarCaja = ()=>{
//Creamos el elemento createElement Recibe como parametro una cadena de texto c la etiqueta que queremos crear

const nuevaCaja = document.createElement('div');

//Agregamos texto y atributos

nuevaCaja.innerText='Nueva caja';
nuevaCaja.setAttribute('id', 'nuevo-id');
nuevaCaja.setAttribute('class', 'caja activa');

//Agregar el elemento Document Object Model Existen dif maneras

const contenedor= document.getElementById('contenedor1');

//.appendChild() Agrega un elemento al final

//contenedor.appendChild(nuevaCaja);


//insertAdjacentElement() Nos permite agregar un elemento

//Valores;
//afterbegin Como primer elemento
//contenedor.insertAdjacentElement('afterbegin', nuevaCaja);

//beforebegin como antes del elemento padre

//beforeend como ultimo elemento

//afterend despues del elemento padre

//replaceWith() Nos permite reemplazar el elemento por otro

document.querySelector('#contenedor1 .caja').replaceWith(nuevaCaja);
};