'use strict';

let nameValuePairs = [];

function validateInput(input) {
    input = input.trim();
    if (!input.includes("=")) return false;

    let [name, value] = input.split("=").map(s => s.trim());

    const isValid =/^[\p{L}0-9]+$/u.test(name) && /^[\p{L}0-9]+$/u.test(value);

    return isValid ? { name, value } : false;
}

function addPair() {
    let input = document.getElementById("city").value;
    let result = validateInput(input);

    if (!result) {
        alert("Неправильний формат! Використовуйте лише букви та цифри: ім'я = значення");
        return;
    }

    nameValuePairs.push(result);
    updateList();
    document.getElementById("city").value = "";
}

function updateList() {
    let list = document.getElementById("nameValueList");
    list.innerHTML = "";
    nameValuePairs.forEach(pair  => {
        let li = document.createElement("li");
        li.textContent = `${pair.name} = ${pair.value}`;
        li.onclick = () => li.classList.toggle("selected");
        list.appendChild(li);
    });
}

function sortByName() {
     let sortName = nameValuePairs.sort((a, b) => {
        if(a.name < b.name){return 1;}
        if(a.name > b.name){return -1;}
        if(a.name === b.name){return 0;} });
    updateList(sortName);
}

function sortByValue() {
     let sortValue = nameValuePairs.sort((a, b) => {
        if(a.value < b.value){return 1;}
        if(a.value> b.value){return -1;}
        if(a.value === b.value){return 0;} });
    updateList(sortValue);
}

function deleteSelected() {
    let listItems = document.querySelectorAll('#nameValueList li.selected');
    nameValuePairs = nameValuePairs.filter((_, index) => !listItems[index]);
    updateList();
}

