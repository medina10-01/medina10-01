class Automovil {
    constructor(marca, modelo, precio, anyo, ciudad, Kilometros, imagenURL) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.anyo = anyo;
        this.ciudad = ciudad;
        this.Kilometros = Kilometros;
        this.imagenURL = imagenURL;
    }
}

let auto1 = new Automovil("Toyota", "Fortuner 2.8l", 325000000, 2023, "Neiva - Huila", 7600, "img/icon.webp");
let auto2 = new Automovil("Toyota", "4Runner 4.0 Limited ", 290000000, 2022, "Bogotá - Cundinamarca", 29700, "img/2023-toyota-4runner-40th-anniversary-edition-1_x1x.jpg_1902800913.webp");

let inputBusqueda = document.getElementById("inputBusqueda");
let automovilesMostrados = false;

window.addEventListener("load", function() {
    let mainContent = document.getElementById("mainContent");

    function mostrarAutomovil(auto, imgURL) {
        let boxAuto = document.createElement("div");
        mainContent.appendChild(boxAuto);
        boxAuto.setAttribute("class", "box-auto");

        let boxImg = document.createElement("div");

        let boxCorazon = document.createElement("div");
        boxImg.appendChild(boxCorazon);
        boxCorazon.setAttribute("class", "box-corazon");

        let corazon = document.createElement("div");
        boxCorazon.appendChild(corazon);
        corazon.setAttribute("class", "corazon");

        let iconHearth = document.createElement("i");
        corazon.appendChild(iconHearth);
        iconHearth.setAttribute("class", "icons-style-hearth fa-regular fa-heart");

        boxAuto.appendChild(boxImg);

        let imgAuto = document.createElement("img");
        boxImg.appendChild(imgAuto);
        boxImg.setAttribute("class", "box-img");
        imgAuto.setAttribute("src", imgURL); // Usar la URL de la imagen específica
        imgAuto.setAttribute("class", "img-auto");

        let boxInfo = document.createElement("div");
        boxAuto.appendChild(boxInfo);
        let infoMarca = document.createElement("div");
        boxInfo.appendChild(infoMarca);
        boxInfo.setAttribute("class", "box-info");
        infoMarca.setAttribute("class", "info-marca");
        let txtMarca = document.createElement("label");
        infoMarca.appendChild(txtMarca);
        txtMarca.innerText = auto.marca;
        txtMarca.setAttribute("class", "txt-marca");

        let txtModelo = document.createElement("label");
        infoMarca.appendChild(txtModelo);
        txtModelo.innerText = " " + auto.modelo;
        txtModelo.setAttribute("class", "txt-modelo");

        let precioFormat = new Intl.NumberFormat("de-DE").format(auto.precio);
        let txtPrecio = document.createElement("label");
        boxInfo.appendChild(txtPrecio);
        txtPrecio.innerHTML = "$" + precioFormat;
        txtPrecio.setAttribute("class", "txt-precio");

        let boxProcedencia = document.createElement("div");
        boxInfo.appendChild(boxProcedencia);
        boxProcedencia.setAttribute("class", "box-procedencia");

        let txtanyo = document.createElement("label");
        boxProcedencia.appendChild(txtanyo);
        txtanyo.innerHTML = auto.anyo + " · ";

        let txtKilometros = document.createElement("label");
        boxProcedencia.appendChild(txtKilometros);
        let txtKilometrosFormat = new Intl.NumberFormat("de-DE").format(auto.Kilometros);
        txtKilometros.innerHTML = txtKilometrosFormat + " · ";

        let txtciudad = document.createElement("label");
        boxProcedencia.appendChild(txtciudad);
        txtciudad.innerHTML = auto.ciudad;

        let boxLineaDiv = document.createElement("div");
        mainContent.appendChild(boxLineaDiv);
        boxLineaDiv.setAttribute("class", "box-linea-div");
    }

    inputBusqueda.addEventListener("keyup", function(event) {
        if (event.key === "Enter" && !automovilesMostrados) {
            mostrarAutomovil(auto1, auto1.imagenURL);
            mostrarAutomovil(auto2, auto2.imagenURL);
            automovilesMostrados = true;
        }
    });
});
