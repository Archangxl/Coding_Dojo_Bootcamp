import java.util.ArrayList;
public class CafeUtil {

    public int getStreakGoal( int drinksBought ) {
        int firstWeekDrinksBought = drinksBought;
        int sum = 0;
        for (int weeks = 1; weeks < 11; weeks++) {
            sum+=firstWeekDrinksBought;
            firstWeekDrinksBought++;
        }
        return sum;
    }

    public double getOrderTotal(double[] prices) {
        double sum = 0;
        for (int i = 0; i < prices.length ; i++) {
            sum += prices[i];
        }
        
        return sum;
    }

    public void displayMenu(ArrayList<String> menuItems) {
        
        for (int i = 0; i < menuItems.size(); i++) {
            System.out.format("%d %s\n",i ,menuItems.get(i));
        }

    }

    public void displayMenu(ArrayList<String> menuItems, ArrayList<Double> prices) {
        System.out.println("\n");
        for (int item = 0; item < menuItems.size(); item++) {
            System.out.format("%d %s --- $%.2f\n",item ,menuItems.get(item), prices.get(item));
        }
    }

    public void addCustomer(ArrayList<String> customers) {
        System.out.println("Please enter your name:");
        String userName = System.console().readLine();

        System.out.format("Hello, %s!\n", userName);

        customers.add(userName);
        int line = customers.size() - 1;
        System.out.format("There are %d orders in front of you!\n", line);
        
        System.out.println("\n----- Customer List -----");
        for (int i = 0; i < customers.size(); i++){
            System.out.format("%s\n", customers.get(i));
        }
    }

    public void printPriceChart(String product, double price, int maxQuantity) {

        String statedProduct = String.format("%s", product);
        System.out.println(statedProduct);

        int quantity = 1;
        Double discount = 0.50;
        while (quantity <= maxQuantity) {
            
            if (quantity == 1) {
                System.out.format("%d - $%.2f \n", quantity , price);
            } else {
                System.out.format("%d - $%.2f \n", quantity , price * quantity - discount);
                discount += 0.50;
            }

            quantity++;

        }
    }
    
}
