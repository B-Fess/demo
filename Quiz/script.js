const v1 = Math.floor(Math.random() * 10 + 3)
const v2 = Math.floor(Math.random() * 10 + 3)

const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const q3 = document.getElementById("q3")
const q4 = document.getElementById("q4")
const q5 = document.getElementById("q5")

q1.innerHTML = `${v1} + ${v2}?`
q2.innerHTML = `${v1} - ${v2}?`
q3.innerHTML = `${v1} x ${v2}?`
q4.innerHTML = `${v1} / ${v2}?`
q5.innerHTML = `${v1} ^ 0?`

const q1a1 = document.getElementById("labelQ1a1")
const q1a2 = document.getElementById("labelQ1a2")
const q1a3 = document.getElementById("labelQ1a3")

q1a1.innerHTML = `${Math.floor(Math.random() * 10 + 10)}`
q1a2.innerHTML = `${v1 + v2}`
q1a3.innerHTML = `${Math.floor(Math.random() * 10 + 5)}`

const q2a1 = document.getElementById("labelQ2a1")
const q2a2 = document.getElementById("labelQ2a2")
const q2a3 = document.getElementById("labelQ2a3")

q2a1.innerHTML = `${v1 - v2}`
q2a2.innerHTML = `${Math.floor(Math.random() * 10 + 5)}`
q2a3.innerHTML = `${Math.floor(Math.random() * 10 * -1)}`

const q3a1 = document.getElementById("labelQ3a1")
const q3a2 = document.getElementById("labelQ3a2")
const q3a3 = document.getElementById("labelQ3a3")

q3a1.innerHTML = `${(v1 * v2) - 8}`
q3a2.innerHTML = `${(v1 * v2) + 5}`
q3a3.innerHTML = `${v1 * v2}`

const q4a1 = document.getElementById("labelQ4a1")
const q4a2 = document.getElementById("labelQ4a2")
const q4a3 = document.getElementById("labelQ4a3")

q4a1.innerHTML = `${Math.round(((v1 / v2) - 0.25) * 100) / 100}`
q4a2.innerHTML = `${Math.round(((v1 / v2) + 0.91)* 100) / 100}`
q4a3.innerHTML = `${Math.round(v1 / v2 * 100) / 100}`


const q5a1 = document.getElementById("labelQ5a1")
const q5a2 = document.getElementById("labelQ5a2")
const q5a3 = document.getElementById("labelQ5a3")

q5a1.innerHTML = 0
q5a2.innerHTML = 1
q5a3.innerHTML = "Undefined"

function submit(){
    let score = 0

    let inputQ1 = document.querySelector('input[id="q1a2"]').checked
    let inputQ2 = document.querySelector('input[id="q2a1"]').checked
    let inputQ3 = document.querySelector('input[id="q3a3"]').checked
    let inputQ4 = document.querySelector('input[id="q4a3"]').checked
    let inputQ5 = document.querySelector('input[id="q5a2"]').checked

    if (inputQ1 == true){
        q1.innerHTML += " Correct"
        score ++
    }else{
        q1.innerHTML += " Incorrect"
    }

    if (inputQ2 == true){
        q2.innerHTML += " Correct"
        score ++
    }else{
        q2.innerHTML += " Incorrect"
    }
    if (inputQ3 == true){
        q3.innerHTML += " Correct"
        score ++
    }else{
        q3.innerHTML += " Incorrect"
    }
    if (inputQ4 == true){
        q4.innerHTML += " Correct"
        score ++
    }else{
        q4.innerHTML += " Incorrect"
    }
    if (inputQ5 == true){
        q5.innerHTML += " Correct"
        score ++
    }else{
        q5.innerHTML += " Incorrect"
    }
    alert(score)
    
}