/*
const saludo = () => console.log("Hola!");
let id;
const iniciar = () => {
    console.log("Iniciando timer");
id = setTimeout(saludo, 5000);
};
const parar = () => {
    console.log("Parar timer");
clearTimeout(id);
};
*/

//Set Interval Nos permite ejecutar una funncion cada cierto tiempo

let cuenta=0; //variables globales
let id;

const iniciar=()=>{
id=setInterval (()=>{
     console.log('Iniciar cuenta');
 cuenta++;
 }, 1000);
};

const parar=()=>{
    console.log('Parar cuenta');
    clearInterval(id);
};