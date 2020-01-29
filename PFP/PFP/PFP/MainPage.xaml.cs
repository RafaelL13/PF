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


namespace PFP
{
    // Learn more about making custom code visible in the Xamarin.Forms previewer
    // by visiting https://aka.ms/xamarinforms-previewer
    [DesignTimeVisible(false)]
    public partial class MainPage : ContentPage
    {
        string Url = "http://192.168.0.12:8080/Login/Empleado/";
        HttpClient client = new HttpClient();
        int Status;
        public MainPage()
        {
            InitializeComponent();

            btnIS.Clicked += async (sender, e) =>
            {
                if (Usuario.Text != null && Contraseña.Text != null)
                {
                    Model M = new Model();
                    M.IdEmpleado = Usuario.Text;
                    M.Contraseña = Contraseña.Text;

                    string DL = JsonConvert.SerializeObject(M);
                    var data = new StringContent(DL, Encoding.UTF8, "application/json");
                    var response = await client.PostAsync(Url, data);
                    string result = response.Content.ReadAsStringAsync().Result;

                    var objResponse1 = JsonConvert.DeserializeObject<List<Respon>>(result);
                    foreach (Respon Obj in objResponse1)
                    {
                        String R = Obj.Response;
                        if (R == "User successfully logged in")
                        {
                            Status = 1;
                        }
                        else if (R == "Incorrect password")
                        {
                            await DisplayAlert("Alert", "Contraseña Incorrecta", "OK");
                            Status = 0;
                        }
                        else if (R == "Invalid login")
                        {
                            await DisplayAlert("Alert", "Login Incorrecto", "OK");
                            Status = -1;
                        }
                    }
                    if (Status == 1)
                    {
                        await DisplayAlert("Success", "Login correcto", "OK");
                    }
                }
                else
                {
                    await DisplayAlert("Alert", "Rellene los campos", "OK");
                }
            };            
        }
    }
}


