(()=>{"use strict";var e,t,n,l=function(e,t,n,l){var i=document.createElement("h3"),o=document.createElement("h4"),s=document.createElement("img"),d=document.createElement("div");return d.id="divLibro",i.innerHTML=e,o.innerHTML=t,s.src=n,d.appendChild(i),d.appendChild(o),d.appendChild(s),s.style.width="200px",s.style.height="350px",d.style.height="450px",d.style.width="300px",d.style.backgroundColor="white",d.style.padding="20px 0",d.style.textAlign="center",d.style.borderRadius="16px",d.style.border="1px solid #2196F3",d.style.marginLeft="5%",d.style.position="relative",document.getElementById(l).appendChild(d),null},i=document.createElement("link");i.rel="stylesheet",i.href="libros-populares.css",i.type="text/css",document.head.appendChild(i),e=document.getElementById("divTitulo"),(t=document.createElement("h1")).id="titulotext",t.innerHTML="Libros Populares",e.appendChild(t),function(e,t){var n=document.createElement("h2");n.id="titulotextH2",n.innerHTML="Libros más populares del año 2022",document.getElementById("divSubtitulo").appendChild(n)}(),function(e,t){var n=document.getElementById("lista"),l=document.createElement("ul");l.id="ul-Libros",n.appendChild(l),[{siglas:"IA"},{siglas:"RSY"},{siglas:"CAS"}].forEach((function(e){var t=document.createElement("li");l.appendChild(t);var n=document.createElement("div");n.id="div".concat(e.siglas),t.appendChild(n)}))}(),l("Violeta","Isabel Allende","https://tienda.sophosenlinea.com/imagenes/9786073/978607380791.GIF","divIA"),l("Roma soy yo","Santiago Posteguillo","https://tienda.sophosenlinea.com/imagenes/9788466/978846667178.GIF","divRSY"),l("Caso de Alaska Sanders","Joel Dïckens","https://tienda.sophosenlinea.com/imagenes/9788420/978842046212.GIF","divCAS"),(n=document.createElement("button")).setAttribute("id","btnRegresar"),n.setAttribute("class","btn btn-outline-light"),n.setAttribute("type","button"),n.setAttribute("onclick","location.href='principal.html'"),n.textContent="Regresar",n.style.backgroundColor="white",n.style.color="#2196F3",n.style.border="1px solid #2196F3",n.style.borderRadius="5px",n.style.margin="10px",n.style.padding="10px 20px",n.style.fontSize="16px",n.style.fontWeight="bold",n.style.textAlign="center",n.style.height="50px",n.style.width="200px",n.style.position="relative",n.style.cursor="pointer",n.style.backgroundRepeat="no-repeat",n.style.backgroundPosition="center",n.addEventListener("mouseenter",(function(){n.style.color="white",n.style.backgroundColor="#2196F3",n.style.borderColor="#2196F3"})),n.addEventListener("mouseleave",(function(){n.style.color="#2196F3",n.style.backgroundColor="white",n.style.borderColor="#2196F3"})),document.getElementById("divBtnRegresar").appendChild(n)})();