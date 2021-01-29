import java.util.regex.Pattern;

public class SampleExample {
	
	 public static void main(String[] args){
	        String s1 ="abdfgc";
	        String s2 = "abc";
	        if(s1.equals(s2)){
	            System.out.println("no tom and jerry are not friends"+ s1 +":"+ s2);
	        }
	        else{
	            
	            String s3 = s1.replace('d',' ');
	            String s4 = s3.replace('f',' ');
	            String s5 = s4.replace('g',' ');
	            String s7 = s5.substring(0, 2);
	            String s8 = s5.substring(5, 6);
	            String s9 = s7.concat(s8);
	            System.out.println("yes tom and jerry are friends " + s9);
	            
	        }
		
	        
	        
	       
	    }

}
