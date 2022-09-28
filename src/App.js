import React, { useState } from "react";
import GlobalStyles from 'styles/GlobalStyles';
import "./index.css";
/* Inner Pages */
//  import LoginPage from "pages/Login.js";
//  import SignupPage from "pages/Signup.js";
// import PricingPage from "pages/Pricing.js";
import AboutUsPage from "pages/AboutUs.js";
import ContactUsPage from "pages/ContactUs.js";
// import BlogIndexPage from "pages/BlogIndex.js";
// import TermsOfServicePage from "pages/TermsOfService.js";
import PageNotFound from "pages/PageNotFound.js";
// import PrivacyPolicyPage from "pages/PrivacyPolicy.js";


import SaaSProductLandingPage from "demos/SaaSProductLandingPage";
import { HashRouter, Routes, Route} from "react-router-dom";
export const ThemeContext = React.createContext(null);

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  const [theme,setTheme]=useState('light');
  const togglerTheme=()=>{
  setTheme(theme==='light'?'dark':'light')
  console.log('theme',theme);
}


  return (
    <div  id={theme}>
    <ThemeContext.Provider value={{togglerTheme}}>
      <GlobalStyles />
      <HashRouter>
        <Routes>   
        <Route path="*" element={<PageNotFound />} />               
        <Route path="/" element={<SaaSProductLandingPage />} />
        <Route path="contactus"  element={<ContactUsPage />} />          
        <Route path="aboutus"  element={<AboutUsPage />} />
        </Routes>
      </HashRouter>  
    </ThemeContext.Provider>
    </div>
  );
}

