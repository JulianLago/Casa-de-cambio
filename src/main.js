/// <reference types="jquery" />
/// <reference types="sizzle"/>
/* eslint-env jquery */

const URL = 'https://api.exchangeratesapi.io/latest?base=';

function actualizarBase(moneda) {
  $('#tbody-monedas').empty();
  fetch(URL + moneda)
    .then((r) => r.json())
    .then((rjson) => {
      Object.keys(rjson.rates).forEach((monedas) => {
        const $tablaValores = $('#tbody-monedas');
        $tablaValores.append(`<tr><td>${monedas}</td><td>${rjson.rates[monedas].toFixed(2)}</td></tr>`);
      });
      $('#fecha').text(`Fecha: ${rjson.date}`);
    })
    .catch((error) => console.error('fallo al pedir la informacion', error));
}
