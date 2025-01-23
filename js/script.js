$(document).ready(function(){

    let $coin = $("#coin");

    $coin.on("click", function(){
        let randomNum = Math.random();     
        $coin.removeClass(); //borra la clase que tenga para poder asignarle una nueva y q no pete la animacion

        setTimeout(function(){

            if(randomNum <= 0.5){
                $coin.addClass("isHeads");
            }else{
                $coin.addClass("isTails");
            }

        }, 100);

    });

});