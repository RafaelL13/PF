using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Net;
using System.IO;
using System.Text;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace StadiumFood
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Registrarse : ContentPage
    {
        private string urlValidacion;

        public Registrarse()
        {
            InitializeComponent();
        }
        private async void Registar_Click(object sender, EventArgs args)
        {

            ModelRegiter R = new ModelRegiter();
            R.NomUsuario = User.Text;
            R.NomCompleto = Nombre.Text;
            R.CorreoElectronico = Correo.Text;
            R.NumTelefono = Contacto.Text;
            R.Sexo = "";
            R.Contrasena = Contraseña.Text;
            R.FecNacimieto = Fecha.Date;


            String Url = "http://192.168.43.45:8080/wsEstadiumFood/resources/estadiumfood/registrarusuario";
            
            var http = (HttpWebRequest)WebRequest.Create(new Uri(Url));
            http.Accept = "application/json";
            http.ContentType = "application/json";
            http.Method = "POST";

            string parsedContent = JsonConvert.SerializeObject(R, Formatting.Indented);
            ASCIIEncoding encoding = new ASCIIEncoding();
            Byte[] bytes = encoding.GetBytes(parsedContent);

            Stream newStream = http.GetRequestStream();
            newStream.Write(bytes, 0, bytes.Length);
            newStream.Close();

            var response = http.GetResponse();

            var stream = response.GetResponseStream();
            var sr = new StreamReader(stream);
            var content = sr.ReadToEnd();
        }
    }
}