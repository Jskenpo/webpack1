//arrow function 
export const GlowDiv = (divIngreso) => {
    let cuadro = document.getElementById(divIngreso);

        cuadro.addEventListener("mouseover", () => {
            cuadro.style.boxShadow = "0 0 10px 5px #f1f1f1";
            }
        );

        cuadro.addEventListener("mouseout", () => {
            cuadro.style.boxShadow = "none";
            }
        );

        return null;
};


