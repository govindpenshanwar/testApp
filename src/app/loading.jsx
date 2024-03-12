"use client"

import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
function loading() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default loading
