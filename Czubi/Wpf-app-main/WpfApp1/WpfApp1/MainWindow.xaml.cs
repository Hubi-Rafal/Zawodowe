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

namespace WpfApp1
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

        private void Red_Click(object sender, RoutedEventArgs e)
        {
            Tlo.Background = Brushes.Red;
            Label.Foreground = Brushes.Red;
            Label.Text = "Tło w kolorze czerwonym";
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Tlo.Background = Brushes.Green;
            Label.Foreground = Brushes.Green;
            Label.Text = "Tło w kolorze zielonym";
        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            Tlo.Background = Brushes.Blue;
            Label.Foreground = Brushes.Blue;
            Label.Text = "Tło w kolorze niebieskim";
        }

        private void Button_Click_2(object sender, RoutedEventArgs e)
        {
            Random R = new Random();
            int randomowa = R.Next(6);
            if(randomowa == 1)
            {
                Tlo.Background = Brushes.Red;
                Label.Foreground = Brushes.Red;
                Label.Text = "Tło w kolorze czerwonym";
            }
            if (randomowa == 2)
            {
                Tlo.Background = Brushes.Green;
                Label.Foreground = Brushes.Green;
                Label.Text = "Tło w kolorze zielonym";
            }
            if (randomowa == 3)
            {
                Tlo.Background = Brushes.Blue;
                Label.Foreground = Brushes.Blue;
                Label.Text = "Tło w kolorze niebieskim";
            }
            if (randomowa == 4)
            {
                Tlo.Background = Brushes.Yellow;
                Label.Foreground = Brushes.Black;
                Label.Text = "Tło w kolorze Żółtym";
            }
            if (randomowa == 5)
            {
                Tlo.Background = Brushes.Orange;
                Label.Foreground = Brushes.Orange;
                Label.Text = "Tło w kolorze pomarańczowym";
            }
            if (randomowa == 6)
            {
                Tlo.Background = Brushes.Gray;
                Label.Foreground = Brushes.Gray;
                Label.Text = "Tło w kolorze Szarym";
            }
        }

        private void Button_Click_3(object sender, RoutedEventArgs e)
        {
            Tlo.Background = Brushes.White;
            Label.Text = "";
        }

        private void tapeta1_Click(object sender, RoutedEventArgs e)
        {

            this.Background = new ImageBrush(new BitmapImage(new Uri(@"C:\Users\Programowanie\Desktop\xp.png")));
        }

        private void tapeta2_Click(object sender, RoutedEventArgs e)
        {
            this.Background = new ImageBrush(new BitmapImage(new Uri(@"C:\Users\Programowanie\Desktop\10.jpg")));
        }

        private void tapeta3_Click(object sender, RoutedEventArgs e)
        {
            this.Background = new ImageBrush(new BitmapImage(new Uri(@"C:\Users\Programowanie\Desktop\95.png")));
        }

        private void randomtapeta_Click(object sender, RoutedEventArgs e)
        {
            Random R = new Random();
            int randomowa = R.Next(3);
            switch(randomowa)
            {
                case 1:
                    this.Background = new ImageBrush(new BitmapImage(new Uri(@"C:\Users\Programowanie\Desktop\xp.png")));
                    break;
                case 2:
                    this.Background = new ImageBrush(new BitmapImage(new Uri(@"C:\Users\Programowanie\Desktop\10.jpg")));
                    break;
                case 3:
                    this.Background = new ImageBrush(new BitmapImage(new Uri(@"C:\Users\Programowanie\Desktop\95.png")));
                    break;
            }

        }
    }
}
