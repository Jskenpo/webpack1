window.TextoInsert = {
    texto: function (texto, parent) {
        let textoInsert = document.createElement("p");
        textoInsert.innerHTML = texto;
        document.getElementById(parent).appendChild(textoInsert);
        return null;
    }
}