export const newImagen1 = (imglink,divIngreso) => {
    let img1 = document.createElement('img');
    img1.src = imglink;
    img1.id = 'img1';
    img1.style.width = '100%';
    img1.style.height = '100%';
    img1.style.borderRadius = '16px';
    document.getElementById(divIngreso).appendChild(img1);
    return img1;
}