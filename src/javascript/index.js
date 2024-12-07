$(document).ready(function() {

    $("#boton01").on("click", function(){
        // Mensaje notón pulsado
     //   alert("Este botón es eliminado");

        // Ocultar botón al ser pulsado
        $(this).hide(100);

        // Añadir un nuevo botón
        $("#contenedor02").append("<button>Botón 02</button>");

        // Crear arreglo de cadenas para recorrerlo y presentarlo como una lista ordenada
        let arreglo = ["En un lugar ","de La Mancha ", "de cuyo nombre"];

        for (i=0;i<arreglo.length;i++){
            $("#ol01").append(
                $("<li>").text(arreglo[i])
            )
        }

        // Añadir un nuevo botón, caja de texto y área de texto
        $("#contenedor04").append("<button id='boton03'>Botón 03</button>");
        $("#contenedor05").append("<input id='cajaTexto' type='text'/>");
        $("#contenedor06").append("<textarea id='areaTexto' cols='30' rows='10'></textarea>");

        // Si el usuario no teclea nada en la caja, saludo: "Hola, tron".
        // Si ha escrito algo, lo duplico.
        eventoClickBtn03 =function(event){
            if ($("#cajaTexto").val() ==""){    // ojo, valor no contenido 
                $("#areaTexto").text('Hola') 
                //$("#areaTexto").val('Hola')
            } else {
                $("#areaTexto").append($("#cajaTexto").val());
                //$("#areaTexto").append($("#cajaTexto").text());
            }
        }
        $("#boton03").on("click", eventoClickBtn03);

        $("#contenedor06").append("<button id='boton04'>Limpiar/Reset</button>");
        eventoClickBtnLimpiar = function(event){
            $("#areaTexto").val(''); // ¡¡ entre paréntesis !! (no con =)
            $("#cajaTexto").val('');
        }
        $("#boton04").on("click",eventoClickBtnLimpiar)
    });

});

console.log('Consoleando que es gerundio');