import styled from 'styled-components';

const handlePosition = (position) => {
	switch (position) {
		case 'center':
			return 'center';
		case 'left':
			return 'start';
		case 'right':
			return 'flex-end';
		default:
			return 'start';
	}
};

export const Position = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
  height: 50px;
  margin-bottom: 40px;
	justify-content: ${({ position }) => handlePosition(position)};
`;
