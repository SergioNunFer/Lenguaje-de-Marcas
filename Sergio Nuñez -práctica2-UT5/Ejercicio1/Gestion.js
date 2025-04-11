function gestionarFicheroXML(xmlDoc) {
    let librerias = xmlDoc.getElementsByTagName("libreria");
    let cadena = "";

    for (let i = 0; i < librerias.length; i++) {
        let nombreLibreria = librerias[i].getElementsByTagName("nombre")[0].textContent;
        let libros = librerias[i].getElementsByTagName("libro");

        let precioMin = Number.POSITIVE_INFINITY;
        for (let j = 0; j < libros.length; j++) {
            let precio = parseFloat(libros[j].getElementsByTagName("precio")[0].textContent);
            if (precio < precioMin) {
                precioMin = precio;
            }
        }

        cadena += `<h2>${nombreLibreria}</h2>`;
        cadena += "<table>";
        cadena += "<tr><th>Título</th><th>Autor</th><th>Editorial</th><th>Año</th><th>Precio</th></tr>";

        for (let j = 0; j < libros.length; j++) {
            let titulo = libros[j].getElementsByTagName("titulo")[0].textContent;
            let autor = libros[j].getElementsByTagName("autor")[0].textContent;
            let editorial = libros[j].getElementsByTagName("editorial")[0].textContent;
            let año = libros[j].getElementsByTagName("fechaPublicacion")[0].textContent;
            let precio = parseFloat(libros[j].getElementsByTagName("precio")[0].textContent);
            let moneda = libros[j].getElementsByTagName("precio")[0].getAttribute("moneda");

            let clase = "";
            if (precio === precioMin) {
                clase = "precio-minimo";
            }else
            {
                "precio-normal";
            }

            cadena += "<tr>";
            cadena += "<td>" + titulo + "</td>";
            cadena += "<td>" + autor + "</td>";
            cadena += "<td>" + editorial + "</td>";
            cadena += "<td>" + año + "</td>";
            cadena += `<td class="${clase}">${precio} ${moneda}</td>`;
            cadena += "</tr>";
        }

        cadena += "</table><br>";
    }

    document.getElementById("contenedor").innerHTML = cadena;
}
