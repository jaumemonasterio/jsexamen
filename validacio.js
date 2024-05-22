
const censoredWords = ["filldeputa", "malperit", "egoista"];
// camps de texte
let nom = document.getElementById("nom");
let url = document.getElementById("imatge");
let des = document.getElementById("descripcio");

// chek Box
let esports = document.getElementById("esports");
let social = document.getElementById("social");
let records = document.getElementById("records");
let entreteniment = document.getElementById("entreteniment");
let salut = document.getElementById("salut");
let cinema = document.getElementById("cinema");
let musica = document.getElementById("musica");

// p Errors

let enom = document.getElementById("enom");
let eurl = document.getElementById("errori");
let edes = document.getElementById("edescripcio");
let cheke = document.getElementById("cheke");

// form
let form = document.getElementById("nougrup");



form.addEventListener("submit", (e) => {

    e.preventDefault();

    let error = false;
    let tnom = nom.value.trim();
    let turl = url.value.trim();
    let tdes = des.value.trim();

    let chek = document.querySelectorAll('input[name="lab"]');

    console.log(chek);
    let tags=[]
    let count = 0;
    chek.forEach(checkbox => {
        if (checkbox.checked) {
            tags.push(checkbox.parentElement.id);
            count++;
        }
    });

    console.log(tags);

    if (tnom.length == 0) {
        enom.innerHTML = "nom del grup obligatori";
        error = true;
    } else {
        enom.innerHTML = "";
    }
    if (turl.length == 0) {
        eurl.innerHTML = "has de possar una url d'una imatge";
        error = true;
    } else {
        eurl.innerHTML = "";
    }
    if (tdes.length == 0) {
        edes.innerHTML = "has de possar una descripcio del grup";
        error = true;
    } else {
        let cw = false;
        censoredWords.forEach(paraula => {
            if (tdes.includes(paraula)) {
                cw = true;
            }
        });

        if (cw) {
            edes.innerHTML = "Ep Has de possat una paraula que no esta permessa dintre d'aquesta xarxa social!!! ";
            error = true;

        } else {
            edes.innerHTML = "";
        }
    }

    if (count >= 1 && count <= 3) {
        cheke.innerHTML = " ";
    } else if (count === 0) {
        cheke.innerHTML = " has de seleccionar com a minim 1 categoria.";
        error=true;
    } else {
        cheke.innerHTML = "S'han seleccionat massa checkbox. Només es permeten un màxim de tres.";
        error=true;
    }


    if (!error){



        
        let newgrup=
            {
                  "nom": tnom,
                  "descripcio" : tdes, 
                  "imatge": turl,
                  "tags": tags
            };
            
            
            nougrup(newgrup);
            bdgrups.push(newgrup);  
            nom.value=""; 
            url.value="";
            des.value="";
        
     
    }
});

