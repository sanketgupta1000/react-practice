import React from "react";
import reactLogo from './../assets/react.svg'

// props are accepted in Card via a single object
// also possible to do (degenerate form? what is it caled?)

// function Card(props)
// function Card({name, age, obj})
function Card({name="Dummy name", position="Dummy position", company="Dummy company"})
{

    // console.log(props)
    // console.log(name, age, obj)

    return(
        <>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-3">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={reactLogo} alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                                “Tailwind CSS is the only framework that I've seen scale
                                on large teams. It’s easy to customize, adapts to any design,
                                and the build size is tiny.”
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                {/* variable simply accessed via expression */}
                                {name}
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                                {position}, {company}
                            </div>
                        </figcaption>
                    </div>
            </figure>
        </>
    )
}

export default Card