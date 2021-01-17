import React, {useState} from 'react';
import {Howl, Howler} from 'howler';
import {Link} from 'react-router-dom';

var link = 'https://react-php-music-app.000webhostapp.com/'

const audioClips = [
    {sound: link+'tracks/baari.mp3', label: 'Baari', singer: 'Bilal Saeed', trending:true, img: link+'images/bilal.jpg'},
    {sound: link+'tracks/tumtum.mp3', label: 'Tum Tum', singer: 'Tum Tum', trending:true, img: link+'images/ys.jpg'},
    {sound: link+'tracks/yerealhai.mp3', label: 'Ye Real Hai', singer: 'Young Stunners', trending:true, img: link+'images/ys.jpg'},
    {sound: link+'tracks/thaamlo.mp3', label: 'Thaam Lo', singer: 'Atif Aslam', trending:false, img: link+'images/atif.jpg'},
    {sound: link+'tracks/indino.mp3', label: 'In Dino', singer: 'Atif Aslam', trending:false, img: link+'images/atif.jpg'},
    {sound: link+'tracks/yaarian.mp3', label: 'Yaariyan', singer: 'Atif Aslam, Ali Zafar', trending:false, img: link+'images/alizafar.jpg'},
    {sound: link+'tracks/dhaani.mp3', label: 'Dhaani', singer: 'Strings', trending:false, img: link+'images/strings.jpg'},
    {sound: link+'tracks/farhansaeed.mp3', label: 'Kyun Gai', singer: 'Farhan Saeed', trending:false, img: link+'images/farhan.jpg'},
    {sound: link+'tracks/ghalatfehmi.mp3', label: 'Ghalat Fehmi', singer: 'Asim Azhar', trending:false, img: link+'images/asim.jpg'},
    {sound: link+'tracks/karachiislove.mp3', label: 'Karachi Is Love', singer: 'Young Stunners', trending:true, img: link+'images/ys.jpg'},
    {sound: link+'tracks/merabichrayaar.mp3', label: 'Mera Bicchra Yaar', singer: 'Strings', trending:false, img: link+'images/strings.jpg'},
    {sound: link+'tracks/najanaykyon.mp3', label: 'Na Janay Kyon', singer: 'Strings', trending:true, img: link+'images/strings.jpg'},
    {sound: link+'tracks/pijaon.mp3', label: 'Pi Jaon', singer: 'Farhan Saeed', trending:false, img: link+'images/farhan.jpg'},
    {sound: link+'tracks/roiyaan.mp3', label: 'Roiyaan', singer: 'Farhan Saeed', trending:false, img: link+'images/farhan.jpg'}
]


const Home = () => {

    const audio =  audioClips.map((soundObj, index) => {
        return(
            <div className="col-sm-3 mt-5">
                <div className="d-sm-flex justify-content-start">
                    <Link to={`/audio-player/${index}`} >
                        <div key={index} className="card song-card mx-1 my-3 my-sm-0">
                            <img src={soundObj.img} className="card-img-top song-thumbnail" />
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