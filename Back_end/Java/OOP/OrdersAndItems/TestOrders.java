import java.util.ArrayList;

public class TestOrders {
    public static void main(String[] args) {

        Items item1 = new Items();
        item1.name = "mocha";
        item1.price = 3.25;
        Items item2 = new Items();
        item2.name = "latte";
        item2.price = 3.25;
        Items item3 = new Items();
        item3.name = "drip coffee";
        item3.price = 1.50;
        Items item4 = new Items();
        item4.name = "cappuccino";
        item4.price = 2.50;

        Orders order1 = new Orders();
        order1.name = "Cinduri";
        order1.ready = true;
        Orders order2 = new Orders();
        order2.name = "Jimmy";
        
        order2.items.add(item1);
        order2.total += item1.price;
        order2.ready = true;
        Orders order3 = new Orders();
        order3.name = "Noah";
        order3.items.add(item4);
        order3.total += item4.price;
        Orders order4 = new Orders();
        order4.name = "Sam";
        order4.items.add(item2);
        order4.total += item4.price;
        order4.items.add(item2);
        order4.items.add(item2);
        order4.total += item2.price *2;

        System.out.println(order1);
        System.out.println(item1);
    
        // Menu items
    
        // Order variables -- order1, order2 etc.
    
        // Application Simulations
        // Use this example code to test various orders' updates
        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: $%s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);

        System.out.printf("Name: %s\n", order2.name);
        System.out.printf("Total: $%s\n", order2.total);
        System.out.printf("Ready: %s\n", order2.ready);
        
        System.out.printf("Name: %s\n", order3.name);
        System.out.printf("Total: $%s\n", order3.total);
        System.out.printf("Ready: %s\n", order3.ready);

        System.out.printf("Name: %s\n", order4.name);
        System.out.printf("Total: $%s\n", order4.total);
        System.out.printf("Ready: %s\n", order4.ready);
    }
}
