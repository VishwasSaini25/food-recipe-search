import Styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
    const [input, SetInput] =  useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    }
    return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
            <input  onChange={(e) => SetInput(e.target.value)}  type="text" value={input} />
        </div>
    </FormStyle>
  )
}

const FormStyle = Styled.form`
    margin:2rem auto;
    position: relative;
    width: 60%;
    input{
        border: none;
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        background: linear-gradient(35deg, #494949, #313131);
    }
    svg{
        position: absolute;
        top:50%;
        left: 0;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search
