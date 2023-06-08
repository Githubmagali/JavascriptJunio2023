
//Tenemos dos formas de acceder a los formularios
//-Mediante el objeto forms
//-Mediante el método Modelo en Objetos para la representacion de Documentos
/*
console.log(document.forms['formulario-donacion']['correo'].value);

const correo= document.querySelector('#formulario-donacion #correo');
console.log(correo);


const correo3= document.querySelector(`#formulario-donacion [name="correo"]`);
console.log(correo3);


document.getElementById('btnEnviar').addEventListener('click', (evento)=>{
   evento.preventDefault(); //previene el comportamiento de borrarse por defecto
    console.log('click');

});
*/

document.getElementById('btnEnviar').addEventListener('click', (evento)=>{
    evento.preventDefault();

    const correo= document.querySelector(`#formulario-donacion [name="correo"]`);
    console.log(correo.value);

    console.log(document.forms['formulario-donacion']['pais'].value);
    console.log(document.forms['formulario-donacion']['terminos-y-condiciones'].value);
    
    const formulario = document.forms['formulario-donacion'];
    console.log(formulario['donacion00'].value);

    console.log(formulario.fecha);

});

