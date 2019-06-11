import React from "react";
import { Link } from "react-router-dom";

const CollectionCard = props => {
  return (
    <Link
      className="col-sm-6 col-lg-4 fadeCard"
      to={`/artists/${props.artist}/${props.collection.slug}`}
      style={{ textDecoration: "none", color: "#212529" }}
    >
      <div className="card clean-card text-center artistCard">
        <img
          alt={props.collection.name}
          className="card-img-top w-100 d-block artist"
          src={props.collection.picture}
          style={{ pointerEvents: "none" }}
        />
        <div className="card-body info">
          <h4 className="card-title">asd</h4>
          <p className="card-text">afadf</p>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
