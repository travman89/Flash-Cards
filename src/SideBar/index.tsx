import { useEffect, useState } from "react";
import { SCREENS } from "../constants";
import { QuizQuestion } from "../types";
import {
  SideBarTopSection,
  SideBarTitle,
  SideBarContainer,
  QuizBuilderButton,
  QuizSkippedAndMissed,
  BottomSection,
  ButtonCtonainer,
  SelectCardText,
  DeckContainer,
  QuizDot,
  SelectedQuestion,
  CorrectText,
} from "./components";
import { findSelectorXY } from "./helpers";

const SideBar = ({
  setScreen,
  screen,
  buildQuizfromIncorrectAndSkippedCards,
  currentIndex,
  correctCount,
  quiz,
  setCurrentIndex,
}: {
  setScreen: (screen: SCREENS) => void;
  screen: SCREENS;
  buildQuizfromIncorrectAndSkippedCards: () => void;
  currentIndex: number;
  correctCount: number;
  quiz: QuizQuestion[];
  setCurrentIndex: (index: number) => void;
}) => {
  const [selectorCoords, setSelectorCoords] = useState(
    findSelectorXY(currentIndex)
  );
  const goToQuizBuilder = () => {
    setScreen(SCREENS.QUIZ_BUILDER);
  };
  useEffect(() => {
    setSelectorCoords(findSelectorXY(currentIndex));
  }, [currentIndex]);
  return (
    <SideBarContainer>
      <SideBarTopSection>
        <SideBarTitle>Flash Ahhh ⚡</SideBarTitle>
      </SideBarTopSection>

      <BottomSection>
        {screen === SCREENS.FLASH_CARDS ? (
          <>
            <DeckContainer>
              <SelectedQuestion x={selectorCoords.x} y={selectorCoords.y} />
              {quiz.map((card, index) => (
                <QuizDot
                  key={`dot-${index}`}
                  status={card.status}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
              <CorrectText>Correct: {correctCount}</CorrectText>
            </DeckContainer>
            <ButtonCtonainer>
              <QuizBuilderButton onClick={goToQuizBuilder}>
                New quiz
              </QuizBuilderButton>
              {/* <QuizSkippedAndMissed>Missed and skipped</QuizSkippedAndMissed> */}
            </ButtonCtonainer>
          </>
        ) : (
          <SelectCardText>Select your cards and begin your quiz</SelectCardText>
        )}
      </BottomSection>
    </SideBarContainer>
  );
};

export { SideBar };
