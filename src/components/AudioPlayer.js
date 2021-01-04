import React, { useState } from 'react';
import {useParams} from 'react-router-dom';

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



const AudioPlayer = (props) => {

    let { id } = useParams();
    const [music, musicState] = useState('');
    const [seek, changeSeek] = useState(0)
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
        sound.currentTime=seek;
        
    }

    const audio = audioClips.map((soundObj, index)=>{
        if(index==id){
            return(
                <React.Fragment>
                    <audio id={index}>
                        <source src={soundObj.sound} type="audio/ogg" />
                        <source src={soundObj.sound} type="audio/mpeg" />
                    </audio>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex justify-content-center">
                                <p>
                                    {soundObj.label} - {soundObj.singer}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 col">
                            <div className="audio-controls">
                                <i className="bi bi-skip-forward-circle fs-2 me-3"></i>
                                { play == 'pause' ? <button onClick={()=>{soundPlay(soundObj.sound, play, index)}} 
                                id= {index} className="btn bi bi-play-circle fs-1 mb-3"></button>: 
                                <button onClick={()=>{soundPlay(soundObj.sound, play, index)}} id={index} className="btn bi bi-pause-circle fs-1 mb-3"></button>}
                                <i className="bi bi-skip-backward-circle fs-2 ms-3"></i>
                            </div>
                        </div>
                        <div className="col-sm-10 col">
                            <div className="d-flex justify-content-center">
                                <input type="range" className="timeline" min="0" max={soundObj.sound.duration} value={seek}
                                onChange={(event)=>setCurrentItem(event, index)} step="1" />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    })

    return(
        <div className="audio-player-container">
            {audio}
        </div>
    )
}

export default AudioPlayer;