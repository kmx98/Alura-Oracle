let listaNombres = []; //

document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        agregarAmigo();
    }
});

function vaciarInput() {
    document.getElementById('amigo').value = "";
}

function mostrarAmigos(amigos) {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>• ${amigos[i]}</li>`; // Agrega cada amigo como <li>
    }
}

function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (listaNombres.length === 0) {
        alert("No hay amigos en tu lista");
        return;
    }

    // Escoge un nombre aleatoriamente
    let indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
    let amigoSorteado = listaNombres[indiceAleatorio];

    // Mostrar el resultado en el elemento de resultado
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}


function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombreLimpio = input.value.trim(); // Se eliminan espacios al inicio y final

    if (nombreLimpio === "") {
        alert("El nombre no puede estar vacío.");
        vaciarInput();
        return;
    }

    listaNombres.push(nombreLimpio);
    vaciarInput();
    mostrarAmigos(listaNombres);
}