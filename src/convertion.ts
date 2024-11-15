const form = document.getElementById("converter-form") as HTMLFormElement;
const amountInput = document.getElementById("amount") as HTMLInputElement;
const currencySelect = document.getElementById("currency") as HTMLSelectElement;
const result = document.getElementById("result") as HTMLParagraphElement;

const USD_TO_ARRIARY : number = 4000;
const EURO_TO_ARIARY : number = 4500;

function converCurrency(amount: number, currency: string) : number {
    let enArriary : number = 0;
    if (currency === "USD"){
        enArriary = amount * USD_TO_ARRIARY;
        return enArriary;
    } else if (currency === "EURO"){
        enArriary = amount * EURO_TO_ARIARY
        return enArriary;
    } else 
        return 0;
}
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const currency : string = currencySelect.value;
    const amount : number = parseFloat(amountInput.value);
    const res : number = converCurrency(amount, currency);
    result.textContent = `${amount} ${currency} = ${res} Ariary` 
})