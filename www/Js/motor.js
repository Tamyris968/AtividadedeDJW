var primeirovalor
var segundovalor
var resultado
function somar() {
    primeirovalor = document.getElementByTd('primeironumero').value
    segundovalor = document.getElementByTd('segundonumero').value

    resultado = parseFloat=(primeirovalor) + parseFloat(segundovalor)

    alert(resultado)
}