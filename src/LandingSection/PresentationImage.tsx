import React from 'react'

function PresentationImage({ image }: any) {
    return (
        <div className='w-full flex lg:-mt-12 justify-center lg:justify-end lg:float-right align-middle'>
            <img className={'w-4/5 lg:w-full h-auto rounded-full border border-slate-300 p-5 md:p-10'} src={image} alt="profile" />
        </div >
    )
}

export default PresentationImage