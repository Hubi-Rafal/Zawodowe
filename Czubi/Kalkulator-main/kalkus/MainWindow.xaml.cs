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

namespace kalkus
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
        private void _0_Click(object sender, RoutedEventArgs e)
        {
            textbox.Text += "0";
        }
        private void _1_Click(object sender, RoutedEventArgs e)
        {
            textbox.Text += "1";
        }

        private void _2_Click(object sender, RoutedEventArgs e)
        {
            textbox.Text += "2";
        }
        private void _3_Click(object sender, RoutedEventArgs e)
        {
            textbox.Text += "3";
        }
        private void _4_Click(object sender, RoutedEventArgs e)
        {
            textbox.Text += "4";
        }
        private void _5_Click(object sender, RoutedEventArgs e)
        {
            textbox.Text += "5";
        }
        private void _6_Click(object sender, RoutedEventArgs e)
        {
            textbox.Text += "6";
        }
        private void _7_Click(object sender, RoutedEventArgs e)
        {
            textbox.Text += "7";
        }
        private void _8_Click(object sender, RoutedEventArgs e)
        {
            textbox.Text += "8";
        }
        private void _9_Click(object sender, RoutedEventArgs e)
        {
            textbox.Text += "9";
        }
        int dzialanie { get; set; }
        bool liczba { get; set; }
        float liczba1 { get; set; }
        float liczba2 { get; set; }
        float wynik1 { get; set; }
        private void plus_Click(object sender, RoutedEventArgs e)
        {
            
            textbox.Text += "+";
            
            dzialanie = 0;
            
        }

        private void minus_Click(object sender, RoutedEventArgs e)
        {
            
            textbox.Text += "-";
         
            dzialanie = 1;
           
        }

        private void dziel_Click(object sender, RoutedEventArgs e)
        {
            
            textbox.Text += "/";
            dzialanie = 2;
            
        }

        private void razy_Click(object sender, RoutedEventArgs e)
        {
            
            textbox.Text += "*";
            dzialanie = 3;
            
            
        }
        private void przecinek_click(object sender, RoutedEventArgs e)
        {
            textbox.Text += ".";
        }
        private void clear_click(object sender, RoutedEventArgs e)
        {
            textbox.Text = "";
            liczba = false;
            liczba1 = 1;
            liczba2 = 1;
            wynik1 = 0;
            
        }
        private void wynik_Click(object sender, RoutedEventArgs e)
        {
            
            switch(dzialanie)
            {
                case 0:

                    if(liczba == false)
                    {
                        liczba = true;
                        string[] tablica = textbox.Text.Split('+');
                        liczba1 = Int32.Parse(tablica[0]);
                        liczba2 = Int32.Parse(tablica[1]);
                        wynik1 = liczba1 + liczba2;
                        textbox.Text = wynik1.ToString();
                    }
                    else
                    {
                        wynik1 += liczba2;
                        
                        textbox.Text = wynik1.ToString();
                    }
                    
                    break;
                case 1:
                    if (liczba == false)
                    {
                        liczba = true;
                        string[] tablica = textbox.Text.Split('-');
                        liczba1 = Int32.Parse(tablica[0]);
                        liczba2 = Int32.Parse(tablica[1]);
                        wynik1 = liczba1 - liczba2;
                        textbox.Text = wynik1.ToString();
                    }
                    else
                    {
                        wynik1 -= liczba2;

                        textbox.Text = wynik1.ToString();
                    }

                    break;
                case 2:

                    if (liczba == false)
                    {
                        liczba = true;
                        string[] tablica = textbox.Text.Split('/');
                        liczba1 = Int32.Parse(tablica[0]);
                        liczba2 = Int32.Parse(tablica[1]);
                        if (liczba2 == 0)
                        {
                            textbox.Text = "Nie można dzielić przez zero";
                        }
                        else
                        {
                            wynik1 = liczba1 / liczba2;

                            textbox.Text = wynik1.ToString();
                        }
                    }
                    else
                    {
                        
                        
                            wynik1 /= liczba2;

                            textbox.Text = wynik1.ToString();
                       
                        
                    }

                    break;
                case 3:
                    if (liczba == false)
                    {
                        liczba = true;
                        string[] tablica = textbox.Text.Split('*');
                        liczba1 = Int32.Parse(tablica[0]);
                        liczba2 = Int32.Parse(tablica[1]);
                        wynik1 = liczba1 * liczba2;
                        textbox.Text = wynik1.ToString();
                    }
                    else
                    {
                        wynik1 *=  liczba2;

                        textbox.Text = wynik1.ToString();
                    }

                    break;

            }


        }

    }
}
