let arr = [1, 2, 3, 4, 6];

let lengthArr = arr.length
let res = "";
function printMass(arr){
	for (let i = 0; i < lengthArr; i++){
		res += arr.pop();
		res += (arr.length > 0) ? " [" + arr.join() + "]\n":"";
	}
}

printMass(arr);
console.log(res);