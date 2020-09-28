import React from 'react';
import QuestionContainer from './components/questionContainer/QuestionContainer';
import fcrb_questions from './components/poc_questions/fcrb';
// import ustan_questions from './components/poc_questions/ustan';
// import zmc_questions from './components/poc_questions/zmc';

function App() {
  return (
    <div className="App">
      <QuestionContainer questions={fcrb_questions}/>
    </div>
  );
}

export default App;
