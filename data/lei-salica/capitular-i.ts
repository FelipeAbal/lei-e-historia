import { HistoricalDocument } from '../../types';

export const leiSalicaCapitularI: HistoricalDocument = {
  id: 'lei-salica-capitular-i',
  title: 'Lei Sálica — Capitular I',
  subtitle: 'Títulos LXVI a LXXVIII',
  date: 'c. 507–511',
  era: 'Idade Média',
  language: 'Latim',
  description: 'Primeiro capitular da Lei Sálica, acrescido durante o reinado de Clóvis I. Compreende os Títulos LXVI a LXXVIII, tratando de propriedade alodial, presentes e herança, composição por homicídio, cremação, castração, violência em grupo, procedimentos judiciais para antrustiões, destruição de casas, remoção da forca, atrasos legais e lançamento em poço.',
  parentCollectionId: 'lei-salica',
  sections: [
    {
      id: 'titulo-lxvi',
      title: 'LXVI. SOBRE PROPRIEDADE FAMILIAR MANTIDA EM POSSE ALODIAL (de rebus in alode patris)',
      type: 'text',
      content: `Se alguém sequestra [isto é, tem a terra colocada na mão de uma terceira parte] a propriedade de outro homem mantida como terra alodial de seu pai (patris), aquele contra quem o caso é trazido [isto é, aquele cuja terra foi sequestrada] deve oferecer três testemunhas [do fato de que] ele a teve da propriedade alodial de seu próprio pai, e outras três testemunhas dos meios pelos quais seu pai teve esta propriedade. Se ele fizer isso, ele pode liberar a propriedade em disputa. Se ele não fizer isso, ele deve apresentar três co-juradores que apoiarão sua reivindicação de que ele a teve da propriedade alodial de sua família. Se ele fizer isso, ele se livrará da penalidade neste caso. Se ele não fizer isso, então aquele que moveu a ação (suofel troctum na glosa de Malberg) [a terá]; e depois, como a lei declara, ele [que foi incapaz de garantir testemunhas ou co-juradores] será obrigado a pagar 35 soldos àquele que reivindicou a propriedade.`,
    },
    {
      id: 'titulo-lxvii',
      title: 'LXVII. SOBRE PRESENTES (chane crenoda)',
      type: 'text',
      content: `Se um pai ou grupo de parentesco (parentilla) dá uma moça em casamento, o que quer que tenha sido dado a ela naquele dia, uma porção semelhante deve ser reservada para seus irmãos [e irmãs]. Igualmente quando um filho atinge a idade adulta (corta sua barba — ad capillaturias), o que quer que seja dado a ele, uma porção similar deve ser mantida [para os outros filhos e filhas] quando a propriedade restante for dividida entre eles.`,
    },
    {
      id: 'titulo-lxviii',
      title: 'LXVIII. SOBRE MATAR UM HOMEM LIVRE E A MANEIRA PELA QUAL OS PARENTES RECEBEM COMPOSIÇÃO POR SUA VIDA',
      type: 'text',
      content: `Aquele que mata um homem livre, e é provado contra ele que ele o matou, deve fazer composição aos parentes de acordo com a lei. Seus filhos (filius) [do homem morto] devem receber metade da composição. Metade do restante deve ir para a mãe [isto é, a mãe dos filhos], de modo que um quarto do wergeld venha para ela. O outro um quarto deve ir para os parentes próximos, isto é, para os três mais próximos do lado de seu pai [do homem morto] e três do lado de sua mãe. Se a mãe [isto é, a esposa] não estiver viva, os parentes devem dividir a metade dela do meio-wergeld entre si, isto é, os três mais próximos do lado do pai e três do lado da mãe; quem quer que seja o parente mais próximo dos três supramencionados tomará [duas partes] e deixará uma terça parte para ser dividida entre os outros dois; então aquele dos dois restantes que for o parente mais próximo tomará duas partes daquele terço e deixará uma terça parte para o outro parente.`,
    },
    {
      id: 'titulo-lxix',
      title: 'LXIX. SOBRE O NÚMERO DE CASOS EM QUE DOZE (thoalapus ou thalaptas) PODEM OFERECER JURAMENTO',
      type: 'text',
      content: `[Nestas ocasiões doze podem oferecer juramento:] Um é o caso do presente de casamento, outro diz respeito à propriedade perdida no exército, e um terceiro é o caso de um homem chamado de volta à escravidão. Se eles [os doze] oferecerem juramento em outros casos que não estes três, ele [cujo juramento eles apoiam] deve restaurar o valor total da propriedade [em disputa] e ser considerado obrigado por qualquer multa que haja neste caso. Daqueles que ofereceram juramento, os três mais velhos serão obrigados a pagar 15 soldos, e os co-juradores restantes pagarão 5 soldos.`,
    },
    {
      id: 'titulo-lxx',
      title: 'LXX. SOBRE CREMAÇÃO (creobeba)',
      type: 'articles',
      articles: [
        {
          id: 'ls-lxx-1',
          number: '1',
          text: `Aquele que mata um homem livre seja numa floresta ou em algum outro lugar e queima o corpo a fim de ocultar o crime, se for provado contra ele, pagará 600 soldos de composição.\n\n[1. Aquele que mata um homem livre seja numa floresta ou em algum outro lugar e queima o corpo com fogo a fim de ocultar o crime será obrigado a pagar 24.000 denários (isto é, 600 soldos).]`,
        },
        {
          id: 'ls-lxx-2',
          number: '2',
          text: `Aquele que mata um antrustião ou uma mulher de tal posição e tenta despojar (talare) o corpo ou queimá-lo com fogo, e for provado contra ele, deve pagar 1.800 soldos de composição.\n\n[2. Aquele que mata um antrustião ou uma mulher de tal maneira, e ou esconde [o corpo] ou o crema com fogo será obrigado a pagar 72.000 denários (isto é, 1.800 soldos).]`,
        },
      ],
    },
    {
      id: 'titulo-lxxi',
      title: 'LXXI.',
      type: 'articles',
      articles: [
        {
          id: 'ls-lxxi-1',
          number: '1',
          text: `Se um homem Sálico castra à força outro homem Sálico e for provado contra ele, ele será obrigado a pagar 200 soldos, e além disso ele deve pagar 9 soldos de composição pelo tratamento médico.`,
        },
        {
          id: 'ls-lxxi-2',
          number: '2',
          text: `Aquele que castra um antrustião e for provado contra ele será obrigado a pagar 600 soldos, e além disso ele deve pagar 9 soldos de composição pelo tratamento médico.`,
        },
      ],
    },
    {
      id: 'titulo-lxxii',
      title: 'LXXII.',
      type: 'text',
      content: `Se alguém de um bando de seguidores (contubernio) presumir atacar uma mulher livre ou uma menina na estrada ou em algum outro lugar, tanto um quanto mais que tiverem sido provados ter cometido este crime serão obrigados a pagar 200 soldos. E daquele bando de seguidores, se alguns ainda permanecerem que não cometeram o crime mas eram sabidos estar lá, se eram mais ou menos que três em número, eles serão obrigados a pagar 45 soldos.\n\n[Se alguém com um bando reunido de seguidores assalta e presume atacar à força uma mulher livre ou menina seja na estrada ou algum outro lugar, tanto um quanto mais que estejam envolvidos neste ato violento deverão cada um deles ser obrigado a pagar 200 soldos. E se daquele bando de seguidores alguns ainda permanecerem que são sabidos não ter cometido o crime mas não obstante estavam lá, se são mais ou menos em número que três, cada um deles será obrigado a pagar 45 soldos por isso.]`,
    },
    {
      id: 'titulo-lxxiii',
      title: 'LXXIII. SOBRE O ANTRUSTIÃO CONVOCADO A APARECER NA CORTE (gkalmalta)',
      type: 'articles',
      articles: [
        {
          id: 'ls-lxxiii-1',
          number: '1',
          text: `Se um antrustião deseja convocar outro antrustião à corte (admallare) em alguma causa, onde quer que ele possa encontrá-lo ele deve com testemunhas convocá-lo [para vir] perante um juiz dentro de sete dias para responder ou estar presente perante o juiz naquela causa que é acusada contra ele. E se ele [o homem convocado] não vier lá ou se demorar a vir, aquele que o convocou à corte deve novamente marcar um dia para ele [para vir à corte] (sohatire); e após catorze dias ele deve convocá-lo novamente (iterata vice) para responder à corte ou estar presente num lugar onde antrustiões devem suas responsabilidades (mittkiu redebent).\n\n[1. Se um antrustião deseja convocar outro antrustião à corte em alguma causa, onde quer que ele possa encontrá-lo ele deve com testemunhas convocá-lo dentro de sete dias para vir perante o juiz ou responder na corte a respeito do caso que é acusado contra ele. Se ele não vier lá ou demorar em vir, aquele que o convocou à corte deve novamente marcar um dia para ele [para vir à corte] (solsatire). E depois ele deve convocá-lo novamente para vir à corte em catorze dias para dar uma resposta.]`,
        },
        {
          id: 'ls-lxxiii-2',
          number: '2',
          text: `E se o homem convocado vier ao lugar, então aquele que o chamou à corte, se o caso for um tão menor que a composição envolvida seja menos que 35 soldos, deve oferecer juramento (videredum ou wedredo) com seis co-juradores. E depois aquele que tinha sido convocado, se ele acredita ser apropriado para ele fazer assim em tal caso, se absolverá com os juramentos de doze co-juradores.`,
        },
        {
          id: 'ls-lxxiii-3',
          number: '3',
          text: `Mas se for um caso mais sério, um onde aquele que for considerado culpado será obrigado a pagar 35 soldos ou mais (mas menos que 45), aquele que o convocou à corte oferecerá juramento (videredum ou wedredo) com nove co-juradores. E aquele que foi convocado, se ele reconhece como apropriado para si mesmo fazer assim, se absolverá com juramentos dados por ele por dezoito co-juradores.`,
        },
        {
          id: 'ls-lxxiii-4',
          number: '4',
          text: `Se de fato for um caso tal que a composição seja 45 soldos ou mais — até a quantia do wergeld (ad leudem) — aquele que o convocou à corte oferecerá juramento com doze co-juradores; e aquele que foi convocado à corte, se ele sabe que é apropriado para ele fazer assim, pode absolver-se com juramentos dados por vinte e cinco co-juradores.\n\n[4. Se de fato for um caso tal que a composição seja 45 soldos ou mais — até a quantia do wergeld (ad leudem) — aquele que convocou [os outros] à corte oferecerá juramento com doze; e aquele que foi convocado, se ele sabe que é inocente, se absolverá com juramentos dados por vinte e cinco.]`,
        },
        {
          id: 'ls-lxxiii-5',
          number: '5',
          text: `Mas se um homem convocou alguém à corte numa ação envolvendo um julgamento que é a quantia do wergeld (leudem), aquele que o convocou deve oferecer juramento (vidrido ou wedredo iurare) com doze; e se ele [que foi convocado] negligenciar vir à corte ou não quiser colocar sua mão no caldeirão, ele [que convocou] deve aquecer o caldeirão após catorze dias.`,
        },
        {
          id: 'ls-lxxiii-6',
          number: '6',
          text: `Se for um antrustião que não é capaz de absolver-se por juramento no caso descrito acima envolvendo o pagamento de wergeld, ou que se recusa a colocar sua mão no caldeirão ou negligencia vir à corte, então aquele que o convocou deve naquele dia convocá-lo novamente (solem illi collocet) para vir à corte em quarenta dias. Se ele não vier lá, então aquele que convocou deve convocá-lo novamente (solem illi collocet). E após catorze dias ele deve convocá-lo à presença do rei e ter doze lá que em turno individual ofereçam juramento de que estavam lá quando ele convocou [o antrustião] à corte (ad mitkio) em catorze dias e [aquele] não deu nem juramento nem sua mão [neste caso envolvendo] o pagamento de wergeld.\nE que haja três outros que dirão que ele [o convocador] tinha marcado um dia (solem collocasset) em quarenta dias [isto é, tinha-o convocado novamente para aparecer em quarenta dias] e aquele de modo algum conduziu a si mesmo de acordo com as leis sobre antrustiões convocados à corte.\nQue ele [o convocador] ofereça três testemunhas que dirão como ele o tinha convocado [o antrustião] para vir à presença do rei.\nEstas nove testemunhas devem oferecer juramento como dissemos acima de que ele não veio então. Igualmente naquele dia quando ele ainda não tinha vindo, ele marcou um dia (collocat ei solem) para ele [isto é, ele o convocou novamente] e aquelas três testemunhas estavam lá onde ele emitiu a convocação. Então quando aquele que o convocou [o antrustião] tiver feito todas essas coisas e aquele que foi convocado à corte não quiser vir ou comportar-se de acordo com a lei, o rei perante quem ele tinha sido convocado o colocará fora de sua proteção (extra sermonem suum). Então aquele [convocado] e todas as suas possessões estarão sujeitos [a confisco]; e quem quer que o alimente ou lhe ofereça hospitalidade, mesmo se for sua própria esposa, será obrigado a pagar 15 soldos até que ele pague em composição tudo o que for acusado contra ele por lei.\n\n[6. Se for um antrustião que não é capaz de absolver-se por juramento no caso descrito acima envolvendo o pagamento de wergeld, ou que se recusa a colocar sua mão no caldeirão ou negligencia vir à corte, então aquele que o convocou deve naquele dia convocá-lo novamente (solem illi collocet) para vir à corte em quarenta dias. Se ele não vier lá, então aquele que o convocou deve convocá-lo novamente (solem collocet). E após catorze dias ele deve convocá-lo [o antrustião] à presença do rei e prover testemunhas que oferecerão juramento três vezes cada uma de que estavam lá quando ele [o convocador] o admoestou e marcou um dia para ele (solem collocasset) [isto é, o convocou à corte] em catorze dias e aquele neste caso envolvendo o pagamento de wergeld não se absolveu por juramento ou colocou sua mão no caldeirão. E igualmente que ele [que convocou] tenha três outras testemunhas que dirão que, tendo um dia sido marcado para quarenta dias dali, o antrustião convocado de modo algum [atuou] conforme provido pelas leis.\nE por uma terceira vez ele [o convocador] igualmente apresentará três testemunhas que dirão como ele o tinha convocado [o antrustião] para vir à presença do rei; e estas nove testemunhas, como dito acima, devem oferecer juramento de que ele [o antrustião] não veio lá. Igualmente quando ele não veio naquele dia, ele o convocou (collocet ei solem) novamente e aquelas três testemunhas estavam lá quando ele marcou o dia para [isto é, convocou] ele (sol collocabatur).\nSe aquele que o convocou [o antrustião] à corte tiver feito todas estas coisas, e aquele que foi convocado ainda não quiser vir à corte, então o rei perante quem ele foi convocado o colocará fora de sua proteção; e quem quer que o alimente ou lhe ofereça hospitalidade, mesmo se for sua própria esposa, será obrigado a pagar 15 soldos, até que ele faça composição por todas aquelas coisas acusadas contra ele por lei.]`,
        },
        {
          id: 'ls-lxxiii-7',
          number: '7',
          text: `Se um antrustião convoca outro antrustião à corte por qualquer causa ou lhe pede para ser um co-jurador, e se ele não o convocou de acordo com a lei, ele será obrigado a pagar 15 soldos além do que a lei provê para casos não completados dentro de um ano.`,
        },
        {
          id: 'ls-lxxiii-8',
          number: '8',
          text: `Se um antrustião presta testemunho contra outro antrustião, ele será obrigado a pagar 15 soldos.`,
        },
      ],
    },
    {
      id: 'titulo-lxxiv',
      title: 'LXXIV.',
      type: 'text',
      content: `Se alguém destrói uma casa à força, e se for provado que esta casa tinha escoras (ebrius) para apoiar o teto, e se for provado contra ele que ele presumiu fazer isto, ele será obrigado a pagar 45 soldos [além de pagar o valor da casa mais um pagamento pelo tempo em que seu uso foi perdido].\n\n[Se alguém demolir à força a casa de outrem, e for provado que a casa tinha escoras (iberus) para apoiar o teto, aquele que tiver feito isto será obrigado a pagar 1.800 denários (isto é, 30 soldos). E se ele presumir levar embora algo daquela casa numa carroça, ele será obrigado a pagar 1.200 denários (isto é, 30 soldos) além da soma acima e além de um pagamento pelo tempo em que seu uso foi perdido.]`,
    },
    {
      id: 'titulo-lxxv',
      title: 'LXXV. [SOBRE AQUELE QUE TIRA UM HOMEM VIVO DE UMA FORCA (jurat)]',
      type: 'articles',
      articles: [
        {
          id: 'ls-lxxv-1',
          number: '1',
          text: `Se alguém presumir tirar um homem vivo de uma forca (furca), aquele que o levar embora e isso for provado contra ele ou perderá sua vida por ele ou pagará 200 soldos.`,
        },
        {
          id: 'ls-lxxv-2',
          number: '2',
          text: `Mas se alguém tirar um homem já morto da forca sem o consentimento do juiz ou o acordo do homem cujo caso é este, aquele que presumiu tirá-lo será obrigado a pagar de acordo com a lei Sálica qualquer quantia que a lei Sálica decrete para o crime pelo qual o homem foi pendurado.`,
        },
      ],
    },
    {
      id: 'titulo-lxxvi',
      title: 'LXXVI. SOBRE ATRASOS LEGAIS (agsoniu)',
      type: 'text',
      content: `Isto deve ser observado: Se alguém queima uma casa e ele não tem a propriedade com a qual possa repor aquilo que foi destruído (liberavit), se doença o detém ou por acaso ele tem em sua casa um parente próximo que está morto, ou ele é atrasado por uma comissão real, ele pode ser escusado por um destes atrasos (sunnis) se puder ser provado.\n\n[Isto deve ser observado no caso onde um homem queima a casa de outro homem e ele não tem a propriedade com a qual repor aquilo que ele destruiu. Se ele foi convocado à corte e aquele que foi convocado não vem, se doença ou uma comissão real o detém ou por acaso ele tem em sua casa um parente próximo que está morto, por uma destas razões para atraso um homem pode ser escusado. De outro modo ele deve fazer composição com sua vida ou ser obrigado a pagar 200 soldos.]`,
    },
    {
      id: 'titulo-lxxvii',
      title: 'LXXVII. [SOBRE AQUELE QUE RESIDE NA CASA DE OUTRO HOMEM]',
      type: 'articles',
      articles: [
        {
          id: 'ls-lxxvii-1',
          number: '1',
          text: `Se alguém reside em sua casa com outro homem livre e outro homem livre voluntariamente e não por acaso manda ou joga uma pedra sobre seu telhado, e isto for provado contra ele, pelo desprezo a ele [que possui a casa] e a outros homens livres [que residem nela], ele e outros, se estavam com ele, cada um deles será obrigado a pagar 15 soldos.\n\n[1. Se alguém reside em sua casa com um homem livre, e outro homem livre deliberadamente joga uma pedra em seu telhado, então ele [que jogou a pedra] e cada outra pessoa considerada culpada pagarão cada um 9 soldos de composição por conta do insulto a ele [que possui a casa] e aos outros residindo na casa.]`,
        },
        {
          id: 'ls-lxxvii-2',
          number: '2',
          text: `Mas se foi um homem meio-livre (letus) que presumiu fazer isto, ele será obrigado a pagar 7 soldos e meio.\n\n[2. Se for certo quem jogou ou fez isto, ele será obrigado a pagar 7 soldos de composição.]`,
        },
      ],
    },
    {
      id: 'titulo-lxxviii',
      title: 'LXXVIII.',
      type: 'text',
      content: `Se um homem livre joga outro homem livre num poço ou cova e o coloca lá a fim de matá-lo, se [o homem jogado] foi encontrado lá onde ele não pode escapar [antes que morra], então aquele que comete este crime e for provado contra ele será obrigado a pagar 200 soldos.\n\n[Se alguém joga um homem num poço e ele escapa vivo daquele lugar, ele [que o jogou] será obrigado a pagar 4.000 denários (isto é, 100 soldos). Mas se o homem morre no poço (chamado musthest na glosa de Malberg), ele [que o jogou] será obrigado a pagar 24.000 denários (isto é, 600 soldos).]`,
    },
  ],
};
