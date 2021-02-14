import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 50px auto;
  ${(props) => props.flexCentered && `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `}
`;