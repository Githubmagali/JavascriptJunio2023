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

//Emty Export Carga todo el codigo pero sin hacer ningun objeto

import'./emptyExport';

import{correo} from './emptyExport'
console.log(correo);