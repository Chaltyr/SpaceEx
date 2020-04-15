import Navbar from './Navbar';

const Layout = props => (
    <div className="layout" >
          <Navbar />
        <main>
            {props.children}
        </main>
        <style jsx>{`
          .layout {
            background-image: url("background image.jpg");
          }
        `}

        </style>
    </div>
  );
  
export default Layout;