import { HistoricalDocument } from '../types';

export const editoCaracala: HistoricalDocument = {
  id: 'edito-caracala',
  title: 'Édito de Caracala',
  subtitle: 'Cidadania Romana e Poder Imperial',
  date: '212 d.C.',
  era: 'Roma',
  language: 'Grego (testemunho preservado em papiro)',
  description: 'O édito do imperador Caracala que estendeu a cidadania romana à maior parte dos habitantes livres do Império, transformando radicalmente a noção de pertencimento jurídico ao mundo romano.',
  sections: [
    {
      id: 'context',
      title: 'Contexto Histórico',
      type: 'text',
      content: "Em 212 d.C., Caracala ampliou a cidadania romana à população livre do Império. A medida alterou o estatuto jurídico de uma parcela expressiva dos habitantes provinciais, mas não suprimiu as hierarquias sociais nem equivaleu à igualdade política no sentido contemporâneo.\n\nA extensão da cidadania também pode ser examinada em suas relações com a tributação e o poder imperial. Dião Cássio associa a concessão à ampliação da incidência dos tributos sobre heranças e alforrias (História Romana, livro 78 [77 em outra numeração], 9.4–5). Trata-se de um testemunho antigo sobre as motivações do imperador, que deve ser distinguido da redação do édito. A interpretação fiscal não esgota, por si só, os sentidos políticos e religiosos da medida."
    },
    {
      id: 'text',
      title: 'Sobre o testemunho preservado (Papiro de Giessen 40, I)',
      type: 'text',
      content: "O Papiro de Giessen 40, coluna I, conserva um testemunho grego fragmentário da Constitutio Antoniniana. As lacunas impedem apresentar uma redação contínua como se estivesse integralmente preservada. A exposição abaixo é uma síntese editorial em português, não uma tradução literal do papiro; os rótulos dos dois itens são modernos.\n\nReferência para consulta: UNIVERSIDADE DE GIESSEN. The Text of the Edict. Apresenta a reconstrução de Peter Kuhlmann e distingue texto, tradução e interpretação. Disponível em: https://www.constitutio.de/en/constitutio-antoniniana/the-text-of-the-edict. Consulta em: 6 nov. 2026. A síntese considera as passagens de agradecimento aos deuses e de concessão de cidadania; a cláusula relativa aos dediticii e a preservação dos direitos locais exigem atenção às reconstruções propostas."
    },
    {
      id: 'decree',
      title: 'Síntese do conteúdo da Constitutio Antoniniana',
      type: 'articles',
      articles: [
        {
          id: 'ca-1',
          number: 'Agradecimento aos deuses — síntese',
          text: 'A abertura relaciona a manifestação do imperador ao agradecimento aos deuses por sua proteção. O estado do papiro não permite restituir com segurança todas as circunstâncias mencionadas.'
        },
        {
          id: 'ca-2',
          number: 'Concessão de cidadania — síntese',
          text: 'O núcleo da medida é a extensão da cidadania romana aos habitantes livres do Império. As cláusulas que delimitam seu alcance devem ser lidas à luz das lacunas do documento e do debate sobre sua reconstrução.'
        }
      ]
    },
    {
      id: 'glossary',
      title: 'Glossário Crítico',
      type: 'glossary',
      glossaryEntries: [
        { term: 'Peregrini', definition: 'Habitantes livres do Império sem cidadania romana. A concessão de 212 d.C. ampliou a cidadania para essa população, sem abolir todas as diferenças de condição jurídica ou as identidades locais.' },
        { term: 'Dediticii', definition: "Categoria cuja identificação no contexto do édito é controversa. A extensão da exceção associada a esse termo depende da leitura e da reconstrução do papiro; não deve ser reduzida, sem ressalvas, a uma definição única de povos rendidos ou libertos." },
        { term: 'Fisco (Fiscus)', definition: "Designação de recursos e instâncias da administração financeira imperial. A relação entre fiscus e aerarium variou ao longo do período imperial; a distinção não corresponde diretamente à separação contemporânea entre patrimônio privado e público." },
      ]
    }
  ]
};
