export const crearListaLibros = (parentId, libros) => {
    const parent = document.getElementById(parentId);
    
    // crea un elemento ul y lo agrega al elemento parent
    const ul = document.createElement("ul");
    ul.id = 'ul-Libros'
    parent.appendChild(ul);
    
    // itera sobre el array de libros y crea un elemento li y un elemento div con id correspondiente para cada uno
    libros.forEach((libro) => {
      const li = document.createElement("li");
      ul.appendChild(li);
      
      const div = document.createElement("div");
      div.id = `div${libro.siglas}`;
      li.appendChild(div);
    });
  }
  