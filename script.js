function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let str1=s1.toUpperCase();
	let str2=s2.toUpperCase();

	const result=str1.indexOf(str2);
	
	return result;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
