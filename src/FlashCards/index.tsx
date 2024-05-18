import { useState } from "react";
import {
  AnswerCard,
  QuestionCard,
  CardContainer,
  CardBadge,
  CardText,
  ButtonContainer,
  Spacer,
  PreviousButton,
  NextButton,
  CorrectButton,
  IncorrectButton,
  AnswerText,
} from "./components";
import { FlashCard } from "../types";
import { SCREENS } from "../constants";

// TODO pass in the cardList as a prop
const FlashCards = ({
  cards,
  setScreen,
  currentIndex,
  setCurrentIndex,
  markCorrect,
  markIncorrect,
}: {
  cards: FlashCard[];
  setScreen: (screen: SCREENS) => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  markCorrect: () => void;
  markIncorrect: () => void;
}) => {
  const [reveal, setReveal] = useState(false);

  const revealCard = () => {
    setReveal(true);
  };

  const nextCard = () => {
    setCurrentIndex(currentIndex + 1);
    setReveal(false);
  };

  const previousCard = () => {
    setCurrentIndex(currentIndex - 1);
    setReveal(false);
  };

  const buildQuizPress = () => {
    setScreen(SCREENS.QUIZ_BUILDER);
  };

  return (
    <>
      <CardContainer>
        <QuestionCard>
          <CardBadge>{cards[currentIndex].subject}</CardBadge>
          <CardText>{cards[currentIndex].question}</CardText>
        </QuestionCard>
        <AnswerCard onClick={revealCard} reveal={reveal}>
          <AnswerText reveal={reveal}>
            {reveal ? cards[currentIndex].answer : "Click to reveal..."}
          </AnswerText>
        </AnswerCard>
      </CardContainer>
      <ButtonContainer>
        {currentIndex === 0 ? (
          <Spacer />
        ) : (
          <PreviousButton onClick={previousCard}>Previous</PreviousButton>
        )}
        {currentIndex === cards.length - 1 ? (
          <Spacer />
        ) : (
          <NextButton onClick={nextCard}>Next</NextButton>
        )}
        <IncorrectButton onClick={markIncorrect}>Incorrect</IncorrectButton>
        <CorrectButton onClick={markCorrect}>Correct</CorrectButton>
      </ButtonContainer>
      {/* <BuildQuizButton onClick={buildQuizPress}>Build New Quiz</BuildQuizButton> */}
    </>
  );
};

export { FlashCards };
