import React from "react";
import Newvideo from '../src/Components/Newvideo.mp4'

const VideoMain =() => {
    return (
        <div className= ' VideoMain'>
            <video src={Newvideo} autoPlay loop muted />
        </div>
    )
}
export default VideoMain