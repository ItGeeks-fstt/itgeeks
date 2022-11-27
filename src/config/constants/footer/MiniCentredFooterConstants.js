import { ReactComponent as InstagramIcon } from "../../../images/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../../images/linkedin-icon.svg"
import { ReactComponent as Facebookcon } from "../../../images/facebook-icon.svg"

export  const links = [
    {
      link:"/",
      name:"Home"
    },
    {
      link:"/aboutus",
      name:"About Us"
    },
    {
      link:"/contactus",
      name:"Contact Us"
    },
];

export const socialLinks = [
      {
        link:"https://www.instagram.com/it_geeks_fstt",
        icon:<InstagramIcon fill={"white".toString()} />
      },
      {
        link:"https://www.linkedin.com/company/it-geeks-fstt/",
        icon:<LinkedinIcon />
      },
      {
        link:"https://web.facebook.com/groups/2877961105835336",
        icon:<Facebookcon />
      },

    ];
   
