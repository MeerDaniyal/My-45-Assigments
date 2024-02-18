// Question 01
// console.log("Hellow World!");
// Question 02
// let personName: string = "Eric";
// console.log(`Hellow ${personName}, Would you like to learn some python today?`);
// Question 03
// let personName: string = "Daniyal Anwar";
// in uppercase
// console.log("uppercase:", personName.toLowerCase());
// in upppercase
// console.log("uppercase:", personName.toUpperCase());
// in titlecase
// console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));
// Question 04 & 05
// let quote: string= "Look Deep Into natture, and you will understand everything better.";
// let author: string= "Albert Einstein";
// console.log(`${author} Once Said, "${quote}"`);
// let famour_person: string = "Albert Einstein";
// let message: string = '${famous_person} Once Said,"${quote}"';
// console.log(message);
// Question 06
// let personName: string ="\t\n   John Deo \n\t";
// console.log("Original:", personName);
// console.log("Stripping:", personName.trim());
// Question 7 & 8
// console.log(5+3);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);
// Question 09
// let favoriteNumber: number = 4;
// console.log (`My Favourite Number Is ${favoriteNumber},`);
// Question 07
// author: {Daniyal anwar}
// date: {Saturday , Feburary 17 , 2024}
// task 9: printing my favourite number.
// let favoriteNumber: number = 4;
// reveling my favourite number in a message formate.
// console.log (`My Favourite Number Is ${favoriteNumber},`);
// Question 11
// let names : string [] = ["Daniyal" , "Umair" , "Asfar" , "Saif"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// Question 12
// let names : string [] = ["Daniyal" , "Umair" , "Asfar" , "Saif"];
// let message: string = "Do You Like Play PUBG?"
// console.log(names[0] + "  " + message )
// console.log(names[1] + "  " + message )
// console.log(names[2] + "  " + message )
// console.log(names[3] + "  " + message )
// Question 13
// let transpotation : string [] = ["Honda MotorCycle" , "Bently" , "Range Rover"];
// transpotation.map((items) => console.log(`I Would Like To Own A ${items}`));
// Question 14
// let guestArr : string [] = ["Daniyal" , "Umair" , "Asfar"];
// guestArr.map((items) => (console.log(`Dear ${items}, Yor Are Invited To The Dinner`)));
// Question 15
// let guestArr : string [] = ["Daniyal","Umair","Asfar","Saif"];
// let canNotAttend : string = "Daniyal"
// console.log (canNotAttend = "" "Can Not Attend The dinner")
// let newGuest : string = "Osama"
// guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
// guestArr.map((items) =>
// console.log(`dear ${items}, You Are Invited To The Dinner.`)
// );
// Question 16
// let guestArr : string [] = ["Osama", "Umair", "Asfar", "Saif"];
// let canNotAttend : string = "Osama"
// let newGuest : string = "Musab"
// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
// guestArr.map((items) =>
// console.log(`Dear ${items}, I Found A Bigger Dinner TableSo I Am Invited More People.`)
// );
// part2
// let guestBeg : string ="Daniyal"
// guestArr.unshift(guestBeg);
// console.log(guestArr)
// part 3 Middle
// let middleGuest : string = "Fahad"
// let middleIndex = guestArr.length/2
// guestArr.splice(middleIndex,0,middleGuest)
// console.log(guestArr)
// part 04 append
// guestArr.push("Zeeshan")
// console.log(guestArr)
// Part 05
// guestArr.map((items) =>
// console.log (`Dear ${items}, You Are Invited In The More people List On donner`)
// );
// Question 17
// let guests : string[] = ["Daniyal","Umair"];
// console.log("Due To Limited Space, Only Two Peoples Can Be Invited For Dinner.");
// Part 01
// while (guests.length > 2) {
//  const removedGuest = guests.pop();
//  console.log(`sorry, ${removedGuest}, You Are No Longer Invited To Dinner.`); 
// }
// Part 2
// guests.forEach((guest) => {
// console.log(`Dear ${guest}, you Are Still Invited To Dinner.`);
// });
// Part 03
// guests.pop();
// guests.pop();
// // Printing The Final List To Confirm It's Empty
// console.log("Final Guests List:", guests);
// Question 18
// store the location in an array
// let placeToVisit: string[] = ["Pakistan","Palestine","Iran","Quwait","Saudi Arabia"];
// print the array in its original order
// console.log("Original Order:", placeToVisit);
// print the array in alphabetical order without modifying the actual list
// console.log("Alphabetical order:", [...placeToVisit].sort());
// Show That Tha Array Is Still In Its Original Order
// console.log("Original Order After Sorting:", placeToVisit);
// Print Th Array In Reverse Alphabetical Order Without Changing The Order Of The Original List
// console.log("Reverse Alphabetical Order:", [...placeToVisit].sort().reverse());
// Show That The Array Is Still In Its Original Order
// console.log("Original Order After Reserve Sorting:", placeToVisit);
// Reverse The Order Of The List
// placeToVisit.reverse();
// console.log("Reversed Order:", placeToVisit);
// Reverse The Order Of The List Again To Get back To the Original Order
// console.log("Back To Original Order:", placeToVisit);
// Sort The Array In Alphabetical Order
// placeToVisit.sort();
// console.log("Sorted In Alphabetical Order:", placeToVisit);
// Sort The Array In Reverse Alphabetical Order
// placeToVisit.sort((a, b) => b.localeCompare(a));
// console.log("Sorted In Reverse Alphabetical order:", placeToVisit);
//  Question 20
// let country: string [] = ["Pakistan","Palestine","Iran","China","Dubai"]
// console.log("list of country:");
// console.log(country);
// Question 21
// let person: {name: string, fname: string, age: number} = {name:"Daniyal", fname:"Male", age:19}
// console.log(person)
// Question 22
// const days : string [] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// console.log(days{7})
// console.log(days[6])
// Question 23
// let car = "subaru";
// console.log("is car == 'subaru'? predict true")
// console.log(car == 'subaru')
// console.log("is car |= 'honda civic'? predict true")
// console.log(car != 'honda civic')
// console.log("is car == 'subaru'? predict false")
// console.log(car == 'subaru')
// console.log("is car == 'Subaru'? predict false")
// console.log(car == 'Subaru')
// console.log("is car.length ==6? predict true")
// console.log(car.length == 6)
// console.log("is car.length ==10? predict true")
// console.log(car.length == 10)
// console.log("is 10 > 45 ? predict false")
// console.log(10 > 45)
// console.log("is 3 <= 2 ? predict false")
// console.log(3 <= 2)
// console.log("is 72 >= 83 ? predict false")
// console.log(72 >= 83)
// console.log("is car == 'subaru' && car.length == 6? predict false")
// console.log(car == 'subaru' && car.length == 6)
// Question 24
// Tests for equality and inequality with strings
// const string1: string = "hello";
// const string2: string = "world";
// console.log("Equality test with strings:");
// console.log(string1 === string2); // False
// console.log(string1 === "hello"); // True
// console.log("Inequality test with strings:");
// console.log(string1 !== string2); // True
// console.log(string2 !== "world"); // False
// // Tests using the lower case function
// const mixedCaseString: string = "HelloWorld";
// const lowerCaseString: string = mixedCaseString.toLowerCase();
// console.log("Lower case test:");
// console.log(lowerCaseString === mixedCaseString.toLowerCase()); // True
// console.log(lowerCaseString === mixedCaseString); // False
// // Numerical tests
// const num1: number = 10;
// const num2: number = 5;
// console.log("Numerical tests:");
// console.log(num1 === num2); // False
// console.log(num1 !== num2); // True
// console.log(num1 > num2); // True
// console.log(num1 < num2); // False
// console.log(num1 >= num2); // True
// console.log(num1 <= num2); // False
// // Tests using "and" and "or" operators
// const condition1: boolean = true;
// const condition2: boolean = false;
// console.log("Tests using 'and' operator:");
// console.log(condition1 && condition2); // False
// console.log(condition1 && !condition2); // True
// console.log("Tests using 'or' operator:");
// console.log(condition1 || condition2); // True
// console.log(!condition1 || condition2); // False
// // Test whether an item is in an array
// const array: number[] = [1, 2, 3, 4, 5];
// const item1: number = 3;
// const item2: number = 6;
// console.log("Test whether an item is in an array:");
// console.log(array.includes(item1)); // True
// console.log(array.includes(item2)); // False
// // Test whether an item is not in an array
// console.log("Test whether an item is not in an array:");
// console.log(!array.includes(item1)); // False
// console.log(!array.includes(item2)); // True
// Question 25
// const alien_color: string = 'green';
// part 01
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }
// part 02
// const alien_color: string = 'red';
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }
// Question 26
// Part 01
// const alien_color: string = 'green';
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the alien.");
// } else {
//     console.log("Congratulations! You just earned 10 points.");
// }
// Part 02
// const alien_color: string = 'red';
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the alien.");
// } else {
//     console.log("Congratulations! You just earned 10 points.");
// }
// Question 27
// part 01
// const alien_color: string = 'green';
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// } else if (alien_color === 'yellow') {
//     console.log("Congratulations! You just earned 10 points.");
// } else if (alien_color === 'red') {
//     console.log("Congratulations! You just earned 15 points.");
// }
// part 02
// const alien_color: string = 'yellow';
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// } else if (alien_color === 'yellow') {
//     console.log("Congratulations! You just earned 10 points.");
// } else if (alien_color === 'red') {
//     console.log("Congratulations! You just earned 15 points.");
// }
// part 03
// const alien_color: string = 'red';
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// } else if (alien_color === 'yellow') {
//     console.log("Congratulations! You just earned 10 points.");
// } else if (alien_color === 'red') {
//     console.log("Congratulations! You just earned 15 points.");
// }
// Question 28
// const age: number = 30;
// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }
// Question 29
// Array of favorite fruits
// const favorite_fruits: string[] = ["banana", "apple", "strawberry"];
// // Check if certain fruits are in the array
// if (favorite_fruits.includes("banana")) {
//     console.log("You really like bananas!");
// }
// if (favorite_fruits.includes("apple")) {
//     console.log("You really like apples!");
// }
// if (favorite_fruits.includes("strawberry")) {
//     console.log("You really like strawberries!");
// }
// if (favorite_fruits.includes("orange")) {
//     console.log("You really like oranges!");
// } else {
//     console.log("You don't like oranges.");
// }
// if (favorite_fruits.includes("kiwi")) {
//     console.log("You really like kiwis!");
// } else {
//     console.log("You don't like kiwis.");
// }
// Question 30
// Array of usernames
// const usernames: string[] = ['admin', 'eric', 'john', 'alice', 'jane'];
// // Loop through the array and print greetings
// for (const username of usernames) {
//     if (username === 'admin') {
//         console.log('Hello admin, would you like to see a status report?');
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }
// Question 31
// Array of usernames
// let usernames: string[] = ['daniyal', 'Hamza', 'umair', 'ahad', 'saif'];
// // Check if the list of users is not empty
// if (usernames.length === 0) {
//     console.log('We need to find some users!');
// } else {
//     // Loop through the array and print greetings
//     for (const username of usernames) {
//         if (username === 'admin') {
//             console.log('Hello admin, would you like to see a status report?');
//         } else {
//             console.log(`Hello ${username}, thank you for logging in again.`);
//         }
//     }
// }
// // Removing all usernames from the array
// usernames = [];
// // Check if the list of users is empty again
// if (usernames.length === 0) {
//     console.log('We need to find some users!');
// }
// Question 32
// List of current users
// const current_users: string[] = ['Daniyal', 'Umair', 'Saif', 'Hamza', 'Ahad'];
// // List of new users
// const new_users: string[] = ['Wajahat', 'Hamza', 'Ahad', 'Anwar', 'Mehar'];
// // Loop through new_users list
// for (const new_user of new_users) {
//     // Check if the username is already in use (case insensitive)
//     const usernameExists = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
//     // Print message based on the result
//     if (usernameExists) {
//         console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
//     } else {
//         console.log(`Congratulations! The username '${new_user}' is available.`);
//     }
// }
// Question 33
// Array to store numbers 1 through 9
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // Loop through the array
// for (const number of numbers) {
//     // Determine the ordinal ending based on the number
//     let ordinalEnding: string;
//     if (number === 1) {
//         ordinalEnding = "st";
//     } else if (number === 2) {
//         ordinalEnding = "nd";
//     } else if (number === 3) {
//         ordinalEnding = "rd";
//     } else {
//         ordinalEnding = "th";
//     }
//     // Print the number with its ordinal ending
//     console.log(`${number}${ordinalEnding}`);
// }
// Question 34
// Array to store favorite pizza names
// const favoritePizzas: string[] = ['Cheese', 'Pepperoni', 'Arabic Green'];
// // Loop through the array and print each pizza name
// console.log("Printing pizza names:");
// for (const pizza of favoritePizzas) {
//     console.log(pizza);
// }
// // Modify the loop to print a sentence using the name of the pizza
// console.log("\nPrinting pizza statements:");
// for (const pizza of favoritePizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }
// // Statement about how much you like pizza
// console.log("\nI really love pizza!");
// Question 35
// Array to store names of animals
// const animals: string[] = ['dog', 'cat', 'rabbit'];
// // Loop through the array and print each animal name
// console.log("Animal names:");
// for (const animal of animals) {
//     console.log(animal);
// }
// // Modify the loop to print a statement about each animal
// console.log("\nAnimal statements:");
// for (const animal of animals) {
//     console.log(`A ${animal} would make a great pet.`);
// }
// // Statement about what these animals have in common
// console.log("\nAny of these animals would make a great pet!");
// Question 36
// Function to make a shirt
// function make_shirt(size: string, message: string): void {
//     console.log(`Shirt size: ${size.toUpperCase()}`);
//     console.log(`Message on the shirt: ${message}`);
// }
// // Calling the function
// make_shirt('medium', 'Hello, world!');
// Questiion 37
// Function to make a shirt
// function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
//     console.log(`Shirt size: ${size.toUpperCase()}`);
//     console.log(`Message on the shirt: ${message}`);
// }
// // Making a large shirt with the default message
// make_shirt();
// // Making a medium shirt with the default message
// make_shirt('medium');
// // Making a shirt of any size with a different message
// make_shirt('small', 'Hello, Sir Zia!');
// Question 38
// Function to describe a city
// function describe_city(city: string, country: string = 'Unknown'): void {
//     console.log(`${city} is in ${country}.`);
// }
// // Calling the function for three different cities
// describe_city('Karachi', 'Pakistan');
// describe_city('Abu Dhabi', 'UAE');
// describe_city('Ottawa', 'Canada');
// Question 39
// Function to format city and country
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }
// // Call the function with city-country pairs
// const city1 = city_country('Lahore', 'Pakistan');
// const city2 = city_country('Japan', 'South Korea');
// const city3 = city_country('China', 'Taiwan');
// // Print the values returned
// console.log(city1);
// console.log(city2);
// console.log(city3);
// Question 40
// Function to create an album object
// function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
//     const album = { artist, title };
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }
//     return album;
// }
// // Make three dictionaries representing different albums
// const album1 = make_album('Taylor Swift', '1989');
// const album2 = make_album('Ed Sheeran', 'Divide', 16);
// const album3 = make_album('Beyoncé', 'Lemonade');
// // Print each return value
// console.log(album1);
// console.log(album2);
// console.log(album3);
// Question 41
// Function to show magicians
// function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }
// // Array of magician's names
// const magicians: string[] = ['Harry Houdini', 'David Blaine', 'Doug Henning', 'Dai Vernon'];
// // Calling the function to show magicians
// show_magicians(magicians);
// Question 42
// Function to show magicians
// function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }
// // Function to make magicians great
// function make_great(magicians: string[]): void {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = `The Great ${magicians[i]}`;
//     }
// }
// // Array of magician's names
// const magicians: string[] = ['Harry Houdini', 'David Blaine', 'Dai Vernon', 'Doug Henning'];
// // Calling the function to make magicians great
// make_great(magicians);
// // Calling the function to show magicians
// show_magicians(magicians);
// Question 43
// Function to show magicians
// function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }
// // Function to make magicians great
// function make_great(magicians: string[]): string[] {
//     const great_magicians: string[] = [];
//     for (const magician of magicians) {
//         great_magicians.push(`The Great ${magician}`);
//     }
//     return great_magicians;
// }
// // Array of magician's names
// const magicians: string[] = ['Harry Houdini', 'David Blaine', 'Dai Vernon', 'Doug Henning'];
// // Call make_great() with a copy of the array
// const great_magicians: string[] = make_great([...magicians]);
// // Call show_magicians() with the original and modified arrays
// console.log("Original Magicians:");
// show_magicians(magicians);
// console.log("\nGreat Magicians:");
// show_magicians(great_magicians);
// Question 44
// Function to summarize sandwich order
// function make_sandwich(...toppings: string[]): void {
//     console.log("Sandwich summary:");
//     if (toppings.length === 0) {
//         console.log("You ordered a plain sandwich.");
//     } else {
//         console.log("You ordered a sandwich with the following toppings:");
//         for (const topping of toppings) {
//             console.log(`- ${topping}`);
//         }
//     }
//     console.log("----------------------------------");
// }
// // Call the function three times with different number of arguments
// make_sandwich('cheese', 'ham', 'lettuce');
// make_sandwich('turkey', 'bacon');
// make_sandwich();
// Question 45
// Function to store car information in an object
function store_car(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model,
        extras: {}
    };
    // Add additional information to the extras object
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var extra = extras_1[_a];
        for (var key in extra) {
            if (extra.hasOwnProperty(key)) {
                carInfo.extras[key] = extra[key];
            }
        }
    }
    return carInfo;
}
// Call the function with required information and additional name-value pairs
var carInfo = store_car('Toyota', 'Camry', { color: 'blue' }, { features: ['navigation', 'sunroof'] });
// Print the returned object to check if all information was stored correctly
console.log(carInfo);
