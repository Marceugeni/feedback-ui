import { useState } from 'react';
import Header from './components/Header/Header';
import FeedbackList from './components/FeedbackList/FeedbackList';
import FeedbackData from '../src/data/FeedbackData';
import './index.css';

const text = "Feedback UI";

function App () {
    const [feedback, setFeedback] = useState(FeedbackData);

    return(
        <div className="app-container">
            <Header text={text}/>
            <FeedbackList feedback={feedback}/>   
        </div>
    )
}

export default App;