import React, {useState} from 'react';
import { Header } from './Header';
import { Main } from './Main'

const defaultState = {
  showAlphabet:'dontShow',
  showWords:'dontShow',
  showPhrases:'dontShow',
  showNumbers:'dontShow',
  showGrammar:'dontShow'
}

export function App() {
  const [state, setVisibility] = useState(defaultState);
  
  return (
    <div className="App">
      <Header {...state} visHandler={setVisibility}/>
      <Main {...state}/>
    </div>
  );
}

