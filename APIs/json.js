const datos= `
{
    "id":1,
"nombre":"Carlos Arturo",
"suscriptor_activo": true,
"posts":[{ "id": 1,
"titulo":"titulo del primer posts",
"texto":"texto del primer pais..."
}
]
}
`;

console.log(JSON.parse(datos));
const objeto =JSON.parse(datos);
console.log(objeto.nombre);


//Stringfy = de Javascript a JSON

const usuario={
    nombre: 'Ana',
    colores:['Azul', 'amarillo', 'rojo']
}

    JSON.Stringfy(usuario);