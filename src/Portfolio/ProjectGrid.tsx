import React from 'react'
import ProjectItem from './ProjectItem'
import { v4 as uuidv4 } from 'uuid';
import project from '../types';

interface props {
    projects: project[]
    onClick: (id: string) => void
}
function ProjectGrid({ projects, onClick }: props) {
    return (
        <div className='columns-2 sm:columns-3 md:columns-4 gap-2 lg:gap-4 mx-auto space-y-3 pb-28 w-full'>
            {
                projects.map((project) => <ProjectItem key={uuidv4()} project={project} onClick={onClick} />)
            }
        </div>
    )
}

export default ProjectGrid