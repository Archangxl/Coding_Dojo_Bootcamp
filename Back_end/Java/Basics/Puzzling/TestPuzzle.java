import java.util.ArrayList;
public class TestPuzzle {

    public static void main(String[] args) {

        Puzzle generator = new Puzzle();
        ArrayList<Integer> randomRolls = generator.getTenRolls();
        System.out.println(randomRolls);

        String randomLetter = generator.getRandomLetter();
        System.out.println(randomLetter);

        String randomPassword = generator.getRandomPassword();
        System.out.println(randomPassword);

        ArrayList<String> randomPasswordArray = generator.getRandomPasswordSet(2);
        System.out.println(randomPasswordArray);

        String[] array = {"a", "b", "c"};
        ArrayList<String> shuffleArray = generator.shuffleArray(array);
        System.out.println(shuffleArray);
    }
}