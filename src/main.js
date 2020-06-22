/// <reference types="jquery" />
/// <reference types="sizzle"/>

const urlEuro = "https://api.exchangeratesapi.io/latest";
let moneda ="";
$('#boton-eur').click(() => {
   $('ul').remove();
   fetch(urlEuro)
.then(respuesta => respuesta.json())
.then(respuestajson =>
   {  
   
      Object.keys(respuestajson.rates).forEach(monedas=>{
       $('#valores').append(`<ul>${monedas} : ${respuestajson.rates[monedas]}</ul>`)})
      
     
      $('#moneda').text(`Moneda: ${respuestajson.base}`)
      $('#dia').text(`Dia: ${respuestajson.date}`)
     }) 

.catch(error => console.error("fallo al pedir la informacion",error));
});


$('#boton-usd').click(()=>{
   
const urlDolar = "https://api.exchangeratesapi.io/latest?base=USD";
$('ul').remove();   
fetch(urlDolar)
   .then(respuesta => respuesta.json())
   .then(respuestajson => {
      Object.keys(respuestajson.rates).forEach(monedas=>{
         $('#valores').append(`<ul>${monedas} : ${respuestajson.rates[monedas]}</ul>`)})

   $('#moneda').text(`Moneda: ${respuestajson.base}`)
   $('#dia').text(`Dia: ${respuestajson.date}`)
})
.catch(error => console.error("fallo al pedir la informacion",error));
})


