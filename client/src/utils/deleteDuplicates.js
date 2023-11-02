// recordemos que los países en esta aplicación, son objetos javascript, por lo tanto, iterar los países para
// buscar duplicados, tendremos que hacerlo mediante su versión JSON.

function deleteDuplicates(arr) {
    const elementosUnicos = new Set();
    const arraySinDuplicados = [];

    arr.forEach((objeto) => {
        const objetoString = JSON.stringify(objeto); //convierte a JSON para comparar textualmente si los objetos son idénticos o no.
        if (!elementosUnicos.has(objetoString)) {
            elementosUnicos.add(objetoString);
            arraySinDuplicados.push(objeto); // si son idénticos, entonces agregamos al array "arraySinDuplicados" el objeto javascript, no el JSON.
        }
    });

    return arraySinDuplicados; //finalmente devolvemos el array que contiene los objetos sin duplicarse.
}

export default deleteDuplicates;