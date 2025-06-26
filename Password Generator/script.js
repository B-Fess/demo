const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const specList = ["!", "@", "#", "$", "?", "&", "_", "-"]
const lower = ["q","w","e","r","t","y","u","i","o","p","l","k","j","h","g","f","d","s","a","z","x","c","v","b","n","m"]
const upper = ["Q","W","E","R","T","Y","U","I","O","P","L","K","J","H","G","F","D","S","A","Z","X","C","V","B","N","M"]

function passwordGenerator() {
    const num = document.getElementById("num").checked;
    const caps = document.getElementById("caps").checked;
    const special = document.getElementById("special").checked;
    const passLen = document.getElementById("passLen").value;
    
    const charList = []
    charList.push(...lower)

    if (num === true){
        charList.push(...numList)   
    }
    
    if (caps == true) {
        charList.push(...upper)
    }

    if (special == true){
        charList.push(...specList)
    }

    const pwd = []

    for (let i = 0; i < passLen; i++) {
        const randomIdx = Math.floor(Math.random() * charList.length)
        pwd.push(charList[randomIdx])
    }
    let password = pwd.join("")
    alert(password)
}
