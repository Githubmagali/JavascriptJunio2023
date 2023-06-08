/*
const Boton1 = document.getElementById('boton1');
const Boton2 = document.getElementById('boton2');

const primeraCaja= document.querySelector('.caja');


boton1.addEventListener('click', ()=>{
    primeraCaja.addEventListener('click', ()=>{
        primeraCaja.classList.toggle('activa');
    });
});
*/

const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');

const primeraCaja = document.querySelector('.caja');

const toggleClase = () => primeraCaja.classList.toggle('activa');

boton1.addEventListener('click', () => {
  primeraCaja.addEventListener('click', toggleClase);
});

boton2.addEventListener('click', () => {
  primeraCaja.removeEventListener('click', toggleClase);
});
