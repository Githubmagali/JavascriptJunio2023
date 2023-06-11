

//Nos permite hacer peticiones a servidores y que estos nos puedan devolver info

//n:point Te permite pegar un archivo json para subirlo a la nube y hacerle
//peticiones al servidor n:point


const endPoint= 'https://api.npoint.io/a62d14e2e55192415001';

/*
fetch(endPoint)
.then((respuesta)=>{
 console.log('El serivdor respondio');

 const promesa = respuesta.json();
 promesa
 .then((datos)=> console.log(datos.nombre))
 .catch((error)=> console.log(error));

})


.catch((error)=>{
    console.log(error);
});
*/
//Async Await

const obtenerDatos = async()=>{
    const respuesta=await fetch(endPoint);
   const datos= await respuesta.json();
   console.log(datos);
  
    };
    obtenerDatos();
