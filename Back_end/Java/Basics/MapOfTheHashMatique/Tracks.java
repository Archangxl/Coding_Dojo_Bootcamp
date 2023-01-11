import java.util.Set;
import java.util.HashMap;

public class Tracks {
    public static void main(String[] args) {
        HashMap<String, String> userMap = new HashMap<String, String>();
        userMap.put("SongOne", "Singing about song one");
        userMap.put("SongTwo", "Singing about song two");
        userMap.put("SongThree", "Singing about song three");
        userMap.put("SongFour", "Singing about song four");

        String songOne = userMap.get("SongOne");
        System.out.println(songOne);

        Set<String> keys = userMap.keySet();
        for (String key : keys) {
            System.out.printf(" %s : %s \n", key, userMap.get(key));
        }
    }
}
