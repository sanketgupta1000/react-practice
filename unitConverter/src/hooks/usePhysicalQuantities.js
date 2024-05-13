import {useEffect, useState} from "react"

// hook to fetch list of physical quantities on page load
export default function usePhysicalQuantities(convert){

    // state for list of physical quantities
    const [physicalQuantities, setPhysicalQuantities] = useState(['mass'])

    // useEffect
    useEffect(()=>{
        setPhysicalQuantities(convert().measures())
    }, [])

    return physicalQuantities

}