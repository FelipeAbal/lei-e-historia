import { HistoricalDocument } from '../../types';

export const decretoGracianoCausa23: HistoricalDocument = {
  id: 'decreto-graciano-causa-23',
  title: 'Decreto de Graciano — Causa 23',
  subtitle: 'Da Guerra Justa, da Punição e da Coação ao Bem',
  date: 'c. 1140',
  era: 'Idade Média',
  language: 'Latim',
  description: 'A seção mais influente do Decreto de Graciano, estruturada em torno de um caso hipotético sobre bispos heréticos. Em oito questões, Graciano sistematiza a doutrina da guerra justa, examina os limites da punição, discute a coação religiosa e define a relação entre poder eclesiástico e secular.',
  parentCollectionId: 'decreto-graciano',
  sections: [
    {
      id: 'introducao',
      title: 'Introdução — Causa 23',
      type: 'text',
      content: `A Causa 23 é, de longe, a seção mais influente do *Decretum* do ponto de vista da história política e do direito internacional. Estruturada em torno de um caso hipotético — bispos heréticos que perseguem católicos, levando o papa a ordenar uma resposta armada —, ela se desdobra em oito questões que percorrem alguns dos temas mais candentes do pensamento jurídico medieval: a licitude da guerra, o fundamento da punição, a relação entre coação e consciência, os limites do poder eclesiástico e secular, e o estatuto dos bens da Igreja.

As oito questões são as seguintes: (1) se militar é pecado; (2) o que é uma guerra justa; (3) se a injúria dos aliados pode ser repelida pelas armas; (4) se a vingança pode ser infligida; (5) se é pecado para o juiz matar réus; (6) se os maus podem ser coagidos ao bem; (7) se os hereges podem ser espoliados de seus bens; e (8) se bispos e clérigos podem portar armas.

A figura intelectual dominante ao longo de toda a Causa 23 é Agostinho de Hipona (354–430). É a partir de sua correspondência — especialmente as cartas a Bonifácio, Marcelino, Vicente e Donato — e de suas obras contra os donatistas que Graciano constrói a doutrina da *guerra justa* (*bellum iustum*): justa é a guerra decretada por autoridade legítima, para vingar injúrias ou recuperar bens indevidamente tomados. O que distingue a guerra da violência privada não é o ato em si, mas a intenção (*intentio*) e a autoridade (*auctoritas*) de quem a ordena.

Igualmente central é a discussão sobre coação e liberdade religiosa. A questão de se os hereges podem ser "coagidos ao bem" — respondida afirmativamente por Graciano, com base no argumento agostiniano do *compelle intrare* ("coage a entrar", Lc 14,23) — constitui um dos pilares teológico-jurídicos que autorizará a perseguição religiosa na Idade Média. O argumento, porém, é mais sofisticado do que parece à primeira vista: Agostinho não advoga a coação por si mesma, mas a entende como instrumento de correção medicinal, destinada a romper o hábito do erro e abrir espaço para a conversão genuína.

A Causa 23 é também o lugar onde Graciano trata da relação entre as duas espadas — a espiritual e a temporal. A conclusão da Questão 8, a última, é precisa: os sacerdotes não devem empunhar armas com as próprias mãos, mas podem e devem exortar os fiéis a defendê-la e clamar aos príncipes em seu auxílio. A espada material pertence ao poder secular; a espada espiritual, ao poder eclesiástico. Esta distinção, que Graciano herda de uma longa tradição e sistematiza com rigor inédito, estará no centro dos debates entre papado e império durante os séculos seguintes.

Por tudo isso, a Causa 23 não é apenas um documento de história do direito canônico: é uma janela privilegiada para compreender como o Ocidente medieval pensou a guerra, a punição, a autoridade e a relação entre fé e poder.`,
    },
    {
      id: 'caso-hipotetico',
      title: 'O Caso Hipotético',
      type: 'text',
      content: `*(C.23)* Certos bispos, com a plebe a si confiada, caíram em heresia; começaram a compelir os católicos circunvizinhos à heresia mediante ameaças e tormentos; comperto isto, o [papa] apostólico ordenou aos bispos católicos das regiões circunvizinhas, que haviam recebido do imperador a jurisdição civil, que defendessem os católicos dos heréticos e, pelos modos que pudessem, os forçassem a retornar à verdade da fé. Os bispos, recebendo estes mandatos Apostólicos, convocados os soldados, começaram a pugnar contra os heréticos abertamente e por insídias. Por fim, entregues alguns deles à morte, despojados outros de seus bens ou [dos bens] eclesiásticos, e outros reclusos em cárcere e ergástulo, retornaram coagidos à unidade da fé católica.

Aqui pergunta-se:

**Primeiro:** se militar é pecado?\n**Segundo:** que guerra seja justa, e de que modo as guerras justas eram geridas pelos filhos de Israel?\n**Terceiro:** se a injúria dos sócios [ou: aliados] deve ser propulsada pelas armas?\n**Quarto:** se a vingança [ou: punição] deve ser inferida?\n**Quinto:** se é pecado para o juiz ou para o ministro matar os réus?\n**Sexto:** se os maus devem ser coagidos ao bem?\n**Sétimo:** se os heréticos devem ser despojados de seus bens e dos bens da igreja, e aquele que possui o que foi tirado dos heréticos, se se diz possuir o alheio?\n**Oitavo:** se é lícito aos bispos ou a quaisquer clérigos mover armas por sua autoridade, ou por preceito do Apostólico, ou do imperador?`,
    },
    {
      id: 'questao-1',
      title: 'Questão 1 — Se militar é pecado',
      type: 'articles',
      articles: [
        {
          id: 'c23-q1-dac1',
          number: 'C.23 q.1 d.a.c.1',
          text: 'Que o militar pareça alheio à disciplina evangélica, parece poder provar-se por aqui: porque toda milícia foi instituída ou para propulsar a injúria, ou para inferir a vingança; a injúria, porém, repele-se ou da própria pessoa, ou do sócio, o que em ambos os casos é proibido pela lei evangélica. Pois quando se diz: "Se alguém te percutir em uma face, oferece-lhe também a outra," e novamente: "Quem te obrigar a mil passos, vai com ele dois mil;" item, quando o Apóstolo diz aos Romanos: "Não vos defendendo, caríssimos, mas dai lugar à ira:" o que mais se nos proíbe do que repelir a injúria da própria pessoa?\n\n(§ 1) Item, quando Pedro defendia o mestre com a espada, Cristo disse: "Converte a tua espada na bainha; ou pensas que não posso rogar a meu pai, e ele me exibirá mais de doze mil legiões de anjos?" enfim, assim como se lê sobre o bem-aventurado André, quando se fazia o concurso dos povos para que o arrancassem das mãos do juiz iníquo e o defendessem da injúria da morte, ele, ao contrário, ensinando a paciência por exemplo e por palavra, rogava-lhes que não impedissem o seu martírio; o que mais se nos admoesta senão tolerar pacientemente as injúrias dos sócios, assim como as próprias, nem concorrer às armas, mas pelo exemplo deles preparar o ânimo para sofrer coisas semelhantes?\n\n(§ 2) Item, quando nos Provérbios se diz: "A mim a vingança, e eu retribuirei, diz o Senhor;" item, quando no evangelho se diz: "Não julgueis, e não sereis julgados;" item, quando o pai de família diz aos servos que queriam colher o joio: "Deixai crescer ambos até a messe, e então direi aos ceifadores: colhei o joio e atai os feixes para queimar;"\n\n(§ 3) item, quando aquele rei, que fizera as núpcias para seu filho, enviados os seus exércitos, a saber, os dos anjos, se diz que destruirá os homicidas dos profetas e apóstolos, que chamados para as núpcias desprezaram vir crendo; item, quando Paulo apóstolo diz na epístola aos Romanos: "Não julgueis uns aos outros;" item: "Quem és tu, que julgas o servo alheio? Para seu senhor está de pé ou cai. Quer vivamos, quer morramos, somos do Senhor. Pois para isto Cristo morreu e ressuscitou, para que domine tanto os vivos como os mortos:" em todos estes o que mais se prescreve senão que a vingança dos delinquentes seja reservada ao exame divino? Portanto, como foi dito acima, parecendo a milícia instituída ou para propulsar a injúria, ou para inferir a vingança, e sendo ambos proibidos pela lei evangélica, aparece que militar é pecado.',
        },
        {
          id: 'c23-q1-dpc1',
          number: 'C.23 q.1 d.p.c.1',
          text: 'A estes assim se responde: os preceitos da paciência devem ser retidos não tanto pela ostentação do corpo, quanto pela preparação do coração. De onde Agostinho diz no sermão sobre o servo do centurião:',
        },
        {
          id: 'c23-q1-c2',
          number: 'C.23 q.1 c.2',
          text: '**Os preceitos da paciência devem ser observados pela virtude do ânimo, não pela ostentação do corpo**\n\nO homem justo e piedoso deve estar preparado para sustentar pacientemente a malícia daqueles que busca que se tornem bons, para que antes cresça o número dos bons, não para que, por par malícia, alguém se adicione ao número dos maus. Enfim, estes preceitos são mais para a preparação do coração do que para a obra que se faz em aberto, para que se mantenha no segredo do ânimo a paciência com a benevolência, mas no manifesto se faça aquilo que parece aproveitar àqueles a quem devemos querer bem.\n\n(§ 1) *Hinc* liquidamente mostra-se que o próprio Senhor Jesus, exemplo singular de paciência, quando era percutido na face, respondeu: "Se falei mal, exprobra o mal; se porém bem, por que me bates?" De modo algum, portanto, cumpriu o seu preceito, se intuirmos as palavras. Pois nem ofereceu ao percutor a outra parte, mas antes proibiu que fizesse e aumentasse a injúria. E contudo adviera preparado não só para ser percutido na face, mas verdadeiramente para ser também crucificado e morto por estes mesmos de quem padecia estas coisas, pelos quais dizia pendente na cruz: "Pai, perdoa-lhes, porque não sabem o que fazem".\n\n(§ 2) Nem Paulo apóstolo parece ter cumprido o preceito do Senhor e de seu mestre, onde também, percutido na face, disse ao príncipe dos sacerdotes: "Deus te percutirá, parede branqueada; sentas-te para me julgar segundo a lei, e contra a lei ordenas que eu seja percutido?" E quando pelos circunstantes era dito: "Fazes injúria ao príncipe dos sacerdotes?", rindo-se deles quis admoestar o que dissera, para que os que soubessem entendessem que já devia ser destruída, no advento de Cristo, a parede branqueada, isto é, a hipocrisia do sacerdócio dos Judeus.\n\n(§ 3) Devem ser feitas, porém, muitas coisas mesmo com os contrários à vontade, a serem punidos com uma certa benigna aspereza, cuja utilidade deve ser consultada antes que a vontade. Pois ao corrigir o filho, por mais aspereza que haja, nunca de fato se perde o amor paterno. Faça-se, contudo, o que ele não queira, e doa àquele que, mesmo contrário à vontade, parece dever ser sanado pela dor.\n\n(§ 4) E por isso, se esta república terrena cristã guardar os preceitos, nem as próprias guerras se gerirão sem benevolência, mas para que se consulte mais facilmente a sociedade dos vencidos pela piedade da justiça.\n\n(§ 5) Pois se a disciplina cristã culpasse todas as guerras, dir-se-ia no evangelho, aos que pedissem conselho de salvação, antes que lançassem fora as armas e se subtraíssem de todo da milícia. Foi-lhes dito, porém: "A ninguém extorquais; estai contentes com os vossos estipêndios". Aos quais prescreveu que devia bastar o próprio estipêndio, certamente não proibiu militar.',
        },
        {
          id: 'c23-q1-c3',
          number: 'C.23 q.1 c.3',
          text: '**Nas armas bélicas muitos podem agradar a Deus**\n\n*(Do mesmo, a Bonifácio)*\n\nNão queiras estimar que ninguém pode agradar a Deus que ministra nas armas bélicas. Nestas estava o santo Davi, a quem o Senhor deu tão grande testemunho. Nestas também muitíssimos justos daquele tempo. Nestas estava aquele centurião que disse ao Senhor: "Não sou digno de que entres sob o meu teto".\n\n(§ 1) Pensa, pois, isto primeiro quando te armares para a pugna, que a tua própria virtude corporal é dom de Deus. Pois assim pensarás, sobre o dom de Deus, em não fazer contra o Senhor. Pois a fé, quando é prometida, deve ser guardada mesmo ao inimigo contra quem se gere a guerra; quanto mais ao amigo pelo qual se pugna? Deve-se ter a paz na vontade, mas a guerra deve ser de necessidade, para que Deus liberte da necessidade e conserve na paz. Pois não se busca a paz para que se exerça a guerra, mas gere-se a guerra para que se adquira a paz. Sê, portanto, pacífico guerreando, para que aqueles que expugnas, vencendo-os, conduzas à utilidade da paz. *"Beati enim pacifici"* (diz o Senhor) *"porque serão chamados filhos de Deus"*.',
        },
        {
          id: 'c23-q1-c4',
          number: 'C.23 q.1 c.4',
          text: '**Quais coisas são repreensíveis por direito na guerra**\n\n*(Do mesmo, contra os Maniqueus)*\n\nO que se culpa na guerra? Porventura que os que hão de morrer morram em algum momento, para que sejam domados os que hão de viver em paz? Repreender isto é próprio dos tímidos, não dos religiosos. O desejo de causar dano, a crueldade de vingar, o ânimo implacado e implacável, a ferocidade de rebelar, a libido de dominar e se há coisas semelhantes, estas são as que nas guerras se culpam por direito. Para que estas mesmas guerras, na maioria das vezes, sejam também punidas por direito, assumem-se as guerras a serem geridas pelos bons contra as violências dos resistentes (quer por ordem de Deus, quer de algum império legítimo), quando se encontram naquela ordem das coisas humanas onde o próprio justo constringe-os ou a ordenar tal coisa ou a obedecer em tais coisas.\n\n(§ 1) Mas se a guerra é gerida pela cupidez humana, não fere aos santos, contra os quais ninguém tem poder, senão a que for dada do alto. Pois não há poder senão de Deus, quer ordenando, quer permitindo. Portanto o varão justo, se por forte militar mesmo sob um rei homem sacrílego, retamente pode guerrear por ordem dele se, observando a ordem em vez da paz, o que se lhe ordena ou é certo não ser contra o preceito de Deus, ou não é certo o que seja, de modo que talvez a iniquidade de imperar faça o rei réu, mas a ordem de servir mostre o soldado inocente.',
        },
        {
          id: 'c23-q1-c5',
          number: 'C.23 q.1 c.5',
          text: '**Militar não é pecado**\n\n*(Do mesmo, no livro sobre as palavras do Senhor, tratado XIX)*\n\nMilitar não é delito, mas militar por causa do saque é pecado; nem gerir a república é criminoso, mas agir na república para aumentar as riquezas parece ser condenável. Por isso, por uma certa providência, foram constituídos estipêndios para os que militam, para que, enquanto se busca o sustento, não se torne salteador.\n\n(§ 1) O próprio Senhor disse: "Dai o que é de Deus a Deus, e o que é de César a César". Portanto, o que César prescreve deve ser suportado, o que impera deve ser tolerado; mas torna-se intolerável quando os exatores acumulam a presa.\n\n(§ 2) "Os soldados interrogaram João, dizendo: O que faremos também nós? Disse-lhes: a ninguém extorquais, nem façais calúnia, mas estai contentes com os vossos estipêndios". Assim, porém, deve conhecer-se todo homem que milita. Pois a escritura não fala apenas destes que militam e são detidos na milícia armada, mas quem quer que use o cíngulo de sua milícia é adscrito como soldado de sua dignidade.',
        },
        {
          id: 'c23-q1-c6',
          number: 'C.23 q.1 c.6',
          text: '**As guerras são pacificadas quando são geridas para que os maus sejam coercidos e os bons sublevados**\n\n*(Do mesmo, sobre as diversas observações da Igreja)*\n\nEntre os verdadeiros cultores de Deus, as próprias guerras são pacificadas quando são geridas não por cupidez ou crueldade, mas pelo estudo da paz, para que os maus sejam coercidos e os bons sejam sublevados.',
        },
        {
          id: 'c23-q1-dpc7',
          number: 'C.23 q.1 d.p.c.7',
          text: 'De todos estes colige-se que militar não é pecado, e que os preceitos da paciência devem ser observados na preparação do coração, não na ostentação do corpo.',
        },
      ],
    },
    {
      id: 'questao-2',
      title: 'Questão 2 — O que seja a guerra justa',
      type: 'articles',
      articles: [
        {
          id: 'c23-q2-dac1',
          number: 'C.23 q.2 d.a.c.1',
          text: 'Sobre o que se pergunta, o que seja a guerra justa, Isidoro diz no livro XX das Etimologias:',
        },
        {
          id: 'c23-q2-c1',
          number: 'C.23 q.2 c.1',
          text: '**O que seja a guerra justa**\n\nJusta é a guerra que se gere por edito sobre a repetição das coisas, ou por causa de propulsar homens.\n\n(§ 1) O juiz foi assim dito porque dita o direito ao povo, ou porque decide pelo direito. Decidir pelo direito, porém, é julgar justamente. Pois não é juiz se não houver nele a justiça.',
        },
        {
          id: 'c23-q2-c2',
          number: 'C.23 q.2 c.2',
          text: '**Nada interessa para a justiça se alguém pugna abertamente ou por insídias**\n\n*(Item Agostinho no livro das questões)*\n\nO Senhor nosso Deus ordena a Josué que constitua para si insídias por trás, isto é, guerreiros insidiantes para insidiar os inimigos. *Hinc* somos admoestados de que isto não se faz injustamente por aqueles que gerem a guerra justa, de modo que o justo nada pense precipuamente nestas coisas, senão que assuma a guerra aquele a quem é *fas* [permitido por lei divina] guerrear. Pois não é *fas* para todos. Mas quando assumir a guerra justa, nada interessa para a justiça se pugna abertamente ou por insídias. Costumam, porém, definir-se como guerras justas aquelas que vingam as injúrias, assim como quando se deve atacar a nação e a cidade que negligenciou vingar o que foi feito improbadamente pelos seus, ou restituir o que foi tirado por injúrias. Mas também este gênero de guerra é sem dúvida justo, que Deus ordena, o qual sabe o que deve ser feito a cada um; em cuja guerra o condutor do exército ou o próprio povo deve ser julgado não tanto como autor da guerra, mas como ministro.',
        },
        {
          id: 'c23-q2-dpc2',
          number: 'C.23 q.2 d.p.c.2',
          text: 'Sendo, portanto, justa a guerra que se gere por edito, ou pela qual se vingam as injúrias, pergunta-se como as guerras justas eram geridas pelos filhos de Israel. Sobre estas assim escreve Agostinho nas questões de Números:',
        },
        {
          id: 'c23-q2-c3',
          number: 'C.23 q.2 c.3',
          text: '**O trânsito inócuo era negado aos filhos de Israel, e por isso eram geridas guerras justas**\n\nDeve-se notar certamente de que modo eram geridas as guerras justas pelos filhos de Israel contra os Amorreus. Pois negava-se o trânsito inócuo, o qual devia estar aberto pelo direito equíssimo da sociedade humana.',
        },
      ],
    },
    {
      id: 'questao-3',
      title: 'Questão 3 — Se a injúria dos sócios deve ser propulsada pelas armas',
      type: 'articles',
      articles: [
        {
          id: 'c23-q3-dac1',
          number: 'C.23 q.3 d.a.c.1',
          text: 'Que verdadeiramente a injúria dos sócios não deva ser propulsada pelas armas, prova-se por exemplos e autoridades. Pois o Senhor, quando era buscado por Herodes para ser morto, não buscou para si o patrocínio das armas, embora por oculto instinto pudesse ter convertido as mãos dos Judeus contra ele, mas fugindo para o Egito lá se ocultou por um septênio. Assim também, quando era buscado pelos Judeus com pedras, escondeu-se e saiu do templo. Assim também, quando era conduzido à cruz, não quis comover contra os anciãos dos Judeus a turba que há pouco viera ao seu encontro e o recebera com palmas e louvores. Assim também interrogado por Pilatos se era rei, disse: "O meu reino não é deste mundo. Pois se fosse deste mundo, os meus ministros certamente lutariam para que eu não fosse entregue aos Judeus," insinuando que pertencem ao reino deste mundo aqueles que, pelo auxílio das forças humanas, não pelo presídio divino, contendem em se proteger da injúria iminente.\n\n(§ 1) Item, assim como se lê em Isaías, o Egito foi devastado por Nabucodonosor porque prometeu aos filhos de Israel o auxílio de proteção e defesa contra os Assírios e Caldeus.\n\n(§ 2) Mas muitas coisas são prestadas corretamente as quais contudo não são buscadas pelo direito. Pois o bom não buscaria corretamente a vingança da injúria porque retribuiria mal por mal; a qual vingança, contudo, o juiz retamente infligiria, nem retribuiria senão o bem pelo mal.',
        },
        {
          id: 'c23-q3-c1',
          number: 'C.23 q.3 c.1',
          text: '**Quantas sejam as diferenças da retribuição**\n\nHá seis diferenças: retribuir bens por males, não retribuir males por males; estas são dos bons, e a primeira é a melhor. Não retribuir bens por bens, retribuir males por bens; estas duas são dos maus, e a posterior é a pior. Retribuir bens por bens, e males por males; estas duas são dos medíocres: a primeira é próxima dos bons, o que Cristo não argui, mas diz que convém fazer mais, porque também os étnicos fazem isto; a posterior é próxima dos maus, contudo convém também aos bons. De onde também a lei estabeleceu o modo da vingança: "Olho por olho". A qual, se se pode dizer, é a justiça dos injustos, não porque seja iníqua a vingança que a lei estabeleceu, mas porque é viciosa a libido de vingar, a qual pertence mais ao juiz decidir entre os homens do que o homem bom desejar para si.',
        },
        {
          id: 'c23-q3-dpc1',
          number: 'C.23 q.3 d.p.c.1',
          text: 'Item, de alguém capturado exigem-se injustamente as suas coisas, contudo para remir a vida são oferecidas justamente. Item, vasos sagrados são exigidos injustamente por algum bárbaro, contudo para a redenção dos cativos são prestados justamente. Assim também a propulsação da injúria, embora seja postulada injustamente, contudo é prestada justamente, conquanto também a própria postulação nem por toda parte seja provada injusta.\n\n(§ 1) Pois uma coisa é propulsar a injúria para que se lhe seja permitido viver voluptuosamente, outra para que se possa vacar livremente à utilidade de outros. Assim também uma coisa é postular o auxílio do homem como de um ministro da justiça, para que a má vontade dos adversantes careça de efeito pelo seu ministério, e a vontade dos bons sorteie efeito pelo seu sufrágio; outra é transferir a sua esperança de Deus para o homem. *Hinc* também a igreja é admoestada a buscar auxílio do imperador para sua defesa.',
        },
        {
          id: 'c23-q3-c2',
          number: 'C.23 q.3 c.2',
          text: '**A Igreja deve postular auxílio do imperador**\n\nMaximiano, bispo de Vaga, buscou auxílio do imperador Cristão contra os inimigos da igreja, não tanto por causa de se vingar, quanto para defender a igreja a si confiada. O que se tivesse omitido, não devia ser louvada a sua paciência, mas a sua negligência merecidamente culpada. Pois nem o apóstolo Paulo consultou pela sua vida transitória, mas pela igreja de Deus, quando contra aqueles que haviam conspirado para matá-lo, fez com que o conselho deles fosse denunciado ao tribuno.',
        },
        {
          id: 'c23-q3-c3',
          number: 'C.23 q.3 c.3',
          text: '**Os católicos podem postular defesa das potestades ordenadas contra os hereges**\n\n*(Item Agostinho a Emerito)*\n\nOs nossos pedem às potestades ordenadas a vingança contra as ilícitas e privadas violências dos vossos — as quais também vós, que lá as praticais, deplorais e gemeis — não para que os persigam, mas para que se defendam.',
        },
        {
          id: 'c23-q3-c4',
          number: 'C.23 q.3 c.4',
          text: '**Quanto difere a perseguição dos hereges da dos católicos**\n\n*(Item do mesmo, contra Petiliano)*\n\nPelo corpo de Cristo, contra vós se enfurecem e resistem quantos na igreja têm o mesmo ânimo que então tinha Pedro, quando desembainhou o ferro pelo nome de Cristo. Mas há grande diferença entre a vossa perseguição e a destes. Vós sois semelhantes ao servo do sacerdote, porque, servindo aos vossos príncipes, vos armais contra a igreja católica, isto é, contra o corpo de Cristo. Estes, porém, são tais qual Pedro então era, que pelo corpo de Cristo, isto é, pela igreja, também corporalmente pugnou.',
        },
        {
          id: 'c23-q3-c5',
          number: 'C.23 q.3 c.5',
          text: '**É pleno de justiça quem defende a pátria da guerra dos bárbaros**\n\n*(Item Ambrósio, livro I, Dos Ofícios)*\n\nA fortaleza que defende a pátria dos bárbaros pela guerra, ou em casa protege os fracos, ou defende os sócios dos ladrões, é plena de justiça.',
        },
        {
          id: 'c23-q3-c6',
          number: 'C.23 q.3 c.6',
          text: '**Aproveita ao ladrão ou pirata quem debilita os seus membros**\n\n*(Item Jerônimo, sobre Sofonias)*\n\nSe alguém enfraquece e torna débeis a fortaleza do ladrão ou do pirata, aproveita a eles a sua própria fraqueza. Pois os membros debilitados, dos quais antes não faziam bom uso, cessarão da má obra.',
        },
        {
          id: 'c23-q3-c7',
          number: 'C.23 q.3 c.7',
          text: '**Quem não repele a injúria do sócio é semelhante a quem a faz**\n\n*(Item Ambrósio, livro I, Dos Ofícios)*\n\nA lei da virtude não está em infligir, mas em repelir a injúria. Pois quem não repele do sócio a injúria, podendo fazê-lo, está tão em vício quanto aquele que a faz.',
        },
        {
          id: 'c23-q3-c8',
          number: 'C.23 q.3 c.8',
          text: '**Favorece a impiedade dos maus quem cessa de lhes obstar**\n\n*(Item Anastásio e Dâmaso)*\n\nQuem pode obstar e perturbar os perversos, e não o faz, nada mais é do que favorecer a impiedade deles. Nem está isento do escrúpulo de oculta cumplicidade quem cessa de obstar ao manifesto delito.',
        },
        {
          id: 'c23-q3-c9',
          number: 'C.23 q.3 c.9',
          text: '**Os que desprezam os mandamentos divinos sejam coercidos com severas punições**\n\n*(Item Calixto)*\n\nÉ justo que os que desprezam os mandamentos divinos e se mostram desobedientes às ordens paternas sejam corrigidos com punições mais severas, para que os demais temam cometer tais coisas, e Deus se alegre com a concórdia fraterna, e todos tomem exemplo de severidade e bondade.',
        },
        {
          id: 'c23-q3-dpc10',
          number: 'C.23 q.3 d.p.c.10',
          text: 'Eis que às vezes se deve obstar aos perversos, e a injúria dos sócios deve ser repelida pelas armas, para que aos maus, retirada a faculdade de delinquir, se preste benefício, e aos bons se ministre a desejada faculdade de livremente prover à igreja. Quem não o faz, consente.',
        },
        {
          id: 'c23-q3-c11',
          number: 'C.23 q.3 c.11',
          text: '**Não estão isentos de crime os que não libertam os que podem libertar do feito**\n\nO Profeta mostra que nem aqueles estão isentos de crime que permitiram aos príncipes matar Cristo, quando pela multidão eram temidos e podiam libertá-los do feito e a si mesmos do consentimento. Quem cessa de obstar, podendo fazê-lo, consente.',
        },
      ],
    },
    {
      id: 'questao-4',
      title: 'Questão 4 — Se a vingança deve ser inferida',
      type: 'articles',
      articles: [
        {
          id: 'c23-q4-dac1',
          number: 'C.23 q.4 d.a.c.1',
          text: 'Que a vingança não deva ser inferida prova-se de muitos modos. Pois os maus devem ser tolerados, não rejeitados; devem ser feridos com repreensão, não expulsos corporalmente.',
        },
        {
          id: 'c23-q4-c1',
          number: 'C.23 q.4 c.1',
          text: '**De que modo os maus devem ser tolerados, e de que modo se deve afastar deles**\n\nOs maus devem certamente ser tolerados pela paz, nem se deve afastar deles corporalmente; mas sair espiritualmente é fazer o que pertence à correção dos maus, tanto quanto é lícito conforme o grau de cada um, salva a paz; desagradar é não tocar. Pois os profetas que diziam isto não abandonaram o seu povo, mas habitavam entre aqueles a quem repreendiam, entravam com eles no mesmo templo, celebravam os mesmos sacramentos. Portanto, sair é não poupar a boca, e não tocar o imundo é não consentir com a vontade.',
        },
        {
          id: 'c23-q4-c2',
          number: 'C.23 q.4 c.2',
          text: '**Que os maus devem ser tolerados pelos bons**\n\n*(Do mesmo)*\n\nTu, que és bom, tolera o mau. Pois também Cristo tolerou Judas, sabendo que era ladrão, e o enviou para pregar, e lhe deu a eucaristia juntamente com os outros.',
        },
        {
          id: 'c23-q4-c3',
          number: 'C.23 q.4 c.3',
          text: '**Pela paz da Igreja os maus devem ser tolerados**\n\n*(Do mesmo, sobre João)*\n\nQue quis, pois, nosso Senhor Jesus Cristo admoestar à sua igreja, irmãos meus, quando quis ter um perdido entre doze, senão que tolerássemos os maus, para que não dividíssemos o corpo de Cristo?',
        },
        {
          id: 'c23-q4-c4',
          number: 'C.23 q.4 c.4',
          text: '**Do mesmo assunto**\n\n*(Do mesmo)*\n\nEis, dizem, que o Profeta diz: "Afastai-vos, saí dali, e não toqueis o imundo". Como, pois, toleraremos os maus pela paz, se somos mandados sair e afastar-nos deles para não tocar o imundo? Nós entendemos espiritualmente esta saída; eles, corporalmente. Pois o que é tocar o imundo senão consentir nos pecados? E o que é sair dali senão fazer o que pertence à correção dos maus, tanto quanto, conforme o grau e a pessoa de cada um, pode ser feito, salva a paz?',
        },
        {
          id: 'c23-q4-c5',
          number: 'C.23 q.4 c.5',
          text: '**É pacífico quem corrige o que pode, ou exclui de si o que não pode**\n\n*(Do mesmo, no segundo livro contra Parmeniano, c. 1)*\n\nQuem quer que ou corrige argumentando o que pode, ou exclui com o vínculo salvo da paz o que não pode corrigir, ou com a equidade reprova o que não pode excluir com o vínculo salvo da paz, ou suporta com firmeza — este é pacífico, e desta maldição, pela qual a escritura diz: "Ai daqueles que dizem que o mau é bom, e que o bom é mau," é totalmente livre, plenamente seguro, inteiramente alheio.',
        },
        {
          id: 'c23-q4-c6',
          number: 'C.23 q.4 c.6',
          text: '**O que é associar-se aos maus**\n\n*(Do mesmo)*\n\nAssim, claramente, alguém se associa quando comete algo de mau com eles, ou favorece aos que cometem. Se, porém, não faz nenhum dos dois, de modo algum se associa. Além disso, se adicionar um terceiro ponto, para que não seja preguiçoso em corrigir, mas ou o justo corrija em misericórdia e argua, ou também, se exerce tal função e a razão de conservar a paz o permite, argua os pecadores diante de todos para que os demais temam, e seja removido o pecador ou de algum grau de honra, ou da própria comunhão dos sacramentos, e faça todas estas coisas com amor de corrigir, não com ódio de perseguir.',
        },
        {
          id: 'c23-q4-c7',
          number: 'C.23 q.4 c.7',
          text: '**Os pecados alheios na Igreja não prejudicam a ninguém**\n\n*(Do mesmo, na epístola do Concílio aos Donatistas)*\n\nQuem quer que nesta santa igreja viva bem, em nada lhe prejudicam os pecados alheios; porque nela cada um levará o seu próprio fardo, como diz o Apóstolo.\n\n(§ 1) Portanto, a comunhão dos maus não mancha ninguém pela participação nos sacramentos, mas sim o consenso com os seus atos.',
        },
        {
          id: 'c23-q4-c8',
          number: 'C.23 q.4 c.8',
          text: '**O mau não te mancha se não consentes com ele, mas o redargues**\n\n*(Do mesmo, no sermão sobre as palavras do Evangelho)*\n\nDesuni-vos dos maus sempre pelo coração; no corpo, por algum tempo, uni-vos com cautela.\n\n(§ 1) Por dois modos o mau não te mancha: se não consentes e se o redargues. Isto é não comungar: não consentir; comunga-se, decerto, quando ao fato dele se junta o consórcio da vontade ou da aprovação.\n\n(§ 2) Não sejais, portanto, nem consentidores com os maus, para que os aproveis; nem negligentes, para que não os arguais; nem soberbos, para que os arguais insultando-os.',
        },
        {
          id: 'c23-q4-c10',
          number: 'C.23 q.4 c.10',
          text: '**Os atos dos nocivos não mancham os inocentes que não podem ser por eles cridos**\n\n*(Do mesmo, na epístola a Vicente)*\n\nQuão grande é o crime de separar-se da comunhão destes inocentes? Pois também os atos dos nocivos, que não podem ser demonstrados aos inocentes, ou cridos pelos inocentes, não mancham a ninguém, se, por causa dos inocentes, são suportados mesmo sendo conhecidos.',
        },
        {
          id: 'c23-q4-dpc12',
          number: 'C.23 q.4 d.p.c.12',
          text: 'Eis que os maus devem ser tolerados, e devem ser punidos não com vingança corporal, mas espiritual.',
        },
        {
          id: 'c23-q4-c13',
          number: 'C.23 q.4 c.13',
          text: '**O espiritual não persegue o carnal, mas o contrário**\n\n*(Hinc também diz Jerônimo)*\n\nAquele que nasceu segundo a carne perseguia o espiritual: mas nunca o espiritual persegue o carnal, antes lhe perdoa como a um irmão rústico. Sabe que ele pode progredir com o tempo, e se em algum momento vir o filho da Egípcia irado, recordar-se-á de um só pai.',
        },
        {
          id: 'c23-q4-c14',
          number: 'C.23 q.4 c.14',
          text: '**Os bons nunca podem ser totalmente separados dos maus nesta vida**\n\n*(Item Agostinho, no livro sobre o batismo)*\n\nQuão grande é o tumor da arrogância, quão grande o esquecimento da humildade e da mansidão e quão grande a jactância da arrogância, para que alguém creia que pode fazer o que o Senhor nem aos Apóstolos concedeu: a saber, pensar que pode discernir o joio do trigo?',
        },
        {
          id: 'c23-q4-c15',
          number: 'C.23 q.4 c.15',
          text: '**A presente Igreja recebe ao mesmo tempo bons e maus**\n\n*(Item Gregório)*\n\nEsta vida, porém, que está situada entre o céu e o inferno, assim como subsiste no meio, assim recebe em comum os cidadãos de ambas as partes: os quais, contudo, a santa igreja recebe sem distinção e depois discernirá na saída.',
        },
        {
          id: 'c23-q4-dpc15',
          number: 'C.23 q.4 d.p.c.15',
          text: 'De todos estes colige-se que a vingança dos maus deve ser reservada a Deus, e não devem ser punidos corporalmente, mas convidados à correção pela frequente admoestação e pelo benefício da caridade.\n\n(§ 1) Na lei do antigo testamento foi estabelecida a pena corporal; na lei do evangelho, porém, a todo pecador se promete o perdão pela penitência.',
        },
        {
          id: 'c23-q4-c16',
          number: 'C.23 q.4 c.16',
          text: '**Na lei era permitido a cada um amar o amigo e odiar o inimigo**\n\nComo na lei está escrito: "Amarás o teu amigo e odiarás o teu inimigo", fora dada então licença aos justos para que comprimissem os seus adversários e de Deus com quanta virtude pudessem, e os ferissem pelo direito da espada. O que no novo testamento é sem dúvida restringido, quando a verdade prega por si mesma, dizendo: "Amai os vossos inimigos, fazei bem aos que vos odeiam".',
        },
        {
          id: 'c23-q4-dpc16',
          number: 'C.23 q.4 d.p.c.16',
          text: 'A estas coisas responde-se assim: Há certas coisas que devem ser corrigidas apenas pela admoestação salutar, não devem ser punidas com flagelos corporais; mas a vingança delas deve ser reservada apenas ao exame divino, quando não podemos exercer a disciplina sobre os delinquentes, ou porque não são de nossa jurisdição, ou porque os crimes deles, embora nos sejam conhecidos, contudo não podem ser provados por indícios manifestos.',
        },
        {
          id: 'c23-q4-c17',
          number: 'C.23 q.4 c.17',
          text: '**Os colóquios e convívios dos infiéis não devem ser evitados**\n\nNão podemos lucrar os infiéis para Cristo se evitamos o colóquio e o convívio deles. De onde também o Senhor comeu e bebeu com publicanos e pecadores. Mas nestes que estão dentro, isto é, os infiéis [no sentido de pecadores internos], a podridão deve ser cortada.',
        },
        {
          id: 'c23-q4-c18',
          number: 'C.23 q.4 c.18',
          text: '**Certos males devem ser punidos, e certos tolerados**\n\nAlguns, ao perceberem que a commixtão de bons e maus na igreja foi demonstrada ou predita, e ao aprenderem os preceitos da paciência — que nos tornam firmíssimos, para que, mesmo se parecerem haver joios na igreja, contudo não se impeça nem a nossa fé, nem a nossa caridade —, pensam que a disciplina da igreja deve ser destituída. Nós, porém, julgamos pertencer à sã doutrina moderar a vida e a sentença por ambos os testemunhos, de modo que toleremos os cães na igreja por causa da paz da igreja, e não demos aos cães o que é santo onde a paz da igreja está segura.',
        },
        {
          id: 'c23-q4-c24',
          number: 'C.23 q.4 c.24',
          text: '**Nem sempre se deve exercer a vingança contra os que pecam**\n\nA própria piedade, verdade e caridade não nos permite aceitar contra Ceciliano o testemunho daqueles homens que não vemos na igreja.\n\n(§ 1) O médico é molesto ao frenético que delira, e o pai ao filho indisciplinado: aquele ligando, este batendo, mas ambos amando. Se, porém, os negligenciarem e permitirem que pereçam, esta falsa mansidão é antes crueldade.\n\n(§ 2) Pelo que, se pela potestade que a igreja recebeu por dom divino no tempo em que devia, por causa da religião e da fé, estes que são encontrados nos caminhos e cercas, isto é, nas heresias e cismas, são coagidos a entrar, não repreendam porque são coagidos, mas atendam para onde são coagidos.',
        },
        {
          id: 'c23-q4-c25',
          number: 'C.23 q.4 c.25',
          text: '**Pela severidade medicinal os maus são coagidos ao bem**\n\n*(Do mesmo, a Fausto)*\n\nO que fará a medicina da Igreja, buscando a salvação de todos com caridade materna, fervilhando como que entre frenéticos e letárgicos? Acaso deve ou pode desprezar, ou desistir? Se for necessário, seja molesta a ambos, ela que de nenhum é inimiga. Pois os frenéticos não querem ser amarrados, e os letárgicos não querem ser despertados, mas persevera a diligência da caridade em amarrar o frenético, em estimular o letárgico, e em amar a ambos. Ambos se ofendem, mas ambos são amados. Ambos, enquanto estão enfermos, indignam-se por serem molestados, mas ambos, uma vez curados, congratulam-se.',
        },
        {
          id: 'c23-q4-dpc25',
          number: 'C.23 q.4 d.p.c.25',
          text: 'Eis que os crimes devem ser punidos quando podem ser feridos salva a paz da igreja; no que, contudo, deve-se aplicar discrição. Pois, às vezes, a multidão dos delinquentes deve ser aguardada por muito tempo pela paciência para a penitência; às vezes, deve-se punir em poucos, para que pelo exemplo deles os demais se atemorizem e sejam provocados à penitência.',
        },
        {
          id: 'c23-q4-c26',
          number: 'C.23 q.4 c.26',
          text: '**Nem sempre se deve exercer vingança contra os que pecam**\n\n*(Item Ambrósio)*\n\nPelo fato de Cristo ter increpado os discípulos, porque desejavam que o fogo descesse sobre aqueles que não o haviam recebido, mostra-se-nos que nem sempre se deve vingar contra os que pecam, porque às vezes mais aproveita a clemência a ti para a paciência, do que ao lapso [caído] para a correção.',
        },
        {
          id: 'c23-q4-c31',
          number: 'C.23 q.4 c.31',
          text: '**Não cabe ao juiz condenar sem acusador**\n\nSe alguém não tem o poder de expulsar quem sabe ser réu, ou não vale provar, está imune; e não cabe ao juiz condenar sem acusador, assim como Cristo não expulsou Judas.',
        },
        {
          id: 'c23-q4-c33',
          number: 'C.23 q.4 c.33',
          text: '**Sobre a misericórdia justa e injusta**\n\nExiste uma misericórdia injusta. Enfim, na lei está escrito sobre alguém: "Não terás misericórdia dele". Assim, se alguém, movido pelos filhos que suplicam e infletido pelas lágrimas da esposa de um ladrão, julga que deve absolver aquele a quem ainda aspira o afeto de ladroar, não entregará os inocentes à morte aquele que liberta quem cogita a morte de muitos? Na própria igreja, onde máxime alguém deve ter misericórdia, deve ser mantida maximamente a forma da justiça, para que ninguém, abstraído do consórcio da criminação, extorque pela facilidade do sacerdote a comunhão que deve postular por muitíssimos tempos. Pois a facilidade do perdão tribui incentivo ao delinquir.',
        },
        {
          id: 'c23-q4-c34',
          number: 'C.23 q.4 c.34',
          text: '**Não devemos ter misericórdia do pobre em causa má**\n\n*(Item Agostinho, no livro dos Salmos)*\n\nPara que, perdida a faculdade de julgar, não sejas misericordioso com o pobre em causa má; se poupas a sua sacola, feres o coração, e o tornas tanto mais iníquo quanto ele vê o justo favorecê-lo.',
        },
        {
          id: 'c23-q4-c35',
          number: 'C.23 q.4 c.35',
          text: '**Deve-se ter misericórdia do homem, deve-se irar contra o pecador**\n\n*(Do mesmo)*\n\nQuando dizemos estes dois nomes — homem, pecador —, não são ditos decerto em vão. Porque é pecador, corrige; e porque é homem, apieda-te; nem libertarás de modo algum o homem, a menos que tenhas perseguido o pecador. Toda a disciplina vigia sobre este ofício, conforme é apta e acomodada a cada regente, não só ao bispo que rege o seu povo, mas também ao pobre que rege a sua casa, ao rico que rege a sua família, ao marido que rege a sua esposa, ao pai que rege a sua prole, ao juiz que rege a sua província, ao rei que rege a sua gente.',
        },
        {
          id: 'c23-q4-c36',
          number: 'C.23 q.4 c.36',
          text: '**Quem se diz tomar a espada**\n\nToma a espada aquele que, sem que nenhuma potestade superior e legítima o mande ou conceda, arma-se para o sangue de alguém.',
        },
        {
          id: 'c23-q4-c37',
          number: 'C.23 q.4 c.37',
          text: '**Pelo ofício da potestade os inquietos são corrigidos utilmente**\n\nSão excessivamente inquietos aqueles que me parece não ser inútil serem coibidos e corrigidos pelas potestades ordenadas por Deus. Pois já nos alegramos pela correção de muitos.\n\n(§ 1) Se alguém visse o seu inimigo, tornado frenético por febres perigosas, correr para o precipício, não retribuiria então antes mal por mal se permitisse que ele fosse assim, do que se o amarrasse para ser corrigido e curado?\n\n(§ 4) Pensas que ninguém deve ser coagido à justiça, quando lês que o pai de família disse aos servos: "Coagi a entrar todos os que encontrardes"; quando lês também que o próprio primeiro Saulo, depois Paulo, foi compelido por grande violência de Cristo que o coagia a conhecer e manter a verdade.',
        },
        {
          id: 'c23-q4-c38',
          number: 'C.23 q.4 c.38',
          text: '**Os hereges devem ser trazidos à salvação mesmo contra a vontade**\n\n*(Item Donato Presbítero)*\n\nDesagrada-te que sejas trazido à salvação de Deus, quando, contudo, trouxeste muitos dos nossos à perdição? Pois o que queremos senão que sejas compreendido, e apresentado, e salvo, para que não pereças?\n\n(§ 1) Dizes que o Senhor deu o livre arbítrio, por isso o homem não deve ser coagido ao bem. Por que, então, aqueles de quem falamos acima são coagidos ao bem? Pois se a má vontade devesse ser sempre permitida à sua liberdade, por que os Israelitas recusantes e murmurantes eram proibidos do mal por flagelos tão duros, e compelidos à terra da promissão?',
        },
        {
          id: 'c23-q4-c39',
          number: 'C.23 q.4 c.39',
          text: '**Os hereges sofrem utilmente o que os católicos utilmente inferem**\n\n*(Do mesmo, sobre João)*\n\nQuando Deus quer concitar as potestades contra os heréticos, contra os cismáticos, contra os dissipadores da igreja, contra os que sopram contra Cristo, contra os blasfemadores do batismo de Cristo, não se admirem. Porque Deus clama para que Agar seja açoitada por Sara, reconheça-se Agar, ponha a cerviz.',
        },
        {
          id: 'c23-q4-c40',
          number: 'C.23 q.4 c.40',
          text: '**A Igreja persegue os hereges pela razão**\n\n*(Do mesmo, contra Petiliano)*\n\nQuem peca, não peca pela autoridade da lei, mas contra a autoridade da lei. Porque, de fato, interrogas qual seja a razão de perseguir, por minha vez te interrogo de quem seja a voz no Salmo que diz: "Ao que detraia o seu próximo secretamente, a este eu perseguia". Busca, portanto, a causa e o modo da perseguição, e não repreendas genericamente os perseguidores com tanta imperícia dos males. Pois não vos perseguimos senão do modo como a verdade persegue a falsidade.',
        },
        {
          id: 'c23-q4-c42',
          number: 'C.23 q.4 c.42',
          text: '**A Igreja persegue os maus justamente**\n\n*(Do mesmo, ao Conde Bonifácio)*\n\nSe a verdadeira Igreja é aquela que sofre perseguição, não a que a faz, perguntem ao Apóstolo qual igreja Sara significava quando perseguia a escrava. Se, porém, discutirmos melhor, mais aquela perseguia a Sara pela soberba, do que Sara pela coerção. Pois aquela fazia injúria à senhora; esta impunha disciplina à soberba.\n\nPortanto, se queremos dizer ou reconhecer a verdade, há a perseguição injusta, que os ímpios fazem contra a Igreja de Cristo; e há a perseguição justa, que a Igreja de Cristo faz contra os ímpios. Esta persegue amando, aquela odiando; esta para corrigir, aquela para subverter; esta para revogar do erro, aquela para precipitar no erro.',
        },
        {
          id: 'c23-q4-c43',
          number: 'C.23 q.4 c.43',
          text: '**Pelo exemplo de Cristo, os maus devem ser coagidos ao bem**\n\n*(Do mesmo)*\n\nQuem pode amar-nos mais do que Cristo, que deu a sua vida pelas suas ovelhas? E, tendo chamado Pedro e os outros apóstolos apenas pela palavra, a Paulo — que depois seria o grande edificador da sua Igreja, mas antes fora um horrendo devastador —, não só o deteve pela voz, mas também o prostrou pelo poder. É admirável, porém, como aquele que entrou no Evangelho coagido pela pena do corpo, trabalhou no Evangelho mais do que todos aqueles que foram chamados apenas pela palavra. Por que, então, a Igreja não haveria de coagir os filhos perdidos para que voltassem?',
        },
        {
          id: 'c23-q4-c44',
          number: 'C.23 q.4 c.44',
          text: '**Moisés não fustigou o povo por crueldade, mas por amor**\n\n*(Do mesmo, contra Fausto)*\n\nQue coisa cruel ordenou ou fez Moisés, quando, zelando pela santidade do povo a si confiado e desejando-o submetido ao vivo e único Deus verdadeiro, após saber que haviam caído na fabricação e culto de um ídolo, vingou-se em poucos deles com a espada? Aqueles a quem o próprio Deus, a quem haviam ofendido, quisera que fossem feridos por um alto e secreto juízo, feriu-os logo, e no presente aterrorizou-os salutarmente, e sancionou a disciplina para o futuro. Pois que ele fez o que fez sem nenhuma crueldade, mas com grande amor, quem não o reconhecerá nas suas palavras, orando pelos pecados deles e dizendo: "Se lhes perdoas o pecado, perdoa-o; senão, risca-me do Teu livro".',
        },
        {
          id: 'c23-q4-c50',
          number: 'C.23 q.4 c.50',
          text: '**Deus é provocado à ira quando se adia a punição dos pecados**\n\nSe adiarmos perseguir ou vingar aquelas coisas pelas quais Deus é veementemente ofendido, provocamos decerto a paciência da divindade à ira.',
        },
        {
          id: 'c23-q4-c51',
          number: 'C.23 q.4 c.51',
          text: '**A vingança que vale para a correção não deve ser proibida**\n\n*(Item Agostinho sobre o Sermão do Senhor no Monte, livro I)*\n\nNão se proíbe aquela vingança que vale para a correção, a qual pertence também à misericórdia, nem impede aquele propósito pelo qual cada um está preparado para sofrer mais coisas daquele que deseja ver corrigido. Mas para aplicar esta vingança não é idôneo senão aquele que tiver superado pela mansidão do amor o ódio com que costumam arder aqueles que desejam vingar-se.',
        },
        {
          id: 'c23-q4-c52',
          number: 'C.23 q.4 c.52',
          text: '**O cristão deve perseguir aquilo que é contrário à verdade**\n\n*(Item Agostinho contra Crescônio Gramático, livro I)*\n\nQualquer cristão que persegue um iníquo é inimigo de Cristo. Dizes a verdade, se ele não persegue nele aquilo que é inimigo de Cristo. Pois nem o senhor no servo, nem o pai no filho, nem o marido na esposa, sendo ambos cristãos, devem deixar de perseguir os vícios contrários à verdade cristã.',
        },
        {
          id: 'c23-q4-c53',
          number: 'C.23 q.4 c.53',
          text: '**De que modo o homem deve amar o próximo como a si mesmo**\n\n*(Item Agostinho a Macedônio)*\n\nDeve o homem amar o próximo como a si mesmo, para que conduza ao culto [de Deus] o homem que puder, quer pela consolação da beneficência, quer pela informação da doutrina, quer pela coerção da disciplina.',
        },
        {
          id: 'c23-q4-c54',
          number: 'C.23 q.4 c.54',
          text: '**Os maus devem ser proibidos do mal e coagidos ao bem**\n\n*(Item Agostinho ao Presbítero Donato, epístola CCIV)*\n\nAqueles que são amados não devem ser permitidos à sua vontade ímpia e cruel, mas onde se dá o poder, devem ser tanto proibidos do mal quanto coagidos ao bem. Pois se a vontade má devesse ser sempre permitida à sua liberdade, por que os israelitas recusantes e murmurantes eram proibidos do mal por flagelos tão duros e compelidos à terra da promessa?',
        },
        {
          id: 'c23-q4-dpc54',
          number: 'C.23 q.4 d.p.c.54',
          text: 'De tudo isto colhe-se que a vingança deve ser aplicada não pelo amor da própria vingança, mas pelo zelo da justiça; não para que o ódio seja exercido, mas para que a perversidade seja corrigida. Mas como a vingança às vezes é aplicada por danos materiais, às vezes por flagelos, e às vezes até pela morte: pergunta-se se é pecado para o juiz ou ministro entregar os réus à morte?',
        },
      ],
    },
    {
      id: 'questao-5',
      title: 'Questão 5 — Se é pecado para o juiz matar os réus',
      type: 'articles',
      articles: [
        {
          id: 'c23-q5-dac1',
          number: 'C.23 q.5 d.a.c.1',
          text: 'Que a ninguém seja lícito matar alguém prova-se por aquele preceito pelo qual o Senhor proibiu o homicídio na lei, dizendo: "Não matarás". E também no Evangelho: "Todo aquele que lançar mão da espada, pela espada perecerá".',
        },
        {
          id: 'c23-q5-c1',
          number: 'C.23 q.5 c.1',
          text: '**Os maus não devem ser mortos, mas emendados por flagelos**\n\n*(Item Agostinho ao Conde Marcelino, sobre a captura dos Donatistas)*\n\nSoube que aqueles Circunceliões e clérigos do partido de Donato, que a disciplina pública levara de Hipona a julgamento por causa de seus atos, foram ouvidos por tua nobreza. Por isso, fui tomado por uma preocupação máxima de que, porventura, tua sublimidade julgue que devam ser punidos com tamanha severidade das leis que sofram o mesmo que fizeram. Portanto, por estas letras, rogo à tua fé que tens em Cristo, pela misericórdia do próprio Senhor nosso, que não faças isso. Não queremos, contudo, que os sofrimentos dos servos de Deus sejam vingados como suplícios da parte alheia. Não que proibamos de ser tirada a licença para crimes de homens celerados, mas queremos que baste isto: que, vivos e sem ter nenhuma parte do corpo truncada, sejam dirigidos pela coerção das leis da inquietação insana ao ócio da sanidade. Cumpre, ó juiz cristão, o ofício de pai piedoso; lembra-te de irar-te contra a iniquidade de tal modo que não exerças a libido da vingança nas atrocidades dos pecadores, mas apliques a vontade de curar as feridas dos pecados.',
        },
        {
          id: 'c23-q5-c2',
          number: 'C.23 q.5 c.2',
          text: '**Os réus devem ser punidos além do suplício da morte**\n\n*(Do mesmo, a Marcelino)*\n\nRogo-te que a pena deles, embora confessem crimes tão grandes, seja sem o suplício da morte, tanto por causa da nossa consciência quanto para recomendar a mansidão católica. Pois o fruto da confissão deles chegou até nós porque a Igreja Católica encontrou onde guardar e exibir a lenidade para com inimigos atrocíssimos.',
        },
        {
          id: 'c23-q5-c3',
          number: 'C.23 q.5 c.3',
          text: '**Os maus devem ser proibidos do mal e coagidos ao bem**\n\n*(Do mesmo, a Donato)*\n\nHá apenas uma coisa que tememos em tua justiça: que porventura julgues que se deve punir pela imensidão dos crimes e não, antes, pela consideração da lenidade cristã.\n\n(§ 1) Pela ocasião de juízes e leis terríveis, para que não sofram as penas do juízo eterno, desejamos que sejam corrigidos, não mortos; nem queremos que a disciplina seja negligenciada para com eles, nem que sejam coagidos pelos suplícios de que são dignos. Assim, pois, coíbe os pecados deles de modo que haja quem se arrependa de ter pecado.',
        },
        {
          id: 'c23-q5-c6',
          number: 'C.23 q.5 c.6',
          text: '**No presente alguns são punidos para que não sejam flagelados eternamente**\n\n*(Item Jerônimo, sobre Naum)*\n\nQue pensais, pois, diz ele, contra o Senhor? Ele, que criou o mundo, também fará a sua consumação. E se vos parece cruel, rígido e cruento o fato de ter deletado o gênero humano no dilúvio, chovido fogo e enxofre sobre Sodoma e Gomorra, submerso os egípcios nas ondas, prostrado os cadáveres dos israelitas no ermo, sabei que Ele por isso aplicou suplícios no presente para não punir eternamente.',
        },
        {
          id: 'c23-q5-c7',
          number: 'C.23 q.5 c.7',
          text: '**Aqueles que são réus de sangue devem ser defendidos pela Igreja**\n\n*(Item Gregório)*\n\nDefenda a Igreja os réus de sangue, para que não se torne partícipe pela efusão de sangue.',
        },
        {
          id: 'c23-q5-dpc7',
          number: 'C.23 q.5 d.p.c.7',
          text: 'Daqui aparece que os maus devem ser coagidos por flagelos, não punidos com a truncagem de membros ou morte temporal.\n\n(§ 2) Proíbe-se, portanto, por aquele preceito, que cada um se arme por autoridade própria para a morte de alguém, mas não que entregue os réus à morte por império da lei. Pois aquele que, exercendo função pública, perime os maus pelo império da própria lei, não é tido nem como transgressor daquele preceito, nem como alheio à pátria celestial.',
        },
        {
          id: 'c23-q5-c9',
          number: 'C.23 q.5 c.9',
          text: '**Os que geriram guerras por autoridade de Deus de modo algum transgrediram o preceito de não matar**\n\nDe modo algum fizeram contra este preceito, que diz: "Não matarás", os que geriram guerras por autoridade de Deus, ou que, representando a pessoa da autoridade pública segundo o direito da lei, isto é, o império da razão mui justa, puniram os celerados com a morte. Exceptuados estes, portanto, os quais ou a lei justa geralmente, ou a própria fonte da justiça, Deus, especialmente ordena matar, qualquer que mate um homem, a si mesmo ou a outrem, é enredado no crime de homicídio.',
        },
        {
          id: 'c23-q5-c13',
          number: 'C.23 q.5 c.13',
          text: '**Não é réu de homicídio o soldado que, obedecendo à autoridade, mata um homem**\n\n*(Do mesmo, no mesmo livro I)*\n\nO soldado, quando, obedecendo à autoridade sob a qual está legitimamente constituído, mata um homem, por nenhuma lei de sua cidade é réu de homicídio; antes, se não o fizer, é réu de império deserto e desprezado. Mas se o fizesse por sua própria vontade e autoridade, incorreria no crime de efusão de sangue humano.',
        },
        {
          id: 'c23-q5-c14',
          number: 'C.23 q.5 c.14',
          text: '**É homicida quem mata por vontade própria aqueles que o juiz ordena matar**\n\n*(Item, nas questões do Êxodo)*\n\nQuando o ministro do juiz mata aquele que o juiz ordenou matar, de fato, se o faz por vontade própria, é homicida, ainda que mate aquele que sabe que deveria ter sido morto pelo juiz.',
        },
        {
          id: 'c23-q5-c16',
          number: 'C.23 q.5 c.16',
          text: '**Com bom ânimo os ofícios da vingança podem ser cumpridos**\n\n*(Item, nas questões sobre Mateus)*\n\nOs ofícios da vingança podem ser cumpridos pelos bons com bom ânimo, como o juiz, como a lei.',
        },
        {
          id: 'c23-q5-c17',
          number: 'C.23 q.5 c.17',
          text: '**Não é iníquo, mas humano, quem persegue o crime para libertar o homem**\n\n*(Do mesmo, a Macedônio)*\n\nNão está vinculado pela sociedade da iniquidade, mas antes da humanidade, aquele que por isso é perseguidor do crime: para ser libertador do homem.',
        },
        {
          id: 'c23-q5-c18',
          number: 'C.23 q.5 c.18',
          text: '**Por que foram instituídos o poder real e os tormentos legais**\n\n*(Do mesmo)*\n\nNão foi em vão que se instituíram o poder do rei, o direito do juiz, as unhas de ferro do carrasco, as armas do soldado, a disciplina do senhor, e até a severidade do bom pai; tenham todas estas coisas seus modos, causas, razões e utilidades. Quando estas coisas são temidas, os maus são coibidos e os bons vivem quietos entre os maus.',
        },
        {
          id: 'c23-q5-c19',
          number: 'C.23 q.5 c.19',
          text: '**Às vezes peca mais quem dá a causa da morte do que aquele que mata**\n\nQuando um homem é morto por outro homem, há muita diferença se isso ocorre por desejo de prejudicar ou por tirar algo injustamente (como faz um inimigo ou um ladrão), ou por ordem de vingança ou obediência (como faz um juiz ou um carrasco), ou por necessidade de escapar ou socorrer (como quando um ladrão é morto por um viajante, ou um inimigo por um soldado).\n\n(§ 1) E às vezes aquele que foi a causa da morte está mais em culpa do que aquele que matou.',
        },
        {
          id: 'c23-q5-c27',
          number: 'C.23 q.5 c.27',
          text: '**As forças contrárias não são apenas homens, mas iras vingadoras de Deus**\n\n*(Item Jerônimo, sobre Joel)*\n\nNão apenas os homens são ministros e vingadores da ira de Deus contra aqueles que praticam o mal — de onde não portam a espada sem causa —, mas também as forças contrárias, que são chamadas de furor e ira de Deus.',
        },
        {
          id: 'c23-q5-c28',
          number: 'C.23 q.5 c.28',
          text: '**Quem degola os cruéis não é tal qual parece aos que sofrem**\n\n*(Do mesmo, sobre Isaías)*\n\nNão é cruel quem degola os cruéis: mas parece ser cruel aos que sofrem. Pois o ladrão suspenso no patíbulo julga o juiz cruel.',
        },
        {
          id: 'c23-q5-c29',
          number: 'C.23 q.5 c.29',
          text: '**É ministro do Senhor quem fere os maus naquilo em que são maus**\n\n*(Do mesmo, sobre Ezequiel, livro III)*\n\nAquele que fere os maus naquilo em que são maus, e tem os vasos da interfeição para que mate os péssimos, é ministro do Senhor.',
        },
        {
          id: 'c23-q5-c30',
          number: 'C.23 q.5 c.30',
          text: '**O juiz não admite crime ao vencer o homem**\n\n*(Do mesmo, sobre a epístola aos Gálatas, livro II)*\n\nO juiz não é autor de crime ao prender os homens.',
        },
        {
          id: 'c23-q5-c31',
          number: 'C.23 q.5 c.31',
          text: '**Não derrama sangue quem pune homicidas e sacrílegos**\n\n*(Do mesmo, sobre Jeremias)*\n\nPunir homicidas, sacrílegos e envenenadores não é efusão de sangue, mas ministério das leis.',
        },
        {
          id: 'c23-q5-c33',
          number: 'C.23 q.5 c.33',
          text: '**A perfídia às vezes é castigada pelos flagelos das tribulações**\n\n*(Item Agostinho, contra Petiliano)*\n\nNinguém deve ser coagido à fé, como dizeis, mas pela severidade, immo e pela misericórdia de Deus, a perfídia costuma ser castigada pelos flagelos das tribulações. Porventura, porque os melhores costumes são escolhidos pela liberdade da vontade, por isso os piores costumes não são punidos pela integridade da lei?',
        },
        {
          id: 'c23-q5-c34',
          number: 'C.23 q.5 c.34',
          text: '**A injúria aos sacramentos de Cristo deve ser vingada pelos reis**\n\n*(Do mesmo)*\n\nSe Nabucodonosor não foi perseguidor por ter vingado mui justamente o crime cometido contra o santo Daniel: como deve ser vingado pelos reis o fato de os sacramentos de Cristo serem soprados com desprezo, se os membros do Profeta, porque foram postos em perigo, mereceram ser assim vingados?',
        },
        {
          id: 'c23-q5-c35',
          number: 'C.23 q.5 c.35',
          text: '**São regentes diligentíssimos os que perseguem os maus para que fujam do mal**\n\n*(Do mesmo)*\n\nAqueles, porém, que decidem que devais ser detidos e coagidos por um crime tão grande, tão levemente, por admoestações de danos, ou pela privação de lugares, ou de honras, ou de dinheiro — para que, cogitando por que sofreis estas coisas, fujais do vosso sacrilégio reconhecido e sejais libertados da eterna condenação —, são reputados como regentes diligentíssimos e consultores mui piedosos.',
        },
        {
          id: 'c23-q5-c36',
          number: 'C.23 q.5 c.36',
          text: '**Não se ama o servo ou o filho quando não se corrige**\n\n*(Do mesmo, sobre a epístola de João)*\n\nNão penses que amas o teu servo quando não o bates, ou que amas o teu filho quando não lhe dás disciplina, ou que amas o teu vizinho quando não o corriges. Não é esta a caridade, mas o esmorecimento.',
        },
        {
          id: 'c23-q5-c37',
          number: 'C.23 q.5 c.37',
          text: '**O ofício do inocente é não prejudicar ninguém e punir o pecador**\n\n*(Do mesmo, sobre o livro da Cidade de Deus)*\n\nNão é da inocência permitir, ao poupar, que se caia em mal mais grave. Pertence, portanto, ao ofício do inocente não apenas não inferir mal a ninguém, mas também coibir do pecado ou punir o pecado, para que ou aquele que antes era odiado seja corrigido pela experiência, ou outros sejam aterrorizados pelo exemplo.',
        },
        {
          id: 'c23-q5-c38',
          number: 'C.23 q.5 c.38',
          text: '**Não é misericordioso quem poupa para nutrir vícios**\n\n*(Do mesmo, a Letário)*\n\nQuem poupa e favorece para nutrir vícios, para não contristar a vontade dos que pecam, não é tão misericordioso quanto quem não quer tirar a faca de um menino para não ouvi-lo chorar, e não teme que ele chore por estar ferido ou morto.',
        },
        {
          id: 'c23-q5-c42',
          number: 'C.23 q.5 c.42',
          text: '**Persegue não quem coage ao bem, mas quem coage ao mal**\n\n*(Item Papa Pelágio)*\n\nNão vos retardem os vãos falatórios dos homens que dizem que a Igreja faz perseguição quando ou reprime o que se comete, ou requer a salvação das almas. Erram os fabuladores de tais rumores. Não persegue senão quem coage ao mal. Quem, porém, ou pune o mal já feito, ou proíbe que seja feito, este não persegue, mas ama.',
        },
        {
          id: 'c23-q5-c44',
          number: 'C.23 q.5 c.44',
          text: '**Aqueles que estão divididos da unidade da Igreja sejam coagidos pelas potestades seculares**\n\n*(Item Papa Pelágio)*\n\nTanto as leis divinas quanto as humanas estabeleceram que aqueles que estão divididos da unidade da Igreja, e perturbam iniquamente a sua paz, sejam comprimidos também pelas potestades seculares. Nada há de maior pelo qual possais oferecer um sacrifício a Deus do que ordenar que estes, que se enfurecem para a sua própria perdição e a de outros, sejam contidos com o vigor competente.',
        },
        {
          id: 'c23-q5-c45',
          number: 'C.23 q.5 c.45',
          text: '**A iniquidade dos perversos, ainda que aproveite aos bons, deve contudo ser punida**\n\n*(Item Papa Pelágio)*\n\nEmbora a vossa utilidade tenha sido feita pelo crime daqueles, não permitais, contudo, que a presunção impune de homens iníquos grassar. Exercei, portanto, em tais pessoas a devida autoridade.',
        },
        {
          id: 'c23-q5-c46',
          number: 'C.23 q.5 c.46',
          text: '**No combate que se gere contra os infiéis, quem quer que morra merece o reino celestial**\n\n*(Item Nicolau ao exército dos Francos)*\n\nQueremos que todos saibais que quem quer que — o que dizemos não optando — morrer fielmente neste combate de guerra, os reinos celestiais minimamente lhe serão negados.',
        },
        {
          id: 'c23-q5-c47',
          number: 'C.23 q.5 c.47',
          text: '**Não são homicidas os que se armam contra os excomungados pelo zelo da mãe Igreja**\n\n*(Item Urbano II a Godofredo, Bispo de Lucca)*\n\nImpõe aos matadores de excomungados — conforme aprendeste na ordem da Igreja Romana — uma satisfação condigna segundo a intenção deles. Pois não julgamos como homicidas aqueles que, ardendo pelo zelo da mãe católica contra os excomungados, aconteça de terem trucidado alguns deles.',
        },
        {
          id: 'c23-q5-c48',
          number: 'C.23 q.5 c.48',
          text: '**A paz da Igreja consola a tristeza pelos perdidos**\n\n*(Item Agostinho, a Bonifácio)*\n\nQuem de nós quereria que algum dos inimigos não apenas perecesse, mas até perdesse algo? Mas se a casa de David não mereceu ter paz senão porque Absalão, seu filho, foi extinto na guerra que geria contra o pai, o que restou a David senão chorar o perdido e consolar a sua tristeza com a paz adquirida para o seu reino?',
        },
        {
          id: 'c23-q5-dpc48',
          number: 'C.23 q.5 d.p.c.48',
          text: 'Se, portanto, homens santos e potestades públicas, gerindo guerras, não foram transgressores daquele mandamento: "Não matarás", embora perimissem os flagiciosos com morte digna; se o soldado obediente à sua potestade não é réu de homicídio; se punir homicidas e envenenadores não é efusão de sangue, mas ministério das leis; se a paz da Igreja consola a tristeza pelos perdidos; se aqueles que, acesos pelo zelo da mãe católica, matam excomungados, não são julgados homicidas: é patente que aos maus é lícito não apenas serem fustigados, mas também mortos.',
        },
        {
          id: 'c23-q5-c49',
          number: 'C.23 q.5 c.49',
          text: '**Às vezes os pecados são punidos por povos excitados pelo comando divino**\n\n*(Item Ambrósio)*\n\nOs pecados são perdoados pela palavra de Deus e pelo ofício do sacerdote. Mas os pecados também são punidos pelos homens, como pelos juízes, que usam do poder por um tempo.\n\n(§ 1) Os pecados são punidos também pelos povos, como lemos, porque frequentemente o povo dos Judeus foi subjugado por estrangeiros, excitados pelo comando de Deus devido à ofensa à majestade divina.',
        },
      ],
    },
    {
      id: 'questao-6',
      title: 'Questão 6 — Se os maus devem ser coagidos ao bem',
      type: 'articles',
      articles: [
        {
          id: 'c23-q6-dac1',
          number: 'C.23 q.6 d.a.c.1',
          text: 'Pergunta-se agora se os maus devem ser coagidos ao bem. Isso aparece facilmente. Pois o povo antigo era coagido à observância da lei pelo medo das penas. No Evangelho também o Senhor diz aos discípulos: "Não temais os que matam o corpo", isto é, servi-O em temor, "Aquele que pode perder a alma e o corpo na geena". Paulo também, quando perseguia a Igreja de Deus, foi coagido a converter-se a Deus, sendo cegado no caminho.',
        },
        {
          id: 'c23-q6-c1',
          number: 'C.23 q.6 c.1',
          text: '**A Igreja deve coagir os maus ao bem, assim como Cristo coagiu Paulo**\n\nOs cismáticos dizem: a quem Cristo aplicou força? A quem Ele coagiu? Eis que têm o apóstolo Paulo. Reconheçam nele primeiro Cristo coagindo, depois ensinando; primeiro ferindo, depois consolando. Por que, então, não coagiria a Igreja os filhos perdidos para que voltassem, se os filhos perdidos coagiram outros para que perissem?\n\n(§ 4) Por isso o próprio Senhor ordena que os convidados sejam primeiro conduzidos à sua grande ceia, e depois coagidos. Pois, quando os servos responderam: "Senhor, foi feito o que ordenaste e ainda há lugar", Ele disse: "Saí pelos caminhos e valados, e a quantos encontrardes, coagi-os a entrar".',
        },
        {
          id: 'c23-q6-c2',
          number: 'C.23 q.6 c.2',
          text: '**De vários modos os errantes são corrigidos pelo Senhor**\n\n*(Item, aos Donatistas)*\n\nO próprio Deus faz isso convosco por meio de nós, ora exortando, ora ameaçando, seja corrigindo, seja por danos, ou trabalhos, ou por suas admoestações ocultas, ou pelas leis das potestades temporais.',
        },
        {
          id: 'c23-q6-c3',
          number: 'C.23 q.6 c.3',
          text: '**Não se deve considerar que alguém é coagido, mas para onde é coagido**\n\n*(Item, na epístola a Vicente)*\n\nVês, a meu ver, que não se deve considerar que alguém é coagido, mas qual é a natureza daquilo para onde é coagido, se bom ou mau; não porque alguém possa ser bom contra a vontade, mas ao temer o que não quer sofrer, ou abandona a animosidade que impedia a mente, ou é compelido a conhecer a verdade que ignorava.\n\n(§ 1) Minha sentença inicial era que ninguém devia ser coagido à unidade de Cristo, mas que se devia agir por meio da palavra, lutar pela disputa e vencer pela razão. Mas esta minha opinião foi superada não apenas por palavras de contraditórios, mas por exemplos demonstrativos. Pois primeiro opunha-se a mim a minha cidade, que, sendo toda da parte de Donato, converteu-se à unidade católica pelo temor das leis imperiais.',
        },
        {
          id: 'c23-q6-dpc4',
          number: 'C.23 q.6 d.p.c.4',
          text: 'De tudo isto colhe-se que os maus devem ser coagidos ao bem.\n\n(§ 5) Responde-se assim: se o bem ao qual os maus são coagidos fosse sempre suportado contra a vontade e nunca servissem voluntariamente, seriam coagidos inutilmente. Mas porque é próprio da natureza humana abominar o que cai em desuso e amar mais o que é costumeiro, os maus devem ser proibidos do mal pelos flagelos das tribulações e provocados ao bem, para que, enquanto pelo medo da pena o mal cai em desuso, o bem torne-se doce pelo costume.',
        },
      ],
    },
    {
      id: 'questao-7',
      title: 'Questão 7 — Se os hereges devem ser espoliados de seus bens',
      type: 'articles',
      articles: [
        {
          id: 'c23-q7-dac1',
          number: 'C.23 q.7 d.a.c.1',
          text: 'Agora pergunta-se se os hereges devem ser espoliados de seus bens e dos bens da Igreja. E se aqueles que possuem o que foi tirado dos hereges podem ser ditos possuir o que é alheio.',
        },
        {
          id: 'c23-q7-c1',
          number: 'C.23 q.7 c.1',
          text: '**As coisas terrenas não são possuídas senão pelo direito divino ou humano**\n\nQuem quer que vos persiga por ocasião desta lei imperial, não por amor de correção, mas por ódio de inimizade, nos desagrada. E embora nenhuma coisa terrena possa ser retamente possuída por alguém, a não ser pelo direito divino — pelo qual tudo pertence aos justos — ou pelo direito humano — que está no poder dos reis da terra —, frustra dizeis: "trabalhamos para reunir estas coisas". Quisera saber quem, por avareza, detém os bens dos pobres ou as basílicas das congregações que mantínheis sob o nome da Igreja, as quais não são devidas senão àquela Igreja que é a verdadeira Igreja de Cristo.',
        },
        {
          id: 'c23-q7-c2',
          number: 'C.23 q.7 c.2',
          text: '**Os católicos não possuem o que é alheio pelo fato de deterem o que foi tirado dos hereges**\n\n*(Item, contra Petiliano)*\n\nSe vos queixais das coisas ou lugares eclesiásticos que não detendes, também os Judeus poderiam dizer-se justos e acusar-nos de iniquidade, porque os cristãos agora possuem o lugar onde os ímpios reinaram. O que há de indigno se os católicos detêm, segundo a vontade pacífica do Senhor, o que os hereges detinham? Portanto, não cobiçamos o alheio, porque pelo império d\'Aquele a quem pertencem todas as coisas, tornaram-se nossas, e são justamente nossas.',
        },
        {
          id: 'c23-q7-c3',
          number: 'C.23 q.7 c.3',
          text: '**As coisas eclesiásticas são possuídas injustamente pelos hereges**\n\n*(Item)*\n\nQuanto ao fato de nos acusarem de cobiçar e tirar suas coisas, oxalá tornassem-se católicos, e possuíssem conosco em paz e caridade não só o que dizem ser seu, mas também o nosso. Tudo o que possuíam em nome das igrejas da parte de Donato, os imperadores cristãos ordenaram transferir para a católica com as próprias igrejas. Deixem de cobiçar o alheio e entrem na sociedade da unidade.',
        },
        {
          id: 'c23-q7-c4',
          number: 'C.23 q.7 c.4',
          text: '**As riquezas dos ímpios são tesouradas para os justos**\n\n*(Item)*\n\nSe considerarmos o que está escrito no livro da Sabedoria: "Por isso os justos levaram os despojos dos ímpios"; e o que se lê nos Provérbios: "As riquezas dos ímpios são tesouradas para os justos", então veremos que não se deve perguntar quem tem os bens dos hereges, mas quem está na sociedade dos justos.',
        },
        {
          id: 'c23-q7-dpc4',
          number: 'C.23 q.7 d.p.c.4',
          text: 'Por estas autoridades, mostra-se claramente que aquilo que é mal possuído pelos hereges é justamente tirado pelos católicos, nem por isso se diz que eles possuem o que é alheio.',
        },
      ],
    },
    {
      id: 'questao-8',
      title: 'Questão 8 — Se é lícito aos bispos mover armas',
      type: 'articles',
      articles: [
        {
          id: 'c23-q8-dac1',
          number: 'C.23 q.8 d.a.c.1',
          text: 'Quanto aos bispos ou a quaisquer clérigos, prova-se facilmente que nem por autoridade própria, nem por autoridade do pontífice romano, podem tomar armas. Pois quando Pedro, que fora eleito pelo Senhor como o primeiro dos apóstolos, exerceu a espada material para defender o mestre da injúria dos Judeus, ouviu: "Converte a tua espada na bainha, pois todo aquele que tomar a espada, pela espada perecerá". Como se abertamente lhe fosse dito: até agora foi permitido a ti e aos teus predecessores perseguir os inimigos de Deus com a espada corporal; doravante, para exemplo de paciência, converte a tua espada na bainha, e exerce apenas a espada espiritual, que é a palavra de Deus.\n\n(§ 1) Item Ambrósio: "As armas do bispo são as lágrimas e as orações".',
        },
        {
          id: 'c23-q8-dpc6',
          number: 'C.23 q.8 d.p.c.6',
          text: 'Responde-se assim: os sacerdotes não devem tomar armas com a própria mão; mas lhes é lícito exortar outros a tomá-las para a defesa dos oprimidos e para o combate contra os inimigos de Deus.',
        },
        {
          id: 'c23-q8-c7',
          number: 'C.23 q.8 c.7',
          text: '**O Papa ordena que o povo se reúna contra os Sarracenos**\n\n*(Leão IV a Luís Augusto)*\n\nVisto que frequentemente chegam notícias adversas das partes dos Sarracenos, dizia-se que alguns viriam secreta e furtivamente ao porto dos Romanos. Por causa disso, ordenamos que o nosso povo se reúna, e decidimos descer ao litoral marítimo.',
        },
        {
          id: 'c23-q8-c8',
          number: 'C.23 q.8 c.8',
          text: '**O Papa deve ser o vingador do seu rebanho e o principal auxiliador**\n\n*(Item)*\n\nDeveis saber que nunca permitimos que os nossos homens fossem oprimidos por ninguém; mas, se alguma necessidade ocorrer, vingamos presencialmente, porque devemos ser vingadores do nosso rebanho em tudo e principais auxiliadores.',
        },
        {
          id: 'c23-q8-c9',
          number: 'C.23 q.8 c.9',
          text: '**Consegue o reino celeste de Deus quem morre pela defesa dos cristãos**\n\n*(Item, ao exército dos Francos)*\n\nDepositado todo o temor e terror, esforçai-vos para agir virilmente contra os inimigos da santa fé. Pois o Onipotente sabe que, se qualquer de vós morrer, morreu pela verdade da fé, pela salvação da pátria e pela defesa dos cristãos; por isso, conseguirá d\'Ele o prêmio celeste.',
        },
        {
          id: 'c23-q8-c11',
          number: 'C.23 q.8 c.11',
          text: '**Não devemos perseguir os Judeus, mas os Sarracenos**\n\n*(Item o Papa Alexandre a todos os bispos da Espanha)*\n\nA causa dos Judeus e dos Sarracenos é certamente distinta. Pois contra aqueles que perseguem os cristãos e os expulsam de suas cidades e sedes próprias, luta-se justamente; mas estes [os Judeus] estão prontos a servir em toda parte.',
        },
        {
          id: 'c23-q8-c12',
          number: 'C.23 q.8 c.12',
          text: '**Quem não corrige os crimes que pode emendar, ele mesmo os comete**\n\n*(Item João VIII ao glorioso duque Demago)*\n\nExortamos o zelo da tua devoção para que te acendas contra os piratas marinhos que se enfurecem contra os cristãos sob o pretexto do teu nome. Pois está escrito: "Quem não corrige os crimes que pode emendar, ele mesmo os comete".',
        },
        {
          id: 'c23-q8-c13',
          number: 'C.23 q.8 c.13',
          text: '**Punir crimes por causa de Deus não é crueldade, mas piedade**\n\n*(Item Jerônimo, a Ripário)*\n\nLi sobre a lança de Fineias, a autoridade de Elias e o zelo de Simão Cananeu, a severidade de Pedro matando Ananias e Safira, a constância de Paulo, que condenou o mago Elimas. Não é crueldade punir crimes por causa de Deus, mas piedade.',
        },
        {
          id: 'c23-q8-dpc18',
          number: 'C.23 q.8 d.p.c.18',
          text: 'Lê-se também no Registro que o bem-aventurado Gregório ordenou aos cidadãos da Toscana que preparassem armas contra os Lombardos, e decretou estipêndios aos combatentes. Por este exemplo e pelas autoridades precedentes, fica claro que os sacerdotes, embora não devam tomar armas com a própria mão, podem persuadir aqueles a quem tais ofícios foram confiados, ou ordenar por sua autoridade que outros as tomem.',
        },
        {
          id: 'c23-q8-dpc28',
          number: 'C.23 q.8 d.p.c.28',
          text: 'É lícito, portanto, aos prelados da Igreja, pelo exemplo do bem-aventurado Gregório, postular defesa aos fiéis junto aos imperadores ou a quaisquer chefes. É lícito também, com o bem-aventurado Leão, exortar virilmente quaisquer pessoas para a sua defesa contra os adversários da santa fé, e citar quem quer que seja para afastar a violência dos infiéis. Contudo, a nenhum dos bispos é lícito ordenar a efusão de sangue por autoridade sua ou dos imperadores.',
        },
        {
          id: 'c23-q8-c29',
          number: 'C.23 q.8 c.29',
          text: '**Os sacerdotes consintam em tornar-se juízes onde se promete indulgência por juramento**\n\n*(IV Concílio de Toledo)*\n\nFrequentemente os príncipes confiam seus negócios aos sacerdotes contra quaisquer réus de lesa-majestade. Mas porque os sacerdotes foram eleitos por Cristo para o ministério da salvação, consintam em tornar-se juízes para os reis ali onde a indulgência do suplício é prometida por juramento, e não onde se prepara uma sentença de perigo [morte]. Se algum dos sacerdotes, contra este conselho comum, for discutidor em perigos alheios, seja réu do sangue efundido diante de Cristo, e perca o seu próprio grau diante da Igreja.',
        },
        {
          id: 'c23-q8-c30',
          number: 'C.23 q.8 c.30',
          text: '**Não devem agitar o juízo de sangue os que tratam os sacramentos do Senhor**\n\n*(Item, do XI Concílio de Toledo)*\n\nÀqueles por quem os sacramentos do Senhor devem ser tratados, não é lícito agitar o juízo de sangue. E, por isso, deve-se proibir grandemente tais excessos, para que, agitados por movimentos de presunção indiscreta, não presumam julgar por sentença própria o que deve ser punido com a morte, nem infiram por si mesmos as amputações a quaisquer pessoas, nem ordenem que sejam inferidas. Se algum deles, esquecido destes preceitos, fizer algo assim nos servos da sua igreja ou em quaisquer pessoas, seja privado da honra e do lugar do grau concedido; e seja mantido sob o cárcere perpétuo da condenação. Contudo, a comunhão ao sair desta vida não lhe deve ser negada, por causa da misericórdia do Senhor, que não quer a morte do pecador, mas que se converta e viva.',
        },
      ],
    },
  ],
};
