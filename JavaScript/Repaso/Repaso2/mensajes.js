function publicar() {
    const men = [document.getElementById('mensaje').innerHTML];
    let fLen = men.length;
    let text = "<ul>";
    for (let i = 0; i < fLen; i++) {
        text += "<li>" + men[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("res").innerHTML = text;
}

function ordenar(){
    men.sort()
    publicar()
}

