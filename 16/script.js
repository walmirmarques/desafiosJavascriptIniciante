function sumNumbers(num1, num2){
    return num1 + num2;
}


let result = document.getElementById("sumNumbers");
result.addEventListener('click', function(event){
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let result = document.getElementById("result");

    let sum = sumNumbers(number1, number2);

    result.textContent = sum;
});


