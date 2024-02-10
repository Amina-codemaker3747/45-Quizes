"use strict";
// Question 1
//  1.Install Node.js, TypeScript and VS Code on your computer.
const magicians = [
    { name: "Harry Houdini" },
    { name: "David Copperfield" },
    { name: "Penn Jillette" }
];
// Function to add "the Great" to each magician's name
function make_great(magicians) {
    magicians.forEach(magician => {
        magician.name = `The Great  "${magician.name}"`;
    });
}
// Function to display the magicians' names
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician.name);
    });
}
// Call make_great() to modify the magicians array
make_great(magicians);
// Call show_magicians() to display the modified list
show_magicians(magicians);
// Question 43
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//  console.log("\tQuestion 43:\n");
// const magicianNames: string[] = ["Harry Porter", "Pinkro", "David Copperfield", "Neuro", "Hermione Granger"]
// function show_magicians(magicians:string[]):void {
//   for(const magician of magicians) {
//     console.log(magician);
//   }
// }
// function make_great(magicians:string[]) {
//       const greatMagicians:void[] = magicians.map((magician) => {
//           `The Great ${magician}`;
//           console.log(greatMagicians);
//       });
// } 
// const greatMagicians = make_great(magicianNames);
// console.log("\tOriginal Magicians:");
// show_magicians(magicianNames);
// console.log("\n\tGreat Magicians");
// show_magicians(magicianNames);
// Question 44
// 44. Sandwiches: Write a  function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
//  console.log("\tQuestion 44:\n");
// function make_Sandwiches(...items:string[]) {
//     console.log("Sandwitch Order:");
//     for(let i = 0; i < items.length; i++) {
//       console.log(`- ${items[i]}`);
//     }
//     console.log("Enjoy your Sandwich!");
// }
// make_Sandwiches('Lettuce', 'Tomato', 'Cheese');
// make_Sandwiches('Ham', 'Mayo');
// make_Sandwiches('Turkey');
// Question 45
// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
//  console.log("\tQuestion 45:\n");
// function make_car(manufacturer:string, model:string, ...options: {[key: string]: any}[]) {
//     const car: {
//       manufacturer:string, model:string, options: { [key:string]: any}
//     } = {
//       manufacturer: manufacturer,
//       model: model,
//       options: {}
//     };
//     for(const option of options) {
//       for(const key in option) {
//         car.options[key] = option[key];
//       }
//     }
//     return car;
// }
// let car1 = make_car('Toyato', 'Corola', {color: 'blue'}, {sunroof: true});
// let car2 = make_car('Royal-royce', 'Phantom', {color: 'Black'});
// let car3 = make_car('Supra', 'Toyato GR', {color: 'blue'}, {sunroof: true});
// console.log(car1, "\n", car2, "\n", car3);
