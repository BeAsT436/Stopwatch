// Оголосити змінні:
    let seconds = 0
   const clearButton = document.querySelector("#clearButton")
   const stopButton = document.querySelector("#stopButton")
   const startButton = document.querySelector("#startButton")
   let timer 

function updateTimer(s){
    seconds++
    document.querySelector("#timer").innerText = seconds
}
   

function startTimer(s){
    setInterval(updateTimer, 1000) 
}

function stopTimer(s){
    clearInterval(timer)
    console.log(timer);
}
   

function clearTimer(s){
    clearInterval(timer) 
    seconds = 0
    document.querySelector("#timer").innerText = seconds
}
   

// Коли кнопка "Start" натиснута:
//    Викликаємо startTimer()
startButton.addEventListener("click",()=>{
    startTimer()
})

// Коли кнопка "Stop" натиснута:
//    Викликаємо stopTimer()
stopButton.addEventListener("click",()=>{
    stopTimer()
    console.log("no");

})

// Коли кнопка "Clear" натиснута:
//    Викликаємо clearTimer()
clearButton.addEventListener("click",()=>{
    clearTimer()
})
