import { Education } from './Education';
import EducationSequence from './Education/EducationSequence';
import { LandingSection } from './LandingSection';
import { Navbar, NavLink } from './Navbar';
import './index.css'

function App() {
    document.title = "Spounks Von Spounks"


    return (
        <div className='h-full justify-center content-center text-center px-10 xl:px-48 '>
            <Navbar>
                {
                    [
                        ["#education", "Education"],
                        ["#projects", "Projects"],
                        ["#contact", "Contact"],
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
        </div>
    );
}

export default App;
