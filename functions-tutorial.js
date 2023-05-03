/*
  -----MDN WEB DOCS-----

  FUNCTIONS VERSUS METHODS:
    Functions that are part of objects are called methods. The built-in code we've made use of so far come in both forms: functions and methods. You can check the full list of the 
    built-in functions, as well as the built-in objects and their corresponding methods here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
*/
/*
  INVOKING FUNCTIONS:
    To actually use a function after it has been defined, you've got to run — or invoke — it. This is done by including the name of the function in the code somewhere, followed by 
    parentheses. Note this form of creating a function is also known as function declaration. It is always hoisted, so you can call function above function definition and it will work fine. 
 */
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once

/*
  FUNCTION PARAMETERS:
    Some functions require parameters to be specified when you are invoking them — these are values that need to be included inside the function parentheses, which it needs to do its job 
    properly. Parameters are sometimes called arguments, properties, or even attributes. The browser's built-in Math.random() function doesn't require any parameters. When called, it 
    always returns a random number between 0 and 1.  --EXAMPLE: const myNumber = Math.random(); -- However the browser's built-in string replace() function needs two parameters, the 
    substring to find in the main string, and the substring to replace that string with. --EXAMPLE: const myText = 'I am a string'; const newString = myText.replace('string', 'sausage');


    Optional parameters - sometimes parameters are optional and you don't have to specify them. If you don't, the function will generally adopt some kind of default behavior. As an example, 
    the array join() function's parameter is optional. If no parameter is included to specify a joining/delimiting character, a comma is used by default.
*/
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'

/*
    Default parameters - if you're writing a function and want to support optional parameters, you can specify default values by adding = after the name of the parameter, 
    followed by the default value:
*/
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!

/*
  ANONYMOUS FUNCTIONS AND ARROW FUNCTIONS:
    So far we have just created a function like so:
*/
function myFunction() {
  alert("hello");
}
/*
    But you can also create a function that doesn't have a name:
*/
(function () {
  alert("hello");
});
/*
    This is called an anonymous function, because it has no name. You'll often see anonymous functions when a function expects to receive another function as a parameter. 
    In this case the function parameter is often passed as an anonymous function. Note, this form of creating a function is also known as function expression. Unlike function 
    declaration, function expressions are not hoisted. 
    
    Anonymous function - For example, let's say you want to run some code when the user types into a text box. To do this you can call the addEventListener() function of the text box. 
    This function expects you to pass it (at least) two parameters: 1) the name of the event to listen for, which in this case is keydown 2) a function to run when the event happens.

    When you add an event listener to an element, like in the example code you below, you're basically telling the browser to "listen" for a particular event, in this case, the 'keydown' 
    event, which occurs when the user presses a key on their keyboard. When the user presses a key, the browser "detects" that event and then "calls" the event listener function that 
    you provided, which is logKey() in this case. The browser then "passes" an "event" object to the logKey() function as a parameter, which contains information about the event that just 
    occurred, such as which key was pressed. Inside the logKey() function, you can then access this information from the event object and do whatever you want with it. In this case, the 
    function simply logs a message to the console that tells the user which key they just pressed.
*/
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);
/*
    Instead of defining a separate logKey() function, you can pass an anonymous function into addEventListener():
*/
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
/*
    Arrow functions - If you pass an anonymous function like this, there's an alternative form you can use, called an arrow function. Instead of function(event), you write (event) =>:
*/
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
/*
    If the function only has one expression in the curly brackets, you omit the curly brackets:
*/
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`)
);
/*
    If the function only takes one parameter, you can also omit the brackets around the parameter:
*/
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`)
);
/*
    Finally, if your arrow function needs to return a value, and contains only one expression, you can also omit the return statement but only for arrow functions 
    as the arrow function implicitly returns the result of the expression on the right-hand side of the arrow. In the following example we're using the map() method of Array 
    to double every value in the original array:
*/
const originals = [1, 2, 3];

const doubled = originals.map((item) => item * 2);

console.log(doubled); // [2, 4, 6]
/*
    The map() method takes each item in the array in turn, passing it into the given function. It then takes the value returned by that function and adds it to a new array.

    So in the example above, (item) => item * 2 is the arrow function equivalent of:
*/
function doubleItem(item) {
  return item * 2;
}

/*
    Note: There are some subtle differences between arrow functions and normal functions. They're outside the scope of this introductory guide, and are unlikely to make 
    a difference in the cases we've discussed here. To learn more visit -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

/*
  FUNCTION SCOPE AND CONFLICTS:
    For example, say you have an HTML file that is calling in two external JavaScript files, and both of them have a variable and a function defined that use the same name:

    <!-- Excerpt from my HTML -->
    <script src="first.js"></script>
    <script src="second.js"></script>
    <script>
      greeting();
    </script>

*/

// first.js
const name = "Chris";
function greeting() {
  alert(`Hello ${name}: welcome to our company.`);
}

// second.js
const name = "Zaptec";
function greeting() {
  alert(`Our company is called ${name}.`);
}

/*
    Both functions you want to call are called greeting(), but you can only ever access the first.js file's greeting() function (the second one is ignored). In addition, 
    an error results when attempting (in the second.js file) to assign a new value to the name variable — because it was already declared with const, and so can't be reassigned.

    The same scoping rules do not apply to loop (e.g. for() { }) and conditional blocks (e.g. if () { }) — they look very similar, but they are not the same thing! Take 
    care not to get these confused. When a variable is declared within a loop that variable defined within the loop's block statement was actually declared in the same scope 
    as the loop itself therefore it is accessible outside the loop's block statement whereas variables declared in an conditional statement was declared in that conditionals 
    block statement and is not accessible outside that block.
 */

/*
  FUNCTION RETURN VALUES:
    Generally, a return value is used where the function is an intermediate step in a calculation of some kind. You want to get to a final result, which involves some values 
    that need to be calculated by a function. After the function calculates the value, it can return the result so it can be stored in a variable; and you can use this variable 
    in the next stage of the calculation. To return a value from a custom function, you need to use the return keyword. For example the random() function takes one parameter — 
    a whole number — and returns a whole random number between 0 and that number. It looks like this:
*/

function random(number) {
  return Math.floor(Math.random() * number);
}

//This could be written as follows:

function random(number) {
  const result = Math.floor(Math.random() * number);
  return result;
}

//But the first version is quicker to write, and more compact.

/*
  We are returning the result of the calculation Math.floor(Math.random() * number) each time the function is called. This return value appears at the point the function was called, 
  and the code continues. So when you execute the following:
 */

ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);

// If the three random() calls return the values 500, 200, and 35, respectively, the line would actually be run as if it were this:

ctx.arc(500, 200, 35, 0, 2 * Math.PI);

// The function calls on the line are run first, and their return values are substituted for the function calls, before the line itself is then executed.

/*
  WHEN YOU CREATE YOUR FUNCTION - GREAT TIPS TO FOLLOW:
    A) Look at another example of writing error handling into functions. It is generally a good idea to check that any necessary parameters are validated, 
    and that B) any optional parameters have some kind of default value provided. This way, your program will be less likely to throw errors. Look below
    for examples on concept A error handling/validating and B default values for optional parameters.
*/

// A)
input.addEventListener("change", () => {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = "You need to enter a number!";
  } else {
    para.textContent = `${num} squared is ${squared(num)}. `;
  }
});

// B)
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

/*
    Think about the idea of creating a function library. As you go further into your programming career, you'll start doing the same kinds of things over and over again. It is a good idea 
    to create your own library of utility functions to do these sorts of things. You can copy them over to new code, or even just apply them to HTML pages wherever you need them.
*/

function favoriteAnimal(animal) {
  return animal + " is my favorite animal!";
}

console.log(favoriteAnimal("Goat"));

/*
  PARAMETERS & ARGUMENTS:

    A)  In JavaScript, parameters are the items listed between the parentheses in the function declaration. 

    B)  In JavaScript, arguments are the actual values we decide to pass to the function.

    In the example above, the function definition is written on the first line: function favoriteAnimal(animal). The parameter, animal, is found inside the parentheses. Naming the 
    parameter animal gives someone reading our code a bit of context so that they don’t have to guess what animal may eventually contain. By putting animal inside the parentheses of 
    the favoriteAnimal() function, we are telling JavaScript that we will send some value to our favoriteAnimal function. This means that animal is just a placeholder for some future 
    value. favoriteAnimal('Goat'), is where we are calling our favoriteAnimal function and passing the value 'Goat' inside that function. Here, 'Goat' is our argument. We are telling 
    the favoriteAnimal function, “Please send 'Goat' to the favoriteAnimal function and use 'Goat' wherever the ‘animal’ placeholder is.” Because of the flexibility that using a parameter 
    provides, we can declare any animal to be our favorite.
 */

/*
  -----JAVASCRIPT.INFO-----

  FUNCTIONS:
    Function declaration, to create a function we can use a function declaration. It looks like the code below. The function keyword goes first, then goes the name of the function, 
    then a list of parameters between the parentheses comma-separated, and finally the code of the function, also named “the function body”, between curly braces.   
*/

function name(parameter1, parameter2, ...parameterN) {
  // body
}

/* 
    SHADOW VARIABLES:
      If a local variable is declared within a function with the same name as a global variable, it is said to be shadowing the global variable. The function will create and use its 
      own variable instead of accessing the global variable, which will be ignored. Example A shows a function with with a variable that has the same name as the global variable
      and the global variable is being defined and altered by the function because the function has access to this global variable therefore it can define it. Example B shows a nearly 
      identical code however because the new version of the function declared a variable with the same name as the global variable it is shadowing it, this means the new function can 
      no longer define or alter the global variable with the same name, the function can only define and alter its local variable with the same name as the global variable.
*/

// EXAMPLE A:
let userName = "John";

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = "Hello, " + userName;
  alert(message);
}

alert(userName); // John before the function call

showMessage();

alert(userName); // Bob, the value was modified by the function

//EXAMPLE B:
let userName = "John";

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = "Hello, " + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert(userName); // John, unchanged, the function did not access the outer variable

/*  
GLOBAL VARIABLES:
  Variables declared outside of any function, such as the outer userName in the code above, are called global. Global variables are visible from any function (unless shadowed by locals).
  It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store 
  project-level data.
*/

/*
  PARAMETERS:
    We can pass arbitrary data to functions using parameters. In the example below, the function has two parameters: 'from' and 'text'. When the function is called in lines (*) and (**), 
    the given values are copied to local variables from and text. Then the function uses them.
*/

function showMessage(from, text) {
  // parameters: from, text
  alert(from + ": " + text);
}

showMessage("Ann", "Hello!"); // Ann: Hello! (*)
showMessage("Ann", "What's up?"); // Ann: What's up? (**)
