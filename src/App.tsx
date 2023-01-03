import { Navbar, NavLink } from './Navbar';
import './index.css'

function App() {
    document.title = "Spounks Von Spounks"


    return (
        <div className='justify-center content-center text-center h-20 lg:px-48 px-20'>
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
        </div>
    );
}

export default App;
