const crearCookie = () => {
  document.cookie = "nombre=cookieNKS; expires=30 Jun 2023 01:00:00 UTC";
};
const iniciarSesion = () => {
  const usuario = prompt("Usuario:");
  document.cookie = `nombre=${usuario}; expires=30 Jun 2023 01:00:00 UTC`;
  alert("Sesion iniciada");
};
console.log(document.cookie);

//Forma para obtener usuarios

let usuario;
const cookies = document.cookie.split(";");

cookies.forEach((cookie09) => {
  const propiedad = cookie09.split('=')[0];
  if (propiedad === 'nombre') {
    usuario=cookie09.split('=')[1];
  }
});
if (usuario){
    console.log('Hola '+ usuario);
}else{
    console.log('inicia sesion');
}

const cerrarSesion=()=>{
    document.cookie='nombre=;expires=30 Jun 2000 01:00:00 UTC';
    console.log('Hasta luego');
};