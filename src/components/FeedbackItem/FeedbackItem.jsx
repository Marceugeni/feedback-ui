import {useState} from 'react';
import './FeedbackItem.css';

function FeedbackItem({key, rating, text}) {

    const [rating, setRating] = useState();
    const [text, setText] = useState(); 

    const handleClick = () => {
        setRating(rating +1)
    }

    return (
    <div className="card">
        <div className="num-display" key={key}>{rating}</div>
        <div className="text-display">{text}</div> 
    </div>
    )
}

export default FeedbackItem;