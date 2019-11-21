import React, { Component } from "react";
import axios from "axios";

// Create context
const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

class EventsProvider extends Component {
  // api key
  token = "ZQZVWFV6VVAOXBYJMNPP";
  sortBy = "date";

  state = {
    events: []
  };

  getEvents = async search => {
      console.log('eeee')
      console.log(search)
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}&categories=${search.category}&sort_by=${this.sortBy}&token=${this.token}`;

    let response = await axios.get(url);
    console.log(response.data);
    this.setState({ events: response.data.events });
  };

  render() {
    return (
      <EventsContext.Provider
        value={{
          events: this.state.events,
          getEvents: this.getEvents // functions can be provided too
        }}
      >
        {this.props.children}
      </EventsContext.Provider>
    );
  }
}

export default EventsProvider;
