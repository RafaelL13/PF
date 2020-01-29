using Newtonsoft.Json;
using StadiumFood.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;


namespace StadiumFood
{
    // Learn more about making custom code visible in the Xamarin.Forms previewer
    // by visiting https://aka.ms/xamarinforms-previewer
    [DesignTimeVisible(false)]
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
            Registar.Clicked += (sender, e) =>
            {
                Navigation.PushAsync(new Registrarse());
            };
            btnIS.Clicked += (sender, e) =>
            {
                ModelLogin L = new ModelLogin();
                L.Nom_Usuario = Usuario.Text;
                L.Contrasena = Contraseña.Text;
                L.Ubicacion = "";

                String Url = "http://192.168.43.45:8080/wsEstadiumFood/resources/estadiumfood/iniciosesion";

                var http = (HttpWebRequest)WebRequest.Create(new Uri(Url));
                http.Accept = "application/json";
                http.ContentType = "application/json";
                http.Method = "POST";

                string parsedContent = JsonConvert.SerializeObject(L, Formatting.Indented);
                ASCIIEncoding encoding = new ASCIIEncoding();
                Byte[] bytes = encoding.GetBytes(parsedContent);

                Stream newStream = http.GetRequestStream();
                newStream.Write(bytes, 0, bytes.Length);
                newStream.Close();

                var response = http.GetResponse();

                var stream = response.GetResponseStream();
                var sr = new StreamReader(stream);
                var content = sr.ReadToEnd();
            };
        }        

    }
}
