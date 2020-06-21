/// <reference types="jquery" />
/// <reference types="sizzle"/>

const URL = "https://api.exchangeratesapi.io/latest";
let moneda ="";
fetch(URL)
.then(respuesta => respuesta.json())
.then(respuestajson =>
   {  
   
      Object.keys(respuestajson.rates).forEach(monedas=>{
       $('#valores').append(`<ul>${monedas} : ${respuestajson.rates[monedas]}</ul>`)
     // console.log(monedas + " " + respuestajson.rates[monedas]) ;
   })
      
      
      $('#moneda').text(`Moneda: ${respuestajson.base}`)
      $('#dia').text(`Dia: ${respuestajson.date}`)
     // $('#valores').append(`<ul> ${} </ul>`)
})
.catch(error => console.error("fallo al pedir la informacion",error));



