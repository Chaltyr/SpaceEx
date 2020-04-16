import Navbar from './Navbar'
import Head from 'next/head'

const Layout = props => (
    <div className="layout" >
      <Head>
        <title>SpaceX Rockets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;1,700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="/static/hello.js"></script>
      </Head>
        <main>
          <Navbar />
          {props.children}
        </main>
        <style jsx>{`
          .layout {
            background-image: url("background image.jpg");
            background-size: cover;
          }
        `}

        </style>
    </div>
  );
  
export default Layout;