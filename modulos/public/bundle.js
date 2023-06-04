'use strict';

const nombre='Carlos';

 const obtenerPosts = ()=>{

 return ['post1', 'post2', 'post3'];
 };

/*
export default ()=>{
    return {
        nombre:'Ana',
    correo:'ana@mail.com',
};

};
*/

const obtenerUs =()=>{
    return {
        nombre:'Ana',
        correo:'ana@mail.com',
    };
};

console.log('Estoy dentro del archivo emptyExport');

const correo='correo@mail.com';

/*  Named import
import { nombre as nombreImp, obtenerPosts} from './namedExports';
console.log('El nombre del usuario es' + nombreImp);
console.log(obtenerPosts());
*/

console.log(nombre);
console.log(obtenerPosts()); 
console.log(obtenerUs());
console.log(correo);
