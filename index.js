let currencyFrom = 'INR';
let currencyTo = 'USD';
let inputCurrencyFrom = 0;
let inputCurrencyTo = 0;

document.querySelector('#currency-from').addEventListener("change", function() {
    currencyFrom = document.querySelector('#currency-from').value;
})

document.querySelector('#currency-to').addEventListener("change", function() {
    currencyTo = document.querySelector('#currency-to').value;
})

document.querySelector('.input-currency-from').addEventListener("change", function() {
    inputCurrencyFrom = document.querySelector('.input-currency-from').value;
})

document.querySelector('.input-currency-to').addEventListener("change", function() {
    inputCurrencyTo = document.querySelector('.input-currency-to').value;
})

document.querySelector('.fa-balance-scale').addEventListener("click", function() {
    if(currencyFrom == 'INR') {
        if(currencyTo == 'INR') {
            document.querySelector('.input-currency-to').value = parseFloat(inputCurrencyFrom) * 1;            
        }
        else if(currencyTo == 'USD') {
            document.querySelector('.input-currency-to').value = parseFloat(inputCurrencyFrom) * 0.0138;
        }
        else if(currencyTo == 'EUR') {
            document.querySelector('.input-currency-to').value = parseFloat(inputCurrencyFrom) * 0.0113;
        }
    }

    else if(currencyFrom == 'USD') {
        if(currencyTo == 'INR') {
            document.querySelector('.input-currency-to').value = parseFloat(inputCurrencyFrom) * 72.518;            
        }
        else if(currencyTo == 'USD') {
            document.querySelector('.input-currency-to').value = parseFloat(inputCurrencyFrom) * 1;
        }
        else if(currencyTo == 'EUR') {
            document.querySelector('.input-currency-to').value = parseFloat(inputCurrencyFrom) * 0.8178;
        }
    }    

    else if(currencyFrom == 'EUR') {
        if(currencyTo == 'INR') {
            document.querySelector('.input-currency-to').value = parseFloat(inputCurrencyFrom) * 88.73;            
        }
        else if(currencyTo == 'USD') {
            document.querySelector('.input-currency-to').value = parseFloat(inputCurrencyFrom) * 1.228;
        }
        else if(currencyTo == 'EUR') {
            document.querySelector('.input-currency-to').value = parseFloat(inputCurrencyFrom) * 1;
        }
    }
})

