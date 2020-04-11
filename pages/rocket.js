import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { Header, LaunchDetail } from "../components";
import { ActionButton } from "../containers";

export const GET_ROCKET_DETAILS = gql`
query RocketDetails($rocketId: ID!) {
    rocket(id: $rocketId) {
      id
      company
      country
      description
      name
    }
  }
  
  `;

  const Rocket = ({ rocketId }) => {
    const { data, loading, error } = useQuery(GET_ROCKET_DETAILS, {
      variables: { rocketId }
    });
  
    if (loading) return <p>loading</p>;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data) return <p>Not found</p>;
  
    return (
      <Fragment>
        <Header
          image={
            data.rocket && data.rocket.country && data.rocket.name
          }
        >
          {data && data.rocket && data.rocket.country && data.rocket.name}
        </Header>
        <LaunchDetail {...data.rocket} />
        <ActionButton {...data.rocket} />
      </Fragment>
    );
  };
  
  export default Rocket;