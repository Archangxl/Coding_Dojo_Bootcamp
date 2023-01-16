import java.util.ArrayList;

class BaristaOrders {
    private String name;
    private boolean ready;
    private ArrayList<BaristaItems> items;

    public void setOrder() {
        this.name = "Guest";
        this.items = new ArrayList<BaristaItems>();
    }

    public void setOrder(String name) {
        this.name = name;
        this.items = new ArrayList<BaristaItems>();
    }

    public String getOrderName(){
        return this.name;
    }

    public boolean getOrderReady() {
        return this.ready;
    }

    public ArrayList<BaristaItems> getItems() {
        return this.items;
    }

    public void getStatusMessage() {
        if (this.ready != true) {
            System.out.println("\nThank you for waiting, Your order will be ready soon!\n");
        } else {
            System.out.println("\nYour order is ready!\n");
        }
    }

    public double getOrderTotal() {
        double total = 0;
        for (int i = 0; i < this.items.size(); i++) {
            BaristaItems item = this.items.get(i);
            total += item.getPrice();
        }
        return total;
    }

    public void getDisplay() {
        System.out.printf("\nCustomer Name: %s", this.name);
        for (int i = 0; i < items.size(); i++) {
            BaristaItems item = items.get(i);
            System.out.printf("\n"+item.getName() + " - "+ item.getPrice());
        }
        System.out.printf("\nTotal: %s", getOrderTotal() + "\n");
    }

    public void setOrderName(String name) {
        this.name = name;
    }

    public void setIsOrderReady(boolean ready) {
        this.ready = ready;
    }

    public void addItem(BaristaItems items) {
        this.items.add(items);
    }

}