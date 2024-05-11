import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    setAmount,
    inputDisable=false,
    currency,
    setCurrency,
    currencyOptions=[]
}
) {

    const inputId = useId()

    return (

        // div for input
        < div >

            <label
                htmlFor={inputId}
            >
                {label}
            </label>
            
            <input
                type="number"
                id={inputId}
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                disabled={inputDisable}
            />

            {/* select box for from currency */}
            <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
            >

                {/* now displaying options */}
                {/* need to include key too as per react */}
                {currencyOptions.map((opt) => {
                    return (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    )
                })}

            </select>

        </div >


    )
}

export default InputBox