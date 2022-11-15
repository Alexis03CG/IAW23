function imc() {
    let x = document.getElementById('alt').value;
    let y = document.getElementById('pes').value;
    let z = y/(x*x);
    if (z <= 18.5) {
        document.getElementById('res').innerHTML = "Su peso es inferior al recomendado.";
    } 
    else if (z <= 24.9) {
        document.getElementById('res').innerHTML = "Su peso es normal.";
    } 
    else if (z <= 29.9) {
        document.getElementById('res').innerHTML = "Su peso es superior a lo normal.";
    } 
    else if (z >= 30) {
        document.getElementById('res').innerHTML = "Tiene sobrepeso.";
    } 

    }




