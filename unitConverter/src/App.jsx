import { useState } from 'react'

// importing from convert-units library
// `allMeasures` includes all the measures packaged with the library
import configureMeasurements from 'convert-units';
import allMeasures from 'convert-units/definitions/all';

// importing custom hooks
import { usePhysicalQuantities, usePhysicalQuantity, useUnits, useFromUnit, useToUnit, useConvertedValue } from './hooks';
import { InputBox } from './components';

function App()
{

    const convert = configureMeasurements(allMeasures);

    // variables/states go here
    const physicalQuantities = usePhysicalQuantities(convert)   // list of physical quantities
    const [physicalQuantity, setPhysicalQuantity] = usePhysicalQuantity(physicalQuantities)     // the currently selected physical quantity
    const [units, setUnits] = useUnits(physicalQuantity, convert)       // list of units of currently selected physical quantity
    const [fromUnit, setFromUnit] = useFromUnit(units)   // the current selected from unit from the current list of units
    const [fromValue, setFromValue] = useState(0)       // the current entered from value
    const [toUnit, setToUnit] = useToUnit(units)   // the current selected to unit from the current list of units
    const [convertedValue, setConvertedValue] = useConvertedValue(convert, fromUnit, fromValue, toUnit)       // the current converted value

    // console.log(physicalQuantity)
    // console.log(units)
    // console.log(fromUnit)
    // console.log(fromValue)
    // console.log(toUnit)
    // console.log(convertedValue)
    // console.log(convertedValue)
    // console.log(convertedValue)
    // console.log(convertedValue)
    return (
        <>
            
            <div>

                {/* dropdown for selecting physical quantity */}
                <select
                    value={physicalQuantity}
                    onChange={(e)=>{setPhysicalQuantity(e.target.value)}}
                >

                    {physicalQuantities.map((pq)=>{
                        return(
                            <option
                                value={pq}
                                key={pq}
                            >
                                    {pq}
                            </option>
                        )
                    })}

                </select>

                {/* inputbox for From */}
                <InputBox 
                    label="From"
                    unit={fromUnit}
                    setUnit={setFromUnit}
                    units={units}
                    value={fromValue}
                    setValue={setFromValue}
                />

                {/* inputbox for To */}
                <InputBox 
                    label="To"
                    unit={toUnit}
                    setUnit={setToUnit}
                    units={units}
                    value={convertedValue}
                    inputDisable
                />


            </div>

        </>
    )
}

export default App
