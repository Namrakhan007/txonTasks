var selectedRow = null;
const form = document.getElementById('form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["studentName"] = document.getElementById("studentName").value;
    formData["enrollementNo"] = document.getElementById("enrollementNo").value;
    formData["Address"] = document.getElementById("Address").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.studentName;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.enrollementNo;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Address;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<button onClick = 'onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('studentName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('enrollementNo').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Address').value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.studentName;
    selectedRow.cells[1].innerHTML = formData.enrollementNo;
    selectedRow.cells[2].innerHTML = formData.Address;
}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('studentList').deleteRow(row.rowIndex);
    }
    resetForm();
}

function resetForm() {
    selectedRow = null;
    document.getElementById('studentName').value = '';
    document.getElementById('enrollementNo').value = '';
    document.getElementById('Address').value = '';
}
