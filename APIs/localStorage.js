

document.getElementById('boton01').addEventListener('click', ()=>{
    const nombre = prompt('Escribe tu nombre');
    window.localStorage.setItem('usuario', nombre);
});
// con  window.localStorage Accedemos a la Api del almacenamiento local
//La informacion se guardara en el apartado de almacenamiento local del navegador

document.getElementById('boton02').addEventListener('click', ()=>{
    window.localStorage.removeItem('usuario');
});


if(window.localStorage.usuario){
console.log('Hola',window.localStorage.usuario);
}else{
    console.log('Hola usuario anonimo');
}