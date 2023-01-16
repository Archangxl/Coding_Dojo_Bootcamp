import java.util.ArrayList;

class BaristaOrders {
    private String name;
    private boolean ready;
    private ArrayList<BaristaItems> items;

    public void setOrder() {
        this.name = "Guest";
    }

    public void setOrder(String name) {
        this.name = name;
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

    public String getStatusMessage() {
        if (this.ready != true) {
            return "Thank you for waiting, Your order will be ready soon!";
        } else {
            return "Your order is ready!";
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
        System.out.printf("Customer Name: %s", this.name);
        for (int i = 0; i < items.size(); i++) {
            BaristaItems item = items.get(i);
            System.out.printf(item.getName() + " - "+ item.getPrice());
        }
        System.out.printf("Total: %s", getOrderTotal());
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