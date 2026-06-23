import { useState } from "react";

const questions = [
  {
    question: "What does AWS stand for?",
    options: [
      "Amazon Web Services",
      "Advanced Web System",
      "Application Web Service",
      "Amazon Work Solution"
    ],
    answer: "Amazon Web Services"
  },
  {
    question: "Which service is used for authentication?",
    options: [
      "EC2",
      "S3",
      "Cognito",
      "Lambda"
    ],
    answer: "Cognito"
  },
  {
    question: "Which language does React use?",
    options: [
      "Java",
      "Python",
      "JavaScript",
      "C++"
    ],
    answer: "JavaScript"
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h2>Quiz Completed 🎉</h2>
          <h3>
            Your Score: {score} / {questions.length}
          </h3>
        </div>
      ) : (
        <div>
          <h2>
            Question {currentQuestion + 1} of {questions.length}
          </h2>

          <h3>{questions[currentQuestion].question}</h3>

          {questions[currentQuestion].options.map((option) => (
            <div key={option}>
              <button
                onClick={() => handleAnswer(option)}
                style={{
                  margin: "10px",
                  padding: "10px",
                  cursor: "pointer"
                }}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;