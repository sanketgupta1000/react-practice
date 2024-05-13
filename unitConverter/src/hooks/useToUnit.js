// hook to update to unit upon updation of physical quantity

import { useEffect, useState } from "react";

export default function useToUnit(units)
{
    const [toUnit, setToUnit] = useState("kg")

    useEffect(()=>{
        // upon updation of units list, set currently selected to unit to second
        setToUnit(units[1])
    }, [units])

    return [toUnit, setToUnit]
}