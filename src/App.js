import React from "react";
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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
         
        <Route path="/contactus" element={<ContactUsPage />} />
            
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/" element={<SaaSProductLandingPage />} />
        <Route path="*" element={<PageNotFound />} />
         
        </Routes>
      </Router>
    </>
  );
}

