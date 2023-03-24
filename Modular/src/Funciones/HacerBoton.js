window.BotonFooter = {
    botonTransferencia: function (texto, id, direccion, parent) {
        const boton = document.createElement('button');
        boton.setAttribute('id', id);
        boton.setAttribute('class', 'btn btn-outline-light');
        boton.setAttribute('type', 'button');
        boton.setAttribute('onclick', 'location.href="' + direccion + '"');
        boton.textContent = texto;

        boton.style.backgroundColor = "white";
        boton.style.color = "#2196F3";
        boton.style.border = "1px solid #2196F3";
        boton.style.borderRadius = "5px";
        boton.style.margin = "10px";
        boton.style.padding = "10px 20px";
        boton.style.fontSize = "16px";
        boton.style.fontWeight = "bold";
        boton.style.textAlign = "center";
        boton.style.height = "50px";
        boton.style.width = "200px";
        boton.style.position = "absolute";

        document.getelementById(parent).appendChild(boton);

        return boton;
    }
}