
import java.util.ArrayList;

public class CoffeeKiosk {
    private ArrayList<CD64items> menu;
    private ArrayList<CD64orders> orders;

    public CoffeeKiosk() {
        menu = new ArrayList<CD64items>();
        orders = new ArrayList<CD64orders>();
    }

    public void addMenuItem(String name, double price) {
        CD64items item = new CD64items(name, price);
        this.menu.add(item);
        item.setIndex(this.menu.size() - 1);
    }

    public void displayMenu() {
        for (CD64items item : menu) {
            System.out.printf("\n%s %s -- $%.2f", item.getIndex(), item.getName(), item.getPrice());
        }
    }

    public void newOrder() {
        System.out.println("\nPlease enter customer name for new order!");
        String name = System.console().readLine();

        CD64orders order = new CD64orders(name);
        displayMenu();

        System.out.println("\nPlease enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();
        while(!itemNumber.equals("q")) {
            order.addItem(menu.get(Integer.parseInt(itemNumber)));

            System.out.println("\nPlease enter a menu item index or q to quit:");
            itemNumber = System.console().readLine();
        }
        
        order.Display();
        
    }

}
