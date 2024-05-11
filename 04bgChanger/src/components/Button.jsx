import React from "react";

function Button({color, textColor, setter})
{

    const nameToDisplay=color.charAt(0).toUpperCase() + color.slice(1)

    return(
        <>

                    <button
                    className="px-4 py-1 rounded-full m-1"
                    style={{backgroundColor:color, color:textColor}}
                    onClick={()=>setter(color)}
                    >

                        {nameToDisplay}

                    </button>

        </>
    )
}

export default Button