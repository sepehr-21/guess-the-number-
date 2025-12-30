// get html tags
const inputEL = document.querySelector('#guessNum')
const chanceEL = document.querySelector('.chance')
const hintEL = document.querySelector('.hint')
const guessEL = document.querySelector('.guess')
const resetBtn = document.querySelector('.reset')
const submitBtnEl = document.querySelector(".submitBtn")
const formEL = document.querySelector('form')

// basic variables
let randomNum = Math.trunc(Math.random()*20)+1
let chance = 5
chanceEL.textContent = `chance : ${chance}`
// create event
resetBtn.addEventListener("click", () => {
    chance = 5
    chanceEL.textContent = `chance : ${chance}`
    hintEL.textContent = ''
    guessEL.textContent  = ''
    randomNum = Math.trunc(Math.random()*20)+1
    submitBtnEl.disabled = false
    inputEL.disabled = false
})

formEL.addEventListener("submit" , (e) => {
    e.preventDefault()
    chance--
    chanceEL.textContent = `chance : ${chance}`
    const val = inputEL.value
    inputEL.value = ''
    guessEL.textContent+=`${val}-`
    if (randomNum==val)
    {
        hintEL.textContent = 'you win'
        inputEL.disabled = true
        submitBtnEl.disabled = true
    }
    else{
    if ( chance > 0 ){
            if ( randomNum > val ){
                hintEL.textContent = 'your guessed number should be higher'
            }
            else{
                hintEL.textContent = 'your guessed number should be lower'
            }}
        else{
                hintEL.textContent = `you lost and the random number was ${randomNum}`
                inputEL.disabled = true
                submitBtnEl.disabled = true
        }}    
})