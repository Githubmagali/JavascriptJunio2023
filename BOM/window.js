
//window.alert('Hola');
//alert('Hola');

console.log(`La ventana de tu navegador mid ${window.innerWidth} px de ancho`);
console.log(`La ventana de tu navegador mid ${window.innerHeight} px de ancho`);
//innerHeight solo mide la pagina no tiene en cuenta la consola ni la barra superior del navegador


//Window.opne nos permite abrir ventanas del navegador
//Es posible que el navegador te pida permisos para abrir una nva ventana
//1er Parametro: Direc de la nva ventana
//2do parametro Nombre de la nva ventana
//3er parametro Cadena de texto de opciones

let ventana;
const abrirVentana=()=>{
ventana= window.open('https://github.com/Githubmagali','Mi nueva ventana','width=500,height=500');
ventana.document.write('<h1>Hola, estoy en la nva ventana</h1>');
};