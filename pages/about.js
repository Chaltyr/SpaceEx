import Head from 'next/head'
import Layout from '../components/Layout.js'

export default function About() {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;1,700&display=swap" rel="stylesheet" />
        <script type="text/javascript" src="/static/hello.js"></script>
        {/* <script type="text/javascript" src="/static/movingImg.js"></script> */}
      </Head>  
      <div className="main">
        <h1 className="title">
          <p>SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.</p>
        </h1>
        <div className="container">          
          <div className="columns">  
            <div className="column">
              <div id="box" ></div>
            </div>      
            <div className="column">
              <p>This is a web site made using ReactJS framework. The styling of the website is a mixture of Bulma CSS framework as well as custom CSS styling.
              Apollo GraphQl is also used to retrieve data from the SpaceX database.</p> 
              <br/>
              <br/>
              <p >The task of building this web app has been most stimulating and I have learned many things that I would not have thought 
              to learn on my own time.</p>
              <br/>
              <br/>
              <p>Thank you for visiting the site and I hope you enjoy using it's functions.</p>
            </div>
          </div>
        </div>
        
      </div>  
    
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

      @keyframes bobble {
        0% {
            transform: translate3d(150px, 30px, 0px);
            animation-timing-function: ease-in;
        }
        50% {
            transform: translate3d(150px, 40px, 0px);
            animation-timing-function: ease-out;
        }
        100% {
            transform: translate3d(150px, 30px, 0px);
        }
      }
      
      #box {
        // The commented lines allows the #box to transition randomly, the Javascript in moving.js needs to be uncommented and then imported
        // -webkit-transition: all 1s;
        // -moz-transition: all 1s;
        // -o-transition: all 1s;
        // transition: all 1s;
        // color: rgba(255, 255, 255, 0);
        // font-family: sans-serif;
        // font-size: 15vh;
        // text-align: left;
        // line-height: 50vh;
        // display:block;
        // margin: 3vh;
        animation: bobble ease 3s;
        animation-iteration-count: infinite;
        width:  20vw;
        height: 20vh;
        background-image: url('fingertwirl.gif');
        background-size: cover;
        border-radius: 20px
      }
      
      // #box:after { position: fixed; content: ''; width: 2.5vw; height: 5vh; z-index: -100; }
      
      .column {
        margin-top: 10px;
        padding-right: 20px;
        color: white;
        animation: fadeInAnimation ease 3s;
        animation-iteration-count: 1; 
        animation-fill-mode: forwards;
        // text-align:center;
        // border-style: groove;

      }
      .columns {
        flex-grow:
      
      }

      .main {
        background-image: url("../background image5.jpg");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 1rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        min-width:100vw;
        color: white;
      }

      .title {
        margin: 2rem;
        text-align: center;
        line-height: 1.15;
        font-size: 2rem;
        color: white;
        animation: fadeInAnimation ease 3s;
        animation-iteration-count: 1; 
        animation-fill-mode: forwards;
      }

      footer {
        width: 100%;
        height: 50px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:black
      }

    `}
    </style>
    <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background-color:red;
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
