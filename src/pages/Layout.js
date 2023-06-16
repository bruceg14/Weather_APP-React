import { Outlet, Link } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
  return (
    <div id="layout_background">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to= "/submitHis">History</Link>
          </li>
          <li>
            <Link to = "/currentWeather">Current Weather</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
    
  )
};

export default Layout;
// import { Outlet, Link } from "react-router-dom";

// const Layout = ({children}) => {
//     return (
//         <>
//             <Header/>
//             <main>{children}</main>
//             <Footer/>
//         </>
//     )
// }


// function Header() {
//     return (
//         <>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     {/* <li>
//                         <Link to="/blogs">Blogs</Link>
//                     </li>
//                     <li>
//                         <Link to="/contact">Contact</Link>
//                     </li> */}
//                  </ul>
//             </nav>
//             <Outlet />
//         </>
//     )
// }

// function Footer() {
//     return (
//         <p>Created by Bruce Guo</p>
//     )
// }

// export default Layout