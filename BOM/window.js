
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

let ventana; //dejamos la variable fuera d ela funcion para poder acceder a ella desde otras funciones
const abrirVentana=()=>{
ventana= window.open('https://github.com/Githubmagali','Mi nueva ventana','width=500,height=500');
ventana.document.write('<h1>Hola, estoy en la nva ventana</h1>');
};
const cerrarVentana= ()=> ventana.close();

//Screen Object Representa la pantalla del usuario

console.log('Ancho de pantalla:', window.screen.width);
console.log('Alto de pantalla:', window.screen.height);

//Para agregar mas tamaño
console.log('Ancho de pantalla sin la barra de windows:', window.screen.availWidth);
console.log('Alto de pantalla sin la barra de windows:', window.screen.availHeight);
