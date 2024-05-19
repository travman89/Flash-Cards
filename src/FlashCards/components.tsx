import styled from "styled-components";

const AppContainer = styled.div``;

const Card = styled.div`
  position: relative;
  min-height: 300px;
  min-width: 500px;
  background-color: #fff;
  max-width: 45%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  &:first-child {
    margin-bottom: 20px;
  }
  align-content: center;
`;

const CardContainer = styled.div`
  max-width: 80vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 6vh;
`;

const ContentContainer = styled.div`
  text-align: center;
`;

const AnswerCard = styled(Card)<{ reveal: boolean }>`
  cursor: ${(props) => (props.reveal ? "default" : "pointer")};
`;

const CardBadge = styled.div`
  background-color: #54647c;
  color: white;
  padding: 5px 10px;
  border-radius: 26px;
  font-size: 14px;
  font-weight: bold;
  top: 20px;
  left: 20px;
  position: absolute;
`;

const CardText = styled.p`
  font-size: 24px;
  text-align: left;
  text-indent: 20px;
  color: #101010;
`;

const AnswerText = styled(CardText)<{ reveal: boolean }>`
  opacity: ${(props) => (props.reveal ? 1 : 0.4)};
`;

const QuestionCard = styled(Card)``;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin: 20px auto;
  width: 540px;
  max-width: 540px;
`;

const Spacer = styled.div`
  width: 120px;
  height: 40px;
  max-width: 120px;
  max-height: 40px;
  min-width: 120px;
  min-height: 40px;
`;

const QuizButton = styled.button`
  width: 120px !important;
  height: 40px !important;
  max-width: 120px;
  max-height: 40px;
  min-width: 120px;
  min-height: 40px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const PreviousButton = styled(QuizButton)`
  border: 1px solid #54647c;
  background-color: #54647c;
  &:active {
    transform: scale(0.97);
  }
`;

const NextButton = styled(PreviousButton)``;

const IncorrectButton = styled(QuizButton)`
  border: 1px solid #ff0000;
  background-color: #ff0000;
  &:active {
    transform: scale(0.97);
  }
`;

const CorrectButton = styled(QuizButton)`
  border: 1px solid #008000;
  background-color: #008000;
  &:active {
    transform: scale(0.97);
  }
`;
export {
  AnswerCard,
  QuestionCard,
  CardContainer,
  ContentContainer,
  CardBadge,
  CardText,
  AppContainer,
  AnswerText,
  ButtonContainer,
  Spacer,
  PreviousButton,
  NextButton,
  CorrectButton,
  IncorrectButton,
};
