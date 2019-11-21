import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";

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
        </div>
      </CategoryProvider>
    </EventsProvider>
  );
}

export default App;
