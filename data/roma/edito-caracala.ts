import { HistoricalDocument } from '../types';

export const editoCaracala: HistoricalDocument = {
  id: 'edito-caracala',
  title: 'Édito de Caracala',
  subtitle: 'Cidadania Universal',
  date: '212 d.C.',
  era: 'Roma',
  language: 'Latim / Grego',
  description: 'O édito do imperador Caracala que estendeu a cidadania romana a todos os habitantes livres do Império, transformando radicalmente a noção de pertencimento jurídico ao mundo romano.',
  sections: [
    {
      id: 'context',
      title: 'Contexto Histórico',
      type: 'text',
      content: `Em 212 d.C., o Imperador Caracala emitiu um dos decretos mais famosos da antiguidade, estendendo a cidadania romana a todos os habitantes livres do Império.

A historiografia liberal tradicionalmente celebrou este ato como um triunfo do humanismo e da universalidade jurídica. Contudo, uma análise materialista revela as motivações econômicas subjacentes: o Estado romano enfrentava uma crise fiscal severa, pressionado pelos custos militares. Como apenas cidadãos romanos pagavam certos impostos (especialmente sobre heranças e alforrias), a "universalização da cidadania" foi, na prática, uma estratégia de universalização tributária.

A medida também eliminou as últimas distinções políticas locais, transformando todos os súditos em iguais perante o fisco e o Imperador, consolidando o poder absoluto.`
    },
    {
      id: 'text',
      title: 'O Texto do Édito (Papiro Gissen 40, I)',
      type: 'text',
      content: `Fonte: Reconstrução a partir de fragmentos de papiro encontrados no Egito e do relato de Dião Cássio.`
    },
    {
      id: 'decree',
      title: 'Constitutio Antoniniana',
      type: 'articles',
      articles: [
        {
          id: 'ca-1',
          number: 'Preâmbulo',
          text: 'O Imperador César Marco Aurélio Severo Antonino Augusto declara: [...] É meu desejo manifestar minha gratidão aos deuses imortais que me protegeram, trazendo todos os estrangeiros para o culto dos mesmos deuses...'
        },
        {
          id: 'ca-2',
          number: 'Decreto',
          text: 'Concedo, pois, a cidadania romana a todos os estrangeiros (peregrini) que habitam o mundo sob meu domínio. Ninguém deve permanecer fora da cidadania, exceto os dediticii (povos rendidos incondicionalmente). Que a grandiosidade do povo romano seja agora coextensiva com o próprio Império.'
        }
      ]
    },
    {
      id: 'glossary',
      title: 'Glossário Crítico',
      type: 'glossary',
      glossaryEntries: [
        { term: 'Peregrini', definition: 'Termo jurídico para os habitantes livres das províncias que não possuíam cidadania romana. Viviam sob suas próprias leis locais e pagavam tributos específicos. Com o édito, essa categoria jurídica praticamente desaparece.' },
        { term: 'Dediticii', definition: '"Os rendidos". A única categoria excluída da cidadania. Eram bárbaros derrotados ou ex-escravos que haviam sido punidos por crimes graves antes da libertação. Representavam a "vida nua", sem direitos, dentro do Império.' },
        { term: 'Fisco (Fiscus)', definition: 'Originalmente a "cesta" de dinheiro privada do Imperador, distinta do Tesouro Público (Aerarium) controlado pelo Senado. No Império, o Fisco engoliu o Tesouro, simbolizando a fusão entre o patrimônio público e o poder pessoal do autocrata.' },
      ]
    }
  ]
};
