using System;
using System.Collections.Generic;
using HelloWorld;

namespace HelloWorld
{
    class Program
    {

        public static void fizzBuzz(int n)
        {

            int num = Math.Abs(n);


            if (num < 11)



            {
                if (num >= 0)
                {

                    switch (num)
                    {

                        case 0:
                            Console.WriteLine("describing {0} = ZERO", num);

                            break;

                        case 1:
                            Console.WriteLine("describing {0} = ONE", num);

                            break;

                        case 2:
                            Console.WriteLine("describing {0} = TWO", num);

                            break;
                        case 3:
                            Console.WriteLine("describing {0} = THREE", num);

                            break;
                        case 4:
                            Console.WriteLine("describing {0} = FOUR", num);

                            break;
                        case 5:
                            Console.WriteLine("describing {0} = FIVE", num);

                            break;
                        case 6:
                            Console.WriteLine("describing {0} = SIX", num);

                            break;
                        case 7:
                            Console.WriteLine("describing {7} = SEVEN", num);

                            break;
                        case 8:
                            Console.WriteLine("describing {8} = EIGHT", num);

                            break;
                        case 9:
                            Console.WriteLine("describing {9} = NIN", num);

                            break;
                        case 10:
                            Console.WriteLine("describing {0} = TEN", num);

                            break;

                        default:
                            Console.WriteLine("describing {n} = OTHER");
                            break;




                    }





                }

            }

        }



        class Solution
        {
            public static void Main(string[] args)
            {
                int n = Convert.ToInt32(Console.ReadLine().Trim());

                Program.fizzBuzz(n);


            }
        }
    }
}

