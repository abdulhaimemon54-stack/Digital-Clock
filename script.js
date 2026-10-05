// 1. #time wala element pakro
// 2. ek function banao jo abhi ka time lekar screen par dikhaye
// 3. setInterval se us function ko har 1000ms baad chalao

// 4. ghante ko 12 se % karo
// 5. agar ghanta 0 aaye to usay 12 kar do

let ampm = document.querySelector("timePara")
let time = document.querySelector("#time")
function currTime() {
    let d = new Date()
    let newTime1 = d.getHours()
    let newTime2 = d.getMinutes()
    let newTime3 = d.getSeconds()
    newTime1 = newTime1 % 12
    if (newTime1 === 0){
        newTime1 = 12
    }
    if (newTime3 < 10){
       newTime3 = "0" + newTime3
    }
    if (newTime2 < 10){
       newTime2 = "0" + newTime2
    }
    if (newTime1 < 10){
       newTime1 = "0" + newTime1
    }
    //Am/Pm Feature 
    time.innerText = `${newTime1}:${newTime2}:${newTime3}`
}
currTime()
setInterval(currTime, 1000)




















