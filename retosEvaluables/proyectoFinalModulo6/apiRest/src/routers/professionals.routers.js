//?_________  Imports _________\\ 
const {Router} = require('express');                        
const router = Router();


//?_________  rutas y metodos _________\\ 
const professionalsCtrl = require('../controller/professionals.controller'); 

router.get('/profesionales/', professionalsCtrl.getProfessionals);
router.post('/profesionales', professionalsCtrl.postProfessionals);
router.put('/profesionales', professionalsCtrl.putProfessionals);
router.delete('/profesionales', professionalsCtrl.deleteProfessionals);


//?_________  Exports _________\\ 
module.exports = router;