import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    // useParams returns object with key-value pair of params in url
    const {userid} = useParams()

    return (
        <div>User: {userid}</div>
    )
}

export default User