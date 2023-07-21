import '../styles/globals.css';
import {Amplify} from "aws-amplify";
import {FeaturedPrompts, HomePageShop, studioTheme, studiotheme} from "../ui-components";
import { AmplifyProvider } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter";
import "../styles/reset.css";
import Navbar from './components/Navbar/Navbar';
import Footer from '../ui-components/Footer';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"
import Nav from "../ui-components/Nav";

import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  // // Declare React States
  // const [errorMessages, setErrorMessages] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // // User Login info
  // const database = [
  //   {
  //     username: "user1",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password:"pass2"
  //   }
  // ];

  // const errors = {
  //   uname: "invalid username",
  //   pass: "invalid password"
  // };

  // const handleSubmit = (event) => {
  //   //Prevent page reload
  //   event.preventDefault();
  // }

  // var{uname, pass} = document.forms[0];

  // // Find user login info
  // const userData = database.find((user) => user.username === uname.value);

  // // Compare user info
  // if (userData){
  //   if(userData.password !== pass.value){
  //     // Invalid password
  //     setErrorMessages({name:"pass",message:errors.pass});
  //   } else {
  //     setIsSubmitted(true);
  //   }
  // } else {
  //   // Username not found
  //   setErrorMessages({name:"uname", message: errors.uname});
  // }

  // // JSX code for login form
  // const renderForm = (
  //   <div className="form">
  //     <form onSubmit={handleSubmit}>
  //         <div className="input-container">
  //           <label>Username </label>
  //           <input type="text" name="uname" required />
  //           {renderErrorMessage("uname")}
  //         </div>
  //         <div className="input-container">
  //           <label>Password </label>
  //           <input type="password" name="pass" required />
  //           {renderErrorMessage("pass")}
  //         </div>
  //         <div className="button-container">
  //           <input type="submit" />
  //         </div>
  //       </form>
  //     </div>
  //   );

  return(
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/auth" element={<Auth/>}/>
    //   </Routes>
    // </BrowserRouter>
    <div>
    <Nav/>
    <HomePageShop/>
    <Footer/>
</div>
  );
}

export default MyApp;
