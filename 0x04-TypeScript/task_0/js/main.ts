// main.ts

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Array containing the two students
const studentsList: Student[] = [student1, student2];

// Create a table
const table = document.createElement("table");

// Create table header
const headerRow = document.createElement("tr");

const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Populate table rows with student data
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append table to document body
document.body.appendChild(table);
