//elemento INNERHTML Nos permite cambiar el contenido HTML de un elemento

const primeraCaja09 = document.querySelector('.caja');
primeraCaja09.innerHTML = '<b>Al fin dios</b>';

//elemento attribute Nos permite acceder y cambiar atributos del elemento

primeraCaja09.id='nuevo-id';

//ElementoSetAtributte() Nos permite agregar o estableces el valor de una tributo del elemento

primeraCaja09.setAttribute('class','caja activa');
primeraCaja09.setAttribute('data-id','123-456');