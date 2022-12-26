import React from 'react';
const Suggestions = () => {
  return (
    <div className='suggestionsContainer'>
      <div className="searchBar">
        <input type="text" 
          placeholder="Placeholder..."  
          />
          <button>SUBMIT</button>
      </div>
      <div className='suggestionsList'>
        <ul>
          <li>
            <div className='listElement'>
              <div className='left'>
                <img src="" alt="" />
              </div>
              <div className='right'>
                <h3 className='itemsName'>Lorem ipsum</h3>
                <p className='suggestionDescription'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Suggestions;