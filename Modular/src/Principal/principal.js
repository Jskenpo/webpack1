const imagen1 = window.Fimagenes.newImagen1('https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop','divimgNL');
document.getElementById('divimgLP').appendChild(imagen1);

const imagen2 = window.Fimagenes.newImagen1('https://assets.bonappetit.com/photos/60a3f107c69110723994f2fe/5:4/w_2000,h_1600,c_limit/0621-Books-Lede.jpg','Nuevos_lanzamientos');
document.getElementById('divimgNL').appendChild(imagen2);

//agregar la funcion glow al div libros populares
document.GlowDiv.newGlowDiv('Libros_Populares');
//agregar la funcion glow al div nuevos lanzamientos
document.GlowDiv.newGlowDiv('Nuevos_lanzamientos');