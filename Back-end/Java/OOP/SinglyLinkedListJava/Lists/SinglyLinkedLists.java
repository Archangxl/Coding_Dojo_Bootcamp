
public class SinglyLinkedLists {
    public Node head;
    
    public SinglyLinkedLists() {
        this.head = null;
    }
    
    // SLL methods go here. As a starter, we will show you how to add a node to the list.
    public void add(int value) {
        Node newNode = new Node(value);
        if(head == null) {
            head = newNode;
        } else {
            Node runner = head;
            while(runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }  
    
    public void remove() {
        Node tempNode = new Node(this.head.value, this.head.next);
        if(tempNode.next.next != null) {
            tempNode = tempNode.next;
        } else if(tempNode.next.next == null) {
            tempNode.next.next = null;
        }
    }
    
    public void printValues() {
        while(this.head.next.next != null) {
            if(this.head.next.next == null) {
                continue;
            }
            System.out.println(this.head.value);
            this.head = this.head.next;
        } 
    }
}