let count = 0

let countEle = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

function increment() {
count += 1
countEle.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
console.log(count)
}

let welcomeEl = document.getElementById("welcome-el")

let name = "Piyush"
let greeting = "Welcome to our website "

welcomeEl.textContent = greeting + name

function reset() {
countEle.innerText = 0
count = 0
}




