let numbers = [5, 7, 1, 8, 9]

let numbersSort = numbers.sort((a, b) => b - a);

document.getElementById("resultado").textContent = numbersSort;