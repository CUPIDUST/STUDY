import java.util.*;

class delete {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("ENTER THE DESIRED NUMBER");
        int num =sc.nextInt();
        for (int i = 1; i <= 20; i++) {
            System.out.println(num + " * " + i + " = " + num * i);
        }
    }
}