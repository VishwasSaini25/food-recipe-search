import { useState, useEffect } from 'react'
import styled from "styled-components";
import { Link, useParams } from 'react-router-dom';
import Search from "../Components/Search";
import Category from "../Components/Category";
import { GiKnifeFork } from "react-icons/gi";
import Navbar from './Nav';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


function Recipe() {
    let params = useParams();
    const [feedback,setFeedback] = useState(false);
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');
    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    };
    useEffect(() => {
        fetchDetails();
    }, [params.name]);
    return <>
        <div>
            <Navbar />
            <Search />
            <Category />
            <DetailWrapper>
                <div className='recipe-image'>
                    <h2>{details.title}</h2>
                    <img src={details.image} alt="" />
                    <h2 style={{ marginTop: "2rem" }}>Summary</h2>
                    <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                </div>
                <Info>
                    <Button className={activeTab === 'instructions' ? 'active' : ''}
                        onClick={() => setActiveTab('instructions')}>Instructions</Button>

                    <Button className={activeTab === 'ingredients' ? 'active' : ''}
                        onClick={() => setActiveTab('ingredients')}>Ingredients</Button>

                    <div className='feedback'>{feedback ? <FaStar onClick={() => setFeedback(!feedback)} /> : <FaRegStar onClick={() => setFeedback(!feedback)} />  }</div>


                    {activeTab === "instructions" &&
                        (<div>
                            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                        </div>)}

                    {activeTab === "ingredients" &&
                        (<ul>
                            {details.extendedIngredients?.map((ingredient) => (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            ))}
                        </ul>)}

                </Info>
            </DetailWrapper>
        </div>
    </>
}

const DetailWrapper = styled.div`
    margin-top:5rem;
    margin-bottom: 5rem;
    display: flex;
   
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h3{
        font-size: .8rem; 
        text-align: left;  
    }
    h2{
        margin-bottom: 2rem;
        margin-left: .2rem;
        width: 90%;
    }
    li{
        font-size: .9rem;
        line-height: 2rem;
        font-weight: 600;
    }
    ul{
        margin-top: 2rem;
        margin-left: 2rem;
    }
    img{
        width: 85%;
        border-radius: 1.5rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    font-weight: 600;

`;

const Info = styled.div`
    flex:50% !important;

    button{
         margin: 1rem !important;
    }
    h3{
        font-size: .8rem; 
        text-align: left;
        margin-left:1rem;   
    }
    li{
        margin-left:1rem;
    }
    .feedback{
        border: none;
        color: red;
        background: transparent;
        margin-top:2% !important;
    }
    svg{
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-item: center;
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


export default Recipe;
