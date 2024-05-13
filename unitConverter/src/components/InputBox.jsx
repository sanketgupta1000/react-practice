import React from 'react'

function InputBox({
    label,
    unit,
    setUnit,
    units,
    value,
    setValue,
    inputDisable=false
}) {
    return (

        <div>

            <label>{label} unit</label>

            {/* dropdown for from unit */}
            <select
                value={unit}
                onChange={(e) => { setUnit(e.target.value) }}
            >

                {units.map((unit) => {
                    return (
                        <option key={unit} value={unit}>
                            {unit}
                        </option>
                    )
                })}

            </select>

            <label>{label} value</label>

            {/* input for from value */}
            <input
                type="number"
                value={value}
                onChange={(e) => { setValue && setValue(e.target.value) }}
                readOnly={inputDisable}
            />

        </div>

    )
}

export default InputBox