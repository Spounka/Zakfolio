import React from 'react'

export default function Navbar({ children }: any) {
    return (
        <nav className='pt-8 w-full justify-center md:justify-start flex flex-row align-middle md:px-2 py-5'>
            <h5 className='md:font-bold hidden md:block md:mr-20'>Abderrazak Maallem</h5>
            {children}
        </nav>
    )
}
