import { createGlobalStyle } from 'styled-components'
import  { globalStyles } from 'twin.macro'


 

const GlobalStyles = createGlobalStyle(globalStyles, `
// cusstom css styles for dark /light mood
 #light {
  background-color: #fff;
}
 #dark{
  background-color: #1d2a35!important;

}

#dark p{
   color: #ddd!important;
  }
  #dark h1,#dark h2,#dark .title{
  color:white;
}
#dark img{
  filter:brightness(.8)
}
#dark svg {
  color:white!important;
}

   /* Below animations are for modal created using React-Modal */z
     .ReactModal__Overlay {
     transition: transform 300ms ease-in-out;
     transition-delay: 100ms;
     transform: scale(0);
   }
   .ReactModal__Overlay--after-open{
     transform: scale(1);
   }
   .ReactModal__Overlay--before-close{
     transform: scale(0);
   }
   .activeLink{
    color:rgb(100 21 255 / var(--tw-text-opacity));


   }
   .hasError{
    background-color:#e03131!important;
   }
`)

export default GlobalStyles