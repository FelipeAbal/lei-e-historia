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
      content: `Por volta de 621 a.C., Atenas vivia um período de instabilidade. A justiça era oral e aplicada arbitrariamente pelos aristocratas (Eupátridas), que interpretavam as tradições a seu favor. Após a tentativa de golpe de Cílon e em resposta ao descontentamento popular, Dracon foi nomeado thesmothete (legislador) com a missão de colocar as leis por escrito pela primeira vez.

O resultado foi um código de severidade lendária. Dizia-se que suas leis não foram escritas com tinta, mas com sangue. A rigidez era tal que pequenos furtos eram punidos com a morte, tanto quanto o sacrilégio ou homicídio. No entanto, a importância de Dracon não está na crueldade, mas na inovação: ao escrever a lei, ele retirou o monopólio da justiça das mãos dos nobres e estabeleceu que o Estado, e não a família da vítima, deveria julgar os crimes de sangue.`
    },
    {
      id: 'about',
      title: 'Sobre o Texto',
      type: 'text',
      content: `Quase todas as leis de Dracon foram revogadas por Sólon (c. 594 a.C.) devido à sua excessiva severidade. A única parte que permaneceu em vigor, e que foi considerada sagrada pelos atenienses por séculos, foi a Lei sobre o Homicídio.

O texto abaixo é uma reconstrução baseada na famosa inscrição de 409 a.C. (uma republicação da lei original em estela de mármore) e em citações de autores como Aristóteles, Plutarco e Demóstenes.`
    },
    {
      id: 'laws-1',
      title: 'I – A Lei do Homicídio',
      type: 'articles',
      articles: [
        { id: 'd-1', number: '§ 1', text: 'Se alguém matar outro sem intenção ou premeditação, deverá ser exilado. Os Reis (Basileis) devem julgar as causas de morte, e os Efetas (Ephetai) devem decidir o veredito.' },
        { id: 'd-2', number: '§ 2', text: 'Se o morto tiver pai, irmãos ou filhos, todos eles devem concordar unanimemente para conceder o perdão ao assassino involuntário; se o fizerem, ele poderá permanecer no país. Se não houver tais parentes, o perdão poderá ser concedido pelos parentes até o grau de primo e filhos de primos. Se não houver nenhum parente, dez membros da fratria poderão decidir.' },
        { id: 'd-3', number: '§ 3', text: 'Fica proibido a qualquer pessoa matar ou ferir o assassino que se exilou e que se mantém afastado dos mercados e dos jogos da fronteira e dos santuários da Anfictionia. Se alguém matar o exilado nessas condições, será julgado como se tivesse matado um cidadão ateniense.' },
      ]
    },
    {
      id: 'laws-2',
      title: 'II – O Homicídio Justificado',
      type: 'articles',
      articles: [
        { id: 'd-4', number: '§ 4', text: 'Não será punido aquele que matar outro nas seguintes circunstâncias: ao defender-se de um ataque injusto e imediato; ao surpreender um homem em flagrante delito com sua esposa, mãe, irmã ou filha; acidentalmente durante competições atléticas; em batalha, confundindo o companheiro com o inimigo.' },
      ]
    },
    {
      id: 'laws-3',
      title: 'III – As Leis Penais (O "Código de Sangue")',
      type: 'articles',
      articles: [
        { id: 'd-5', number: '§ 5', text: 'A pena para o furto de frutas ou vegetais é a morte. A pena para o sacrilégio ou roubo de templos é a morte.' },
        { id: 'd-6', number: '§ 6', text: 'Aqueles condenados por ociosidade (argia) ou que não puderem provar meios honestos de subsistência serão executados.' },
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
