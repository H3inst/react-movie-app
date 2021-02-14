import { Panel, PanelImage, PanelInfo } from './styles';
import { Container } from '../utils/Container';
import { Row } from '../utils/Row';
import { Typography } from '../utils/Typography';
import { Badge } from '../Badge/Badge';
import noImg from './no-photo-available.jpg';

export const PanelDetails = ({ movie }) => {
	const url = 'https://image.tmdb.org/t/p/w500/';
	const { original_title, poster_path, genres = [], overview, vote_average } = movie;
	return (
		<Container flexCentered>
			<Panel>
				<PanelImage data-aos="fade-right" src={poster_path ? url + poster_path : noImg} />
				<PanelInfo data-aos="fade-down">
					<Typography size="h3">{original_title}</Typography>
					<Row>
						{genres.map((genre) => (
              <Badge key={genre.id}>{genre.name}</Badge>
              ))}
					</Row>
          <span style={{color: 'gainsboro', margin: '10px 0px', fontSize: '20px'}}> Rate: {vote_average}/10⭐</span>
          <p style={{margin: '5px 0px', color: 'gainsboro', fontSize: '20px', lineHeight: '25px'}}>{overview}</p>
				</PanelInfo>
			</Panel>
		</Container>
	);
};
