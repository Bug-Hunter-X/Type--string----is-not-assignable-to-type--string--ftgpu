function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User"];

// Solution 1: Access the first element of the array
console.log(greeter(user[0])); // Accesses the first element of the array

//Solution 2: Modify the function to handle an array
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}
console.log(greeterArray(user)); //Correctly handles an array of strings