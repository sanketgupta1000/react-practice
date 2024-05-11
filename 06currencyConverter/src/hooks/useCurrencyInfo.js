import {useEffect, useState} from "react"

// will take 'from' currency variable in argument, upon change of which, need to do an api call and fill in a variable
// this function will be called only once, and it will return the 'data' which will keep changing w.r.t the fromCurrency
function useCurrencyInfo(fromCurrency)
{

    // useState for a data variable, since we may need to update list in UI upon call
    const [data, setData] = useState({})

    useEffect(()=>{
        // fetching from api
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
        .then((resp)=>resp.json())
        .then((obj)=>setData(obj[fromCurrency]))
        // console.log(data)
    }, [fromCurrency])
    // currency is a dependency, since when it changes, need to fetch again, and set the data, which will update in UI too, if we are careful
    // console.log(data)
    return data
}

export default useCurrencyInfo