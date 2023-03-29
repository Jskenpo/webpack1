

export const opcion = (texto, parent, opcion, direccion) => {
    let textoOpcion = document.createElement('p');
    textoOpcion.innerHTML = opcion;

    document.getElementById(parent).appendChild(textoOpcion);
    
    botonTransferencia(texto, "boton"+ opcion, direccion, parent);
}