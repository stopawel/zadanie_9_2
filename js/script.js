var femaleNames = ['Ania', 'Kasia', 'Maja', 'Małgosia'];
var maleNames = ['Piotrek', 'Adam', 'Krzysztof', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

console.log(femaleNames);
console.log(maleNames);
console.log(allNames);

var newName = 'Marjan';

if (allNames.indexOf(newName) === -1)
{
	allNames = allNames.push(newName);
	console.log(allNames);
}