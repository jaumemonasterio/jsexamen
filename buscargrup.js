function buscargrups(elFiltre) {
    //products = getProducts();
    //console.log(products);
    if (elFiltre!="") {
        filtered = bdgrups.filter((grup) =>grup.nom==elFiltre);
    }
    else {
        filtered = bdgrups;
    }
    ecriuregrups(filtered);
    
}


function buscar(){

    let gr = document.getElementById("busgu").value.trim();

    buscargrups(gr);
}