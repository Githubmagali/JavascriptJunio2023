

const formulario= document.getElementById('formulario-donacion');
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const datos={
        correoPro: formulario.correoName.value,
        pais: formulario.paisName.value,
        donacion: formulario.donacionMonto.value,
        fecha:formulario.fecha.value,
        terminos:formulario['terminos-y-condiciones'].checked,
     
    };
    if(datos.correoPro.length <=12){
        console.log('Correo invalido');
        return;
    };

    if(datos.pais=== ''){
        console.log('pais invalido');
        return;
    }
    if(datos.donacion=== ''){
        console.log('Selecciona una cantidad');
        return;
  }
  if(datos.donacion=== ''){
    console.log('Selecciona una cantidad');
    return;
}

   if(!datos.terminos){
    console.log('Acepta los terminos y condiciones');
    return;
   }
      console.log('Enviando datos');
});