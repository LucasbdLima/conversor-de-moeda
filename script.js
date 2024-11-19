
const convertButton = document.querySelector("#button")
const currencySelect = document.querySelector("#currency-select")
const currencySelectToConvert = document.querySelector("#currency-select-to-convert")

function convertValues(){
    const inputCurrencyValue = document.querySelector("#value-input").value
    const currencyValueToConvert = document.querySelector("#currency-value-to-convert")
    const currencyValueConverted = document.querySelector("#currency-value")
    
    const realToday = 1.0
    const dolarToday = 5.75
    const euroToday = 6.09
    const libraToday = 7.28
    const bitcoinToday = 523807.69

    //REAL

    if(currencySelectToConvert.value == "real" & currencySelect.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToday)
    }
    if(currencySelectToConvert.value == "real" & currencySelect.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToday)
    }
    if(currencySelectToConvert.value == "real" & currencySelect.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    }
    if(currencySelectToConvert.value == "real" & currencySelect.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue/libraToday)
    }
    if(currencySelectToConvert.value == "real" & currencySelect.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue/bitcoinToday)
    }


    //DOLAR

    
    if(currencySelectToConvert.value == "dolar" & currencySelect.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(dolarToday/realToday * inputCurrencyValue)
    }
    if(currencySelectToConvert.value == "dolar" & currencySelect.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if(currencySelectToConvert.value == "dolar" & currencySelect.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(dolarToday/euroToday * inputCurrencyValue)
    }
    if(currencySelectToConvert.value == "dolar" & currencySelect.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(dolarToday/libraToday * inputCurrencyValue)
    }
    if(currencySelectToConvert.value == "dolar" & currencySelect.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(dolarToday/bitcoinToday * inputCurrencyValue)
    }



    //EURO


    
    if(currencySelectToConvert.value == "euro" & currencySelect.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(euroToday/realToday * inputCurrencyValue)
    }
    if(currencySelectToConvert.value == "euro" & currencySelect.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(euroToday/dolarToday * inputCurrencyValue)
    }
    if(currencySelectToConvert.value == "euro" & currencySelect.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if(currencySelectToConvert.value == "euro" & currencySelect.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(euroToday/libraToday * inputCurrencyValue)
    }
    if(currencySelectToConvert.value == "euro" & currencySelect.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(euroToday/bitcoinToday * inputCurrencyValue)
    }



    //LIBRA


    
    if(currencySelectToConvert.value == "libra" & currencySelect.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(libraToday/realToday * inputCurrencyValue)
    }
    if(currencySelectToConvert.value == "libra" & currencySelect.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(libraToday/dolarToday * inputCurrencyValue)
    }
    if(currencySelectToConvert.value == "libra" & currencySelect.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(libraToday/euroToday * inputCurrencyValue)
    }
    if(currencySelectToConvert.value == "libra" & currencySelect.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
    if(currencySelectToConvert.value == "libra" & currencySelect.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(libraToday/bitcoinToday * inputCurrencyValue)
    }


    //BITCOIN

    
    if(currencySelectToConvert.value == "bitcoin" & currencySelect.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(bitcoinToday/realToday * inputCurrencyValue)
    }
    if(currencySelectToConvert.value == "bitcoin" & currencySelect.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(bitcoinToday/dolarToday * inputCurrencyValue)
    }
    if(currencySelectToConvert.value == "bitcoin" & currencySelect.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(bitcoinToday/euroToday * inputCurrencyValue)
    }
    if(currencySelectToConvert.value == "bitcoin" & currencySelect.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(bitcoinToday/libraToday * inputCurrencyValue)
    }
    if(currencySelectToConvert.value == "bitcoin" & currencySelect.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue); currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector("#currency-img")


    if (currencySelect.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
    }
    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }
    
    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }
    convertValues()
}

function changeCurrencyToConvert(){
    const currencyImgToConvert = document.querySelector("#currency-img-to-convert")
    const currencyNameToConvert = document.querySelector("#currency-name-to-convert")

    if (currencySelectToConvert.value == "real"){
        currencyNameToConvert.innerHTML = "Real"
        currencyImgToConvert.src = "./assets/real.png"
    }
    if (currencySelectToConvert.value == "dolar"){
        currencyNameToConvert.innerHTML = "Dólar Americano"
        currencyImgToConvert.src = "./assets/dolar.png"
    }
    if (currencySelectToConvert.value == "euro"){
        currencyNameToConvert.innerHTML = "Euro"
        currencyImgToConvert.src = "./assets/euro.png"
    }
    if (currencySelectToConvert.value == "libra"){
        currencyNameToConvert.innerHTML = "Libra"
        currencyImgToConvert.src = "./assets/libra.png"
    }
    
    if (currencySelectToConvert.value == "bitcoin"){
        currencyNameToConvert.innerHTML = "Bitcoin"
        currencyImgToConvert.src = "./assets/bitcoin.png"
    }
    convertValues()

}

currencySelectToConvert.addEventListener("change", changeCurrencyToConvert)
currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click",convertValues)