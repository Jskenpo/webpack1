(()=>{"use strict";const e=e=>{let t=document.getElementById(e);return t.addEventListener("mouseover",(()=>{t.style.boxShadow="0 0 10px 5px #f1f1f1"})),t.addEventListener("mouseout",(()=>{t.style.boxShadow="none"})),null},t=(e,t)=>{let n=document.createElement("img");return n.src=e,n.id="img1",n.style.width="100%",n.style.height="100%",n.style.borderRadius="16px",document.getElementById(t).appendChild(n),n},n=(e,t,n,o,a)=>{const i=document.createElement("h2");i.textContent=t;const d=document.createElement("a");d.href=o,d.textContent=n;const l=document.createElement("div");return l.id=a,document.getElementById(e).appendChild(i),document.getElementById(e).appendChild(d),document.getElementById(e).appendChild(l),null},o=document.createElement("link");o.rel="stylesheet",o.href="principal.css",o.type="text/css",document.head.appendChild(o),((e,t)=>{let n=document.createElement("h1");n.id="titulotext",n.innerHTML="Librería y Panadería del Norte",t.appendChild(n)})(0,document.getElementById("seccion_titulo")),((e,t)=>{let n=document.createElement("h3");n.id="titulotextH3",n.innerHTML="Bienvenidos a la librería y panadería del norte, aquí encontrarás todo lo que necesitas para tu hogar y para tu negocio.",t.appendChild(n)})(0,document.getElementById("Bienvenido")),n("Libros_Populares","Libros Populares","Haz clic aquí para ir a la página","libros-populares.html","divimgLP"),n("Nuevos_lanzamientos","Nuevos Lanzamientos","Haz clic aquí para ir a la página","nuevos-lanzamientos.html","divimgNL");const a=t("https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop","divimgNL");document.getElementById("divimgLP").appendChild(a);const i=t("https://assets.bonappetit.com/photos/60a3f107c69110723994f2fe/5:4/w_2000,h_1600,c_limit/0621-Books-Lede.jpg","Nuevos_lanzamientos");document.getElementById("divimgNL").appendChild(i),e("Libros_Populares"),e("Nuevos_lanzamientos")})();