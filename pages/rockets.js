import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Link from 'next/link'

// import { LaunchTile } from "../components";

const GET_ROCKETS = gql`
      query {
        rockets(limit: 10) {
          company
          country
          id
          name
        }
      }
      
    `;

// const backgrounds = [galaxy, space, moon];
// export function getBackgroundImage(id) {
//   return `url(${backgrounds[Number(id) % backgrounds.length]})`;
// }
const Rockets = () => {
    const { data,
         loading,
            error } = useQuery(GET_ROCKETS);
    
    if (loading) return <p>loading</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
    
    return (
        <Fragment>
        {/* <Header /> */}
        {data.rockets &&
            data.rockets.rockets &&
            data.rockets.rockets.map(rockets => (
                <Link to={`/rocket/${id}`}>
                    <h2>{company ? company: ""}</h2>
                    <h5>{rocket && rocket.name}</h5>
                    <h5>{country}</h5>
                </Link>
            // <LaunchTile key={rockets.id} rockets={rockets} />
            ))}
        {/* {data.rockets && 
            data.rockets.hasMore && (
                <Button
                onClick={() =>

                    fetchMore({
                    variables: {
                        after: data.rockets.cursor,
                    },

                    updateQuery: (prev, { fetchMoreResult, ...rest }) => {
                        if (!fetchMoreResult) return prev;
                        return {
                        ...fetchMoreResult,
                        rockets: {
                            ...fetchMoreResult.rockets,
                            rockets: [
                            ...prev.rockets.rockets,
                            ...fetchMoreResult.rockets.rockets,
                            ],
                        },
                        };
                    },
                    })
                }
                >
                Load More
                </Button>
            )
            } */}
        </Fragment>
    );
    };
    
    export default Rockets;

