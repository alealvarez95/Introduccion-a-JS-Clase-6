/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonIntegrantesFamilia = document.querySelector("#boton-integrantes");
const $cuerpoPagina = document.querySelector("body");

function encontrarEdadMayor(edades) {
    let edadMayor = 0;

    for (i = 0; i < edades.length; i++) {
        if (edadMayor < Number(edades[i].value)) {
            edadMayor = Number(edades[i].value);
        }
    }

    return edadMayor;
}

function encontrarEdadMenor(edades) {
    let edadMenor = Number(edades[0].value);

    for (i = 1; i < edades.length; i++) {
        if (edadMenor > Number(edades[i].value)) {
            edadMenor = Number(edades[i].value);
        }
    }

    return edadMenor;
}

function calcularEdadPromedio(edades) {
    let sumaEdades = 0;

    let cantidadDivisoria = edades.length++;

    for (i = 0; i < edades.length; i++) {
        sumaEdades += Number(edades[i].value);
    }

    return sumaEdades / cantidadDivisoria;
}

$botonIntegrantesFamilia.onclick = function () {
    const cantidadFamiliares = Number(document.querySelector("#cantidad-integrantes-familia").value);
    const nuevoForm = document.createElement("form");
    nuevoForm.setAttribute("onsubmit", "return false;");
    nuevoForm.setAttribute("id", "form-calculo-integrantes");

    for (i = 0; i < cantidadFamiliares; i++) {
        let numero = i + 1;

        const nuevoDiv = document.createElement("div");
        const nuevoInput = document.createElement("input");
        const nuevoLabel = document.createElement("label");
        const nuevoTexto = document.createTextNode(`Edad del familiar nº${numero}: `);

        nuevoInput.setAttribute("id", `edad${numero}`);
        nuevoInput.setAttribute("type", "number");
        nuevoInput.setAttribute("class", "edad");

        nuevoLabel.setAttribute("for", `edad${numero}`);
        nuevoLabel.appendChild(nuevoTexto);

        nuevoDiv.appendChild(nuevoLabel);
        nuevoDiv.appendChild(nuevoInput);

        nuevoForm.appendChild(nuevoDiv);
    }

    const nuevoDiv = document.createElement("div");

    const nuevoBoton = document.createElement("input");
    nuevoBoton.setAttribute("type", "submit");
    nuevoBoton.setAttribute("value", "Calcular");
    nuevoBoton.setAttribute("id", "boton-calcular-edad");

    const nuevoBotonReset = document.createElement("input");
    nuevoBotonReset.setAttribute("type", "button");
    nuevoBotonReset.setAttribute("value", "Volver a empezar");
    nuevoBotonReset.setAttribute("id", "boton-reset");

    nuevoDiv.appendChild(nuevoBoton);
    nuevoDiv.appendChild(nuevoBotonReset);
    nuevoForm.appendChild(nuevoDiv);
    $cuerpoPagina.appendChild(nuevoForm);

    const $botonCalcular = document.querySelector("#boton-calcular-edad");

    $botonCalcular.onclick = function () {
        const edadFamiliares = document.querySelectorAll(".edad");

        document.querySelector("#resultado-mayor-edad").innerHTML = `Tu familiar mas grande tiene ${encontrarEdadMayor(edadFamiliares)} años.`;
        document.querySelector("#resultado-menor-edad").innerHTML = `Tu familiar mas chico tiene ${encontrarEdadMenor(edadFamiliares)} años.`;
        document.querySelector("#resultado-promedio-edad").innerHTML = `El promedio de edad de tus familiares es de ${calcularEdadPromedio(edadFamiliares)} años.`;
    };

    const $botonReset = document.querySelector("#boton-reset");
    const $formCalculoIntegrantes = document.querySelector("#form-calculo-integrantes");

    $botonReset.onclick = function () {
        $cuerpoPagina.removeChild($formCalculoIntegrantes);

        document.querySelector("#resultado-mayor-edad").innerHTML = ``;
        document.querySelector("#resultado-menor-edad").innerHTML = ``;
        document.querySelector("#resultado-promedio-edad").innerHTML = ``;
    };
};
