
//Solo para contenedor padre no hijo

//Capturing (true) El elemento padre reacciona primero y despues del elemento hijo

//Bubbling False por defecto En bubbling el evento del elemento hijo reacciona
//primero y despues el elemento hijo

const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click',(evento)=>{
    console.log(`Estas haciendo click en una clase padre${evento}`);
}, true);



