import React from 'react'

function EducationSequence({ title, startYear, endYear, location }: any) {
    return (
        <ol className='border-l border-gray-300'>
            <li>
                <div className="flex flex-start items-center pt-0">
                    <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                    <h4 className="text-gray-800 font-semibold text-xl mb-1.4">{title}</h4>
                </div>
                <div className='mt-0.5 ml-4 mb-6'>
                    <p className="text-gray-500 text-sm">{startYear} - {endYear}</p>
                    <p className="text-gray mb-3">{location}</p>
                </div>
            </li>
        </ol>
    )
}

export default EducationSequence