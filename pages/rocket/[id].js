import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import gql from "graphql-tag";
import { Query, ApolloProvider } from '@apollo/react-components';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import React from 'react'
import fetch from 'isomorphic-unfetch';

const cache = new InMemoryCache();
const link = new HttpLink({
  fetch,
  uri: "https://api.spacex.land/graphql/"
  
});

const client = new ApolloClient({
  cache,
  link
});

const Rocket = (props) => {
    
    // const router = useRouter()
    // const { id } = router.query
    console.log(props.data)
    // return <p>Rocket: {props.id}</p>
    console.log(props.name)
    return (
        <Layout>
            <div>
                <p>{props.data.rocket.name}</p>
                <p>{props.data.rocket.id}</p>
                <p>{props.data.rocket.country}</p>
                <p>{props.data.rocket.company}</p>
                <p>{props.data.rocket.description}</p>
            </div>
        </Layout> 
    )
}

Rocket.getInitialProps = async ctx => {
    const GET_ROCKET_DETAILS = gql`
    query 
    {
        rocket(id: "falcon1") {
        name
        company
        id
        country
        description
        }
    }
    `;
    
    // client
    // .query({
    //     query: GET_ROCKET_DETAILS
    // })
    // .then(result => console.log(result));

    const res = await client.query({ query: GET_ROCKET_DETAILS })

    
    return { data: res.data  }
}

export default Rocket

