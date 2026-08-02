import { HistoricalDocument } from '../../types';

const codigoVisigotico: HistoricalDocument = {
  id: "codigo-visigotico-livro-1",
  title: "Código Visigótico",
  subtitle: "Livro I — Acerca das Agências Jurídicas",
  date: "c. 654 d.C.",
  description: "O Liber Iudiciorum, ou Código Visigótico, é a grande codificação jurídica do Reino Visigótico de Toledo. Promulgado sob o rei Recesvinto, unificou o direito para godos e hispano-romanos, sintetizando tradição romana e costumes germânicos.",
  era: "Idade Média",
  language: "Latim",
  parentCollectionId: "codigo-visigotico",
  sections: [
    {
      type: 'text' as const,
      title: "Introdução",
      content: "O *Liber Iudiciorum* — também conhecido como *Forum Judicum* ou Código Visigótico — foi promulgado pelo rei visigótico Recesvinto por volta de 654 d.C. e representa o mais sofisticado produto legislativo dos reinos germânicos do Ocidente medieval. Ao contrário de códigos anteriores, como o Breviário de Alarico (506), que mantinha separação entre direito romano e visigótico, o *Liber Iudiciorum* estabeleceu uma lei territorial única, aplicável a todos os habitantes do reino — godos e hispano-romanos —, refletindo o avanço do processo de fusão entre as duas populações.\n\nO Livro I, aqui traduzido, ocupa posição singular na obra: em vez de dispositivos processuais ou penais, apresenta uma teoria do direito e do legislador. Os Títulos I e II funcionam como uma espécie de prólogo filosófico ao restante do código, estabelecendo os princípios que devem orientar tanto quem faz as leis quanto a natureza da lei em si. A influência do pensamento jurídico romano tardio e da filosofia cristã visigótica é evidente, especialmente na célebre definição do Título II ('A lei é a rival da divindade...').\n\nA tradução segue a versão inglesa de S. P. Scott, publicada em Boston em 1910 (*The Visigothic Code*, The Boston Book Company), disponível no Project Gutenberg (eBook #72551). O texto latino de referência é o estabelecido por Karl Zeumer nos *Monumenta Germaniae Historica* (1902)."
    },
    {
      type: 'articles' as const,
      title: "Título I — O Legislador",
      articles: [
        {
          number: "I",
          text: "**Qual deve ser o método de fazer as leis.**\n\nNós, a quem cabe o dever de prestar assistência adequada na formação das leis, devemos, na execução deste empreendimento, aperfeiçoar os métodos dos antigos, revelando tanto a excelência da lei a ser formulada quanto a habilidade de seu artífice. A prova desta arte será tanto mais evidente se parecer extrair suas conclusões não de inferências e imitações, mas da verdade. Nem deve imprimir a força do argumento com a sutileza do silogismo, mas deve, com moderação e pelo uso de preceitos puros e honrosos, determinar as disposições da lei. E, de fato, a razão exige claramente que o trabalho seja realizado desta maneira. Pois, quando o mestre tem em mãos o produto acabado, em vão se busca a razão para que ele tenha sido marcado com aquela forma particular. Em temas obscuros, a razão busca ansiosamente ser informada pelo exame; em matérias, contudo, que são bem conhecidas e estabelecidas, apenas a ação é requerida. Portanto, quando a questão em pauta não está clara por sua forma ser desconhecida, a investigação é desejável; mas ocorre o contrário em assuntos conhecidos por todos os homens, onde não a especulação, mas a execução, torna-se essencial. Como estamos mais preocupados com a moral do que com a eloquência, não é nossa competência introduzir a personalidade do orador, mas definir os direitos do governante (*governor*)."
        },
        {
          number: "II",
          text: "**Como o legislador deve agir.**\n\nO criador das leis não deve praticar a disputa, mas administrar a justiça. Nem é apropriado que ele pareça ter formulado a lei por contenção, mas de maneira ordeira. Pois a transação dos assuntos públicos não exige, como recompensa de seus labores, o clamor do aplauso teatral, mas a lei destinada à salvação do povo."
        },
        {
          number: "III",
          text: "**O que deve ser exigido do legislador.**\n\nPrimeiro, deve-se exigir que ele faça uma investigação diligente quanto à solidez de suas opiniões. Depois, deve ser evidente que ele agiu não para ganho privado, mas para o benefício do povo; de modo que possa aparecer conclusivamente que a lei não foi feita para qualquer vantagem particular ou pessoal, mas para a proteção e proveito de todo o corpo de cidadãos."
        },
        {
          number: "IV",
          text: "**Qual deve ser a conduta do legislador em sua vida diária.**\n\nO formulador das leis e o distribuidor da justiça deve preferir a moral à eloquência, para que sua fala seja caracterizada antes por sentimentos virtuosos do que por elegância de expressão. Ele deve ser mais eminente por atos do que por palavras; e deve desincumbir-se de seus deveres antes com prontidão do que com relutância, e não, por assim dizer, sob compulsão."
        },
        {
          number: "V",
          text: "**Como o legislador deve prestar aconselhamento.**\n\nEle deve estar atento ao seu dever apenas para com Deus e para consigo mesmo; ser liberal em conselhos para pessoas de alto e baixo escalão, e de fácil acesso aos cidadãos e ao povo comum; para que, como guardião da segurança pública, exercendo o governo pelo consentimento universal, não abuse, por motivos pessoais, dos privilégios de seu ofício judicial."
        },
        {
          number: "VI",
          text: "**Que modo de fala o legislador deve usar.**\n\nEle deve ser enérgico e claro na fala; firme na opinião; pronto ao ponderar as evidências; de modo que tudo o que proceda da fonte da lei possa imediatamente impressionar todos os ouvintes de que não é caracterizado nem pela dúvida nem pela perplexidade."
        },
        {
          number: "VII",
          text: "**Como o legislador deve agir ao proferir um julgamento.**\n\nO Juiz (*Judge*) deve ser rápido na percepção; firme no propósito; claro no julgamento; leniente na imposição de penalidades; assíduo na prática da misericórdia; expedito na vindicação do inocente; clemente em seu tratamento aos criminosos; cuidadoso com os direitos do estrangeiro (*stranger*); gentil para com seus compatriotas. Ele não deve fazer acepção de pessoas e deve evitar toda aparência de parcialidade."
        },
        {
          number: "VIII",
          text: "**Como o legislador deve comportar-se em assuntos públicos e privados.**\n\nDe todos os assuntos públicos ele deve se aproximar com patriotismo e reverência; aqueles concernentes a indivíduos particulares e controvérsias domésticas ele deve determinar de acordo com sua autoridade e poder; de modo que a comunidade possa olhá-lo como um pai, e as ordens inferiores do povo possam considerá-lo como um mestre e um senhor (*lord*).\n\nEle deve ser assíduo no desempenho de seus deveres para que possa ser temido pela coletividade a tal ponto que ninguém hesite em obedecê-lo; e ser tão justo que todos voluntariamente sacrificariam suas vidas em seu serviço, por sua afeição à sua pessoa e ao seu cargo."
        },
        {
          number: "IX",
          text: "**Que instrução é apropriado que o legislador forneça.**\n\nTambém, ele deve ter em mente que a glória e a majestade do povo consistem na interpretação adequada das leis e na maneira de sua administração. Pois, como toda a segurança do público depende da preservação da lei, ele deve tentar emendar os estatutos do país antes que os costumes da população; e lembrar que existem alguns que, em controvérsias, aplicam as leis de acordo com sua vontade e em busca de vantagem privada, a tal ponto que o que deveria ser lei para o público é para eles desonra privada; de modo que, pela perversão da lei, atos ilegais são frequentemente perpetrados, os quais deveriam obviamente ser abolidos através do poder da própria lei."
        }
      ]
    },
    {
      type: 'articles' as const,
      title: "Título II — A Lei",
      articles: [
        {
          number: "I",
          text: "**O que o legislador deve observar ao formular as leis.**\n\nEm toda legislação, a lei deve ser plena e explicitamente estabelecida, para que a perfeição, e não a parcialidade, seja assegurada. Pois, na formação das leis, não os sofismas do argumento, mas a virtude da justiça deve sempre prevalecer. E aqui se exige não o que pode ser instigado pela controvérsia, mas o que a energia e o vigor demandam; pois a violação da moral não deve ser coagida pelas formas da fala, mas restringida pela moderação da virtude."
        },
        {
          number: "II",
          text: "**O que é a lei.**\n\nA lei é a rival da divindade; o oráculo da religião; a fonte da instrução; o artífice do direito; a guardiã e promotora dos bons costumes; o leme do Estado; a mensageira da justiça; a mestra da vida; a alma do corpo político."
        },
        {
          number: "III",
          text: "**O que a lei faz.**\n\nA lei governa cada ordem do Estado e cada condição do homem; governa esposas e maridos; juventude e velhice; o instruído e o ignorante; o polido e o rude. Ela visa proporcionar o mais alto grau de segurança tanto para o príncipe quanto para o povo e, em renome e excelência, é tão conspícua quanto o sol do meio-dia."
        },
        {
          number: "IV",
          text: "**Como a lei deve ser.**\n\nA lei deve ser clara e não induzir qualquer cidadão a cometer erro ou fraude. Deve ser adequada ao lugar e ao tempo, de acordo com o caráter e o costume do Estado; prescrevendo justiça e equidade; consistente, honrosa, digna, útil e necessária; e deve-se notar cuidadosamente se suas disposições foram formuladas antes para a conveniência do que para o prejuízo do público; para que se possa determinar se ela provê suficientemente para a administração da justiça; se parece ou não ser contrária à religião, e se defende o direito e pode ser observada sem detrimento de ninguém."
        },
        {
          number: "V",
          text: "**Por que a lei é feita.**\n\nAs leis são feitas por estas razões: para que a maldade humana possa ser contida pelo medo de sua execução; para que as vidas de homens inocentes possam estar seguras entre criminosos; e para que a tentação de cometer o erro possa ser refreada pelo medo da punição."
        },
        {
          number: "VI",
          text: "**Como a lei deve triunfar sobre os inimigos.**\n\nUma vez estabelecida a paz doméstica e tendo sido a praga da discórdia inteiramente removida do príncipe, do cidadão e da população, expedições podem então ser feitas com segurança contra o inimigo, e ele pode ser atacado com confiança e vigor, na esperança certa da vitória; quando nada deve ser antecipado ou temido de dissensões em casa. Todo o corpo do povo estando próspero e seguro, através da influência da paz e da ordem, eles podem avançar audaciosamente contra o inimigo e tornar-se invencíveis, onde as artes salutares são auxiliadas por leis justas. Pois os homens estão melhor armados com a equidade do que com armas; e o príncipe deve antes empregar a justiça contra um inimigo do que o soldado o seu dardo; e o sucesso do príncipe será mais conspícuo quando uma reputação de justiça o acompanhar, e soldados que são bem governados em casa serão muito mais formidáveis para um adversário. É uma questão de experiência comum que a justiça, que protegeu o cidadão, esmaga o inimigo; e que prevalecem em contendas estrangeiras aqueles que desfrutam de paz doméstica; e enquanto a moderação do príncipe assegura a temperança na aplicação da lei, assim o apoio unido dos cidadãos promove a vitória sobre o inimigo. Pois a administração da lei é regulada pela disposição e caráter do rei; da administração da lei procede a instituição da moral; da instituição da moral, a concórdia dos cidadãos; da concórdia dos cidadãos, o triunfo sobre o inimigo. Assim, um bom príncipe, governando bem o seu reino e fazendo conquistas estrangeiras, mantendo a paz em casa e esmagando seus adversários externos, é afamado tanto como governante de seu Estado quanto como vencedor de seus inimigos, e terá para o futuro renome eterno; após a riqueza terrestre, um reino celestial; após o diadema e a púrpura, uma coroa de glória; nem deixará ele então de ser rei; pois quando renunciou ao seu reino terreno e conquistou um celestial, ele não diminuiu, mas antes aumentou a sua glória."
        }
      ]
    }
  ]
};

export default codigoVisigotico;
