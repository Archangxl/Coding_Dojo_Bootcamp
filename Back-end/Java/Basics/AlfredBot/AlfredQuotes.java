import java.text.SimpleDateFormat;  
import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {

        String greeting = String.format("Hi %s!", name) ;
        
        return greeting ;
    }

    //Ninja Bonus
    public String guestGreeting(String name, String dayPeriod) {

        if (dayPeriod == "morning") {
            return String.format("Good morning %s!", name);
        } else if (dayPeriod == "afternoon"){
            return String.format("Good afternoon %s!", name);
        } else if (dayPeriod == "evening"){
            return String.format("Good evening %s!", name);
        } else {
            return "What time of day is it?";
        }
    }

    //Sensei Bonus
    public String sensiGreeting() {
        Date todaysDate = new Date();
        java.text.SimpleDateFormat formatter = new SimpleDateFormat("k");
        String formatedDate = formatter.format(todaysDate);

        int formatedDateToInt = Integer.parseInt(formatedDate);

        if (formatedDateToInt < 12) {
            return "Good Morning!";
        } else if(formatedDateToInt > 12 && formatedDateToInt < 18) {
            return "Good Afternoon!";
        } else if(formatedDateToInt > 18 && formatedDateToInt < 25) {
            return "Good Evening!";
        } 
        return "Error";
    }

    public String dateAnnouncement() {
        Date todaysDate = new Date();
        return String.format("Good morning, todays date is %s!", todaysDate);
    }

    
    public String respondBeforeAlexis(String conversation) {
        
        String convo = conversation;
            int a = convo.indexOf("Alexis!");
            int b = convo.indexOf("Alfred");
            
            if ( a <= 1 && a >= 0) {
                return  "Right away, sir. She certainly isn't sophisticated enough for that.";
            } else if(b >= 2) {
                return "At your service. As you wish, naturally.";
            } else {
                return "Right. And with that I shall retire.";
            }
            
    }
    
	// NINJA BONUS
	// See the specs to overload the guessGreeting method
    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have learned!
}