import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import News from './pages/news-page/News';
import Contact from './pages/contact-page/Contact';
import FaqPage from './pages/faq-page/FaqPage';
import AboutPage from './pages/about-page/AboutPage';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/news" component={News} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/faq" component={FaqPage} />
				<Route exact path="/About" component={AboutPage} />
			</Switch>
		</div>
	);
}

export default App;
