
import React from 'react';
  import './App.css';
  import Header from './header/Header';
  import Post from './post/Post';
  import { AppProvider } from './Context/AppContext';


  function App() {
  
    return (
      <AppProvider>
        <div className="App">
            <Header/>
            <Post />
        </div>
      </AppProvider>
    );
  }

  export default App;
