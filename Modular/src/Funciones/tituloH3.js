export const tituloh3 = (texto, parent) => {
    let titulo = document.createElement("h3");
    titulo.id = "titulotextH3";
    titulo.innerHTML = texto;
    parent.appendChild(titulo);
    return null;
};