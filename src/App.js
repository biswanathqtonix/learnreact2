import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Header from "./includes/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import Gallery from './pages/Gallery'


function App() {
  return (
    <>

    <Router>
      
      <Header />

        <div className="container mt-2">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/gallery' component={Gallery} />

          </Switch>
        </div>
        
  
    </Router>
    </>
  );
}

export default App;
