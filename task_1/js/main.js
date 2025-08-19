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
        alert("Неправильний формат! Використовуйте лише букви та цифри: населений пункт = назва");
        return;
    }

    nameValuePairs.push(result);
    updateList();
    document.getElementById("city").value = "";
}

function updateList() {

    let list = document.getElementById("nameValueList");
    list.innerText = "";
    for (let i = 0; i < nameValuePairs.length; i++) {
        let pair = nameValuePairs[i];
        let li = document.createElement("li");
        li.innerText = `${pair.name} = ${pair.value}`;
        li.onclick = () => li.classList.toggle("selected");
        list.appendChild(li);}
}

function sortBy(key) {
    nameValuePairs.sort((a, b) => {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        return 0;
    });
    updateList();
}

sortBy("name");
sortBy("value");


function deleteSelected() {
    const list = document.getElementById("nameValueList");
    const items = Array.from(list.children);

    items.forEach((li, index) => {
        if (li.classList.contains("selected")) {

            nameValuePairs.splice(index, 1);
        }
    });

    updateList();
}




