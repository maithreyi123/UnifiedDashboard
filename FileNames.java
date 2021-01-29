import java.io.File;
import java.util.*;

public class FileNames {
	
	public static void main(String[] args) {
		
	
	File f = new File("C:\\Users\\lneduri\\Documents\\Names1.txt");
	File f2 = new File("C:\\Users\\lneduri\\Documents\\data.txt");
	int count =0;
	try {
		
	String[] s = f.list();
	String[] s4 = f2.list();
	  for( String s1 : s) {
		File f3 = new File(f,s1);
		if(f3.isFile()) {
			count++;
			System.out.println(s1);
		}
		for(String s2 : s4) {
			  int sp = s2.compareTo(s1);
			  System.out.println("name is present" + sp +"times");  
		  }
	  }
	  
	}catch(NullPointerException e) {
			e.printStackTrace();
		File f3 = new File("C:\\Users\\lneduri\\Document\\Names.txt");
		if(f3.exists()) {
			System.out.println("yes");
		}
			
		}
		
	}
}


