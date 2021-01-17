import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


const Sidebar = () => {
    const [sidebar, sidebarOpen] = useState('sidebar');
    const [collapse, showCollapse] = useState('collapse');

    const collapseList = (e) => {
        e.preventDefault();
        if(collapse=="collapse"){
            setTimeout(
                function(){
                    showCollapse('collapse show')
                }, 350   
            )  
            showCollapse('collapsing')
        }
        else{ 
            setTimeout(
                function(){
                    showCollapse('collapse')
                }, 350   
            )  
            showCollapse('collapsing')
        }
    }
    

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
                        <Link to="/" className="sidebar-link">
                            <img src="logo.png" className="img-thumbnail ms-5" width="100" />
                        </Link>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <div className="d-flex justify-content-center">
                            <a className="sidebar-title" onClick={collapseList}>Artists</a>
                        </div>
                        <div className={collapse}>
                            <ul className='sidebar-list'>
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
            </div>
        </React.Fragment>
    );
}

export default Sidebar;