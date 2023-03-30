export const tituloh3 = (texto, parent) => {
    let titulo = document.createElement("h3");
    titulo.innerHTML = texto;
    document.getElementById(parent).appendChild(titulo);
    return null;
};