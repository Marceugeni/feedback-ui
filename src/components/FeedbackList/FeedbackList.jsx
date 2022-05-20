import FeedbackItem from '../FeedbackItem/FeedbackItem';

function FeedbackList({ feedback }) {
    if (!feedback || feedback.lenght === 0) {
        return(
            <p>Sorry no Feedback yet!</p>
        )
    }
  return (
      <div className="feedback-list">
        {feedback.map((item) => (
            <div>
                <FeedbackItem key={item.id}  />
            </div>
        )
        )}
      </div>
    
        
    
  )
}

export default FeedbackList