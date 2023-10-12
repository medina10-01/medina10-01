class Automovil{
    constructor(marca,modelo,precio){
        this.marca= marca;
        this.modelo=modelo;
        this.precio=precio;
    }
}

let auto1 = new Automovil("Toyota","TXL", 200000000 );

let inputBusqueda = document.getElementById("inputBusqueda");

inputBusqueda.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
    let mainContent = document.getElementById("mainContent");
    let boxAuto = document.createElement("div");
    mainContent.appendChild(boxAuto);
    boxAuto.setAttribute("class", "box-auto");

    let boxInfo = document.createElement("div");
    boxAuto.appendChild(boxInfo);
    
    let txtMarca = document.createElement("label");
    boxInfo.appendChild(txtMarca);
    boxInfo.setAttribute("class", "box-info");
    txtMarca.innerText =auto1.marca;

    let txtModelo = document.createElement("label");
    boxInfo.appendChild(txtModelo);
    txtModelo.innerText= " "+ auto1.modelo;

    // let txtPrecio = document.createElement("label");
    // boxInfo.appendChild(txtPrecio);
    // txtPrecio.innerText= " "+ auto1.precio;
}
});
 