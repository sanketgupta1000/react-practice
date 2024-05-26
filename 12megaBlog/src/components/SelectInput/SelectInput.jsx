// will create a general select field as a component

import { forwardRef, useId } from "react"

const SelectInput = forwardRef(function ({
    label,
    options,
    className = "",
    ...props
}, ref)
{
    // id to connect with label
    const id = useId()

    return(

        <div className="w-full">

            {/* label if given in props    */}
            {label && 
                (
                    <label htmlFor={id}>
                        {label}
                    </label>
                )
            }

            <select
                id={id}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                {...props}
                ref={ref}
            >

                {/* mapping options if given */}
                {options?.map
                    ((option) => 
                        (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        )
                    )
                }


            </select>

        </div>
    )
})

export default SelectInput