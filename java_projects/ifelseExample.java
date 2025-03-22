import java.util.Scanner;

public class ifelseExample {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        int b = scan.nextInt();

        if (a > b) {
            System.out.println("A is greater than B");
        } else {
            System.out.println("B is greater than A");
        }
    }
}
