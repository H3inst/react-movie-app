import { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieContainer } from '../MovieContainer/MovieContainer';
import { Typography } from '../utils/Typography';
import { Link } from 'react-router-dom';
import { Brand, Navbar, Navigation, Search } from './styles';
import { Row } from '../utils/Row';
import { Card } from '../Card/Card';

export const Header = () => {
	const { REACT_APP_API_KEY } = process.env;
	const [value, setValue] = useState('');
	const [movies, setMovies] = useState([]);
	const url = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`;

	const handleOnChange = (e) => {
		setValue(e.target.value);
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const res = await axios.get(url);
		const data = res.data.results;
		setMovies(data);
	};

	return (
		<>
			<Navbar>
				<Brand href="#">Movie App</Brand>
				<Navigation>
					<Link to="/" className="nav_link">
						Home
					</Link>
					<Link to="/popular" className="nav_link">
						Popular
					</Link>
					<Link to="/top-rated" className="nav_link">
						Top rated
					</Link>
				</Navigation>
				<form onSubmit={handleOnSubmit}>
					<Search onChange={handleOnChange} placeholder="Search a movie" />
				</form>
			</Navbar>
			{movies.length > 0 && (
				<MovieContainer>
					<Typography size="h3">Results of: {value}</Typography>
					<Row center>
						{movies.map((movie) => (
							<Card key={movie.id} route={movie.id} image={movie.poster_path} />
						))}
					</Row>
				</MovieContainer>
			)}
		</>
	);
};
