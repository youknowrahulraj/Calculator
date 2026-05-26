let screen = document.getElementById("screen");
let buttons = document.querySelectorAll(".button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === "Clear") {
            expression = "";
            screen.innerText = "";
        } 
        else if (value === "=") {
            try {
                expression = eval(expression);
                screen.innerText = expression;
            } catch {
                screen.innerText = "Error";
            }
        } 
        else {
            expression += value;
            screen.innerText = expression;
        }
    });
});