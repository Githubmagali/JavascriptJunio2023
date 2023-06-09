

const formulario= document.getElementById('formulario-donacion');
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const datos={
        correo: formulario.correoName.value,
        pais: formulario.paisName.value,
        donacion: formulario.donacionMonto.value,
        fecha:formulario.fecha.value,
        terminos:formulario['terminos-y-condiciones'].cheked,
     
    };
    console.log(datos);
});