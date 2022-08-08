import React from "react";
import ImgPlayStore from "../../assets/play-store.svg";
import ImgAppStore from "../../assets/app-store.svg";
import * as Styled from "./PlayStore.style";

const PlayStore = () => {
  return (
    <Styled.Section>
      <p>O Trello também tem ótimo funcionamento em telas melhores.</p>
      <img src={ImgPlayStore} alt="Icone da play store " aria-hidden="true" />
      <img src={ImgAppStore} alt="Icone da app store " aria-hidden="true" />
    </Styled.Section>
  );
};

export default PlayStore;
