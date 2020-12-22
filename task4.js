function tabl(number, matr){
	for (let i = 0; i < matr.length; i++){
		for (let j = 0; j < matr[i].length; j++){
			matr[i][j] = matr[i][j]*number;
		}
	}
	return matr;
}

matr = [[1,2,3],[4,5,6],[7,8,9]];
matrNew = tabl(3, matr);
for (let i = 0; i < matrNew.length; i++){
	let stroka = "";
		for (let j = 0; j < matrNew[i].length; j++){
			stroka += matrNew[i][j] + " ";
		}
		console.log(stroka);
}