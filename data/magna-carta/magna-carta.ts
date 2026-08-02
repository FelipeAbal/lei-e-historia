import { HistoricalDocument } from '../../types';

export const magnaCarta: HistoricalDocument = {
  id: 'magna-carta',
  title: 'Magna Carta',
  subtitle: 'A Grande Carta das Liberdades de Inglaterra',
  date: '15 de junho de 1215',
  era: 'Idade Média',
  language: 'Latim',
  description: 'Documento constitucional outorgado pelo rei João da Inglaterra em Runnymede em 1215, sob pressão dos barões rebeldes. Estabeleceu pela primeira vez limites formais ao poder régio e garantias como o devido processo legal e a proibição de prisão arbitrária. Considerado um dos textos fundadores do constitucionalismo ocidental.',
  sections: [
    {
      id: 'context',
      title: 'Introdução',
      type: 'text',
      content: `A Magna Carta, outorgada pelo rei João da Inglaterra (r. 1199–1216) no prado de Runnymede, às margens do Tâmisa, em 15 de junho de 1215, é um dos documentos mais influentes da história constitucional do Ocidente. Redigida em latim e aqui apresentada em tradução para o português, a carta foi fruto de uma negociação forçada entre um rei em crise de legitimidade e uma coalizão de barões em rebelião aberta.

João I, apelidado pela posteridade de "João Sem Terra", herdou um reino sob pressão constante. Havia perdido a Normandia e a maior parte dos domínios ingleses na França para o rei Filipe II em 1204, o que minou gravemente seu prestígio. Seu conflito com o papa Inocêncio III sobre a nomeação do arcebispo de Cantuária resultou no Interdito sobre a Inglaterra (1208) e em sua própria excomunhão (1209). Para financiar suas guerras fracassadas e pagar o preço de sua reconciliação com o papado, João lançou mão de tributação crescente, da manipulação das cortes reais e da arbitrariedade nas relações com a nobreza. Em 1214, após a derrota de Bouvines, a resistência baronial chegou ao limite.

No início de 1215, um grupo de barões insurgentes capturou Londres com o apoio da população e forçou o rei a negociar. O resultado foi a Magna Carta: um documento com 63 cláusulas que regulava as relações entre o rei e seus súditos, limitava o poder régio em matérias de tributação, herança, tutela e administração da justiça e estabelecia mecanismos rudimentares, mas inéditos, de controle sobre o monarca.

O documento tem sido frequentemente lido de forma anacrônica como um precursor da democracia liberal ou dos direitos humanos universais. É necessária cautela. A Magna Carta é, antes de tudo, um instrumento feudal: a maior parte de suas cláusulas protege os direitos dos barões, cavaleiros e homens livres, não dos servos ou dos vilões. Seus beneficiários diretos são os que detêm terras da Coroa por serviço militar ou outros títulos feudais. O campesinato, que constituía a ampla maioria da população medieval, está quase completamente ausente de suas proteções.

Mesmo assim, algumas cláusulas transcenderam seu contexto original e se tornaram pilares do direito constitucional inglês e, por extensão, do constitucionalismo moderno. A cláusula 39, "Nenhum homem livre será capturado ou aprisionado... exceto pelo julgamento legítimo de seus pares ou pela lei da terra", é o embrião do que posteriormente seria chamado de *habeas corpus* e do devido processo legal. A cláusula 40, "A ninguém venderemos, a ninguém negaremos ou retardaremos direito ou justiça", é uma afirmação de igualdade formal perante a lei que ecoa até hoje.

A Magna Carta de 1215 teve vida breve em sua forma original. O papa Inocêncio III a anulou em agosto daquele ano e o rei João morreu em 1216 em meio à guerra civil. Contudo, o documento foi reemitido diversas vezes, em 1216, 1217, 1225 e 1297, sendo a versão de 1225 a definitiva. Três cláusulas da versão de 1297 ainda fazem parte do direito inglês hoje: a que garante as liberdades da Igreja, a que garante as liberdades de Londres e, fundamentalmente, a cláusula 39/29, núcleo do devido processo legal.

A tradução aqui apresentada tem como base a versão inglesa produzida pela British Library a partir do texto original em latim da carta de 1215. As cláusulas marcadas com **(+)** foram repetidas na Carta de 1225 (com pequenas alterações); as marcadas com **(*)** foram omitidas em todas as reemissões posteriores. O texto apresenta 63 cláusulas numeradas conforme convenção acadêmica: a carta original não possuía numeração.`,
    },
    {
      id: 'preambulo',
      title: 'Preâmbulo',
      type: 'text',
      content: `JOÃO, pela graça de Deus rei da Inglaterra, senhor da Irlanda, duque da Normandia e da Aquitânia e conde de Anjou, aos seus arcebispos, bispos, abades, condes, barões, justiceiros, floresteiros, xerifes, mordomos, servos e a todos os seus oficiais e súditos leais, Saudações.

SAIBAM QUE, DIANTE DE DEUS, pela saúde de nossa alma e das almas de nossos ancestrais e herdeiros, para a honra de Deus, a exaltação da santa Igreja e a melhor ordenação de nosso reino, pelo conselho de nossos veneráveis padres Estevão, arcebispo de Cantuária, primaz de toda a Inglaterra e cardeal da santa Igreja Romana, Henrique arcebispo de Dublin, Guilherme bispo de Londres, Pedro bispo de Winchester, Jocelino bispo de Bath e Glastonbury, Hugo bispo de Lincoln, Gualtério bispo de Worcester, Guilherme bispo de Coventry, Benedito bispo de Rochester, mestre Pandulfo subdiácono e membro da casa pontifícia, frei Aymérico mestre da cavalaria do Templo na Inglaterra, Guilherme Marshal conde de Pembroke, Guilherme conde de Salisbury, Guilherme conde de Warren, Guilherme conde de Arundel, Alan de Galloway condestável da Escócia, Warin fitz Gerald, Pedro fitz Herbert, Huberto de Burgh senescal de Poitou, Hugo de Neville, Mateus fitz Herbert, Tomás Basset, Alan Basset, Filipe Daubeny, Roberto de Roppeley, João Marshal, João fitz Hugh e outros súditos leais:`,
    },
    {
      id: 'clausulas',
      title: 'As Cláusulas',
      type: 'articles',
      articles: [
        {
          id: 'mc-1',
          number: '1',
          text: 'PRIMEIRAMENTE, QUE CONCEDEMOS A DEUS e, por esta presente carta, confirmamos para nós e nossos herdeiros em perpetuidade, que a Igreja inglesa será livre e terá seus direitos intactos e suas liberdades não prejudicadas. Que desejamos que isso seja observado fica claro pelo fato de que, por nossa livre vontade, antes da irrupção da presente disputa entre nós e nossos barões, concedemos e confirmamos por carta a liberdade das eleições da Igreja — um direito reconhecido como de suma necessidade e importância — e fizemos com que isso fosse confirmado pelo Papa Inocêncio III. Essa liberdade observaremos nós mesmos e desejamos que seja observada de boa-fé por nossos herdeiros em perpetuidade. A TODOS OS HOMENS LIVRES DE NOSSO REINO também concedemos, para nós e nossos herdeiros para sempre, todas as liberdades aqui escritas abaixo, para que as tenham e as conservem para si e seus herdeiros, de nós e de nossos herdeiros: *(+) Repetida na Carta de 1225.*',
        },
        {
          id: 'mc-2',
          number: '2',
          text: 'Se algum conde, barão ou outra pessoa que detém terras diretamente da Coroa, a título de serviço militar, falecer, e na sua morte seu herdeiro for maior de idade e dever uma "relevação" (relief), o herdeiro receberá sua herança mediante o pagamento da antiga escala de "relevação". Ou seja, o herdeiro ou herdeiros de um conde pagarão £100 pela totalidade da baronia condal, o herdeiro ou herdeiros de um cavaleiro pagarão no máximo 100 soldos pela totalidade do "feudo" (fee) do cavaleiro, e qualquer homem que deva menos pagará menos, em conformidade com o uso antigo dos "feudos".',
        },
        {
          id: 'mc-3',
          number: '3',
          text: 'Mas se o herdeiro de tal pessoa for menor de idade e estiver sob tutela, quando atingir a maioridade receberá sua herança sem "relevação" ou pagamento.',
        },
        {
          id: 'mc-4',
          number: '4',
          text: 'O guardião das terras de um herdeiro menor de idade delas retirará apenas rendas razoáveis, direitos consuetudinários e serviços feudais. Fará isso sem destruição ou dano a homens ou propriedade. Se dermos a guarda da terra a um xerife, ou a qualquer pessoa responsável perante nós pelas rendas, e ele causar destruição ou dano, exigiremos dele reparação, e a terra será entregue a dois homens dignos e prudentes do mesmo "feudo", que serão responsáveis perante nós pelas rendas, ou perante a pessoa a quem as tivermos atribuído. Se dermos ou vendermos a alguém a guarda de tal terra e ele causar destruição ou dano, perderá a tutela dela, e ela será entregue a dois homens dignos e prudentes do mesmo "feudo", que serão igualmente responsáveis perante nós.',
        },
        {
          id: 'mc-5',
          number: '5',
          text: 'Enquanto um guardião tiver a guarda de tal terra, manterá as casas, parques, viveiros de peixe, lagoas, moinhos e tudo mais pertencente a ela, com as rendas da própria terra. Quando o herdeiro atingir a maioridade, o guardião lhe restituirá toda a terra, provida de arados e dos instrumentos de lavoura que a época exigir e que as rendas da terra puderem razoavelmente suportar.',
        },
        {
          id: 'mc-6',
          number: '6',
          text: 'Os herdeiros poderão ser dados em casamento, mas não a alguém de posição social inferior. Antes de o casamento se realizar, deverá ser dado conhecimento ao parente mais próximo do herdeiro.',
        },
        {
          id: 'mc-7',
          number: '7',
          text: 'À morte do marido, a viúva poderá receber imediatamente e sem dificuldade sua parte de casamento e sua herança. Não pagará nada pelo seu dote, parte de casamento ou qualquer herança que ela e o marido possuíssem conjuntamente no dia da morte dele. Poderá permanecer na casa do marido por quarenta dias após sua morte, e dentro desse prazo seu dote lhe será atribuído.',
        },
        {
          id: 'mc-8',
          number: '8',
          text: 'Nenhuma viúva será compelida a casar-se, desde que deseje permanecer sem marido. Mas deverá dar garantia de que não se casará sem o consentimento real, caso detenha suas terras da Coroa, ou sem o consentimento de qualquer outro senhor de quem as detenha.',
        },
        {
          id: 'mc-9',
          number: '9',
          text: 'Nem nós nem nossos oficiais sequestraremos terra ou renda em pagamento de uma dívida, enquanto o devedor tiver bens móveis suficientes para quitá-la. Os fiadores de um devedor não serão constritos enquanto o próprio devedor puder quitar sua dívida. Se, por falta de meios, o devedor não puder quitá-la, seus fiadores serão responsáveis por ela. Se assim o desejarem, poderão ficar com as terras e rendas do devedor até receberem satisfação pela dívida que pagaram por ele, a menos que o devedor possa demonstrar que saldou suas obrigações para com eles.',
        },
        {
          id: 'mc-10',
          number: '10',
          text: 'Se alguém que tomou emprestado uma soma em dinheiro de judeus morrer antes de a dívida ser quitada, seu herdeiro não deverá pagar juros sobre a dívida enquanto permanecer menor de idade, independentemente de quem detenha suas terras. Se tal dívida cair nas mãos da Coroa, esta não receberá nada além do capital especificado no título. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-11',
          number: '11',
          text: 'Se um homem morrer devendo dinheiro a judeus, sua esposa poderá receber seu dote e nada pagará em relação à dívida a partir dele. Se deixar filhos menores de idade, suas necessidades também poderão ser providas numa escala adequada ao tamanho de sua posse de terras. A dívida será paga com o resíduo, reservando-se o serviço devido aos seus senhores feudais. As dívidas devidas a pessoas que não sejam judeus serão tratadas da mesma forma. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-12',
          number: '12',
          text: 'Nenhum "escutagio" (taxa em substituição ao serviço militar) ou "auxílio" fiscal poderá ser lançado em nosso reino sem o consentimento geral, salvo para o resgate de nossa pessoa, para armar cavaleiro nosso filho mais velho e (uma vez) para casar nossa filha mais velha. Para esses fins somente poderá ser lançado um auxílio razoável. Os auxílios da cidade de Londres serão tratados da mesma forma. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-13',
          number: '13',
          text: 'A cidade de Londres gozará de todas as suas antigas liberdades e costumes livres, tanto por terra como por água. Também queremos e concedemos que todas as outras cidades, burgos, vilas e portos gozem de todas as suas liberdades e costumes livres. *(+) Repetida na Carta de 1225.*',
        },
        {
          id: 'mc-14',
          number: '14',
          text: 'Para obter o consentimento geral do reino para o lançamento de um "auxílio" — salvo nos três casos acima especificados — ou de um "escutagio", faremos com que os arcebispos, bispos, abades, condes e grandes barões sejam convocados individualmente por carta. Para os que detêm terras diretamente de nós, faremos expedir uma convocação geral, por meio dos xerifes e outros oficiais, para reunirem-se em dia determinado (com pelo menos quarenta dias de antecedência) e em lugar determinado. Em todas as cartas de convocação, será indicado o motivo. Quando a convocação tiver sido expedida, os negócios designados para o dia prosseguirão de acordo com a deliberação dos presentes, mesmo que nem todos os convocados tenham comparecido. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-15',
          number: '15',
          text: 'No futuro não permitiremos a ninguém lançar um "auxílio" sobre seus homens livres, salvo para resgatar sua pessoa, para armar cavaleiro seu filho mais velho e (uma vez) para casar sua filha mais velha. Para esses fins somente poderá ser lançado um auxílio razoável. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-16',
          number: '16',
          text: 'Nenhum homem será obrigado a prestar mais serviço do que o devido por um "feudo" de cavaleiro ou outra posse livre de terra.',
        },
        {
          id: 'mc-17',
          number: '17',
          text: 'Ações ordinárias não seguirão a corte real de um lugar para outro, mas serão julgadas em lugar fixo.',
        },
        {
          id: 'mc-18',
          number: '18',
          text: 'Inquéritos de "novel disseisin" (novo desapossamento), "mort d\'ancestor" (morte de ancestral) e "darrein presentment" (última apresentação) serão realizados apenas no tribunal do condado competente. Nós mesmos, ou na nossa ausência no exterior nosso justiceiro-chefe, enviaremos dois justiceiros a cada condado quatro vezes por ano, e esses justiceiros, com quatro cavaleiros do condado eleitos pelo próprio condado, realizarão os assizes no tribunal do condado, no dia e no lugar em que o tribunal se reunir.',
        },
        {
          id: 'mc-19',
          number: '19',
          text: 'Se alguns assizes não puderem ser realizados no dia do tribunal do condado, tantos cavaleiros e homens livres quantos forem suficientes para a administração da justiça permanecerão após, dos que tenham comparecido ao tribunal, tendo em conta o volume de negócios a tratar.',
        },
        {
          id: 'mc-20',
          number: '20',
          text: 'Por uma infração leve, um homem livre será multado apenas na proporção do grau de sua ofensa, e por uma infração grave correspondentemente, mas não tão gravemente a ponto de ser privado de seu meio de vida. Da mesma forma, um comerciante será poupado de suas mercadorias, e um vilão dos instrumentos de sua lavoura, se ficarem à mercê de um tribunal régio. Nenhuma dessas multas será imposta senão pela avaliação sob juramento de homens respeitáveis da vizinhança.',
        },
        {
          id: 'mc-21',
          number: '21',
          text: 'Condes e barões serão multados apenas por seus pares e na proporção da gravidade de sua ofensa.',
        },
        {
          id: 'mc-22',
          number: '22',
          text: 'Uma multa imposta sobre a propriedade laica de um clérigo ordenado será avaliada segundo os mesmos princípios, sem referência ao valor de seu benefício eclesiástico.',
        },
        {
          id: 'mc-23',
          number: '23',
          text: 'Nenhuma vila ou pessoa será obrigada a construir pontes sobre rios, exceto aquelas com obrigação antiga de fazê-lo.',
        },
        {
          id: 'mc-24',
          number: '24',
          text: 'Nenhum xerife, condestável, corregedor ou outro oficial régio poderá conduzir processos que devam ser julgados pelos justiceiros reais.',
        },
        {
          id: 'mc-25',
          number: '25',
          text: 'Todo condado, centena, wapentake e décima permanecerá com sua antiga renda, sem aumento, exceto os domínios régios. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-26',
          number: '26',
          text: 'Se, à morte de um homem que detém um "feudo" laico da Coroa, um xerife ou oficial régio apresentar cartas patentes reais de convocação por uma dívida devida à Coroa, será lícito a eles sequestrar e arrolar bens móveis encontrados no "feudo" laico do morto até o valor da dívida, conforme avaliação de pessoas dignas. Nada será removido até que a dívida total esteja paga, quando o resíduo será entregue aos executores para cumprir a vontade do morto. Se nenhuma dívida for devida à Coroa, todos os bens móveis serão considerados propriedade do morto, exceto as partes razoáveis de sua esposa e filhos.',
        },
        {
          id: 'mc-27',
          number: '27',
          text: 'Se um homem livre morrer intestado, seus bens móveis serão distribuídos por seus parentes mais próximos e amigos, sob supervisão da Igreja. Os direitos de seus credores serão preservados. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-28',
          number: '28',
          text: 'Nenhum condestável ou outro oficial régio tomará trigo ou outros bens móveis de qualquer homem sem pagamento imediato, a menos que o vendedor ofereça voluntariamente o adiamento.',
        },
        {
          id: 'mc-29',
          number: '29',
          text: 'Nenhum condestável poderá compelir um cavaleiro a pagar dinheiro pela guarda de um castelo se o cavaleiro estiver disposto a assumir a guarda pessoalmente, ou a fornecer com justificativa razoável outro homem apto para fazê-lo. Um cavaleiro levado ou enviado em serviço militar ficará dispensado da guarda do castelo pelo período desse serviço.',
        },
        {
          id: 'mc-30',
          number: '30',
          text: 'Nenhum xerife, oficial régio ou outra pessoa tomará cavalos ou carroças para transporte de nenhum homem livre sem seu consentimento.',
        },
        {
          id: 'mc-31',
          number: '31',
          text: 'Nem nós nem nenhum oficial régio tomaremos madeira para nosso castelo, ou para qualquer outro fim, sem o consentimento do proprietário.',
        },
        {
          id: 'mc-32',
          number: '32',
          text: 'Não manteremos as terras de pessoas condenadas por crime grave em nossas mãos por mais de um ano e um dia, após o que serão devolvidas aos senhores dos "feudos" em questão.',
        },
        {
          id: 'mc-33',
          number: '33',
          text: 'Todos os pesqueiros serão removidos do Tâmisa, do Medway e em toda a Inglaterra, exceto na costa do mar.',
        },
        {
          id: 'mc-34',
          number: '34',
          text: 'O mandado chamado "precipe" não será expedido no futuro a ninguém relativamente a nenhuma posse de terra, se com isso um homem livre puder ser privado do direito de julgamento no tribunal de seu próprio senhor.',
        },
        {
          id: 'mc-35',
          number: '35',
          text: 'Haverá medidas padrão de vinho, cerveja e trigo (o "quarto de Londres"), em todo o reino. Haverá também uma largura padrão de pano tingido, russet e haberject, a saber, duas elnas dentro das ourelas. Os pesos serão padronizados da mesma forma.',
        },
        {
          id: 'mc-36',
          number: '36',
          text: 'No futuro, nada será pago ou aceito pela expedição de um mandado de inquisição de vida ou de membros. Será concedido gratuitamente e não recusado.',
        },
        {
          id: 'mc-37',
          number: '37',
          text: 'Se um homem detém terra da Coroa por "feudo-firma", "socagem" ou "burgagem", e também detém terra de outra pessoa a título de serviço de cavaleiro, não teremos a tutela de seu herdeiro, nem da terra que pertença ao "feudo" da outra pessoa, em virtude do "feudo-firma", "socagem" ou "burgagem", a menos que o "feudo-firma" deva serviço de cavaleiro. Não teremos a tutela do herdeiro de um homem, ou de terra que ele detenha de outra pessoa, em razão de qualquer pequena propriedade que ele possa deter da Coroa a título de serviço de facas, flechas ou semelhantes.',
        },
        {
          id: 'mc-38',
          number: '38',
          text: 'No futuro, nenhum oficial levará um homem a julgamento pela simples alegação própria, sem apresentar testemunhas dignas de crédito para atestar a verdade.',
        },
        {
          id: 'mc-39',
          number: '39',
          text: 'Nenhum homem livre será capturado ou aprisionado, ou despojado de seus direitos ou possessões, ou declarado fora da lei ou exilado, ou privado de sua posição de qualquer forma, nem avançaremos contra ele nem enviaremos outros a fazê-lo, exceto pelo julgamento legítimo de seus pares ou pela lei da terra. *(+) Repetida na Carta de 1225.*',
        },
        {
          id: 'mc-40',
          number: '40',
          text: 'A ninguém venderemos, a ninguém negaremos ou retardaremos direito ou justiça. *(+) Repetida na Carta de 1225.*',
        },
        {
          id: 'mc-41',
          number: '41',
          text: 'Todos os mercadores poderão entrar ou sair da Inglaterra sem dano e sem temor, e nela permanecer ou viajar, por terra ou água, para fins de comércio, livres de todas as exações ilegais, em conformidade com os costumes antigos e legítimos. Isso, porém, não se aplica em tempo de guerra a mercadores de um país que esteja em guerra conosco. Quaisquer tais mercadores encontrados em nosso país no início de uma guerra serão detidos sem dano a suas pessoas ou propriedade, até que nós ou nosso justiceiro-chefe tenhamos descoberto como nossos próprios mercadores estão sendo tratados no país em guerra conosco. Se nossos próprios mercadores estiverem seguros, eles também o estarão.',
        },
        {
          id: 'mc-42',
          number: '42',
          text: 'No futuro será lícito a qualquer homem deixar e retornar ao nosso reino sem dano e sem temor, por terra ou água, preservando sua lealdade a nós, salvo em tempo de guerra, por algum breve período, para o benefício comum do reino. Excetuam-se desta disposição as pessoas que estiverem presas ou declaradas fora da lei conforme a lei da terra, as pessoas de um país que esteja em guerra conosco e os mercadores — que serão tratados como acima indicado. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-43',
          number: '43',
          text: 'Se um homem detém terras de algum "esqueato" tal como a "honra" de Wallingford, Nottingham, Boulogne, Lancaster, ou de outros "esqueatos" em nossas mãos que sejam baronias, à sua morte seu herdeiro nos dará apenas a "relevação" e o serviço que teria prestado ao barão, caso a baronia estivesse nas mãos do barão. Manteremos o "esqueato" da mesma forma que o barão o mantinha.',
        },
        {
          id: 'mc-44',
          number: '44',
          text: 'As pessoas que vivem fora da floresta não precisarão, no futuro, comparecer perante os justiceiros reais da floresta em resposta a convocações gerais, a menos que estejam efetivamente envolvidas em processos ou sejam fiadores de alguém que tenha sido preso por uma infração florestal.',
        },
        {
          id: 'mc-45',
          number: '45',
          text: 'Nomearemos como justiceiros, condestáveis, xerifes ou outros oficiais apenas homens que conheçam a lei do reino e estejam dispostos a cumpri-la bem. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-46',
          number: '46',
          text: 'Todos os barões que fundaram abadias e têm cartas de reis ingleses ou posse antiga como prova disso poderão ter a guarda delas quando não houver abade, como é seu direito.',
        },
        {
          id: 'mc-47',
          number: '47',
          text: 'Todas as florestas que foram criadas em nosso reinado serão imediatamente desaflorestadas. As margens de rios que foram cercadas em nosso reinado serão tratadas da mesma forma.',
        },
        {
          id: 'mc-48',
          number: '48',
          text: 'Todos os costumes prejudiciais relativos a florestas e caçadas, floresteiros, caçadores, xerifes e seus servidores, ou margens de rios e seus guardiões, serão imediatamente investigados em cada condado por doze cavaleiros juramentados do condado, e dentro de quarenta dias de sua inquirição os costumes prejudiciais serão completamente e irrevogavelmente abolidos. Mas nós, ou nosso justiceiro-chefe se não estivermos na Inglaterra, deveremos ser primeiro informados. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-49',
          number: '49',
          text: 'Restituiremos imediatamente todos os reféns e cartas entregues a nós por ingleses como garantia de paz ou de serviço leal. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-50',
          number: '50',
          text: 'Removeremos completamente de seus cargos os parentes de Gerardo de Athée, e no futuro eles não exercerão cargos na Inglaterra. As pessoas em questão são: Enguerrand de Cigogné, Pedro, Guido e André de Chanceaux, Guido de Cigogné, Godofredo de Martigny e seus irmãos, Filipe Marc e seus irmãos com Godofredo seu sobrinho, e todos os seus seguidores. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-51',
          number: '51',
          text: 'Assim que a paz for restaurada, removeremos do reino todos os cavaleiros estrangeiros, archeiros, seus acompanhantes e os mercenários que vieram para ele, para seu dano, com cavalos e armas. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-52',
          number: '52',
          text: 'A qualquer homem que tenhamos privado ou despojado de terras, castelos, liberdades ou direitos, sem o julgamento legítimo de seus pares, os restituiremos imediatamente. Em casos de disputa, a questão será resolvida pelo julgamento dos vinte e cinco barões referidos na cláusula 61. Contudo, nos casos em que um homem foi privado ou despojado de algo sem o julgamento legítimo de seus pares por nosso pai, o rei Henrique, ou por nosso irmão, o rei Ricardo, e isso permanece em nossas mãos ou é detido por outros sob nossa garantia, teremos uma dilação pelo prazo comumente concedido aos Cruzados, a menos que uma ação judicial tenha sido iniciada ou uma inquirição tenha sido feita por nossa ordem antes de termos tomado a Cruz como Cruzado. Ao retornarmos da Cruzada, ou se a abandonarmos, faremos imediatamente plena justiça. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-53',
          number: '53',
          text: 'Teremos dilação semelhante ao prestar justiça em relação a florestas que devam ser desaflorestadas, ou que devam permanecer florestas, quando estas foram inicialmente aflorestadas por nosso pai Henrique ou por nosso irmão Ricardo; com a tutela de terras em "feudo" de outra pessoa, quando a tínhamos até então em virtude de um "feudo" detido de nós a título de serviço de cavaleiro por um terceiro; e com abadias fundadas em "feudo" de outra pessoa, nas quais o senhor do "feudo" reivindica ter um direito. Ao retornarmos da Cruzada, ou se a abandonarmos, faremos imediatamente plena justiça quanto a essas reclamações. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-54',
          number: '54',
          text: 'Ninguém será preso ou aprisionado por denúncia de uma mulher pela morte de qualquer pessoa, exceto pelo seu marido.',
        },
        {
          id: 'mc-55',
          number: '55',
          text: 'Todas as multas que nos foram pagas injustamente e contra a lei da terra, e todas as multas que exigimos injustamente, serão inteiramente remitidas ou a questão será decidida por voto majoritário dos vinte e cinco barões referidos na cláusula 61, juntamente com Estevão, arcebispo de Cantuária, se puder estar presente, e outros que ele desejar trazer consigo. Se o arcebispo não puder estar presente, os procedimentos prosseguirão sem ele, desde que, se algum dos vinte e cinco barões estiver envolvido em processo semelhante, seu julgamento seja posto de lado e outra pessoa seja escolhida e juramentada em seu lugar, como substituta para aquela única ocasião, pelo restante dos vinte e cinco. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-56',
          number: '56',
          text: 'Se tivermos privado ou despojado quaisquer galeses de terras, liberdades ou qualquer outra coisa na Inglaterra ou no País de Gales, sem o julgamento legítimo de seus pares, estas deverão ser imediatamente devolvidas. Uma disputa sobre este ponto será determinada nas Marcas pelo julgamento dos pares. O direito inglês se aplicará às posses de terra na Inglaterra, o direito galês às do País de Gales e o direito das Marcas às das Marcas. Os galeses nos tratarão a nós e aos nossos da mesma forma.',
        },
        {
          id: 'mc-57',
          number: '57',
          text: 'Nos casos em que um galês foi privado ou despojado de algo, sem o julgamento legítimo de seus pares, por nosso pai, o rei Henrique, ou por nosso irmão, o rei Ricardo, e isso permanece em nossas mãos ou é detido por outros sob nossa garantia, teremos dilação pelo prazo comumente concedido aos Cruzados, a menos que uma ação judicial tenha sido iniciada ou uma inquirição tenha sido feita por nossa ordem antes de termos tomado a Cruz como Cruzado. Mas ao retornarmos da Cruzada, ou se a abandonarmos, faremos imediatamente plena justiça de acordo com as leis do País de Gales e das referidas regiões. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-58',
          number: '58',
          text: 'Restituiremos imediatamente o filho de Llywelyn, todos os reféns galeses e as cartas entregues a nós como garantia de paz. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-59',
          number: '59',
          text: 'Quanto à restituição das irmãs e reféns de Alexandre, rei da Escócia, de suas liberdades e de seus direitos, trataremos com ele da mesma forma que com os nossos outros barões da Inglaterra, salvo se parecer pelas cartas que detemos de seu pai Guilherme, antigo rei da Escócia, que ele deva ser tratado de outra forma. Esta questão será resolvida pelo julgamento de seus pares em nossa corte. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-60',
          number: '60',
          text: 'Todos esses costumes e liberdades que concedemos serão observados em nosso reino no que diz respeito às nossas próprias relações com nossos súditos. Que todos os homens de nosso reino, sejam clérigos ou laicos, os observem igualmente em suas relações com os seus próprios homens.',
        },
        {
          id: 'mc-61',
          number: '61',
          text: 'COMO CONCEDEMOS TODAS ESSAS COISAS a Deus, para a melhor ordenação de nosso reino e para apaziguar a discórdia que surgiu entre nós e nossos barões, e como desejamos que sejam gozadas em sua totalidade, com força duradoura, para sempre, damos e concedemos aos barões a seguinte garantia:\n\nOs barões elegerão vinte e cinco de seus membros para manter e fazer com que sejam observadas, com todo seu poder, a paz e as liberdades concedidas e confirmadas a eles por esta carta.\n\nSe nós, nosso justiceiro-chefe, nossos oficiais ou qualquer um de nossos servidores ofendermos em qualquer sentido qualquer homem, ou transgredirmos quaisquer artigos da paz ou desta garantia, e a ofensa for levada ao conhecimento de quatro dos referidos vinte e cinco barões, eles virão a nós — ou na nossa ausência do reino ao justiceiro-chefe — para declará-la e reclamar reparação imediata. Se nós, ou na nossa ausência no exterior o justiceiro-chefe, não fizermos reparação dentro de quarenta dias, contados do dia em que a ofensa nos foi declarada ou a ele, os quatro barões levarão o assunto ao restante dos vinte e cinco barões, que poderão constranger-nos e atacar-nos de todas as formas possíveis, com o apoio de toda a comunidade do país, tomando nossos castelos, terras, possessões ou qualquer outra coisa, ressalvadas apenas nossas próprias pessoas e as da rainha e de nossos filhos, até terem obtido a reparação que determinaram. Após obterem a reparação, poderão retomar sua obediência normal a nós.\n\nQualquer homem que assim o desejar poderá prestar juramento de obedecer às ordens dos vinte e cinco barões para o alcance desses fins e de unir-se a eles para nos atacar na medida de seu poder. Damos permissão pública e livre para prestar esse juramento a qualquer homem que assim o deseje, e em nenhum momento proibiremos qualquer homem de prestá-lo. De fato, compeliremos quaisquer de nossos súditos que se recusem a prestá-lo a fazê-lo sob nossa ordem.\n\nSe um dos vinte e cinco barões morrer, sair do país ou for impedido de qualquer outra forma de desempenhar suas funções, o restante escolherá outro barão em seu lugar, a seu critério, que será devidamente juramentado como foram.\n\nNo caso de divergência entre os vinte e cinco barões sobre qualquer assunto a eles submetido para decisão, o veredicto da maioria presente terá a mesma validade que um veredicto unânime de todos os vinte e cinco, estivessem todos presentes ou alguns dos convocados relutantes ou impossibilitados de comparecer.\n\nOs vinte e cinco barões prestarão juramento de cumprir todos os artigos acima fielmente e farão com que sejam cumpridos pelos outros na medida de seu poder.\n\nNão procuraremos obter de ninguém, por nossos próprios esforços ou os de terceiros, nada pelo qual qualquer parte dessas concessões ou liberdades possa ser revogada ou diminuída. Se tal coisa for obtida, será nula e sem efeito e não a usaremos em nenhum momento, nem por nós mesmos nem por terceiros. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-62',
          number: '62',
          text: 'Remitimos e perdoamos plenamente a todos os homens qualquer má vontade, dano ou rancores surgidos entre nós e nossos súditos, sejam clérigos ou laicos, desde o início da disputa. Além disso, remitimos plenamente e, por nossa parte, também perdoamos a todos os clérigos e laicos quaisquer ofensas cometidas em consequência da referida disputa entre a Páscoa do décimo sexto ano de nosso reinado (isto é, 1215) e a restauração da paz.\n\nAlém disso, mandamos lavrar cartas patentes para os barões, atestando esta garantia e as concessões acima expostas, sob os selos de Estevão, arcebispo de Cantuária, Henrique, arcebispo de Dublin, dos outros bispos acima mencionados e do mestre Pandulfo. *(*) Omitida nas reemissões posteriores.*',
        },
        {
          id: 'mc-63',
          number: '63',
          text: 'É, PORTANTO, NOSSA VONTADE E ORDEM que a Igreja inglesa seja livre e que os homens em nosso reino tenham e guardem todas essas liberdades, direitos e concessões, bem e pacificamente em sua plenitude e inteireza, para eles e seus herdeiros, de nós e de nossos herdeiros, em todas as coisas e em todos os lugares para sempre.\n\nTanto nós como os barões juramos que tudo isso será observado de boa-fé e sem engano. Testemunhas as pessoas acima mencionadas e muitas outras.\n\nDado por nossa mão no campo que se chama Runnymede, entre Windsor e Staines, no décimo quinto dia de junho do décimo sétimo ano de nosso reinado (isto é, 1215: o novo ano de reinado começou em 28 de maio). *(*) Omitida nas reemissões posteriores.*',
        },
      ],
    },
    {
      id: 'glossario',
      title: 'Glossário',
      type: 'glossary',
      glossaryEntries: [
        {
          term: 'auxílio',
          definition: 'Tributo feudal extraordinário que o senhor podia exigir de seus vassalos em ocasiões específicas, como o resgate de sua própria pessoa, a investidura de cavaleiro do filho mais velho ou o casamento da filha mais velha. Em inglês, aid.',
        },
        {
          term: 'escutágio',
          definition: 'Pagamento em dinheiro feito por um vassalo ao senhor feudal em substituição ao serviço militar devido. Em inglês, scutage.',
        },
        {
          term: 'relevação',
          definition: 'Taxa paga pelo herdeiro maior de idade ao senhor feudal para ter direito de entrar na posse de terras herdadas. Em inglês, relief.',
        },
      ],
    },
    {
      id: 'fontes',
      title: 'Fontes e referências',
      type: 'text',
      content: `O texto-base desta tradução é a versão inglesa da Magna Carta de 1215 produzida e disponibilizada pela British Library, que verte o latim original para o inglês moderno buscando transmitir o sentido do texto, e não sua redação literal. A página original da British Library que hospedava essa tradução não está mais disponível; o mesmo texto, com a autoria e o crédito preservados, pode ser consultado em:

THE NATIONAL ARCHIVES (Reino Unido). Magna Carta, 1215. Kew: The National Archives, [201-?]. Tradução de: British Library. Disponível em: https://www.nationalarchives.gov.uk/education/resources/magna-carta/british-library-magna-carta-1215-runnymede/. Acesso em: 1 ago. 2026.

Língua do original: latim.

Tradução para o português: própria, elaborada a partir da versão inglesa da British Library indicada acima. Não houve cotejo direto com o texto latino original nesta tradução.`,
    },
  ],
};
