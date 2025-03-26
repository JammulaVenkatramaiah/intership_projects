
import java.util.Scanner;

public class Greatestnumberusingswitch {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        int b = scan.nextInt();
        int c = scan.nextInt();
        int greatest = 0;
        greatest = switch (a > b ? (a > c ? 1 : 3) : (b > c ? 2 : 3)) {
            case 1 -> a;
            case 2 -> b;
            case 3 -> c;
            default -> throw new IllegalStateException("Unexpected value");
        };
        System.out.println(greatest + " is the greatest");
    }
}