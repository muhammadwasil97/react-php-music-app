import React from 'react';
import {useParams, Link} from 'react-router-dom';
var link = 'https://react-php-music-app.000webhostapp.com/'

const audioClips = [
    {sound: 'https://react-php-music-app.000webhostapp.com/tracks/baari.mp3', label: 'Baari', singer: 'Bilal Saeed', trending:true},
    {sound: 'https://react-php-music-app.000webhostapp.com/tracks/tumtum.mp3', label: 'Tum Tum', singer: 'Tum Tum', trending:true},
    {sound: 'https://react-php-music-app.000webhostapp.com/tracks/yerealhai.mp3', label: 'Ye Real Hai', singer: 'Young Stunners', trending:true},
    {sound: 'https://react-php-music-app.000webhostapp.com/tracks/thaamlo.mp3', label: 'Thaam Lo', singer: 'Atif Aslam', trending:false},
    {sound: 'https://react-php-music-app.000webhostapp.com/tracks/indino.mp3', label: 'In Dino', singer: 'Atif Aslam', trending:false},
    {sound: 'https://react-php-music-app.000webhostapp.com/tracks/yaarian.mp3', label: 'Yaariyan', singer: 'Atif Aslam, Ali Zafar', trending:false},
    {sound: 'https://react-php-music-app.000webhostapp.com/tracks/dhaani.mp3', label: 'Dhaani', singer: 'Strings', trending:false},
    {sound: 'https://react-php-music-app.000webhostapp.com/tracks/farhansaeed.mp3', label: 'Kyun Gai', singer: 'Farhan Saeed', trending:false},
    {sound: 'https://react-php-music-app.000webhostapp.com/tracks/ghalatfehmi.mp3', label: 'Ghalat Fehmi', singer: 'Asim Azhar', trending:false},
    {sound: 'https://react-php-music-app.000webhostapp.com/tracks/karachiislove.mp3', label: 'Karachi Is Love', singer: 'Young Stunners', trending:true},
    {sound: 'https://react-php-music-app.000webhostapp.com/tracks/merabichrayaar.mp3', label: 'Mera Bicchra Yaar', singer: 'Strings', trending:false},
    {sound: 'https://react-php-music-app.000webhostapp.com/tracks/najanaykyon.mp3', label: 'Na Janay Kyon', singer: 'Strings', trending:true},
    {sound: 'https://react-php-music-app.000webhostapp.com/tracks/pijaon.mp3', label: 'Pi Jaon', singer: 'Farhan Saeed', trending:false},
    {sound: 'https://react-php-music-app.000webhostapp.com/tracks/roiyaan.mp3', label: 'Roiyaan', singer: 'Farhan Saeed', trending:false}
]

const Singer = () => {
    let {singer} = useParams();
    const audio =  audioClips.map((soundObj, index) => {
        if(soundObj.singer == singer){
            return(
                <tr>
                    <th scope="row" >{index}</th>
                    <Link to={`/audio-player/${index}`} >
                        <td>{soundObj.label}</td>
                    </Link>
                    <td>{soundObj.singer}</td>
                </tr>
                )
            }
        }
    )
    return(
        <div className="container-home">
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-start">
                        <h1 style={{fontSize:'45px'}}>{singer}</h1><i style={{fontSize:'45px'}} class="bi bi-headphones"></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col mt-5">
                    <div className="d-sm-flex justify-content-start">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        #
                                    </th>
                                    <th scope="col">
                                        Label
                                    </th>
                                    <th scope="col">
                                        Singer
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {audio}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singer;