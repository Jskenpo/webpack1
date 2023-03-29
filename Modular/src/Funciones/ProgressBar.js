window.ProgressBar = {
    progressBar: function (parent, porcentaje, maximo) {
        let progress = document.createElement("progress");
        let progreso = document.createElement("h3");
        progreso.innerHTML = porcentaje + "%" ;
        progress.id = "progressBar";
        progress.value = porcentaje;
        progress.max = maximo;
        document.getElementById(parent).appendChild(progreso);
        document.getElementById(parent).appendChild(progress);
        return null;
    }
}
