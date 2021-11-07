"use strict"

document.getElementById("cuestionario").onsubmit = function() {
var total = 5 ;
var puntos = 0;
var porcentaje = 0;

var form = document.forms["form"]; //document.forms para ingresar en los elementos del formulario
var respuestas = ["b","c","a","b","d"];

   for(var i=1 ; i<=total;i++){

   	if(form["p"+i].value ===null || form["p"+i].value === ""){
   		alert("Responda la pregunta " + i);	
   	}else{
   		if(form["p"+i].value === respuestas[i-1]){
   			puntos++;
            document.getElementById("caja"+i).innerHTML = "Correcto";
            document.getElementById("caja"+i).style.color = "black";
             document.getElementById("caja"+i).style.background = "green";

   		}else{
            document.getElementById("caja"+i).innerHTML = "Incorrecta";
            document.getElementById("caja"+i).style.color = "black";
             document.getElementById("caja"+i).style.background = "red";
         }

   	}
      
   }

         if(form["nombre"].value ===null || form["nombre"].value === "")
                    alert("INGRESE NOMBRE VALIDO");
                 else{
                 document.getElementById("nombre").innerHTML = "BIENVENIDO "+form["nombre"].value
                 document.getElementById("nombre").style.background = "black"
                 document.getElementById("nombre").style.display = "block"
                  }
 
      porcentaje = (puntos * 100) / 5 ;

   var resultado = document.getElementById("resultado");
   resultado.innerHTML = '<h3> Porcentaje : %' + porcentaje +'  </h3> '

   
   return false ;
}
