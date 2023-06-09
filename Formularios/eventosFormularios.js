//Event Submit Nos permite detectar cuando el usuario intenta enviar un formulario


//Cuando haacemo click en un boton que esta dentro de formulario intenta de enviar
//los datos a la misma pagina. Para evitar ese compotamiento vamos a tomar los datos verificarlos que sean correctos y lo vamos a enviar
//con preventDefault()

const formulario = document.forms['formulario-donacion'];
formulario.addEventListener('submit', (evento)=>{
 evento.preventDefault();
  console.log('Enviando datos')
});


//Evento change Nos permite detectar cuando 
//hay un cambio en el valor de un input select o textarea
//Se ejecuta cuando cambiamos el valor del input y damos un click afuera

formulario.pais.addEventListener('change', (evento)=>{
    console.log('El pais cambio');
    console.log('El nuevo valor es:'+ evento.target.value);
});

formulario['cantidad-5'].addEventListener('change', ()=>{
    console.log('La cantidad es 5:');
});
formulario['cantidad-10'].addEventListener('change', ()=>{
    console.log('La cantidad es 5:');
});

//Eventofocus

formulario.correoName.addEventListener('focus', ()=>{
  console.log('El input esta fuera de foco');
});

//Evento blur 

formulario.correoName.addEventListener('blur', ()=>{
    console.log('El input ya no es el foco de atencion');
});

//Eventokey down Nos permite detectar cuando una tecla e spresionada sobr eun input

formulario.correoName.addEventListener('keydown', (e)=> console.log(e));
