//various types of functions in java script
//1.NAMED function to represent addition 
function addition(n1,n2){
    console.log("NAMED function representing the addition of 1 and 2 = ",n1+n2);
}
addition(1,2);
//2.Arrow function to print multiplication
let mult=(n1,n2)=>{
    console.log("An arrow function representing the multiplication of 3 and 4 ",n1*n2);
}
mult(3,4)
//3. Anonymousfunctions to print any statement
const greet=function(){
    console.log("anonymous function");
}
// ----Java script builtin functions in strings

function string_builtin_fun(s1,s2){
    console.log("String built in functions in js");
    //1.charAt()
        console.log(s1.charAt(2));
        console.log(s2.charAt(1));
    // 2.indexOf()
         console.log(s1.indexOf('a'));
         console.log(s2.charAt('h'));
    //3.length
        console.log(s1.length);
        console.log(s2.length);
    //4.match
        console.log(s1.match(s2));
        console.log(s2.match('app'));
    //5.search
        console.log(s1.search('s'));
        console.log(s2.search('s'));
}
string_builtin_fun('dishitha','coapps');
//--number builtin function in java script
number=function(n1,n2){
    console.log("number built in functions in js");
    //1.toFixed-formats a nuo with a specified no.
        console.log(n1.toFixed(2))
    //2. valueOf
        console.log(n1.valueOf())
    //3.toString
        console.log(n2.toString(2))
    //4.toLocaleString
        console.log(n1.toLocaleString())
    //5.toPrecision
        console.log(n1.toPrecision())
}
number(1234.789,1345)
//--Boolean builtin function in js
boolean=()=>{
    // 1.Boolean
        console.log(Boolean(10>9));
}
boolean()
// additionally Java script has five builtin functions .
//1.eval = eval(expression)
console.log("Subtraction using eval function=",eval(10-5)); 
console.log(eval('2 + 2') === eval(new String('2 + 2')));
//2.parseInt = parseInt(string,radix)
console.log(parseInt('123', 10));
console.log(parseInt('ff', 16));//hexadecimal
//3. parseFloat = parseFloat(string)
console.log(parseFloat(234.675));
//4.escape
console.log(escape("äöü"));
console.log(escape("abc123"));
// 5. unescape
console.log(unescape("%26"));
console.log(unescape("ab%21%23"));
