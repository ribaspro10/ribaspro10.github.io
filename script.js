document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addStudent();
});

let students = [];

function addStudent() {
    const name = document.getElementById('name').value;
    const grade = document.getElementById('grade').value;
    const age = document.getElementById('age').value;

    if (name && grade && age) {
        students.push({ name, grade: parseFloat(grade), age: parseInt(age) });
        updateTable();
    }
}

function updateTable() {
    const tbody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    students.forEach(student => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = student.name;
        row.insertCell(1).textContent = student.grade;
        row.insertCell(2).textContent = student.age;
    });
}

function sortByGrade() {
    students.sort((a, b) => b.grade - a.grade);
    updateTable();
}

function sortByAge() {
    students.sort((a, b) => a.age - b.age);
    updateTable();
}
