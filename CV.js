

document.getElementById('salir').onclick = function salir(){
  console.log("capturamos el elemto click");

var salir = confirm ("¿Desea salir de la página?") 
if (salir){
alert ("GRACIAS por contactarme")
window.location = "http://facebook.com/stellamaris2";
}
else{ 
  alert ("GRACIAS,sigues viendo mi CV")

}
  document.getElementById('boton').innerHTML =alert ;
}

