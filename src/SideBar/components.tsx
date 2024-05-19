import styled from "styled-components";
import { ANSWER } from "../types";

const SideBarContainer = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  width: 300px;
  background-color: #353f4e;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SideBarTopSection = styled.div`
  text-align: center;
  border-bottom: 4px solid #2a3340;
  width: 100%;
`;

const SideBarTitle = styled.h1`
  background: -webkit-linear-gradient(135deg, #ea73ff, #ff9100);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 28px;
  text-align: center;
`;

const QuizBuilderButton = styled.button`
  all: unset;
  cursor: pointer;
  background-color: #ff9100;
  color: #ffffff;
  width: 180px;
  height: 50px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px auto;
  transition: all 0.3s;
  font-weight: bold;
  &:active {
    transform: scale(0.97);
  }
`;

const QuizSkippedAndMissed = styled.button`
  all: unset;
  cursor: pointer;
  background-color: #ff0000;
  color: #ffffffff;
  width: 180px;
  height: 50px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 10px auto;
  transition: all 0.3s;
  font-weight: bold;
  &:active {
    transform: scale(0.97);
  }
`;

const BottomSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ButtonCtonainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectCardText = styled.p`
  text-align: left;
  color: #ffffff;
  margin: 80px 20px;
  font-size: 20px;
`;

const DeckContainer = styled.div`
  display: flex;
  position: relative;
  width: 190px;
  flex-wrap: wrap;
  margin: 60px auto 20px;
`;

const QuizDot = styled.button<{ status: string }>`
  all: unset;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 3px;
  background-color: ${(props) =>
    props.status === ANSWER.CORRECT
      ? "#008000"
      : props.status === ANSWER.INCORRECT
      ? "#ff0000"
      : "#e3e3e3"};
  &:active {
    transform: scale(0.97);
  }
`;

const SelectedQuestion = styled.div<{ x: number; y: number }>`
  width: 34px;
  height: 34px;
  border-radius: 18px;
  border: 2px solid #ff9100;
  transform: translate(${(props) => props.x}px, ${(props) => props.y}px);
  transition: all 0.3s;
  background-color: transparent;
  position: absolute;
  top: -1;
  left: -1;
  z-index: 100;
`;

const CorrectText = styled.p`
  font-size: 24px;
  color: #ffffff;
  margin: 40px auto 20px;
  min-width: 160px;
`;
export {
  SideBarContainer,
  SideBarTopSection,
  SideBarTitle,
  QuizBuilderButton,
  QuizSkippedAndMissed,
  BottomSection,
  ButtonCtonainer,
  SelectCardText,
  DeckContainer,
  QuizDot,
  SelectedQuestion,
  CorrectText,
};
