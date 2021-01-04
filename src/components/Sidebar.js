import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    const [sidebar, sidebarOpen] = useState('sidebar');

    return(
        <React.Fragment>
            <div className="header">
                <div className="d-sm-none d-block sidebar-nav">
                    <i className="bi bi-list" onClick={()=>sidebarOpen('sidebar-show')}></i>
                </div>
            </div>
            <div className={sidebar}>
                <div className="d-sm-none d-block">
                    <div className="row mt-5">
                        <div className="col">
                            <i className="bi bi-x-circle sidebar-close" onClick={()=>sidebarOpen('sidebar')}></i>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col logo">
                        <h4 className="text-center text-white text-uppercase fw-bold">Music App</h4>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <h6 className="sidebar-title">Pages</h6>
                        <ul className="sidebar-list">
                            <li>
                                <Link to="/" className="sidebar-link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/trending" className="sidebar-link">
                                    Trending
                                </Link>
                            </li>
                            <li>
                                <Link to="/new" className="sidebar-link">
                                    New Releases
                                </Link>
                            </li>
                            <li>
                                <Link to="/top" className="sidebar-link">
                                    Top Charts
                                </Link>
                            </li>
                            <li>
                                <Link to="/podcast" className="sidebar-link">
                                    Podcasts
                                </Link>
                            </li>
                            <li>
                                <a className="sidebar-link">
                                    XYZ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;