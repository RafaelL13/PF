const { Router } = require('express');
var router = Router();
const { poolPromise } = require('../data/config')
const _ = require('underscore');

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

module.exports = router;