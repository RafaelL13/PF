using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Windows.Data.Json;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace PFP
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Menu : ContentPage
    {
        HttpClient client = new HttpClient();
        String Url, UrlTock, Token = "";
        public Menu(String User, int IdEmpresa)
        {
            InitializeComponent();
            conexion c = new conexion();
            Url = c.getUrlDatosEmp();
            UrlTock = c.getUrlToken();
            ConsultarDatosGenerales(User, IdEmpresa);
            Generar.Clicked += async (sender, e) =>
            {
                ConsultarToken(User, IdEmpresa);                
            };
         }
        public async void ConsultarDatosGenerales(String Usuario, int IdEmpresa)
        {
            if (Usuario != null && IdEmpresa != 0)
            {
                //DatosEmp DE = new DatosEmp();
                //DE.NumEpleado = Usuario;
                // DE.IdEmpresa = IdEmpresa;

                //string DL = JsonConvert.SerializeObject(DE);
                //var data = new StringContent(DL, Encoding.UTF8, "application/json");
                var response = await client.GetAsync(Url + Usuario + '&' + IdEmpresa);
                string result = response.Content.ReadAsStringAsync().Result;

                var objResponse1 = JsonConvert.DeserializeObject<List<DatosEmp>>(result);
                foreach (DatosEmp Obj in objResponse1)
                {
                    Nombre.Text = Obj.Nombre;
                    Empresa.Text = Obj.Empresa;
                    Ejes.Text = Convert.ToString(Obj.Ejes);
                    Tarifa.Text = Convert.ToString(Obj.Tarifa);
                    Estatus.Text = Obj.Estatus;
                }
            }
        }
        public async void ConsultarToken(String Usuario, int IdEmpresa)
        {
            if (Usuario != null && IdEmpresa != 0)
            {
                //var response = await client.GetAsync(Url + Usuario + '&' + IdEmpresa);
                var UrlC = UrlTock + Usuario + '&' + IdEmpresa;
                var response = await client.GetAsync(UrlC);
                string result = response.Content.ReadAsStringAsync().Result;
                var objResponse1 = JsonConvert.DeserializeObject<List<TokenResp>>(result);
                foreach (TokenResp Obj in objResponse1)
                {
                    Token = Obj.TOKEN_ACTUAL;
                }
                if (Token != "")
                {
                    await Navigation.PushAsync(new Barcode(Token));
                }
                else
                {
                    await DisplayAlert("Alert", "No Tiene Token Actualmente", "OK");
                }
            }
        }
    }
}