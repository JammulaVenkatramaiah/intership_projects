
import java.util.Scanner;

public class foreachloop {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int[] arr = new int[n];
        System.out.println("Enter array elements");
        for (int i = 0; i < n; i++) {
            arr[i] = scan.nextInt();
        }
        int sum = 0;
        System.out.println("Printing array elements using for-each loop");
        for (int i : arr) {
            System.out.print(i+"\t");
            sum+=i;
        }
        System.out.println("\nSum of array elements: " + sum);
    }
}
