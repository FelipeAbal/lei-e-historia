import { HistoricalDocument } from '../../types';

const codigoVisigoticLivro7Titulo2: HistoricalDocument = {
  id: "codigo-visigotico-livro-7-titulo-2",
  title: "Código Visigótico",
  subtitle: "Livro VII, Título II — Acerca de Ladrões e Propriedade Roubada",
  date: "c. 654 d.C.",
  description: "O Título II do Livro VII regula o furto no Reino Visigótico: a prova da propriedade roubada, as penalidades graduadas conforme a condição do infrator, a responsabilidade do senhor pelos atos do escravo, o direito de matar o ladrão em flagrante e as regras sobre receptação.",
  era: "Idade Média",
  language: "Latim",
  parentCollectionId: "codigo-visigotico",
  sections: [
    {
      type: 'text' as const,
      title: "Introdução",
      content: "O Título II do Livro VII do *Liber Iudiciorum* é o mais completo tratamento do direito penal patrimonial no Código Visigótico. Seus vinte e três dispositivos regulam desde o procedimento de identificação da propriedade roubada até as condições em que o ladrão pode ser morto em flagrante, passando pela responsabilidade do senhor pelos atos do escravo, a receptação consciente e inconsciente, e o furto praticado contra o próprio senhor.\n\nO título revela com clareza a lógica da composição pecuniária que permeia o direito penal visigótico: o ladrão livre paga nove vezes o valor do bem roubado; o escravo, seis vezes. A incapacidade de pagar converte a pena pecuniária em escravidão — mecanismo que articula diretamente o direito patrimonial e o estatuto pessoal. A graduação das penas conforme a condição social do infrator e da vítima é constante: escravos recebem chicotadas onde livres pagam em ouro; cúmplices dividem proporcionalmente a compensação.\n\nDestaques particulares: a lei VIII regula a compra de boa-fé de propriedade roubada, estabelecendo um regime sofisticado de partilha do ônus entre comprador e proprietário original. As leis XV e XVI consagram o direito de matar o ladrão em flagrante — de dia, se ele se defender com arma; à noite, em qualquer circunstância —, antecipando discussões que o direito moderno ainda não encerrou. A lei XVIII estende a proteção penal aos bens salvos de naufrágio, incêndio ou ruína.\n\nA maior parte das leis é identificada como 'lei antiga' (*lex antiqua*), sem atribuição a rei específico; apenas as leis VII, XII e XXII têm atribuição expressa.\n\nA tradução segue a versão inglesa de S. P. Scott, publicada em Boston em 1910 (*The Visigothic Code*, The Boston Book Company), disponível no Project Gutenberg (eBook #72551). O texto latino de referência é o estabelecido por Karl Zeumer nos *Monumenta Germaniae Historica* (1902)."
    },
    {
      type: 'articles' as const,
      title: "Título II — Acerca de Ladrões e Propriedade Roubada",
      articles: [
        {
          number: "I",
          text: "**Aquele que Procura por Propriedade Roubada deve Descrevê-la.**\n\nQuem fizer uma demanda por qualquer propriedade roubada deve descrever privadamente ao juiz o que procura e mostrar, por prova manifesta, o que perdeu; pois a verdade não pode ser estabelecida onde evidência suficiente não for introduzida.\n\n*(Lei Antiga)*"
        },
        {
          number: "II",
          text: "**Onde um Escravo Comete um Furto Antes, ou Depois, de ter Recebido sua Liberdade.**\n\nSe um escravo for culpado de furto e for posteriormente libertado por seu senhor, o senhor não será responsável por qualquer perda por atos cometidos anteriormente pelo referido escravo; mas o próprio escravo sofrerá as penalidades prescritas pela lei contra os perpetradores de crimes. Onde ele cometer um furto após ter recebido sua liberdade, será obrigado a fazer a mesma reparação que teria feito enquanto escravo e receberá cem chicotadas. Se a referida ofensa não for de tal caráter que o torne passível de ser devolvido à escravidão, ele permanecerá no pleno gozo de sua liberdade.\n\n*(Lei Antiga)*"
        },
        {
          number: "III",
          text: "**Onde um Escravo que se tornou Propriedade de Outro Senhor Comete um Ato Ilegal.**\n\nSe um escravo que passou para o controle de outro senhor roubar qualquer coisa de seu antigo dono, ou infligir qualquer dano a alguém, o juiz determinará se ele cometeu o crime; e se for condenado, seu último senhor, caso deseje, poderá prestar satisfação pelos atos cometidos pelo referido escravo. Mas se ele se recusar a fazê-lo, o escravo deve ser entregue para ser punido de acordo com a natureza de sua ofensa."
        },
        {
          number: "IV",
          text: "**Onde um Homem Livre Comete um Furto em Companhia do Escravo de Outra Pessoa.**\n\nOnde um homem livre estiver implicado com o escravo de outra pessoa na comissão de qualquer crime, quer roubem ou se apropriem de qualquer propriedade, ou sejam culpados de qualquer outro ato ilegal; cada um será responsável por metade da compensação pecuniária exigida por uma lei anterior, e ambos serão açoitados juntos em público. E se o senhor não estiver disposto a prestar plena satisfação pelo ato do referido escravo, este deve ser entregue em substituição. Mas se tiverem cometido um crime capital, o escravo e o homem livre serão, ao mesmo tempo, condenados à morte.\n\n*(Lei Antiga)*"
        },
        {
          number: "V",
          text: "**Onde um Senhor Comete um Furto em Companhia de seu Escravo.**\n\nSe um senhor cometer um furto em companhia de seu escravo, decretamos por meio desta que o senhor, e não o escravo, fará a reparação pecuniária total pelo mesmo; e o senhor receberá cem chicotadas em público, conforme prescrito por lei. O escravo, contudo, sairá livre, porque obedeceu às ordens de seu senhor.\n\n*(Lei Antiga)*"
        },
        {
          number: "VI",
          text: "**Onde um Escravo, Pertencente a Outra Pessoa, é Instigado por Alguém à Prática de Atos Ilegais.**\n\nSe alguém instigar o escravo de outra pessoa a cometer um furto ou qualquer outro ato ilegal; ou persuadi-lo a fazer qualquer coisa contrária ao seu próprio interesse, o que também pode ser ocasião de perda para seu senhor, a fim de que, por sua influência maligna e iníqua, possa obter fraudulentamente a posse do referido escravo para si; e, após investigação adequada pelo juiz, a fraude for detectada, o referido senhor não perderá seu escravo, nem será passível de qualquer penalidade; mas aquele por cujo artifício e persuasão o escravo foi induzido a cometer o crime será forçado a pagar ao senhor do escravo sete vezes o valor da propriedade roubada, ou os danos legais prescritos por seu ato. O escravo receberá cem chicotadas em público e, após a imposição da referida punição, será restituído ao seu senhor.\n\n*(Lei Antiga)*"
        },
        {
          number: "VII",
          text: "**Acerca Daqueles que Sabidamente se Associam a Ladrões.**\n\nNão apenas aquele que realmente comete um furto, mas também qualquer pessoa que estivesse ciente disso na época, ou que conscientemente recebeu os bens roubados, será considerado ladrão e passível da penalidade prescrita para o crime.\n\n*Flavius Recesvintus, Rei.*"
        },
        {
          number: "VIII",
          text: "**Onde Alguém, por Ignorância, Compra Propriedade Roubada de um Ladrão.**\n\nNão será lícito para um homem livre comprar qualquer propriedade de uma pessoa desconhecida, a menos que possa apresentar uma pessoa confiável como testemunha e, assim, possa alegar a desculpa da ignorância. Se ele agir de outra forma, será obrigado pelo juiz a apresentar, dentro de um tempo razoável, a pessoa de quem comprou a referida propriedade; e se não puder encontrá-la, deve provar sua inocência, seja por juramento ou por testemunhas, e mostrar que não sabia que o vendedor era um ladrão; e deve restituir a propriedade que comprou ao proprietário, após ter recebido deste último uma quantia igual à metade do preço pago pela referida propriedade; e ambos prometerão, sob juramento, que farão uma busca diligente pelo ladrão. Se, contudo, este último não for encontrado, o comprador será apenas obrigado a restituir ao proprietário a propriedade que comprou. Caso o proprietário da referida propriedade conheça o ladrão e não queira expô-lo, ele perderá a propriedade absolutamente, e o comprador a possuirá em paz. Esta lei também se aplicará aos escravos.\n\n*(Lei Antiga)*"
        },
        {
          number: "IX",
          text: "**Onde Alguém, Sabidamente, Compra Propriedade Roubada de um Ladrão.**\n\nSe alguém, conscientemente, comprar propriedade roubada de um ladrão, deve declarar imediatamente de quem a comprou e, depois, deve fazer a restituição, tal como o ladrão faria. Se não conseguir encontrar este último, será obrigado a pagar o dobro da quantia exigida dos ladrões, porque é evidente que quem compra propriedade roubada está na mesma base legal que um ladrão. Onde um escravo comete tal ato, pagará metade da quantia exigida das pessoas nascidas livres, ou seu senhor o entregará em satisfação de seu crime.\n\n*(Lei Antiga)*"
        },
        {
          number: "X",
          text: "**Acerca de Dinheiro e Outros Bens Roubados do Rei.**\n\nSe alguém roubar, ou apropriar-se para uso próprio, de dinheiro ou outra propriedade pertencente ao tesouro público, restituirá nove vezes o seu valor.\n\n*(Lei Antiga)*"
        },
        {
          number: "XI",
          text: "**Acerca do Roubo de Sinos de Gado.**\n\nSe alguém roubar um sino de uma égua ou de um boi, pagará um *solidus*; de uma vaca, duas *tremissis*; de um carneiro ou outro gado, uma *tremissa* [N.T.: *tremissa* ou *triente*, moeda de ouro equivalente a um terço do *solidus*]."
        },
        {
          number: "XII",
          text: "**Acerca do Roubo de Maquinário de Moinho.**\n\nSe alguém roubar qualquer das partes de um moinho, devolverá o que foi roubado; pagará também a multa prevista por lei como punição para outros furtos; e receberá, além disso, cem chicotadas.\n\n*Flavius Chintasvintus, Rei.*"
        },
        {
          number: "XIII",
          text: "**Acerca da Punição de um Ladrão.**\n\nUm homem livre que rouba a propriedade de outrem pagará ao proprietário nove vezes o valor, e um escravo seis vezes o valor da propriedade roubada; e cada um receberá cem chicotadas com o açoite. Se o homem livre não tiver recursos pecuniários suficientes para pagar a referida multa; ou se o senhor se recusar a prestar satisfação pelo ato de seu escravo; aquele que foi culpado do furto tornar-se-á para sempre escravo do proprietário da propriedade roubada.\n\n*(Lei Antiga)*"
        },
        {
          number: "XIV",
          text: "**O Ladrão, quando Capturado, deve ser Trazido Perante o Juiz; e Onde um Homem Livre Comete um Furto em Companhia de um Escravo, Ambos sofrerão a Mesma Pena.**\n\nQuando um ladrão for preso, será trazido ao tribunal e, se nascido livre, pagará nove vezes o valor da propriedade roubada e receberá cem chicotadas publicamente, na presença do juiz. Se, contudo, não tiver meios para fazer a restituição, perderá sua liberdade e se tornará escravo de quem roubou. Um escravo fará a restituição sêxtupla pela propriedade roubada; receberá cem chicotadas na presença do juiz; e será mantido sob custódia até que seu senhor seja notificado para prestar imediatamente satisfação por seu ato; e, caso não o faça, deve, de imediato, entregar o criminoso à parte que sofreu a perda.\n\nTambém é previsto por esta lei que, se um escravo e um homem livre, ou vários escravos e vários homens livres, juntos, roubarem qualquer animal ou qualquer outro artigo de propriedade, farão apenas uma compensação pelo mesmo; ou seja, os homens livres pagarão metade do seu valor nove vezes maior, e os escravos metade do seu valor seis vezes maior; mas todos receberão o mesmo número de chicotadas conforme anteriormente previsto.\n\n*(Lei Antiga)*"
        },
        {
          number: "XV",
          text: "**Onde um Ladrão, Defendendo-se com uma Espada, é Morto.**\n\nSe um ladrão for morto durante o dia, enquanto se defende com uma espada, nenhuma responsabilidade recairá sobre ninguém por causa de sua morte.\n\n*(Lei Antiga)*"
        },
        {
          number: "XVI",
          text: "**Onde um Ladrão é Morto à Noite, enquanto está Sendo Capturado.**\n\nSe um ladrão for surpreendido à noite e for morto enquanto tenta remover propriedade roubada, sua morte sob circunstância alguma será punida.\n\n*(Lei Antiga)*"
        },
        {
          number: "XVII",
          text: "**Acerca de Propriedade Danificada ou Destruída; e a Reparação a ser Feita pelo que foi Danificado ou Roubado.**\n\nOnde alguém danifica propriedade ou roupas pertencentes a outrem, ou causa qualquer dano a um viajante enquanto em jornada, ou o priva de qualquer coisa furtivamente, prestará imediatamente satisfação de acordo com a lei; mas não será obrigado a pagar o valor total da bagagem do viajante, mas apenas uma quantia igual ao que danificou ou roubou dele.\n\n*(Lei Antiga)*"
        },
        {
          number: "XVIII",
          text: "**Acerca de Propriedade Resgatada de Naufrágio.**\n\nOnde a propriedade tenha sido salva de conflagração, ruína ou naufrágio, e qualquer parte dela for subtraída ou ocultada por qualquer pessoa; esta será obrigada a pagar quatro vezes o valor da mesma.\n\n*(Lei Antiga)*"
        },
        {
          number: "XIX",
          text: "**Acerca da Propriedade e dos Herdeiros de Ladrões.**\n\nOnde alguém obtém a propriedade de um ladrão morto, seja por testamento ou herança, não será passível de qualquer penalidade, porque o crime morreu com o perpetrador; mas será passível de satisfação em danos, pela razão de que o ladrão teria sido assim passível se vivesse. Se os danos incorridos somarem mais do que a herança, ele deve entregar esta última em sua totalidade.\n\n*(Lei Antiga)*"
        },
        {
          number: "XX",
          text: "**Acerca Daqueles que Resgatam Ladrões e Outros Criminosos após sua Captura.**\n\nSe alguém resgatar um ladrão ou qualquer outro criminoso que esteja sob custódia, ou permitir que ele escape; se for uma pessoa de posição, receberá cem chicotadas na presença do juiz por sua insolência e será obrigado a apresentar em tribunal a parte que libertou. Se outra pessoa que não tenha reivindicação contra um ladrão o prender, receberá por seus serviços uma quarta parte da quantia devida pelo ladrão em satisfação de seu crime. Onde este último não puder ser encontrado posteriormente, aquele que o libertou será passível da punição prescrita para furto; e será obrigado a pagar, de sua própria propriedade, uma quantia igual à que o ladrão seria obrigado a pagar, caso tivesse sido condenado.\n\nSe alguém libertar uma pessoa acusada de outro crime que não furto, receberá cem chicotadas da mesma maneira; e se não puder encontrar ou apresentar a parte que libertou, sofrerá imediatamente a mesma punição à qual a lei declara que o acusado seria passível caso fosse considerado culpado. Se um escravo cometer esta ofensa, sem o conhecimento de seu senhor, receberá duzentas chicotadas por sua insolência e será obrigado a apresentar a pessoa que libertou. Se não a apresentar, então seu senhor, caso deseje fazê-lo, poderá pagar por ele a quantia exigida como compensação pelo crime; mas se estiver disposto a não pagar a referida quantia conforme previsto por lei, deve entregar o escravo em satisfação por danos, ou para ser punido.\n\n*(Lei Antiga)*"
        },
        {
          number: "XXI",
          text: "**Onde um Escravo Rouba de seu Senhor, ou de um Colega Escravo.**\n\nSe um escravo roubar qualquer coisa de seu senhor ou de seu colega escravo, o que será feito com ele reside inteiramente na discrição de seu senhor; e o juiz não tem o direito de interferir no assunto, a menos que o senhor deseje que ele o faça.\n\n*(Lei Antiga)*"
        },
        {
          number: "XXII",
          text: "**Dentro de qual Prazo, após sua Prisão, um Ladrão deve ser Trazido Perante o Juiz.**\n\nQuando alguém prende um ladrão, ou qualquer outro criminoso, deve conduzi-lo imediatamente perante o juiz; e não deve mantê-lo em sua casa por mais de um dia ou uma noite. Se alguém violar esta disposição, será forçado a pagar cinco *solidi* ao juiz por sua insolência. Se um escravo fizer isso sem o conhecimento de seu senhor, receberá cem chicotadas, mas se o fizer com o consentimento do senhor, toda a responsabilidade por danos será incorrida por este último. Se o escravo for de posição superior, seu senhor será obrigado a pagar uma multa de dez *solidi*, metade da qual pertencerá ao juiz, e a outra metade será dada àquele que se sabe ter sofrido o dano.\n\n*Flavius Recesvintus, Rei.*"
        },
        {
          number: "XXIII",
          text: "**Onde Alguém Mata Secretamente um Animal Pertencente a Outrem.**\n\nSe alguém, secretamente ou à noite, matar um cavalo, um boi ou qualquer outro tipo de animal pertencente a outrem, será obrigado a pagar nove vezes o valor do mesmo. Se não for possível condená-lo, ele se purificará da culpa publicamente por juramento. Onde um escravo cometer tal ofensa sob a direção de seu senhor, e isso for provado por evidência competente, o senhor do escravo será obrigado a fazer a restituição nove vezes, como um ladrão faria. Se um escravo não for condenado por testemunho, será torturado; e após ter sido estabelecido que ele cometeu o crime, pagará seis vezes o valor do animal morto ou será transferido para o serviço de quem ele prejudicou. Se, contudo, ele provar ser inocente, o reclamante prestará satisfação ao senhor do escravo, conforme previsto por outras leis."
        }
      ]
    }
  ]
};

export default codigoVisigoticLivro7Titulo2;
