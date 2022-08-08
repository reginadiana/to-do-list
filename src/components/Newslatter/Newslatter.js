import React from "react";
import * as Styled from "./Newslatter.style";

const Newslatter = () => {
  return (
    <Styled.Section>
      <p>
        Faça a inscrição e comece a usar o Trello hoje mesmo. Um mundo de
        trabalho em equipe produtivo espera por você!
      </p>
      <form>
        <input type="email" placeholder="E-mail" />
        <button>Inscreva-se</button>
      </form>
    </Styled.Section>
  );
};

export default Newslatter;
