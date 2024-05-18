type FlashCard = {
  question: string;
  answer: string;
  subject?: string;
  author?: string;
};

type QuizQuestion = {
  question: string;
  answer: string;
  subject?: string;
  author?: string;
  status: "unanswered" | "correct" | "incorrect";
};
interface FlashCardDeckEntry extends FlashCard {
  revealed: boolean;
  answeredCorrectly: boolean;
}

export type { FlashCard, QuizQuestion, FlashCardDeckEntry };
