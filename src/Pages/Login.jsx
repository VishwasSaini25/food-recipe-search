import React,{useState} from "react";
import "./Login.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Route, Routes,useNavigate } from "react-router-dom";

// import Brand from "../Brand/Brand";
import axios from "axios";
function Login(props){
    const History = useNavigate();
    const[user,setUser] = useState({
        Email:"",
        Password:""
    })
    
    function handleChange(event){
        const {name,value} = event.target;
        setUser({
            ...user,
            [name] : value
        })
    }
    function login(){
                 axios.post("http://localhost:4000/login",user)
                 .then(res => {
                    // const json = JSON.stringify(res.data.user._id); 
                    // console.log(res.data.user._id);
                    alert(res.data.message);
                    props.func(res.data.user);
                    if(res.data.message === "email incorrect or user not registered"){
                        History("/register");
                    } else if(res.data.message === "incorrect password"){
                        History(0);
                    } else {
                    History("/home");
                    }
                 });        
    }
    const url="";
    return <>
     <div className="home-page">
     <div className="sign-up">
        <div className="login-div">
        <h2>WELCOME TO</h2>
        <h1>deliciousss</h1>
        <h5>Login to Enter the delicious world And become a good chef </h5>
        <input   onChange={handleChange} className="login-email" type="email" name="Email" value={user.Email} id="email" placeholder="Email" />
        <input   onChange={handleChange} className="login-pass" type="password" name="Password" value={user.Password} id="pass" placeholder="Password" /><br />
        <button className="login-button" onClick={login}>Login</button>
        <h6 className="login-register" onClick={() => History("/register")}>Don't have an account ? <a href={url}>Register Now </a></h6>
        <hr />
        <h6 className="login-h6">Continue With Social Media</h6>
        <ul className="login-socials">
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

export default Login;
