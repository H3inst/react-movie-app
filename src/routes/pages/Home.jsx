import { useMovies } from '../../hooks/useMovies';
import { Card } from '../../components/Card/Card';
import { Container } from '../../components/utils/Container';
import { Typography } from '../../components/utils/Typography';
import { Row } from '../../components/utils/Row';
import { Button } from '../../components/utils/Button';
import { Position } from '../../components/utils/Position';

const Home = () => {
	const { movies, handlePrevPage, handleNextPage } = useMovies('now_playing');
	return (
		<>
			<Container>
				<Typography size="h3">Now playing</Typography>
				<Position position="center">
					<Button onClick={handlePrevPage}>Prev</Button>
					<Button onClick={handleNextPage}>Next</Button>
				</Position>
				<Row center>
					{movies.map((movie) => (
						<Card
							route={movie.id}
							key={movie.id}
							image={movie.poster_path}
						/>
					))}
				</Row>
			</Container>
		</>
	);
};

export default Home;
