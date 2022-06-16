import FeedbackItem from "../FeedbackItem/FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.lenght === 0) {
    return <p>Sorry no Feedback yet!</p>;
  }
  console.log('feedie ', feedback);
  
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <div>
          <FeedbackItem 
          key={item.id} 
          item={item}
          handleDelete={handleDelete}
          />
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;
