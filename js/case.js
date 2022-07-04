let uButton = document.getElementById("uppercase");
let lButton = document.getElementById("lowercase");
let sButton = document.getElementById("sentencecase");
let pButton = document.getElementById("propercase");

uButton.addEventListener("click", upperCase);
lButton.addEventListener("click", lowerCase);
sButton.addEventListener("click", sentenceCase);
pButton.addEventListener("click", properCase);

function upperCase() {
    let input = document.querySelector("textarea");
    input.value = input.value.toUpperCase();
}

function lowerCase() {
    let input = document.querySelector("textarea");
    input.value = input.value.toLowerCase();
}

function sentenceCase() {
    let input = document.querySelector("textarea");
    let str = input.value;

    let store = str.split(".");

    let holder = [];

    for (let index = 0; index < store.length; index++) {
        subStr = store[index].trim();
        charSubStr = subStr.slice(0, 1).toUpperCase();
        remSubStr = subStr.slice(1);
        newSubStr = charSubStr + remSubStr;
        holder.push(newSubStr);
    }

    let newStr = holder.join(". ");
    input.value = newStr;
}

function properCase() {
    let input = document.querySelector("textarea");
    let str = input.value;

    let store = str.split(" ");

    let holder = [];

    for (let index = 0; index < store.length; index++) {
        let word = store[index].trim();
        let charWord = word.slice(0, 1).toUpperCase();
        let remWord = word.slice(1);
        let newWord = charWord + remWord;
        holder.push(newWord);
    }

    let newStr = holder.join(" ");
    input.value = newStr;
}