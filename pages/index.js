import Head from 'next/head'
import Layout from '../components/Layout'
import React from 'react'
import Link from 'next/link';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import fetch from 'isomorphic-unfetch';
import { ApolloProvider } from "@apollo/react-hooks";
import Rockets from "./rockets";
import "../public/static/loader.css"



const PostLink = props => (
  <li>
    <Link href="/rocket/[id]" as={`/rocket/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

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
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;1,700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="/static/hello.js"></script>
      </Head>
      <main>
        <h1 className='title'>
          I would like to die on Mars. Just not on impact. - Elon Musk
        </h1>
        <br/>
        <br/>
        <br/>
        <h5 className="subtitle">
          Below are the rockets SpaceX has launched so far. Click on them to find out more!
        </h5>
        <br/>
        <br/>
        <br/>

        <div className="container">
          <div className="cardContainer is-multiline">
              <Rockets/>
          </div>
          <p className='description'>
            Will try to use cards and grid system to display each rocket with details
          </p>
          <ul>
            <li>
              Rocket Name 
            </li>
            <li>
              <a href='/'>
                <p>Preview image</p>
              </a>
            </li>
            <li>
              Country
            </li>
            <PostLink id="hello-nextjs" />
            <PostLink id="learn-nextjs" />
            <PostLink id="deploy-nextjs" />
          </ul>
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
          font-size: 4rem;
          color: white;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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

