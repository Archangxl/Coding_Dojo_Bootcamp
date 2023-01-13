import java.util.Random;
import java.util.ArrayList;
public class TestPuzzle {

    public static void main(String[] args) {

        Puzzle generator = new Puzzle();
        ArrayList<Integer> randomRolls = generator.getTenRolls();
        System.out.println(randomRolls);

        String randomLetter = generator.getRandomLetter();
        System.out.println(randomLetter);

    }
    
}