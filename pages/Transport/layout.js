import React from 'react'
import NavBar from '../navbar';

export default function TransportLayout({ children }) {
    return (
        <div>
            <NavBar />
            <div className='container'>
                {children}
            </div>
        </div>
    )
}