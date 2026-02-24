function firstNonRepeatedChar(str) {
 // Write your code here
	let count = 0
for(let i = 0 ; i < str.length ; i++){
	let char = str[i]
	console.log(char)
	
	for(let j = 0 ; j < str.length ; j++){
		if(char === str[j]){
			count++
		}
	}

	if(count === 1){
		return char;
	}else{
		count = 0;
	}
}
	return null;
}

// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
