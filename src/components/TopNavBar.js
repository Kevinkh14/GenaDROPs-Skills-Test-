import '../Styles/NavBar.css'
import {IoCreate} from "react-icons/io5"
import {SiLeaflet} from "react-icons/si"
import {FaSearch}from "react-icons/fa"
import {Link} from 'react-router-dom'
function TopNavBar() {
    return (
      <div >
        <div className = 'top-nav'>
          <Link to = "/" style = {{textDecoration :'none'}}>
            <section className = 'title'>
            <h1 id = 'title-txt'>gena <br/>DR<br/>OP.
            </h1>
            <p className = 'cmr'>create, mint, resell</p>
            </section>
            </Link>
            <div className = 'icons-top'>
              <Link to = "/Create" style = {{textDecoration :'none'}}><IoCreate size = '2em' color = '#00CC9B'/>
                <h3>create</h3>
              </Link>  
              <Link to = "/Mint" style = {{textDecoration :'none'}}>
                <SiLeaflet size = '2em' color = '#00CC9B'/>
                <h3>mint</h3>
                </Link>
                <Link to = "/Explore" style = {{textDecoration :'none'}}>
                <FaSearch size = '2em' color = '#00CC9B'/>
                <h3>explore</h3>
                </Link>
            </div>
        </div>
      </div>
    );
  }
  
  export default TopNavBar;