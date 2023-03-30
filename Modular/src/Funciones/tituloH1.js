export const tituloH1  =  ( texto ,  parent )  =>  {
    let titulo = document.createElement("h1");
    titulo.id = "titulotext";
    titulo.innerHTML = texto;
    parent.appendChild(titulo);
    return null;
}