/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonIntegrantesFamilia = document.querySelector("#boton-integrantes");
const $cuerpoPagina = document.querySelector("body");

function calcularSalarioMayor(sueldos) {
    let salarioMayor = 0;

    for (i = 0; i < sueldos.length; i++) {
        if (salarioMayor < sueldos[i]) {
            salarioMayor = sueldos[i];
        }
    }

    return salarioMayor;
}

function calcularSalarioMenor(sueldos) {
    let salarioMenor = sueldos[0];

    for (i = 1; i < sueldos.length; i++) {
        if (salarioMenor > sueldos[i]) {
            salarioMenor = sueldos[i];
        }
    }

    return salarioMenor;
}

function calcularPromedioSalarioAnual(sueldos, integrantes) {
    let sueldosTotales = 0;

    for (i = 0; i < integrantes; i++) {
        sueldosTotales += sueldos[i];
    }

    return sueldosTotales / integrantes;
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
        const NUEVO_TEXTO = document.createTextNode(`Salario anual del familiar nº${numero}: `);

        NUEVO_INPUT.setAttribute("id", `sueldo${numero}`);
        NUEVO_INPUT.setAttribute("type", "number");
        NUEVO_INPUT.setAttribute("class", "sueldo");

        NUEVO_LABEL.setAttribute("for", `sueldo${numero}`);
        NUEVO_LABEL.appendChild(NUEVO_TEXTO);

        NUEVO_DIV.appendChild(NUEVO_LABEL);
        NUEVO_DIV.appendChild(NUEVO_INPUT);

        NUEVO_FORM.appendChild(NUEVO_DIV);
    }

    const NUEVO_DIV = document.createElement("div");

    const NUEVO_BOTON = document.createElement("input");
    NUEVO_BOTON.setAttribute("type", "submit");
    NUEVO_BOTON.setAttribute("value", "Calcular");
    NUEVO_BOTON.setAttribute("id", "boton-calcular-sueldo");

    const NUEVO_BOTON_RESET = document.createElement("input");
    NUEVO_BOTON_RESET.setAttribute("type", "button");
    NUEVO_BOTON_RESET.setAttribute("value", "Volver a empezar");
    NUEVO_BOTON_RESET.setAttribute("id", "boton-reset");

    NUEVO_DIV.appendChild(NUEVO_BOTON);
    NUEVO_DIV.appendChild(NUEVO_BOTON_RESET);
    NUEVO_FORM.appendChild(NUEVO_DIV);
    $cuerpoPagina.appendChild(NUEVO_FORM);

    const $botonCalcular = document.querySelector("#boton-calcular-sueldo");

    $botonCalcular.onclick = function () {
        const SUELDOS_FAMILIARES = document.querySelectorAll(".sueldo");

        let cantidadSueldos = 0;
        const LISTA_SUELDOS = [];

        for (i = 0; i < SUELDOS_FAMILIARES.length; i++) {
            if (SUELDOS_FAMILIARES[i].value === "") {
            } else {
                cantidadSueldos++;
                LISTA_SUELDOS.push(Number(SUELDOS_FAMILIARES[i].value));
            }
        }

        const SALARIO_ANUAL_PROMEDIO = calcularPromedioSalarioAnual(LISTA_SUELDOS, cantidadSueldos);

        document.querySelector("#mayor-salario-anual").innerHTML = `El salario anual mayor de la familia es de $${calcularSalarioMayor(LISTA_SUELDOS)}.`;
        document.querySelector("#menor-salario-anual").innerHTML = `El salario anual menor de la familia es de $${calcularSalarioMenor(LISTA_SUELDOS)}.`;
        document.querySelector("#salario-anual-promedio").innerHTML = `El salario anual promedio de la familia es de $${SALARIO_ANUAL_PROMEDIO}.`;
        document.querySelector("#salario-mensual-promedio").innerHTML = `El salario mensual promedio de la familia es de $${SALARIO_ANUAL_PROMEDIO / 12}.`;
    };

    const $botonReset = document.querySelector("#boton-reset");
    const $formCalculoIntegrantes = document.querySelector("#form-calculo-integrantes");

    $botonReset.onclick = function () {
        $cuerpoPagina.removeChild($formCalculoIntegrantes);

        document.querySelector("#mayor-salario-anual").innerHTML = ``;
        document.querySelector("#menor-salario-anual").innerHTML = ``;
        document.querySelector("#salario-anual-promedio").innerHTML = ``;
        document.querySelector("#salario-mensual-promedio").innerHTML = ``;
    };
};
