let resultados = document.getElementById('resultados')
const botoesNumeros = document.querySelectorAll('.numeros button')
const botoesOperadores = document.querySelectorAll('.operadores button')
const soOperadores = Array.from(botoesOperadores).slice(0, 5)
const botaoC = document.querySelector('.operadores button:nth-child(7)')
const botaoIgual = document.querySelector('.operadores button:nth-child(6)')


botoesNumeros.forEach(function(botaoClicado){
    botaoClicado.addEventListener('click', function(){
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
})

botaoIgual.addEventListener('click', function() {
    resultados.innerText = eval(resultados.innerText)
})