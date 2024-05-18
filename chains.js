let name = process.argv[2];

name = name.trim();
let letter = name.charAt(0);
letter = letter.toUpperCase();

let extraChars = name.slice(1);
extraChars = extraChars.toLowerCase();

name = letter + extraChars;

console.log(name);

name = name.trim().charAt(0).toUpperCase();

console.log(name);
