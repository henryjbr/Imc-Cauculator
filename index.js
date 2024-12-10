
const form = document.getElementById('form')
let inph = document.getElementById('height')
let inpw = document.getElementById('weight')
let result = document.getElementById('restxt')
const clear = document.getElementById('clear')

form.addEventListener('submit', function(ev) {
    ev.preventDefault()
    calcIMC()
})

function calcIMC() {
    if(inph.value !== '' && inpw !== '') {
        const imc = (inpw.value / (inph.value * inph.value)).toFixed(2)
        let classification = ''
        if (imc < 18.5) {
            classification = 'imc: ' + '' + imc + ' -- Abaixo do peso'
        } else if (imc < 25) {
            classification = 'imc: ' + '' + imc + ' -- Peso normal'
        } else if (imc < 35) {
            classification = 'imc: ' + '' + imc + ' -- Obesidade grau I'
        } else if (imc < 41) {
           classification = 'imc: '  + '' + imc + ' -- Obesidade grau II'
        } else {
            classification = 'imc: ' + '' + imc + ' -- Obesidade grau III'
        }
        result.innerHTML = classification
    } else {
        result.innerHTML = '[ERROR] - enter the data' 
    }
} 

clear.addEventListener('click', function () {
    inph.value = ''
    inpw.value = ''
    result.textContent = 'Enter data to calculate...'
})