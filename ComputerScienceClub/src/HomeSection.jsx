import ClubImage from './assets/ClubImage.png';
import DiscordLogo from './assets/DiscordLogo.png';
import { useState } from 'react';

const HomeSection = () => {
    const[Visibility, setVisibility] = useState(false);
    const handleClick = () => {
     
        console.log("clicked",Visibility);
        setVisibility(!Visibility);
    }
    return (
        //The School
        // The club name 
        //Who we are with a interactave, wher eif u clcik it will show a description of the club
        //New members always welcome Box 
        // Join us box with adiscord link 
        <div id="HomeSection">
        <div id="School">
            <h2 id="SchoolName" className="HomeGrid">LOS MEDANOS COLLEGE</h2>
         
        </div>
    
        <div className="ClubPictureSection">
            <img id="ClubPicture" src={ClubImage} alt="Club Picture" />
        </div>
    
        <div id="ClubName" className="HomeGrid">
            <h2 id="ComputerScienceClub">Computer Science Club</h2>
        </div>
    
        <div id="WhoWeAreHolder" className="HomeGrid">
            <button id="WhoWeAre" onClick={handleClick}>Who We Are</button>
        </div>
       <div id = "WelcomingNewMembers">
        <h2 id="NewMembers" className = "WelcomingNewMembersText">New Members Are</h2>
        <h3 id="AlwaysWelcome"className = "WelcomingNewMembersText">Always Welcome</h3>
        </div>
        <div id="Discord">
            <h2 id="JoinUs">Join Us</h2>
            <a   href="https://discord.gg/qU4jJHS8Hy" id="DiscordLink"> <img
                src={DiscordLogo}
                alt="Discord Logo"
                id="DiscordLogo"
            /></a>
        </div>
        {Visibility && <div id="ClubDescription" className="HomeGrid" >
            <button>
            We are a computer science club at LOS MEDANOS COLLEGE dedicated to enriching, supporting and helping fellow computer science scholars at our school. With workshops, panel talks, competitions, and office hours, job fairs and so much more!
            </button>
      
        </div>}
        
    </div>
    
    );
}
export default HomeSection;