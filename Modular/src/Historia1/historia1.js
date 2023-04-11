import { newImagen1 } from '../Funciones/imagenes_new.js';
import { HacerBoton } from '../Funciones/HacerBoton.js';
import { texto } from '../Funciones/texto.js';
import { progressBar } from '../Funciones/ProgressBar.js';
import { opcion } from '../Funciones/Opcion.js';
import { tituloH1 } from '../Funciones/tituloH1.js';
import '../Historia1/Historia1.scss';


const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'Historia1.css';
link.type = 'text/css';
document.head.appendChild(link);

class Historia {
  #titulo = '';
  #imagenUrl = '';
  #texto = '';
  #opciones = [];

  constructor(titulo, imagenUrl, texto, opciones) {
    this.#titulo = titulo;
    this.#imagenUrl = imagenUrl;
    this.#texto = texto;
    this.#opciones = opciones;
  }

  inicializar() {
    newImagen1(this.#imagenUrl, 'imagenFigure');

    const divTitulo = document.getElementById('divTitulo');
    tituloH1(this.#titulo, divTitulo);

    HacerBoton('Regresar', 'btnRegresar', 'nuevos-lanzamientos.html','divBtnFooter' )
    texto(this.#texto, 'texto');

    this.#opciones.forEach(opcion => {
      opcion(opcion.texto, opcion.id, opcion.label, opcion.url);
    });

    progressBar('progreso', '50', '100');
  }
}

const historia1 = new Historia(
  'Capítulo 1',
  'https://p4.wallpaperbetter.com/wallpaper/311/687/658/stairs-trees-fantasy-art-forest-wallpaper-preview.jpg',
  'Cuenta la historia de un mago que un día en su bosque encantado lloró, por que a pesar de todo su poder y sabiduría no había podido encontrar a su amor verdadero, y por eso se sentía triste y solo. La luna su única amiga lo apoyaba y le daba fuerzas para soportar el lamento y dolor que sentía por culpa de su tan larga soledad ya que el sabía muy bien que debido al impacto de su existencia no debía salir de su destino y que tarde o temprano, si en su destino está escrito, encontrará su verdadero amor.',
  [
    { texto: 'Busca aventura para distraerse', id: 'OP1', label: 'Opción 1', url: 'HistoriaAventura.html' },
    { texto: 'Sigue con su dolor', id: 'OP2', label: 'Opción 2', url: 'HistoriaDolor.html' },
  ]
);

historia1.inicializar();
