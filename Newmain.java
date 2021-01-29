import java.util.ArrayList;
import java.util.Collections;

public class Newmain {
	
	public static void main(String args[]) {
		
		ArrayList<Integer> l = new ArrayList<Integer>();
		l.add(5);
		l.add(10);
		l.add(78);
		l.add(26); 
		Collections.sort(l, new newComparator());
		System.out.println(l);
		System.out.println(Collections.binarySearch(l, 78, new newComparator()));
		Collections.swap(l, 2, 3);
		System.out.println(l);
		
		
		
		
		
		
		
	}

}
