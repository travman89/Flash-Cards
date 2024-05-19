import { FlashCard } from "./types";

export enum CARD_SUBJECTS {
  CHAPTER_1 = "Chapter 1",
  CHAPTER_2 = "Chapter 2",
  CHAPTER_3 = "Chapter 3",
  CHAPTER_4 = "Chapter 4",
  CHAPTER_5 = "Chapter 5",
  CHAPTER_6 = "Chapter 6",
  CHAPTER_7 = "Chapter 7",
}

export enum AUTHORS {
  AUTHOR_1 = "Author 1",
  AUTHOR_2 = "Author 2",
  AUTHOR_3 = "Author 3",
  AUTHOR_4 = "Author 4",
}

const cardList: FlashCard[] = [
  {
    question: "Sample Question 1",
    answer: "Sample Answer 1",
    subject: CARD_SUBJECTS.CHAPTER_1,
    author: AUTHORS.AUTHOR_1,
  },
  {
    question: "Sample Question 2",
    answer: "Sample Answer 2",
    subject: CARD_SUBJECTS.CHAPTER_1,
    author: AUTHORS.AUTHOR_1,
  },
  {
    question: "Sample Question 3",
    answer: "Sample Answer 3",
    subject: CARD_SUBJECTS.CHAPTER_2,
    author: AUTHORS.AUTHOR_1,
  },
  {
    question: "Sample Question 4",
    answer: "Sample Answer 4",
    subject: CARD_SUBJECTS.CHAPTER_2,
    author: "Author 2",
  },
  {
    question: "Sample Question 5",
    answer: "Sample Answer 5",
    subject: CARD_SUBJECTS.CHAPTER_3,
    author: "Author 2",
  },
  {
    question: "Sample Question 6",
    answer: "Sample Answer 6",
    subject: CARD_SUBJECTS.CHAPTER_3,
    author: AUTHORS.AUTHOR_1,
  },
  {
    question: "Sample Question 7",
    answer: "Sample Answer 7",
    subject: CARD_SUBJECTS.CHAPTER_4,
    author: AUTHORS.AUTHOR_1,
  },
  {
    question: "Sample Question 8",
    answer: "Sample Answer 8",
    subject: CARD_SUBJECTS.CHAPTER_5,
    author: "Author 2",
  },
  {
    question: "Sample Question 9",
    answer: "Sample Answer 9",
    subject: CARD_SUBJECTS.CHAPTER_6,
    author: "Author 3",
  },
  {
    question: "Sample Question 10",
    answer: "Sample Answer 10",
    subject: CARD_SUBJECTS.CHAPTER_7,
    author: "Author 4",
  },
];

export { cardList };
