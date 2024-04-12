// import java.util.*;
class check {
    check() {
        System.out.println("inside check constructor");
    }
    void random() {
        System.out.println("inside random");
    }
    int a = 81;
}

class Animal {
    void animalSound() {
        System.out.println("Animal is SLEEPING");
        // System.out.println(super.a);
    }
    int Animal1=10;
}

class Dog extends Animal {
    // super.animalSound();
    void animalSound() {
    
        System.out.println("Dog is BARKING");
        // System.out.println(super.a);
    }
    
    // System.out.println(super.Animal1);
}

class test1 {
    public static void main(String args[]) {
        // check oa=new check();
        // oa.random();
        // check();
        Dog a1 = new Dog();
        a1.animalSound();
        // System.out.println(a);
    }
}