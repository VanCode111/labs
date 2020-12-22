let student = {
	group: "201-322",
	last_name: "Eliseev",
	first_name: "Ivan",

};

let studentKeys = "";
for (key in student){
	studentKeys += key + " ";
}
console.log(studentKeys);
console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`)