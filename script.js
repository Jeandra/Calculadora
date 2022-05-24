
// Seleção dos elementos (DOM)
const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }
    // add digit to calculator screen
    addDigit(digit) {
        // CHECK if current operation already has a dot
        if (digit === "." && this.currentOperationText.innerText.includes(".")){
            return;
        }
        this.currentOperation = digit;
        this.updateScreen();
    }
    // process all calculator operations
    processOperation(operation){
        

        //Get current and previous value
        let operationValue;
        let previous = +this.previousOperationText;
        let current = +this.currentOperationText.innerText;
    }
    
    // Change values of the calculator screen
    updateScreen() {
        this.currentOperationText.innerText += this.currentOperation;
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

// Eventos dos elementos da calculadora
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;  // pegando o elemento dos botões
         
        // lógica para separar as operações dos números
        if(+value >= 0 || value === ".") {
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }      
    });
});
