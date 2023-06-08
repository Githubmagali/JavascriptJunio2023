//Los eventos te permiten registrar 
//acciones que ocurren dentro de nuestra pagina para luego
//poder reaccionar a ellos con código 


const boton1 = document.getElementById('boton1'); //invoca al ID del boton
const primeraCaja=document.querySelector('.caja'); //querySelector busca la primera caja
boton1.addEventListener('click', (evento)=>{ //va a reaccionar al evento cuando hagamos click
console.log(evento);
    primeraCaja.classList.toggle('activa');
});

//Agrregando el evento a multiples elementos recorriendoles mediante un ciclo

const cajas = document.querySelectorAll('.caja');
cajas.forEach((caja)=>{
    caja.addEventListener('click', (evento)=>{
        console.log(`Haz hecho click en la caja ${evento.target.innerHTML}`);
    });
});