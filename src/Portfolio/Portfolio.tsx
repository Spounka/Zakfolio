import React from 'react'
import ProjectGrid from './ProjectGrid'
import project from '../types'

interface props {
    projects: project[]
    onClick: (id: string) => void
}

function Portfolio({ projects, onClick }: props) {
    return (
        <div className='flex flex-col text-left mt-10' id="projects">
            <h2 className='text-6xl text-slate-400 mb-10'>Projects</h2>
            <ProjectGrid projects={projects} onClick={onClick} />
        </div>
    )
}

export default Portfolio