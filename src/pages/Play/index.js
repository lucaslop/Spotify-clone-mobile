import React from "react";
import SoundCoverImage from "../../../assets/SoundCoverImage.png";
import PlayButton from "../../../assets/Play.png";
import { Image } from "react-native";
import {
  Container,
  ScreenArea,
  CoverArea,
  PlayerArea,
  Img,
  PlayerTitle,
  PlayerAuthor,
  PlayerAreaButtons,
  ButtonPlay,
  BackButton,
  NextButton,
  PlayerSlider,
  AudioSlider,
  TimeStart,
  TimeEnd,
  PlayerTime
} from "./styles";
import TopBar from "../../components/TopBar";
import Back from "../../../assets/Back.png";
import Next from "../../../assets/Next.png";
const Play = () => {
  return (
    <Container>
      <TopBar />

      <ScreenArea>
        <CoverArea>
          <Img>
            <Image source={SoundCoverImage} />
          </Img>
        </CoverArea>

        <PlayerArea>
          <PlayerTitle>Porque usar React #130</PlayerTitle>
          <PlayerAuthor>Lucas Lopes</PlayerAuthor>

          <PlayerSlider>
            <AudioSlider
              thumbTintColor="#FFFFFF"
              minimumTrackTintColor="#1DD65F"
              maximumTrackTintColor="#777777"
              minimumValue={0}
              maximumValue={100}
            />
          </PlayerSlider>
          <PlayerTime>
            <TimeStart>0:00</TimeStart>
            <TimeEnd>15:00</TimeEnd>
          </PlayerTime>

          <PlayerAreaButtons>
            <BackButton>
              <Image source={Back} />
            </BackButton>

            <ButtonPlay>
              <Image source={PlayButton} />
            </ButtonPlay>

            <NextButton>
              <Image source={Next} />
            </NextButton>
          </PlayerAreaButtons>
        </PlayerArea>
      </ScreenArea>
    </Container>
  );
};

export default Play;
