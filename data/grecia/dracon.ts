import { HistoricalDocument } from '../types';

export const dracon: HistoricalDocument = {
  id: 'dracon',
  title: 'Leis de Drácon',
  subtitle: 'O Rigor da Lei Escrita',
  date: 'c. 621 a.C.',
  era: 'Grécia Antiga',
  language: 'Grego Ático',
  description: 'O primeiro código de leis escritas de Atenas, atribuído ao legislador Drácon. Notório pela severidade de suas penas, marcou a transição do direito oral e aristocrático para a lei escrita e pública.',
  sections: [
    {
      id: 'context',
      title: 'Contexto Histórico',
      type: 'text',
      content: "A tradição antiga atribui a Drácon a fixação escrita de leis atenienses no final do século VII a.C. A lei sobre homicídio ocupa lugar particular nessa memória: foi republicada em pedra em 409/408 a.C. e permaneceu uma referência para os atenienses de períodos posteriores.\n\nA escrita da norma deve ser examinada nas relações de poder da pólis, nas competências dos magistrados e na atuação dos parentes da vítima. Ela não significou a substituição imediata de todas as práticas familiares de resolução de conflitos por um monopólio estatal nos moldes modernos. A imagem de uma legislação de severidade extrema, conhecida sobretudo por autores posteriores, precisa ser distinguida daquilo que a inscrição permite documentar."
    },
    {
      id: 'about',
      title: 'Sobre o Texto',
      type: 'text',
      content: "Esta página reúne uma síntese editorial de testemunhos de naturezas diferentes. A inscrição IG I³ 104 registra a republicação ateniense da lei sobre homicídio em 409/408 a.C.; seu texto é fragmentário. Os relatos de Demóstenes e Plutarco pertencem a outros contextos e não devem ser apresentados como partes contínuas da inscrição. Os números dos itens abaixo são de organização desta página, não parágrafos conservados de um código integral.\n\nPara a inscrição, foram consultados o texto grego de IG Online (https://telota.bbaw.de/ig/digitale-edition/inschrift/IG%20I%C2%B3%20104) e a apresentação de Stephen Lambert e P. J. Rhodes no Attic Inscriptions Online (https://atticinscriptions.com/inscription/IGI3/104). As referências literárias são Demóstenes, Contra Aristócrates, 23.53, e Plutarco, Vida de Sólon, 17.1–2. Consulta em: 6 nov. 2026. A síntese em português não substitui a tradução integral dessas fontes."
    },
    {
      id: 'laws-1',
      title: 'I – Síntese da inscrição sobre homicídio (IG I³ 104)',
      type: 'articles',
      articles: [
        { id: 'd-1', number: "S\u00edntese 1", text: "A inscrição prevê exílio para o homicídio sem premeditação e atribui funções de julgamento aos basileis e aos efetas. Síntese de IG I³ 104, linhas 10–13; há lacunas na descrição das competências." },
        { id: 'd-2', number: "S\u00edntese 2", text: "A reconciliação depende da concordância dos familiares previstos na inscrição. Na ausência deles, o texto disciplina a participação de dez membros da fratria, escolhidos pelos cinquenta e um efetas, no caso de morte involuntária. Síntese de IG I³ 104, linhas 13–19." },
        { id: 'd-3', number: "S\u00edntese 3", text: "O texto protege, em condições determinadas, o homicida que permanece afastado dos locais vedados: matá-lo pode sujeitar o autor às consequências previstas para a morte de um ateniense. Síntese de IG I³ 104, linhas 26–29; a passagem é fragmentária." },
      ]
    },
    {
      id: 'laws-2',
      title: 'II – Testemunho de Demóstenes (23.53)',
      type: 'articles',
      articles: [
        { id: 'd-4', number: "S\u00edntese 4", text: "Demóstenes cita uma lei que afasta o exílio em certas mortes ocorridas em competições, em combate no caminho, por engano na guerra e em situações sexuais especificadas pelo texto. Trata-se de uma síntese de Contra Aristócrates, 23.53, não de transcrição da inscrição de 409/408 a.C." },
      ]
    },
    {
      id: 'laws-3',
      title: 'III – A severidade atribuída a Drácon por Plutarco',
      type: 'articles',
      articles: [
        { id: 'd-5', number: "S\u00edntese 5", text: "Plutarco relata que furtos de produtos agrícolas recebiam punição tão severa quanto delitos como sacrilégio e homicídio. Este é um testemunho biográfico tardio sobre a reputação da legislação, não o texto preservado dessas normas. Referência: Vida de Sólon, 17.1." },
        { id: 'd-6', number: "S\u00edntese 6", text: "No mesmo relato, Plutarco inclui a ociosidade entre as condutas que teriam sido punidas com a morte. A informação é atribuída ao autor e não permite reconstruir literalmente uma lei perdida. Referência: Vida de Sólon, 17.1–2." },
      ]
    },
    {
      id: 'glossary',
      title: 'Glossário',
      type: 'glossary',
      glossaryEntries: [
        { term: 'Thesmoi', definition: 'Nome dado às leis de Dracon. Significa "aquilo que é imposto" ou "estabelecido". Diferencia-se de Nomoi (leis), termo usado posteriormente para a legislação de Sólon.' },
        { term: 'Basileus (Arconte-Rei)', definition: 'Magistrado ateniense encarregado das funções religiosas e dos crimes de sangue (que eram vistos como uma poluição religiosa, miasma). Era ele quem presidia o julgamento inicial.' },
        { term: 'Ephetai', definition: 'Um tribunal especial de 51 juízes, escolhidos entre os nobres, encarregados especificamente de julgar os casos de homicídio sob as leis de Dracon.' },
        { term: 'Draconiano', definition: 'Adjetivo que sobreviveu até hoje para designar medidas, regras ou leis excessivamente rigorosas, cruéis ou severas.' },
        { term: 'Miasma', definition: 'A "poluição" ou "mancha" espiritual causada pelo derramamento de sangue. Para os gregos, o homicídio não era apenas um crime contra a pessoa, mas uma ofensa aos deuses que colocava toda a cidade em perigo, exigindo a punição ou exílio do culpado para purificar a comunidade.' },
      ]
    }
  ]
};
