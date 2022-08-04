import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from './Components/MenuBar';
import Catalog from './Catalog';

{/*Main app component*/}
const App = () => {
    return (
        <Router>    {/*Use react-router to link pages*/}
            <div>
                <MenuBar/>
                <Catalog/>
                <Routes>    {/*Route paths go here*/}
                </Routes>
            </div>
        </Router>
    );
}

export default App;