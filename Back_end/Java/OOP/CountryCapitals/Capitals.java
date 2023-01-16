
public class Capitals {
    public void getCapital(String country) {
        System.out.println("country");
        System.out.println("What is the Capitals of " + country + "?");

        switch(country) {
            case "Brazil":
                System.out.println("The capital of Brazil is Brasilia.");
                break;

            default:
                System.out.println("I don't know the capital of" + country + "?");
                break;
        }
        
    }
}