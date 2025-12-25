 class A {
     void showA() {
         System.out.println("A Class Method");
     }

     class B extends A {
         void showB() {
             System.out.println("B is class method");
         }

         public static void main(String[] args) {
             A ob1 = new A();
             ob1.showA();
             ob1.showB();
         }
     }
 }
