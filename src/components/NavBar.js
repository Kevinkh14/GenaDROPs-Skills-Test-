import '../Styles/NavBar.css'
import {IoCreate} from "react-icons/io5"
import {SiLeaflet} from "react-icons/si"
import {FaSearch}from "react-icons/fa"
import {Link} from 'react-router-dom'
function NavBar() {
    return (
      <div >
        <div className = 'nav'>
          <Link to = "/" >
            <section className = 'title'>
            <h1>gena</h1>
            <h1>DR</h1>
            <h1>OP.</h1>
            <p>create,mint,resell</p>
            </section>
            </Link>
            <div>
              <Link to = "/Create"><IoCreate size = '8em' color = '#00CC9B'/>
                <h3>create</h3>
              </Link>  
              <Link to = "/Mint">
                <SiLeaflet size = '8em' color = '#00CC9B'/>
                <h3>mint</h3>
                </Link>
                <Link to = "/Explore">
                <FaSearch size = '8em' color = '#00CC9B'/>
                <h3>explore</h3>
                </Link>
            </div>
        </div>
      </div>
    );
  }
  
  export default NavBar;