// hook to update converted value upon updation of fromUnit, fromValue, toUnit

import { useEffect, useState } from "react";

export default function useConvertedValue(convert, fromUnit, fromValue, toUnit)
{
    const [convertedValue, setConvertedValue] = useState(0)

    useEffect(()=>{
        console.log("convertedValue previous: ",convertedValue)
        console.log("from value: ", fromValue)
        console.log("from unit: ", fromUnit)
        console.log("to unit: ", toUnit)
        setConvertedValue(convert(Number(fromValue)).from(fromUnit).to(toUnit))
    }, [fromUnit, fromValue, toUnit])

    return [convertedValue, setConvertedValue]
}