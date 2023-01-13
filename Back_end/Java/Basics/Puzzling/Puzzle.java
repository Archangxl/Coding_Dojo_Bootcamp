import java.util.Random;
import java.util.ArrayList;

public class Puzzle {
    
    public ArrayList<Integer> getTenRolls() {
        Random random = new Random();		
        ArrayList<Integer> array = new ArrayList<Integer>();
        for (int i = 0; i < 10; i++) {
            int num = random.nextInt(20);
            array.add(num);
        }
        return array;
    }

    public String getRandomLetter() {
        Random random = new Random();
        String[] letters = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"};
        String letter = "";
        int num = random.nextInt(26);
        letter += letters[num];
        return letter;
    }

    public String getRandomPassword() {
        Random random = new Random();
        String[] letters = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"};
        String password = "";
        for (int i = 0; i < 8; i++) {
            int num = random.nextInt(26);
            password += letters[num];
        }
        return password;
    }

    public ArrayList<String> getRandomPasswordSet(int length) {
        Random random = new Random();
        String[] letters = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"};
        ArrayList<String> array = new ArrayList<String>();
        for(int j = 0; j < length; j++) {
            String password = "";
            for (int i = 0; i < 8; i++) {
                int num = random.nextInt(26);
                password += letters[num];
            }
            array.add(password);
        }
        return array;
    }

    public ArrayList<String> shuffleArray(String[] array) {
        Random random = new Random();
        for (int i = 0; i < array.length; i++) {
            int num = random.nextInt(array.length);
            for (int j = 0; j < 1; j++) {
                int num2 = random.nextInt(array.length);
                String temp = array[num];
                array[num] = array[num2];
                array[num2] = temp;
            }
        }
        ArrayList<String> newArray = new ArrayList<String>();
        for(int i = 0; i < array.length; i++) {
            newArray.add(array[i]);
        }
        return newArray;
    }

}
