import { useState } from 'react';
import { Education } from './Education';
import EducationSequence from './Education/EducationSequence';
import { LandingSection } from './LandingSection';
import Modal from './Modal';
import { Navbar, NavLink } from './Navbar';
import { Portfolio } from './Portfolio';
import './index.css'
import { projects } from './projects';
import { AnimatePresence } from 'framer-motion';

function App() {
    document.title = "Abderrazak Maallem"
    const [modalActive, setModalActive] = useState(false)
    const [activeProject, setActiveProject] = useState(projects[0])

    const toggleModal = () => setModalActive(state => !state);
    function onProjectClick(id: string) {
        setActiveProject(projects.find(p => p.id == id) || activeProject)
        toggleModal()
    }
    if (modalActive) {
        document.body.style.overflowY = 'hidden'
    } else
        document.body.style.overflowY = 'scroll'


    return (
        <div className='h-full justify-center content-center text-center px-10 xl:px-48' >
            <Navbar>
                {
                    [
                        ["#education", "Education"],
                        ["#projects", "Projects"],
                    ].map(([link, title]) => {
                        return (<NavLink key={link} link={link} title={title} />)
                    })
                }
            </ Navbar>
            <LandingSection />
            <Education>
                <EducationSequence
                    title={"Software Engineer"}
                    startYear={"2021"}
                    endYear={"present"}
                    location={"University Of Constantine 2"}
                />
                <EducationSequence
                    title={"Bacalaureat of exact sciences"}
                    startYear={"2018"}
                    endYear={"2019"}
                    location={"Fatma Zahra High School"}
                />
            </Education>
            <Portfolio projects={projects} onClick={onProjectClick} />
            <AnimatePresence>
                {modalActive && <Modal project={activeProject} isActive={modalActive} toggleState={toggleModal} />}
            </AnimatePresence>
            <div className='py-5'>
                <h4 className='text-sm text-neutral-500 opacity-70'>Copyright &copy; {new Date().getFullYear()} Abderrazak Maallem</h4>
            </div>
        </div>
    );
}

export default App;
