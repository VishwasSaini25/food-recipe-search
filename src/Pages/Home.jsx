import Veggie from "../Components/Veggie";
import Popular from "../Components/Popular";
import { motion } from "framer-motion"; 
import { GiKnifeFork } from "react-icons/gi";
import { BrowserRouter,Link } from "react-router-dom";
import styled from "styled-components";
import Search from "../Components/Search";
import Category from "../Components/Category";
function Home() {
  return (
    <div>
    <Nav>
    <Link to={"/home"} style={{textDecoration: "none"}}>
    <GiKnifeFork />
    <Logo>deliciousss</Logo>
    </Link>
    </Nav>
      <Search />
      <Category />
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      >
      <Popular />
      <Veggie />
    </motion.div>
    </div>
  );
}
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

export default Home;