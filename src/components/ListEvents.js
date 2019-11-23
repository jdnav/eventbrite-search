// Stateless functional component
import React from 'react';
import { EventsConsumer } from "../context/EventsContext";

const ListEvents = () => {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventsConsumer>
                {(value) =>{
                    return (
                        <h1>List event</h1>                        
                    )
                }}
            </EventsConsumer>
        </div>
    );
};

export default ListEvents;