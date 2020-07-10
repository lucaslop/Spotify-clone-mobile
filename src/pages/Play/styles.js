import styled from "styled-components/native";
import { Slider } from "react-native";
export const Container = styled.View`
  background: #1b1a1f;
  flex: 1;
`;

export const ScreenArea = styled.View`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
`;
export const CoverArea = styled.View`
  flex: 2;
`;

export const Img = styled.View`
  margin-left: 50px;
  margin-top: 50px;
`;
export const PlayerArea = styled.View`
  flex: 1;
`;

export const PlayerTitle = styled.Text`
  color: #ffff;
  font-weight: bold;
  font-size: 24px;
`;

export const PlayerAuthor = styled.Text`
  color: #bbb;
  font-size: 12px;
`;

export const PlayerAreaButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const NextButton = styled.TouchableOpacity``;
export const BackButton = styled.TouchableOpacity``;
export const ButtonPlay = styled.TouchableOpacity`
  padding: 0 25px;
`;

export const PlayerSlider = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const AudioSlider = styled(Slider)`
  margin-top: 15px;
  flex-basis: 100%;
`;

export const PlayerTime = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const TimeStart = styled.Text`
  color: #eee;
`;
export const TimeEnd = styled.Text`
  color: #eee;
`;
