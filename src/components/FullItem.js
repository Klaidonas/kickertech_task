import React from 'react';
// import ItemContainer from './ItemContainer';
// import Suggestions from './Suggestions';
import ITEMINFO from '../utils/data.json'
import SUGGESTIONS from '../utils/suggestions.json'

const FullItem = () => {
  return (
    <div className="content">
      {/* {ITEM CONTENT} */}
      {ITEMINFO.map(val => {
        return (
          <div className="fullItem" key={val.id}>
{console.log("val id: ", val.id)}
            <div className='itemContainer'>
              <div className="imageContainer">
                <img src="" alt="" />
              </div>
              <div className="itemDescription">
                <h2 className='itemsName'>{val.item_name}</h2> 
                <h4 className='itemsAuthor'>{val.item_author}</h4>
                <span className='additionalInfo'>{val.additional_info}</span>
              </div>
            </div>
             {/* {ITEM CONTENT} */}

             {/* {SUGGESTIONS LIST} */}
            <div className='suggestionsContainer'>
              <div className="searchBar">
                <input type="text" 
                  placeholder="     Placeholder..."  
                  />
                  <button>SUBMIT</button>
              </div>
              <ul className='suggestionsList'>
                {SUGGESTIONS.map(value => {        
                  return(
                    <li className='listElement' key={value.id}>
{console.log("value id: ", value.id)}
                        <div className='left'>
                          <div className='itemThumbnail'>
                          <img src="" alt="" />
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
              {/* {SUGGESTIONS LIST} */}
            </div>
          </div>
        )
      })}
      
    </div>
        // <ItemContainer /> }        pradine viso <FullItem /> versija (su
        //                   }    -   minimaliais dizainu pakitimais) kai buvo
        // <Suggestions />   }        rasoma "hardcode" principu duomenys(dummy tekstai)
  );
};

export default FullItem;