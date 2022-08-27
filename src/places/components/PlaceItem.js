import React, { useState } from "react";

import Card from "../../shared/Components/UIElements/Card";
import Button from "../../shared/Components/FormElements/Button";
import Modal from "../../shared/Components/UIElements/Modal";
import "./PlaceItem.css";
function PlaceItem(props) {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => {
    setShowMap(true);
    console.log(showMap);
  };
  const closeMapHandler = () => {
    setShowMap(false);
    console.log(showMap);
  };

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        //onSubmit={closeMapHandler}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
        
      >
        <div className="map-container">
          <h2>THE MAP</h2>
        </div>
      </Modal>

      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
}

export default PlaceItem;
