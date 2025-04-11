function loadDocA(fichero) {
    let tipo = fichero.split('.');
    let http = new XMLHttpRequest();
    http.open("GET", fichero, true);
    http.send();
    http.addEventListener('load', (event) => {
        if (http.status === 200) {
            if (tipo[1] == "xml") {
                gestionarFicheroXML(http.responseXML)
            }else{
                gestionarFicheroTXT(http.responseText)
            }
            
        }
    });
}
loadDocA("documento.txt");