# 1. What is the difference between var, let, and const?

| Var|Let|Const|
|---|---|---|
|It is Function Scoped|It is Block Scoped|Just like let, it is Block Scoped.|
| It can be declared without initialization. | It can be declared without initialization. | It cannot be declared without initialization. | 
|It can be updated and re-declared in the same scope.|It can be updated but cannot be re-declared in the same scope.|Returns the first matching element. Can select by id, class, tag, or combination.|
|its default value is "undefined".|It cannot be accessed without initialization otherwise it will give 'referenceError'.|It cannot be accessed without initialization, as it cannot be declared without initialization.|
|Hoisted|Hoisted but stay in the temporal dead zone until the initialization|hoisted but stays in the temporal dead zone until the initialization.|

# 2.What is the spread operator (...)?
The spread operator is a feature of JavaScript introduced with ES6 that gives you access to the insides of an iterable object.

The spread operator effectively gives you access to all of the items inside these iterable objects.
Example:
```
const fruits = [
  'mango',
  'apple',
  'lichi'
];
const bar = [...fruits];

console.log(bar);
```

# Output:
 ```['mango','apple','lichi']```


# 3. What is the difference between map(), filter(), and forEach()?
|map()|filter()|forEach()|
|---|---|---|
|It Iterates over elements and perform an action |It Transforms each element and return a new array with the results.|It Selects elements that pass a test and return a new array with only those elements.|
|It returns undefined|Returns a new array of the same length as the original.|It returns new array containing only the elements that met the specified criteria (length may be different).|
|Cannot be chained with other array methods because it returns undefined. |Can be chained with other array methods like filter(), reduce(), etc.|Can be chained with other array methods.|

# 4.What is an arrow function?
An Arrow Function is a shorter way to write functions in JavaScript. It was introduced in ES6 (modern JavaScript) to make code cleaner and easier to read.

Arrow functions are always expressions and must be assigned to a variable.They cannot be used before they are defined.

Syntax comparison:

|Regular function|Arrow function|
|---|---|
|```var add = function(a, b) { return a + b; }```|```const add = (a, b) => a + b;```|
|```function sayHello(name) {return "Hello " + name;}```|```const sayHello = (name) => {return "Hello " + name;};```|

# 5.What are template literals?
Template Literals are a modern and easier way to work with text (strings) in JavaScript. They were introduced in ES6 to solve the "messiness" of joining text and variables together.

Instead of using single quotes ' ' or double quotes " ", you use backticks (the key usually found just above the Tab key: `).

Before Template Literals, if you wanted to combine a string with a variable, you had to use the plus sign +. This is called Concatenation.
|The Old Way (Messy)|The New Way (Clean)|
|---|---|
|```const name = "Liza";const age = 21;console.log("My name is " + name + " and I am " + age + " years old.");```|```const name = "Liza";const age = 21;console.log(`My name is ${name} and I am ${age} years old.`);```|
