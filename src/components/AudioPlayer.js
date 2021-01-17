import React, { useState } from 'react';
import {Link, useParams} from 'react-router-dom';
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



const AudioPlayer = (props) => {

    let { id } = useParams();
    const [music, musicState] = useState('');
    const [seek, changeSeek] = useState(1)
    const [play, playState] = useState('pause');

    const soundPlay = (src, playing, index) => {
        musicState(src);
        var sound = document.getElementById(index)
        if(playing == 'pause'){
            sound.play();
            playState('play');
            musicState(index)
            console.log(id);
            console.log(sound.currentTime);
        }
        else if(playing == 'play'){
            sound.pause();
            playState('pause');
            musicState(index)
            console.log(sound.currentTime);

        }
    }

    const setCurrentItem = (e, index) => {
        var sound = document.getElementById(index)
        changeSeek(e.target.value);
        sound.volume=seek;
        
    }

    const audio = audioClips.map((soundObj, index)=>{
        if(index==id){
            return(
                <React.Fragment>
                    <audio id={index}>
                        <source src={soundObj.sound} type="audio/ogg" />
                        <source src={soundObj.sound} type="audio/mpeg" />
                    </audio>
                    <div className="row mb-5 me-4">
                        <div className="col-sm-10">
                            <div className="d-flex justify-content-center">
                                <p className="pe-5 text-center">
                                    {soundObj.label} - {soundObj.singer}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row ms-5">
                        <div className="col-sm-8">
                            <div className="audio-controls">
                                <Link to={`/audio-player/${id-1}`} className="bi bi-skip-forward-circle fs-2"></Link>
                                { play == 'pause' ? <button onClick={()=>{soundPlay(soundObj.sound, play, index)}} 
                                id= {index} className="btn bi bi-play-circle fs-1 mb-3"></button>: 
                                <button onClick={()=>{soundPlay(soundObj.sound, play, index)}} id={index} className="btn bi bi-pause-circle fs-1 mb-3"></button>}
                                <Link to={`/audio-player/${-(-1-id)}`} className="bi bi-skip-backward-circle fs-2"></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row me-5">
                        <div className="col-sm-10">
                            <p className="text-center pe-3">Volume</p>
                        </div>
                    </div>
                    <div className="row ms-5">
                        <div className="col-sm-9 px-5">
                            <div className="d-flex justify-content-center px-5">
                                <input type="range" className="timeline" min="0" max='1' value={seek}
                                onInput={(event)=>setCurrentItem(event, index)} step="0.01" />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    })
    const image = audioClips.map((soundObj, index)=>{
        if(index==id){
            return(
                <React.Fragment>
                    <img src={soundObj.img} width="50%" />
                </React.Fragment>
            )
        }
    })

    return(
        <React.Fragment>
        <div className="row">
            <div className="col-sm-12">
                <div className="d-flex justify-content-center ms-5 ps-5 mt-4">
                    {image}
                </div>
            </div>
        </div>
        <div className="audio-player-container py-4">
            {audio}
        </div>
        </React.Fragment>
    )
}

export default AudioPlayer;