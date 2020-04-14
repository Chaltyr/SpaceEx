import Navbar from './Navbar';

const layoutStyle = {
  // margin: 10,
  // padding: 10,
  border: '1px solid #DDD',
  backgroundColor: "white"
  // backgroundImage: "/public/background image.jpg"
};

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