(()=>{"use strict";var e,t,i,n,l,r,d=function(e,t,i,n){var l=document.createElement("h3"),r=document.createElement("h4"),d=document.createElement("img"),o=document.createElement("div");return o.id="divLibro",l.innerHTML=e,r.innerHTML=t,d.src=i,o.appendChild(l),o.appendChild(r),o.appendChild(d),d.style.width="200px",d.style.height="350px",o.style.height="450px",o.style.width="300px",o.style.backgroundColor="white",o.style.padding="20px 0",o.style.textAlign="center",o.style.borderRadius="16px",o.style.border="1px solid #2196F3",o.style.marginLeft="5%",o.style.position="relative",document.getElementById(n).appendChild(o),null},o=function(e,t,i,n){var l=document.createElement("button");return l.setAttribute("id",t),l.setAttribute("class","btn btn-outline-light"),l.setAttribute("type","button"),l.setAttribute("onclick","location.href='"+i+"'"),l.textContent=e,l.style.backgroundColor="white",l.style.color="#2196F3",l.style.border="1px solid #2196F3",l.style.borderRadius="5px",l.style.margin="10px",l.style.padding="10px 20px",l.style.fontSize="16px",l.style.fontWeight="bold",l.style.textAlign="center",l.style.height="50px",l.style.width="200px",l.style.position="relative",l.style.cursor="pointer",l.style.backgroundRepeat="no-repeat",l.style.backgroundPosition="center",l.addEventListener("mouseenter",(function(){l.style.color="white",l.style.backgroundColor="#2196F3",l.style.borderColor="#2196F3"})),l.addEventListener("mouseleave",(function(){l.style.color="#2196F3",l.style.backgroundColor="white",l.style.borderColor="#2196F3"})),document.getElementById(n).appendChild(l),null},a=document.createElement("link");a.rel="stylesheet",a.href="nuevos-lanzamientos.css",a.type="text/css",document.head.appendChild(a),e=document.getElementById("divTitulo"),(t=document.createElement("h1")).id="titulotext",t.innerHTML="Nuevos lanzamientos",e.appendChild(t),function(e,t){var i=document.createElement("h2");i.id="titulotextH2",i.innerHTML="Libros más esperados para 2023",document.getElementById("divSubtitulo").appendChild(i)}(),function(e,t){var i=document.getElementById("lista"),n=document.createElement("ol");i.appendChild(n),[{siglas:"CC"},{siglas:"CCarter"},{siglas:"MN"},{nombre:"historia"}].forEach((function(e){var t=document.createElement("li");n.id="ol-libros",n.appendChild(t);var i=document.createElement("div");i.id="div".concat(e.siglas||e.nombre),t.appendChild(i)}))}(),d("El cuco de Cristal","Javier Castillo","https://www.clara.es/medio/2022/11/24/el-cuco-de-cristal-de-javier-castillo_2b2b59f9_1000x1500.jpg","divCC"),d("Tress citas con Carter","Beth O'leary","https://www.clara.es/medio/2022/11/24/tres-citas-con-carter-de-beth-oleary_128cbb5a_1000x1500.jpg","divCCarter"),d("Mucho después de media noche","Ray Braudbury","https://www.clara.es/medio/2022/11/24/mucho-despues-de-media-noche-de-ray-bradbury_afe9cd7f_1000x1500.jpg","divMN"),o("Regresar","btnRegresar","principal.html","divBtnFooter"),i=document.createElement("h3"),n=document.createElement("h4"),l=document.createElement("img"),(r=document.createElement("div")).id="divLibroHistoria",i.innerHTML="La leyenda del hada y el mago",n.innerHTML="Jose Santisteban",l.src="https://i.pinimg.com/564x/34/fc/9f/34fc9feee3f9d03371c00b63e35518a8--character-art-character-inspiration.jpg",r.appendChild(i),r.appendChild(n),r.appendChild(l),l.style.width="200px",l.style.height="350px",r.style.height="500px",r.style.width="300px",r.style.backgroundColor="white",r.style.padding="20px 0",r.style.textAlign="center",r.style.borderRadius="16px",r.style.border="1px solid #2196F3",r.style.marginLeft="5%",r.style.position="relative",document.getElementById("divhistoria").appendChild(r),o("Ver Libro","boton-comprar","Historia1.html",r.id)})();