import Head from 'next/head'
import Layout from '../components/Layout'
import React from 'react'
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import fetch from 'isomorphic-unfetch'
import { ApolloProvider } from "@apollo/react-hooks"
import Rockets from "../components/Rockets"
import "../public/static/loader.css"

const cache = new InMemoryCache();
const link = new HttpLink({
  fetch,
  uri: "https://api.spacex.land/graphql/"
  
});

const client = new ApolloClient({
  cache,
  link
});

const Home = () => (
  <ApolloProvider client={ client }>
    <Layout>
    <div className="container">
      <main>
        <h1 className='title'>
          I would like to die on Mars. Just not on impact. - Elon Musk
        </h1>
        <br/>
        <h5 className="subtitle">
          Below are the rockets SpaceX has launched so far. Click on them to find out more!
        </h5>
        <br/>
        <br/>


        <div className="container">
          <div className="cardContainer is-multiline">
              <Rockets/>
          </div>
          <br/>
          <p className='description'>
            This app uses SpaceX Graphql in order to display the information as shown. You may access this Graphql by clicking the footer below.
          </p>
        </div>
      </main>
      <footer className="footer">
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

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        .cardContainer {
          display: flex;
          justify-content: center; 
          flex-wrap: wrap;        
        }

        a:hover {
          text-decoration: underline;
        }

        * {
          box-sizing: border-box;
        }
        
        .container {
          font-family: 'Space Mono', monospace;
          font-weight: bold;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
          padding-top: 50px;
          color: white;
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

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
          color: white;
          animation: fadeInAnimation ease 3s;
          animation-iteration-count: 1; 
          animation-fill-mode: forwards;
        }

        .subtitle {
          color: white;
          animation: fadeInAnimation ease 3s;
          animation-iteration-count: 1; 
          animation-fill-mode: forwards;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          color: white;
          animation: fadeInAnimation ease 3s;
          animation-iteration-count: 1; 
          animation-fill-mode: forwards;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

       
      `}</style>

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
      `}</style>
    </div>
  </Layout>
</ApolloProvider>
)

export default Home

