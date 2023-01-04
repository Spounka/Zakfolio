import React from 'react'

function PresentationImage({ image }: any) {
    return (
        <div className='relative w-full flex lg:-mt-12 justify-center lg:justify-end lg:float-right align-middle'>
            <div className="animate-pulseping duration-75 w-4/5 lg:w-full h-auto border
                            absolute bottom-0 top-0 border-gray-400 rounded-full"></div>
            <img className={'w-4/5 lg:w-full h-auto rounded-full p-5 md:p-10'} src={image} alt="profile" />
        </div >
    )
}

export default PresentationImage