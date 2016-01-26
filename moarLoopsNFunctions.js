// LOOP PRACTICE 2

// var animals=["rat", "cat", "butterfly", "marmot", "ocelot"];

// for(var i=0; i<animals.length; i++){
// 	console.log(animals[i]);
// }


// for(var i=0; i<=3; i++){
// 	console.log(animals[i])
// }


// for(var i=0; i<animals.length; i+=2) {
// 	console.log(animals[i]);
// }


// for(var i=4; i>=0; i--) {
// 	console.log(animals[i]);
// }

// // ***   This doesn't work   ***
// for(var i=0; i<=animals.length; i++){
// 	for(var i=1; i<animals.length; i++){
// 	}
// }




// LOOP PRACTICE 3

// var students = [{
//  name: 'Liz',
//  age: 25,
//  city: 'Boulder'
// },{
//  name: 'Meghan',
//  age: 27,
//  city: 'Denver'
// },{
//  name: 'Trent',
//  age: 32,
//  city: 'Boulder'
// },{
//  name: 'Chelsea',
//  age: 24,
//  city: 'Boulder'
// },{
//  name: 'Amir',
//  age: 18,
//  city: 'Denver'
// }];

// for(var i=0; i<students.length; i++) {
// 	console.log(students[i].name);
// }

// for(var i=0; i<students.length; i++) {
// 	console.log(students[i].age);
// }

// for(var i=0; i<students.length; i++) {
// 	console.log(students[i].name + ", " + students[i].city);
// }

// ***   how to exclude meghan?  ***
// for(var i=0; i<4; i++) {
// 	console.log(students[i].name + " is from " + students[i].city);
// }

// for(var i=0; i<students.length; i++) {
// 	if(students[i].age>25){
// 		console.log(students[i].name + " is older than 25");
// 	}
// }


// FUNCTION PRACTICE #2

// var getName = function(object) {
// 	return object.name
// }
// console.log (getName({name: "Luisa", age:25}))




// var totalLetters = function (array){
// 	return (array.join("")).length
// }
// console.log (totalLetters(['javascript', 'is', 'awesome']))
// console.log (totalLetters(['what', 'happened', 'to', 'my', 'function']))




// var keyValue = function (key, value) {
// 	var object ={}
// 	object[key] = value
// 	return object;
// }

// console.log(keyValue('city', 'Denver'))




// var negativeIndex = function (array, negativeNumber) {
// 	return array[array.length+negativeNumber]
// }

// console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))
// console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1))



// bullshit function
// var removeM = function(string) {
// 	var letters = string.split ("");
// 	// console.log(letters)
// 	var noM = letters.indexOf("m");
// 	// console.log(noM)
// 	var splice = letters.splice(noM, "m")
// 	// console.log(splice)
	
// 	// return
// }

// console.log(removeM('family'))
// console.log(removeM('memory'))




// var removeM=function(string) {
// 	var letters= string.split("");
// 	string=""
// 	for (i=0; i<letters.length; i++) {
// 		if (letters[i] == "m")
// 			continue
// 		string+=letters[i]
// 	}
// 	return string
// }


// console.log(removeM('family'))
// console.log(removeM('memory'))












