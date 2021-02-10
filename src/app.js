
// document.addEventListener("DOMContentLoaded", function() {

//     document.getElementById("myBtn").addEventListener("click", function() {
//         btnClick()
//     })
// })

function btnClick() {
    let num1 = document.getElementById("text1").value;
    let num2 = document.getElementById("text2").value;
    console.log("after",num1, num2);
    let sum = add(num1, num2);
    let product = multiply(num1,num2)
    document.getElementById('result').value = sum;
    document.getElementById('result').value += ", "+product;
    // document.getElementById('result').value = document.getElementById('result').value+", "+product;
}
function add(num1,num2) {
   let result = parseInt(num1)+parseInt(num2);
    console.log(result)
    return result;
    // alert(num1+num2)    
}
// add(num1,num2)

function multiply(num1, num2){
    let result = parseInt(num1)*parseInt(num2);
    console.log(result)
    return result;
    console.log(num1*num2);
}
multiply(5,7)

function subract(num1,num2) {
    console.log(num1-num2);    
}
subract(6,8)

function divide(num1, num2) {
    console.log(num1/num2)
}
