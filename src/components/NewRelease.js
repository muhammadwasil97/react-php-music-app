import React from 'react';
import {Link} from 'react-router-dom';

const audioClips = [
    {sound: 'http://localhost/music_app_backend/tracks/baari.mp3', label: 'Baari', singer: 'Bilal Saeed'},
    {sound: 'http://localhost/music_app_backend/tracks/tumtum.mp3', label: 'Tum Tum', singer: 'Tum Tum'},
    {sound: 'http://localhost/music_app_backend/tracks/yerealhai.mp3', label: 'Ye Real Hai', singer: 'Young Stunners'},
    {sound: 'http://localhost/music_app_backend/tracks/thaamlo.mp3', label: 'Thaam Lo', singer: 'Atif Aslam'}
]


const NewRelease = () => {

    const audio =  audioClips.map((soundObj, index) => {
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

export default NewRelease;