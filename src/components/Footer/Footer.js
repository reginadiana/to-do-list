import React from "react";
import ImgTrello from "../../assets/trello.png";
import * as Styled from "./Footer.style";

const Footer = () => {
  return (
    <Styled.Footer>
      <img src={ImgTrello} alt="Icone do Trello " aria-hidden="true" />
      <a href="./">Log In</a>
      <a href="./">
        About Trello <br /> What is behind the board
      </a>

      <a href="./">
        Jobs
        <br />
        Learn about open roles on the Trello team.
      </a>

      <a href="./">
        Apps
        <br />
        Download the Trello App for your Desktop or Mobile devices.
      </a>
      <a href="./">
        Contact us
        <br />
        Need anything? Get in touch and we can help.
      </a>

      <select aria-label="Select a language" data-testid="language-select">
        <option value="cs" data-uuid="cs_language">
          Čeština
        </option>
        <option value="de" data-uuid="de_language">
          Deutsch
        </option>
        <option value="en" data-uuid="en_language">
          English
        </option>
        <option value="en-AU" data-uuid="en-AU_language">
          English (AU)
        </option>
        <option value="en-GB" data-uuid="en-GB_language">
          English (UK)
        </option>
        <option selected="" value="en-US" data-uuid="en-US_language">
          English (US)
        </option>
        <option value="es" data-uuid="es_language">
          Español
        </option>
        <option value="fr" data-uuid="fr_language">
          Français
        </option>
        <option value="it" data-uuid="it_language">
          Italiano
        </option>
        <option value="hu" data-uuid="hu_language">
          Magyar
        </option>
        <option value="nl" data-uuid="nl_language">
          Nederlands
        </option>
        <option value="nb" data-uuid="nb_language">
          Norsk (bokmål)
        </option>
        <option value="pl" data-uuid="pl_language">
          Polski
        </option>
        <option value="pt-BR" data-uuid="pt-BR_language">
          Português (Brasil)
        </option>
        <option value="fi" data-uuid="fi_language">
          Suomi
        </option>
        <option value="sv" data-uuid="sv_language">
          Svenska
        </option>
        <option value="vi" data-uuid="vi_language">
          Tiếng Việt
        </option>
        <option value="tr" data-uuid="tr_language">
          Türkçe
        </option>
        <option value="ru" data-uuid="ru_language">
          Русский
        </option>
        <option value="uk" data-uuid="uk_language">
          Українська
        </option>
        <option value="th" data-uuid="th_language">
          ภาษาไทย
        </option>
        <option value="zh-Hans" data-uuid="zh-Hans_language">
          中文 (简体)
        </option>
        <option value="zh-Hant" data-uuid="zh-Hant_language">
          中文 (繁體)
        </option>
        <option value="ja" data-uuid="ja_language">
          日本語
        </option>
      </select>

      <a href="./">Privacy Policy</a>
      <a href="./">Terms</a>
      <a href="./">Cookies Settings</a>
      <a href="./">Copyright © 2022 Atlassian</a>
    </Styled.Footer>
  );
};

export default Footer;
