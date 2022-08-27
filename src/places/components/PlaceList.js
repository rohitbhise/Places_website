import React from "react";
import "./PlaceList.css";
import Button from "../../shared/Components/FormElements/Button";
import Card from "../../shared/Components/UIElements/Card";
import PlaceItem from "./PlaceItem";
function PlaceList(props) {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found , maybe create one </h2>
          <Button to="/places/new">SHARE PLACE</Button>
        </Card>
      </div>
    );
  } else {
    return (
      <ul className="place-list">
        {props.items.map((place) => {
          return (
            <PlaceItem
              key={place.id}
              id={place.id}
              image={place.image}
              title={place.title}
              description={place.description}
              address={place.address}
              creatorId={place.creator}
              coordinates={place.location}
            />
          );
        })}
      </ul>
    );
  }
}

export default PlaceList;
