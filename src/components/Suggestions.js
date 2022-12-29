import React from 'react';
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
      <ul className='suggestionsLst'>
            <li className='listElement'>
                <div className='left'>
                  <div className='itemThumbnail'>
                  <img src="" alt="" />
                  </div>
                </div>
                <div className='right'>
                  <h3 className='itemsName'>Lorem ipsum</h3>
                  <p className='suggestionDescription'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                </div>
            </li>
            <li className='listElement'>
                <div className='left'>
                  <div className='itemThumbnail'>
                  <img src="" alt="" />
                  </div>
                </div>
                <div className='right'>
                  <h3 className='itemsName'>Lorem ipsum</h3>
                  <p className='suggestionDescription'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                </div>
            </li>
            <li className='listElement'>
                <div className='left'>
                  <div className='itemThumbnail'>
                  <img src="" alt="" />
                  </div>
                </div>
                <div className='right'>
                  <h3 className='itemsName'>Lorem ipsum</h3>
                  <p className='suggestionDescription'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                </div>
            </li>
      </ul>
    </div>
  );
};

export default Suggestions;