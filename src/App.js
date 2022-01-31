import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from "./component/Footer";
import { Route, Switch ,BrowserRouter} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Employer from './pages/Employer';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import Interviewer from './pages/Interviewer';
import Candidate from './pages/Candidate';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path='/employer' component={Employer} />
           <Route path="/interview" component={Interviewer} />
           <Route path="/blogs" component={Blogs} />
           <Route path="/contact" component={ContactUs} />
           <Route path="/candidate" component={Candidate} />
        </Switch>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
