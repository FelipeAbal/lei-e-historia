import { HistoricalDocument } from '../types';

export const solon: HistoricalDocument = {
  id: 'solon',
  title: 'Código de Sólon',
  subtitle: 'Reforma e Democracia',
  date: 'c. 594 a.C.',
  era: 'Grécia Antiga',
  language: 'Grego Ático',
  description: 'O conjunto de reformas legislativas promovidas por Sólon, arconte de Atenas. Aboliu a servidão por dívidas, reorganizou as classes sociais e lançou as bases para a democracia ateniense.',
  sections: [
    {
      id: 'context',
      title: 'Contexto Histórico',
      type: 'text',
      content: `No início do século VI a.C., Atenas enfrentava uma crise social e econômica devastadora. A terra estava concentrada nas mãos da aristocracia (Eupátridas), enquanto a massa de pequenos agricultores havia se endividado a tal ponto que muitos foram vendidos como escravos para pagar suas dívidas (a escravidão por dívida). A cidade estava à beira de uma guerra civil.

Em 594 a.C., Sólon, um nobre de sabedoria reconhecida e poeta, foi eleito arconte com poderes extraordinários de diallaktes (mediador). Sua missão era reformar o Estado e evitar a tirania. Diferente de Drácon, cujas leis anteriores eram famosas pela severidade (morte para quase todos os crimes), Sólon buscou a Eunomia (o bom governo), baseada no equilíbrio e na justiça proporcional. Suas reformas fundaram a democracia ateniense ao substituir o critério de nascimento (aristocracia) pelo de riqueza (timocracia) e ao libertar os cidadãos da servidão.`
    },
    {
      id: 'about',
      title: 'Sobre o Texto',
      type: 'text',
      content: `As leis originais de Sólon foram escritas em axones (grandes tábuas de madeira giratórias) e colocadas na Ágora para leitura pública. Com o tempo, essas tábuas apodreceram e se perderam. O texto apresentado abaixo é uma reconstrução moderna baseada nos relatos de historiadores e filósofos posteriores, principalmente Plutarco (século I d.C.) e Aristóteles (século IV a.C.), que ainda tinham acesso aos decretos originais ou a cópias fidedignas.`
    },
    {
      id: 'laws-1',
      title: 'I – A Seisachtheia (O Alívio dos Fardos)',
      type: 'articles',
      articles: [
        { id: 's-1', number: 'Lei 1', text: 'Fica proibido, de agora em diante, o empréstimo garantido pela própria pessoa do devedor. Ninguém poderá ser escravizado por não pagar suas dívidas. Esta medida libertou os hektemoroi (servos da gleba) e trouxe de volta atenienses vendidos ao estrangeiro.' },
        { id: 's-2', number: 'Lei 2', text: 'Todas as dívidas públicas e privadas existentes, contraídas sob garantia da terra ou da liberdade pessoal, são declaradas nulas e sem efeito. As pedras de hipoteca (horoi) devem ser arrancadas da terra, devolvendo-a aos seus donos originais.' },
      ]
    },
    {
      id: 'laws-2',
      title: 'II – Organização Constitucional (As Classes)',
      type: 'articles',
      articles: [
        { id: 's-3', number: 'Lei 3', text: 'Os direitos políticos e deveres militares serão atribuídos conforme a produção agrícola (riqueza), e não pelo nascimento: Pentacosiomedimnos, aqueles que produzem 500 medidas (medimnos) ou mais por ano, a eles cabem as magistraturas mais altas (Arcontado); Hippeis (Cavaleiros), aqueles que produzem 300 medidas ou podem manter um cavalo; Zeugitas, aqueles que produzem 200 medidas (possuidores de uma junta de bois), podem servir como hoplitas e ocupar cargos menores; Thetas, aqueles com produção inferior a 200 medidas, não podem ocupar magistraturas, mas têm o direito de participar da Assembleia (Ekklesia) e dos Tribunais (Heliaia).' },
      ]
    },
    {
      id: 'laws-3',
      title: 'III – Direito Penal e Civil',
      type: 'articles',
      articles: [
        { id: 's-4', number: 'Lei 4', text: 'Aquele que, durante uma revolta civil (stasis) na cidade, não pegar em armas para se juntar a um dos lados, será declarado atimos (privado de honra e direitos políticos) e não terá mais parte na pólis. O objetivo é forçar os cidadãos moderados a se envolverem na política, impedindo que extremistas tomem o poder sozinhos.' },
        { id: 's-5', number: 'Lei 5', text: 'Antes, não era permitido testar; os bens e a casa deviam permanecer na família (genos). Agora, se um homem não tiver filhos, tem permissão para deixar seus bens a quem quiser, desde que não o faça sob influência de insanidade, velhice, drogas ou sob a coação de uma mulher.' },
        { id: 's-6', number: 'Lei 6', text: 'Todo cidadão deve ensinar a seu filho um ofício. Se não o fizer, o filho não será obrigado a sustentar o pai na velhice. O Areópago deve inquirir de onde cada cidadão retira seu sustento e punir os ociosos.' },
        { id: 's-7', number: 'Lei 7', text: 'Se uma herdeira (epikleros) for casada com um homem que não é capaz de lhe dar filhos, ela tem o direito de ter relações com os parentes mais próximos do marido, a fim de garantir a sucessão da linhagem e da propriedade.' },
        { id: 's-8', number: 'Lei 8', text: 'Se um cão morder alguém, deve ser entregue acorrentado a um tronco de três côvados. Quem arrancar uma oliveira sagrada será julgado pelo Areópago.' },
        { id: 's-9', number: 'Lei 9', text: 'Fica proibido falar mal dos mortos. Fica proibido falar mal dos vivos nos templos, nos tribunais, nos edifícios oficiais e nos jogos; quem o fizer pagará três dracmas à pessoa ofendida e duas ao tesouro público.' },
      ]
    },
    {
      id: 'glossary',
      title: 'Glossário',
      type: 'glossary',
      glossaryEntries: [
        { term: 'Seisachtheia', definition: 'Literalmente "o sacudir dos fardos". Nome dado à reforma econômica de Sólon que cancelou as dívidas e removeu os marcos de hipoteca das terras atenienses.' },
        { term: 'Hektemoroi', definition: '"Os da sexta parte". Agricultores pobres que, antes de Sólon, cultivavam terras de ricos e deviam entregar 1/6 da produção. Se falhassem, eram escravizados.' },
        { term: 'Medimno', definition: 'Unidade de medida de volume para grãos (aprox. 50 litros). Sólon usou essa medida agrícola para classificar a sociedade, substituindo a nobreza de sangue pela riqueza produzida.' },
        { term: 'Atimia', definition: 'A "privação de honra". A morte cívica. Um cidadão atimos perdia seus direitos políticos, não podia votar, falar na assembleia ou aparecer em público, embora mantivesse sua vida e bens.' },
        { term: 'Eupátridas', definition: '"Os bem-nascidos". A aristocracia ateniense que detinha o poder exclusivo antes das reformas de Sólon.' },
        { term: 'Heliaia', definition: 'O tribunal popular instituído por Sólon, onde cidadãos de todas as classes (inclusive os mais pobres, Thetas) podiam atuar como jurados. Foi a base da justiça democrática.' },
      ]
    }
  ]
};
