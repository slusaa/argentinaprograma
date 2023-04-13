
$(document).ready(() =>{
         $('#errorName').hide();
         $('#btn-form').click(function(){

            let nombre = $('#nombre').val();
            
                    if (nombre.length < 3){
                            $('#errorName').show();
                            return;
            }else{
                    $('#errorName').hide();
                                                    }

             });

    
        $('#errorEmail').hide();
        $('#btn-form').click(function(){

            let email = $('#correo').val();
                    
                    if(email.length < 3){
                            $('#errorEmail').show();
                            return;
                    }else{
                            $('#errorEmail').hide();
                                                    }
            });

    
        $('#errorTel').hide();
        $('#btn-form').click(function(){
    
                    let telefono = $('#telefono').val();
                            
                            if(telefono.length < 1){
                                    $('#errorTel').show();
                                    return;
                            }else{ 
                                    $('#errorTel').hide();
                                                            }
                    });       


            
            $('#errorLoc').hide();
            $('#btn-form').click(function(){
    
                    let localidad = $('#localidad').val();
                            
                            if(localidad.length < 3){
                                    $('#errorLoc').show();
                                    return;
                            }else{
                                    $('#errorLoc').hide();
                                                            }
                        });                                    

                    });
                    
                   
            
