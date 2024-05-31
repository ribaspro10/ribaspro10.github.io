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
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addStudent();
});

// Carregar dados salvos do Local Storage ao iniciar
window.onload = loadStudents;

let students = [];

function addStudent() {
    const name = document.getElementById('name').value;
    const grade = document.getElementById('grade').value;
    const age = document.getElementById('age').value;

    if (name && grade && age) {
        students.push({ name, grade: parseFloat(grade), age: parseInt(age) });
        saveStudents();
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
    saveStudents();
    updateTable();
}

function sortByAge() {
    students.sort((a, b) => a.age - b.age);
    saveStudents();
    updateTable();
}

// Funções para salvar e carregar dados do Local Storage
function saveStudents() {
    localStorage.setItem('students', JSON.stringify(students));
}

function loadStudents() {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
        students = JSON.parse(savedStudents);
        updateTable();
    }
}
