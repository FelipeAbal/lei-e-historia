import { HistoricalDocument } from '../../types';

const codigoVisigoticLivro6: HistoricalDocument = {
  id: "codigo-visigotico-livro-6",
  title: "Código Visigótico",
  subtitle: "Livro VI — Direito Penal: Injúrias, Mutilações e Homicídio",
  date: "c. 654 d.C.",
  description: "O Livro VI do Código Visigótico regula o direito penal do Reino de Toledo: as compensações por ferimentos e mutilações segundo tabela graduada, a distinção entre homicídio doloso e culposo, e as penas aplicáveis conforme a condição social do agressor e da vítima.",
  era: "Idade Média",
  language: "Latim",
  parentCollectionId: "codigo-visigotico",
  sections: [
    {
      type: 'text' as const,
      title: "Introdução",
      content: "O Livro VI do *Liber Iudiciorum* constitui o núcleo do direito penal visigótico. Apresentamos aqui dois de seus cinco títulos: o Título IV, sobre injúrias, ferimentos e mutilações, e o Título V, sobre homicídio — os que melhor revelam a lógica punitiva do reino de Toledo e sua sofisticada graduação de responsabilidade criminal.\n\nO Título IV é notável pela sua tabela de composições pecuniárias (lei III), herdeira direta da tradição germânica do *Wergeld*: cada lesão corporal tem um valor fixado em *solidi*, variando conforme a gravidade do dano (contusão, corte, osso fraturado) e a condição social das partes. A pena do talião é prevista para casos graves, mas pode ser substituída por compensação monetária a critério da vítima — revelando a tensão entre vingança privada e composição pública que caracteriza o direito penal medieval. A lei VI introduz o princípio da legítima defesa como excludente de ilicitude.\n\nO Título V sobre homicídio é o mais elaborado do código em termos de distinções subjetivas. Seus vinte e um dispositivos distinguem cuidadosamente entre homicídio doloso e culposo, estabelecem graus de responsabilidade para instigadores e executores, regulam o direito de asilo em igrejas e tratam do parricídio com penas especialmente severas. A lei XII, a mais longa do título, é uma peça legislativa de rara complexidade: regula em detalhe a responsabilidade do senhor pela morte de escravos, o direito de legítima defesa do senhor contra o escravo e os limites da violência doméstica sobre cativos.\n\nAs leis são atribuídas principalmente a Recesvinto (r. 649–672) e Chindasvinto (r. 642–653); algumas são identificadas como 'lei antiga' (*lex antiqua*), sem atribuição a rei específico.\n\nA tradução segue a versão inglesa de S. P. Scott, publicada em Boston em 1910 (*The Visigothic Code*, The Boston Book Company), disponível no Project Gutenberg (eBook #72551). O texto latino de referência é o estabelecido por Karl Zeumer nos *Monumenta Germaniae Historica* (1902)."
    },
    {
      type: 'articles' as const,
      title: "Título IV — Acerca de Injúrias, Ferimentos e Mutilações Infligidos a Homens",
      articles: [
        {
          number: "I",
          text: "**Acerca da Injúria a Homens Livres e Escravos.**\n\nOnde uma pessoa nascida livre desferir contra outra qualquer tipo de golpe na cabeça, pagará 5 *solidi* por uma contusão, 10 *solidi* se a pele for cortada, 20 *solidi* por um ferimento que chegue ao osso e 100 *solidi* onde um osso for quebrado. Se um homem livre cometer qualquer dos atos acima contra o escravo de outrem, pagará metade das penalidades citadas, conforme o grau da ofensa.\n\nSe um escravo golpear outro, pagará a terça parte das penas e receberá 50 chicotadas. Se um escravo ferir uma pessoa livre, pagará a maior soma mencionada e receberá 70 chicotadas. Se o senhor não quiser dar satisfação pelos atos de seu escravo, deverá entregá-lo por causa de seu crime."
        },
        {
          number: "II",
          text: "**Acerca de Pessoas Insolentes e seus Atos.**\n\nSe alguém, com uma espada desembainhada ou armado com qualquer arma, entrar insolentemente na casa de outrem com o intuito de matar o senhor da mesma e for ele próprio morto, ninguém será responsável por sua morte; mas se quem entrou matar alguém, será morto imediatamente. Se não cometer crime, deve dar satisfação imediata pela injúria. Se roubar algo, pagará onze vezes o valor do que levou; se não tiver meios, será entregue como escravo.\n\nPela mera entrada forçada (sem roubo ou dano), pagará 10 *solidi* e receberá 100 chicotadas públicas; se não possuir a soma, receberá 200 chicotadas. Outros acompanhantes livres sofrerão penas semelhantes. Se agirem sob ordens de um superior, apenas o patrono será responsabilizado. Um escravo que aja sem conhecimento do senhor receberá 200 chicotadas; se o senhor souber, este dará a satisfação legal.\n\n*Flavius Chintasvintus, Rei.*"
        },
        {
          number: "III",
          text: "**Acerca da Lei de Talião e da Quantia a ser Paga em Vez da Execução da dita Lei.**\n\nA temeridade sangrenta de alguns deve ser vingada legalmente. Se qualquer pessoa nascida livre ousar raspar a cabeça de outra; marcar ou cicatrizar seu rosto ou corpo por chicote ou arma; arrastá-la maliciosamente pelo chão; mutilar seus membros; ou privá-la da liberdade prendendo-a; sofrerá, por via de talião, o mesmo que infligiu ou tentou infligir. Se a vítima preferir compensação pecuniária, terá direito à soma que estimar compensar suas injúrias. Proibimos, contudo, o talião para socos, pontapés ou golpes na cabeça, para evitar ferimentos maiores na retaliação.\n\n**Tabela de compensações (pessoas livres):**\n\nPerda de um olho (em briga súbita): 100 *solidi* (ou 1 libra de ouro se ainda houver visão parcial). Destruição total do nariz: 100 *solidi*. Lesões nas narinas, lábios ou orelhas: pena conforme a deformidade produzida. Injúria aos lombos: 100 *solidi*. Corte ou inutilização da mão: 100 *solidi*. Perda do polegar: 50 *solidi*; indicador: 40; médio: 30; anelar: 20; mínimo: 10. Perda de um dente: 12 *solidi*. Quebra de perna com claudicação: 1 libra de ouro.\n\nSe um escravo raspar a cabeça de um livre, será entregue ao poder deste. Se um livre raspar a cabeça de um escravo alheio ou camponês, pagará 10 *solidi*; se o escravo for de posição superior, pagará os 10 *solidi* e levará 100 chicotadas. Por mutilar um escravo, o agressor levará 200 chicotadas e dará ao senhor outro escravo de igual valor. Libertos que agredirem livres sofrerão talião e 100 chicotadas. Livres que agredirem libertos pagarão a terça parte da multa devida entre iguais.\n\nJuízes que, por amizade ou suborno, não aplicarem a justiça, serão destituídos e compelidos a indenizar a vítima com seus próprios bens.\n\n*(Lei Antiga)*"
        },
        {
          number: "IV",
          text: "**Onde uma Pessoa Priva um Viajante de sua Liberdade contra a Vontade deste e com Intento de causar-lhe Injúria.**\n\nSe alguém restringir ilegalmente um viajante sem que haja dívida entre eles, pagará 5 *solidi* à vítima; se não tiver a quantia, levará 50 chicotadas. Se houver dívida, o credor deve levar o devedor perante o juiz sem infligir injúria. Um escravo que faça isso sem ordem do senhor levará 100 chicotadas; se sob ordens, o senhor pagará a multa.\n\n*Flavius Chintasvintus, Rei.*"
        },
        {
          number: "V",
          text: "**Aquele que Viola a Lei ao Infligir Injúria a Outrem sofrerá a mesma Punição que ele próprio Infligiu.**\n\nNão é menor a falta ignorar as leis do que cometer crimes conhecendo-as. Quem alegar ignorância ou alegar que seu ato lesivo não é proibido, se condenado, sofrerá os mesmos perigos, ignomínia, torturas ou perdas que tentou infligir a outrem, além de 100 chicotadas e de ser escalpelado como marca de infâmia perpétua.\n\n*Flavius Chintasvintus, Rei.*"
        },
        {
          number: "VI",
          text: "**Não será Considerado Culpado aquele que Golpeou Outrem quando este estava prestes a Golpeá-lo.**\n\nNão é crime resistir quando a violência do ataque é manifesta. Se o atacante morrer devido à defesa da vítima, não será considerado homicídio; é mais próprio um vivo defender-se do que ser vingado após a morte. Quem desembainhar espada em fúria contra alguém, mesmo sem golpear, pagará 10 *solidi* ao ameaçado.\n\n*Flavius Recesvintus, Rei.*"
        },
        {
          number: "VII",
          text: "**Onde um Escravo Insulta uma Pessoa Nascida Livre.**\n\nNenhum escravo agirá de forma insolente ou arrogante contra pessoa de linhagem nobre; se o fizer, levará 40 chicotadas (ou 50, se for escravo de posição inferior). Se o nobre provocar o escravo primeiro, deve atribuir o insulto ao seu próprio mau comportamento.\n\n*(Lei Antiga)*"
        },
        {
          number: "VIII",
          text: "**Onde uma Pessoa Nascida Livre Golpeia Outra.**\n\nSe a vítima morrer imediatamente, o agressor será punido por homicídio. Se não morrer de imediato, o agressor será preso ou libertado sob fiança. Caso a vítima sobreviva, o agressor pagará 20 *solidi* pelo ataque e mais os danos avaliados pelos juízes; se não tiver a soma, levará 200 chicotadas públicas.\n\n*(Lei Antiga)*"
        },
        {
          number: "IX",
          text: "**Onde o Escravo de Outrem é Mutilado por uma Pessoa Nascida Livre.**\n\nO agressor dará ao senhor outro escravo de igual valor e cuidará do ferido às suas custas até a cura. Se o escravo recuperar a saúde e voltar ao senhor, o agressor pagará 10 *solidi* pela ousadia do ato e mais os danos decididos pelo tribunal."
        },
        {
          number: "X",
          text: "**Onde um Escravo Golpeia uma Pessoa Nascida Livre.**\n\nSe a vítima morrer, o escravo será punido por homicídio. Se sobreviver, o escravo levará 200 chicotadas. O senhor pode pagar a indenização fixada pelo tribunal ou entregar o escravo à vítima como compensação pelo crime."
        },
        {
          number: "XI",
          text: "**Onde um Escravo Mutila outro Escravo.**\n\nO escravo agressor levará 100 chicotadas e pagará satisfação pecuniária. Se houver invalidez parcial, o juiz estimará a desvalorização. O senhor da vítima pode exigir o preço total do escravo ou um escravo equivalente em troca do ferido. Esta lei aplica-se também às escravas."
        }
      ]
    },
    {
      type: 'articles' as const,
      title: "Título V — Acerca do Homicídio",
      articles: [
        {
          number: "I",
          text: "**Onde um Mata Outro sem o Saber.**\n\nQuem matar outrem por ignorância e sem intenção, não tendo alimentado animosidade anterior, não é culpado de assassinato perante a Palavra de Deus. Não é justo que sofra a pena de homicídio quem cometeu o ato contra a sua vontade.\n\n*Flavius Chintasvintus, Rei.*"
        },
        {
          number: "II",
          text: "**Onde um Mata Outro sem o Ver.**\n\nSe um homem matar outro (que estava parado, vindo ou passando), sem notar sua presença e sem inimizade prévia, e provar em tribunal que o fez involuntariamente, partirá em segurança.\n\n*Flavius Recesvintus, Rei.*"
        },
        {
          number: "III",
          text: "**Onde um, sendo Empurrado, Mata Outro.**\n\nQuem matar outrem por acidente, por ser empurrado ou por colisão acidental, não sofrerá as penas de homicídio. Mas, se alguém empurrar uma pessoa e esta, pelo impulso, matar um terceiro, o autor do empurrão (se agiu sem malícia) pagará uma multa de 1 libra de ouro por negligência.\n\n*O Glorioso Flavius Recesvintus, Rei.*"
        },
        {
          number: "IV",
          text: "**Onde um, ao Tentar Golpear Outro, Mata uma Terceira Pessoa.**\n\nEm uma briga, se alguém tentar atingir seu adversário e matar involuntariamente um terceiro, deve-se investigar quem iniciou a contenda. O instigador (quem provocou a briga), mesmo que não tenha desferido o golpe fatal, pagará 100 *solidi*. O autor do golpe pagará 50 *solidi* aos parentes do falecido. Assim, ambos são punidos: um, por ter intencionalmente criado a oportunidade para o homicídio; o outro, por tê-lo cometido involuntariamente.\n\n*Flavius Recesvintus, Rei.*"
        },
        {
          number: "V",
          text: "**Onde um é Morto ao Interferir em uma Briga.**\n\nSe um homem livre morrer ao tentar separar uma briga para fazer a paz, e o autor do golpe provar (por juramento ou testemunhas idôneas) que não teve intenção de matar o mediador, pagará 1 libra de ouro aos parentes. Se houver apenas ferimento, pagará a terça parte dessa soma. A morte de quem busca a paz não deve ficar impune.\n\n*Flavius Recesvintus, Rei.*"
        },
        {
          number: "VI",
          text: "**Onde um, Pretendendo Infligir uma Injúria Leve, Mata Outro.**\n\nSe alguém der um chute, um soco ou cometer outro ato violento com a intenção de apenas ferir, mas resultar em morte, será punido como homicida."
        },
        {
          number: "VII",
          text: "**Onde um, por Esporte ou Imprudência, Mata Outro.**\n\nQuem matar outrem por descuido, em jogos ou em multidões, sem intenção maliciosa, não será infame nem condenado à morte. Contudo, por falta de cautela, pagará 1 libra de ouro aos parentes do falecido e receberá 50 chicotadas.\n\n*Flavius Recesvintus, Rei.*"
        },
        {
          number: "VIII",
          text: "**Onde um Mata Outro por Castigo Imoderado.**\n\nSe um aluno ou servo morrer ao sofrer castigo corporal moderado infligido por professor ou mestre, e não houver ódio ou malícia, o autor não será punido nem considerado infame; pois as Sagradas Escrituras declaram que é infeliz aquele que não castiga.\n\n*Flavius Recesvintus, Rei.*"
        },
        {
          number: "IX",
          text: "**Onde um Homem Livre Mata um Escravo por Acidente.**\n\nO homem livre pagará ao senhor do escravo metade da reparação devida em casos de morte acidental de pessoas nascidas livres.\n\n*Flavius Recesvintus, Rei.*"
        },
        {
          number: "X",
          text: "**Onde um Escravo Mata um Homem Livre por Acidente.**\n\nO escravo pagará a soma providenciada por lei para mortes de pessoas livres. Se o senhor não quiser pagar a quantia, o escravo será entregue à justiça.\n\n*(Lei Antiga)*"
        },
        {
          number: "XI",
          text: "**Onde um Homem Mata Outro Intencionalmente.**\n\nTodo homem que matar outro deliberadamente, e não por acidente, está sujeito à punição por homicídio.\n\n*Flavius Chintasvintus, Rei.*"
        },
        {
          number: "XII",
          text: "**Nenhum Senhor Matará seu Escravo sem Justa Causa; e Onde um Homem Livre Mata Outro.**\n\nÉ proibido a qualquer senhor ou senhora tirar a vida de seus escravos (ou de escravos alheios) sem ordem do tribunal. Se o escravo confessar crime capital, o senhor deve informar ao juiz ou governador; provado o crime, o culpado será executado. Se o juiz hesitar em ordenar a execução, dará a sentença por escrito, e o senhor poderá então matá-lo ou poupá-lo.\n\nSe um escravo, resistindo ao senhor, o golpear com espada, pedra ou qualquer arma, e o senhor o matar em legítima defesa imediata, não será punido por homicídio, desde que prove o fato por testemunhas ou juramento.\n\nSe um senhor matar seu escravo por malícia: perderá o direito de testemunhar em tribunal, será exilado perpetuamente com penitência, e seus bens irão para seus herdeiros mais próximos. Se matar escravo alheio deliberadamente: dará dois escravos de igual valor ao dono e será exilado perpetuamente.\n\nSe um mestre ordenar que um escravo mate um homem livre, e isso for confessado sob tortura: o escravo levará 200 chicotadas e será escalpelado; o mestre que não provar sua inocência por juramento será condenado à morte.\n\nSe vários homens livres planejarem conjuntamente um homicídio: quem desferiu o golpe morrerá; os cúmplices levarão 200 chicotadas públicas, serão escalpelados e pagarão 50 *solidi* cada aos parentes da vítima, ou serão entregues a eles como escravos perpétuos caso não possam pagar.\n\n*Flavius Recesvintus, Rei.*"
        },
        {
          number: "XIII",
          text: "**Ninguém Privará um Escravo ou Escrava de um Membro.**\n\nÉ proibida a mutilação corporal de escravos por seus senhores sem investigação judicial. Quem, sem ordem do tribunal, arrancar nariz, lábio, língua, orelha ou pé de um escravo, ou lhe tirar os olhos, ou mutilar qualquer outra parte do corpo, será condenado pelo bispo da diocese a 3 anos de exílio com penitência. Durante o exílio, os bens do condenado serão geridos por seus filhos ou, na falta destes, pelos parentes mais próximos designados pelo juiz, com obrigação de prestação de contas no retorno.\n\n*O Glorioso Flavius Recesvintus, Rei.*"
        },
        {
          number: "XIV",
          text: "**Qualquer Pessoa pode Trazer uma Acusação de Homicídio.**\n\nSe ninguém se dispuser a acusar, o juiz tem poder para prender o culpado assim que souber do crime. Esposas podem investigar a morte de maridos e vice-versa; filhos e parentes podem dar continuidade à acusação iniciada pelos pais falecidos. Se o juiz negligenciar o caso após ser notificado, pagará 250 *solidi* de multa.\n\n*Flavius Chintasvintus, Rei.*"
        },
        {
          number: "XV",
          text: "**Tanto Parentes quanto Estranhos têm o Direito de Acusar uma Pessoa de Homicídio.**\n\nPara que nenhum homicida escape, o direito de acusação cabe primeiro aos parentes. Se estes forem omissos ou lentos, qualquer estranho poderá processar o infrator. Quem fraudulentamente tentar defender ou escusar um homicida será compelido a pagar ao acusador o dobro do que recebeu corruptamente.\n\n*Flavius Chintasvintus, Rei.*"
        },
        {
          number: "XVI",
          text: "**Onde um Homicida se Refugia em uma Igreja.**\n\nNenhum criminoso pode ser retirado do altar sem o consentimento do padre. Se o padre for consultado e o crime for comprovadamente capital, ele mesmo expulsará o criminoso do coro para que seja preso.\n\nO refugiado não será morto, mas terá a visão totalmente destruída; ou será entregue aos parentes da vítima, que podem fazer o que quiserem, exceto privá-lo da vida — como advertência para que homens depravados saibam que punição os aguarda.\n\n*Flavius Chintasvintus, Rei.*"
        },
        {
          number: "XVII",
          text: "**Acerca dos Parricidas e da Disposição de seus Bens.**\n\nQuem matar deliberadamente seu pai, mãe, irmão, irmã ou qualquer parente próximo será preso e executado da mesma forma que matou a vítima. Se não tiver filhos, todos os seus bens irão para os herdeiros mais próximos da vítima. Se tiver filhos de outro casamento que não sejam cúmplices: metade dos bens vai para esses filhos e metade para os herdeiros da vítima. Se os filhos forem cúmplices, todos os bens vão para os herdeiros da vítima.\n\n*(Lei Antiga)*"
        },
        {
          number: "XVIII",
          text: "**Acerca daqueles que Matam Outros Relacionados por Sangue.**\n\nO assassinato de parentes próximos — cônjuges, pais, filhos, irmãos, sogros e afins — é punido com a morte. Se o culpado fugir para a Igreja, será entregue aos parentes da vítima para ser punido conforme desejarem, exceto com a morte. Todos os seus bens serão entregues aos herdeiros da vítima ou confiscados para a Coroa, caso não haja herdeiros próximos."
        },
        {
          number: "XIX",
          text: "**Onde um Parente de Sangue é Morto Acidentalmente por Outro.**\n\nSe o ato foi cometido em legítima defesa ou sob grave injúria, e isso for provado em tribunal por testemunhas idôneas, o acusado não perderá a vida nem os bens, nem será torturado.\n\n*Flavius Recesvintus, Rei.*"
        },
        {
          number: "XX",
          text: "**Onde um Escravo Mata Outro por Acidente.**\n\nO senhor do escravo agressor pagará ao outro senhor metade da soma legal devida em casos de morte acidental; se não quiser pagar, entregará o escravo culpado como compensação.\n\n*(Lei Antiga)*"
        },
        {
          number: "XXI",
          text: "**Acerca daqueles que Destroem suas Almas pelo Perjúrio.**\n\nQuem ocultar a verdade ou jurar falso em juízo receberá 100 chicotadas, será marcado como testemunha infame e proibido de testemunhar novamente; a quarta parte de seus bens será dada por ordem do juiz àquele a quem tentou fraudar."
        }
      ]
    }
  ]
};

export default codigoVisigoticLivro6;
