import { Education } from './Education';
import { LandingSection } from './LandingSection';
import { Navbar, NavLink } from './Navbar';
import './index.css'

function App() {
    document.title = "Spounks Von Spounks"


    return (
        <div className='h-[100vh] justify-center content-center text-center px-10 xl:px-48 '>
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
            <Education />
        </div>
    );
}

export default App;
