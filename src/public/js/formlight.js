
//Presiona para abrir formulario ==============


    $('#mailme').click(function(){
        document.getElementById("formulario").style.display="flex";  
    });

    $('#closeForm').click(function(){
        document.getElementById("formulario").style.display="none";  
    });

     
//Validacion de Datos ==============

// $('#sendMail').click(function(){

    
//     // Validate name ==============================
//     if( $('#name').val() == '' ){
//         alert("coloca nombre")
//     }

//     // Validate mail ==============================
//     if( $('#email').val() == '' ){
//         alert("coloca mail")
//     }
//     // Validate phone ==============================
//     if( $('#phone').val() == '' ){
//         alert("coloca mail")
//     }

//     // Validado Messge ==============================
//     if( $('#message').val() == '' ){
//         alert("coloca mensaje")
//     } 
//     else{
//         alert("Enviando...")
//         document.getElementById("formulario").style.display="none"; 
//     }

// });
