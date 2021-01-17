import React from 'react';
import {Link} from 'react-router-dom';

var link = 'https://react-php-music-app.000webhostapp.com/'

const audioClips = [
    {sound: link+'tracks/baari.mp3', label: 'Baari', singer: 'Bilal Saeed', trending:true, img: link+'images/bilal.jpg', pod: false},
    {sound: link+'tracks/tumtum.mp3', label: 'Tum Tum', singer: 'Tum Tum', trending:true, img: link+'images/ys.jpg', pod: false},
    {sound: link+'tracks/yerealhai.mp3', label: 'Ye Real Hai', singer: 'Young Stunners', trending:true, img: link+'images/ys.jpg', podcast: true},
    {sound: link+'tracks/thaamlo.mp3', label: 'Thaam Lo', singer: 'Atif Aslam', trending:false, img: link+'images/atif.jpg', podcast: true},
    {sound: link+'tracks/indino.mp3', label: 'In Dino', singer: 'Atif Aslam', trending:false, img: link+'images/atif.jpg', podcast: true},
    {sound: link+'tracks/yaarian.mp3', label: 'Yaariyan', singer: 'Atif Aslam, Ali Zafar', trending:false, img: link+'images/alizafar.jpg', podcast: true},
    {sound: link+'tracks/dhaani.mp3', label: 'Dhaani', singer: 'Strings', trending:false, img: link+'images/strings.jpg', pod: false},
    {sound: link+'tracks/farhansaeed.mp3', label: 'Kyun Gai', singer: 'Farhan Saeed', trending:false, img: link+'images/farhan.jpg', podcast: true},
    {sound: link+'tracks/ghalatfehmi.mp3', label: 'Ghalat Fehmi', singer: 'Asim Azhar', trending:false, img: link+'images/asim.jpg', podcast: true},
    {sound: link+'tracks/karachiislove.mp3', label: 'Karachi Is Love', singer: 'Young Stunners', trending:true, img: link+'images/ys.jpg', pod: false},
    {sound: link+'tracks/merabichrayaar.mp3', label: 'Mera Bicchra Yaar', singer: 'Strings', trending:false, img: link+'images/strings.jpg', pod: false},
    {sound: link+'tracks/najanaykyon.mp3', label: 'Na Janay Kyon', singer: 'Strings', trending:true, img: link+'images/strings.jpg', pod: false},
    {sound: link+'tracks/pijaon.mp3', label: 'Pi Jaon', singer: 'Farhan Saeed', trending:false, img: link+'images/farhan.jpg', podcast: true},
    {sound: link+'tracks/roiyaan.mp3', label: 'Roiyaan', singer: 'Farhan Saeed', trending:false, img: link+'images/farhan.jpg', podcast: true}
]


const Podcast = () => {

    const audio =  audioClips.map((soundObj, index) => {
        if(soundObj.podcast){
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

export default Podcast;