import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListEvents from "./components/ListEvents";

// Providers
import CategoryProvider from "./context/CategoriesContext";
import EventsProvider from "./context/EventsContext";

function App() {
  return (
    <EventsProvider>
      <CategoryProvider>
        <Header title="Search for events with Eventbrite API" />
        <div className="uk-container">
          <Form />
          <ListEvents />
        </div>
      </CategoryProvider>
    </EventsProvider>
  );
}

export default App;
