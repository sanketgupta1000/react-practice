import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App()
{

    // variables go here
    
    // these variables can be simply thought of from the UI we want to build.
    // think of each variable as associated to an input field
    const [fromCurrency, setFromCurrency] = useState("usd")
    const [fromAmount, setFromAmount] = useState(0)
    const [toCurrency, setToCurrency] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)
    // object for list of available currencies and conversion rates to them fetched
    const currencyInfo = useCurrencyInfo(fromCurrency)

    // list of currency options
    const currencyOptions = Object.keys(currencyInfo)

    // console.log(currencyOptions)

    return (
        <>

            <h1>Currency Converter</h1>
            
            {/* main div */}
            <div>

                {/* input box for from currency */}
                <InputBox
                    label="From"
                    amount={fromAmount}
                    setAmount={setFromAmount}
                    currency={fromCurrency}
                    setCurrency={setFromCurrency}
                    currencyOptions={currencyOptions}
                />

                <InputBox
                    label="To"
                    amount={convertedAmount}
                    setAmount={setConvertedAmount}
                    currency={toCurrency}
                    setCurrency={setToCurrency}
                    currencyOptions={currencyOptions}
                    inputDisable
                />

                <button
                    onClick={()=>{
                        setConvertedAmount(fromAmount*currencyInfo[toCurrency])
                    }}
                >
                    Convert {fromCurrency} to {toCurrency}
                </button>

                {/* button to swap */}
                <button
                    onClick={()=>{
                        setFromCurrency(toCurrency)
                        setToCurrency(fromCurrency)
                        setFromAmount(convertedAmount)
                        setConvertedAmount(fromAmount)
                    }}
                >
                    Swap
                </button>
                
            </div>

        </>
    )
}

export default App
