
import java.util.Scanner;

public class dowhileloop {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int i = 1;
        int n = scan.nextInt();
        System.out.println("Printing numbers from 1 to " + n);
        do {
            System.out.print(i+"\t");
            i++;
        } while (i < n+1);
    }
}
