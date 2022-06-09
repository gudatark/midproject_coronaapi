import { Outlet, Link } from "react-router-dom";
import './layout.css';

const Layout = () => {
  return (
    <div >
      <nav>   
      <div>  <h1>  Covid_19 Research </h1></div>
             <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/data">data</Link>
          </li>
          <li>
            <Link to="/search">search</Link>
          </li>
          <li >
            <Link to="/chart">Chart</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/enterens">Log In</Link>
          </li>
        </ul>
        </div>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;