function onclickenbutton(msj){
    saludo="Hola \nBienvenido a Javascript: "+msj;
    alert(saludo)
}

$(document).ready(function(){
    $(".miclase").click(function(){
        let text=$(this).val();
        onclickenbutton(text);
    })
});