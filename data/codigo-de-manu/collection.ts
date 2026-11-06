import { DocumentCollection } from '../../types';

export const codigoManu: DocumentCollection = {
  id: 'codigo-de-manu',
  title: 'Código de Manu',
  subtitle: 'Manava-Dharma-Shastra',
  date: 'c. 200 a.C. – 200 d.C.',
  era: 'Índia Antiga',
  language: 'Sânscrito',
  description: 'O mais importante texto jurídico da tradição hindu, atribuído ao lendário legislador Manu. Organizado em doze capítulos, regula os deveres das castas, os ritos religiosos, o direito de família, penal e político na sociedade indiana antiga.',
  sections: [
    {
      id: "nota-editorial",
      title: "Nota editorial e referências",
      content: "Natureza do acervo: versão portuguesa organizada em doze capítulos, acompanhada de glossário. A divisão por capítulos e versos permite localizar as passagens, mas não comprova, por si, a edição intermediária utilizada.\n\nReferência de consulta: BÜHLER, Georg (trad.). The Laws of Manu. Sacred Books of the East, v. 25. Oxford: Clarendon Press, 1886. Texto inglês disponível em: https://sacred-texts.com/hin/manu/. Consulta em: 6 nov. 2026.\n\nA referência é oferecida para comparação. Os registros disponíveis não permitem atribuir com segurança toda a versão portuguesa a essa edição nem apresentá-la como tradução direta do sânscrito. A revisão desta introdução não constitui cotejo integral dos versos."
    },
    {
      id: 'introducao',
      title: 'Introdução',
      content: "O chamado Código de Manu, ou Manusmriti, integra a tradição dos dharmaśāstras: textos nos quais conduta, posição social, ritual e autoridade são tratados de maneira articulada. A atribuição a Manu insere a obra em uma narrativa de transmissão do saber; não deve ser entendida como comprovação de autoria individual ou de promulgação estatal nos moldes de um código contemporâneo.\n\nSeus doze capítulos abrangem a criação do mundo, os deveres associados às posições sociais e às etapas da vida, as relações familiares, o exercício da autoridade régia, os conflitos e as expiações. A organização normativa pressupõe hierarquias de condição e gênero, cuja compreensão exige atenção ao contexto religioso e social em que o texto foi transmitido. O conteúdo prescritivo não constitui, por si só, prova de aplicação uniforme em todas as sociedades do subcontinente indiano.\n\nA formação e a datação do texto são objeto de debate. O intervalo aproximado apresentado na ficha serve como orientação cronológica, não como data exata de uma redação única. O estudo histórico da obra deve distinguir composição, transmissão manuscrita, comentários e traduções modernas.",
    },
  ],
  childDocumentIds: [
    'codigo-manu-capitulo-1',
    'codigo-manu-capitulo-2',
    'codigo-manu-capitulo-3',
    'codigo-manu-capitulo-4',
    'codigo-manu-capitulo-5',
    'codigo-manu-capitulo-6',
    'codigo-manu-capitulo-7',
    'codigo-manu-capitulo-8',
    'codigo-manu-capitulo-9',
    'codigo-manu-capitulo-10',
    'codigo-manu-capitulo-11',
    'codigo-manu-capitulo-12',
    'codigo-manu-glossario',
  ],
};
