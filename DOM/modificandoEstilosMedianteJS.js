

//Modificar estilos CSS mediante inline Styles

/*
const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');

ultimaCaja.style.background='#000';
ultimaCaja.style.color='#fff';
*/

/*
const cajas03= document.querySelectorAll('.caja');
const incrementarFuente=()=>{ //invoco a la funcion que esta en el boton
    cajas03.forEach((caja09)=>{
        caja09.style.fontSize='50px'
    });
};
*/

//sino puedo invocar a la variable tamaño 
const cajas03= document.querySelectorAll('.caja');
let tamaño=24;
const incrementarFuente=()=>{
   cajas03.forEach((caja09)=>{
    caja09.style.fontSize= `${tamaño +1}px`;
    tamaño++;
   });
};

const cajas04= document.querySelectorAll('.caja');
const disminuirFuente=()=>{
   cajas04.forEach((caja005)=>{
    caja005.style.fontSize= `${tamaño -1}px`;
    tamaño--;
   });
};