import java.util.ArrayList;
import java.util.Collections;

public class MainClass {
	public static void main(String args[]) {
		
		System.out.println("this is output");
		
		ArrayList<String> l = new ArrayList<String>();
		l.add("sai");
		l.add("abhi");
		l.add("rahul");
		l.add("teja");
		System.out.println(l);
		Collections.sort(l,new myComparator());
		
		System.out.println(l);
		System.out.println(Collections.binarySearch(l, "teja", new myComparator()));
		
	}
}
