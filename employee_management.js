const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let employees = [
    { name: 'Alice', id: 'E101' },
    { name: 'Bob', id: 'E102' },
    { name: 'Charlie', id: 'E103' }
];

function showMenu() {
    console.log('\nEmployee Management System');
    console.log('1. Add Employee');
    console.log('2. List Employees');
    console.log('3. Remove Employee');
    console.log('4. Exit');

    rl.question('Enter your choice: ', (choice) => {
        handleUserChoice(choice.trim());
    });
}

function handleUserChoice(choice) {
    switch (choice) {
        case '1':
            addEmployee();
            break;
        case '2':
            listEmployees();
            break;
        case '3':
            removeEmployee();
            break;
        case '4':
            console.log('Exiting the application. Goodbye! 👋');
            rl.close();
            break;
        default:
            console.log('Invalid choice. Please enter a number between 1 and 4.');
            showMenu(); 
            break;
    }
}

function addEmployee() {
    rl.question('Enter employee name: ', (name) => {
        rl.question('Enter employee ID: ', (id) => {
            employees.push({ name: name.trim(), id: id.trim() });
            console.log(`Employee ${name} (ID: ${id}) added successfully.`);
            showMenu(); 
        });
    });
}

function listEmployees() {
    if (employees.length === 0) {
        console.log('No employees in the list.');
    } else {
        console.log('\nEmployee List:');
        employees.forEach((employee, index) => {
            console.log(`${index + 1}. Name: ${employee.name}, ID: ${employee.id}`);
        });
    }
    showMenu(); 
}

function removeEmployee() {
    rl.question('Enter employee ID to remove: ', (idToRemove) => {
        const indexToRemove = employees.findIndex(emp => emp.id === idToRemove.trim());

        if (indexToRemove !== -1) {
            const removedEmployee = employees.splice(indexToRemove, 1)[0];
            console.log(`Employee ${removedEmployee.name} (ID: ${removedEmployee.id}) removed successfully.`);
        } else {
            console.log(`Employee with ID ${idToRemove} not found.`);
        }
        showMenu(); 
    });
}

console.log('Welcome to the Employee Management System!');
showMenu();