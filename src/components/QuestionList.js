import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
    .then((r) => r.json())
    .then((data) => setQuestions(data))
  }, [])

  function deleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions)
  }


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem 
          question={question}
          key={question.id} 
          prompt={question.prompt} 
          answers={question.answers} 
          correctIndex={question.correctIndex}
          onDeleteQuestion={deleteQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
