public class CafeJava {

    public static void main(String[] args) {

        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly.";
        String readyMessage = ", your order is ready!";
        String displayTotalMessage = " Your total is $";

        double mochaPrice = 3.5;
        double dripCoffee = 4.5;
        double latte = 3.5;
        int cappucino = 3;

        String customer1 = "Cinduri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";

        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;

        //Cinduri
        System.out.println(generalGreeting + customer1);

        // Noah
        if (isReadyOrder4 == true){
            System.out.println(generalGreeting + customer4 + readyMessage + displayTotalMessage + cappucino + "!");
        } else {
            System.out.println(generalGreeting + customer4 + pendingMessage);
        }

        // Sam
        if (isReadyOrder2 == true){
            System.out.println(generalGreeting + customer2 + readyMessage + displayTotalMessage + latte * 2 + "!");
        } else {
            System.out.println(generalGreeting + customer2 + pendingMessage);
        }

        //Jimmy
        System.out.println(generalGreeting + customer3 + readyMessage + " We owe you $" + (dripCoffee - latte) + "!");

    }

}