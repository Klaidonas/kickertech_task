import React from 'react';
import JSONDATA from '../utils/data.json'


const ItemContainer = () => {
  return (
    <>
      {JSONDATA.map( val =>{
        return (
          <div className='itemContainer' key={val.id}>
            <div className="imageContainer">
              <img src="" alt="" />
            </div>

            <div className="itemDescription">
              <h2 className='itemsName'>{val.item_name}</h2> 
              <h4 className='itemsAuthor'>{val.item_author}</h4>
              <span className='additionalInfo'>{val.additional_info}</span>
            </div>
          </div>
        )
      })}
    </>
  );
};

export default ItemContainer;