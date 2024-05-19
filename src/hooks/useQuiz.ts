import { useEffect, useState } from "react";
import { ANSWER, FlashCard, QuizQuestion } from "../types";

const useQuiz = (initialCards: FlashCard[]) => {
  const [quiz, setQuiz] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    setQuiz(
      initialCards.map((card) => ({
        ...card,
        status: ANSWER.UNANSWERED,
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
    updatedCards[currentIndex].status = ANSWER.CORRECT;
    setQuiz(updatedCards);
    setCorrectCount(
      updatedCards.filter((cards) => cards.status === ANSWER.CORRECT).length
    );
    incrementIndex();
  };

  const markIncorrect = () => {
    const updatedCards = [...quiz];
    updatedCards[currentIndex].status = ANSWER.INCORRECT;
    setQuiz(updatedCards);
    incrementIndex();
  };

  const resetQuiz = () => {
    setCorrectCount(0);
    setCurrentIndex(0);
    initialCards.map((card) => ({
      ...card,
      status: ANSWER.UNANSWERED,
    }));
  };

  const startQuiz = () => {
    setCurrentIndex(0);
    setCorrectCount(0);
  };

  const buildQuizfromIncorrectAndSkippedCards = () => {
    const incorrectCards = quiz.filter(
      (card) => card.status === ANSWER.INCORRECT
    );
    const skippedCards = quiz.filter(
      (card) => card.status === ANSWER.UNANSWERED
    );
    setQuiz([...incorrectCards, ...skippedCards]);
  };

  return {
    quiz,
    currentIndex,
    setCurrentIndex,
    correctCount,
    markCorrect,
    markIncorrect,
    resetQuiz,
    startQuiz,
    buildQuizfromIncorrectAndSkippedCards,
  };
};

export { useQuiz };
