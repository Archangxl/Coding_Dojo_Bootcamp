import java.util.ArrayList;

class CD64orders {
    private String name;
    private boolean ready;
    private ArrayList<CD64items> items;
    
    public CD64orders() {
        this.name = "Guest";
        this.items = new ArrayList<CD64items>();
    }

    public CD64orders(String name) {
        this.name = name;
        this.items = new ArrayList<CD64items>();
    }

    public String getOrderName(){
        return this.name;
    }

    public boolean getOrderReady() {
        return this.ready;
    }

    public ArrayList<CD64items> getItems() {
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
        for (CD64items item : items) {
            total += item.getPrice();
        }
        return total;
    }

    public void Display() {
        System.out.printf("\nCustomer Name: %s", this.name);
        for (CD64items item : items) {
            System.out.printf("\n%d %s -- $%.2f", item.getIndex(), item.getName(), item.getPrice());
        }
        System.out.printf("\nTotal: $%.2f", getOrderTotal());
    }

    public void setOrderName(String name) {
        this.name = name;
    }

    public void setIsOrderReady(boolean ready) {
        this.ready = ready;
    }

    public void addItem(CD64items items) {
        this.items.add(items);
    }

}