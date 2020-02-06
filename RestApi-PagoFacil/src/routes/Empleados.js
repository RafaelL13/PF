const { Router } = require('express');
var router = Router();
const { poolPromise } = require('../data/config')
const _ = require('underscore');

// Display all users
router.get('/Consultar/', async (req, res) => {
    try {   
    const pool = await poolPromise;
    const result = await pool.request()
        .query('SELECT * FROM Empleados')      
    res.json(result.recordset)        
    
} catch (err) {
    res.status(500)
    res.send(err.message)
  }  
});

// Display a single user by ID
router.get('/Consultar/:id',async (req, res) => {
    const id = req.params.id;    
    try {       
        const pool = await poolPromise;
        const result = await pool.request()        
        .query('SELECT * FROM Empleados WHERE NumEmpleado = '+ id +'', )      
        res.json(result.recordset)        
        
    } catch (err) {
        res.status(500)
        res.send(err.message)
      }  
});
router.get('/ConsultarDatos/:NumEmpleado&:IdEmpresa',async (req, res) => {
    const NumEmpleado = req.params.NumEmpleado;      
    const IdEmpresa = req.params.IdEmpresa;   
    console.log(NumEmpleado,IdEmpresa); 
    try {       
        const pool = await poolPromise;
        const result = await pool.request()        
        .query('EXEC SPConsultarDatosGenerales @NumEpleado = '+ NumEmpleado +', @IdEmpresa = '+ IdEmpresa +'')      
        res.json(result.recordset)        
        console.log(result.recordset);
    } catch (err) {
        res.status(500)
        res.send(err.message)
      }  
});
// Add a new user EXEC SPAgregarEmpleados @NumEmpleado,@IdEmpresa,@NomEmpleado,@Correo,@Telefono,@Estatus,@IdVehiculo
router.post('/Agregar/',async (req, res) => {
    const { NumEmpleado, IdEmpresa, NomEmpleado, Correo, Telefono, Estatus, IdVehiculo } = req.body;
    console.log(req.body);
    try {   
        const pool = await poolPromise;
        console.log('EXEC SPAgregarEmpleados',req.body.NumEmpleado+','+req.body.IdEmpresa+',"'+req.body.NomEmpleado+'","'+req.body.Correo+'","'+req.body.Telefono+'",'+req.body.Estatus+','+req.body.IdVehiculo+'');
        const result = await pool.request()
        .query('EXEC SPAgregarEmpleados '+req.body.NumEmpleado+','+req.body.IdEmpresa+',"'+req.body.NomEmpleado+'","'+req.body.Correo+'","'+req.body.Telefono+'",'+req.body.Estatus+','+req.body.IdVehiculo+'')
            
        res.status(201).json(result.recordset) ; 

    } catch (err) {
        res.status(500)
        res.send(err.message)
      }  
    
});
// Add a new user  EXEC SPActualizarEmpleados @NumEmpleado,@IdEmpresa,@NomEmpleado,@Correo,@Telefono,@Estatus,@IdVehiculo
 router.post('/Actualizar/',async (req, res) => {
    const { NumEmpleado, IdEmpresa, NomEmpleado, Correo, Telefono, Estatus, IdVehiculo } = req.body;
    try {   
        const pool = await poolPromise;
        console.log('EXEC SPActualizarEmpleados',req.body.NumEmpleado+','+req.body.IdEmpresa+',"'+req.body.NomEmpleado+'","'+req.body.Correo+'","'+req.body.Telefono+'",'+req.body.Estatus+','+req.body.IdVehiculo+'');
        const result = await pool.request()
        .query('EXEC SPActualizarEmpleados '+req.body.NumEmpleado+','+req.body.IdEmpresa+',"'+req.body.NomEmpleado+'","'+req.body.Correo+'","'+req.body.Telefono+'",'+req.body.Estatus+','+req.body.IdVehiculo+'')
            
        res.status(201).json(result.recordset) ; 

    } catch (err) {
        res.status(500)
        res.send(err.message)
      }  
    
});



// Export the router
module.exports = router;