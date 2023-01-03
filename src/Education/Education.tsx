import React from 'react'

function Education({ children }: any) {
    return (
        <div id="education" className='flex flex-col justify-start text-left'>
            <h2 className='text-slate-400 text-6xl mb-10'>Education</h2>
            <div className='flex flex-col'>
                {children}
            </div>
        </div>
    )
}

export default Education