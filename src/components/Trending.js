import React from 'react';
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


const Trending = () => {

    const audio =  audioClips.map((soundObj, index) => {
        if(soundObj.trending == true){
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
        <React.Fragment>
            <div className="container-home"> 
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
    </ React.Fragment>
    )
}

export default Trending;