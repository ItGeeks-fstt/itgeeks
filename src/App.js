import React, { lazy, Suspense, useState } from "react";
import GlobalStyles from 'styles/GlobalStyles';
import SaaSProductLandingPage from "demos/SaaSProductLandingPage";
import { HashRouter, Routes, Route} from "react-router-dom";
import "./index.css";
/* Inner Pages */
//  import LoginPage from "pages/Login.js";
//  import SignupPage from "pages/Signup.js";
// import PricingPage from "pages/Pricing.js";
// import BlogIndexPage from "pages/BlogIndex.js";
// import TermsOfServicePage from "pages/TermsOfService.js";


// import AboutUsPage from "pages/AboutUs.js";
// import ContactUsPage from "pages/ContactUs.js";
// import PageNotFound from "pages/PageNotFound.js";
import LoeadingSpinners from "./components/LoeadingSpinners/LoeadingSpinners";

const  AboutUsPage =lazy(()=>import ("pages/AboutUs.js"));
const  ContactUsPage  =lazy(()=>import ("pages/ContactUs.js")); 
const  PageNotFound  =lazy(()=>import ("pages/PageNotFound.js"));

// improing the loading tame of the page :



// import PrivacyPolicyPage from "pages/PrivacyPolicy.js";



export const ThemeContext = React.createContext(null);
if(!localStorage.getItem('theme'))localStorage.setItem('theme','light');

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component

  const [theme,setTheme]=useState(localStorage.getItem("theme"));
  const togglerTheme=()=>{
    const themeToggler=theme==='light'?'dark':'light';
  setTheme(themeToggler)
  localStorage.setItem('theme',themeToggler);
  // console.log('theme',theme);
}


  return (
    <div  id={theme}>
    <ThemeContext.Provider value={{togglerTheme,theme}}>
      <GlobalStyles />


      <Suspense fallback={<LoeadingSpinners/>}>
      <HashRouter>
        <Routes>   
        <Route path="*" element={<PageNotFound />} />               
        <Route path="/" element={<SaaSProductLandingPage />} />
        <Route path="contactus"  element={<ContactUsPage />} />          
        <Route path="aboutus"  element={<AboutUsPage />} />
        </Routes>
      </HashRouter>  
      </Suspense>
    </ThemeContext.Provider>
    </div>
  );
}

