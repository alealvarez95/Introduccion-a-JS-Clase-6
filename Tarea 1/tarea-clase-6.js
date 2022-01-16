/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonIntegrantesFamilia = document.querySelector("#boton-integrantes");
const $cuerpoPagina = document.querySelector("body");

$botonIntegrantesFamilia.onclick = function () {
    const CANTIDAD_FAMILIARES = Number(document.querySelector("#cantidad-integrantes-familia").value);
    const NUEVO_FORM = document.createElement("form");
    NUEVO_FORM.setAttribute("onsubmit", "return false;");

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
    NUEVO_BOTON.setAttribute("id", "boton-calcular-edad");

    NUEVO_FORM.appendChild(NUEVO_BOTON);
    $cuerpoPagina.appendChild(NUEVO_FORM);
};
