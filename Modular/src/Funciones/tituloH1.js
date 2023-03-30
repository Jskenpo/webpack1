export const tituloH1  =  ( texto ,  parent )  =>  {
    let titulo = document.createElement("h1");
    titulo.innerHTML = texto;
    document.getElementById(parent).appendChild(titulo);
    return null;
}