/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];
/*var students2 = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
console.log (students===students2)

for (let i = 0; i <= group.length; i++){
let person = group[i];
console.log ("checking " + person);
let personIsStudent = false;
    for (let j = 0; j <= students.length; j++){
      console.log("checking student " + students[j]);
      if (person === students[j]){
        personIsStudent = true;
        break;
      }

    }
}*/

var groupIsOnlyStudents = group.every(function(item, index){
   console.log (item + " at " + index);
   return true;
}); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
