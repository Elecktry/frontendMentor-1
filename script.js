//Pegando os elementos do cartão pelo forms, para colocar no cartão 
function getElementsrCard() {
    var formNumber = document.querySelector('.cartao')

    var nameCard = document.querySelector('.name')

    var cvv = document.querySelector('.cvv')

    var mounth = document.querySelector('.mes')

    var years = document.querySelector('.ano')

    var maskOptions = {
        mask: '0000 0000 0000 0000'

    };

    var mask = IMask(formNumber, maskOptions)




    //Evento de reescrever no cartão
    formNumber.addEventListener("input", () => {

        var number = document.getElementById('floatingcartao').value


        var escrNum = document.getElementById('escrNum')


        escrNum.innerHTML = number


        localStorage.setItem('numeroCard', number)

    })
    //Evento de reescrever no cartão
    nameCard.addEventListener("input", () => {

        var nameCardForm = document.getElementById('floatingName').value


        var escrName = document.getElementById('escrName')


        escrName.innerHTML = nameCardForm

        localStorage.setItem('nameCard', nameCardForm)

    })
    //Evento de reescrever no cartão
    cvv.addEventListener("input", () => {

        var cvvCard = document.getElementById('floatingcvv').value


        var escrcvv = document.getElementById('escrcvv')


        escrcvv.innerHTML = cvvCard

        localStorage.setItem('cvv', cvvCard)

    })
    //Evento de reescrever no cartão
    mounth.addEventListener("input", () => {

        var mes = document.getElementById('floatingMounth').value

        var escrmes = document.getElementById('escrmes')


        escrmes.innerHTML = mes

        localStorage.setItem('mounth', mes)

    })
    //Evento de reescrever no cartão
    years.addEventListener("input", () => {

        var ano = document.getElementById('floatingYears').value
        var escrano = document.getElementById('escrano')


        escrano.innerHTML = ano




        localStorage.setItem('years', ano)

    })


}

//btn voltar para pagina inicial
function voltarHome() {
    s
    window.location.href = './index.html'
}
//btn ir para pagina de agradecimento
function redirecioanar() {
    window.location.href = './thanks.html'
}
//Eeescrevendo no cartão na pagina de agradecimento usando o localstorage
window.onload = function reescreverNumero() {
    //Numero do cartão
    var escrNum = document.getElementById('escrNum')
    escrNum.innerHTML = localStorage.numeroCard

    //Nome do cartão
    var escrName = document.getElementById('escrName')
    escrName.innerHTML = localStorage.nameCard

    //Mês do cartão
    var escrmes = document.getElementById('escrmes')
    escrmes.innerHTML = localStorage.mounth

    //Ano do cartão
    var escrano = document.getElementById('escrano')
    escrano.innerHTML = localStorage.years

    //Cvv do cartão
    var escrcvv = document.getElementById('escrcvv')
    escrcvv.innerHTML = localStorage.cvv
}
