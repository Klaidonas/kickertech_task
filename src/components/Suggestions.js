import React from 'react';
import JSONDATA from '../utils/suggestions.json'
const Suggestions = () => {
  return (
    <div className='suggestionsContainer'>
      <br />
      <div className="searchBar">
        <input type="text" 
          placeholder="     Placeholder..."  
          />
          <button>SUBMIT</button>
      </div>
      <ul className='suggestionsList'>
      {JSONDATA.map( val =>{
        return(
            <li className='listElement' key={val.id}>
                <div className='left'>
                  <div className='itemThumbnail'>
                  <img src="" alt="" />
                  </div>
                </div>
                <div className='right'>
                  <h3 className='itemsName'>{val.suggestion_name}</h3>
                  <p className='suggestionDescription'>{val.suggestion_description}</p>
                </div>
            </li>
            )
          })}
      </ul>
    </div>
  );
};

export default Suggestions;