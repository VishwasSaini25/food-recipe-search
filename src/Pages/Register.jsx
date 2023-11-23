import React,{useState} from "react";
import "./Register.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CampaignIcon from '@mui/icons-material/Campaign';
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Register(){
    const History = useNavigate();
    const[user,setUser] = useState({
        Email:"",
        Password:"",
        Confirmpass:""
    })

    function handleChange(event){
        const {name,value} = event.target;
        setUser({
            ...user,
            [name] : value
        })
    }
    function register(){
        const { Email,Password,Confirmpass } = user;
        if(Email && Password && (Password === Confirmpass)){
                 axios.post("http://localhost:4000/register",{Email,Password})
                 .then(res => {
                   if(res.data) {
                        History("/login");
                    } else {
                        History("/register");
                    }
                })
                .catch(error => {
                    console.log(error.res.data);
                });
         } else {
            alert("invalid input");
        }
    }

    const url="";
    return <> 
     <div className="home-page">
    <div className="sign-up">
        <div className="register-div">
        <h2>WELCOME TO</h2>
        <h1><CampaignIcon className="speaker" fontSize="60" />deleciouss</h1>
        <h5>Register or Login to Enter the deliciousss world And become good chef </h5>
        <input  onChange={handleChange} className="register-email" type="email" name="Email" value={user.Email}   placeholder="Email" />
        <input onChange={handleChange} className="register-pass" type="password" name="Password" value={user.Password}  placeholder="Password" /><br/>
        <input onChange={handleChange} type="password" className="register-confirmpass" value={user.Confirmpass} name="Confirmpass" placeholder="Confirm Password" /><br />
        <button className="register-button" onClick={register}>Register</button>
        <h6 className="register-login" onClick={() => History("/login")}>Already Have An Account ? <a href={url}>Login Now </a></h6>
        <hr />
        <h6 className="register-h6">Continue With Social Media</h6>
        <ul className="register-socials">
        <li><FacebookIcon /></li>
        <li><TwitterIcon /></li>
        <li><GoogleIcon /></li>
        <li><LinkedInIcon /></li>
        </ul>
        </div>
    </div>
    </div>
    </>
}

export default Register;

