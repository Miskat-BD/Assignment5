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

