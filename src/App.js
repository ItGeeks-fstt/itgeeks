import GlobalStyles from 'styles/GlobalStyles';
import SaaSProductLandingPage from "demos/SaaSProductLandingPage";
import {HashRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import AboutUsPage from "pages/AboutUs"
import ContactUsPage from "pages/ContactUs"
import PageNotFound from "./pages/PageNotFound";



export default function App() {
    // If you want to disable the animation just use the disabled `prop` like below on your page's component


    return (
        <div>
            <GlobalStyles/>
            <HashRouter>
                <Routes>
                    <Route path="*" element={<PageNotFound/>}/>
                    <Route path="/" element={<SaaSProductLandingPage/>}/>
                    <Route path="contactus" element={<ContactUsPage/>}/>
                    <Route path="aboutus" element={<AboutUsPage/>}/>
                </Routes>
            </HashRouter>


        </div>
    );
}

