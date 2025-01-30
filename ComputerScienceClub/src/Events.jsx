const Events = () => {
  return (
    <>
    <div id = "EventsContainer">
        <h1 className = "EventTitle ">Events</h1>
        <section className = "UpComingEvents">
            <h2 id = "UpcomingEventsTitle">Upcoming Events</h2>
            <section className = "UpComingEventsContainer">
            <section id = "Event1UpComing" className = "Upcomingevent">
              </section>
              <section id = "Event2UpComing" className = "Upcomingevent"></section>
              <section id = "Event3UpComing" className = "Upcomingevent"></section>
              <section id  = "Event4UpComing" className = "Upcomingevent"></section>
            </section>
        </section>
        <section className = "PastEvents">
            <h2>Past Events</h2>
            <section className="PastEventsContainer">
              <section id = "Event1UpComing" className = "PastEvent"></section>
              <section id = "Event2UpComing"className = "PastEvent"></section>
              <section id = "Event3UpComing"className = "PastEvent"></section>
              <section id  = "Event4UpComing"className = "PastEvent"></section>
            </section>
            
        </section>
    </div>
    </>
  );
}

export default Events