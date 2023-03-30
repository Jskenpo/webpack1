export const  crearListaElementosOL = (parentId, elementos) => {
    const parent = document.getElementById(parentId);
    
    // crea un elemento ol y lo agrega al elemento parent
    const ol = document.createElement("ol");
    parent.appendChild(ol);
    
    // itera sobre el array de elementos y crea un elemento li y un elemento div con id correspondiente para cada uno
    elementos.forEach((elemento) => {
      const li = document.createElement("li");
      ol.appendChild(li);
      
      const div = document.createElement("div");
      div.id = `div${elemento.siglas || elemento.nombre}`;
      li.appendChild(div);
    });
  }
  