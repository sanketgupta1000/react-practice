// hook to handle updation of unit list upon updation of physical quantity

import { useEffect, useState } from "react";

export default function useUnits(physicalQuantity, convert)
{
    const [units, setUnits] = useState(['g', 'kg'])

    useEffect(()=>{
        setUnits(convert().possibilities(physicalQuantity))
    }, [physicalQuantity])

    return [units, setUnits]
}