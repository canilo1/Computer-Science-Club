const HomeSection = () => {
    return (
        //The School
        // The club name 
        //Who we are with a interactave, wher eif u clcik it will show a description of the club
        //New members always welcome Box 
        // Join us box with adiscord link 
        <div id = "HomeSection"> 
            <div id = "School">
            <h2 id= "SchoolName" className = "HomeGrid">LOS MEDANOS COLLEGE </h2>
            </div>
            <section className = "ClubPictureSection" />
            <img id = "ClubPicture" ></img>
            <section/>
            <div id = "ClubName" className ="HomeGrid">  
                <h2 id = "ComputerScienceClub">Computer Science Club</h2>
            </div>
            <div  id = "WhoWeAreHolder" className="HomeGrid">
                <h2 id = "WhoWeare">Who We Are</h2>
                </div>
                <div id = "Discord"> 
                    <h2 id = "JoinUs">Join Us</h2>
                    <img src = "https://discord.com/assets/3437c10597c1526c3db5e3b6e8c5a1b1.svg" alt = "Discord Logo" id = "DiscordLogo"/>
                    <a href = "https://discord.gg/5QvY9eM" id = "DiscordLink">
                  </a>
                </div>
        </div>
    );
}
export default HomeSection;