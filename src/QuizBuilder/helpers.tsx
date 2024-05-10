import { FlashCard } from "../types";

const buildSubjectList = (cardList: FlashCard[]): string[] => {
  const subjects = cardList.map((card) => card.subject ?? "");
  return Array.from(new Set(subjects)).filter((subject) => subject !== "");
};

const buildAuthorList = (cardList: FlashCard[]): string[] => {
  const authors = cardList.map((card) => card.author ?? "");
  return Array.from(new Set(authors)).filter((author) => author !== "");
};

const filterBySelectedSubjectList = (
  selectedSubjectCards: string[],
  cardList: FlashCard[]
) => {
  return cardList.filter((card) =>
    selectedSubjectCards.includes(card.subject ?? "")
  );
};

const filterBySelectedAuthorList = (
  selectedAuthorCards: string[],
  cardList: FlashCard[]
) => {
  return cardList.filter((card) =>
    selectedAuthorCards.includes(card.author ?? "")
  );
};

const shuffle = (cardArray: FlashCard[]) => {
  for (let i = cardArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
  }
  return cardArray;
};
export {
  buildSubjectList,
  buildAuthorList,
  filterBySelectedSubjectList,
  filterBySelectedAuthorList,
  shuffle,
};
