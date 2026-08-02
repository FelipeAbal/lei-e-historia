import { HistoricalDocument } from '../../types';

const codigoVisigoticLivro4Titulo2: HistoricalDocument = {
  id: "codigo-visigotico-livro-4-titulo-2",
  title: "Código Visigótico",
  subtitle: "Livro IV, Título II — Acerca das Leis de Sucessão",
  date: "c. 654 d.C.",
  description: "O Título II do Livro IV regula a sucessão hereditária no Reino Visigótico: a ordem dos herdeiros, os direitos iguais de filhos e filhas, a herança entre cônjuges, a situação dos filhos póstumos e as condições para que um recém-nascido seja reconhecido como herdeiro.",
  era: "Idade Média",
  language: "Latim",
  parentCollectionId: "codigo-visigotico",
  sections: [
    {
      type: 'text' as const,
      title: "Introdução",
      content: "O Título II do Livro IV do *Liber Iudiciorum* é o mais extenso tratamento de direito sucessório do Código Visigótico. Seus vinte dispositivos estabelecem a ordem de chamamento dos herdeiros, regulam situações específicas de concorrência entre linhas de parentesco e resolvem questões que seriam controversas em qualquer sistema jurídico: o que acontece quando um recém-nascido morre? Quando um filho morre antes do pai? Quando a mãe herda de um filho e depois morre intestada?\n\nO título revela com clareza a fusão entre direito romano e costume germânico que caracteriza o *Liber Iudiciorum*. Da tradição romana vem a estrutura da ordem sucessória em graus de parentesco e o princípio da representação (netos herdam a quota que caberia ao pai pré-morto). Do costume visigótico vem a igualdade entre filhos e filhas na herança (lei I e lei IX) — princípio que o direito romano clássico não conhecia com esta amplitude e que distingue o código de contemporâneos como a legislação franca.\n\nDestaques particulares: a lei XIII regula com detalhe a situação do pai viúvo que se recasa, impondo-lhe a obrigação de inventariar os bens dos filhos perante o juiz. A lei XVII resolve o problema da capacidade sucessória do recém-nascido com uma solução original: exige que a criança tenha vivido ao menos dez dias e recebido o batismo — fundindo critério biológico e sacramental. A lei XIX protege o filho póstumo, garantindo-lhe participação igual na herança.\n\nAs leis são atribuídas principalmente a Recesvinto (r. 649–672) e Chindasvinto (r. 642–653); as leis II, III, VII, X, XI e XIII são identificadas como 'lei antiga' (*lex antiqua*), sem atribuição a rei específico.\n\nA tradução segue a versão inglesa de S. P. Scott, publicada em Boston em 1910 (*The Visigothic Code*, The Boston Book Company), disponível no Project Gutenberg (eBook #72551). O texto latino de referência é o estabelecido por Karl Zeumer nos *Monumenta Germaniae Historica* (1902)."
    },
    {
      type: 'articles' as const,
      title: "Título II — Acerca das Leis de Sucessão",
      articles: [
        {
          number: "I",
          text: "**Irmãos e Irmãs Partilharão Igualmente a Herança de seus Pais.**\n\nSe o pai ou a mãe morrerem intestados, as irmãs possuirão a propriedade em partes iguais com seus irmãos."
        },
        {
          number: "II",
          text: "**Os Filhos Virão Primeiro na Ordem de Sucessão.** *(Lei Antiga)*\n\nSe um homem morrer intestado, seus filhos estarão em primeiro lugar na ordem de sucessão; se não houver filhos, a herança descerá para os netos; se não houver netos, então os bisnetos terão direito a ela; e se o falecido não deixar filhos, nem netos, nem pai, nem mãe, então seu avô ou avó, caso algum esteja vivo, poderá reivindicar a herança de seus bens."
        },
        {
          number: "III",
          text: "**Onde não houver Herdeiros na Linha Direta, Herdeiros Colaterais Herdarão a Propriedade.**\n\nQuando qualquer das pessoas acima mencionadas de primeiro ou segundo grau, na linha direta de sucessão, não estiver viva, buscar-se-ão herdeiros colaterais para herdar a propriedade do homem que morreu intestado. E tais pessoas que são apenas distantemente aparentadas nada podem reivindicar enquanto herdeiros mais próximos ainda estiverem vivos."
        },
        {
          number: "IV",
          text: "**Quem Sucederá à Propriedade daqueles que não deixaram Testamentos Escritos, ou não fizeram Disposição de suas Posses na Presença de Testemunhas.**\n\nNo caso daqueles que morrem e não fazem disposição de sua propriedade, seja por doação ou testamento, ou não declaram suas intenções na presença de testemunhas, seus parentes mais próximos (*next of kin*) herdarão deles."
        },
        {
          number: "V",
          text: "**Acerca da Herança por Irmãos e Irmãs, e por aqueles que não descendem dos mesmos Pais.**\n\nOnde um homem deixa apenas irmãos e irmãs, eles herdarão sua propriedade, em partes iguais, desde que sejam todos filhos do mesmo pai e da mesma mãe. Mas se alguns descenderem de pai ou mãe diferentes dos outros, a herança irá para os irmãos e irmãs que tiverem o mesmo pai e a mesma mãe que o falecido. Filhos que nasceram de pais diferentes, mas da mesma mãe, herdarão a propriedade da mãe em partes iguais. Aqueles que descendem de mães diferentes, mas do mesmo pai, partilharão de maneira semelhante."
        },
        {
          number: "VI",
          text: "**Onde aquele que Morre deixa Avôs ou Avós.**\n\nSe alguém deixar um avô e uma avó paternos, toda a sua propriedade descerá para eles. Da mesma forma, se deixar um avô paterno e uma avó materna, eles herdarão seus bens igualmente; e a mesma disposição será feita se deixar tanto uma avó paterna quanto uma materna. Esta divisão equitativa de seus bens aplicar-se-á apenas às porções que ele adquiriu por seus próprios esforços; e tudo o que ele possa ter herdado de seus ancestrais ou de seus pais descerá para os herdeiros destes últimos na linha direta de sucessão."
        },
        {
          number: "VII",
          text: "**Onde aquele que Morre deixa Tios e Tias.** *(Lei Antiga)*\n\nOnde o falecido morre intestado e deixa apenas um tio e uma tia paternos, e um tio e uma tia maternos, eles herdarão a propriedade em partes iguais."
        },
        {
          number: "VIII",
          text: "**Onde aquele que Morre deixa Sobrinhos.**\n\nOnde o falecido não deixa irmãos ou irmãs, mas deixa sobrinhos e sobrinhas; se um deles for filho de um irmão, e os outros forem filhos de outro irmão ou irmã, a herança será dividida entre eles em partes iguais."
        },
        {
          number: "IX",
          text: "**Uma Mulher terá Direito a uma Parte em uma Herança Inteira.**\n\nUma mulher herdará, igualmente com seus irmãos, a propriedade de seu pai ou mãe; de seus avós, tanto do lado paterno quanto do materno, bem como de seus irmãos e irmãs; e também qualquer propriedade que possa ser deixada por um tio paterno, ou um primo, ou um sobrinho, ou uma sobrinha. Pois é apenas justo que aqueles que são proximamente aparentados pelo sangue gozem do benefício da sucessão hereditária."
        },
        {
          number: "X",
          text: "**Assim como uma Mulher tem Direito a uma Parte de uma Herança Inteira, aquele que for o próximo na Sucessão Herdará o Restante da Propriedade.** *(Lei Antiga)*\n\nAs mulheres partilharão toda a propriedade deixada por parentes do lado materno com aqueles no mesmo grau de parentesco, sejam eles tios, tias ou primos. Pois devem ter a herança aqueles que são os mais proximamente aparentados com o falecido."
        },
        {
          number: "XI",
          text: "**Acerca da Herança de Marido e Mulher, respectivamente.** *(Lei Antiga)*\n\nMarido e mulher herdarão um do outro, respectivamente, quando não deixarem parentes mais próximos do que o sétimo grau."
        },
        {
          number: "XII",
          text: "**Acerca da Herança de Propriedade de Clérigos e Monges.**\n\nA igreja à qual estão vinculados herdará a propriedade de todos os clérigos, monges e outras pessoas em ordens sacras que não deixaram herdeiros abaixo do sétimo grau e que não fizeram disposição de seus bens."
        },
        {
          number: "XIII",
          text: "**Após a Morte da Mãe, os Filhos permanecerão sob o Controle do Pai; e que Disposição ele fará da Propriedade deles.** *(Lei Antiga)*\n\nSe a mãe morrer, os filhos permanecerão sob o controle do pai. E, se ela morrer enquanto o marido ainda estiver vivo e este não se casar novamente, ele terá a guarda dos filhos nascidos do matrimônio e poderá reter a posse da propriedade deles, com o entendimento de que não deve vendê-la, danificá-la ou dispô-la de qualquer forma, mas preservá-la intacta para o benefício de seus filhos. Mas, em comum com seus filhos, ele desfrutará da renda da dita propriedade e terá direito a reservar dela todas as despesas necessárias deles.\n\nSe, contudo, o pai se casar novamente, ele não renunciará ao cuidado dos filhos, pois não é justo que, tendo sua autoridade sobre eles sido abandonada, sejam colocados sob a tutela de outrem; mas ele ainda manterá o controle sobre eles e sua propriedade. Mas ele deve imediatamente redigir um inventário da propriedade deles de próprio punho, na presença de um juiz ou dos herdeiros de sua falecida esposa; e deve também obrigar-se por um compromisso escrito de que aqueles parentes que legalmente têm direito a isso terão a tutela dos filhos no caso de sua morte. Se o pai, após ter se casado pela segunda vez, se recusar a agir como guardião de seus filhos, então o juiz nomeará o parente mais próximo da mãe para encarregar-se deles como tutor.\n\nO pai, assim que um filho ou filha atingir a idade de vinte anos, dar-lhes-á metade do que lhes cabe da herança materna, desde que já não se tenham casado. A metade restante o pai reservará para si durante sua vida e, após sua morte, descerá para seus filhos."
        },
        {
          number: "XIV",
          text: "**Onde uma Mãe permanece Viúva, ela terá uma Porção Igual da Herança com seus Filhos; e Como uma Mãe deve Dispor da Propriedade de seus Filhos.**\n\nUma mãe, durante sua vida, ou enquanto permanecer viúva, partilhará igualmente com seus filhos a renda derivada dos bens de seu falecido marido. Mas ela não pode doar, vender ou conferir a qualquer de seus filhos sua parte da referida propriedade. E se os filhos perceberem que sua mãe, seja por negligência ou por ódio a eles, estava prestes a dispor de qualquer dita propriedade, podem, imediatamente, recorrer ao governador da cidade ou ao juiz, para que este alerte a mãe a não alienar tal propriedade e a usar apenas a renda dela. Ela, contudo, terá o direito de dar aos seus filhos qualquer parte ou a totalidade da dita renda.\n\nApós a morte da mãe, tudo o que ela recebeu de seu marido será igualmente distribuído entre os filhos, porque eles não devem ser defraudados de sua herança paterna. Se a mãe se casar novamente, a partir daquele mesmo dia os filhos podem reivindicar como sua aquela porção da propriedade do pai que a mãe recebeu por ocasião da morte dele."
        },
        {
          number: "XV",
          text: "**Nenhuma Esposa pode Reivindicar o que seu Marido Ganhou pelo Trabalho dos Escravos dela.**\n\nSe o marido adquirir qualquer propriedade através do trabalho dos escravos de sua esposa, ou em qualquer empreendimento externo, sua esposa não terá direito a tal propriedade, seja durante a vida dele, seja após sua morte; pois um marido que tem controle sobre sua esposa, conforme declarado na lei das Sagradas Escrituras, também terá autoridade total sobre os escravos dela; e tudo o que ele ganhou pelos serviços destes últimos, ou pelos de seus próprios escravos, em qualquer empreitada, pertencerá a ele absolutamente. E se os referidos escravos, enquanto estiverem engajados com seu senhor em qualquer expedição ou empreendimento, cometerem qualquer erro ou causarem qualquer dano, aquele que os trouxe consigo será responsável pela conduta deles e fará a restituição.\n\n*O Glorioso Flavius Recesvintus, Rei.*"
        },
        {
          number: "XVI",
          text: "**Acerca da Propriedade que Marido e Mulher Juntos Acumularam durante sua Vida de Casados.**\n\nQuando pessoas de igual categoria se casam e, enquanto vivem juntas, ou aumentam ou desperdiçam sua propriedade, onde um é mais rico que o outro; eles partilharão em comum os ganhos e perdas, em proporção à quantia que cada um possui. Se o valor de suas posses for o mesmo, nenhum tem o direito de assumir superioridade sobre o outro.\n\nE se for evidente que as posses de um excedem as do outro em valor, haverá um rateio feito, mostrando o que cada um terá o direito de reivindicar após a morte do outro, e o que cada um terá o direito de dispor para seus filhos, ou herdeiros, ou de qualquer outra forma que desejar. Se o marido adquirir qualquer propriedade, seja de estranhos, seja durante qualquer expedição pública, ou por doação do rei, de um patrono ou de qualquer de seus amigos, seus filhos ou seus herdeiros terão o direito de reivindicá-la e terão poder absoluto para dispor dela como desejarem. A mesma regra aplicar-se-á às mulheres que receberam presentes de qualquer fonte."
        },
        {
          number: "XVII",
          text: "**De que maneira uma Criança pode Herdar Propriedade.**\n\nA ambiguidade frequentemente produz erro onde uma explicação razoável não é dada para elucidar um fato duvidoso. Muitas pessoas negam que uma criança morta na infância possa ter, em qualquer momento, o direito de herdar de seus pais, e desejamos agora pôr fim a tais disputas. Pois a origem da natureza é tal que aquele que nasce usa os sentidos da visão e do tato antes de qualquer outra coisa. Quem, portanto, pode herdar posses terrenas se morreu quase antes de ser sensível à luz? Com que razão pode ele reivindicar os direitos dos vivos, aquele que está mais intimamente associado à morte do que à vida?\n\nPortanto, para que a herança de um infante possa pertencer aos seus parentes mais próximos, e o fato de ele estar vivo seja claramente provado; decretamos por meio desta que nenhuma criança de qualquer sexo herdará, a menos que se prove que viveu pelo espaço de dez dias após seu nascimento e tenha recebido o santo sacramento do batismo, para que o pai ou a mãe da criança que tiver direito à sua herança possa, antes da morte desta, prepará-la para sua entrada no céu; e que, enquanto ainda viva, ela obtenha as posses da terra com seus benefícios transitórios.\n\n*Flavius Chintasvintus, Rei.*"
        },
        {
          number: "XVIII",
          text: "**Como os Pais de uma Criança podem Herdar dela.**\n\nOnde o pai está morto e o filho ou filha tiver vivido dez dias ou mais, tiver sido batizado e então morrer; tudo o que qualquer um herdaria dos bens de seu pai pode ser reivindicado por sua mãe. E, da mesma forma, se a mãe morrer, o pai não terá direito à parte do filho falecido, a menos que seja capaz de provar que esse filho viveu dez dias ou mais e foi batizado.\n\nSe os referidos pais morrerem intestados, então os outros de seus parentes que forem os mais próximos herdarão a dita propriedade. Assim, se após a morte de uma criança o pai herdar seus bens e morrer intestado, a herança pertencerá àqueles herdeiros que a ela têm direito por lei. Da mesma forma, se a mãe herdar os bens de seu filho falecido e morrer intestada, todo o interesse nesses bens pertencerá aos seus herdeiros mais próximos; sob esta condição, que os netos do filho ou filha que morreu enquanto seu pai e mãe estavam vivos herdarão tal porção dos bens de seu avô ou avó que seus próprios pais teriam herdado caso estivessem vivos.\n\nMas se um filho tendo esposa e filhos morrer durante a vida de seu pai, antes que o pai lhe tenha dado tudo o que lhe cabia de seus bens, e seus filhos também morrerem durante a vida do avô, a nora receberá apenas o que o pai havia anteriormente reservado para o marido dela. Onde o filho, em obediência aos desejos de seu pai, permitiu que este retivesse o que lhe cabia da herança materna, e o legasse em sua morte à sua esposa ou a qualquer outra pessoa; tal legado para o benefício da esposa ou de outros, se feito por escrito, será válido: desde que sua mãe não tenha tido outros filhos pelo mesmo marido.\n\n*Flavius Chintasvintus, Rei.*"
        },
        {
          number: "XIX",
          text: "**Acerca de Filhos Póstumos.**\n\nCumprimos as injunções da Lei Divina quando provemos para aqueles que ainda não nasceram. Portanto, quando um homem colhido pela morte deixa sua esposa grávida, decretamos que a criança que nascer depois partilhará igualmente com aqueles que já nasceram. Mas se ele não deixar descendência e legar sua propriedade a qualquer pessoa, esta última terá direito a receber apenas a quarta parte dela. As três partes restantes descerão, sem questionamento, para o filho póstumo.\n\nOnde um marido e uma mulher, antes de terem filhos, firmam um acordo escrito, outorgando mutuamente sua propriedade um ao outro, e, posteriormente, vêm a ter filhos; tal disposição de propriedade, se seus filhos estiverem vivos, será nula; e os filhos podem tomar e manter toda a propriedade de seus pais, com exceção da quinta parte, que os pais terão o direito de dispor de outra forma.\n\n*O Glorioso Flavius Chintasvintus, Rei.*"
        },
        {
          number: "XX",
          text: "**Aquele que não deixa Filhos tem pleno Poder para Dispor de sua Propriedade como desejar.**\n\nTodo homem e mulher nascidos livres, pertencentes à nobreza ou de posição inferior, que não possuam filhos, netos ou bisnetos, têm o direito inquestionável de dispor de seus bens como quiserem; nem qualquer arranjo que façam pode ser anulado por quaisquer parentes deles pertencentes tanto à linha direta quanto à colateral. Pois aqueles pertencentes a graus de parentesco outros que os acima citados, na linha direta, não podem, na ordem da natureza, receber a herança. Tais parentes podem, contudo, herdar do intestado de acordo com a lei que define seus direitos."
        }
      ]
    }
  ]
};

export default codigoVisigoticLivro4Titulo2;
