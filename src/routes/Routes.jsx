import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Popular from './pages/Popular';
import Home from './pages/Home';
import { Header } from '../components/Header/Header';
import Rated from './pages/Rated';
import MovieDetails from './pages/MovieDetails';

const Routes = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/popular">
					<Popular />
				</Route>
				<Route path="/top-rated">
					<Rated />
				</Route>
        <Route path="/movie/:id">
          <MovieDetails />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
