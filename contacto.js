function validForm(){

        //alert('Esta funcionando el submit')
        let nombre = document.custom_form.name;
                if( nombre.value == ""){
                nombre.nextElementSibling.style.display = 'block';
                nombre.style.border = '2px solid #f00';
                      return false;
                }else{
                        nombre.nextElementSibling.style.display = 'none';
                        nombre.style.border = '2px transparent #f00';   
                }
        
        let email = document.custom_form.correo;
            if( email.value == ""){
                email.nextElementSibling.style.display = 'block';
                email.style.border = '2px solid #f00';
                        return false;
                }else{
                        email.nextElementSibling.style.display = 'none';
                        email.style.border = '2px transparent #f00';   
                 }


                 let celphone = document.custom_form.telefono;
                 if( celphone.value == ""){
                         celphone.nextElementSibling.style.display = 'block';
                         celphone.style.border = '2px solid #f00';
                                return false;
                        }else{
                                celphone.nextElementSibling.style.display = 'none';
                                celphone.style.border = '2px transparent #f00';  
                        }         

                        let location = document.custom_form.localidad;
                           if( location.value == ""){
                               location.nextElementSibling.style.display = 'block';
                               location.style.border = '2px solid #f00';
                                       return false;
                               }else{
                                       location.nextElementSibling.style.display = 'none';
                                       location.style.border = '2px transparent #f00';  
                               }
                               
                                        alert('Todos los datos se cargaron correctamente , nos estaremos comunicando con usted en la brevedad. ¡Gracias por elegirnos!')
                               }
                    
                   
            
