function calculateLoan() {
    loanAmount = document.getElementById("loan-amount").value

    interestRate = document.getElementById("interest-rate").value

    monthsToPay = document.getElementById("months-to-pay").value

    interest = (loanAmount * (interestRate * 0.01) )

    monthlyPayment = ((loanAmount + interest)/monthsToPay).toFixed(2)

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`; 
}