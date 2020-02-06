const { Router } = require('express');
var router = Router();
const { poolPromise } = require('../data/config')
const _ = require('underscore');

// Display a single user by ID
router.get('/ConsultarDatosToken/:Token',async (req, res) => {
    const Token = req.params.Token;    
    try {       
        const pool = await poolPromise;
        const result = await pool.request()        
        .query('EXEC SPConsultarDatosToken @Token = '+ Token +'', )      
        res.json(result.recordset);        
        
    } catch (err) {
        res.status(500)
        res.send(err.message)
      }  
});
router.get('/ConsultarToken/:NumEmpleado&:IdEmpresa',async (req, res) => {
    const NumEmpleado = req.params.NumEmpleado;      
    const IdEmpresa = req.params.IdEmpresa;   
    console.log(NumEmpleado,IdEmpresa);
    try {       
        const pool = await poolPromise;
        const result = await pool.request().query('EXEC SPToken @NumEmpleado = '+ NumEmpleado +' ,@IdEmpresa = '+ IdEmpresa +'', )      
        res.json(result.recordset) ; 
        console.log(result.recordset);   
    } catch (err) {
        res.status(500)
        res.send(err.message)
      }  
});
// Export the router
module.exports = router;