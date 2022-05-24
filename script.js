
// Seleção dos elementos (DOM)
const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText

    }

}

// Eventos dos elementos da calculadora
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;  // pegando o elemento dos botões
         
        // lógica para separar as operações dos números
        if(+value >= 0 || value === ".") {
            console.log(value);
        } else {
            console.log("Op: " + value);
        }
       
    });
});
