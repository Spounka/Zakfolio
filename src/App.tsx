import { LandingSection } from './LandingSection';
import { Navbar, NavLink } from './Navbar';
import './index.css'

function App() {
    document.title = "Spounks Von Spounks"


    return (
        <div className='justify-center content-center text-center h-20 px-10 xl:px-48 '>
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
        </div>
    );
}

export default App;
