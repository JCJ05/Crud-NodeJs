const {Router} = require('express');
const { renderForm, postForm } = require('../controller/usuario');
const router = Router();


router.get('/formulario' , renderForm);
router.post('/form' , postForm);

module.exports = router;