import { useState } from "react";
import {
  AnswerCard,
  QuestionCard,
  CardContainer,
  NextButton,
  CardBadge,
  CardText,
  BuildQuizButton,
} from "./components";
import { FlashCard } from "../types";
import { SCREENS } from "../constants";

// TODO pass in the cardList as a prop
const FlashCards = ({
  cards,
  setScreen,
}: {
  cards: FlashCard[];
  setScreen: (screen: SCREENS) => void;
}) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [reveal, setReveal] = useState(false);

  const revealCard = () => {
    setReveal(true);
  };

  const nextCard = () => {
    setCurrentCard(currentCard + 1);
    setReveal(false);
  };

  const buildQuizPress = () => {
    setScreen(SCREENS.QUIZ_BUILDER);
  };

  return (
    <>
      <CardContainer>
        <QuestionCard>
          <CardBadge>{cards[currentCard].subject}</CardBadge>
          <CardText>{cards[currentCard].question}</CardText>
        </QuestionCard>
        <AnswerCard onClick={revealCard} reveal={reveal}>
          <CardText>{reveal ? cards[currentCard].answer : ""}</CardText>
        </AnswerCard>
      </CardContainer>

      {cards.length > currentCard + 1 && (
        <NextButton onClick={nextCard}>Next</NextButton>
      )}
      <BuildQuizButton onClick={buildQuizPress}>Build New Quiz</BuildQuizButton>
    </>
  );
};

export { FlashCards };
