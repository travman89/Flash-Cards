import { SCREENS } from "../constants";
import {
  SideBarTopSection,
  SideBarTitle,
  SideBarContainer,
  QuizBuilderButton,
  QuizSkippedAndMissed,
  BottomSection,
  ButtonCtonainer,
} from "./components";

const SideBar = ({
  setScreen,
  screen,
  buildQuizfromIncorrectAndSkippedCards,
}: {
  setScreen: (screen: SCREENS) => void;
  screen: SCREENS;
  buildQuizfromIncorrectAndSkippedCards: () => void;
}) => {
  const goToQuizBuilder = () => {
    setScreen(SCREENS.QUIZ_BUILDER);
  };
  return (
    <SideBarContainer>
      <SideBarTopSection>
        <SideBarTitle>Lightning Round</SideBarTitle>
      </SideBarTopSection>

      {screen === SCREENS.FLASH_CARDS && (
        <BottomSection>
          <div></div>
          <ButtonCtonainer>
            <QuizBuilderButton onClick={goToQuizBuilder}>
              New quiz
            </QuizBuilderButton>
            <QuizSkippedAndMissed>Missed and skipped</QuizSkippedAndMissed>
          </ButtonCtonainer>
        </BottomSection>
      )}
    </SideBarContainer>
  );
};

export { SideBar };
