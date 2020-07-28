function timeoutPromise(interval) {
return new Promise((resolve, reject) => {
	setTimeout(function(){
	resolve("done");
	}, interval);
});
};

async function timeTest() {
	const res = await Promise.all([
		timeoutPromise(3000),
		timeoutPromise(3000),
		timeoutPromise(3000)
	]);
	return res
}

let startTime = Date.now();
timeTest().then(() => {
	let finishTime = Date.now();
	let timeTaken = finishTime - startTime;
	console.log("Time taken in milliseconds: " + timeTaken);
});