import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
<<<<<<< HEAD
import Album from './components/Library';
import Library from './components/Album';
=======
import Library from './components/Library';
import Album from './components/Album';
>>>>>>> 3e48eea93960979af334d57edc06e4e5b5cd8f31

class App extends Component {
  render() {
    return (
      <div className="App">
         <header>
         <nav>
             <Link to='/'>Landing</Link>
             <Link to='/library'>Library</Link>
           </nav>
           <h1>Bloc Jams</h1>
         </header>
         <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
         </main>
      </div>
    );
  }
}

export default App;
