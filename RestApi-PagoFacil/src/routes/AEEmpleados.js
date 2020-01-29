const { Router } = require('express');
var router = Router();
const { poolPromise } = require('../data/config')
const _ = require('underscore');



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
    /*router.post('/',async (req, res) => {
        const { NumEmpleado, IdEmpresa, NomEmpleado, Correo, Telefono, FechaAlta, Estatus, IdVehiculo } = req.body;
       console.log(req.body);
        try {   
            const pool = await poolPromise;
            console.log(req.body.NumEmpleado+','+req.body.IdEmpresa+',"'+req.body.NomEmpleado+'",'+req.body.Correo+','+req.body.Telefono+','+req.body.FechaAlta+','+req.body.Estatus+','+req.body.IdVehiculo+'');
            const result = await pool.request()
            .query('INSERT INTO Empleados(NumEmpleado, IdEmpresa, NomEmpleado, Correo, Telefono, FechaAlta, Estatus, IdVehiculo) VALUES('+req.body.NumEmpleado+','+req.body.IdEmpresa+',"'+req.body.NomEmpleado+'",'+req.body.Correo+','+req.body.Telefono+','+req.body.FechaAlta+','+req.body.Estatus+','+req.body.IdVehiculo+')')
                
                res.status(201).send(`User added with ID: ${result.NumEmpleado}`);

        } catch (err) {
            res.status(500)
            res.send(err.message)
          }  
        
    });*/

    // Update an existing user
    router.put('/users/:id', (req, res) => {
        const id = request.params.id;

        pool.query('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) => {
            if (error) throw error;

            res.send('User updated successfully.');
        });
    });
/*
    // Delete a user
    app.delete('/users/:id', (req, res) => {
        const id = request.params.id;

        pool.query('DELETE FROM users WHERE id = ?', id, (error, result) => {
            if (error) throw error;
            res.send('User deleted.');
        });
    });*/


// Export the router
module.exports = router;