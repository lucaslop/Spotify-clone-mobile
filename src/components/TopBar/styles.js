import styled from "styled-components/native";

export const Bar = styled.View`
  flex-direction: row;
  padding-top: 50px;
  justify-content: space-between;
`;

export const TopBarLeft = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const TopBarRight = styled.View`
  flex: 1;
  align-items: flex-end;
  margin-right: 20px;
`;

export const TopBarMiddle = styled.View`
  flex: 2;
  align-items: center;
`;

export const Title = styled.Text`
  color: white;
  text-transform: uppercase;
`;

export const SubTitle = styled.Text`
  color: white;
  font-weight: bold;
`;
