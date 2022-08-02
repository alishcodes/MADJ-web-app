import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from './MenuBar';

{/*Main app component*/}
const App = () => {
    return (
        <Router>    {/*Use react-router to link pages*/}
            <div>
                <MenuBar/>
                <Routes>    {/*Route paths go here*/}
                </Routes>
            </div>
        </Router>
    );
}

export default App;