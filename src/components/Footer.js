import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
<footer className="bg-dark text-center text-lg-start">
  <div className="py-5">
    <div className="row">
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase text-light text-start"><img src="logo.png" className="img-thumbnail ms-5" width="100" /></h5>

        <h5 className="text-light text-start ms-5">
          GO MUSIC
        </h5>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase text-white">Pages</h5>

        <ul className="list-unstyled">
          <li>
            <Link to="/about"  className="sidebar-link">About Us</Link>
          </li>
          <li>
            <Link to="/trending"  className="sidebar-link">Trending</Link>
          </li>
          <li>
            <Link to="/new"  className="sidebar-link">New Releases</Link>
          </li>
          <li>
            <Link to="/top"  className="sidebar-link">Top Charts</Link>
          </li>
          <li>
            <Link to="/podcast"  className="sidebar-link">Podcasts</Link>
          </li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase text-white mb-0">Artists</h5>

        <ul className="list-unstyled">
            <li>
                <Link to="/singer/Strings" className="sidebar-link">
                    Strings
                </Link>
            </li>
            <li>
                <Link to="/singer/Young Stunners" className="sidebar-link">
                    Young Stunners
                </Link>
            </li>
            <li>
                <Link to="/singer/Asim Azhar" className="sidebar-link">
                    Asim Azhar
                </Link>
            </li>
            <li>
                <Link to="/singer/Atif Aslam" className="sidebar-link">
                    Atif Aslam
                </Link>
            </li>
            <li>
                <Link to="/singer/Farhan Saeed" className="sidebar-link">
                    Farhan Saeed
                </Link>
            </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="text-center py-3 mb-n5 text-light" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright
    <Link to="/" className="ps-1 text-light">Go Music</Link>
  </div>
</footer>
    )
}

export default Footer;