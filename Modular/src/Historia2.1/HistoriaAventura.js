import { newImagen1 } from "../Funciones/imagenes_new";
import { HacerBoton } from "../Funciones/HacerBoton";
import { texto } from "../Funciones/texto";
import { progressBar } from "../Funciones/ProgressBar";

newImagen1("https://p4.wallpaperbetter.com/wallpaper/311/687/658/stairs-trees-fantasy-art-forest-wallpaper-preview.jpg",'imagenFigure');
HacerBoton('Regresar', 'btnRegresar', '../Historia1/historia1.html','divBtnFooter' )
texto('El mago casnado de vivir tantto tiempo en soledad, decidió ir en busca de una aventura fantástica, y de esta manero el mago llegó a una majestuosa montaña en la que en su cima se encontraba un gigantesco dragón. Al llegar a la cima el mago se sorprendió ya que el dragón protegía un gran tesoro el cual el mao tenía interés. En su afán de conseguir el tesoro el mago se enfrentó al dragón, pero este no se dejó vencer tan fácilmente ya que este una bestia ancestral con infinita sabiduría y poder, y con su odió atacó hasta que el mago cayó y el dragón enfurecido se dispuso a matar al mago, pero justo en ese momento el mago utilizó un hechizo milenario que derrota al dragón.','texto');
progressBar('progreso', '100', '100');
