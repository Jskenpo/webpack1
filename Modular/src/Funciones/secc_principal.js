export const  crearElementos = (parent, h2Texto, aTexto, aHref, divId) => {
    // crea un elemento h2 y agrega el texto especificado
    const h2 = document.createElement("h2");
    h2.textContent = h2Texto;
    
    // crea un elemento a y agrega el texto y el atributo href especificados
    const a = document.createElement("a");
    a.href = aHref;
    a.textContent = aTexto;
    
    // crea un elemento div con el id especificado
    const div = document.createElement("div");
    div.id = divId;
    
    // agrega los elementos creados al elemento parent especificado
    parent.appendChild(h2);
    parent.appendChild(a);
    parent.appendChild(div);
  }
  