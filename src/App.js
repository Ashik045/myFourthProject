import { BrowserRouter, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import About from './Component/MainAbout/About';
import Contact from './Component/MainContact/Contact';
import Details from './Component/MainDetails/Details';
import MainHome from './Component/MainHome/MainHome';
import MainNavbar from './Component/MainNavbar/MainNavbar';
import Reviews from './Component/MainReviews/Reviews';
import Services from './Component/MainServices/Services';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <MainNavbar />

                <Route exact path="/" component={MainHome} />

                <Route exact path="/aboutus" component={About} />

                <Route exact path="/details" component={Details} />

                <Route exact path="/services" component={Services} />

                <Route exact path="/reviews" component={Reviews} />

                <Route exact path="/contact" component={Contact} />
            </div>
        </BrowserRouter>
    );
}

export default App;
