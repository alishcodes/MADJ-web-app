import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from './Components/MenuBar';
import Catalog from './Catalog';

{/*Main app component*/}
const App = () => {
    return (
        <Router>    {/*Use react-router to link pages*/}
            <div>
                <MenuBar/>
                <Routes>    {/*Route paths go here*/}
                    <Route path={"/catalog"} element={<Catalog/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;