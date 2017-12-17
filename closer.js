//usestrict

function sayHello(name){
	var a = "greetWord";
	b = "helloWorld"; //b is global variable

	function abc(){
		return a + " " + name + ","+b; 
	}//inner function
	return abc();
}//outer function
console.log(sayHello("rakesh"));