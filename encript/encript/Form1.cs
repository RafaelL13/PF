using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace encript
{
    public partial class Form1 : Form
    {
        String Code;
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
           //Code = System.Text.Encoding.Unicode.GetString(Convert.FromBase64String(textBox1.Text));
            
            Byte[] bytes = System.Text.Encoding.ASCII.GetBytes((textBox1.Text));
            textBox2.Text = System.Text.Encoding.Unicode.GetString(Convert.FromBase64String(bytes);
        }
        //System.Text.Encoding.Unicode.GetString(Convert.FromBase64String("ZABhAHQAYQAgAHMAbwB1AHIAYwBlACAAPQAgADEAOQAyAC4AMQA2ADgALgAwAC4AMgAyADAALAAxADQAMwAzADsAIABpAG4AaQB0AGkAYQBsACAAYwBhAHQAYQBsAG8AZwA9AE8AUgBMAEUAUgA7ACAAdQBzAGUAcgAgAGkAZAA9ACAATwBSAEwARQBSAFMAQwA7ACAAcABhAHMAcwB3AG8AcgBkACAAPQAgAE8AcgBsAGUAcgAxADIAMwA7AA ==")));
       
    }
}
