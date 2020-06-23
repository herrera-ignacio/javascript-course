(function() {
	// x is not defined here
	function test() {
		console.log(`x:${x} from test()`) // undefined: x is declared but not unitialized
		var x = 0; // we can define our own variable x inside this scope
		// As we declared our own var x here, we no longer have access to the outside x
		if (false) { var y = 0; }
		console.log(`y:${y} from test()`) // undefined: y is declared but not initialized
	}
	// neither x or y is not defined here	
	{
		var x = 1
	}
	// x is defined out here
	console.log(`x:${x} from main scope`) 
	test(); // test will have access to this function-level x
	console.log(`x:${x} from main scope`)
})()