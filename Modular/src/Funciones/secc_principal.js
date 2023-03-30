export const crearElementos = (parent, h2Texto, aTexto, aHref, divId) => {
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

  // agrega los elementos h2 y a al elemento parent
  document.getElementById(parent).appendChild(h2);
  document.getElementById(parent).appendChild(a);
  document.getElementById(parent).appendChild(div);

  return null;
}
