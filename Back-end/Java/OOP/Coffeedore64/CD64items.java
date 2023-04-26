public class CD64items {
    private String name;
    private double price;
    private int index;

    public CD64items(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getName() {
        return this.name;
    }

    public double getPrice() {
        return this.price;
    }

    public void setIndex(int index) {
        this.index = index;
    }
    public int getIndex() {
        return this.index;
    }

}