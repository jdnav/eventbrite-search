import React, { Component } from "react";
import axios from "axios";

// Create context
const CategoriesContext = React.createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;

class CategoryProvider extends Component {
  // api key
  token = "ZQZVWFV6VVAOXBYJMNPP";

  state = {
    categories: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}`;

    let response = await axios.get(url);
    console.log(response.data.categories);
    this.setState({ categories: response.data.categories });
  };

  render() {
    return (
      <CategoriesContext.Provider
        value={{
          categories: this.state.categories
        }}
      >
        {this.props.children}
      </CategoriesContext.Provider>
    );
  }
}

export default CategoryProvider;
