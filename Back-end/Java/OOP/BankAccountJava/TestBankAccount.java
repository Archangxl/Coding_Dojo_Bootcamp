public class TestBankAccount {
    public static void main(String[] args) {
        BankAccountJava jim = new BankAccountJava(true, true);

        jim.deposit("Checking", 100);
        jim.withdraw("Checking", 50);
        jim.getCheckingBalance();
        
        jim.deposit("Saving", 1000);
        jim.withdraw("Saving", 100);
        jim.getSavingBalance();
        
        jim.displayBalance();


    }
}