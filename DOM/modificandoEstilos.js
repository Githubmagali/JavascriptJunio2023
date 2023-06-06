
const primeraCaja = document.querySelector('#contenedor1 .caja');
console.log(primeraCaja.classList);

//classList.add() Nos permite agregar una clase a un elemento

const agregarClase = () =>{
    primeraCaja.classList.add('activa');
};

const eliminarClase = ()=>{
    primeraCaja.classList.remove('activa');
};

const toggleClase = ()=>{
    primeraCaja.classList.toggle('activa');
};

//classList.contains() Nos permite comprobar si el elemento contiene una clase

const comprobarClase =()=>{

    if(primeraCaja.classList.contains('activa')){
        console.log('La caja tiene la clase activa');
    }else{
        console.log('La caja no tiene la clase activa');
    }
};