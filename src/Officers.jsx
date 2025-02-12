const Officers = () => {
    return(
        <>
        <div id="OfficersContainer"> 
            <section className="OfficerTitle">
                <h1>Officers</h1>
            </section>  
            <section className="Officers">
                <section className="Officer" id="President">
                    <h2>President</h2>
                    <img alt="President" />
                    <section className="DescriptionOfOfficer" id="PresidentDESCRIPTION">
                        <p>  My Name is xyz My Name is xyz And i maintain The Club, i oversee all the ins and outs of the club, with the help of the co-president.</p>
                    </section>

                  
                </section>

                <section className="Officer" id="Co-President">
                    <h2>Co-President</h2>
                    <img alt="Co-President" />
                    <section className="DescriptionOfOfficer" id="Co-PresidentDESCRIPTION">
                        <p> My Name is xyz I assist the president in running the club, and give my own  stuff aswell.</p>
                    </section>
                 
                </section>

                <section className="Officer" id="ICC">
                    <h2>ICC</h2>
                    <img alt="ICC" />
                    <section className="DescriptionOfOfficer" id="ICCDESCRIPTION">
                        <p> My Name is xyz I go to every other wednsday to a meeting to speak and collaberate with other clubs on what our events are, and all that stuff.</p>
                    </section>
                </section>

                <section className="Officer" id="Events/OutReach">
                    <h2>Events/OutReach</h2>
                    <img alt="Events/OutReach" />
                    <section className="DescriptionOfOfficer" id="Events/OutReachDESCRIPTION">
                        <p> My Name is xyz I along with all the other members here collaberate in making ideas, aswell as reaching out to other companies, clubs and what not for more opportunities that we can participate in!</p>
                    </section>
                   
                </section>
            </section>
        </div>
        <section className="FacultyAdvisors">
             <h2>Faculty Advisors</h2>
             <section className="FacultyAdvisor" id="FacultyAdvisor1">
             <img alt="Faculty Advisors" />
             <p>
                 My Name is xyz I am the faculty advisor for the club, i help the club with any questions they have, and help them with any problems they have.
             </p>
             </section>
             </section>
        </>
    );
}

export default Officers;
