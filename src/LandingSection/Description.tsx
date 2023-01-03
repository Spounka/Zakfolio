import React from 'react'

function Description({ title, description }: any) {
    return (
        <div className='self-center text-left'>
            <h1 className='font-extrabold mb-8 text-4xl sm:text-8xl'>{title}</h1>
            <span className='text-lg font-sans font-semibold text-slate-400'>{description}</span>
        </div>
    )
}

export default Description