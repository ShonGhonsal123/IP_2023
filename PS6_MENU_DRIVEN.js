function findGreatestAmongThreeNumbers() {
    const num1 = parseInt(prompt("Enter the first number:"));
    const num2 = parseInt(prompt("Enter the second number:"));
    const num3 = parseInt(prompt("Enter the third number:"));

    if (num1 >= num2 && num1 >= num3) {
        alert(`${num1} is the greatest among the three numbers.`);
    } else if (num2 >= num1 && num2 >= num3) {
        alert(`${num2} is the greatest among the three numbers.`);
    } else {
        alert(`${num3} is the greatest among the three numbers.`);
    }
}

function displayEvenNumbers() {
    let evenNumbers = "Even numbers less than 20: ";
    for (let i = 2; i < 20; i += 2) {
        evenNumbers += i + " ";
    }
    alert(evenNumbers);
}

function calculateAreaOfTriangle() {
    const base = parseFloat(prompt("Enter the base of the triangle:"));
    const height = parseFloat(prompt("Enter the height of the triangle:"));
    const area = 0.5 * base * height;
    alert(`The area of the triangle is: ${area}`);
}

function checkLeapYear() {
    const year = parseInt(prompt("Enter a year:"));
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        alert(`${year} is a leap year.`);
    } else {
        alert(`${year} is not a leap year.`);
    }
}

function displayTableOfNumberN() {
    const n = parseInt(prompt("Enter a number (N) to display its table:"));
    let table = `Table of ${n}:\n`;
    for (let i = 1; i <= 10; i++) {
        table += `${n} x ${i} = ${n * i}\n`;
    }
    alert(table);
}

function checkPerfectNumber() {
    const num = parseInt(prompt("Enter a number to check if it's a perfect number:"));
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum === num) {
        alert(`${num} is a perfect number.`);
    } else {
        alert(`${num} is not a perfect number.`);
    }
}

let choice;
do {
    choice = parseInt(prompt(`Menu:
1. Find greatest among three numbers
2. Display even numbers less than 20
3. Calculate area of a triangle
4. Check if a year is a leap year
5. Display a table of a number (N)
6. Check if a number is a perfect number
7. Exit
Enter your choice:`));

    switch (choice) {
        case 1:
            findGreatestAmongThreeNumbers();
            break;
        case 2:
            displayEvenNumbers();
            break;
        case 3:
            calculateAreaOfTriangle();
            break;
        case 4:
            checkLeapYear();
            break;
        case 5:
            displayTableOfNumberN();
            break;
        case 6:
            checkPerfectNumber();
            break;
        case 7:
            alert("Exiting the program.");
            break;
        default:
            alert("Invalid choice. Please select a valid option.");
    }
} while (choice !== 7);
