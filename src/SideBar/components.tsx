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

export { SideBarContainer, SideBarTopSection, SideBarTitle };
