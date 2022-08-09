import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoMain from './VideoMain'
import MenuBar from './Components/MenuBar';
import Catalog from './Catalog';
import Footer from '../src/Components/Container/Footer'
//{/*Main app component*/}
const App = () => {
    return (
        <Router>    {/*Use react-router to link pages*/}
            <div>
                <MenuBar/>
                <Routes>    {/*Route paths go here*/}
                    <Route path={"/"} element={<VideoMain/>}/>
                    <Route path={"/catalog"} element={<Catalog />} />
                    <Route path={"/catalog/tops"} element={<Catalog type={"tops"}/>}/>
                    <Route path={"/catalog/outerwear"} element={<Catalog type={"outerwear"}/>}/>
                    <Route path={"/catalog/shorts"} element={<Catalog type={"shorts"}/>}/>
                    <Route path={"/catalog/pants"} element={<Catalog type={"pants"}/>}/>
                    <Route path={"/catalog/shoes"} element={<Catalog type={"shoes"}/>}/>
                    <Route path={"/catalog/accessories"} element={<Catalog type={"accessories"}/>}/>
                    <Route path={"*"} element={<h3>Page Not Found</h3>}/>

                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;