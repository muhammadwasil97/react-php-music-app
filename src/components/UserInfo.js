import React,{useEffect, useState} from 'react';
import $ from 'jquery';

const UserInfo = () => {
    const [username, setUser] = useState('');

    const user = () => {
        $.ajax(
            {
                url:'https://react-php-music-app.000webhostapp.com/data.php',
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
        <div className="container-home">
            <div className="row mt-3">
                <div className="col">
                    <h3 className="text-start">
                        User Info
                    </h3>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <h4 className="text-start">User Name: <span style={{color:'green', fontWeight:'bold'}}>{username}</span></h4>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <div className="d-flex justify-content-start">
                        <img src='/logo.png' className="img-thumbnail" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;