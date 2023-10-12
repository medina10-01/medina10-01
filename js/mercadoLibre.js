class Automovil {
    constructor(marca, modelo, version, anyo) {
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.anyo = anyo;
    }
}

let auto1 = new Automovil("Mazda", "TXL", "viejita", "2023");
let modeloAutomovil = auto1.marca+"  "+ auto1.modelo;

let inputBusqueda = document.getElementById('inptuBuacar');

inputBusqueda.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        let mainConted = document.getElementById('maincontent');
        let boxAuto = document.createElement('div');
        mainConted.appendChild(boxAuto)
        boxAuto.setAttribute("class", "box-auto")
        // contenedor de img

        // para la informacion
        let boxInfo = document.createElement("div");
        boxAuto.appendChild(boxInfo);
        let txtMarca = document.createElement("label");
        boxInfo.appendChild(txtMarca);
        boxInfo.setAttribute("class", "box-info");
        txtMarca.innerHTML=auto1.marca;
        let txtModelo = document.createEvent("div");
        boxInfo.appendChild(txtModelo);
        boxInfo.setAttribute("class", "box-info");
        txtModelo.innerHTML = "   "+auto1.modelo;
    }
});


