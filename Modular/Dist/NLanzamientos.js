(()=>{"use strict";const e=(e,t,i,l)=>{let n=document.createElement("h3"),d=document.createElement("h4"),r=document.createElement("img"),o=document.createElement("div");return o.id="divLibro",n.innerHTML=e,d.innerHTML=t,r.src=i,o.appendChild(n),o.appendChild(d),o.appendChild(r),r.style.width="200px",r.style.height="350px",o.style.height="450px",o.style.width="300px",o.style.backgroundColor="white",o.style.padding="20px 0",o.style.textAlign="center",o.style.borderRadius="16px",o.style.border="1px solid #2196F3",o.style.marginLeft="5%",o.style.position="relative",document.getElementById(l).appendChild(o),null},t=(e,t,i,l)=>{let n=document.createElement("button");return n.setAttribute("id",t),n.setAttribute("class","btn btn-outline-light"),n.setAttribute("type","button"),n.setAttribute("onclick","location.href='"+i+"'"),n.textContent=e,n.style.backgroundColor="white",n.style.color="#2196F3",n.style.border="1px solid #2196F3",n.style.borderRadius="5px",n.style.margin="10px",n.style.padding="10px 20px",n.style.fontSize="16px",n.style.fontWeight="bold",n.style.textAlign="center",n.style.height="50px",n.style.width="200px",n.style.position="relative",n.style.cursor="pointer",n.style.backgroundRepeat="no-repeat",n.style.backgroundPosition="center",n.addEventListener("mouseenter",(function(){n.style.color="white",n.style.backgroundColor="#2196F3",n.style.borderColor="#2196F3"})),n.addEventListener("mouseleave",(function(){n.style.color="#2196F3",n.style.backgroundColor="white",n.style.borderColor="#2196F3"})),document.getElementById(l).appendChild(n),null},i=document.createElement("link");i.rel="stylesheet",i.href="NLanzamientos.css",i.type="text/css",document.head.appendChild(i),((e,t)=>{let i=document.createElement("h1");i.id="titulotext",i.innerHTML="Nuevos lanzamientos",t.appendChild(i)})(0,document.getElementById("divTitulo")),((e,t)=>{let i=document.createElement("h2");i.id="titulotextH2",i.innerHTML="Libros más esperados para 2023",document.getElementById("divSubtitulo").appendChild(i)})(),((e,t)=>{const i=document.getElementById("lista"),l=document.createElement("ol");i.appendChild(l),[{siglas:"CC"},{siglas:"CCarter"},{siglas:"MN"},{nombre:"historia"}].forEach((e=>{const t=document.createElement("li");l.id="ol-libros",l.appendChild(t);const i=document.createElement("div");i.id=`div${e.siglas||e.nombre}`,t.appendChild(i)}))})(),e("El cuco de Cristal","Javier Castillo","https://www.clara.es/medio/2022/11/24/el-cuco-de-cristal-de-javier-castillo_2b2b59f9_1000x1500.jpg","divCC"),e("Tress citas con Carter","Beth O'leary","https://www.clara.es/medio/2022/11/24/tres-citas-con-carter-de-beth-oleary_128cbb5a_1000x1500.jpg","divCCarter"),e("Mucho después de media noche","Ray Braudbury","https://www.clara.es/medio/2022/11/24/mucho-despues-de-media-noche-de-ray-bradbury_afe9cd7f_1000x1500.jpg","divMN"),t("Regresar","btnRegresar","principal.html","divBtnFooter"),((e,i,l,n)=>{let d=document.createElement("h3"),r=document.createElement("h4"),o=document.createElement("img"),s=document.createElement("div");s.id="divLibroHistoria",d.innerHTML="La leyenda del hada y el mago",r.innerHTML="Jose Santisteban",o.src="https://i.pinimg.com/564x/34/fc/9f/34fc9feee3f9d03371c00b63e35518a8--character-art-character-inspiration.jpg",s.appendChild(d),s.appendChild(r),s.appendChild(o),o.style.width="200px",o.style.height="350px",s.style.height="500px",s.style.width="300px",s.style.backgroundColor="white",s.style.padding="20px 0",s.style.textAlign="center",s.style.borderRadius="16px",s.style.border="1px solid #2196F3",s.style.marginLeft="5%",s.style.position="relative",document.getElementById("divhistoria").appendChild(s),t("Ver Libro","boton-comprar","Historia1.html",s.id)})()})();