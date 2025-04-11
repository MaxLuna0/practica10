function crearBoton(texto, tipo, tamanio, colorTexto, colorFondo, alinea, url) {
    let fuente;
    let alineacion;

    switch (tipo) {
        case 1:
            fuente = "Boldonse";
            break;
        case 2:
            fuente = "Comic Neue";
            break;
        case 3:
            fuente = "Underdog";
            break;
        default:
            fuente = "Arial";
    }

    switch (alinea) {
        case 1:
            alineacion = "center";
            break;
        case 2:
            alineacion = "right";
            break;
        default:
            alineacion = "left";
    }

    document.write(
        '<div align="' + alineacion + '">' +
            '<form action="' + url + '" target="derecha">' +
                '<input type="submit" value="' + texto + '" ' +
                    'class="boton-estilo" ' +
                    'style="background-color:' + colorFondo + '; ' +
                    'color:' + colorTexto + '; ' +
                    'font-family:' + fuente + '; ' +
                    'font-size:' + tamanio + 'px;">' +
            '</form>' +
        '</div>'
    );
}
