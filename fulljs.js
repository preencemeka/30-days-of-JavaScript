
const email = 'mario@thenetninja.co.uk';
const result = email.length;
console.log(result);
let emailSlice = email.slice(4, 10);
let emailSubStr = email.substr(-4,-8);
console.log(emailSlice, emailSubStr);

//Template Strings
const title = "Best reads of 2019";
const author = " Mario";
const likes = 30;

let results  = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(results);

//CONTROL FLOWS - loops and conditional statements

//WHILE LOOP works same way as the for loop but slightly different syntax
const fruits = ['orange', 'guava', 'apple', 'pear', 'cashew', 'blackberry'];
let i=0;
while(i < fruits.length){
    console.log(`Fruit ${i} is: ${fruits[i]}`);
    i++;
}

//FOR LOOP
const cars = ['Nissan', 'Toyota', 'Mercedez','Camry', 'Volvo', 'Honda'];

for(i=0; i < cars.length; i++){
    console.log(`Car ${i}: ${cars[i]}`);
}
console.log('This list has been exhausted');


//CONDITIONAL STATEMENTS -  IF, 
        //IF
const password = "dami";
if (password.length < 6){
    console.log('Weak password');
}
        //IF ELSE
const password1 = "damilola32@";
if (password1.length < 7) {
    console.log('Password Strength: LOW');
}else {
    console.log('Password Strength: HIGH');
}

        //ELSE IF AND THE USE OF LOGICAL OPERATORS
const password2 = " damilola23";
if (password2.includes('@') && password2.length >= 8) {
    console.log('Password is very strong and contains required symbol');   
}else if(password2.length >= 5 && !password2.includes('@')){
    console.log('Password is weak or does not contain the required symbol')
}else{
    console.log('Kindly choose a strong password with the required symbol')
}


        //BREAK AND CONTINUE

const scores = [50, 25, 0, 30, 100, 20, 10];


for (let i = 0; i < scores.length; i++){
    if(scores[i] === 0){
        continue; // ignores the value 0 and continues
    }
    console.log('Your score: ', scores[i]);

    if (scores[i] === 100){
        break; //ignores the values after 100
    }
}

        // SWITCH STATEMENTS - the use of the break keyword after each case stops other codes aside the one being focused on from running. Without it, it runs the code being focused on and subsequent ones.

const grade = 'D';

switch(grade){
    case "A":
        console.log('You got an A');
        break;
    case "B":
            console.log('You got a B');
            break;
    case "C":
        console.log('You got a C');
        break;
    case "D":
        console.log('You got a D');
        break;
    case "E":
        console.log('You got an E');
        break;
    default:
        console.log('This is not a valid grade');
}


        //FUNCTIONS
    
const speak = function(name,time){
    console.log(`Hello ${name}, Good ${time} to you.`)
};

speak("Emeka", "evening");

        

const calcArea = function(radius){
    //let area =  3.142 * radius **2;
    //return area;
    return 3.142 * radius **2; // same as the 2 codes above
};

 
const result1 = calcArea(5);
console.log(result1);


;
calcTriangle = function(b,h){
    return 1/2 * b * h;
};
 result2= calcTriangle(5,6)
 console.log(result2);


        // ARROW FUNCTIONS
//using the arrow function solve to solve the area of a triangle

calcTriangle1 = (b,h) => {
    return 1/2 * b * h;
};

const results3 =  calcTriangle1;
console.log(`Area is: ${result2}`);

/* to make the code shorter, when there's only one parameter, 
the parenthesis can be removed as shown below. Parenthesis can only
be used when there is no parameter or more than one parameter. The 
code can be further shortened by removing the return keyword and the
 curly braces and having the code on one line. */
 calcRectangle = (l, bre) => l * bre;

 const result4  = calcRectangle(10,8);
 console.log('The area of this rectangle is: ' , result4);

        /* OBJECT LITERALS - contains properties(a comb. of keys and 
        value commonly called the key-value pair) */

/* let user = {
    name: 'Tabitha',
    age: 21,
    email: 'tabitha@gmail.com',
    location: 'Magboro',
    blogs: ['How to buy clothes from China', 'Learn importation in one week'],
    login: function(){
            console.log('The user logged in!');
    },
    logout: function(){
        console.log('The user logged out!');
    },
    logBlogs: function(){
        console.log(this.blogs);
    }
}

user.logBlogs(); */

        // MATH OBJECT

console.log(Math.PI);
console.log(Math.E);

const area = 5.1;

console.log(Math.round(area)); //rounds the no up/down depending on the decimal part
console.log(Math.floor(area)); //rounds the no down regardless of the decimal part
console.log(Math.ceil(area)); //rounds the no down regardless of the decimal part
console.log(Math.trunc(area)); //truncates/removes the decimal part

    //USING THE RANDOM METHOD - random()

const randomNo = Math.random(); //output is any random no btw 0 & 1
console.log(randomNo);

//since the number is less than 1, it can be increased to one using Math.round
// console.log(Math.round(randomNo));

//To increase it to a number btw 0 - 100, multiply by 100
console.log(Math.round(randomNo * 100));


        //DOCUMENT OBJECT MODEL(DOM)
const paras =  document.querySelectorAll('p');
console.log(paras[0]);

paras.forEach(para =>{
    console.log(para);
});

        //CHANGING THE TEXT AND HTML

/*  TO CHANGE THE INNERTEXT
const firstHeader = document.querySelector('#loginPortal > h1');
firstHeader.innerText = 'New Portal'; */

/* TO CHANGE THE HTML 
const portalHeader = document.querySelector('#loginPortal > h1');
portalHeader.innerHTML = ' <h1>NYSC PORTAL</h1>' */

        
        /* CHANGING THE STYLE ATTRIBUTE - can be done using the 
        SetAttribute, getAttribute is to get the attribute already 
        set. */

const portalHeader = document.querySelector('#loginPortal > h1');
//portalHeader.setAttribute('style', 'color:green');
portalHeader.style.color = 'crimson';
//REMOVING A STYLE
portalHeader.style.padding = '';


        // ADDING AND REMOVING A CLASS - more classes can be added to an elemnt or removed
console.log(portalHeader.classList); //outputs the available classes contained in the element

        //To add a class
portalHeader.classList.add('registration');
        //To remove a class
portalHeader.classList.remove('portal');

    /*     Use of toggle to add or remove a class - if the class does
        not exist,it will then be added, if it exists, it will then 
        be removed. */
    
portalHeader.classList.toggle('portal');
portalHeader.classList.toggle('registration');


    //DOM MANIPULATION
/* let nameQuery = prompt("What is your name?");
nameQuery.value = nameQuery;
portalHeader.innerHTML += ` ${nameQuery}`;
 */




//PARENTNODE -similar with parentElement

let itemList = document.querySelector('#items');
console.log(itemList.parentNode);

itemList.parentNode.style.backgroundColor = "lightgrey";


//CHILDNODES - also takes account of spaces or line breaks
 
let listNodes = (itemList.childNodes);


//using for loop for a nodelist
for (let i=0; i<listNodes.length; i++){
    console.log(listNodes[i]);

}
console.log(Array.isArray(listNodes));

//using forEach for a nodelist - recall that a nodelist is seemingly an array

listNodes.forEach(listNode =>{
    console.log(listNode);
});

listNodes.forEach(function(listNode){
    console.log(listNode);
});


//CHILDREN - more preferable than childnodes since spaces and line breaks are not considered. is not a nodelist but an html collection
/* listNodes = itemList.children;
console.log(listNodes);
console.log(listNodes[2]);
listNodes[2].style.backgroundColor = 'crimson'; */


        //HIGHER ORDER FUNCTIONS AND ARRAYS

const companies = [
    {name: "MTN", category: "Finance", start: "1981", end: "2003"},
    {name: "GLO", category: "Retail", start: "1992", end: "2008"},
    {name: "Airtel", category: "Auto", start: "1999", end: "2007"},
    {name: "9mobile", category: "Retail", start: "1989", end: "2010"},
    {name: "Swift", category: "Technology", start: "2009", end: "2014"},
    {name: "NTEL", category: "Finance", start: "1987", end: "2010"},
    {name: "Spectranet", category: "Auto", start: "1986", end: "1996"},
    {name: "Vodacomm", category: "Technology", start: "2001", end: "2016"},
    {name: "TeK Experts", category: "Retail", start: "1981", end: "1989"}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



for (let i=0; i < companies.length; i++){
    console.log(companies[i].category, i);
}

let myClass = ['benedicta', 'florence', 'collins', 'daniel', 'favour', 'esther', 'fathia', 'caleb', 'friday', 'marvelous', 'oluwatoyin', 'jonah'];

for (let i of myClass){
    console.log(i.toUpperCase());
}


//forEach - using forEach to perform the same task

companies.forEach(function(company){
   if(company.category === "Retail"){
       console.log("This company belongs to: ", company.name);
   }
});

//FILTER
const canDrink = [];
for (let i = 0; i <  ages.length; i++){
    if(ages[i] >= 21){
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);

//USING FILTER to perform the same task
const canDrink1 = ages.filter(function(age){
    if (age >= 21){
        return true;
    }
});

console.log(canDrink1);

/* const filterCompany = companies.filter(function(company){
    if (company.category === "Retail"){
        return (company);
    }
});

console.log (filterCompany); */

// using ES6 arrow function, the above task can be made shorter and nicer

const canDrink2 = ages.filter(age => age >= 18);
console.log(canDrink2);

const retailCompanies = companies.filter(company => company.category === "Retail");
console.log(retailCompanies);

// filter all the companies that started in the 80s

const eightiescompanies =  companies.filter(company => (company.start >= 1980 && company.start <= 1990));
console.log(eightiescompanies);


//Companies that lasted 10 years

const lastedTenYears = companies.filter(company => (company.end - company.start) >= 10);
console.log(lastedTenYears); 

//MAP

let mArr7 = [1, 2, 3, 4, 5, 6]
let newArray = [];

for (let i = 0; i < mArr7.length; i++){
    newArray.push(mArr7[i] * 2);
}

console.log(newArray);

// USING MAP TO RECODE THE ABOVE

let newArray1 = mArr7.map((a, i) => {
    
    console.log(`Item at pos: ${i} is ${a}`);
    //console.log(a); //returns each iteration

    return a * 2
});

console.log(newArray1);


// REDUCE
let classAges = [1, 2, 3, 4, 5, 6];

let newclassAges = classAges.reduce((a, b) => {
   
    //console.log(a); //this first gives the accumulator default value = 0 and then iterates giving undefined
   return a + b
}, 0);



console.log(newclassAges)

// DECAGON ALGORITHM ASSESSMENT
/* let mArr7 = [2, 3, 6, 9, 10, 15, 16, 8, 32, 93, 60];
let newArray = [];

for (let i = 0; i < mArr7.length; i++){
    if (mArr7[i] % 2 === 0) {
        newArray.push(mArr7[i] / 2);  
    }
    
}

console.log(newArray); */

let mArr8 = [2, 3, 6, 9, 10, 15, 16, 8, 32, 93, 60];

let newArrays = mArr8.map((i) =>{ 
    if (i % 2 === 0) {
        return i / 2;
    } 
    
})

console.log(newArrays);



    // ES6

/*  New String Methods
 - repeat 
 - startsWith
 - endsWidth - can also check using th index value
 - includes */

 var myName = "Emeka ";
console.log(myName.repeat(5));
console.log(myName.startsWith('Eme'));
console.log(myName.startsWith('Eme', 2)); // sarts checking from the 2nd index
console.log(myName.endsWith('Eme'));
console.log(myName.includes('Eme'));

        //SETS - sets generally do not have duplicates
var newNames = new Set();
newNames.add("Daniel").add("Friday").add("Collins").add("Benedicta");
console.log(newNames);
console.log(newNames.size); // returns the no of elements in the set
newNames.delete("Friday");
console.log(newNames.has("Friday"));

var ninjas = ["shaun", "crystal", "ryu", "yoshi", "shaun", "crystal"];

console.log(ninjas);
var refinedNinjas = new Set(ninjas); //converts the array to a set. Hence, removing the duplicates

console.log(refinedNinjas); //removes the duplicates from ninjas

/* refinedNinjas can be converted to an array again but this time,
without the duplicates since it has been removed. This can be 
done using the spread operators(...). the spread operator helps to copy the exact content of an array.*/

ninjas = [...refinedNinjas];

console.log(ninjas);

let mArr1 = [1, 2, 3, 4, 5];
let mArr2 = [...mArr1];
mArr1.push(6,7)
console.log(mArr1)
console.log(mArr2);

// The spread operator helps in the concatenation of multiple operators

/* let mArr3 = mArr1.concat(mArr2)
console.log(mArr3); */

let mArr3 = [...mArr1, ...mArr2];
console.log(mArr3);


 //DESTRUCTURING
 const name = ['Ehuriah', 'Emeka', 'Prince'];
 /* 
 let firstName = name[1];
 let lastName = name[0];
  console.log(firstName); */
 
 //  the codes above can be made simpler using destructuring
 
  let [lastName, firstName] = name;
 
  console.log(firstName, lastName);
 
  const personObj = {
      country: 'Nigeria',
      state: 'Lagos',
      destination: "Australia"
  }
 
 //using destructuring
 
 let {destination, country} = personObj;
 
 console.log(destination);
 console.log(country);
 
 let firstName1 = 'Benedicta';
 let lastName1 = 'Agenyi';
 let age1 = 23;
 
 const newPerson = {
     /*firstName1,
     lastName1,
     age */
     firstName: firstName1,
     lastName: lastName1,
     age: age1
 } 
 
 console.log(newPerson);

    //GENERATORS

/* "yield" performs a pause function while .next performs a play 
function. Asterisk(*) is used to initiate the generator */

function* gen(){
    yield console.log("Banana");
    yield console.log("Apple");
    yield console.log("Guava");
}

var myGen = gen();
myGen.next();
myGen.next();
myGen.next();

 /*        OBJECT LITERALS - CLASS CONSTRUCTORS

Instead of having several objects for 
different purposes/persons, this can be made shorter by using class 
constructors 
 */

/* const userOne = {
    name: 'Tabitha',
    age: 21,
    email: 'tabitha@gmail.com',
    location: 'Magboro',
    
}


console.log(userOne.login) */
/* 
let userTwo = {
    name: 'Banke',
    age: 19,
    email: 'banke@gmail.com',
    location: 'Ilesa'
}

let userThree = {
    name: 'Bolu',
    age: 24,
    email: 'b.oluwatife@gmail.com',
    location: 'Magodo'
}  */

// Using class constructor to make the codes shorter 

/* class User{
    constructor(name, age, email, location){
        this.name = name;
        this.age = age;
        this.email = email;
        this.location = location;
    }
    login(){
        console.log(this.email, "just logged in!");
    }
    logout(){
        console.log(this.email, 'just logged out!');
    }
}

let userOne = new User("Tabitha", "21", "tabitha@gmail.com", "Magboro");
let userTwo = new User("Banke", "19", "banke@gmail.com", "Ilesa");
let userThree = new User("Bolu", "24", "b.oluwatife@gmail.com", "Magodo");

console.log(userOne.login()); */


class User{
    constructor(name, age, email, location){
        this.name = name;
        this.age = age;
        this.email = email;
        this.location = location;
        this.score = 0;
    }
    login(){
        //return (`${this.email}, just logged in!`);
        console.log (this.email, 'just logged in!');
        return this;
        
    }
    logout(){
        console.log(this.email, 'just logged out!');
        //return (`${this.email}, just logged out!`);
        return this;
    }
    updateScore(){
        this.score++;
        //console.log(this.name,' score is now: ', this.score);
        console.log(`${this.name}'s score is now ${this.score}`);
        return this;
    }
}
let userOne = new User("Tabitha", "21", "tabitha@gmail.com", "Magboro");
let userTwo = new User("Banke", "19", "banke@gmail.com", "Ilesa");
let userThree = new User("Bolu", "24", "b.oluwatife@gmail.com", "Magodo");

// the use of 'return this' in each method makes method chaining possible

userOne.login().updateScore().updateScore().logout();


function capitalizeFirstLetter(words){
    let separateWords = words.toLowerCase().split(' ');
    for (let i = 0; i < separateWords.length; i++){
        separateWords[i] = separateWords[i].charAt(0).toUpperCase() +
        separateWords[i].substring(1);
        }
    return separateWords.join(' ');
}

console.log(capitalizeFirstLetter('emeka'));


/* let findDay = prompt('What day of the week is it?');
let capitalizeFindDay = findDay.toLowerCase();

switch(capitalizeFindDay){
    case 'monday':
        console.log('Today is Monday');
        break;
    case 'tuesday':
        console.log('Today is Tuesday');
        break;
    case 'wednesday':
        console.log('Today is Wednesday');
        break;
    case 'thursday':
        console.log('Today is Thursday');
        break;
    case 'friday':
        console.log('Today is Friday');
        break;
    default:
        console.log('It is a weekend');
} */
/* 
let num = prompt('Enter number');
switch (true){
    case num > 0:
        console.log('Number is positive');
        break;
    case num == 0:
        console.log('Number is zero');
        break;
    case num < 0:
        console.log('Number is negative');
        break;
    default:
        console.log('Not a number')

} */

// EXERCISES - LEVEL 1

/* let drivingAge = prompt('Enter your age');
let eligibleAge = 18;
let ineligibleAge = eligibleAge - drivingAge;

if (drivingAge >= 18){
    console.log ('You are old enough to drive');
} else{
    console.log (`You are left with ${ineligibleAge} years to drive`);
} 
 */
/* 
 let myAge = 32;
 let yourAge = prompt('Enter your age:');
 let youreOlder = yourAge - myAge;
 let iamOlder = myAge - yourAge;

 console.log(yourAge);

 if (yourAge > myAge){
     console.log(`Your are ${youreOlder} years older than me`);
 } else if(myAge > yourAge){  
     console.log(`I am ${iamOlder} years older than you`);
 } else {
     console.log('We are agemates')
 } */


 
 /* let myAge = prompt('My age is:');
 let yourAge = prompt('Enter your age:');
 let youreOlder = yourAge - myAge;
 let iamOlder = myAge - yourAge;

 console.log(myAge, yourAge);
 if (yourAge > myAge){
     console.log(`Your are ${youreOlder} years older than me`);
 } else if(myAge > yourAge){  
     console.log(`I am ${iamOlder} years older than you`);
 } else {
     console.log('We are agemates') 
 } */


/*  let a = 5;
 let b = 2;

 if (a > b){
     console.log('a is greater than b')
 } else {
     console.log('b is greater than a')
 } */



 
/*  let numberInput = prompt('Enter a number:');

 if (numberInput % 2 == 0){
     console.log(`${numberInput} is an even number`);
 }else{
     console.log(`${numberInput} is an odd number`)
 } */


/*  let gradeInput = prompt('Kindly enter your test score:');

 if (gradeInput >= 80 && gradeInput <= 100){
    console.log('A');
 } else if (gradeInput >= 70 && gradeInput <= 79){
     console.log('B')
 } else if (gradeInput >= 60 && gradeInput <= 69){
    console.log('C')
 } else if (gradeInput >= 50 && gradeInput <= 59){
     console.log('D')
 } else {
     console.log('E')
 } */

/* 
 let testScore = prompt('Kindly enter your test score:');
switch (true){
    case (testScore >= 80 && testScore <=100):
        console.log('Test Grade: A');
        break;
    case testScore >= 70 && testScore <= 79:
        console.log('Test Grade: B');
        break;
    case testScore >= 60 && testScore <= 69:
        console.log('Test Grade: C');
        break;
    case testScore >= 50 && testScore <= 59:
        console.log('Test Grade: D');
        break;
    case testScore >= 40 && testScore <= 49:
        console.log('Test Grade: E');
        break;
    case testScore <=39:
        console.log('Test Grade: F');
        break;
    default:
        console.log('Kindly enter a valid test score')
} */


/* let weatherInput = prompt('Enter the month of the year:')
let newWeatherInput = weatherInput.toLowerCase();
switch(true){
    case (newWeatherInput == 'september' || newWeatherInput || 'october' || newWeatherInput == 'november'):
        console.log('The season is Autumn');
        break;

    case newWeatherInput == 'january' || newWeatherInput == 'february' || newWeatherInput == 'december':
        console.log('The season is Winter');
        break;
    
    case newWeatherInput == 'march' || newWeatherInput == 'april' || newWeatherInput == 'may':
        console.log('The season is Spring');
        break;

    case newWeatherInput == 'june' || newWeatherInput == 'july' || newWeatherInput == 'august':
        console.log('The season is Summer');
        break;
    default:
        console.log('Invalid Input. Kindly recheck and make appropriate corrections')
} */


/* ALlows users enter the day of the week and determines if it's a
working day or a weekend */


/* let newdayInput = prompt('What is today?');
let dayInput = newdayInput.toUpperCase();

if (dayInput == 'MONDAY' || dayInput == 'tuesday' || dayInput == 'wednesday' || dayInput == 'thursday' || dayInput == 'friday'){
    console.log(`${dayInput} is a working day`);
} else if(dayInput == 'saturday' || dayInput == 'sunday'){
    console.log(`${dayInput} is a weekend`);
} else{
    console.log('Kindly enter a valid day');
} */

/* let monthInput = prompt ('Enter a month');

if(monthInput == 'april' || monthInput =='september' || monthInput == 'june' || monthInput == 'november' ){
    console.log(`${monthInput} has 30 days`);
} else if(monthInput == 'february'){
    console.log(`${monthInput} has 28days`)
}else if(monthInput == 'january' || monthInput == 'march' || monthInput == 'may' || monthInput == 'july' || monthInput == 'august' || monthInput == 'october' || monthInput == 'december'){
    console.log(`${monthInput} has 31 days`)
}else{
    console.log('Invalid Entry');
} */

/* CONVERTS THE FIRST LETTERS OF EACH WORD TO UPPERCASE

let clubEntr = prompt('Enter the name of your Football Club:');
let clubEntry = clubEntr.toLowerCase();

//let clubEntryCapitalized = clubEntry.charAt(0).toUpperCase() + clubEntry.slice(1); - capitalizes the first letter of a string

let clubEntryCapitalized1 = (clubEntry) => {
    return clubEntry.charAt(0).toUpperCase() + clubEntry.slice(1);
}

const caps = clubEntry.split(' ').map(clubEntryCapitalized1).join(' ');

console.log(caps) */