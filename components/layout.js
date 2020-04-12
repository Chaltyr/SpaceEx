import Header from './Header';
import Navbar from './Navbar';

const layoutStyle = {
  // margin: 10,
  // padding: 10,
  border: '1px solid #DDD'
};

const Layout = props => (
    <div style={layoutStyle}>
          <Navbar />
        <main>
            {props.children}
        </main>
    </div>
  );
  
export default Layout;