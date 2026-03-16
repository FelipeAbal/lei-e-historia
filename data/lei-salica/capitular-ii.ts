import { HistoricalDocument } from '../../types';

export const leiSalicaCapitularIi: HistoricalDocument = {
  id: 'lei-salica-capitular-ii',
  title: 'Lei Sálica — Capitular II',
  subtitle: 'O Pacto de Childeberto e Clotário — Títulos LXXIX a LXXXIII',
  date: 'c. 507–511',
  era: 'Idade Média',
  language: 'Latim',
  description: 'Segundo capitular da Lei Sálica, contendo o decreto dos reis Childeberto e Clotário para manter a paz. Compreende os Títulos LXXIX a LXXXIII, tratando de acusações de roubo contra homens livres, roubos ocultos, ordálio pelo fogo, ordálio por sorte para escravos e manutenção ilegal de servos.',
  parentCollectionId: 'lei-salica',
  sections: [
    {
      id: 'decreto-intro',
      title: 'O Pacto Emitido pelos Reis Childeberto e Clotário para Manter a Paz — O Decreto do Rei Childeberto',
      type: 'text',
      content: `Porque a loucura de muitos aumenta e o pavor do mal cresce, é necessário [emitir este edito] para que a boa ordem possa ser restabelecida. Portanto, na presença de nós mesmos e das pessoas maiores (maiores) do palácio Franco, é decretado que quem quer que após este decreto [ser emitido] for provado ser um ladrão perderá sua vida.`,
    },
    {
      id: 'titulo-lxxix',
      title: 'LXXIX. SE UM HOMEM LIVRE É ACUSADO DE ROUBO',
      type: 'text',
      content: `Se alguém acusa um homem livre de roubo e aquele o nega, que a verdade seja provada através de doze co-juradores (iumtores), metade escolhida por aquele que foi acusado do roubo; e [se a acusação for provada contra ele] que ele faça emenda pelo roubo se tiver os meios. E se ele não tiver os meios [para fazer emenda por seu crime], que ele seja apresentado aos seus parentes em três cortes e se eles não o resgatarem, ele pagará com sua vida.`,
    },
    {
      id: 'titulo-lxxx',
      title: 'LXXX. SOBRE UM ROUBO OCULTO',
      type: 'text',
      content: `Se alguém tenta ocultar um roubo e secretamente paga composição sem [o julgamento de] um juiz, tanto aquele que fez [a composição] quanto aquele que a recebeu são ladrões.`,
    },
    {
      id: 'titulo-lxxxi',
      title: 'LXXXI. SOBRE O HOMEM CUJA MÃO É QUEIMADA NO ORDÁLIO (isto é, O HOMEM PROVADO CULPADO PELO ORDÁLIO)',
      type: 'text',
      content: `Se um homem livre é acusado de roubo e tendo sido acusado queima sua mão no ordálio [isto é, ele é provado culpado pelo ordálio], que ele faça composição pelo roubo pelo qual foi acusado.`,
    },
    {
      id: 'titulo-lxxxii',
      title: 'LXXXII. QUE OS ESCRAVOS SEJAM ENVIADOS AO ORDÁLIO POR SORTE (ad sortem)',
      type: 'articles',
      articles: [
        {
          id: 'ls-lxxxii-1',
          number: '1',
          text: `Se um escravo é acusado de roubo, que seu senhor seja obrigado a apresentá-lo na corte em vinte dias, e se a questão for duvidosa que ele [o escravo] seja enviado ao ordálio por sorte. Mas se ele demorar a apresentar-se na corte (detricaverit) com escusas legítimas (sunnis), que outra corte seja realizada em vinte dias e que o acusador da causa ofereça três [testemunhas] similares a si mesmo e três outras [testemunhas] selecionadas que oferecerão juramento perante a corte de que tudo foi feito o que a lei Sálica prescreve. E se o senhor do escravo não apresentar seu escravo, ele [o senhor] fará composição de acordo com a lei pelo crime do qual ele [o escravo] foi acusado e assim porá um fim a este caso relativo ao seu escravo (de servo cessionem faciat).`,
        },
        {
          id: 'ls-lxxxii-2',
          number: '2',
          text: `Se o escravo tiver roubado (involaverit) menos que um triens e escolher a má sorte (mala sorte) [isto é, falhar no ordálio], o senhor do escravo pagará 3 soldos e o escravo receberá trezentas chibatadas.`,
        },
      ],
    },
    {
      id: 'titulo-lxxxiii',
      title: 'LXXXIII. SOBRE AQUELE QUE MANTÉM OS SERVOS (mancipia) DE OUTRO HOMEM ILEGALMENTE',
      type: 'articles',
      articles: [
        {
          id: 'ls-lxxxiii-1',
          number: '1',
          text: `Se alguém ilegalmente mantém os servos (mancipia) de outro homem e não os devolve dentro de quarenta dias, ele será culpado de roubar os servos.`,
        },
        {
          id: 'ls-lxxxiii-2',
          number: '2',
          text: `Se um homem meio-livre (ledus) é acusado de algo pelo qual ele é enviado ao ordálio por sorte (ad sortem ambulaverit) e escolhe a má sorte [isto é, falha no ordálio], que ele pague a composição de metade da quantia de um homem livre e dê seis co-juradores, metade dos quais foram selecionados por ele mesmo.`,
        },
      ],
    },
  ],
};
