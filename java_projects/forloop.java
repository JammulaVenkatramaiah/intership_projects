
import java.util.Scanner;

public class forloop {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        System.out.println("Printing numbers from 1 to " + n);
        for (int i = 1; i < n+1; i++) {
            System.out.print(i+"\t");
        }
    }   
}
