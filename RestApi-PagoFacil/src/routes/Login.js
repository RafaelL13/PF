const { Router } = require('express');
var router = Router();
const { poolPromise } = require('../data/config')
const _ = require('underscore');

router.post('/Empleado/',async (req, res) => {
    var IdEmpleado = req.body.IdEmpleado;    
    var Contraseña = req.body.Contraseña;
console.log(IdEmpleado,Contraseña);
    try {       
        const pool = await poolPromise;
        const result = await pool.request().query('EXEC SPLoginEmpleado @IdEmpleado = '+ IdEmpleado +' ,@Contraseña = '+ Contraseña +'', )      
        res.status(201)
        res.send(result.recordset);
        console.log(result.recordset); 
    } catch (err) {
        res.status(500)
        res.send(err.message)
      }  
});

module.exports = router;