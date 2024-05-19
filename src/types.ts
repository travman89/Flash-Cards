type FlashCard = {
  question: string;
  answer: string;
  subject?: string;
  author?: string;
};

enum ANSWER {
  CORRECT = "correct",
  INCORRECT = "incorrect",
  UNANSWERED = "unanswered",
}

type QuizQuestion = {
  question: string;
  answer: string;
  subject?: string;
  author?: string;
  status: ANSWER;
};
interface FlashCardDeckEntry extends FlashCard {
  revealed: boolean;
  answeredCorrectly: boolean;
}

export { ANSWER };
export type { FlashCard, QuizQuestion, FlashCardDeckEntry };
