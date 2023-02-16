window.onload = function getNumberCard() {
    var formNumber = document.querySelector('.cartao')

    var nameCard = document.querySelector('.name')

    var cvv = document.querySelector('.cvv')

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

    nameCard.addEventListener("input", () => {

        var  nameCardForm = document.getElementById('floatingName').value


        var escrName = document.getElementById('escrName')

        
            escrName.innerHTML = nameCardForm
        
      

    })

    cvv.addEventListener("input", () => {

        var  cvvCard = document.getElementById('floatingcvv').value


        var escrcvv = document.getElementById('escrcvv')

        
            escrcvv.innerHTML = cvvCard
        
      

    })

}





