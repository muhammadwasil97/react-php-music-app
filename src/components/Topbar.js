import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

const Topbar = () => {

    const [username, setUser] = useState('');

    const user = () => {
        $.ajax(
            {
                url:'http://localhost/music_app_backend/data.php',
                method: 'GET',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                success: function(data){
                    console.log(data.username)
                    return(
                        setUser(data.username)
                    );
                }
            }
        )
    }

    useEffect(()=>{
        user()
    })

    return(
        <div className="container-topbar">
            <div className="row g-0 bg-white" style={{height:'50px'}}>
                <div className="col-sm-6 col ps-2 mt-1">
                    <div className="d-flex justify-content-start">
                        <Link className="btn btn-primary" to="/about">About Us</Link>
                    </div>
                </div>
                <div className="col-sm-6 col mt-1">
                    {
                        username ? <div className="d-flex justify-content-end">
                        <Link to="/userinfo" className="text-center me-4" style={{color: 'green', textDecoration:'none'}}>{username}</Link>
                        <a href="logout.php" className="btn btn-danger me-1">Logout</a>
                    </div>: <div className="d-flex justify-content-end">
                        <a href="signup.php" className="btn btn-success me-3" style={{color: 'black', textDecoration: 'none'}}>Signup</a>
                        <a href="login.php" className=" btn btn-info me-3" style={{color: 'black', textDecoration: 'none'}}>Login</a>
                    </div>
                    }
                </div>
            </div>
            <div className="row g-0">
                <div className="col-sm-3 col" id="pink">
                    <div className="header-menu-item">
                        <Link className="h3" to="/trending">
                            Trending
                        </Link>
                    </div>  
                </div>
                <div className="col-sm-3 col" id="blue">
                    <div className="header-menu-item">
                        <Link className="h3" to="/top">
                            Top Charts
                        </Link>
                    </div>  
                </div>
                <div className="col-sm-3 col" id="red">
                    <div className="header-menu-item">
                        <Link className="h3" to="/new">
                            New Releases
                        </Link>
                    </div>  
                </div>
                <div className="col-sm-3 col" id="green">
                    <div className="header-menu-item">
                        <Link className="h3" to="/podcast">
                            Podcasts
                        </Link>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Topbar