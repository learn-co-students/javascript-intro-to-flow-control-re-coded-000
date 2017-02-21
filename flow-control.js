'use strict';

function basicTeenager(age) {
	if (age>=13&&age<=19){
return `You are a teenager!`;
	}	
}

function teenager(age) {
	if (age>=13&&age<=19) {
  // condition is false hence code is not executed
  return"You are a teenager!";} 
  else { return "You are not a teenager";
  // code to be executed because previous condition is false
}
}

function ageChecker(age) {
	if (age>=13 && age<=19){
	return	"You are a teenager!";
    // condition is false hence code is not executed
} else if (age <=13) { return"You are a kid";

  // execute this code if previous statement is false
   } else {return "You are a grownup";
  // execute this code if the 2 conditions above are false
          }
}
function ternaryTeenager(age){
  return age >= 13 && age <=19 ? "You are a teenager" : "You are not a teenager"
}


function switchAge(age){
  switch (age) {
  case 13:
  case 14:
   case 15:
   case 16:
   case 17:
   case 18: 
   case 19:
    return "You are a teenager"; 
    break;
  default:
    return "You have an age"
  }

}