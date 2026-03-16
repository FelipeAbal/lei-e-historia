import { HistoricalDocument } from '../../types';

export const leiSalicaCapitularIii: HistoricalDocument = {
  id: 'lei-salica-capitular-iii',
  title: 'Lei Sálica — Capitular III',
  subtitle: 'Títulos LXLIV a CV',
  date: 'c. 507–511',
  era: 'Idade Média',
  language: 'Latim',
  description: 'Terceiro capitular da Lei Sálica, cobrindo os Títulos LXLIV (XCIV) a CV. Trata de desrespeito à lei e agentes em confiança, remoção de homens da forca, corte de cabelo de crianças, mulher que se une a escravo, aliciadores, viúvas que se casam novamente, homens com segundas esposas, homicídio entre aldeias, penhores, ferimentos em mulheres e representação judicial.',
  parentCollectionId: 'lei-salica',
  sections: [
    {
      id: 'titulo-lxliv',
      title: 'LXLIV. SOBRE O DESPREZO PELA LEI (mitiofristatito)',
      type: 'text',
      content: `Se alguém presumir deter ou golpear alguém em confiança (trustem) enquanto ele está seguindo rastros, ele [que faz isto] será obrigado a pagar dois mil e quinhentos denários (isto é, sessenta e dois soldos e meio).`,
    },
    {
      id: 'titulo-lxlv',
      title: 'LXLV. SE ALGUÉM CORTAR UM HOMEM (abaterit) DA FORCA (furcos) SEM O CONSENTIMENTO DE SEU SENHOR OU DO JUIZ',
      type: 'text',
      content: `Se alguém sem o consentimento do juiz cortar um homem [morto] (abaterit) de uma forca ou presumir tirá-lo (reponere) do galho onde ele foi pendurado, ele será obrigado a pagar mil e duzentos denários (isto é, trinta soldos).`,
    },
    {
      id: 'titulo-lxlvi',
      title: 'LXLVI. SOBRE AQUELE QUE ROUBA UM HOMEM VIVO DA FORCA',
      type: 'text',
      content: `Se alguém presumir tirar ou levar embora um homem ainda vivo de uma forca (furca) (chamado morchamo na glosa de Malberg), ele será obrigado a pagar quatro mil denários (isto é, cem soldos).`,
    },
    {
      id: 'titulo-lxlvii',
      title: 'LXLVII. SOBRE AQUELE QUE PRESUME CORTAR O CABELO DA CRIANÇA DE OUTRO HOMEM',
      type: 'articles',
      articles: [
        {
          id: 'ls-lxlvii-1',
          number: '1',
          text: `Se alguém presumir cortar o cabelo de um menino sem o consentimento de seus parentes (chamado vidridarchi na glosa de Malberg), ele será obrigado a pagar mil e oitocentos denários (isto é, quarenta e cinco soldos).`,
        },
        {
          id: 'ls-lxlvii-2',
          number: '2',
          text: `Se um homem cortar o cabelo de uma menina sem o consentimento de seus parentes, ele será obrigado a pagar quatro mil denários (isto é, cem soldos).`,
        },
      ],
    },
    {
      id: 'titulo-lxlviii',
      title: 'LXLVIII. SOBRE A MULHER QUE SE UNE A SEU ESCRAVO',
      type: 'articles',
      articles: [
        {
          id: 'ls-lxlviii-1',
          number: '1',
          text: `Se uma mulher se unir em casamento com seu próprio escravo, o fisco adquirirá todas as suas possessões e ela mesma será proscrita (aspellis).`,
        },
        {
          id: 'ls-lxlviii-2',
          number: '2',
          text: `Se um de seus parentes a matar, nada poderá ser exigido daquele parente ou do fisco por sua morte. O escravo será colocado na mais severa tortura, isto é, ele será colocado na roda. E se um dos parentes da mulher lhe der comida ou abrigo, ele será obrigado a pagar quinze soldos.`,
        },
      ],
    },
    {
      id: 'titulo-lxlix',
      title: 'LXLIX. SOBRE ALICIADORES (conciliatmbus)',
      type: 'articles',
      articles: [
        {
          id: 'ls-lxlix-1',
          number: '1',
          text: `Se alguém agenciar o filho ou a filha de outro homem com o propósito de casá-lo ou casá-la sem o consentimento dos parentes, e se isto for provado contra ele e os parentes sofrerem perda (damnatifuerint) por isso, os aliciadores são de fato ladrões ou companheiros de ladrões e serão condenados à morte e o fisco adquirirá sua propriedade.`,
        },
        {
          id: 'ls-lxlix-2',
          number: '2',
          text: `Mas ladrões não sofrerão mais do que aquilo que foi escrito na lei acima.`,
        },
      ],
    },
    {
      id: 'titulo-c',
      title: 'C. SOBRE A VIÚVA QUE DESEJA IR PARA OUTRO MARIDO',
      type: 'articles',
      articles: [
        {
          id: 'ls-c-1',
          number: '1',
          text: `Se uma viúva após a morte de seu marido desejar ir para outro marido, primeiro aquele que deseja recebê-la deve dar uma multa de noivado (reipus) por ela de acordo com a lei. E se a mulher teve filhos com seu ex-marido, ela deve consultar os parentes de seus filhos. Se ela recebeu vinte e cinco soldos como um dote [de seu marido anterior], ela deve dar três soldos como uma taxa para liberação de seu mundium (achasium) aos parentes mais próximos do marido morto; e se o pai ou a mãe dele [o marido] não estiver vivo, o achasius é devido a um irmão do homem morto ou àquele sobrinho que é filho de seu irmão mais velho. E se não houver nenhum destes, então o juiz, isto é o comes ou conde (jjmfio), deve fazer inquérito a respeito dela e deve colocá-la na proteção do rei (verbum ngis mittat) e o fisco adquirirá o ackasius que deveria ter ido para os parentes do marido morto.`,
        },
        {
          id: 'ls-c-2',
          number: '2',
          text: `Se de fato ela recebeu sessenta e dois soldos e meio como um dote, que seis soldos sejam dados como o achasius, isto é, para cada dez soldos, um será dado como o achasius, e [o restante do] dote que o marido anterior lhe tinha dado será reivindicado e defendido por seus filhos, após a morte da mãe, sem nenhuma parte indo para ele [o segundo marido]. A mãe não pode presumir vender ou dar qualquer parte deste dote. Mas se a mulher não tem filhos com o marido anterior e deseja entrar em outro casamento com seu dote, ela deve dar o achasius, como dito acima. E depois que ela cubra um banco e prepare a cama com colcha; e com nove testemunhas que ela convoque os parentes do marido morto e diga: "Vocês são minhas testemunhas de que dei o achasius a fim de ter paz com os parentes dele [meu ex-marido], e eu deixo aqui a cama coberta e a digna colcha, o banco preparado e uma poltrona que trouxe comigo da casa de meu pai." Então ela pode dar a si mesma a outro marido com duas partes de seu dote.`,
        },
        {
          id: 'ls-c-3',
          number: '3',
          text: `Mas se ela não fizer isto, ela perde as duas partes de seu dote e além disso ela será obrigada a pagar sessenta e dois soldos e meio ao fisco.`,
        },
        {
          id: 'ls-c-4',
          number: '4',
          text: `A respeito de mulheres meio-livres (militunias vel litas), esta lei deve ser observada pela metade.`,
        },
      ],
    },
    {
      id: 'titulo-ci',
      title: 'CI. SOBRE HOMENS QUE TOMAM SEGUNDAS OU OUTRAS ESPOSAS',
      type: 'articles',
      articles: [
        {
          id: 'ls-ci-1',
          number: '1',
          text: `Se alguém perdeu sua esposa e deseja ter outra, ele não pode dar à segunda esposa o dote que ele tinha dado à primeira esposa. Mas se os filhos dela [a ex-esposa] ainda são pequenos, ele pode tomar decisões cuidadosamente a respeito da propriedade ou dote de sua ex-esposa até que eles [os filhos] atinjam a maioridade; mas mesmo assim, ele não deve presumir vender ou dar qualquer parte desta propriedade.`,
        },
        {
          id: 'ls-ci-2',
          number: '2',
          text: `Se de fato ele não tem filhos com a ex-esposa, os parentes mais próximos da mulher morta recuperarão duas partes do dote e deixarão duas camas, dois bancos cobertos e duas poltronas. Se eles não fizerem isto, eles poderão recuperar apenas um terço do dote; não obstante [será feito assim] se eles não tiverem chegado a um acordo antecipadamente a respeito da transferência (per adfatimus) [do dote].`,
        },
      ],
    },
    {
      id: 'titulo-cii',
      title: 'CII. SOBRE UM HOMEM MORTO ENTRE DUAS ALDEIAS (villas)',
      type: 'articles',
      articles: [
        {
          id: 'ls-cii-1',
          number: '1',
          text: `Se um homem é morto perto de uma aldeia (villa) ou entre duas aldeias vizinhas próximas — em um lugar onde o homicídio não foi observado — o juiz, isto é o comes ou grafio, deve ir ao lugar e tocar sua trombeta lá. Se alguém vem que identifica o corpo, que isto seja levado ao conhecimento dos parentes. Mas se ninguém vem que identifica o corpo, então aqueles vizinhos em cujo campo ou em cuja fronteira o corpo foi encontrado devem fazer uma plataforma (bargo) de cinco pés de altura e erguer o corpo sobre ela na presença do juiz. E o juiz deve anunciar e declarar: "Este homem foi morto em seu campo ou em sua linha de fronteira (vestibulum); eu os chamo como testemunhas de que ele não deve ser removido por sete dias, e eu os convoco à corte a respeito deste homicídio — vocês devem vir à próxima corte e lhes será dito o que devem legalmente fazer."`,
        },
        {
          id: 'ls-cii-2',
          number: '2',
          text: `Então aqueles vizinhos a quem este anúncio foi feito pelo juiz, se eles são da classe melhor (meliores), se absolverão (exuent) com sessenta e cinco co-juradores dentro de quarenta dias [oferecendo juramento] de que nem o tinham matado nem sabem quem o matou. Vizinhos que são pessoas menores (minoflidis) devem cada um apresentar quinze co-juradores que oferecerão juramento como afirmado acima. Se eles não fizerem isto dentro de quarenta dias, eles devem fazer satisfação pela pessoa morta como a lei exige.`,
        },
        {
          id: 'ls-cii-3',
          number: '3',
          text: `Se de fato eles oferecerem juramento como afirmado acima e se absolverem (idoniaverint) por meio de tal juramento, nenhuma composição deverá ser exigida deles.`,
        },
      ],
    },
    {
      id: 'titulo-ciii',
      title: 'CIII. SOBRE PENHORES (pignoribus)',
      type: 'text',
      content: `Se alguém por ignorância tomar um penhor (pignoraverit) de seu devedor sem um julgamento antes que o tenha chamado à corte (eum nestigan the thigio), ele perderá sua dívida; e, além disso, se ele tiver tomado o penhor com má intenção, ele fará composição de acordo com a lei, isto é, ele deve devolver o valor total [do penhor] e além disso ser obrigado a pagar quinze soldos.`,
    },
    {
      id: 'titulo-civ',
      title: 'CIV. SOBRE A MULHER QUE TEM SEU CABELO CORTADO OU PUXADO',
      type: 'articles',
      articles: [
        {
          id: 'ls-civ-1',
          number: '1',
          text: `Se alguém puxar o cabelo de uma mulher para que seu capuz (obbonis) caia no chão, ele será obrigado a pagar quinze soldos.`,
        },
        {
          id: 'ls-civ-2',
          number: '2',
          text: `Mas se ele desizer sua faixa de cabeça para que seu cabelo caia até seus ombros, ele será obrigado a pagar trinta soldos.`,
        },
        {
          id: 'ls-civ-3',
          number: '3',
          text: `Se um escravo golpear uma mulher livre ou puxar seu cabelo, ele perderá sua mão ou pagará cinco soldos.`,
        },
        {
          id: 'ls-civ-4',
          number: '4',
          text: `Aquele que golpear uma mulher livre grávida no estômago ou no rim com o punho ou o pé, e ela não perder seu feto mas for pesada quase até a morte por causa disto, será obrigado a pagar duzentos soldos.`,
        },
        {
          id: 'ls-civ-5',
          number: '5',
          text: `Se o feto emergir morto mas ela mesma viver, ele [que a golpeou] será obrigado a pagar seiscentos soldos.`,
        },
        {
          id: 'ls-civ-6',
          number: '6',
          text: `Mas se a mulher morrer por causa disto, ele será obrigado a pagar novecentos soldos.`,
        },
        {
          id: 'ls-civ-7',
          number: '7',
          text: `Se a mulher que morreu tinha sido colocada sob a proteção do rei por qualquer razão, ele [que a golpeou] será obrigado a pagar mil e duzentos soldos.`,
        },
        {
          id: 'ls-civ-8',
          number: '8',
          text: `Se a criança que foi abortada era uma menina, ele pagará dois mil e quatrocentos soldos.`,
        },
        {
          id: 'ls-civ-9',
          number: '9',
          text: `No caso de mulheres meio-livres (militunias vel letas) ou mulheres romanas, metade destas quantias deve ser observada.`,
        },
        {
          id: 'ls-civ-10',
          number: '10',
          text: `Se um homem golpear uma escrava e seu feto for morto, se era uma menininha, ele deve pagar sessenta e dois soldos e meio e um denário como composição.`,
        },
        {
          id: 'ls-civ-11',
          number: '11',
          text: `Se a escrava mantinha a despensa ou oficina de seu senhor (cellarium aut genitium), ele deve pagar cem soldos e um denário como composição por ela.`,
        },
      ],
    },
    {
      id: 'titulo-cv',
      title: 'CV. SOBRE AQUELE QUE PRESUME FALAR NA CAUSA DE OUTRO',
      type: 'articles',
      articles: [
        {
          id: 'ls-cv-1',
          number: '1',
          text: `Se alguém [presumir falar na causa de outro] e isto não foi pedido a ele nem ele foi adotado tendo um graveto jogado em seu colo (laesverpita fiterit) e ele não puder justificar a si mesmo, ele será obrigado a pagar quinze soldos.`,
        },
        {
          id: 'ls-cv-2',
          number: '2',
          text: `Depois disso, o homem de quem é a causa pode levar sua ação à corte de acordo com as leis.`,
        },
      ],
    },
  ],
};
