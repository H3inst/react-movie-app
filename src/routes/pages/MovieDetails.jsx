import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { PanelDetails } from '../../components/PanelDetails/PanelDetails';

const MovieDetails = () => {
	const { id } = useParams();
	const { REACT_APP_API_KEY } = process.env;

	const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_API_KEY}&language=en-US`;
	const [movieDetails, setMovieDetails] = useState({});

	const getMovieDetails = async () => {
    const res = await axios.get(url);
    setMovieDetails(res.data);
  };

  useEffect(() => {
    getMovieDetails();
  }, [])
	return <PanelDetails movie={movieDetails} />;
};

export default MovieDetails;
