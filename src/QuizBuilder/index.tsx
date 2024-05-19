/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  SelectionCard,
  SelectionCardTitle,
  SubjectButton,
  AuthorButton,
  AllButton,
  TopFilterContainer,
  CardSubjectFilters,
  IndividualSubjectFilter,
  IndividualAuthorFilter,
  SubmitQuizButton,
} from "./components";
import { cardList } from "../cards";
import { FILTER_OPTIONS, SCREENS } from "../constants";
import {
  buildAuthorList,
  buildSubjectList,
  filterBySelectedSubjectList,
  filterBySelectedAuthorList,
  shuffle,
} from "./helpers";
import { FlashCard } from "../types";

const QuizBuilder = ({
  setQuiz,
  setScreen,
}: {
  setQuiz: (cards: FlashCard[]) => void;
  setScreen: (screen: SCREENS) => void;
}) => {
  const authorList = buildAuthorList(cardList);
  const subjectList = buildSubjectList(cardList);

  const [selectedCards, setSelectedCards] = useState(cardList);
  const [selectedSubjectCards, setSelectedSubjectCards] = useState<string[]>(
    []
  );
  const [selectedAuthorCards, setSelectedAuthorCards] = useState<string[]>([]);
  const [filterSelection, setFilterSelection] = useState(FILTER_OPTIONS.ALL);

  const filterSubject = () => {
    setFilterSelection(FILTER_OPTIONS.SUBJECT);
    if (selectedAuthorCards.length > 0) {
      setSelectedCards(
        filterBySelectedAuthorList(
          selectedAuthorCards,
          filterBySelectedSubjectList(selectedSubjectCards, cardList)
        )
      );
    } else {
      setSelectedCards(
        filterBySelectedSubjectList(selectedSubjectCards, cardList)
      );
    }
  };

  const filterAuthor = () => {
    setFilterSelection(FILTER_OPTIONS.AUTHOR);
    if (selectedSubjectCards.length > 0) {
      setSelectedCards(
        filterBySelectedSubjectList(
          selectedSubjectCards,
          filterBySelectedAuthorList(selectedAuthorCards, cardList)
        )
      );
    } else {
      setSelectedCards(
        filterBySelectedAuthorList(selectedAuthorCards, cardList)
      );
    }
  };

  const filterAll = () => {
    setFilterSelection(FILTER_OPTIONS.ALL);
    setSelectedCards([...cardList]);
  };

  const selectSubject = (e: any) => {
    const tempCards = [...selectedSubjectCards];
    if (selectedSubjectCards.includes(e.target.value)) {
      setSelectedSubjectCards(
        tempCards.filter((subjectCard) => subjectCard !== e.target.value)
      );
    } else {
      tempCards.push(e.target.value);
      setSelectedSubjectCards([...tempCards]);
    }
  };

  const selectAuthor = (e: any) => {
    const tempCards = [...selectedAuthorCards];
    if (selectedAuthorCards.includes(e.target.value)) {
      setSelectedAuthorCards(
        tempCards.filter((authorCard) => authorCard !== e.target.value)
      );
    } else {
      tempCards.push(e.target.value);
      setSelectedAuthorCards([...tempCards]);
    }
  };

  const submitQuiz = () => {
    setQuiz(shuffle([...selectedCards]));
    setScreen(SCREENS.FLASH_CARDS);
  };

  useEffect(() => {
    if (filterSelection === FILTER_OPTIONS.ALL) {
      setSelectedCards([...cardList]);
    } else if (filterSelection === FILTER_OPTIONS.SUBJECT) {
      filterSubject();
    } else {
      filterAuthor();
    }
  }, [selectedSubjectCards, selectedAuthorCards, filterSelection]);

  return (
    <>
      <SelectionCard>
        <SelectionCardTitle>
          <p>Build your quiz</p>
          <p>Selected cards: {selectedCards.length}</p>
        </SelectionCardTitle>
        <TopFilterContainer>
          <AllButton
            selected={filterSelection === FILTER_OPTIONS.ALL}
            onClick={filterAll}
          >
            {FILTER_OPTIONS.ALL}
          </AllButton>
          <SubjectButton
            selected={filterSelection === FILTER_OPTIONS.SUBJECT}
            onClick={filterSubject}
          >
            {FILTER_OPTIONS.SUBJECT}
          </SubjectButton>
          <AuthorButton
            selected={filterSelection === FILTER_OPTIONS.AUTHOR}
            onClick={filterAuthor}
          >
            {FILTER_OPTIONS.AUTHOR}
          </AuthorButton>
        </TopFilterContainer>
        <CardSubjectFilters>
          {filterSelection === FILTER_OPTIONS.SUBJECT && (
            <>
              {subjectList.map((subject) => (
                <IndividualSubjectFilter
                  onClick={selectSubject}
                  value={subject}
                  key={`subject-${subject}`}
                  selected={selectedSubjectCards.includes(subject)}
                >
                  {subject}
                </IndividualSubjectFilter>
              ))}
            </>
          )}
          {filterSelection === FILTER_OPTIONS.AUTHOR && (
            <>
              {authorList.map((author) => (
                <IndividualAuthorFilter
                  onClick={selectAuthor}
                  value={author}
                  key={`author-${author}`}
                  selected={selectedAuthorCards.includes(author)}
                >
                  {author}
                </IndividualAuthorFilter>
              ))}
            </>
          )}
        </CardSubjectFilters>
      </SelectionCard>
      {selectedCards.length > 0 && (
        <SubmitQuizButton onClick={submitQuiz}>Start Quiz</SubmitQuizButton>
      )}
    </>
  );
};

export { QuizBuilder };
