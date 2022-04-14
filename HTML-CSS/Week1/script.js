//LONG VERSION
// const btn = document.querySelector("button");
// const body = document.querySelector("body");
// let check = false;

// function addDarkMode() {
//     body.classList.add("darkMode");
//     btn.textContent = "Light Mode";
// }

// function RemoveDarkMode() {
//     body.classList.remove("darkMode");
//     btn.textContent = "Dark Mode";
// }

// function handleBtn() {
//     check = !check
//     if (check === true) {
//         addDarkMode()
//     } else {
//         RemoveDarkMode()
//     }
// }

// btn.addEventListener("click", handleBtn);

//SHORTER VERSION
const btn = document.querySelector("button");
const body = document.querySelector("body");
let check = false;

function handleBtn() {
    check = !check
    body.classList.toggle("darkMode");
    if (check === true) {
        btn.textContent = "Light Mode";
    } else {
        btn.textContent = "Dark Mode";
    }
}

btn.addEventListener("click", handleBtn);