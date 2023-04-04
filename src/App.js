import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './profile';
import Quiz from './quiz';
import ContextProvider from './context';
import Result from './Result';
import About from './About';

function App() {
  return (
    <>
      <ContextProvider>

        <Routes>
          <Route exact path='*' element={<h1>Dont Try To Act Oversmart</h1>} />
          <Route exact path='/' element={<Profile />}> 
            <Route path='/about' element={<About />}/>
          </Route>
          <Route exact path='/quiz' element={<Quiz />} />
          <Route exact path='/result/:ans' element={<Result />} />
        </Routes>

      </ContextProvider>
    </>
  );
}

export default App;
