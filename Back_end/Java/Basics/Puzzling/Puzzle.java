import java.util.Random;
import java.util.ArrayList;
import java.util.Arrays;

public class Puzzle {
    
    public ArrayList<Integer> getTenRolls() {
        Random random = new Random();		
        /* 
		//It generates boolean value
		System.out.println(random.nextBoolean());		
		//It generates double value
		System.out.println(random.nextDouble());		
		//It generates float value
		System.out.println(random.nextFloat());		
		//It generates int value
		System.out.println(random.nextInt());		
        */
		//It generates int value within specific limit
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
        ArrayList<String> letterArray = new ArrayList<String>();
        for (int i = 0; i < 8; i++) {
            int num = random.nextInt(26);
            letterArray.add(letters[num]);
        }
        return letters;
    }

}
