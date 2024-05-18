import styled from "styled-components";

const SelectionCard = styled.div`
  position: relative;
  min-height: 300px;
  min-width: 500px;
  background-color: #fff;
  max-width: 45%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10vh auto 0;
`;

const SelectionCardTitle = styled.div`
  font-size: 24px;
  color: #303030;
  border-bottom: 1px solid #505050;
  text-align: left;
  width: 100%;
  padding: 5px 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > p {
    margin: 0 20px;
  }
`;

const SelectorButton = styled.button<{ selected: boolean }>`
  all: unset;
  margin: 0 auto;
  padding: 5px 10px;
  width: 80px;
  border-radius: 5px;
  cursor: ${(props) => (props.selected ? "default" : "pointer")};
  transition: all 0.3s;
  font-weight: bold;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  &:active {
    transform: scale(0.97);
  }
`;

const SubjectButton = styled(SelectorButton)`
  background-color: ${(props) => (props.selected ? "#0000b0" : "white")};
  color: ${(props) => (props.selected ? "white" : "#0000b0")};
  border: 1px solid #0000b0;
`;

const AuthorButton = styled(SelectorButton)`
  background-color: ${(props) => (props.selected ? "#FFA500" : "white")};
  color: ${(props) => (props.selected ? "white" : "#FFA500")};
  border: 1px solid #ffa500;
`;

const AllButton = styled(SelectorButton)`
  background-color: ${(props) => (props.selected ? "#54647c" : "white")};
  color: ${(props) => (props.selected ? "white" : "#54647c")};
  border: 1px solid #54647c;
`;

const TopFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  margin: 0;
`;

const CardSubjectFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const IndividualSubjectFilter = styled(SubjectButton)`
  padding: 2px 5px;
  margin: 10px 10px 0;
  cursor: ${(props) => (props.selected ? "pointer" : "pointer")};
`;

const IndividualAuthorFilter = styled(AuthorButton)`
  padding: 2px 5px;
  margin: 10px 10px 0;
`;

const SubmitQuizButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 10px 20px;
  background-color: #008000;
  color: #fff;
  margin: 20px auto;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  &:active {
    transform: scale(0.97);
  }
`;

export {
  SelectionCard,
  SelectionCardTitle,
  SubjectButton,
  AuthorButton,
  AllButton,
  TopFilterContainer,
  IndividualSubjectFilter,
  IndividualAuthorFilter,
  CardSubjectFilters,
  SubmitQuizButton,
};
