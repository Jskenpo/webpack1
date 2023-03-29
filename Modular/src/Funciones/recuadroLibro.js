export const recuadroHistoria = (titulo,autor,imagen,parent) => {
    let tituloLibro = document.createElement("h3");
        let autorLibro = document.createElement("h4");
        let imagenLibro = document.createElement("img");
        let divLibro = document.createElement("div");

        divLibro.id = "divLibro";

        tituloLibro.innerHTML = titulo;
        autorLibro.innerHTML = autor;
        imagenLibro.src = imagen;

        divLibro.appendChild(tituloLibro);
        divLibro.appendChild(autorLibro);
        divLibro.appendChild(imagenLibro);

        imagenLibro.style.width = "200px";
        imagenLibro.style.height = "350px";

        divLibro.style.height = "450px";
        divLibro.style.width = "300px";
        divLibro.style.backgroundColor = "white";
        divLibro.style.padding = "20px 0";
        divLibro.style.textAlign = "center";
        divLibro.style.borderRadius = "16px";
        divLibro.style.border = "1px solid #2196F3";
        divLibro.style.marginLeft = "5%";
        divLibro.style.position = "relative";
    
        document.getElementById(parent).appendChild(divLibro);

        return null;
}