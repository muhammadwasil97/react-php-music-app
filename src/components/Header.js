import React, {useState} from 'react';
const Header = () =>{
    return(
        <div className="header-container">
            <div className="row g-0 header-menu">
                <div className="col-sm-3 header-menu-item" id="pink">
                    <h3 className="text-center">Trending</h3>
                </div>
                <div className="col-sm-3 header-menu-item" id="blue">
                    <h3 className="text-center">Top Charts</h3>
                </div>
                <div className="col-sm-3 header-menu-item" id="red">
                    <h3 className="text-center">New Releases</h3>
                </div>
                <div className="col-sm-3 header-menu-item" id="green">
                    <h3 className="text-center">Podcasts</h3>
                </div>
            </div>
        </div>
    )
}

export default Header;