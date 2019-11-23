import React from "react";

function Event({ event }) {
  let { text } = event.description;
  if (text) {
    if (text.length > 200) {
      text = text.substr(0, 200);
    }
  } else {
    text = null;
  }

  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          {event.logo ? <img src={event.logo.url} alt={event.name} /> : null}
        </div>

        <div className="uk-card-body">
          <h3 className="uk-card-title">{event.name.text}</h3>
         
        </div>

        <div className="uk-card-footer">
          <a href={event.url} className="uk-button uk-button-secondary">
            More info
          </a>
        </div>
      </div>
    </div>
  );
}

export default Event;
