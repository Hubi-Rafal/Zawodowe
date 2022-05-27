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

namespace wpf_test_monitora
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

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            if (rgb_test.Visibility == Visibility.Visible)
            {

                rgb_test.Visibility = Visibility.Hidden;

            }
            else
            {
                grid_test.Visibility = Visibility.Hidden;
                gray_test.Visibility = Visibility.Hidden;
                Red.Visibility = Visibility.Hidden;
                Green.Visibility = Visibility.Hidden;
                Blue.Visibility = Visibility.Hidden;
                rgb_test.Visibility = Visibility.Visible;
            }
        }



        private void grid_Click(object sender, RoutedEventArgs e)
        {
            if (grid_test.Visibility == Visibility.Visible)
            {

                grid_test.Visibility = Visibility.Hidden;

            }
            else
            {
                rgb_test.Visibility = Visibility.Hidden;
                gray_test.Visibility = Visibility.Hidden;
                Red.Visibility = Visibility.Hidden;
                Green.Visibility = Visibility.Hidden;
                Blue.Visibility = Visibility.Hidden;
                grid_test.Visibility = Visibility.Visible;
            }
        }

        private void gray_Click(object sender, RoutedEventArgs e)
        {
            if (gray_test.Visibility == Visibility.Visible)
            {

                gray_test.Visibility = Visibility.Hidden;

            }
            else
            {
                rgb_test.Visibility = Visibility.Hidden;
                grid_test.Visibility = Visibility.Hidden;
                Red.Visibility = Visibility.Hidden;
                Green.Visibility = Visibility.Hidden;
                Blue.Visibility = Visibility.Hidden;
                gray_test.Visibility = Visibility.Visible;
            }
        }


        private void Red_Click(object sender, RoutedEventArgs e)
        {
            if (Red.Visibility == Visibility.Visible)
            {

                Red.Visibility = Visibility.Hidden;

            }
            else
            {
                rgb_test.Visibility = Visibility.Hidden;
                grid_test.Visibility = Visibility.Hidden;
                gray_test.Visibility = Visibility.Hidden;
                Red.Visibility = Visibility.Visible;
            }
        }
        private void Green_Click(object sender, RoutedEventArgs e)
        {
            if (Green.Visibility == Visibility.Visible)
            {

                Green.Visibility = Visibility.Hidden;

            }
            else
            {
                rgb_test.Visibility = Visibility.Hidden;
                grid_test.Visibility = Visibility.Hidden;
                gray_test.Visibility = Visibility.Hidden;
                Green.Visibility = Visibility.Visible;
            }
        }
        private void Blue_Click(object sender, RoutedEventArgs e)
        {
            if (Blue.Visibility == Visibility.Visible)
            {

                Blue.Visibility = Visibility.Hidden;

            }
            else
            {
                rgb_test.Visibility = Visibility.Hidden;
                grid_test.Visibility = Visibility.Hidden;
                gray_test.Visibility = Visibility.Hidden;
                Blue.Visibility = Visibility.Visible;
            }
        }
    }
}
