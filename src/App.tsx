import React from 'react';
import { Navbar, NavLink } from './Navbar';
import './index.css'

function App() {
    document.title = "Spounks Von Spounks"
    return (
        <div>
            <Navbar>
                <NavLink link={"#title"} title={"Hello there"} />
                <NavLink link={"#title2"} title={"Nazih"} />
                <NavLink link={"#title3"} title={"Rawad"} />
                <NavLink link={"#title4"} title={"Youda"} />
            </ Navbar>
        </div>
    );
}

export default App;
