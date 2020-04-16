import Navbar from './Navbar'
import Head from 'next/head'

const Layout = props => (
    <div className="layout" >
      {/* <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> */}
          <Navbar />
        <main>
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