class Accholder {
    constructor(accnum, name, age, balance) {
        this.accnum = accnum;
        this.name = name;
        this.age = age;
        this.balance = balance;
    }

    display() {
        console.log(`Account Number: ${this.accnum}`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Balance: $${this.balance}`);
    }
}

class Calculator {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}

class RectArea extends Calculator {
    constructor(length, width) {
        super(length, width);
    }

    calculateArea() {
        return this.length * this.width;
    }
}

class CircleArea extends RectArea {
    constructor(radius) {
        super(radius, radius);
    }

    calculateArea() {
        return Math.PI * Math.pow(this.length, 2);
    }
}

class CheckNum {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
}

class CheckNeonSpy extends CheckNum {
    constructor(num1, num2) {
        super(num1, num2)
    }

    CheckNeon() {
        const sum = this.num1 + this.num2;
        const squaredSum = sum * sum;
        const numSquared = this.num1 * this.num1;
        return squaredSum === numSquared;
    }

    CheckSpy() {
        const concatenated = `${this.num1}${this.num2}`;
        const product = this.num1 * this.num2;
        return concatenated == product;
    }
}

// Function to create and display account holders
function createAccountHolders() {
    const accHolder1 = new Accholder(1, "John Doe", 30, 1000);
    const accHolder2 = new Accholder(2, "Jane Smith", 25, 1500);

    console.log("Account Holder 1 Details:");
    accHolder1.display();
    console.log("\nAccount Holder 2 Details:");
    accHolder2.display();
}

// Function to calculate and display areas
function calculateAreas() {
    const length = parseFloat(prompt("Enter length of the rectangle: "));
    const width = parseFloat(prompt("Enter width of the rectangle: "));
    const radius = parseFloat(prompt("Enter the radius of the circle: "));

    const rectangle = new RectArea(length, width);
    const circle = new CircleArea(radius);

    console.log(`Area of Rectangle: ${rectangle.calculateArea()}`);
    console.log(`Area of Circle: ${circle.calculateArea()}`);
}

// Function to check Neon and Spy numbers
function checkNeonSpyNumbers() {
    const num1 = parseInt(prompt("Enter the first number: "));
    const num2 = parseInt(prompt("Enter the second number: "));

    const checkNum = new CheckNeonSpy(num1, num2);

    if (checkNum.CheckNeon()) {
        console.log("The sum of the numbers squared is equal to the square of the first number.");
    } else {
        console.log("The numbers are not Neon numbers.");
    }

    if (checkNum.CheckSpy()) {
        console.log("The product of the numbers is equal to their concatenation.");
    } else {
        console.log("The numbers are not Spy numbers.");
    }
}

// Main menu
while (true) {
    console.log("\nMenu:");
    console.log("1. Create Account Holders");
    console.log("2. Calculate Areas");
    console.log("3. Check Neon and Spy Numbers");
    console.log("4. Exit");

    const choice = parseInt(prompt("Enter your choice:"));

    switch (choice) {
        case 1:
            createAccountHolders();
            break;
        case 2:
            calculateAreas();
            break;
        case 3:
            checkNeonSpyNumbers();
            break;
        case 4:
            console.log("Exiting the program.");
            process.exit();
        default:
            console.log("Invalid choice. Please choose a valid option.");
    }
}
