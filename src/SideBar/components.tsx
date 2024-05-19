import styled from "styled-components";

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
  color: #ffffff;
  font-size: 24px;
  text-align: center;
`;

const QuizBuilderButton = styled.button`
  all: unset;
  cursor: pointer;
  background-color: #008000;
  color: #ffffff;
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
export {
  SideBarContainer,
  SideBarTopSection,
  SideBarTitle,
  QuizBuilderButton,
  QuizSkippedAndMissed,
  BottomSection,
  ButtonCtonainer,
};
