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
    and that 
    
    B) any optional parameters have some kind of default value provided. This way, your program will be less likely to throw errors. Look below
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
      no longer define or alter the global variable with the same name, the function can only define and alter its own local variable with the same name as the global variable.
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

/*
  In the following example the external variable 'from' will not have its value changed from 'Ann' to '*Ann*' - The reason for this is that the showMessage function has a parameter
  with the same name of 'from' therefore when the function defines 'from' in this line "from = '*' + from + '*'; // make "from" look nicer" it is defining the  parameter 'from' which 
  is local to the functions scope and also happens to have the same name as the external function which cannot be modified.
 */

function showMessage(from, text) {
  from = "*" + from + "*"; // make "from" look nicer

  alert(from + ": " + text);
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy within the function's scope, not the external variable from that was defined outside of the function.
alert(from); // Ann

/*
  When a value is passed as a function parameter, it’s also called an argument. In other words, to put these terms straight:

  A)  A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
  B)  An argument is the value that is passed to the function when it is called (it’s a call time term).
  
  We declare functions listing their parameters, then call them passing arguments.
 */

/*
  DEFAULT VALUES:
    If a function is called, but an argument is not provided, then the corresponding value becomes undefined. For instance, the aforementioned function showMessage(from, text) 
    can be called with a single argument as the example below shows. That’s not an error, such a call would output "*Ann*: undefined". As the value for text isn’t passed, it 
    becomes undefined.
*/

showMessage("Ann"); //output: *Ann*: undefined

/*
    We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =: Now if the text parameter is not passed, 
    it will get the value "no text given" as shown in the example below.
*/

function showMessage(from, text = "no text given") {
  alert(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given

//  The default value also jumps in if the parameter exists, but strictly equals undefined, like in the example below:

showMessage("Ann", undefined); // Ann: no text given

//  Here "no text given" is a string, but it can be a more complex expression, which is only evaluated and assigned if the parameter is missing. So, this is also possible:

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

/*
  Alternative default parameters - Sometimes it makes sense to assign default values for parameters at a later stage after the function declaration. We can check if the 
  parameter is passed during the function execution, by comparing it with undefined:
*/

function showMessage(text) {
  // ...

  if (text === undefined) {
    // if the parameter is missing
    text = "empty message";
  }

  alert(text);
}

showMessage(); // empty message

//  …Or we could use the || operator:

function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || "empty";
  // ...
}

/*
  Modern JavaScript engines support the nullish coalescing operator ??, it’s better when most falsy values, such as 0, should be considered “normal”. The nullish coalescing 
  operator ?? is used to check whether a value is nullish or not. It returns the left-hand side operand if it is not nullish, and returns the right-hand side operand if the 
  left-hand side is nullish.
*/

function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

/*
  In the example above, the showCount function takes an argument count, and if count is undefined or null, it will show the string "unknown" instead. The ?? operator is used to 
  check if count is nullish or not, and if it is, the string "unknown" will be shown instead. So, the line (count ?? "unknown") means that if count is not nullish, then count will 
  be used as the value for the alert function. But if count is nullish (i.e. null or undefined), then the string "unknown" will be used instead. In the first call to showCount, count 
  is 0, which is not nullish, so the alert will show 0. In the second call, count is null, which is nullish, so the alert will show "unknown". And in the third call, count is not 
  provided, which means it is undefined, so the alert will show "unknown" as well. 
*/

/*
  RETURNING A VALUE:
    A function can return a value back into the calling code as the result. The simplest example would be a function that sums two values. The directive return can be in any place 
    of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result below).  
*/

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result); // 3

// There may be many occurrences of return in a single function. For instance:

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?");
  }
}

// It is possible to use return without a value. That causes the function to exit immediately. For example:

function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }

  alert("Showing you the movie"); // (*)
  // ...
}

//  A function with an empty return or without it returns undefined - If a function does not return a value, it is the same as if it returns undefined:

function doNothing() {
  /* empty */
}

alert(doNothing() === undefined); // true

// An empty return is also the same as return undefined:

function doNothing() {
  return;
}

alert(doNothing() === undefined); // true

/*
  !! NEVER ADD A NEWLINE BETWEEN RETURN AND THE VALUE !! 
  For a long expression in return, it might be tempting to put it on a separate line, like this:

    return
    (some + long + expression + or + whatever * f(a) + f(b))

  That doesn’t work, because JavaScript assumes a semicolon after return. That’ll work the same as:

    return;
    (some + long + expression + or + whatever * f(a) + f(b))
    
  So, it effectively becomes an empty return.

  If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses there as follows:

    return (
      some + long + expression
      + or +
      whatever * f(a) + f(b)
    )
*/

/*
  NAMING A FUNCTION:
      Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets 
      an indication of what the function does. It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement 
      within the team on the meaning of the prefixes. For instance, functions that start with "show" usually show something.

      Function starting with…

      "get…" – return a value,
      "calc…" – calculate something,
      "create…" – create something,
      "check…" – check something and return a boolean, etc.
*/

// Examples of such names:

showMessage(); // shows a message
getAge(); // returns the age (gets it somehow)
calcSum(); // calculates a sum and returns the result
createForm(); // creates a form (and usually returns it)
checkPermission(); // checks a permission, returns true/false

// With prefixes in place, a glance at a function name gives an understanding what kind of work it does and what kind of value it returns.

/*
  !!  ONE FUNCTION – ONE ACTION !!

  A function should do exactly what is suggested by its name, no more.

  Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).

  A few examples of breaking this rule:

  getAge – would be bad if it shows an alert with the age (should only get).
  createForm – would be bad if it modifies the document, adding a form to it (should only create it and return).
  checkPermission – would be bad if it displays the access granted/denied message (should only perform the check and return the result).

  These examples assume common meanings of prefixes. You and your team are free to agree on other meanings, but usually they’re not much different. 
  In any case, you should have a firm understanding of what a prefix means, what a prefixed function can and cannot do. All same-prefixed functions 
  should obey the rules. And the team should share the knowledge.
*/

/*
  -----JAVASCRIPT.INFO-----

  FUNCTIONS EXPRESSIONS:
      A function is a special kind of value that is an object in JavaScript. It is not a statement like if or for, and it is not a keyword like let or const. Functions can be assigned 
      to variables, passed as arguments to other functions, and returned from functions, just like any other value. The syntax that we used before is called a Function Declaration:
*/

function sayHi() {
  alert("Hello");
}

//  There is another syntax for creating a function that is called a Function Expression. It allows us to create a new function in the middle of any expression. For example:

let sayHi = function () {
  alert("Hello");
};

/*
  Here we can see a variable sayHi getting a value, the new function, created as function() { alert("Hello"); }. As the function creation happens in the context of the assignment 
  expression (to the right side of =), this is a Function Expression. Please note, there’s no name after the function keyword. Omitting a name is allowed for Function Expressions.
  Here we immediately assign it to the variable, so the meaning of these code samples is the same: "create a function and put it into the variable sayHi". In more advanced situations, 
  that we’ll come across later, a function may be created and immediately called or scheduled for a later execution, not stored anywhere, thus remaining anonymous.
*/

/*
  FUNCTION IS A VALUE:
    Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable. We can even print out that value using 
    alert:
*/
function sayHi() {
  alert("Hello");
}

alert(sayHi); // shows the function code

/*
  Please note that the last line does not run the function, because there are no parentheses after sayHi. There are programming languages where any mention of a function name causes 
  its execution, but JavaScript is not like that. In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is 
  the source code. Surely, a function is a special value, in the sense that we can call it like sayHi(). But it’s still a value. So we can work with it like with other kinds of 
  values. We can copy a function to another variable:
*/

function sayHi() {
  // (1) create aka STEP 1 (please read the explanation to STEP 1 below)
  alert("Hello");
}

let func = sayHi; // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

/*  
  STEP 1.  WHEN YOU CREATE THE sayHi() FUNCTION, YOU ARE ACTUALLY CREATING A NEW OBJECT OF TYPE "FUNCTION" NAMED sayHi. WHEN YOU STORE A REFERENCE TO THE sayHi FUNCTION IN A 
  VARIABLE, YOU ARE STORING A REFERENCE TO THE sayHi() FUNCTION OBJECT, JUST LIKE YOU WOULD WITH ANY OTHER OBJECT.
*/

//  We could also have used a Function Expression to declare sayHi, in the first line:

let sayHi = function () {
  // (1) create
  alert("Hello");
};

let func = sayHi;
// ...

/*
  CALLBACK FUNCTIONS:
    Let’s look at more examples of passing functions as values and using function expressions. We’ll write a function ask(question, yes, no) with three parameters. The function 
    should ask the question and, depending on the user’s answer, call yes() or no(): The arguments showOk and showCancel of ask are called callback functions or just callbacks. The 
    idea is that we pass a function and expect it to be “called back” later if necessary. In our case, showOk becomes the callback for “yes” answer, and showCancel for “no” answer.
*/
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

//  We can use Function Expressions to write an equivalent, shorter function:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    alert("You canceled the execution.");
  },
  function () {
    alert("You canceled the execution.");
  }
);

/*
  Above, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such functions are not accessible outside of ask (because they are 
  not assigned to variables), but that’s just what we want here.

  !!  A FUNCTION IS A VALUE REPRESENTING AN “ACTION”  !!

  Regular values like strings or numbers represent the data.

  A function can be perceived as an action.

  We can pass it between variables and run when we want.
*/

/*
  FUNCTION EXPRESSION VS FUNCTION DECLARATION:
    In JavaScript, a function declaration is a way of defining a function where the keyword "function" is used at the beginning of a statement, followed by the name of the function, 
    a list of parameters (enclosed in parentheses), and the function body (enclosed in curly braces). On the other hand, a function expression is when you create a function omitting 
    the function name and assign it to a variable which means you are creating an anonymous function. It's worth noting that a function can be used in a place where a variable is 
    expected and even if the function is not assigned to a variable this is also known as a function expression. The main difference between function expressions and function 
    declarations is when they are created. Function declarations are created at parse** time, which means they are available to use anywhere in your code, even before they are 
    declared. Function expressions are created at runtime, which means they are only available to use after they have been assigned to a variable. Another difference is that function 
    declarations are statements, so they don't need to end with a semicolon, while function expressions are expressions and do need to end with a semicolon. Both function expressions 
    and function declarations are objects in JavaScript, which means they can have properties and methods just like any other object.

    **parsing refers to the process of analyzing a string of code and breaking it down into smaller components, like keywords, operators, and values. This is done by the parser, 
    which is a component of the programming language's compiler or interpreter. The parser reads the code and generates a data structure that represents the code's syntax, so 
    that it can be executed by the computer.**
*/

// Function Declaration: a function, declared as a separate statement, in the main code flow:

// Function Declaration
function sum(a, b) {
  return a + b;
}

//  Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:

// Function Expression
let sum = function (a, b) {
  return a + b;
};

// Since function declarations are hoisted they are available anywhere in the code they are declared relative to its scope, therefore this works:

sayHi("John"); // Hello, John

function sayHi(name) {
  alert(`Hello, ${name}`);
}

// However this does not because it is a function expression which is created when the execution reaches it and is usable only from that moment.

sayHi("John"); // error!

let sayHi = function (name) {
  // (*) no magic any more
  alert(`Hello, ${name}`);
};

/*

  In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it. If we use Function Declaration welcome() 
  outside the if else code block, it won’t work as intended and that’s because a Function Declaration is only visible inside the code block in which it resides.

*/

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {
  function welcome() {
    alert("Hello!");
  }
} else {
  function welcome() {
    alert("Greetings!");
  }
}

// ...use it later
welcome(); // Error: welcome is not defined

/*

  Here’s another example below:

*/

let age = 16; // take 16 as an example

if (age < 18) {
  welcome(); // \   (runs)
  //  |
  function welcome() {
    //  |
    alert("Hello!"); //  |  Function Declaration is available
  } //  |  everywhere in the block where it's declared
  //  |
  welcome(); // /   (runs)
} else {
  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined

/*

  If we wanted to make welcome visible outside of the if else statements then the correct approach would be to use a Function Expression and assign welcome to the variable that is 
  declared outside of if and has the proper visibility as done in the code below
  
*/

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {
  welcome = function () {
    alert("Hello!");
  };
} else {
  welcome = function () {
    alert("Greetings!");
  };
}

welcome(); // ok now

/*

  we could also simplify the code above even further by using a question mark operator ? as done below.

*/

let age = prompt("What is your age?", 18);

let welcome =
  age < 18
    ? function () {
        alert("Hello!");
      }
    : function () {
        alert("Greetings!");
      };

welcome(); // ok now

/*
  !!  When to choose Function Declaration versus Function Expression? !!

  As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we 
  can call such functions before they are declared. That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. 
  Function Declarations are more “eye-catching”...But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), 
  then Function Expression should be used.

  Summary
    - Functions are values. They can be assigned, copied or declared in any place of the code.
    - If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
    - If the function is created as a part of an expression, it’s called a “Function Expression”.
    - Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
    - Function Expressions are created when the execution flow reaches them.

    In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility 
    in code organization, and is usually more readable. So we should use a Function Expression only when a Function Declaration is not fit for the task. 
*/

/*
  ARROW FUNCTIONS, THE BASICS:
      There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions. It's  called "arrow function "because it looks like 
      the code below which creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.    
*/
let func = (arg1, arg2, ..., argN) => expression;

//  The function expression defined with an arrow function above is a shorter version of the function expression defined with a regular non arrow function below.

let func = function(arg1, arg2, ..., argN) {
  return expression;
};

//  Below is another example of an arrow function that the definition of a function expression.

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3

/*
  As you can see, (a, b) => a + b means a function that accepts two arguments named a and b. Upon the execution, it evaluates the expression a + b and returns the result. If we 
  have only one argument, then parentheses around parameters can be omitted, making the arrow function even shorter like in the example below.
*/

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }
alert( double(3) ); // 6

//  If there are no arguments, parentheses are empty, but they must be present:
let sayHi = () => alert("Hello!");
sayHi();

/*
  Arrow functions can be used as a part of a function expression in the same way as regular functions, but they are not a replacement for function expressions. In the example 
  provided below the arrow function is used as a part of a ternary operator to dynamically create a function expression. A function expression is a way of defining a function 
  as part of a larger expression. It's often used when you need to pass a function as an argument to another function or when you need to declare a function inside a block of code. 
  Arrow functions can be used in function expressions in the same way that regular functions can be used in function expressions. However, it's important to note that an arrow 
  function alone is not a function expression. To make an arrow function a function expression, you need to assign it to a variable or use it as an argument to a function call. 
*/
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();

/*
  MULTILINE ARROW FUNCTIONS:
    The arrow functions that we’ve seen so far were very simple. They took arguments from the left of =>, evaluated and returned the right-side expression with them. Sometimes we 
    need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a 
    return within them to return a value (just like a regular function does). Take a look at the example below.
*/

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3

/*
  Summary:
  1) Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors: Without curly braces: (...args) => expression – the right side is 
    an expression: the function evaluates it and returns the result. Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2.

  2) With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.
*/

/*  JUNIORS CHAT:
    ok so we have regular A) function declarations i.e. 
*/
function sayHi(name) {
  alert("hello" + name);
}

// and we have B) anonymous functions like
function (name) {
  alert("hello" + name);
}

// and more anonymous functions like C)
(name) => {
  alert("hello" + name);
};

/* 
    which are technically all expressions seeing that every function evaluates to a value. Lastly we have what's known as a 
    'function expression' which is a function expression because the function is defined as an expression within a statement,  
    as opposed to being defined as a separate function declaration statement. The function expression can be defined in many 
    ways with examples A, B, or C to the right of the equal sign.
    
    
    In summary, we have:

    A) Function Declarations: They have a name and are defined using the function keyword followed by the name of the function and the function body.

    B) Anonymous Functions: They don't have a name and are defined using the function keyword followed by the function parameters and the function body.

    C) Arrow Functions: They are a shorter and more concise way to define anonymous functions using the => syntax.

    All of these are function expressions because they all produce a value that can be assigned to a variable or passed as an argument to another function. A "function 
    expression" is a term used to describe a function that is defined as an expression within a statement, instead of being defined as a separate function declaration 
    statement. So, all the examples A, B, and C can be used as function expressions, depending on how they are defined within a statement.
*/

