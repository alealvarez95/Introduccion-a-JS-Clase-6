/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonIntegrantesFamilia = document.querySelector("#boton-integrantes");
const $cuerpoPagina = document.querySelector("body");

function encontrarMayor(edades) {
    let edadMayor = 0;

    for (i = 0; i < edades.length; i++) {
        if (edadMayor < Number(edades[i].value)) {
            edadMayor = Number(edades[i].value);
        }
    }

    return edadMayor;
}

function encontrarMenor(edades) {
    let edadMenor = Number(edades[0].value);

    for (i = 1; i < edades.length; i++) {
        if (edadMenor > Number(edades[i].value)) {
            edadMenor = Number(edades[i].value);
        }
    }

    return edadMenor;
}

function calcularPromedio(edades) {
    let sumaEdades = 0;

    let cantidadDivisoria = edades.length++;

    for (i = 0; i < edades.length; i++) {
        sumaEdades += Number(edades[i].value);
    }

    return sumaEdades / cantidadDivisoria;
}

$botonIntegrantesFamilia.onclick = function () {
    const CANTIDAD_FAMILIARES = Number(document.querySelector("#cantidad-integrantes-familia").value);
    const NUEVO_FORM = document.createElement("form");
    NUEVO_FORM.setAttribute("onsubmit", "return false;");
    NUEVO_FORM.setAttribute("id", "form-calculo-integrantes");

    for (i = 0; i < CANTIDAD_FAMILIARES; i++) {
        let numero = i + 1;

        const NUEVO_DIV = document.createElement("div");
        const NUEVO_INPUT = document.createElement("input");
        const NUEVO_LABEL = document.createElement("label");
        const NUEVO_TEXTO = document.createTextNode(`Familiar nº${numero}: `);

        NUEVO_INPUT.setAttribute("id", `edad${numero}`);
        NUEVO_INPUT.setAttribute("type", "number");
        NUEVO_INPUT.setAttribute("class", "edad");

        NUEVO_LABEL.setAttribute("for", `edad${numero}`);
        NUEVO_LABEL.appendChild(NUEVO_TEXTO);

        NUEVO_DIV.appendChild(NUEVO_LABEL);
        NUEVO_DIV.appendChild(NUEVO_INPUT);

        NUEVO_FORM.appendChild(NUEVO_DIV);
    }

    const NUEVO_BOTON = document.createElement("input");
    NUEVO_BOTON.setAttribute("type", "submit");
    NUEVO_BOTON.setAttribute("value", "Calcular");
    NUEVO_BOTON.setAttribute("id", "boton-calcular-edad");

    const NUEVO_BOTON_RESET = document.createElement("input");
    NUEVO_BOTON_RESET.setAttribute("type", "button");
    NUEVO_BOTON_RESET.setAttribute("value", "Volver a empezar");
    NUEVO_BOTON_RESET.setAttribute("id", "boton-reset");

    NUEVO_FORM.appendChild(NUEVO_BOTON);
    NUEVO_FORM.appendChild(NUEVO_BOTON_RESET);
    $cuerpoPagina.appendChild(NUEVO_FORM);

    const $botonCalcular = document.querySelector("#boton-calcular-edad");

    $botonCalcular.onclick = function () {
        const EDAD_FAMILIARES = document.querySelectorAll(".edad");

        document.querySelector("#resultado-mayor-edad").innerHTML = `Tu familiar mas grande tiene ${encontrarMayor(EDAD_FAMILIARES)} años.`;
        document.querySelector("#resultado-menor-edad").innerHTML = `Tu familiar mas chico tiene ${encontrarMenor(EDAD_FAMILIARES)} años.`;
        document.querySelector("#resultado-promedio-edad").innerHTML = `El promedio de edad de tus familiares es de ${calcularPromedio(EDAD_FAMILIARES)} años.`;
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
