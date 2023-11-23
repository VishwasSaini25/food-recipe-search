import React from 'react'
import { useEffect,useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import styled from "styled-components";
import { motion } from "framer-motion";
import Search from "../Components/Search";
import Category from "../Components/Category";
import { GiKnifeFork } from "react-icons/gi";
import Navbar from './Nav';

function Searched() {
    const [ searched, SetSearched ] = useState([]);
    let params = useParams(); 
    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=12`);
        const recipes = await data.json();
        // console.log(data);
        // console.log(recipes);
        SetSearched(recipes.results);
    }  
    useEffect(() => {
        getSearched(params.search);
        // console.log(params.search);
    },[params.search]);
  return <>
    <div>
    <Navbar />
      <Search />
      <Category />
      <Grid
         animate={{ opacity: 1 }}
         initial={{ opacity: 0 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
      >
        {searched.map((item) => {
            return(
                <Card key={item.id}>
                <Link to={"/recipe/" + item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                </Link>
                </Card>
            );
        })}
      </Grid>
    </div>
  </>
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 3rem;
`;
const Card = styled.div`
    img {
    ${'' /* box-shadow: 0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */}
      width: 100%;
      border-radius: 2rem;
      
    }
    a{
      text-decoration: none;
    }
    h4{
      text-align: center;
      padding: 1rem;
    }
`;
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


export default Searched;
