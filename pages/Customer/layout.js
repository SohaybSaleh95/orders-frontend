import React from 'react'
import NavBar from '../navbar'

export default function CustomerLayout({ children }) {
    return (
        <div>
            <NavBar />
            <div className='container-fluid'>
                {children}
            </div>
        </div>
    )
}