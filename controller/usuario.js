const { response, request } = require("express");

const renderForm = ((req, res = response) =>{
   
    res.render('home' , {
    
        titulo: 'Crud con node js',
        formulario: 'Formulario de Contacto'

    });

}) 

const postForm =((req = request , res = response) => {
   
     const {name , apellido , correo , direccion} = req.body;
     const usuario = {name , apellido , correo , direccion};

     res.render('result' , {

          titulo: 'Resultado del formulario',
          usuario

     })

})


module.exports = {

    renderForm,
    postForm
}
   
  