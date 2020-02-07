const { Router } = require('express');
var router = Router();
const { poolPromise } = require('../data/config');
const _ = require('underscore');

router.post('/',async (req, res) => {
    const { id_Usuario, Nom_Usuario, Nom_Completo, Correo_Electronico, Num_Telefono, Sexo, Contrasena,idu_tipoususario,Fec_Nacimieto} = req.body;
    console.log(req.body);
    try {   
        const pool = await poolPromise;
        console.log('EXEC PROC_REGISTRAR_USUARIO ' + req.body.id_Usuario +','+req.body.Nom_Usuario+',"'+req.body.Nom_Completo+'","'+req.body.Correo_Electronico+'","'+req.body.Num_Telefono+'","'+req.body.Sexo+'","'+req.body.Contrasena +"','"+req.body.idu_tipoususario +"','"+req.body.Fec_Nacimieto +'');
        const result = await pool.request()
        .query('EXEC PROC_REGISTRAR_USUARIO '+  req.body.id_Usuario+','+req.body.Nom_Usuario+',"'+req.body.Nom_Completo+'","'+req.body.Correo_Electronico+'","'+req.body.Num_Telefono+'","'+req.body.Sexo+'","'+req.body.Contrasena +'","'+req.body.idu_tipoususario +'","'+req.body.Fec_Nacimieto +'"')
            
        res.status(201).json(result.recordset) ; 
      pool.close();
    } catch (err) {
        res.status(500)
        res.send(err.message)
      }  
    
});

module.exports = router;