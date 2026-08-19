
let resultados = document.getElementById('resultados')
const botoesNumeros = document.querySelectorAll('.numeros button')
const botoesOperadores = document.querySelectorAll('.operadores button')
const soOperadores = Array.from(botoesOperadores).slice(0, 5)
const botaoC = document.querySelector('.operadores button:nth-child(7)')
const botaoIgual = document.querySelector('.operadores button:nth-child(6)')
let contaFinalizada = false
let expressaoAnterior = ''

botoesNumeros.forEach(function(botaoClicado){
    
    botaoClicado.addEventListener('click', function(){
        if (contaFinalizada === true) {
            resultados.innerText = ''
            contaFinalizada = false
        }
        resultados.innerText += botaoClicado.textContent
    })
})

soOperadores.forEach(function(botaoClicado){
    botaoClicado.addEventListener('click', function() {
        resultados.innerText += botaoClicado.textContent
    })
})

botaoC.addEventListener('click', function() {
    resultados.innerText = ''
    contaFinalizada = false
    expressaoAnterior = ''
})

botaoIgual.addEventListener('click', function() {
    let verificar = resultados.innerText[resultados.innerText.length - 1]
    if (verificar === '+' || verificar === '-' || verificar === '*' || verificar === '/') {
        alert('A expressão não pode terminar com um operador.')
    } else if (contaFinalizada === false) {
        expressaoAnterior = resultados.innerText 
        resultados.innerText = calcular(resultados.innerText)
        contaFinalizada = true
    } else if (contaFinalizada === true) {
        resultados.innerText = expressaoAnterior
        contaFinalizada = false
    } 
}) 

function calcular(expressao) {
    if (expressao.includes('+')) {
        let partes = expressao.split('+')
        return partes.reduce((acc, numero) => acc + Number(numero), 0)
    } else if (expressao.includes('-')) {
        let partes = expressao.split('-')
        return partes.reduce((acc, numero) => acc - Number(numero))
    } else if (expressao.includes('*')) {
        let partes = expressao.split('*')
        return partes.reduce((acc, numero) => acc * Number(numero), 1)
    } else if (expressao.includes('/')) {
        let partes = expressao.split('/')
        return partes.reduce((acc, numero) => acc / Number(numero))
    }
}
