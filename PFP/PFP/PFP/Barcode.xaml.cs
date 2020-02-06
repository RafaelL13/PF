using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using Newtonsoft.Json;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using System.Xml.Linq;

namespace PFP
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Barcode : ContentPage
    {
        HttpClient client = new HttpClient();
        String Url;
        public Barcode(String Token)
        {
            InitializeComponent();
            BarcodeGen.BarcodeValue = Token;
        }        
    }
}