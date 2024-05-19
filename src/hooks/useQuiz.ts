import { useEffect, useState } from "react";
import { FlashCard, QuizQuestion } from "../types";

const useQuiz = (initialCards: FlashCard[]) => {
  const [quiz, setQuiz] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setQuiz(
      initialCards.map((card) => ({
        ...card,
        status: "unanswered",
      }))
    );
    setCurrentIndex(0);
    setCorrectCount(0);
  }, [initialCards]);

  const incrementIndex = () => {
    if (currentIndex !== quiz.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const markCorrect = () => {
    const updatedCards = [...quiz];
    updatedCards[currentIndex].status = "correct";
    setQuiz(updatedCards);
    setCorrectCount(
      updatedCards.filter((cards) => cards.status === "correct").length
    );
    incrementIndex();
  };

  const markIncorrect = () => {
    const updatedCards = [...quiz];
    updatedCards[currentIndex].status = "incorrect";
    setQuiz(updatedCards);
    incrementIndex();
  };

  const resetQuiz = () => {
    setCorrectCount(0);
    setCurrentIndex(0);
    setShowResults(false);
  };

  const startQuiz = () => {
    setCurrentIndex(0);
    setCorrectCount(0);
    setShowResults(false);
  };

  const endQuiz = () => {
    setShowResults(true);
  };

  const buildQuizfromIncorrectAndSkippedCards = () => {
    const incorrectCards = quiz.filter((card) => card.status === "incorrect");
    const skippedCards = quiz.filter((card) => card.status === "unanswered");
    setQuiz([...incorrectCards, ...skippedCards]);
  };

  return {
    quiz,
    currentIndex,
    setCurrentIndex,
    correctCount,
    showResults,
    markCorrect,
    markIncorrect,
    resetQuiz,
    startQuiz,
    endQuiz,
    buildQuizfromIncorrectAndSkippedCards,
  };
};

export { useQuiz };
