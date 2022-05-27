using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace Lotto
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }

        private void Guziczek_Clicked(object sender, EventArgs e)
        {
            Wyniki.Text = "Liczby Trafione: \n";
            NieWyniki.Text = "Liczby Nietrafione: \n";

            Random rand = new Random();

            int l1 = Int32.Parse(e1.Text);
            int l2 = Int32.Parse(e2.Text);
            int l3 = Int32.Parse(e3.Text);

            int l4 = Int32.Parse(e4.Text);
            int l5 = Int32.Parse(e5.Text);
            int l6 = Int32.Parse(e6.Text);

            int[] liczbyPod = new int[6] {l1, l2, l3, l4, l5, l6};
            
            int[] liczbyZw = new int[6];
            for(int i=0;i<6;i++)
            {
                liczbyZw[i] = rand.Next()%49;
            }
            int j = 0;
            int k;
            bool zwycieska = true;
            do
            {
                if ((liczbyPod[j] >= 49) || liczbyPod[j] <= 1)
                {
                    liczbyPod[j] = rand.Next() % 49;
                }

                for (k = 0; k < liczbyZw.Length; k++)
                {
                    if (liczbyPod[j] == liczbyZw[k])
                    {

                        zwycieska = true;
                        break;
                    }
                    else
                    {
                        zwycieska = false;

                    }

                }

                if (zwycieska == true)
                {
                    Wyniki.Text += liczbyPod[j] + " ";
                }
                else
                {
                    NieWyniki.Text += liczbyPod[j] + " ";
                }


                j++;
            }while (j <= 5);

        }

        
    }
}
