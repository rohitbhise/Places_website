import React from "react";
import UsersList from "../components/UsersList";

function User() {
  const USERS = [
    {
      id: "u1",
      name: "Rohit",
      image:
        "https://media.cntraveler.com/photos/56556bab659c4b487486611e/master/pass/oia-santorini-greece-cr-alamy.jpg",
      places: 3,
    },
    
  ];
  return <UsersList items={USERS}/>;
}

export default User;
