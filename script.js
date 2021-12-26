'use strict';
document.getElementById('add').addEventListener('click', function () {
    let first_name = document.getElementById('fname');
    let last_name = document.getElementById('lname');
    let address = document.getElementById('address');
    let pincode = document.getElementById('pincode');
    let gender = document.getElementById('gender');
    let food = document.getElementById('food');
    let state = document.getElementById('state');

    let table = document.getElementById('table_of_information');
    let row_count = table.rows.length;
    let row = table.insertRow(row_count);
    row.insertCell(0).innerHTML = '<input type="button" value="Delete" onClick="delete_row(this)">';
    row.insertCell(1).innerHTML = first_name.value;
    row.insertCell(2).innerHTML = last_name.value;
    row.insertCell(3).innerHTML = address.value;
    row.insertCell(4).innerHTML = pincode.value;
    row.insertCell(5).innerHTML = gender.value;
    row.insertCell(6).innerHTML = food.value;
    row.insertCell(7).innerHTML = state.value
});

function delete_row() {
    document.getElementById('table_of_information').deleteRow(1);
}       