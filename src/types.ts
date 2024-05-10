export type FlashCard = {
  question: string;
  answer: string;
  subject?: string;
  author?: string;
};

export interface FlashCardDeckEntry extends FlashCard {
  revealed: boolean;
  answeredCorrectly: boolean;
}
