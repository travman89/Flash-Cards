import styled from "styled-components";

const AppContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #e3e3e3;
  top: 0;
  left: 0;
`;

const ContentContainer = styled.div`
  text-align: center;
  width: 100%;
`;

export { AppContainer, ContentContainer };
