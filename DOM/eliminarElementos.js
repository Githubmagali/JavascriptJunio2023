/*const eliminarCaja= ()=>{
    const variablePadre = document.getElementById('contenedor1');
    const cajaEliminar= variablePadre.querySelector('.caja');

    variablePadre.removeChild(cajaEliminar);
};
*/

//Para que una vez que no haya mas cajas el codigo no siga ejecutando y no se rompa
//sele agrega un condicional

const eliminarCaja = () =>{
    const padre = document.getElementById('contenedor1');
    const cajaEliminar = padre.querySelector('.caja');
    if(cajaEliminar){
        padre.removeChild(cajaEliminar);
    }
};

