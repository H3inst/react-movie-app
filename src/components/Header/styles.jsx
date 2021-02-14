import styled from 'styled-components';

export const Navbar = styled.nav`
  box-sizing: border-box;
  width: 100%;
  padding: 0px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  `;
export const Brand = styled.a`
  color: gainsboro;
  text-decoration: none;
  width: 20%;
  font-size: 20pt;
  font-weight: bold;
`;
export const Search = styled.input`
  box-sizing: border-box;
  border: none;
  background: #272733;
  color: gainsboro;
  padding: 10px 10px;
  border-radius: 30px;
  outline: none;
  ::placeholder {
    color: #524a5d;
    font-weight: bold;
    font-size: 17px;
  }
`;
export const Navigation = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-evenly;
  align-items: center;
`;