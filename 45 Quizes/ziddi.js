// Question 1
//  1.Install Node.js, TypeScript and VS Code on your computer.

// Question 2
//  2 .Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
console.log("\tQuestion 2:\n");

 let myName = "Aizal Fatima!";
console.log("Hello", myName , "Would you like to learn TypeScript today?");

//  Question 3
//  3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
 console.log("\tQuestion 3:\n");

let personName = "wahaj ali";
let LowerCase = personName.toLowerCase();
let UpperCase = personName.toUpperCase();
function TitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word)  {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
console.log(LowerCase);
console.log(UpperCase);
console.log(TitleCase("wahaj ali is the best ACTOR"));
// Another Method for titlecase

let person_name = "wahaj ali";
const TitleCaseName = person_name.replace(/b\w/g, (char) => char.toUpperCase());

// Question 4
// 4 .Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//              Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// //  console.log("\tQuestion 4:\n");

let famousPerson = "Allama Iqbal";
console.log(`${famousPerson} said ;
یہ دستور زبان قیدی ہے کیسا تیری محفل میں
یہاں تو بات کرنے کو ترستی ہے زباں میری
Ye Dastoor-e-Zuban Bandi Hai Kaisa Teri Mehfil Mein
Yahan To Baat Karne Ko Tarasti Hai Zuban Meri`);

//  Question 5
//  5 .Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
 console.log("\tQuestion 5:\n");

let famous_person = "Allama Iqbal";
let Quote = "I tell you the sign of a believer; When Death comes, there is a smile on his lips.";
console.log(`${famous_person} said: ${Quote}`);

// Question 6
// 6 .Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("\tQuestion 6:\n");

let PersonName = "      \t Anabya Fatima     ";
console.log("Name With Whitespaces:", PersonName);
let strippedName = PersonName.trim();
console.log("Stripped Name:", strippedName);

// Question 7
// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("\tQuestion 7:\n");

const byAddition = 4 + 4;
console.log("byAddition:", byAddition);

const bySubtraction = 10 - 2;
console.log("bySubtraction:", bySubtraction);

const byMultiplication = 4 * 2;
console.log("byMultiplication:", byMultiplication);

const byDivision = 16 / 2;
console.log("byDivision:", byDivision);

// Another Method
console.log("\tAnother Method\n");
function sum(x, y) {
    console.log(x + y);
}
sum(5, 3);

function sub(x, y) {
    console.log(x - y);
}
sub(10, 2);

function mul(x, y) {
    console.log(x * y);
}
mul(4, 2);

function div(x, y) {
    console.log(x / y);
}
div(16, 2);

// Question 8
// 8. You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log("\tQuestion 8:\n");

function myFunction (num1, num2) {
    console.log(num1 + num2);
}

myFunction(5, 3);
myFunction(4, 4);
myFunction(6, 2);
myFunction(7, 1);

// Question 9
// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log("\tQuestion 9:\n");

let favrt_number = 12;
let msg = `My favrt number is ${favrt_number}.`
console.log(msg);

// Question 10
// 10 .Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
console.log("\tQuestion 10:\n");

"abc".toUpperCase();
[1, 2, 3].push();
//  in above codes "log" , "toUpperCase" & "push" are the functions. 

// Arrow Function(Modern TS)
// It is a compact(Short) way of starting a function.
const functionName = (param1, param2) => {
    // do some work
}

// Question 11
// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("\tQuestion 11:\n");

let besties = ["Aizal Fatima", "Bakht Saqlain", "Amina Noor", "Ziddi Queen", "Killer Eyes"];
console.log(besties[0]);
console.log(besties[1]);
console.log(besties[2]);
console.log(besties[3]);
console.log(besties[4]);

// Another method
console.log("\tSimilar Method of Qs 1")
for(let bestie of besties) {
         console.log(bestie);
 }

// Question 12
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("\tQuestion 12:\n");

let bestie = ["Aizal Fatima:", "Bakht Saqlain:", "Amina Noor:", "Ziddi Queen:", "Killer Eyes:"];
console.log(bestie[0], "Anything is possible when you have your bestie there to support you.");
console.log(bestie[1], "Anything is possible when you have your bestie there to support you.");
console.log(bestie[2],  "Anything is possible when you have your bestie there to support you.");
console.log(bestie[3], "Anything is possible when you have your bestie there to support you.");
console.log(bestie[4], "Anything is possible when you have your bestie there to support you.");

// Another Method
for(let i=0; i< bestie.length; i++) {
       console.log(bestie[i] , "Anything is possible when you have your bestie there to support you.");
}
// Question 13
// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// console.log("\tQuestion 13:\n");

let fvrtTransportation = [ ];

fvrtTransportation.push(["Motorbike", "Honda"]);
fvrtTransportation.push(["Car", "Supra"]);
fvrtTransportation.push(["Bicycle", "Toyato"]);
fvrtTransportation.push(["Horse ride", "Meridas"]);

console.log(fvrtTransportation);

fvrtTransportation.forEach((transport, brand) => {
      console.log(`I like to ride own a ${brand} ${transport}.`)
});

// Question 14
// 14 .Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("\tQuestion 14:\n");

let guest = ["Ziddi Queen", "Killer Eyes", "Naeem Hussain", "Maklik"];
guest.forEach((guestName) => {
      console.log(`Mr/Mrs.${guestName}, You are invited to a great dinner in someone's ownwer.Please must be come and join us.`)
});

// Another Method
for(let i=0; i< guest.length; i++) {
       console.log(guest[i] , "You are invited to a great dinner in someone's ownwer.Please must be come and join us.");
}

// Question 15
// 15 .Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log("\tQuestion 15:\n");

let guestList = ["Ziddi Queen", "Killer Eyes", "Naeem Hussain", "Maklik", "M.Saim", "Anna Doll", "Mr.Jk", "Anaya Fatima"];

// as 1 guest not come bcz of some reason
guestList.splice(1, 1, "Chasmish");
console.log(guestList);

console.log(guestList[1], ":You are invited to a great dinner in someone's ownwer.Please must be come and join us.I hope You will come on my Invitation");
guestList.push("Bakhtuu");

// Guest who cannot make it
console.log("Killer Eyes cannot make it & join us on Great Dinner.Bcz of some Issues.");
console.log(guestList);

// Replacing name of guest
guestList.splice(1, 1, "Chasmish");
 console.log(guestList[1], ":You are invited to a great dinner in someone's ownwer.Please must be come and join us.I hope You will come on my Invitation");

//  second masg to all guests
guestList.forEach((guestListName) => {
    console.log(`${guestListName} :You are invited to a great dinner in someone's ownwer.Please must be come and join us.`);
 });

// Question 16
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
console.log("\tQuestion 16:\n");

let guest_List = ["Ziddi Queen", "Killer Eyes", "Naeem Hussain", "Maklik", "M.Saim", "Anna Doll", "Mr.Jk", "Anaya Fatima"];
guestList.push("Amal Fatima", "M.Abdullah", "Dur-e-Fishan");
console.log(guestList);

// informing people that you found a bigger dinner table.
console.log("I found a Bigger Dinner Table.");

// • Add one new guest to the beginning of your array.
guestList.unshift("Dur-e-Adan");
console.log(gueestList);

// • Add one new guest to the middle of your array. 
guestList.splice(3 , 0 , "Dur-e-Adan");
console.log(gueestList);

// • Use append() to add one new guest to the end of your list.
guestList.append("Dur-e-Adan");
// • Print a new set of invitation messages, one for each person in your list.
guestList.forEach((guestListName) => {
    console.log(`${guestListName} :You are invited to a great dinner in someone's ownwer.Please must be come and join us.`);
});

// Question 17
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("\tQuestion 17:\n");

let guestList = ["Ziddi Queen", "Killer Eyes", "Naeem Hussain", "Maklik", "M.Saim"];

//  prints a message saying that you can invite only two people for dinner.
console.log(guestList , "Sorry, I can Invite only two People.Bcz place Is becoming too short.Only two guest have to sit here.");

//  print a message to that  person letting them know you’re sorry you can’t invite them to dinner.
guestList.pop();
guestList.pop();
guestList.pop();
console.log(`"Naeem Hussain", "Maik", "M.Saim" : I’am sorry I can’t invite you to dinner.`);

for(let i=0; i< guestList.length; i++) {
    console.log(guestList[i], "You are still Invited to Dinner.");
};

 // • Remove the last two names from your list, so you have an empty list.
guestList.pop();
guestList.pop();

 // Print your list to make sure you actually have an empty list at the end of your program.
console.log(guestList, "Mine Guest List is Empty.");

Question 18
18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
 console.log("\tQuestion 18:\n");

 // places you'd like to visit
console.log("\tplaces you'd like to visit\n");

let PlacesLiked = ["Saudia Arabia", "Turkey", "Korea", "Australia", "Japan", "Canida", "Europe", "Palestine"]
let fvrtPlaces = ["Saudia Arabia", "Turkey", "Korea", "Australia", "Japan", "Canida", "Europe", "Palestine"]
console.log(PlacesLiked);

 // Order Alphabeticaally
console.log("\tOrdered Alphabetically\n");
fvrtPlaces.sort();
console.log(fvrtPlaces);

console.log("\tArray Is still In its Original Order\n");
console.log(PlacesLiked);

 // Print array in reverse alphabetic order
console.log("\tArray In reverse Alphabetic Order\n");

console.log(fvrtPlaces.sort((a, b) => {
  return b.localeCompare(a);
}));
console.log("\tAgain,my Array Is still In its Original Order\n");
console.log(PlacesLiked);

  // • Reverse the order of your list. Print the array to show that its order has changed.
console.log("\tReverse the Order of Array.\nSo, it's ordered has Changed");

 // • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(fvrtPlaces.reverse());

  • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\tAgain reversed the list,\n");
console.log(fvrtPlaces.reverse());

  // Order Alphabeticaally
console.log("\tOrdered Alphabetically\n");
console.log(fvrtPlaces.sort());

 // Print array in reverse alphabetic order
console.log("\tArray In reverse Alphabetic Order\n");
console.log(fvrtPlaces.sort((a, b) => {
      return  b.localeCompare(a);
}));

// Question 19
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//  console.log("\tQuestion 19:\n");

let guestInvited = ["Aizal Fatima", "Bakht Saqlain", "Ziddi Queen", "Ayeshoo", "Areeba", "Seemal Fatima", "Maryam"]
console.log(`Number of Guest Inviting on the Dinner ${guestInvited.length}`);

// Question 20
// 20 .Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
//  console.log("\tQuestion 20:\n");

let mountains = ["Kalar Khar", "K-2", "Mount Everest", "Jabl-e-Noor", "Kooh-e-Toor"]
let rivers = ["Ravi", "        Punjab", "Satlaj", "Gehlem", "Chenab"]
let countries = ["        Pakistan         ", "Turkey", "South Korea", "Austraia", "Saudia Arabia"]
let cities = ["Faisalabad", "        Islamabad",          "        Muree", "        Swat", "        Occupied Kashmir"]
let languages = ["        Urdu", "        English", "                Turkish", "                Persian", "Arabic"]
console.log("\t\t\t\t\t\tList of Items\n");

for(let i=0; i <= 4; i++) {
  process.stdout.write(" ");
  console.log(mountains[i], "\t\t", rivers[i], "\t\t", countries[i], "\t\t", cities[i], "\t\t", languages[i]);
}

// Question 21
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
 console.log("\tQuestion 21:\n");

type infoData = {
    Course:string,  
    Department: string,
    Assignment: string,
    submitTo: {
        SirName:string,
    }
    submitBy: {
        Name: string,
        RollNo:number,
        Semester: string
    }
    Result: {
        comp: number,
        phy: number,
        maths: number,
        eng: number,
        PS: number,
    }
};
let infoData  =  {
    Course : "Web Developement",
    Department : "Information Technology",
    Assignment: "Assignment 13",
    submitTo: {
        SirName: "Sir Naeem"
    },
    submitBy: {
        Name: "Aizal Fatima",
        RollNo: 556,
        Semester: "1st"
    },
    Result: {
        comp: 29,
        phy: 27,
        maths: 30,
        eng: 25,
        PS: 30,
    }
};
      let stdData  = (stdData: infoData) => {
      let result = infoData.Result;
       return `
       Course: ${infoData.Course};
       Department: ${infoData.Department};
       Assignment : ${infoData.Assignment};
       submitTo : 
            sirName : ${infoData.submitTo.SirName};
            submitBy : 
             Name: ${infoData.submitBy.Name};
             RollNo: ${infoData.submitBy.RollNo};
             Semester: ${infoData.submitBy.Semester}
       ;
       Result: 
           comp: ${result.comp};
           phy: ${result.phy};
           maths: ${result.maths};
           eng: ${result.eng};
           PS: ${result.PS};
      }`;
       result = infoData.Result;
        return `Obtained Marks: ${result.comp + result.phy + result.maths + result.eng + result.PS}`;
};
let ObtainedMarks = 141;
let TotalMarks = 150;
let percentage = ((ObtainedMarks / TotalMarks ) * 100).toFixed(2);

console.log("\t",stdData(infoData),"\n");
console.log(`\tObtained Marks: ${ObtainedMarks}\n`);
console.log(`\tTotal Marks:${TotalMarks}\n`);
console.log(`\tPercentage: ${percentage}%\n`);
console.log(`\tGrade: Your grade is A+.\n`);

// Question 22
// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
 console.log("\tQuestion 22:\n");

function makeJuices(name: string, color: string, taste: string) {
        return {
            name,
            color,
            taste
        };
}
 Juices name, taste, color
const Juices = [
    makeJuices("Mango Juice", "Yellow", "Sweet"),
    makeJuices("Chocolate Shake", "Chocolate", "Sweet"),
    makeJuices("Stawbeery Juice", "Pink", "Sweet"),
]
const InvalidIndex = 10;
console.log("Juices At the Different Index:", Juices[InvalidIndex]);
print the Juices names
Juices.forEach((Juices) => {
    console.log(`Name: ${Juices.name}, Color: ${Juices.color}, Taste: ${Juices.taste}`);
});

// Question 23
// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 console.log("\tQuestion 23:\n");

let fvrtActor = "Wahaj Ali";
// 1st True
console.log("Is fvrtActor === 'Wahaj Ali' ? It Predicts True");
console.log(fvrtActor === 'Wahaj Ali');

// 1st False
console.log("Is fvrtActor === 'Yumna Zaidi' ? It Predicts False");
console.log(fvrtActor === 'Yumna Zaidi');

// 2nd True
console.log("Is fvrtActor === 'Wahaj Ali' ? It Predicts True");
console.log(fvrtActor === 'Wahaj Ali');

// 2nd False
console.log("Is fvrtActor === 'wahaj ali' ? It Predicts False");
console.log(fvrtActor === 'wahaj ali');

// 3rd True
console.log("Is fvrtActor === 'Wahaj Ali' ? It Predicts True");
console.log(fvrtActor === 'Wahaj Ali');

// 3rd False
console.log("Is fvrtActor === 'Imran Ashraf' ? It Predicts False");
console.log(fvrtActor === 'Imran Ashraf');

// 4th True
console.log("Is fvrtActor === 'Wahaj Ali' ? It Predicts True");
console.log(fvrtActor === 'Wahaj Ali');

// 4th False
console.log("Is fvrtActor === 'Danish Taimoor' ? It Predicts False");
console.log(fvrtActor === 'Danish Taimoor');

// 5th True
console.log("Is fvrtActor === 'Wahaj Ali' ? It Predicts True");
console.log(fvrtActor === 'Wahaj Ali');

// 5th False
console.log("Is fvrtActor === 'Aiza Khan' ? It Predicts False");
console.log(fvrtActor === 'Aiza Khan');

// Question 24
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
 console.log("\tQuestion 24:\n");

// Equality and Inequality
let name_1 = "Aizal Fatima";
let name_2 = "Amina Noor";
let name_3 = "Aizal Fatima";

if(name_1 === name_3) {
  console.log("Both names are Equal digits/words.\n");
} else {
  console.log("Digits/Words of Both names are uneqaul.\n");
}

if(name_1 !== name_2) {
  console.log("Both names are'nt Equal.\n");
} else {
  console.log("Both names are Eqaul\n");
}

// lowercase Function
let actorName = "Imran Ashraf";
console.log(actorName.toLowerCase(),"\n");

// numerals equality & inequality, greater than and less than, greater than or equal to, and less than or equal to
let age = 18;
if(age === 18) {
  console.log("You are eligible for vooting.\n");
} else {
  console.log("You are'nt eligible for Voting.\n");
}

if(age !== 23) {
     console.log("Junior\n");
} else {
  console.log("Senior\n");
}

if(age > 19) {
  console.log("You cannot Drink.\n");
} else {
  console.log("You can Drink.\n");
}

if(age < 28) {
  console.log("Not Eligible for Driving.\n");
} else {
  console.log("Can Drive.\n");
}

if(age >= 15) {
  console.log("Person is in 8th Standard.\n");
} else {
  console.log("Person is in Matric.\n");


if(age <= 30) {
  console.log("Young\n");
} else {
  console.log("Old\n");
}
 
// • Tests using "and" and "or" operators
let age_1 = 15;
let age_2 = 25;
if(age_1 && age_2) {
  console.log("Both Persons are of Equal ages.\n");
} else {
  console.log("Both Persons are of Equal ages.\n")
}
 
if(age_1 || age_2) {
  console.log("Age differnce is 10.\n")
} else {
  console.log("No age difference.\n")
}
 
// • Test whether an item is in a array
let Fruits = ["Apple", "Bnanana", "Cherry", "Stawberry", "Mango"]
console.log('Apple' === Fruits[0], "Apple is in Friut array/list.\n");
 
// • Test whether an item is not in a array
let fvrtFruits = ["Apple", "Bnanana", "Cherry", "Stawberry", "Mango"]
console.log('Pineapple' === fvrtFruits[2], "Pineapple is'nt in fvrtFriut array/list.\n");

// Question 25
 // 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
 console.log("\tQuestion 25:\n");
 
let aliens_color = "green";
 
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if(aliens_color === "green") {
     console.log("The Player just earned 5 points.\n");
}
 
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
if(aliens_color === "red") {
  console.log("The Player just earned 5 points.");
} 
 
// Question 26
// 26 .Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
 console.log("\tQuestion 26:\n");
 
let alien_color = "green";
if(alien_color === "green") {
  console.log("The Player just earned 5 points.\n");
} else {
  console.log("Player has'nt earned 5 points\n");
}
 
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if(alien_color !== "green") {
  console.log("The Player has'nt earned 10 points.\n");
} else {
  console.log("The Player just earned 10 points.\n");
}
 
 // Question 27
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-elif_else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
 console.log("\tQuestion 27:\n");
 
let alien_color = "red";
if(alien_color === "green") {
  console.log("Player just earned 5 points.\n");
} else if(alien_color === "yellow") {
  console.log("Player just earned 10 points.\n");
} else if (alien_color === "red") {
  console.log("Player just earned 15 points.\n");
}
 
// Question 28
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
 console.log("\tQuestion 28:\n");
 
let person_age = 17;
if(person_age > 2) {
  console.log("Baby");
} else if(person_age > 4) {
  console.log("Toddler");
} else if(person_age > 13) {
  console.log("Kid");
} else if(person_age > 20) {
  console.log("Teenager");
} else if(person_age > 65) {
  console.log("Adult");
} else {
  console.log("Elder");
}
 
// Question 29
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 console.log("\tQuestion 29:\n");
 
let fvrtFruits = ["Apple", "Mango", "Pineapple", "Stawberry", "Melon"]
function fvrtFruit() {
    let fvrtFruits = ["Apple", "Mango", "Stawberry"]
     console.log(fvrtFruits);
}
fvrtFruit();
 
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if(fvrtFruits[0] === 'Apple') {
  console.log("I really Like Apples.\n");
}
if(fvrtFruits[1] === 'Mango') {
  console.log("I really Like Mangoes.\n");
}
if(fvrtFruits[2] === 'Blueberries') {
  console.log("I really Like Pineapple.\n");
}
if(fvrtFruits[3] === 'Stawberry') {
         console.log("I really Like Stawberry.\n");
}
if(fvrtFruits[4] === 'melon') {
  console.log("I really Like Melon.\n");
}
 
// Another Method
let fvrtFruits = ["Apple", "Mango", "Pineapple", "Stawberry", "Melon"]
console.log(fvrtFruits.includes('Apple'));
 
// Or
if(fvrtFruits.includes('Apple')) {
  console.log("I Really Like Apples.")
}
if(fvrtFruits.includes('Mango')) {
  console.log("I Really Like Mangoes.")
}
if(fvrtFruits.includes('Stawberry')) {
  console.log("I Really Like Stawbeeries.")
}
if(fvrtFruits.includes('Pineapple')) {
  console.log("I Really Like Pineapples.")
}
 
// Question 30
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
 console.log("\tQuestion 30:\n");
 
let user_names = ["Aizal Fatima", "JAveria Talib", "Wardha", "Naeem", "Malik"]
console.log(`Hello ${user_names[0]},Thank You For Logging in Again.\n`);
console.log(`Hello ${user_names[1]},Thank You For Logging in Again.\n`);
console.log(`Hello ${user_names[2]},Thank You For Logging in Again.\n`);
 
    if(user_names.includes('Naeem')) {
      console.log("Hello Admin/Naeem, would you like to see a status report?\n");
    }; 
console.log(`Hello ${user_names[4]},Thank You For Logging in Again.\n`);
 
// Question 31
// 31 .No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
 console.log("\tQuestion 31:\n");
 
let user:string[] = ['']
if(user.includes('')) {
     console.log("We need to find some users!\n");
}
 
// Question 32
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
 console.log("\tQuestion 32:\n");
 
let current_users:string[] = ["Aizal Fatima", "JAveria Talib", "Wardha", "Naeem", "Malik"]
let new_users:string[] = ["Aizal Fatima", "Minah", "Hira", "Mehrosh", "Naeem"]
 
function checkUsername(current_users:string[], new_users:string[]):void {
     const lower_current_users = current_users.map(user => user.toLowerCase());
 
     for(const user of new_users) {
      const lower_new_users = user.toLocaleLowerCase();
      
      if(lower_current_users.includes(lower_new_users)) {
        console.log(`Username "${user} is already here.Please Enter a new Username."`);
      } else {
        console.log(`Username "${user}" is Available.`);
      }
     }
}
 
checkUsername(current_users, new_users);
 
// Question 33
// 33 .Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
 console.log("\tQuestion 33:\n");
 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for(const num of numbers) {
    let OrdinalNumbers: string;
    if(num === 1) {
      OrdinalNumbers = "st";
    } else if(num === 2) {
       OrdinalNumbers = "nd"; 
    } else if(num === 3) {
      OrdinalNumbers = "rd";
    } else {
      OrdinalNumbers = "th";
    }
    console.log(`${num}${OrdinalNumbers}`);
  }
 
// Question 34
// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
 console.log("\tQuestion 34:\n");
 
let Pizzas = ["Fagita", "Peproni", "Cheese"]
for(let i=0; i < Pizzas.length; i++) {
    console.log(`I like ${Pizzas[i]} Pizza.`);
};
 
console.log("Pizza is the one thing that I will never get tired of....");
 
// Question 35
// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
//  • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
 console.log("\tQuestion 35:\n");
 
// 1st Step
let animals = ["Cat", "Dog", "Rabbit"]
 
console.log("\t\t\t\tList of Animals\n");
for(let i=0; i < animals.length; i++) {
  console.log("         ",animals[i]);
}
 
// 2nd Step
console.log("\tStatement about each Animal");
 
for(let animal of animals) {
  switch (animal) {
    case "Cat": 
    console.log("Cats are beautiful and friendly animals.");
    break;
    case "Dog":
      console.log("Dogs are loyal, loving, hilarious and endless, forgiving creatures who have a knack of for warming our hearts.");
      break;
    case "Rabbit":
      console.log("Rabits are playful and very loyal to their masters.");
      break;
  }
};
 
// Another Method
for(const animal of animals) {
     console.log(animal);
}
 
// 2nd Step
console.log("\tStatement about each Animal");
for(const animal of animals) {
  if(animal === 'Cat') {
    console.log(`${animal} are beautiful and friendly animals.`);
    } else if(animal === 'Dog') {
      console.log(`${animal} are loyal, loving, hilarious and endless, forgiving creatures who have a knack of for warming our hearts.`);
    } else if(animal === 'Rabbit') {
      console.log(`${animal} are playful and very loyal to their masters.\n`);
    }
}
 
console.log("\tWhat these animals have in commom?\n");
console.log("These animals would make a great pet.Pets are animals that we love to keep.Pets are kept for community and entertainment.");
 
// Question 36
// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
 console.log("\tQuestion 36:\n");
 
function make_shirt(size:number, msg:string) {
    console.log(`Size of Shirt: ${size}\n${msg}`);
}
 
make_shirt(28, 'Be the Change You hope to See In the World.');
 
// Question 37
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 console.log("\tQuestion 37:\n");
 
function make_shirt(size: number, msg:string) {
      console.log(`Size of Shirt: ${size}\n${msg}`);
}     
 
make_shirt(40, 'I Love Typescript.(default msgs with too much large size).\n');
make_shirt(32, '"Be kind, for everyone\nYou meet is\nFighting a battle\nYou know nothing about"\n');
make_shirt(28, '\tBe the Change\n\tYou Hope to See\n\tIn the World`);
           
// Question 38
// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
 console.log("\tQuestion 38:\n");
 
function describe_city(city:string, country:string= "Pakistan") {
           console.log(`${city} is in ${country}`);
}
describe_city('Rawalpindi');
describe_city('Tokyo', 'Japan');
describe_city('Faisalabd');
 
// Question 39
// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
 console.log("\tQuestion 39:\n");
 
function city_country(city: string, country:string) {
      console.log(`"${city}, ${country}"`);
}
 
city_country('Lahore','Pakistan');
city_country('Istanbul', 'Turkey');
city_country('Mungyeong', 'Korea');
 
// Question 40
// 40. Album: Write a function called make_album() that builds a Object describing a music album.
// •The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. 
// •Print each return value to show that Objects are storing the album information correctly.
// •Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// •If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
 console.log("\tQuestion 40:\n");
 
function make_album(artist:string, album_title:string, num_tracks:number) {
      let album = {'artist':artist, 'album_title': album_title};
      if(num_tracks) {
        let album = num_tracks;
        console.log(`${artist}, ${album_title}, ${num_tracks}\n`)
      };
    };
 
make_album('Garth Brooks', 'Garths grestest hits', 11);
make_album('Kenny Chesney', 'Road and The Radio', 12);
 
// Question 41
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 console.log("\tQuestion 41:\n");
 
interface Magician {
    name : string
}
const magicians: {name: string} [] = [
    {name : "Harry Houidini"},
    {name : "David Copperfield"},
    {name : "Penn Jillete"},
    {name : "Harry Porter"},
    {name : "Hermione Granger"},
]
 
function show_magicians(magicians: Magician[]) {
        magicians.forEach((magician) => {
            console.log(magician.name);
        });
}
 
// Question 42
// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
 console.log("\tQuestion 42:\n");
 
interface Magician{
  name :string
}
 
const magicians: {name:string}[] = [
  { name: "Harry Houdini" },
  { name: "David Copperfield" },
  { name: "Penn Jillette" }
]
 
// Function to add "the Great" to each magician's name
function make_great(magicians: Magician[]): void {
  magicians.forEach(magician => {
      magician.name = `The Great  "${magician.name}"`;
  });
}
 
// Function to display the magicians' names
function show_magicians(magicians: Magician[]): void {
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
 console.log("\tQuestion 43:\n");
 
const magicianNames: string[] = ["Harry Porter", "Pinkro", "David Copperfield", "Neuro", "Hermione Granger"]
function show_magicians(magicians:string[]):void {
  for(const magician of magicians) {
    console.log(magician);
  }
}
 
function make_great(magicians:string[]) {
      const greatMagicians:void[] = magicians.map((magician) => {
          `The Great ${magician}`;
          console.log(greatMagicians);
      });
} 
 
const greatMagicians = make_great(magicianNames);
console.log("\tOriginal Magicians:");
show_magicians(magicianNames);
console.log("\n\tGreat Magicians");
show_magicians(magicianNames);
 
// Question 44
/44. Sandwiches: Write a  function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
 console.log("\tQuestion 44:\n");
 
function make_Sandwiches(...items:string[]) {
    console.log("Sandwitch Order:");
    for(let i = 0; i < items.length; i++) {
      console.log(`- ${items[i]}`);
    }
    console.log("Enjoy your Sandwich!");
}
 
make_Sandwiches('Lettuce', 'Tomato', 'Cheese');
make_Sandwiches('Ham', 'Mayo');
make_Sandwiches('Turkey');

// Question 45
// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
 console.log("\tQuestion 45:\n");
 
function make_car(manufacturer:string, model:string, ...options: {[key: string]: any}[]) {
    const car: {
      manufacturer:string, model:string, options: { [key:string]: any}
    } = {
      manufacturer: manufacturer,
      model: model,
      options: {}
    };
    for(const option of options) {
      for(const key in option) {
        car.options[key] = option[key];
      }
    }
    return car;
}
 
// let car1 = make_car('Toyato', 'Corola', {color: 'blue'}, {sunroof: true});
// let car2 = make_car('Royal-royce', 'Phantom', {color: 'Black'});
// let car3 = make_car('Supra', 'Toyato GR', {color: 'blue'}, {sunroof: true});
// console.log(car1, "\n", car2, "\n", car3);
