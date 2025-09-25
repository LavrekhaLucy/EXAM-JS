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
        const valueA = a[key];
        const valueB = b[key];

        const numberA = Number(valueA);
        const numberB = Number(valueB);

        if (!isNaN(numberA) && !isNaN(numberB)) {
            return numberA - numberB;
        }
        return String(valueA).localeCompare(String(valueB));
    });

    updateList();
}

function deleteSelected() {
    const list = document.getElementById("nameValueList");
    const items = Array.from(list.children);

    // for (let i =  items.length - 1; i >= 0; i--) {
    //    if(items[i].classList.contains("selected")){
    //        nameValuePairs.splice(i, 1);
    //    }
    //
    // }

    nameValuePairs = nameValuePairs.filter((_, i) => !items[i].classList.contains("selected"));

    updateList();
}




