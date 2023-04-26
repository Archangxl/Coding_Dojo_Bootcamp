import java.util.Set;
import java.util.HashMap;
public class Maps {
    public static void main(String[] args) {
        HashMap<String, String> userMap = new HashMap<String, String>();
        userMap.put("nninja@codingdojo.com", "Nancy Ninja");
        userMap.put("ssamurai@codingdojo.com", "Sam Samurai");
        userMap.put("wwizard@codingdojo.com", "Walter Wizard");
        // get the keys by using the keySet method
        String name = userMap.get("nninja@codingdojo.com");
        System.out.println(name);

        Set<String> keys = userMap.keySet();
        for(String key : keys) {
            System.out.println(key);
            System.out.println(userMap.get(key));    
            
        }

    }
}

