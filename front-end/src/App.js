import {BrowserRouter, Route, Routes} from "react-router-dom";
import VideoMain from './VideoMain'
import MenuBar from './Components/MenuBar';
import Catalog from './Catalog';
import Footer from '../src/Components/Container/Footer';
import {ShoppingCartProvider} from './contexts/ShoppingCartContext';
import CheckoutPage from "./checkoutPages/CheckoutPage";

import CheckoutPage from "./Components/checkoutPages/CheckoutPage";

/**
 * App page that renders the main components for the website
 *
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
    return (
        <BrowserRouter>    {/*Use react-router to link pages*/}
            <div>
                <ShoppingCartProvider>
                    <MenuBar/>
                    <Routes>    {/*Route paths go here*/}
                        <Route path={"/"} element={<VideoMain/>}/>
                        <Route path={"/checkout"} element={<CheckoutPage/>}/>
                        <Route path={"/catalog"} element={<Catalog/>}/>
                        <Route path={"/catalog/tops"} element={<Catalog type={"Tops"}/>}/>
                        <Route path={"/catalog/outerwear"} element={<Catalog type={"Outerwear"}/>}/>
                        <Route path={"/catalog/shorts"} element={<Catalog type={"Shorts"}/>}/>
                        <Route path={"/catalog/pants"} element={<Catalog type={"Pants"}/>}/>
                        <Route path={"/catalog/shoes"} element={<Catalog type={"Shoes"}/>}/>
                        <Route path={"/catalog/accessories"} element={<Catalog type={"Accessories"}/>}/>
                        <Route path={"/Checkout"} element={<CheckoutPage/>}/>
                        <Route path={"*"} element={<h3>Page Not Found</h3>}/>
                    </Routes>
                    <Footer/>
                </ShoppingCartProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;