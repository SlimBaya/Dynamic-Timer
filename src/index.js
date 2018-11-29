import React from 'react';
import ReactDOM from 'react-dom';
import DynamicTimer from './DynamicTimer'

const App = () => {
  return <div>
    <DynamicTimer ms={20320665} />
    
  </div>
}

ReactDOM.render(<App />, document.getElementById('root'));