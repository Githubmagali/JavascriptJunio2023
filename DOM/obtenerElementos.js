
/*
//getElementId Nos permite obtener un elemento en base a su atributo id

//document.getElementById('contenedor1');

const contenedor1 = document.getElementById('contenedor1');
console.log(contenedor1);


//Children nos permite obtener los elementos hijo
console.log(contenedor1.children);

//Parent element Nos permite obtener el elemento padre de un elemento
console.log(contenedor1.parentElement);

//getElementsByTagName Nos permite obtener una coleccion de elementos en base a la etiqueta
//Nos devuelve una coleccion de html

const varibleDiv = document.getElementsByTagName('div');
console.log(varibleDiv);
console.log(`Tenemos ${varibleDiv.length} divs en la pagina`);
*/

//getElementsByNAme Nos permite obtener una coleccion de elementos en base a su clase CSS

const contenedor =document.getElementsByClassName('contenedor');
//console.log(contenedor);

//QuerySelector Nos devuelve el PRIMER elemento que coincida con un selector estilo CSS
//Devuelve un nodelist

const variableQ= document.querySelector('#contenedor-principal .boton1');
//console.log(variableQ);

//QuerySelectorAll Nos permite obtener una COLECCION de elementos en base a un selector estilo CSS

const vari = document.querySelectorAll('#contenedor1 .caja');
console.log(vari);

vari.forEach((caja) =>console.log(caja));