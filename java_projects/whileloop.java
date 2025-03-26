
import java.util.Scanner;

public class whileloop {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int i = 1;
        int n = scan.nextInt();
        System.out.println("Printing numbers from 1 to " + n);
        while (i < n+1) {
            System.out.print(i+"\t");
            i++;
        }
    }
}
