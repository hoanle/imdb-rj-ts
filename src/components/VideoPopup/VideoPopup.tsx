import React, { useState, useEffect } from 'react';
import YouTube from '@u-wave/react-youtube';
import './VideoPopup.css';
import VideoApis from './../../apis/VideoApis';
import VideoPopupProps from '../../types/VideoPopupProps';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

const VideoPopup = (props: VideoPopupProps) => {
    const [videoId, setVideoId] = useState(undefined)

    const getMovieVideo = async () => {
        VideoApis.getMovieVideos(props.id).then((response: any) => {
            console.log(response.data)
            let results = response.data.results;

            if (results != null && results.length > 0) {
                setVideoId(results[0].key)
            }
        });
    }

    useEffect(() => {
        if (props.isMovie) {
            getMovieVideo()
        }
        
    }, [videoId])

    return (
        <div className="VideoPopup-div">
            <FontAwesomeIcon icon={faArrowCircleLeft} onClick={props.onClose} className="VideoPopup-back"/>
            {
                videoId == undefined ? "Loading" :
                    <YouTube
                        className="VideoPopup-youtube"
                        video={videoId}
                        autoplay
                    />
            }
        </div>

    )
}

export default VideoPopup;