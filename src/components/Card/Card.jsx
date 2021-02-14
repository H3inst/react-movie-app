import { CardImg, Image } from './styles';
import noImg from './no-photo-available.jpg';

export const Card = ({ image, route }) => {
	const url = 'https://image.tmdb.org/t/p/w500';
	return (
		<a href={'/movie/' + route}>
			<CardImg data-aos="zoom-in-up">
				<Image src={image ? url + image : noImg} />
			</CardImg>
		</a>
	);
};
