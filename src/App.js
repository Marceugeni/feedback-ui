import { useState } from "react";
import Header from "./components/Header/Header";
import FeedbackList from "./components/FeedbackList/FeedbackList";
import FeedbackData from "../src/data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";

import "./index.css";

const text = "Deja tu Feedback UI";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
      setFeedback(feedback.filter((item) => item.id !== id));
  }

  return (
    <div className="app-container">
      <Header text={text} />
        <div className="container">
            <FeedbackStats feedback={feedback} />
            <FeedbackList 
            feedback={feedback}
            handleDelete={deleteFeedback}/>
            <FeedbackForm />
        </div>
    </div>
  );
}

export default App;
