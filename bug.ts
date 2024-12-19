function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User"];

console.log(greeter(user)); //This will cause a compile-time error