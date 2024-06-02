import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

import './App.css'
import { useState } from 'react';

const App = () => {
    const [input, setInput] = useState('');
    const inputHandler =(value) => {
     setInput(value);

    };
  return (
    <div>
       <Header title="📺Movies" />
       <SearchBar inputHandler={inputHandler}/>
       <MovieList input={input}/>
    </div>
       
    
  );
};

export default App;
