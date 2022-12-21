import {Link} from 'react-router-dom';

function NavBar() {
    return <div>
        
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="nav-item">
                  <Link className="navbar-brand" to="/">
                     AlmaBetter
                  </Link>
              </Link>
          <button 
             className="navbar-toggler"  
             type="button" 
             data-bs-toggle="collapse" 
             data-bs-target="#navbarNav" 
             aria-controls="navbarNav" 
             aria-expanded="false" 
             aria-label="Toggle navigation"
             >
              <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                  <li className="nav-item">
                  <Link className="nav-link" to="/">
                     Home
                  </Link>
              </li>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/Blog">
                     Blog
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/ContactMe">
                     Contact Me
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  }

export default NavBar;




/*  
   <li className="nav-item">
                <a className="nav-link" href="#">ContactMe</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
              */