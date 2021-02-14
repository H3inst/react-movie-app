import { useEffect, useState } from 'react';
import axios from 'axios';

export const useMovies = (movieType) => {
	const { REACT_APP_API_KEY } = process.env;
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);

	const uri = `https://api.themoviedb.org/3/movie/${movieType}?api_key=${REACT_APP_API_KEY}&language=en-US&page=${page}`;

	const handleNextPage = () => {
		setPage((p) => p + 1);
		if (page == 10) setPage(1);
	};
	const handlePrevPage = () => {
		setPage((p) => p - 1);
		if (page == 1) setPage(1);
	};
	const getApi = async () => {
		const data = await axios.get(uri);
		const res = data.data.results;
		setMovies(res);
	};
	useEffect(() => {
		getApi();
	}, [page]);

	return { movies, handlePrevPage, handleNextPage };
};
