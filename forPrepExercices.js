// Basic Requirments
// 0.Try to write all of the exercises using both the for loop and while loop.

// 1.Write a function sum that computes the sum of the numbers in an array.
function sum(arr) {
	var result =0
	var i=0
	while (i<arr.length){
		result+=arr[i]
		i++
	}
	return result
}
// or 
function sum(arr){
	var result=0
	for (var i=0; i<arr.length;i++){
		result+=arr[i]
	}
	return result
}

// 2.Write a function max that accepts an array of numbers and returns the largest number in the array.
function max(arr) {
	var i=0
	var result=0
	while(i<arr.length){
		if (arr[i]>result){
			result=arr[i]	
		}	
		i++
	}
	return result
}
//or
function max(arr){
	var result=0
	for (var i=0; i<arr.length;i++){
		if (arr[i]>result){
			result=arr[i]
		}
	}	
	return result
}
// 3.Try the following at a console:

//  'the quick brown fox jumped over the lazy dog'.split(' ');
//  'Hello, world!'.split('')
//  '1,2,3,4,5,6'.split(',')
// What is returned by split (You can read more about it here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) and how does it work?
//  Use split to write a function longestWord that takes a string as an argument and returns the longest word.
function longestWord(string){
	var arr=string.split(' ')
	var i=0
	var result=''
	while (i<arr.length){
		if (arr[i].length>result.length){
			result=arr[i]
		
		}
		i++
	}
	return result
}
function longestWord(string) {
	var arr=string.split(' ')
	var result=''
	for (var i=0; i<arr.length;i++){
		if (arr[i].length>result.length){
			result=arr[i]
		}	
	}
	return result
}
// 4.Write a function remove that accepts an array and an element, and returns an array with all ocurrences of element removed.

function remove(array, element) {
  var i=0 
 	while (i<array.length){
  		if (array[i]===element){
  		array.splice(i,1)
  		}
  		i++
	}
	return array
}
// or 
function remove(array, element) {
	for (var i=0; i<array.length;i++){
		if (array[i]===element){
  		array.splice(i,1)
  		}
	}
	return array
}
//  remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]
// 5.Write a function evens that accepts an array as an argument, and returns an array consisting of all of the even numbers in that array.
function evens(array){
	 var i=0 
	 var result=[]
 	while (i<array.length){
  		if (array[i]%2===0){
  		result.push(array[i])
  		}
  		i++
	}
	return result
}

//or 
function evens(array){
	var result=[]
	for (var i=0; i<array.length;i++){
		if (array[i]%2===0){
  		result.push(array[i])
  		} 
	}
	return result
}


// More Practice
// 1.Write a function called average that takes an array of numbers as a parameter and returns the average of those numbers.

// 2. Write a function called min that finds the smallest number in an array of numbers.

// 3.Write a function shortestWord that works like longestWord, but returns the shortest word instead.

// 4.Write a function countChar that takes two arguments: any string, and a character (string of one letter), and returns the number of times that the character occurs in the string.

// 5.Write a function evenLengthWords that takes an array of strings as an argument, and returns an array of just the words that have an even length.

// Advanced
// 1.Read about the join method on MDN and use it to implement a function that accepts a string as an argument and returns that string reversed

// 2.Write a function keep that 'keeps' certain elements in an array. The function will need to take two arguments, an array, and something else -- the second argument will be what is used to determine which elements to keep.

// You should be able to use this function to write evens, evenLengthWords, a hypothetical odds function, or oddLengthWords without changing the keep function.
