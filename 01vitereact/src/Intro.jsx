// creating my custom component 
// a component is nothing but a function which returns html
// obviously, browser doesn't understand this, hence this is said to be jsx syntax
// by convention, extension must be jsx
// another convention is that component names start with upper case

function Intro()
{

    // variables go here
    const username = "Sanket Gupta"

    return (
        <h2>Hello, my name is {username}</h2>
    )
}

export default Intro