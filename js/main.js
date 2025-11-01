var darkModeBtn = document.querySelector("button");
var body = document.querySelector("body");
console.log(darkModeBtn ,body );

function darkMode(){
    body.classList.add("darkmode");
}

darkModeBtn.onclick = darkMode;