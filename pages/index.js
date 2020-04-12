import Head from 'next/head'
import Layout from '../components/layout'
import React from 'react'
import Link from 'next/link';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";
import fetch from 'isomorphic-unfetch';
import { ApolloProvider } from "@apollo/react-hooks";
import { render } from 'react-dom';
import { Query } from '@apollo/react-components';

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

const Rockets = () => (
  <Query
    query={GET_ROCKETS}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rockets.map(({ country, name, company, id }) => (
        // <div key={country}>
        //   <p>
        //     {name}: {country}
        //   </p>
        // </div>
        <div class="card">
          <div class="card-image">
              <figure class="image is-4by3">
              <Link href={`/rocket/${id}`} >
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
              </Link>
            </figure>            
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div class="content">
              {name}
              {country}
              {id}
              {company}
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br/>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      ));
    }}
  </Query>
);
  // client
  //   .query({
  //     query: gql`
  //       query {
  //         rockets(limit: 10) {
  //           company
  //           country
  //           id
  //           name
  //         }
  //       }
        
  //     `
  //   })
  //   .then(result => console.log(result));

  //   console.log("hello")



const Home = () => (
  <ApolloProvider client={ client }>
    <Layout>
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='title'>
            This is the homepage where we will display a list of rockets owned by spaceX
        </h1>
        <div className="container">
          <Rockets/>
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
  
        {/* <p>This is the homepage</p>
        <h1 classNameName="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p classNameName="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div classNameName="grid">
          <a href="https://nextjs.org/docs" classNameName="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" classNameName="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/zeit/next.js/tree/master/examples"
            classNameName="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://zeit.co/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            classNameName="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with ZEIT Now.
            </p>
          </a>
        </div> */}

      </main>

      <footer>
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
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
// render(<Home />, document.getElementById('root'));

export default Home

