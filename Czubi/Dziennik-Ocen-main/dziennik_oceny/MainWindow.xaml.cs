using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace oceny
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

        }

        private void losuj_Click(object sender, RoutedEventArgs e)
        {
            Random random = new Random();

            string[] uczniowie = { "Marian", "Jakub", "Michał Sz", "Michał S", "Olaf", "Hubert", "Filip", "Sebastian", "Grzegorz" };
            int[] polskiT = new int[uczniowie.Length];
            int[] matematykaT = new int[uczniowie.Length];
            int[] angielskiT = new int[uczniowie.Length];
            int[] fizykaT = new int[uczniowie.Length];
            int[] historiaT = new int[uczniowie.Length];



            if (polski.IsSelected == true)
            {
                for (int i = 0; i < uczniowie.Length; i++)
                {
                    polskiT[i] = random.Next(1, 6);
                }
            }
            else if (matematyka.IsSelected == true)
            {
                for (int i = 0; i < uczniowie.Length; i++)
                {
                    matematykaT[i] = random.Next(1, 6);
                }
            }
            else if (angielski.IsSelected == true)
            {
                for (int i = 0; i < uczniowie.Length; i++)
                {
                    angielskiT[i] = random.Next(1, 6);
                }
            }
            else if (fizyka.IsSelected == true)
            {
                for (int i = 0; i < uczniowie.Length; i++)
                {
                    fizykaT[i] = random.Next(1, 6);
                }
            }
            else if (historia.IsSelected == true)
            {
                for (int i = 0; i < uczniowie.Length; i++)
                {
                    historiaT[i] = random.Next(1, 6);
                }
            }


            if (polski.IsSelected == true)
            {
                l0.Text = "Oceny klasy 3pTP z języka polskiego";
                l1.Text = uczniowie[0] + ": " + polskiT[0];
                l2.Text = uczniowie[1] + ": " + polskiT[1];
                l3.Text = uczniowie[2] + ": " + polskiT[2];
                l4.Text = uczniowie[3] + ": " + polskiT[3];
                l5.Text = uczniowie[4] + ": " + polskiT[4];
                l6.Text = uczniowie[5] + ": " + polskiT[5];
                l7.Text = uczniowie[6] + ": " + polskiT[6];
                l8.Text = uczniowie[7] + ": " + polskiT[7];
                l9.Text = uczniowie[8] + ": " + polskiT[8];

            }
            else if (matematyka.IsSelected == true)
            {
                l0.Text = "Oceny klasy 3pTP z matematyki";
                l1.Text = uczniowie[0] + ": " + matematykaT[0];
                l2.Text = uczniowie[1] + ": " + matematykaT[1];
                l3.Text = uczniowie[2] + ": " + matematykaT[2];
                l4.Text = uczniowie[3] + ": " + matematykaT[3];
                l5.Text = uczniowie[4] + ": " + matematykaT[4];
                l6.Text = uczniowie[5] + ": " + matematykaT[5];
                l7.Text = uczniowie[6] + ": " + matematykaT[6];
                l8.Text = uczniowie[7] + ": " + matematykaT[7];
                l9.Text = uczniowie[8] + ": " + matematykaT[8];

            }

            else if (angielski.IsSelected == true)
            {
                l0.Text = "Oceny klasy 3pTP z języka angielskiego";
                l1.Text = uczniowie[0] + ": " + angielskiT[0];
                l2.Text = uczniowie[1] + ": " + angielskiT[1];
                l3.Text = uczniowie[2] + ": " + angielskiT[2];
                l4.Text = uczniowie[3] + ": " + angielskiT[3];
                l5.Text = uczniowie[4] + ": " + angielskiT[4];
                l6.Text = uczniowie[5] + ": " + angielskiT[5];
                l7.Text = uczniowie[6] + ": " + angielskiT[6];
                l8.Text = uczniowie[7] + ": " + angielskiT[7];
                l9.Text = uczniowie[8] + ": " + angielskiT[8];

            }

            else if (fizyka.IsSelected == true)
            {
                l0.Text = "Oceny klasy 3pTP z fizyki";
                l1.Text = uczniowie[0] + ": " + fizykaT[0];
                l2.Text = uczniowie[1] + ": " + fizykaT[1];
                l3.Text = uczniowie[2] + ": " + fizykaT[2];
                l4.Text = uczniowie[3] + ": " + fizykaT[3];
                l5.Text = uczniowie[4] + ": " + fizykaT[4];
                l6.Text = uczniowie[5] + ": " + fizykaT[5];
                l7.Text = uczniowie[6] + ": " + fizykaT[6];
                l8.Text = uczniowie[7] + ": " + fizykaT[7];
                l9.Text = uczniowie[8] + ": " + fizykaT[8];

            }

            else if (historia.IsSelected == true)
            {
                l0.Text = "Oceny klasy 3pTP z historii";
                l1.Text = uczniowie[0] + ": " + historiaT[0];
                l2.Text = uczniowie[1] + ": " + historiaT[1];
                l3.Text = uczniowie[2] + ": " + historiaT[2];
                l4.Text = uczniowie[3] + ": " + historiaT[3];
                l5.Text = uczniowie[4] + ": " + historiaT[4];
                l6.Text = uczniowie[5] + ": " + historiaT[5];
                l7.Text = uczniowie[6] + ": " + historiaT[6];
                l8.Text = uczniowie[7] + ": " + historiaT[7];
                l9.Text = uczniowie[8] + ": " + historiaT[8];

            }
        }

        private void ocenyUczen_Click(object sender, RoutedEventArgs e)
        {
            Random random = new Random();
            int polski = random.Next(1, 6);
            int matematyka = random.Next(1, 6);
            int angielski = random.Next(1, 6);
            int fizyka = random.Next(1, 6);
            int historia = random.Next(1, 6);
            l0.Text = (string)uczniowie.SelectionBoxItem;
            l1.Text = "";
            l2.Text = "";
            l3.Text = "";
            l4.Text = "";
            l5.Text = "";
            l6.Text = "";
            l7.Text = "";
            l8.Text = "";
            l9.Text = "";

            ;
            l2.Text = "Język polski: "+polski;
            l3.Text = "Matematyka: "+matematyka;
            l4.Text = "Język Angielski: "+angielski ;
            l5.Text = "Fizyka: "+fizyka;
            l6.Text = "Historia: "+historia;
        }
    }
}
