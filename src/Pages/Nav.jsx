import { GiKnifeFork } from "react-icons/gi";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";
import "../index.css";

function Navbar (){
    const History = useNavigate();
  const handleLogout = async () => {
    await axios.post('http://localhost:4000/logout')
        .then(response => {
          console.log(response.data)
            if(response.data){
                const deleteCookie = (cookieName) => {
                document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
                };
                deleteCookie(document.cookie);
                History("/login");
            } else {
               History(null);
            }
        })
        .catch(error => {
            alert(error.response?.data);
        });
}
    return <>
         <Nav>
    <Link to={"/home"} style={{textDecoration: "none"}}>
    <GiKnifeFork />
    <Logo>deliciousss</Logo>
    </Link>
    <button className='logout' onClick={handleLogout}>Logout</button>
    </Nav>
    </>
}
export default Navbar;


const Logo = styled.div`
    text-decoration: none ;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
    display: contents;
    color: black
`;

const Nav = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration:none;
    cursor: pointer;
    svg{
      font-size: 2rem;
      color: black;
    }
`;
