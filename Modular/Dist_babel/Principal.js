(()=>{"use strict";var e,t,n=function(e){var t=document.getElementById(e);return t.addEventListener("mouseover",(function(){t.style.boxShadow="0 0 10px 5px #f1f1f1"})),t.addEventListener("mouseout",(function(){t.style.boxShadow="none"})),null},a=function(e,t){var n=document.createElement("img");return n.src=e,n.id="img1",n.style.width="100%",n.style.height="100%",n.style.borderRadius="16px",document.getElementById(t).appendChild(n),n},o=function(e,t,n,a,o){var i=document.createElement("h2");i.textContent=t;var d=document.createElement("a");d.href=a,d.textContent=n;var r=document.createElement("div");return r.id=o,document.getElementById(e).appendChild(i),document.getElementById(e).appendChild(d),document.getElementById(e).appendChild(r),null},i=document.createElement("link");i.rel="stylesheet",i.href="principal.css",i.type="text/css",document.head.appendChild(i),e=document.getElementById("seccion_titulo"),(t=document.createElement("h1")).id="titulotext",t.innerHTML="Librería y Panadería del Norte",e.appendChild(t),function(e,t){var n=document.createElement("h3");n.id="titulotextH3",n.innerHTML="Bienvenidos a la librería y panadería del norte, aquí encontrarás todo lo que necesitas para tu hogar y para tu negocio.",t.appendChild(n)}(0,document.getElementById("Bienvenido")),o("Libros_Populares","Libros Populares","Haz clic aquí para ir a la página","../Populares/libros-populares.html","divimgLP"),o("Nuevos_lanzamientos","Nuevos Lanzamientos","Haz clic aquí para ir a la página","../NuevosLanzamientos/nuevos-lanzamientos.html","divimgNL");var d=a("https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop","divimgNL");document.getElementById("divimgLP").appendChild(d);var r=a("https://assets.bonappetit.com/photos/60a3f107c69110723994f2fe/5:4/w_2000,h_1600,c_limit/0621-Books-Lede.jpg","Nuevos_lanzamientos");document.getElementById("divimgNL").appendChild(r),n("Libros_Populares"),n("Nuevos_lanzamientos")})();