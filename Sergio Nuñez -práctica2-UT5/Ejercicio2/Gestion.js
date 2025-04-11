let mensajesTotales = [];

function gestionarFicheroTXT(texto) {
    mensajesTotales = texto.split('\n');

    let contenedor = document.createElement('div');
    contenedor.classList.add('chat');

    let chatBox = document.createElement('div');
    chatBox.classList.add('chat-box');

    for (let i = 0; i < mensajesTotales.length; i++) {
        let linea = mensajesTotales[i];
        let tipo = linea.substring(0, 2);
        let mensaje = linea.substring(2);

        let div = document.createElement('div');
        div.classList.add('mensaje');

        if (tipo === 'r:') {
            div.classList.add('izquierda');
        } else if (tipo === 'e:') {
            div.classList.add('derecha');
        }

        div.textContent = mensaje;
        chatBox.appendChild(div);
    }

    contenedor.appendChild(chatBox);
    document.body.appendChild(contenedor);

    añadirFuncionalidadExtra();
}

function añadirFuncionalidadExtra() {
    let contenedor = document.querySelector('.chat');
    let chatBox = document.querySelector('.chat-box');

    let barra = document.createElement('div');
    barra.classList.add('barra-escribir');

    let selector = document.createElement('select');
    let opcion1 = new Option('Yo', 'e');
    let opcion2 = new Option('Tú', 'r');
    selector.appendChild(opcion1);
    selector.appendChild(opcion2);

    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Escribe un mensaje...';

    let boton = document.createElement('button');
    boton.textContent = 'Enviar';

    boton.addEventListener('click', () => {
        let texto = input.value.trim();
        let tipo = selector.value;

        if (texto !== "") {
            let div = document.createElement('div');
            div.classList.add('mensaje');

            if (tipo === 'r') {
                div.classList.add('izquierda');
            } else {
                div.classList.add('derecha');
            }

            div.textContent = texto;
            chatBox.appendChild(div);
            chatBox.scrollTop = chatBox.scrollHeight;

            input.value = "";
        }
    });

    barra.appendChild(selector);
    barra.appendChild(input);
    barra.appendChild(boton);

    contenedor.appendChild(barra);
}
