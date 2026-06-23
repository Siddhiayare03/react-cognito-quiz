import { useState, useEffect } from "react";

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
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    if (showScore) return;

    if (timeLeft === 0) {
      const nextQuestion = currentQuestion + 1;

      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setTimeLeft(15);
      } else {
        setShowScore(true);
      }
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, currentQuestion, showScore]);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(15);
    } else {
      setShowScore(true);
    }
  };

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {showScore ? (
        <div>
          <h2>Quiz Completed 🎉</h2>
          <p>
            Your Score: {score} / {questions.length}
          </p>

          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowScore(false);
              setTimeLeft(15);
            }}
            style={{
              padding: "10px 20px",
              cursor: "pointer"
            }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2>
            Question {currentQuestion + 1} of {questions.length}
          </h2>

          <div
            style={{
              width: "100%",
              backgroundColor: "#ddd",
              height: "15px",
              borderRadius: "10px",
              marginBottom: "20px"
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                backgroundColor: "green",
                height: "15px",
                borderRadius: "10px"
              }}
            ></div>
          </div>

          <h3>⏳ Time Left: {timeLeft}s</h3>

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