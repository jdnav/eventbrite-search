import React, { Component } from "react";
import { CategoriesConsumer } from "../context/CategoriesContext";

class Form extends Component {
  state = {
    name: "",
    category: ""
  };
  render() {
    return (
      <form>
        <fieldset className="uk-fieldset uk-margin">
          <legend className="uk-legend uk-text-center">
            Search by name or category
          </legend>
        </fieldset>

        <div className="uk-column-1-3@m uk-margin">
          {/** Input for name */}
          <div className="uk-margin" uk-margin="true">
            <input
              name="name"
              className="uk-input"
              type="text"
              placeholder="Name of the event or city"
            />
          </div>
          {/** Select for category */}
          <div className="uk-margin" uk-margin="true">
            <select className="uk-select" name="category">
              {/** Options come from backend */}
              <CategoriesConsumer>
                {value => {
                  return value.categories.map(category => (
                    <option
                      key="category.id"
                      value="category.id"
                      data-uk-form-select
                    >
                      {category.name_localized}
                    </option>
                  ));
                }}
              </CategoriesConsumer>
            </select>
          </div>
          {/** Submit button */}
          <div className="uk-margin" uk-margin="true">
            <input
              className="uk-button uk-button-danger"
              type="submit"
              value="Search events"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
