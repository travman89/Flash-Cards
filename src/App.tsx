import { useState } from "react";
import { FlashCards } from "./FlashCards";
import { AppContainer } from "./FlashCards/components";
import { cardList } from "./cards";
import { FlashCard } from "./types";
import { SCREENS } from "./constants";
import { QuizBuilder } from "./QuizBuilder";

function App() {
  const [selectedCards, setSelectedCards] = useState<FlashCard[]>(cardList);
  const [screen, setScreen] = useState(SCREENS.QUIZ_BUILDER);
  return (
    <>
      <AppContainer>
        {screen === SCREENS.QUIZ_BUILDER && (
          <QuizBuilder setCards={setSelectedCards} setScreen={setScreen} />
        )}
        {screen === SCREENS.FLASH_CARDS && (
          <FlashCards cards={selectedCards} setScreen={setScreen} />
        )}
      </AppContainer>
    </>
  );
}

export default App;
