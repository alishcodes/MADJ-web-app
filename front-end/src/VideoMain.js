import React from "react";
import Newvideo from '../src/Components/Newvideo.mp4'

/**
 * Component that renders the video on the home page
 *
 * @returns {JSX.Element}
 * @constructor
 */
const VideoMain =() => {
    return (
        <div className= ' VideoMain'>
            <video src={Newvideo} autoPlay loop muted />
        </div>
    )
}
export default VideoMain