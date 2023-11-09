import { About } from './components/About/About';
import { Button } from './components/AsideButton/Button';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { Portfolio } from './components/Portfolio';
import { SocialLinks } from './components/SocialLinks';

function App() {
	return (
		<div>
			<NavBar />
			<Home />
			<About />
			<Portfolio />
			<Experience />
			<Contact />
			<Button />

			<SocialLinks />
		</div>
	);
}

export default App;
