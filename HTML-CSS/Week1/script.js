const btn = document.querySelector("button");
let check = false;

function addDarkMode() {
    document.querySelector("body").classList.add("darkMode");
    btn.textContent = "Light Mode";
}

function RemoveDarkMode() {
    document.querySelector("body").classList.remove("darkMode");
    btn.textContent = "Dark Mode";
}

function handleBtn() {
    check = !check
    if (check === true) {
        addDarkMode()
    } else {
        RemoveDarkMode()
    }
}

btn.addEventListener("click", handleBtn)