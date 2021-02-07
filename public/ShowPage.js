import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ShowPage extends Componenet {
  render=()=>{
    return (
      <div className='show'>
      <h2>This is the show page!!</h2>
      <a href='/index.html'>Back to Contacts page</a>
      </div>
    )
  }
}

export default ShowPage;
