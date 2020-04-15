import Head from 'next/head'
import Layout from '../../components/Layout';
import gql from "graphql-tag";
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
  return (    
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;1,700&display=swap" rel="stylesheet" />
        <script type="text/javascript" src="/static/hello.js"></script>
      </Head>
      
      <main>
        <section className="hero">
          <div className="hero-body" >      
            {props.data.rocket.name}                    
          </div>
        </section>
        
        <div>
          <div className="columns">
            <div className="column">
              <p>{props.data.rocket.description}</p>                
              <div className="infoDiv">
                {/* <p className="bold">Information</p> */}
                <p>First flight: {props.data.rocket.first_flight}</p>
                <p>Country: {props.data.rocket.country}</p>
              </div>

              <div className="infoDiv">
                <p className="bold">First stage</p>
                <p>Burn Time (Seconds): {props.data.rocket.first_stage.burn_time_sec}</p>
                <p>Number of Engines: {props.data.rocket.first_stage.engines}</p>
                <p>Fuel consumed (Tonnes): {props.data.rocket.first_stage.fuel_amount_tons}</p>
              </div>

              <div className="infoDiv">
                <p className="bold">Second stage</p>
                <p>Burn Time (Seconds): {props.data.rocket.second_stage.burn_time_sec}</p>
                <p>Number of Engines: {props.data.rocket.second_stage.engines}</p>
                <p>Fuel consumed (Tonnes): {props.data.rocket.second_stage.fuel_amount_tons}</p>
              </div>
              
              <p className="bold">Payloads</p>
              <div className="infoDiv">
                {props.data.rocket.payload_weights.map(({ kg, name, id, mass }) => (
                  <>
                  <p className="payload">{name}</p>
                  <p>Payload Weight (kg): {kg}</p>
                  <p>Payload ID: {id}</p>
                  </>
                ))}
              </div>                               
            </div>
            <div className="column">
              <div className="column2">
                <div>
                  <img src={`/${props.data.rocket.id}.jpg`} alt="" className="detailImg"/>
                </div>
                <div className="statsDiv">
                  {props.data.rocket.name}
                </div>
              </div> 
            </div>
          </div>
          
          <div className="technical">
            <div className="technicalContent">
              Mass (kg): {props.data.rocket.mass.kg}
            </div>
            <div className="technicalContent">
              Height (meters): {props.data.rocket.height.meters}
            </div>
            <div className="technicalContent">
              Number of legs: {props.data.rocket.landing_legs.number}
            </div>
            <div className="technicalContent">
              Leg material: {props.data.rocket.landing_legs.material}
            </div>
          </div>
  
        </div>
      </main>
      <footer className="rocketFooter">
        <a
          href="https://api.spacex.land/graphql/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/spacex_logo_white.png" alt="" /> GraphQl
        </a>
      </footer>
      <style jsx>{`
        @keyframes fadeInAnimation { 
          0% { 
              opacity: 0; 
          } 
          100% { 
              opacity: 1; 
            } 
          }

        .rocketFooter {
          background-color: black;
        }

        .technicalContent {
          padding: 1.5rem;
          margin: 2.5rem;
        }

        .technical {
          color: black;
          font-family: 'Space Mono', monospace;
          font-weight: bold;
          font-size: 1.25rem;
          box-shadow: 0 5px 15px rgba(0,0,0,.5);
          background: rgba(255,255,255,.2);
          border-style: groove;
          border-radius: 20px;
          margin: 0.75rem;
          padding: 1.5rem;
          display: flex;
          justify-content: center;
          animation: fadeInAnimation ease 3s;
          animation-iteration-count: 1; 
          animation-fill-mode: forwards;
        }

        .payload {
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
          font-weight: 900;
          text-decoration: underline;
        }
        
        .infoDiv {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
        .column2 {
          // display:flex;
          text-align: center;
        }
        .detailImg {
          width: 100%;
          height: 90vh;
        }
        .bold {
          font-size: 1.5rem;
          font-weight: bold;
          text-decoration: underline;
        }

        .columns {
          color: black;
          font-family: 'Space Mono', monospace;
          font-weight: bold;
          animation: fadeInAnimation ease 3s;
          animation-iteration-count: 1; 
          animation-fill-mode: forwards;
          // background: rgba(255,255,255,.2);
          box-shadow: 0 5px 15px rgba(0,0,0,.5);
        }
        
        .column {
          background: rgba(255,255,255,.2);
          box-shadow: 0 5px 15px rgba(0,0,0,.5);
          border-style: groove;
          border-radius: 20px;
          margin: 1.5rem;
          padding: 2rem;
        }

        @keyframes pulse {
          0%, 100% {
            color: white;
          }
          50%{
            color: #FF4500; 
          }
        }

        .hero-body {
          color: white;
          font-family: 'Space Mono', monospace;
          text-decoration: underline;
          animation: fadeInAnimation ease 3s;
          animation-iteration-count: 1; 
          animation-fill-mode: forwards;
        }

        .hero-body:hover {
          animation: pulse 3s infinite;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
        
        .descriptionSection {
          display: flex;
        }
       
        .cardContainer {
          display: flex;
          justify-content: center; 
          flex-wrap: wrap;        
        }

        a:hover {
          color: blue;
        }

        * {
          box-sizing: border-box;
        }
        
        .container {
          background-color:blue;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          background-size: cover;
          background-position: center center;
          background-image: url("../background image3.jpg");
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          color: white;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
       
        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}
      </style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}
      </style>
    </Layout> 
  )
}

Rocket.getInitialProps = async ctx => {
  const GET_ROCKET_DETAILS = gql`
  query{
    rocket(id: "${ctx.query.id}") {
      company
      country
      description
      payload_weights {
        kg
        id
        lb
        name
      }
      active
      first_flight
      id
      name
      first_stage {
        burn_time_sec
        engines
        fuel_amount_tons
        reusable
      }
      second_stage {
        burn_time_sec
        engines
        fuel_amount_tons
      }
      mass {
        kg
      }
      height {
        meters
      }
      landing_legs {
        material
        number
      }
    }
  }
  `;
  const res = await client.query({ query: GET_ROCKET_DETAILS }) 
  return { data: res.data  }
}

export default Rocket

