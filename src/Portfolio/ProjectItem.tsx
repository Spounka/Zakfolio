import React from 'react'
import project from '../types';



interface props {
    project: project
    onClick: (id: string) => void
}

function ProjectItem({ project, onClick }: props) {
    const { id, image, title } = { ...project }

    return (
        <div className='hover:-translate-y-1 transition ease-in-out duration-200 hover:opacity-50 md:hover:opacity-65 cursor-pointer
                        overflow-hidden flex flex-col break-inside-avoid rounded-sm shadow-md
                        border border-slate-300 p-0' onClick={() => onClick(id)}>
            <img className='p-0' src={image} alt="project" />
            <h2 className='text-center font-medium text-lg pt-2 pb-4'>{title}</h2>
        </div>
    )
}

export default ProjectItem