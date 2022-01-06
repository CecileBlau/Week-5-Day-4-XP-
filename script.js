// Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

fetch("https://www.swapi.tech/api/people/1")
.then(response => response.json())
.then(console.log);

async function myFunction(){
	let result = await fetch("https://www.swapi.tech/api/people/1")
	let parsed = await result.json()
	return parsed 
}

console.log(myFunction())




// Exercise 2: Analyze
// Instructions
function resolveAfter2Seconds() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolved');
		}, 2000);
	});
}

async function asyncCall() {
	console.log('calling');
	let result = await resolveAfter2Seconds();
	console.log(result);
}

asyncCall();
//Analyze the code provided above what will be the outcome?

// first i see calling and then i see result (after 2 seconds)