import { HistoricalDocument } from '../types';

export const conflitoOrdens: HistoricalDocument = {
  id: 'conflito-ordens',
  title: 'Leis do Conflito das Ordens',
  subtitle: 'Patrícios contra Plebeus',
  date: 'c. 494–287 a.C.',
  era: 'Roma',
  language: 'Latim',
  description: 'O conjunto de leis que emergiram do longo conflito entre patrícios e plebeus na República Romana, ampliando progressivamente os direitos políticos e civis da plebe.',
  sections: [
    {
      id: 'sources',
      title: 'Nota sobre as Fontes',
      type: 'text',
      content: `Diferente da Lei das XII Tábuas, cujos fragmentos literais foram preservados por gramáticos e juristas posteriores, o texto original das leis abaixo não sobreviveu. Não dispomos das tábuas de bronze ou pedra onde foram gravadas.

O conteúdo a seguir é uma reconstrução histórica baseada nas narrativas de historiadores romanos (principalmente Tito Lívio) e nos comentários de juristas clássicos (como Gaius e Aulo Gélio). Portanto, a fraseologia apresentada busca emular o espírito da norma, mas o conteúdo é extraído de relatos indiretos.`
    },
    {
      id: 'context',
      title: 'Contexto Histórico',
      type: 'text',
      content: `Entre os séculos V e III a.C., Roma viveu o "Conflito das Ordens". A plebe, embora essencial para o exército e a economia, era excluída do poder político e oprimida por dívidas. Estas três leis marcam as vitórias institucionais da plebe contra o patriciado.

Note-se, porém, que essas vitórias beneficiaram principalmente a elite plebeia rica, criando uma nova aristocracia mista (nobilitas), enquanto a massa pobre continuou sem terras.`
    },
    {
      id: 'lex-canuleia',
      title: 'Lex Canuleia (445 a.C.)',
      type: 'articles',
      articles: [
        {
          id: 'can-1',
          number: 'Artigo Único',
          text: 'Sobre o Casamento Misto — Fica revogada a disposição da Lei das XII Tábuas que proibia o casamento (conubium) entre patrícios e plebeus. Doravante, é lícito que homens e mulheres de ambas as ordens contraiam matrimônio legítimo, e que os filhos sigam a condição do pai.'
        }
      ]
    },
    {
      id: 'leges-liciniae-sextiae',
      title: 'Leges Liciniae Sextiae (367 a.C.)',
      type: 'articles',
      articles: [
        {
          id: 'lic-1',
          number: 'Rogatio I',
          text: 'Sobre as Dívidas — Qualquer valor que tenha sido pago a título de juros (usura) deve ser deduzido do montante principal da dívida. O saldo restante deverá ser pago em três parcelas anuais iguais.'
        },
        {
          id: 'lic-2',
          number: 'Rogatio II',
          text: 'Sobre a Terra Pública (Modus Agrorum) — Nenhum cidadão poderá possuir mais de 500 iugera (aprox. 125 hectares) de terras públicas (ager publicus), nem apascentar nessas terras mais de 100 cabeças de gado maior ou 500 de gado menor.'
        },
        {
          id: 'lic-3',
          number: 'Rogatio III',
          text: 'Sobre o Consulado — Fica abolido o cargo de Tribuno Militar com Poder Consular. Restaura-se o Consulado, sendo obrigatório que, dos dois cônsules eleitos anualmente, pelo menos um seja plebeu.'
        }
      ]
    },
    {
      id: 'lex-hortensia',
      title: 'Lex Hortensia (287 a.C.)',
      type: 'articles',
      articles: [
        {
          id: 'hor-1',
          number: 'Artigo Único',
          text: 'A Força de Lei dos Plebiscitos — O que a plebe ordenar em suas assembleias (concilium plebis) terá força de lei e vinculará todo o povo romano (populus), incluindo os patrícios, independentemente da aprovação do Senado (auctoritas patrum).'
        }
      ]
    },
    {
      id: 'glossary',
      title: 'Glossário',
      type: 'glossary',
      glossaryEntries: [
        { term: 'Conubium', definition: 'O direito legal de casar. Sem ele, um filho de pai patrício e mãe plebeia seria ilegítimo e não herdaria a cidadania ou bens do pai.' },
        { term: 'Ager Publicus', definition: 'Terras conquistadas por Roma em guerras. Na prática, eram ocupadas ilegalmente pelos grandes latifundiários patrícios. A lei de 367 a.C. tentou limitar essa apropriação, sem muito sucesso a longo prazo.' },
        { term: 'Plebiscito', definition: 'Literalmente "decreto da plebe". Antes da Lex Hortensia, só valia para os plebeus. Depois dela, tornou-se Lei de Estado, vinculando todo o povo romano.' },
        { term: 'Rogatio', definition: 'A proposta de lei apresentada pelo magistrado ao povo para votação nas assembleias.' },
        { term: 'Nobilitas', definition: 'A nova aristocracia governante que se consolidou em Roma após as Leis Licínias-Sêxtias (367 a.C.). Diferente do antigo patriciado, baseado exclusivamente no sangue, a nobilitas era formada pela aliança entre as velhas famílias patrícias e a elite plebeia enriquecida que conquistou o acesso ao Consulado. Essa classe passou a dominar o Senado e a barrar a ascensão dos plebeus pobres.' },
      ]
    }
  ]
};
