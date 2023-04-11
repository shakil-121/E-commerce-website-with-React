import React from 'react'; 
import './ReviewItem.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,removeIteamhandle}) => { 
    const {img,id,quantity,name,price}=product;
    return (
        <div className='iteam'>
            <img src={img} alt="" srcset="" /> 
            <div className='iteam_details'>
                <h4>{name}</h4> 
                <p>Price: <span className='orange'>${price}</span></p>
                <p>Quantity: <span className='orange'>{quantity}</span></p>
            </div> 
            <div onClick={()=>removeIteamhandle(id)} className='Delete-iteam'>
                <button className='delete'><FontAwesomeIcon className='delete-icon' icon={faTrash} /></button>
            </div>
        </div>
    );
};

export default ReviewItem;