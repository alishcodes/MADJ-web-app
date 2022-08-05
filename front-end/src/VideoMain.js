import React from "react";
import Newvideo from '../src/Components/Newvideo.mp4'

const VideoMain =() => {
    return (
        <div className= ' Video-main'>
            <video src={Newvideo} autoPlay loop muted />
        </div>
    )
}
export default VideoMain