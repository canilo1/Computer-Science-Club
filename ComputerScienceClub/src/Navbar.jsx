//import { useState } from "react";

const Navbar = () => {
    return (
        <nav id = "Navbar"> 
           <div id = "LMCCSContainer">
                <a className="LMCCS" id = "LMCCS" href = '/'>LMCCS</a>
            </div>
            <div className="DirectoryLinks">
                <a href="/" id = "Home">Home</a>
                <a href="/about" id = "About">About</a>
                <a href="/events" id = "Events">Events</a>
            </div>
        </nav>
    );
};
export default Navbar;
