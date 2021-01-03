// function totalAmountAdjectives(obj) {
// return Object.values(obj).length;
// }
// function totalAmountAdjectives(obj) {
// return Object.keys(obj).length;
// }

// function sayWhat(obj) {
// 	return `${obj[1]} ${obj[2]} ${obj[3]} ${obj[2]}`
// }
//  function sayWhat(obj) {
// 	return obj[1] + " " + obj[2] + " " + obj[3] + " " + obj[2];
// }


// function nSidedShape(n) {
// 	return ['circle', 'semi-circle', 'triangle', 'square', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'nonagon', 'decagon'][n-1];


// function and(a, b) {
// 	return a && b;
// }


// function firstLast(arr) {
// 	return [arr.shift(), arr.pop()]
// }

// function firstLast(arr) {
// 	return [arr[0], arr[arr.length-1]]
// }


// const kToK = (n, k) => Math.pow(k, k) === n;
// function kToK(n, k) {
// 	return k ** k === n ? true: false;
// }
// function kToK(n, k) {
// 	return k**k === n
// }
// 11:07
// function dividesEvenly(a, b) {
// 	return a % b === 0;
// }

// function operation(num1, num2) {
// 	return num1 / num2 === 24 ? 'divided' : num1 * num2 === 24 ? 'multiplied' : num1 - num2 === 24 ? 'subtracted' : num1 + num2 === 24 ? 'added' : null
// function operation(num1, num2) {
// 	let answer = 24
// 	switch (24){
// 		case (num1 * num2 ):
// 			return 'multiplied'
// 			break
// 		case (num1 + num2):
// 			return 'added'
// 			break
// 		case (num1 / num2):
// 			return 'divided'
// 			break
// 		case (num1 - num2):
// 		return 'subtracted'
// 			break
// 		default: return null
// 	}
// }
function operation(num1, num2) {
	if(num1 + num2 === 24){
	return 'added';
	}else if (num1 - num2 === 24){
	return "subtracted" ;
	}else if(num1 * num2 === 24){
		return "multiplied";
	}else if(num1 / num2 === 24){
		return "divided";
	}else{
		return null
	}
}