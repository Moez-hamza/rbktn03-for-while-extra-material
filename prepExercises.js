// Exercises
// Basic Requirments
// 1.Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:
//  function sum(n) { 
//  // TODO: your code here 
//  } 
//  sum(3); // => 6 
//  sum(4); // => 10 
//  sum(5); // => 15
function sum(n) {
	var total = 0 
	while (n>0) {
		total+=n
		n--
	}
	return total
}



// 2.Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1, e.g.:
//  function factorial(n) { 
//  // TODO: your code here 
//  } 
//  factorial(3); // => 6 
//  factorial(4); // => 24 
//  factorial(5); // => 120
function factorial(n) {
	var total=1 
	while (n>1) {
		total*=n
		n--
	}
	return total
}



// 3.Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string s should be repeated, e.g.
//  function repeatString(str, count) { 
//  // TODO: your code here 
//  } 
//  repeatString('dog', 0); // => '' 
//  repeatString('dog', 1); // => 'dog' 
//  repeatString('dog', 2); // => 'dogdog' 
//  repeatString('dog', 3); // => 'dogdogdog'
// Your task is to implement the repeatString function using a while loop.

function repeatString(str,n) {
	var total=''
	while (n>0) {
		total+=str
		n--
	}
	return total
}



// More Practice
// 1.Go back through any of the exercises done in the introduction to repetition and refactor them to use the while loop.


// 2.Fencepost Loop: Use a while loop to build a single string with the numbers 1 through n, separated by commas. Have it return the new string. How can we make sure not to have a comma after the last number?
//  function counting(n) { 
//        // TODO: your code here 
//  } 
//  counting(5); // => '1, 2, 3, 4, 5' 
//  counting(1); // => '1' 
//  counting(3); // => '1, 2, 3'
function counting(n) {
	var count=n 
	while (n>1) {
		n--
		count=n+', '+count
	}
	return count 
}



// 3.Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5:
//  welcome 1 
//  welcome 2, meet 1 
//  welcome 3, meet 1 and 2 
//  welcome 4, meet 1, 2 and 3 
//  welcome 5, meet 1, 2, 3 and 4
// HINT: search for which symbol that creates a line break in a string.
function meetAndGreet (n){
	var result=''
	while(n>0){
		if (n===1){
			result='Welcome '+n+'\n'+result
		}
		if (n===2){
			result='Welcome '+n+', '+'meet '+(n-1)+'\n'+result
		} 	
		if (n===3){
			result='Welcome '+n+', '+'meet '+(n-2)+' and '+(n-1)+'\n'+result
		}	
		if (n>3){			
			result='Welcome '+n+', '+'meet '+counting(n-2) +' and '+(n-1) +'\n'+result
		}
		n--
	}
	return result
}
// or more stylish

function meetAndGreet (n){
	var result=''
	while(n>0){
		switch (n){
			case 1:
			result='Welcome '+n+'\n'+result;
			break;
			case 2:
			result='Welcome '+n+', '+'meet '+(n-1)+'\n'+result;
		 	break;
			case 3:
			result='Welcome '+n+', '+'meet '+(n-2)+' and '+(n-1)+'\n'+result;
			break;
			default:			
			result='Welcome '+n+', '+'meet '+counting(n-2) +' and '+(n-1) +'\n'+result;
		}
		n--
	}
	return result
}


// 4.Reverse String: Write a function that takes a string as an input and returns the reverse of that string.
 function reverseString(str) { 
     var result=''
     var i=str.length-1
     while (i>=0) {
     	result+=str[i]
     	i--
     }
     return result
} 
//  reverseString('hello'); // => 'olleh' 
//  reverseString('1#*$'); // => '$*#1'
// Do this using a while loop.



// 5.Write a javascript program to print all Prime numbers from 1 to n.




// 6.Write a JavaScript for loop that will iterate from 0 to n. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output : 
//  '0 is even' 
//  '1 is odd' 
//  '2 is even'




// 7.Write a javascript program to enter any number and print all factors of the number.





// Advanced
// 1. Write a javascript function to find the sum of first and last digit of any number, without convert it to string
//  firstAndLast(456) ==> 4 + 6 = 11 
//  firstAndLast(123) ==> 1 + 3 = 4 
//  firstAndLast(197) ==> 1 + 7 = 8




// 2.Write a javascript program to draw the stars
//      * 
//     *** 
//    ***** 
//   ******* 
//  ********* 
//   ******* 
//    ***** 
//     *** 
//      *



// 3. Write a program that reads a character for playing the game of Rock-Paper-Scissors. If the character entered by the user is not one of 'P', 'R' or 'S', the program keeps on prompting the user to enter a new character.