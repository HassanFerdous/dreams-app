import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Home from './pages/home/Home';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</div>
	);
}

export default App;
