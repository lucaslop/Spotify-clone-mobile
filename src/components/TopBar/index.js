import React from "react";
import {
  Bar,
  TopBarLeft,
  TopBarMiddle,
  TopBarRight,
  Title,
  SubTitle
} from "./styles";
import { Image } from "react-native";
import Menu from "../../../assets/Menu.png";
import Drown from "../../../assets/drown.png";
const TopBar = () => {
  return (
    <Bar>
      <TopBarLeft>
        <Image source={Drown} />
      </TopBarLeft>
      <TopBarMiddle>
        <Title>Tocando Podcast</Title>
        <SubTitle>Podcast Araujo</SubTitle>
      </TopBarMiddle>
      <TopBarRight>
        <Image source={Menu} />
      </TopBarRight>
    </Bar>
  );
};

export default TopBar;
