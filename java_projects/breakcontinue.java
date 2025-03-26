
import java.util.Scanner;

public class breakcontinue {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        System.out.println("Printing  numbers from 1 to " + n+ " and breaking the loop if number is greater than 5");
        for (int i = 1; i < n+1; i++) {
            if (i > 5) {
                break;
            }
            System.out.print(i + "\t");
        }
        System.out.println("\nPrinting odd numbers from 1 to 10 ");
        for (int i = 1; i < n+1; i++) {
            if (i %2== 0) {
                continue;
            }
            System.out.print(i + "\t");
        }
    }
}