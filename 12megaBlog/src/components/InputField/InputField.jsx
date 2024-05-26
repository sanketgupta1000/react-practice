// creating a general input field


import React, { useId } from 'react'
// importing forwardRef for using refrence from parent
import { forwardRef } from 'react';


const InputField = forwardRef(function ({
    label,
    type="text",
    className="",
    ...props
}, ref)
{
    // id for connecting field and its label
    const id = useId()

    return(
        <div className='w-full'>

            {/* display label only if it exits */}
            {label && 
                <label
                    className='inline-block mb-1 pl-1'
                    htmlFor={id}
                >
                    {label}
                </label>
            }

            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />


        </div>


    )
})


export default InputField