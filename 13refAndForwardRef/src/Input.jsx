import React, { forwardRef } from 'react'

const Input = forwardRef(function (
    {
        type="text"
    },
    ref
)
{
    return (
        <input
            type={type}
            ref={ref}
        />
    )
})

export default Input