import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate(-2)
        }, 5000)
    })

    return (
        <div>
            <h1>404: Not Found</h1>
            <p> You will be redirected to the previous page in 5 seconds...</p>
        </div>
    )
}

export default NotFound