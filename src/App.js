import React from 'react';
import Header from "./components/Header";
import CategoryProvider from "./context/CategoriesContext";
import Form from "./components/Form";

function App() {

  return (
    <CategoryProvider>
      <Header title="Search for events with Eventbrite API"/>
      <div className="uk-container">
        <Form />
      </div>
    </CategoryProvider>
  );
}

export default App;
