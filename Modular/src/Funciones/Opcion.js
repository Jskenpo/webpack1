window.OpcionHistoria = {
    opcion: function (texto, parent, opcion, direccion) {
        let textoOpcion = document.createElement('p');
        textoOpcion.innerHTML = opcion;

        document.getElementById(parent).appendChild(textoOpcion);
        
        window.BotonFooter.botonTransferencia(texto, "boton"+ opcion, direccion, parent);
    }
}