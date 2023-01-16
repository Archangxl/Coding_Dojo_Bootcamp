

public class BaristaTest {
    public static void main(String[] args) {

        BaristaItems dripCoffe = new BaristaItems();
        dripCoffe.setItem("drip coffee", 2.25);
        BaristaItems cappuccino = new BaristaItems();
        cappuccino.setItem("cappuccion", 3.00);
        BaristaItems latte = new BaristaItems();
        latte.setItem("latte", 3.50);
        BaristaItems americano = new BaristaItems();
        americano.setItem("americano", 3.25);


        BaristaOrders order1 = new BaristaOrders();
        order1.setOrder();
        order1.addItem(americano);
        order1.addItem(latte);
        order1.getDisplay();
        order1.setIsOrderReady(true);
        order1.getStatusMessage();
    
        BaristaOrders order2 = new BaristaOrders();
        order2.setOrder();
        order2.addItem(americano);
        order2.addItem(dripCoffe);
        order2.getDisplay();
        order2.setIsOrderReady(true);
        order2.getStatusMessage();

        BaristaOrders order3 = new BaristaOrders();
        order3.setOrder("John");
        order3.addItem(americano);
        order3.addItem(americano);
        order3.getDisplay();
        order3.setIsOrderReady(false);
        order3.getStatusMessage();

        BaristaOrders order4 = new BaristaOrders();
        order4.setOrder("Bill");
        order4.addItem(americano);
        order4.addItem(cappuccino);
        order4.getDisplay();
        order4.setIsOrderReady(false);
        order4.getStatusMessage();

        BaristaOrders order5 = new BaristaOrders();
        order5.setOrder("Jimmy");
        order5.addItem(americano);
        order5.addItem(latte);
        order5.getDisplay();
        order5.setIsOrderReady(false);
        order5.getStatusMessage();
        


    }
}
