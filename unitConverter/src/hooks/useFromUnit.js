// hook to update from unit upon updation of physical quantity

import { useEffect, useState } from "react";

export default function useFromUnit(units)
{
    const [fromUnit, setFromUnit] = useState("g")

    useEffect(()=>{
        // upon updation of units list, set currently selected from unit to first
        setFromUnit(units[0])
        console.log("units[0]:", units[0])
    }, [units])

    return [fromUnit, setFromUnit]
}