import { useEffect, useState } from "react";

// hook to set the current physical quantity as the first from the list of physical quantities
export default function usePhysicalQuantity(physicalQuantities){

    // setting default just to avoid error, library gives error
    const [physicalQuantity, setPhysicalQuantity] = useState("mass")

    useEffect(()=>{
        console.log(physicalQuantities)
        setPhysicalQuantity(physicalQuantities[0])
    }, [physicalQuantities])

    return [physicalQuantity, setPhysicalQuantity]
}

