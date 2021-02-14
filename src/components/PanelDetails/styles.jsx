import styled from 'styled-components';

export const Panel = styled.div`
	width: 80%;
	height: 60%;
	background: #272733;
	display: flex;
	flex-direction: row;
  overflow: hidden;
  border-radius: 30px;
  @media (max-width: 1100px) {
    width: 98%;
  }
`;
export const PanelImage = styled.img`
  width: 30%;
  height: 550px;
  object-fit: cover;
`;
export const PanelInfo = styled.div`
  width: 70%;
  padding: 0px 20px; 
  display: flex;
  flex-direction: column;
`
