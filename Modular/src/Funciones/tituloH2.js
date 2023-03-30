export const tituloH2 = (texto, parent) => {
    let titulo = document.createElement("h2");
    titulo.innerHTML = texto;
    document.getElementById(parent).appendChild(titulo);
    return null;
};