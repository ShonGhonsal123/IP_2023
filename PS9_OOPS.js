class Student {
    constructor(Student_name, roll_no, age, branch) {
      this.Student_name = Student_name;
      this.roll_no = roll_no;
      this.age = age;
      this.branch = branch;
    }
  
    display() {
      console.log(`Student Name: ${this.Student_name}`);
      console.log(`Roll Number: ${this.roll_no}`);
      console.log(`Age: ${this.age}`);
      console.log(`Branch: ${this.branch}`);
    }
  }
  
  function addStudentDetails() {
    const student1 = new Student("John Doe", 101, 20, "Computer Science");
    const student2 = new Student("Jane Smith", 102, 22, "Electrical Engineering");
  
    console.log("Student 1 Details:");
    student1.display();
  
    console.log("\nStudent 2 Details:");
    student2.display();
  }
  
  function main() {
    while (true) {
      console.log("\nMENU:");
      console.log("1. Add Student Details and Display");
      console.log("2. Exit");
  
      const choice = parseInt(prompt("Enter your choice:"));
  
      switch (choice) {
        case 1:
          addStudentDetails();
          break;
        case 2:
          console.log("Exiting the program.");
          return;
        default:
          console.log("Invalid choice. Please try again.");
      }
    }
}
  
main();