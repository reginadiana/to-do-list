import React from "react";
import ImgView from "../../assets/view.svg";
import ImgCardBlack from "../../assets/card-back.svg";
import ImgAutomation from "../../assets/automation.png";
import ImgPowerUps from "../../assets/power-ups.png";
import * as Styled from "./Benefits.style";

const Benefits = () => {
  return (
    <Styled.Section>
      <article>
        <h2>Recursos para ajudar no sucesso do time</h2>
        <p>
          Para capacitar um time produtivo, é preciso usar uma ferramenta
          poderosa (e ter muitos lanches). De reuniões e projetos a eventos e
          definição de metas, os recursos intuitivos do Trello dão a qualquer
          time a capacidade de configurar e personalizar fluxos de trabalho com
          rapidez para quase qualquer coisa.
        </p>
      </article>
      <article>
        <img src={ImgView} alt="" aria-hidden="true" />
        <strong>ESCOLHA UMA VISUALIZAÇÃO</strong>
        <h2>O quadro é apenas o começo</h2>
        <p>
          Listas e cartões são os elementos fundamentais da organização do
          trabalho em um quadro do Trello. Cresça a partir daí com atribuições
          de tarefas, cronogramas, métricas de produtividade, calendários e
          muito mais.
        </p>
        <button>Saiba Mais</button>

        <span>
          Você e seu time podem iniciar um quadro do Trello em segundos. Com a
          capacidade de visualizar os dados do quadro de vários ângulos
          diferentes, todo time fica atualizado da maneira mais conveniente:
        </span>

        <ul>
          <li>Use a visualização Cronograma para o planejamento do projeto</li>
          <li>
            Criar botões personalizados para desenvolver processos com rapidez
          </li>
          <li>O Calendário ajuda com a gestão do tempo</li>
          <li>
            A visualização em formato Tabela conecta o trabalho entre quadros
          </li>
          <li>Veja as estatísticas do quadro com o Painel e muito mais!</li>
        </ul>

        <a href="./">Saiba mais sobre as visualizações</a>
      </article>

      <article>
        <img src={ImgCardBlack} alt="" aria-hidden="true" />
        <strong>MERGULHE NOS DETALHES</strong>
        <h2>Os cartões contêm tudo de que você precisa</h2>
        <p>
          Os cartões do Trello são um portal para trabalhos mais organizados,
          onde cada parte da tarefa pode ser gerenciada, rastreada e
          compartilhada com colegas de time. Abra qualquer cartão para descobrir
          um ecossistema de checklists, datas de entrega, anexos, conversas e
          muito mais.
        </p>
        <button>Saiba Mais</button>

        <span>
          Elabore um cartão do Trello com um clique e descubra tudo o que ele
          pode guardar. Divida tarefas de cartões maiores em etapas com
          visualizações de anexos de arquivos, lembretes, checklists e
          comentários — inclusive com reações com emoji! Além disso, obtenha uma
          perspectiva poderosa vendo todos os cartões por lista e status no
          nível do quadro.
        </span>

        <span>Seu time pode:</span>

        <ul>
          <li>Gerenciar prazos</li>
          <li>
            Criar botões personalizados para desenvolver processos com rapidez
          </li>
          <li>Oferecer e acompanhar feedbacks</li>
          <li>Delegar tarefas e entregar o trabalho</li>
          <li>Conectar o trabalho entre aplicativos</li>
        </ul>
      </article>

      <article>
        <img src={ImgAutomation} alt="" aria-hidden="true" />
        <strong>CONHEÇA SEU NOVO BUTLER</strong>
        <h2>Automação sem código</h2>
        <p>
          Deixe os robôs fazerem o trabalho, para que o time possa manter o foco
          no trabalho que importa. Com a automação integrada do Trello, o
          Butler, reduza o número de tarefas tediosas (e cliques) no quadro de
          projeto, aproveitando o poder da automação para todo o time.
        </p>
        <button>Saiba Mais</button>

        <span>
          O Butler usa comandos de linguagem natural para automatizar
          praticamente qualquer tarefa no Trello:
        </span>

        <ul>
          <li>Automatizar ações comuns, como mover listas</li>
          <li>
            Criar botões personalizados para desenvolver processos com rapidez
          </li>
          <li>Dropbox</li>
          <li>Destacar os próximos prazos para o time</li>
          <li>Agendar tarefas dos colegas de time e muito mais!</li>
        </ul>

        <a href="./">Saiba mais sobre o Butler Automation</a>
      </article>

      <article>
        <img src={ImgPowerUps} alt="" aria-hidden="true" />
        <strong>POWER-UPS</strong>
        <h2>Integre as melhores ferramentas de trabalho</h2>
        <p>
          Conecte com facilidade os aplicativos que seu time já usa ao fluxo de
          trabalho do Trello ou adicione um Power-Up que ajude a ajustar uma
          necessidade específica. Com centenas de Power-Ups disponíveis, os
          desejos do fluxo de trabalho do seu time são realizados.
        </p>
        <button>Saiba Mais</button>

        <span>
          Desde relatórios de campos personalizados até suas adoradas
          integrações de software — a gente tem funcionalidades, seus favoritos
          e muito mais!
        </span>

        <span>Como:</span>

        <ul>
          <li>Confluence</li>
          <li>Slack</li>
          <li>Dropbox</li>
          <li>Google Drive</li>
          <li>Evernote</li>
        </ul>

        <a href="./">Saiba mais sobre Power-Ups</a>
      </article>
    </Styled.Section>
  );
};

export default Benefits;
