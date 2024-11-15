var form = document.getElementById("converter-form");
var amountInput = document.getElementById("amount");
var currencySelect = document.getElementById("currency");
var result = document.getElementById("result");
var USD_TO_ARRIARY = 4000;
var EURO_TO_ARIARY = 4500;
function converCurrency(amount, currency) {
    var enArriary = 0;
    if (currency === "USD") {
        enArriary = amount * USD_TO_ARRIARY;
        return enArriary;
    }
    else if (currency === "EURO") {
        enArriary = amount * EURO_TO_ARIARY;
        return enArriary;
    }
    else
        return 0;
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var currency = currencySelect.value;
    var amount = parseFloat(amountInput.value);
    var res = converCurrency(amount, currency);
    result.textContent = "".concat(amount, " ").concat(currency, " = ").concat(res, " Ariary");
});
