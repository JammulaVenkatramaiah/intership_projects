public class BasicSyntaxExample {
    public static void main(String[] args) {
        // Variables and Data Types
        int a = 10;
        int b = 20;
        double pi = 3.14;
        char grade = 'A';
        boolean isJavaFun = true;
        String name = "Alice";

        // Arithmetic Operators
        int sum = a + b;
        int difference = a - b;
        double area = pi * a * a;

        // Comparison Operators
        boolean isAGreater = (a > b);

        // Logical Operators
        boolean isPositive = (a > 0 && b > 0);

        // Output
        System.out.println("Sum: " + sum);
        System.out.println("Difference: " + difference);
        System.out.println("Area: " + area);
        System.out.println("Is A greater than B? " + isAGreater);
        System.out.println("Is Java fun? " + isJavaFun);
        System.out.println("Name: " + name);
    }
}