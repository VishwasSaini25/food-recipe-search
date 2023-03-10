import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import Styled from "styled-components";
import { NavLink } from 'react-router-dom';
function Category() {
  return (
    <List>
        <Slink to={"/cuisine/italian"}><FaPizzaSlice /><h4>Italian</h4></Slink>
        <Slink to={"/cuisine/american"}><FaHamburger /><h4>American</h4></Slink>
        <Slink to={"/cuisine/thai"}><GiNoodles /><h4>Thai</h4></Slink>
        <Slink to={"/cuisine/japanese"}><GiChopsticks /><h4>Japanese</h4></Slink>
    </List>
  )
}

const List= Styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;
const Slink = Styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  width: 6rem;
  height: 6rem;
  background: linear-gradient(35deg, #494949, #313131);
  cursor: pointer;
  transform: scale(.8);

  h4{
    color: white;
    font-size: .85rem;
    margin-top:.4rem;
  }

  svg{
    color: white;
    font-size: 1.5rem;
  }
  &.active{
    background: linear-gradient(to right, #f27121, #e94057);
  }
  svg,h4{
    color: white;
  }
`;
export default Category;
