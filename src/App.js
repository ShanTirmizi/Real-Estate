import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import SearchPage from './components/Home/SearchPage/SearchPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HousePage from './components/Home/HousePage/HousePage'


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        
        <Switch>
          <Route path="/search/:id">
            <HousePage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer />
      </ Router> 
    </div>
  );
}

export default App;
