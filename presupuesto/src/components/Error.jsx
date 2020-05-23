import React from 'react'

export const Error = ({mensaje}) => {
    return (
        <p className="alert alert-danger error">{mensaje}</p>
    )
}

export default Error;