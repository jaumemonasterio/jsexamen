let taula = document.getElementById("taula");
let cos = document.getElementsByTagName("tbody")[1];
let filab;

ecriuregrups(bdgrups);
function ecriuregrups(grups) {

    cos.innerHTML = "";

    grups.forEach(grup => {

        nougrup(grup);


    })
}


function vtg(){

    ecriuregrups(bdgrups);
}

function usg() {

    cos.innerHTML = "";

    grupsus.forEach(grup => {

        usgf(grup);


    });
}



function usgf(grup) {

    
    let novafila = cos.insertRow();
    let nom = novafila.insertCell(0);
    let descripcio = novafila.insertCell(1);
    let imatge = novafila.insertCell(2);
    let tags = novafila.insertCell(3);
    let boto = novafila.insertCell(4);


    nom.textContent = grup.nom;
    descripcio.textContent = grup.descripcio;
    tags.textContent = grup.tags;

    const img = document.createElement('img');
    img.src = grup.imatge;
    img.alt = "imatge del grup";
    img.width = 20;
    img.height = 20;
    imatge.appendChild(img);
    const afegirse = document.createElement('button');
    afegirse.textContent = 'elimanars-e se aquest grup';
    afegirse.onclick = function () {
       
        let i=grupsus.indexOf(grup);
        grupsus.splice(i,1);
        usg();
    };
    boto.appendChild(afegirse);



}
function nougrup(grup) {

    let novafila = cos.insertRow();
    let nom = novafila.insertCell(0);
    let descripcio = novafila.insertCell(1);
    let imatge = novafila.insertCell(2);
    let tags = novafila.insertCell(3);
    let boto = novafila.insertCell(4);


    nom.textContent = grup.nom;
    descripcio.textContent = grup.descripcio;
    tags.textContent = grup.tags;

    const img = document.createElement('img');
    img.src = grup.imatge;
    img.alt = "imatge del grup";
    img.width = 20;
    img.height = 20;
    imatge.appendChild(img);
    const afegirse = document.createElement('button');
    afegirse.textContent = 'afegir se aquest grup';
    afegirse.onclick = function () {
        grupsus.push(grup);
    };
    boto.appendChild(afegirse);



}