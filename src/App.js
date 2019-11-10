import React from 'react';
import Header from "./components/Header";
import CategoryProvider from "./context/CategoriesContext";

function App() {

  return (
    <CategoryProvider>
      <Header title="Search for events with Eventbrite API"/>
    </CategoryProvider>
  );
}

export default App;
