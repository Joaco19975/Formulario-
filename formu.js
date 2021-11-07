"use strict"

var inputs = document.getElementsByClassName("formu__input");
for(var i = 0 ; i < inputs.length ; i++ ){
  inputs[i].addEventListener("keyup", function(){//ESTO EVALUA SI EL INPUT ESTÁ LLENO
  	if(this.value.length >=1){//SI INPUT TIENE UNO O MAS LETRAS LLENANDO SU ESPACIO
  	 this.nextElementSibling.classList.add("fijar") ; //SELECCIONO AL SIGUIENTE ELEMENTO

  	 }else{
         this.nextElementSibling.classList.remove("fijar")
  	 }
  }); 
  

}