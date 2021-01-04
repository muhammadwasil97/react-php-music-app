import React, {useState} from 'react';
import {Howl, Howler} from 'howler';
import {Link} from 'react-router-dom';

const audioClips = [
    {sound: 'http://localhost/music_app_backend/tracks/baari.mp3', label: 'Baari', singer: 'Bilal Saeed', trending:true},
    {sound: 'http://localhost/music_app_backend/tracks/tumtum.mp3', label: 'Tum Tum', singer: 'Tum Tum', trending:true},
    {sound: 'http://localhost/music_app_backend/tracks/yerealhai.mp3', label: 'Ye Real Hai', singer: 'Young Stunners', trending:true},
    {sound: 'http://localhost/music_app_backend/tracks/thaamlo.mp3', label: 'Thaam Lo', singer: 'Atif Aslam', trending:false},
    {sound: 'http://localhost/music_app_backend/tracks/indino.mp3', label: 'In Dino', singer: 'Atif Aslam', trending:false},
    {sound: 'http://localhost/music_app_backend/tracks/yaarian.mp3', label: 'Yaariyan', singer: 'Atif Aslam, Ali Zafar', trending:false},
    {sound: 'http://localhost/music_app_backend/tracks/dhaani.mp3', label: 'Dhaani', singer: 'Strings', trending:false},
    {sound: 'http://localhost/music_app_backend/tracks/farhansaeed.mp3', label: 'Kyun Gai', singer: 'Farhan Saeed', trending:false},
    {sound: 'http://localhost/music_app_backend/tracks/ghalatfehmi.mp3', label: 'Ghalat Fehmi', singer: 'Asim Azhar', trending:false},
    {sound: 'http://localhost/music_app_backend/tracks/karachiislove.mp3', label: 'Karachi Is Love', singer: 'Young Stunners', trending:true},
    {sound: 'http://localhost/music_app_backend/tracks/merabichrayaar.mp3', label: 'Mera Bicchra Yaar', singer: 'Strings', trending:false},
    {sound: 'http://localhost/music_app_backend/tracks/najanaykyon.mp3', label: 'Na Janay Kyon', singer: 'Strings', trending:true},
    {sound: 'http://localhost/music_app_backend/tracks/pijaon.mp3', label: 'Pi Jaon', singer: 'Farhan Saeed', trending:false},
    {sound: 'http://localhost/music_app_backend/tracks/roiyaan.mp3', label: 'Roiyaan', singer: 'Farhan Saeed', trending:false}
]



const Home = () => {

    const audio =  audioClips.map((soundObj, index) => {
        return(
            <div className="col-sm-3 mt-5">
                <div className="d-sm-flex justify-content-start">
                    <Link to={`/audio-player/${index}`} >
                        <div key={index} className="card song-card mx-1 my-3 my-sm-0">
                            <img src="./guitar.jpeg" className="card-img-top song-thumbnail" />
                            <div className="card-body song-card-body">
                                <p className="song-title">{soundObj.label}</p>
                                <p className="singer-name">{soundObj.singer}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            )
        }
    )

    return(
        <React.Fragment>
            <div className="container-home"> 
                <div className="row g-0">
                    
                            {audio}
                        
                </div>
            </div>
    </ React.Fragment>
    )
}

export default Home;