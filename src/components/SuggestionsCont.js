import React from 'react';
import SUGGESTIONS from '../utils/suggestions.json'
import image from '../images/grey_img.png'

const SuggestionsCont = () => {
  return (
    <div className='suggestionsContainer'>
        <div className="searchBar">
          <input type="text" 
            placeholder="Placeholder..."  
            />
            <div className='btn'>
              <button>SUBMIT</button>
            </div>
        </div>
        <ul className='suggestionsList'>
          {SUGGESTIONS.map(value => {        
            return(
              <li className='listElement' key={value.id}>
    {console.log("value id: ", value.id)}
                <div className='left'>
                  <div className='itemThumbnail'>
                    <img src={image} alt="" />
                  </div>
                </div>
                <div className='right'>
                  <h3 className='itemsName'>{value.suggestion_name}</h3>
                  <p className='suggestionDescription'>{value.suggestion_description}</p>
                </div>
              </li>
              )
            })}
        </ul>
      </div>
  );
};

export default SuggestionsCont;