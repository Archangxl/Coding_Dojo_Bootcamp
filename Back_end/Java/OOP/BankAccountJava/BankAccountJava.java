
import java.util.Random;

public class BankAccountJava {
    private double checkingBalance;
    private double savingBalance;
    private long accountNumber;
    private static double totalCurrency;
    private static int numberOfAccounts;

    public BankAccountJava(Boolean checkingBalance) {
        if (checkingBalance == true) {
            getAccountNumber();
            numberOfAccounts++;
        } else {
            System.out.println("\nError");
        }
    }
    public BankAccountJava(boolean checking, boolean saving) {

        if (checking == true && saving == true) {
            getAccountNumber();
            numberOfAccounts+=2;

        } else if (checking == false && saving == true) {
            getAccountNumber();
            numberOfAccounts++;
        } else {
            System.out.println("\nError");
        }
    }
    
    private void getAccountNumber() {
        Random random = new Random();
        accountNumber = random.nextLong(100000000);

        System.out.printf("\nYour account number is %s", this.accountNumber);
    }

    public void getCheckingBalance() {
        System.out.printf("\nChecking account: $%s", this.checkingBalance);
    }
    public void getSavingBalance() {;
        System.out.printf("\nSaving account: $%s", this.savingBalance);
    }
    public void deposit(String account, double depositAmount) {
        if (account == "Checking") {
            this.checkingBalance += depositAmount;
            totalCurrency += this.checkingBalance;
        } else if(account == "Saving") {
            this.savingBalance += depositAmount;
            totalCurrency += this.savingBalance;
        } else {
            System.out.println("\nError");
        }
    }
    public void withdraw(String account, double withdrawAmount) {
        if (account == "Checking") {
            if (this.checkingBalance - withdrawAmount > 0) {
                this.checkingBalance -= withdrawAmount;
                totalCurrency -= withdrawAmount;
            } else {
                System.out.println("\nYour account has insufficent funds");
            }
        } else if(account == "Saving") {
            if (this.savingBalance - withdrawAmount > 0) {
                this.savingBalance -= withdrawAmount;
                totalCurrency -= withdrawAmount;
            } else {
                System.out.println("\nYour account has insufficent funds");
            }
        }
    }
    
    public void displayBalance() {
        System.out.printf("\nTotal balance: $%s", totalCurrency);
    }
}