

const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click',(evento)=>{
    console.log(`Estas haciendo click en una clase padre${evento}`);
});

const primeraCaja= document.querySelector('.caja');
primeraCaja.addEventListener('click', (evento2)=>{
    console.log(`Estas haciendo click en una clase hija${evento2}`);
});