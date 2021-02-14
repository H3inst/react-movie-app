import styled from 'styled-components';

const handleTypography = (size) => {
	switch (size) {
		case 'h1':
			return '100px;';
		case 'h2':
			return '80px;';
		case 'h3':
			return '60px;';
		case 'h4':
			return '40px;';
		default:
			return '30px;';
	}
};
export const Typography = styled.p`
	color: gainsboro;
	font-weight: bold;
	font-size: ${({ size }) => handleTypography(size)};
	text-align: ${(props) => props.centered && 'center'};
  margin-top: 20px;
  margin-bottom: 5px;
`;
