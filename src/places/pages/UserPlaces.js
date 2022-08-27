import React from "react";
import PlaceList from "../components/PlaceList";
import {useParams} from 'react-router-dom';
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous skyscrapers in the world",
    image:
      "https://www.tripsavvy.com/thmb/sBI2W7YNV4vRSVdbRVfASLH3F6I=/2617x3874/filters:fill(auto,1)/5891665274_cc93622eb7_o-56a3ff3b5f9b58b7d0d4df13.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      long: -73.9878531,
    },
    creator: "u1",
  },
  {
    id: "p1",
    title: "Taj Mahal",
    description: "One of the most famous monuments in the world",
    image:
      "https://th.bing.com/th/id/OIP.yQV9YN97q7-pD-MDLHFaJAHaEK?pid=ImgDet&rs=1",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      long: -73.9878531,
    },
    creator: "u2",
  },
];

function UserPlaces(props) {
  const userId=useParams().userId;
  const loadedPlaces=DUMMY_PLACES.filter(place=>place.creator===userId)  // filter to show only the particular users places
  return <PlaceList items={loadedPlaces}/>;
}

export default UserPlaces;
