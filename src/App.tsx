import { useState } from "react";
import { FlashCards } from "./FlashCards";
import { AppContainer, ContentContainer } from "./components";
import { cardList } from "./cards";
import { FlashCard } from "./types";
import { SCREENS } from "./constants";
import { SideBar } from "./SideBar";
import { QuizBuilder } from "./QuizBuilder";
import { useQuiz } from "./hooks/useQuiz";
function App() {
  const [selectedCards, setSelectedCards] = useState<FlashCard[]>(cardList);
  const [screen, setScreen] = useState(SCREENS.QUIZ_BUILDER);
  const {
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
  } = useQuiz(selectedCards);
  return (
    <>
      <AppContainer>
        <SideBar
          setScreen={setScreen}
          screen={screen}
          buildQuizfromIncorrectAndSkippedCards={
            buildQuizfromIncorrectAndSkippedCards
          }
        />
        <ContentContainer>
          {screen === SCREENS.QUIZ_BUILDER && (
            <QuizBuilder setQuiz={setSelectedCards} setScreen={setScreen} />
          )}
          {screen === SCREENS.FLASH_CARDS && (
            <FlashCards
              cards={quiz}
              setScreen={setScreen}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              markCorrect={markCorrect}
              markIncorrect={markIncorrect}
            />
          )}
        </ContentContainer>
      </AppContainer>
    </>
  );
}

export default App;
