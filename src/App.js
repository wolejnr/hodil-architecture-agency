import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './stylesheets/App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Porfolio from './components/Portfolio';
import Services from './components/Services';
import Blog from './components/Blog';
import BlogArchive from './components/BlogArchive';
import Contact from './components/Contact';
import PortfolioDetails from './components/PortfolioDetails';
import portfolioData from './components/data/portfolioData';
import FeaturedArticles from './components/FeaturedArticles';
import blogData from './components/data/blogData';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      portfolioData,
      blogData
    };
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Header />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/archive">
                <BlogArchive />
              </Route>
              <Route exact path="/blog">
                <FeaturedArticles data={this.state.blogData} />
              </Route>
              <Route path="/blog/:slug">
                <Blog />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route exact path="/portfolio">
                <Porfolio data={this.state.portfolioData} />
              </Route>
              <Route path="/portfolio/details/:slug">
                <PortfolioDetails data={this.state.portfolioData} />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

// export default App;
