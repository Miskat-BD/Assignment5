# Assignment5

### **1.What is the difference between var, let, and const?**
We used these for variable declare in JS
<br>
Var: This is a old version of JS. the problem of var is scope issue.
Example: var name = “Miskat”
	    Var name =”Rahim”
<br>
Let: We used it in maximum time. It is used in Modern JS. value can be changeable. <br>
Example: let age = 10;
age =20;  
Let age = 15(it is error, does not declare again)
<br>
Const: This is the most important of JS. Value is declared ai the same time. Its value is constant.<br>
Example: const a = 10;<br>
	 a = 5;(it is error, does not change the value)


<br>

### **2.What is the spread operator (...)?**
The spread operator can be used to expand an array or object. <br>
const num = [1, 2, 3]; <br>
const newNum = [...num, 4, 5]; <br>
console.log(newNum)  —> [1, 2, 3, 4, 5] (this return new array) <br>

<br>

### **3.What is the difference between map(), filter(), and forEach()?**
map(): Its can something and get new array <br>
Example: const a = [1, 2, 3]  <br>
	const  b = a.map(i => t * 2)   
	console.log(b) -> [2, 4, 6]  
filter(): It get new array depends on condition  <br>
Example: const a = [1, 2, 3, 4, 5]  <br>
	Const b = a.filter(i => i%2 === 0) 
	console.log(b) -> [2, 4]   
 <br>
forEach: It is a type of loop. It works in array and it does not return new array  <br>
Example: const a = [1, 2, 3, 4]  <br>
	a.forEach(el => {  <br>
		console.log(el)   <br>
})  <br>
Output:   <br>
1  <br>
2  <br>
3  <br>
4


<br>
 
### **4. What is an arrow function?**
Arrow function is a short function syntax <br>
Example:  <br>
Normal function: function add(num1, num2){ <br>
		Const result = num1 + num2; 
		Return result: 
		} 
 <br>  <br>
Arrow function: const add = (num1 , num2) =>{ <br>
		Const result = num1 + num2; <br>
		Return result; <br>
		} <br>  <br>
Arrow function(shortest way) : const add = (num1, num2) => num1 + num2:  <br>
This is automatically return the value;


<br>

### **5. What are template literals?**
Template literals can be used to use variables within strings. It is use with  backticks(``).  <br>
Example: const name = ‘miskat’;  <br>
	    Const age = 22;
 <br>
	console.log(`my name is ${name}, and i am ${age} years old`)
 <br>  
Output: my name is miskat, and i am 22 years old


