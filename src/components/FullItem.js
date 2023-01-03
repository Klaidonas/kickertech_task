import React from 'react';
import ITEMINFO from '../utils/data.json'
import image from '../images/grey_img.png'
import SuggestionsCont from './SuggestionsCont';

const LastItem = () => {
  return (
    <div className='content'>
      {ITEMINFO.map(val => {
        return (
          <div className='fullItem' key={val.id}>
            <div className='itemContainer'>
  {console.log("val id: ", val.id)}
              <div className="imageContainer">
                <img src={image} alt="" />
              </div>
              <div className="itemDescription">
                <h2 className='itemsName'>{val.item_name}</h2> 
                <h4 className='itemsAuthor'>{val.item_author}</h4>
                <span className='additionalInfo'>{val.additional_info}</span>
              </div>
            </div>
            <SuggestionsCont />
          </div>
        )
      })}
    </div>
  );
};

export default LastItem;