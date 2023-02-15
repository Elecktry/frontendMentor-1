window.onload = function getNumberCard() {
    var formNumber = document.querySelector('.cartao')

    var maskOptions = {
        mask: '0000 0000 0000 0000'

    };




    var mask = IMask(formNumber, maskOptions)

    formNumber.addEventListener("input", () => {

        var number = document.getElementById('floatingcartao').value


        var escrNum = document.getElementById('escrNum')

        
            escrNum.innerHTML = number
        
        console.log(number)

    })

}





