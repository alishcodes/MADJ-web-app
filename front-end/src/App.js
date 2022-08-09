import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from './MenuBar';
import VideoMain from './VideoMain'
<<<<<<< Updated upstream
=======
import MenuBar from './Components/MenuBar';
import Catalog from './Catalog';
import  FooterContainer  from './Components/Footer'
>>>>>>> Stashed changes

{/*Main app component*/}
const App = () => {
    return (
        <Router>    {/*Use react-router to link pages*/}
            <div>
                <MenuBar/>
<<<<<<< Updated upstream
                <VideoMain/>
=======
                {/*<FooterContainer/>*/}
>>>>>>> Stashed changes
                <Routes>    {/*Route paths go here*/}
                </Routes>
            </div>
        </Router>
    );
}

export default App;