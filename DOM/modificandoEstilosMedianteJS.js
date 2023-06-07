

//Modificar estilos CSS mediante inline Styles

/*
const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');

ultimaCaja.style.background='#000';
ultimaCaja.style.color='#fff';
*/


const cajas03= document.querySelectorAll('.caja');
/*
const incrementarFuente=()=>{
    cajas03.forEach((caja09)=>{
        caja09.style.fontSize='50px'
    });
};
*/

//sino puedo invocar a la variable tamaño 
let tamaño=24;
const incrementarFuente=()=>{
   cajas03.forEach((caja09)=>{
    caja09.style.fontSize= `${tamaño +1}px`;
    tamaño++;
   });
};