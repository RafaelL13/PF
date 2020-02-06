using System;
using System.Collections.Generic;
using System.Text;

namespace PFP
{
     
    public class conexion
    {
        String UrlEmpleados = "http://192.168.1.12:8080/Login/Empleado/";
        String UrlDatosEmpleados = "http://192.168.1.12:8080/Empleados/ConsultarDatos/";
        String UrlToken = "http://192.168.1.12:8080/Token/ConsultarToken/";
        public String getUrlEmp()
        {
         return this.UrlEmpleados;            
        }
        public String getUrlDatosEmp()
        {
            return this.UrlDatosEmpleados;
        }
        public String getUrlToken()
        {
            return this.UrlToken;
        }
    }
}
