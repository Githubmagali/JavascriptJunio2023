/*  Named import
import { nombre as nombreImp, obtenerPosts} from './namedExports';
console.log('El nombre del usuario es' + nombreImp);
console.log(obtenerPosts());
*/

//Namespace imports

import *as datos from'./namedExports';
console.log(datos.nombre);
console.log(datos.obtenerPosts()); 

//Default imports

import obtenerUs from './defaultExport';
console.log(obtenerUs());

//Empty imports Carga todo el codigo pero sin hacer ningun objeto. Se suele usar cuando no trabajas con librerias o framework

import'./emptyExport';

import{correo} from './emptyExport'
console.log(correo);