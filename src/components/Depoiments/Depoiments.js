import React from "react";
import ImgEbay from "../../assets/ebay.svg";
import ImgEgencia from "../../assets/egencia.svg";
import ImgDetroidRedWings from "../../assets/detroit-red-wings.svg";
import ImgSproutSocial from "../../assets/sprout-social.svg";
import * as Styled from "./Depoiments.style";

const Depoiments = () => {
  return (
    <Styled.Section>
      <article>
        <blockquote>
          Todo mundo o ama; ele democratizou a função financeira. De certa
          forma, o Trello desmontou a hierarquia e aumentou a união.
        </blockquote>
        <p>
          <strong>BHARATH SUNDAR</strong> - Finanças, eBay
        </p>
        <p>
          Setor: <strong>Comércio eletrônico</strong>
        </p>
        <img src={ImgEbay} alt="Logo do Ebay" aria-hidden="true" />
      </article>

      <article>
        <blockquote>
          Muito simples de usar, ótima automação e faz com que eu fique em dia
          com tudo o que preciso fazer. Eu também gosto do fato dele poder ser
          compartilhado com outras pessoas.
        </blockquote>
        <p>
          <strong>KERRY PARKER</strong> - Gerente de projetos de TI, Egencia
        </p>
        <p>
          Setor: <strong>Viagens</strong>
        </p>
        <img src={ImgEgencia} alt="Logo da Egencial" aria-hidden="true" />
      </article>

      <article>
        <blockquote>
          Com o Trello, é fácil manter todos em sintonia. À medida que as
          mudanças acontecem, as atualizações em tempo real com notificações por
          e-mail têm sido fundamentais.
        </blockquote>
        <p>
          <strong>HAYDON DOTSON</strong> - Gerente de vendas, Detroit Red Wings
        </p>
        <p>
          Setor: <strong>Esporte</strong>
        </p>
        <img
          src={ImgDetroidRedWings}
          alt="Logo de Detroid Red Wings"
          aria-hidden="true"
        />
      </article>

      <article>
        <blockquote>
          Agora que a gente mudou para um ambiente remoto, com o uso do Trello,
          é possível limitar o número de reuniões a respeito de projetos
          específicos e recorrer ao Trello para atualizações.
        </blockquote>
        <p>
          <strong>HALEY ENNES</strong> - Gerente de RH, Sprout Social
        </p>
        <p>
          Setor: <strong>Marketing</strong>
        </p>
        <img
          src={ImgSproutSocial}
          alt="Logo da Sprout Social"
          aria-hidden="true"
        />
      </article>

      <nav>
        <button aria-label="Ir para o primeiro depoimento">1</button>
        <button aria-label="Ir para o segundo depoimento">2</button>
        <button aria-label="Ir para o terceiro depoimento">3</button>
        <button aria-label="Ir para o quarto depoimento">4</button>
      </nav>
    </Styled.Section>
  );
};

export default Depoiments;
