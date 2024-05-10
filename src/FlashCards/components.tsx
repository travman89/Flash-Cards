import styled from "styled-components";

const Card = styled.div`
  position: relative;
  min-height: 300px;
  min-width: 500px;
  background-color: #eee;
  max-width: 45%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

const AppContainer = styled.div`
  text-align: center;
`;

const NextButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 10px 20px;
  background-color: #023047;
  color: #eee;
  margin: 20px auto 0;
  tex-align: center;
  border-radius: 30px;
  font-weight: bold;
  width: 150px;
  display: block;
`;

const BuildQuizButton = styled(NextButton)`
  background-color: #fb8500;
`;

const AnswerCard = styled(Card)<{ reveal: boolean }>`
  cursor: ${(props) => (props.reveal ? "default" : "pointer")};
`;

const CardBadge = styled.div`
  background-color: #3b0147;
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
  tex-indent: 20px;
  color: #101010;
`;

const QuestionCard = styled(Card)``;

export {
  AnswerCard,
  QuestionCard,
  CardContainer,
  AppContainer,
  NextButton,
  CardBadge,
  CardText,
  BuildQuizButton,
};
