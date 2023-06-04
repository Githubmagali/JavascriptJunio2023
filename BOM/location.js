console.log(window.location.href);


//Hostname retorna el host de mi pagina actual
console.log(location.hostname);

//pathname Retorna la ruta y archivo de la pagina actual
console.log(location.pathname);

//Protocol RETORNA EL PROTOCOLO UTILIZADO
console.log(location.protocol);

const cargarDocumento= ()=>{
  location.assign('https://www.google.com');
};

const regresar = ()=> history.back();

const irAdelante =()=>history.forward();