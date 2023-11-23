import { useEffect,useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from  '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Veggie() {

  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  },[]);

  const getVeggie = async() => {
    const check = localStorage.getItem("veggie");

    if(check){
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      console.log(data);
      setVeggie(data.recipes);
    }
  };

  return (
    <div>
    <Wrapper>
    <h3>Vegetarian Picks</h3>
    <Splide options={{
      perPage: 3,
      arrows: false,
      pagination: true,
      drag: 'free',
      gap: '2rem',
    }}>
    
    {veggie.map((recipe) => {
      return(
        <SplideSlide key={recipe.title}>
        <Card>
          <Link to={"/recipe/" + recipe.id}>
          <p>{recipe.title}</p>
          <div><FaRegStar /></div>
          <img src={recipe.image} alt={recipe.title} />
          <Gradient />
          </Link>
        </Card>
        </SplideSlide>
      );
    })}
    </Splide>
    </Wrapper>
</div>
  )
}


const Wrapper = styled.div`
    margin: 2.5rem 0;
`;
const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    box-shadow: 0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    svg{
      width: 40px;
      height: 40px;
      position: absolute;
      bottom: 20px;
      right: 20px;
      z-index: 10;
      color: yellow;
    }
    img{
      position: absolute;
      border-radius: 2rem;  
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    p{
      position: absolute;
      z-index: 10;
      left: 50%;
      bottom: 3rem;
      letter-spacing: 1px;
      transform: translate(-50%, 0%);
      color: white;
      ${'' /* background: white; */}
      width: 13rem;
      text-align: center;
      font-weight: 600;
      font-size: 1rem;
      padding: 0.7rem;
      height: auto;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;
const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Veggie
