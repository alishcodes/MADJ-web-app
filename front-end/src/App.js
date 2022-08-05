import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from './MenuBar';
import VideoMain from './VideoMain'

{/*Main app component*/}
const App = () => {
    return (
        <Router>    {/*Use react-router to link pages*/}
            <div>
                <MenuBar/>
                <VideoMain/>
                <Routes>    {/*Route paths go here*/}
                </Routes>
            </div>
        </Router>
    );
}

export default App;