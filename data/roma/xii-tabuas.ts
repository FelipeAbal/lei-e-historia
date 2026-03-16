import { HistoricalDocument } from '../types';

export const xiiTabuas: HistoricalDocument = {
  id: 'xii-tabuas',
  title: 'Lei das XII Tábuas',
  subtitle: 'A Lei Escrita de Roma',
  date: 'c. 451–450 a.C.',
  era: 'Roma',
  language: 'Latim',
  description: 'O primeiro corpo normativo escrito da sociedade romana. Elaborada no início da República como resposta ao conflito entre patrícios e plebeus, fixou por escrito costumes até então controlados pela elite aristocrática.',
  sections: [
    {
      id: 'context',
      title: 'Introdução',
      type: 'text',
      content: `A chamada Lei das XII Tábuas constitui o primeiro corpo normativo escrito da sociedade romana. Elaborada entre os anos de 451 e 450 a.C., no início da República, sua redação está diretamente vinculada ao conflito político entre patrícios e plebeus, que marcou profundamente a formação das instituições romanas.

Até então, o direito romano baseava-se em costumes não escritos, interpretados e aplicados pelos magistrados patrícios, especialmente os pontífices. Essa situação permitia amplo espaço para decisões arbitrárias e para o uso do saber jurídico como instrumento de dominação social. A exigência plebeia pela fixação escrita das normas visava justamente limitar esse poder e tornar previsíveis as decisões judiciais.

A tradição romana relata que uma comissão extraordinária, o decenvirato, foi encarregada de redigir as leis. O resultado desse trabalho foram as Doze Tábuas, expostas publicamente no Fórum, para que todos os cidadãos pudessem conhecê-las. A publicidade da norma não significou igualdade jurídica plena, mas representou uma mudança estrutural no modo de exercício do poder normativo.

As Tábuas não formam um código sistemático no sentido moderno. Elas reúnem disposições fragmentárias sobre processo, família, propriedade, obrigações, delitos, penas e ritos religiosos. Sua lógica é casuística e profundamente marcada por uma sociedade agrária, patriarcal e hierarquizada.

Do ponto de vista histórico, as Doze Tábuas não devem ser lidas como o embrião de um Direito racional e universal. Elas expressam uma forma específica de organização social e de resolução de conflitos, em que a violência, a religião e a desigualdade jurídica ocupam lugar central. Ainda assim, sua importância reside no fato de terem fixado limites mínimos à arbitrariedade e inaugurado a tradição romana da lei escrita.

O texto das Tábuas não chegou até nós de forma íntegra. O que se conhece atualmente resulta de fragmentos preservados por autores posteriores, como Cícero, Gaio, Aulo Gélio e outros juristas e antiquários romanos. A apresentação aqui adotada organiza esses fragmentos de modo editorial, com indicação de lacunas e sem pretensão de reconstruir um texto original inexistente.`
    },
    {
      id: 'tabua-1',
      title: 'Tábua I – Procedimento preliminar ao julgamento',
      type: 'articles',
      articles: [
        { id: 't1-1', number: '1', text: 'Se alguém convoca outro a juízo, este deverá comparecer. Se não comparecer, o convocante chamará uma testemunha. Feito isso, poderá conduzi-lo à força.' },
        { id: 't1-2', number: '2', text: 'Se o convocado tentar esquivar-se ou fugir, o convocante poderá lançar mão sobre ele.' },
        { id: 't1-3', number: '3', text: 'Se doença ou velhice impedir o comparecimento, aquele que convoca deverá fornecer um meio de transporte. Se não quiser, não será obrigado a fornecer carruagem acolchoada.' },
        { id: 't1-4', number: '4', text: 'Para um cidadão possuidor de bens suficientes, outro cidadão da mesma condição será fiador de seu comparecimento. Para um proletário, qualquer pessoa poderá servir de fiador.' },
        { id: 't1-5', number: '5', text: 'Quando as partes chegarem a um acordo, o magistrado o proclamará.' },
        { id: 't1-6', number: '6', text: 'Se não chegarem a acordo, deverão expor sua causa no comício ou no fórum antes do meio-dia. Ambas as partes deverão estar presentes e sustentar suas alegações.' },
        { id: 't1-7', number: '7', text: 'Se uma das partes não comparecer, após o meio-dia a causa será julgada em favor da parte presente.' },
        { id: 't1-8', number: '8', text: 'Se ambas as partes estiverem presentes, o pôr do sol será o limite para o encerramento do processo.' },
        { id: 't1-9', number: '9', text: 'As partes deverão prestar garantias e contragarantias de comparecimento.' },
      ]
    },
    {
      id: 'tabua-2',
      title: 'Tábua II – Do julgamento',
      type: 'articles',
      articles: [
        { id: 't2-1', number: '1', text: 'Na ação do depósito solene, cada parte deverá depositar quinhentos asses quando o valor da causa for igual ou superior a mil asses; cinquenta asses quando inferior. Nos casos relativos à liberdade de uma pessoa, o depósito será sempre de cinquenta asses.' },
        { id: 't2-2', number: '2', text: 'Doença grave, compromisso judicial com estrangeiro ou outro impedimento legítimo suspenderá o julgamento.' },
        { id: 't2-3', number: '3', text: 'Quem necessitar de testemunho deverá, a cada três dias, comparecer à porta da casa da testemunha e chamá-la.' },
      ]
    },
    {
      id: 'tabua-3',
      title: 'Tábua III – Das dívidas',
      type: 'articles',
      articles: [
        { id: 't3-1', number: '1', text: 'Para dívida reconhecida ou declarada em juízo, concedem-se trinta dias para pagamento.' },
        { id: 't3-2', number: '2', text: 'Decorrido esse prazo sem pagamento, o credor poderá lançar mão sobre o devedor e levá-lo a juízo.' },
        { id: 't3-3', number: '3', text: 'Se ninguém garantir a dívida, o credor poderá manter o devedor sob custódia, preso por correntes de no mínimo quinze libras.' },
        { id: 't3-4', number: '4', text: 'O devedor poderá viver às suas expensas; se não o fizer, o credor deverá fornecer-lhe uma libra de pão por dia.' },
        { id: 't3-5', number: '5', text: 'Se não houver acordo, o devedor permanecerá preso por sessenta dias e será apresentado em três dias de mercado sucessivos. No terceiro, poderá ser executado ou vendido além do Tibre.' },
        { id: 't3-6', number: '6', text: 'Se os credores cortarem o corpo em partes, não haverá punição, ainda que as partes não sejam iguais.' },
      ]
    },
    {
      id: 'tabua-4',
      title: 'Tábua IV – Do poder paterno',
      type: 'articles',
      articles: [
        { id: 't4-1', number: '1', text: 'A criança nascida com deformidade grave deverá ser morta imediatamente.' },
        { id: 't4-2', number: '2', text: 'Se o pai vender o filho três vezes, o filho ficará livre do poder paterno.' },
        { id: 't4-3', number: '3', text: 'Para repudiar a esposa, o marido deverá ordenar que cuide de seus bens, tomar-lhe as chaves e expulsá-la.' },
        { id: 't4-4', number: '4', text: 'O filho concebido, mas ainda não nascido, tem direito à herança se vier a nascer.' },
      ]
    },
    {
      id: 'tabua-5',
      title: 'Tábua V – Da herança e da tutela',
      type: 'articles',
      articles: [
        { id: 't5-1', number: '1', text: 'As mulheres permanecerão sob tutela, ainda que atinjam a maioridade, exceto as vestais.' },
        { id: 't5-2', number: '2', text: 'Os bens mancipáveis de mulher sob tutela dos agnados não poderão ser adquiridos por usucapião sem autorização do tutor.' },
        { id: 't5-3', number: '3', text: 'Conforme o testamento disponha sobre bens ou tutela, assim valerá a lei.' },
        { id: 't5-4', number: '4', text: 'Morrendo alguém sem testamento e sem herdeiro direto, a herança caberá ao agnado mais próximo.' },
        { id: 't5-5', number: '5', text: 'Na falta de agnado, os gentis herdarão.' },
        { id: 't5-6', number: '6', text: 'Na ausência de tutor testamentário, os agnados serão tutores.' },
        { id: 't5-7', number: '7', text: 'O louco ficará sob guarda dos agnados; o pródigo será privado da administração de seus bens.' },
        { id: 't5-8', number: '8', text: 'Morrendo o liberto sem herdeiro direto, o patrono herdará.' },
        { id: 't5-9', number: '9', text: 'As dívidas serão repartidas entre os herdeiros na proporção de suas quotas.' },
        { id: 't5-10', number: '10', text: 'A partilha de herança ocorrerá quando os coerdeiros desejarem dissolver a comunhão.' },
      ]
    },
    {
      id: 'tabua-6',
      title: 'Tábua VI – Propriedade e posse',
      type: 'articles',
      articles: [
        { id: 't6-1', number: '1', text: 'Quando alguém realiza um vínculo obrigacional (nexum) ou uma alienação formal (mancipatio), aquilo que declarou verbalmente terá força de lei.' },
        { id: 't6-2', number: '2', text: 'São válidas tanto a alienação formal (mancipatio) quanto a cessão em juízo (in iure cessio).' },
        { id: 't6-3', number: '3', text: 'A coisa vendida e entregue só se torna propriedade do comprador quando o preço é pago ou garantido por fiador ou penhor.' },
        { id: 't6-4', number: '4', text: 'O vendedor responde apenas pelos defeitos que declarou; quanto aos defeitos que negou expressamente, responde em dobro.' },
        { id: 't6-5', number: '5', text: 'O direito de vínculo e de alienação é o mesmo para o cidadão fiel e para aquele que foi reintegrado à comunidade.' },
        { id: 't6-6', number: '6', text: 'Contra o estrangeiro, o direito de propriedade não prescreve.' },
        { id: 't6-7', number: '7', text: 'A usucapião dos bens móveis completa-se em um ano; a dos imóveis e edifícios, em dois anos.' },
        { id: 't6-8', number: '8', text: 'O escravo declarado livre sob condição, se entregar ao herdeiro a soma estipulada, torna-se livre, ainda que tenha sido alienado.' },
        { id: 't6-9', number: '9', text: 'A mulher que não deseja submeter-se à manus do marido deverá ausentar-se da casa por três noites consecutivas a cada ano.' },
        { id: 't6-10', number: '10', text: 'Em litígios sobre liberdade pessoal, a posse provisória será concedida a quem afirma a liberdade.' },
        { id: 't6-11', number: '11', text: 'A madeira incorporada a edifício ou vinha não pode ser retirada; cabe ação em dobro contra quem a utilizou indevidamente.' },
        { id: 't6-12', number: '12', text: 'Enquanto os frutos não forem colhidos, a madeira não pode ser reclamada.' },
      ]
    },
    {
      id: 'tabua-7',
      title: 'Tábua VII – Direito imobiliário',
      type: 'articles',
      articles: [
        { id: 't7-1', number: '1', text: 'Não se adquire por usucapião a faixa de cinco pés ao longo do limite entre propriedades.' },
        { id: 't7-2', number: '2', text: 'Deve haver um espaço de dois pés e meio ao redor dos muros.' },
        { id: 't7-3', number: '3', text: 'Se houver controvérsia sobre limites, três árbitros deverão fixá-los.' },
        { id: 't7-4', number: '4', text: 'Normas relativas a cercas, campos herdados e casas rurais.' },
        { id: 't7-5', number: '5', text: 'A largura da estrada será de oito pés em linha reta e dezesseis pés nas curvas.' },
        { id: 't7-6', number: '6', text: 'Se os vizinhos não conservarem a estrada, será lícito transitar onde se quiser.' },
        { id: 't7-7', number: '7', text: 'Se a água desviada causar dano, caberá arbitragem.' },
        { id: 't7-8', number: '8', text: 'Se um curso de água público causar prejuízo a particular, caberá ação reparatória.' },
        { id: 't7-9', number: '9', text: 'Os galhos das árvores podem ser cortados até a altura de quinze pés.' },
        { id: 't7-10', number: '10', text: 'Os frutos que caírem no terreno vizinho podem ser recolhidos pelo proprietário da árvore.' },
      ]
    },
    {
      id: 'tabua-8',
      title: 'Tábua VIII – Delitos e penas privadas',
      type: 'articles',
      articles: [
        { id: 't8-1', number: '1', text: 'Quem compuser ou cantar verso infamatório será punido com a morte.' },
        { id: 't8-2', number: '2', text: 'Quem lançar encantamentos maléficos será punido.' },
        { id: 't8-3', number: '3', text: 'Quem quebrar o membro de outrem sofrerá retaliação equivalente, salvo acordo.' },
        { id: 't8-4', number: '4', text: 'Quem quebrar osso de homem livre pagará trezentos asses; se for escravo, cento e cinquenta.' },
        { id: 't8-5', number: '5', text: 'Por injúria simples, a pena será de vinte e cinco asses.' },
        { id: 't8-6', number: '6', text: 'Se um animal causar dano, caberá entrega do animal ou indenização.' },
        { id: 't8-7', number: '7', text: 'O furto noturno pode ser punido com morte lícita.' },
        { id: 't8-8', number: '8', text: 'O furto diurno só autoriza morte se houver resistência armada.' },
        { id: 't8-9', number: '9', text: 'O ladrão manifesto sofrerá pena corporal ou servidão.' },
        { id: 't8-10', number: '10', text: 'A coisa furtada não se adquire por usucapião.' },
      ]
    },
    {
      id: 'tabua-9',
      title: 'Tábua IX – Direito público',
      type: 'articles',
      articles: [
        { id: 't9-1', number: '1', text: 'É vedada a criação de leis de exceção.' },
        { id: 't9-2', number: '2', text: 'Nenhuma pena capital pode ser aplicada sem julgamento pela assembleia máxima.' },
        { id: 't9-3', number: '3', text: 'O juiz ou árbitro corrupto sofrerá pena de morte.' },
        { id: 't9-4', number: '4', text: 'É crime entregar cidadão ao inimigo público.' },
        { id: 't9-5', number: '5', text: 'É proibida a execução sem condenação.' },
      ]
    },
    {
      id: 'tabua-10',
      title: 'Tábua X – Direito sagrado',
      type: 'articles',
      articles: [
        { id: 't10-1', number: '1', text: 'É proibido enterrar ou cremar cadáver dentro da cidade.' },
        { id: 't10-2', number: '2', text: 'As despesas funerárias devem ser limitadas.' },
        { id: 't10-3', number: '3', text: 'É vedado o excesso de lamentos e ritos fúnebres.' },
        { id: 't10-4', number: '4', text: 'Não se pode recolher ossos para novo funeral, salvo exceções.' },
        { id: 't10-5', number: '5', text: 'O ouro só é permitido em próteses dentárias.' },
      ]
    },
    {
      id: 'tabua-11-12',
      title: 'Tábuas XI e XII – Leis complementares',
      type: 'articles',
      articles: [
        { id: 't11-1', number: '1', text: 'É proibido o casamento entre patrícios e plebeus.' },
        { id: 't11-2', number: '2', text: 'Normas sobre dias favoráveis à atividade jurídica.' },
        { id: 't11-3', number: '3', text: 'O escravo que causar dano gera ação contra o senhor.' },
        { id: 't11-4', number: '4', text: 'É proibida a consagração de coisa litigiosa.' },
        { id: 't11-5', number: '5', text: 'O que o povo decidir por último terá força de lei.' },
      ]
    },
    {
      id: 'glossary',
      title: 'Glossário',
      type: 'glossary',
      glossaryEntries: [
        { term: 'Agnatio', definition: 'Forma de parentesco jurídico baseada na autoridade do pater familias. Inclui apenas os membros da família submetidos à mesma potência masculina. Não se confunde com parentesco biológico amplo.' },
        { term: 'Arbiter', definition: 'Árbitro designado para solucionar litígios específicos, sobretudo em conflitos de natureza técnica ou patrimonial. Diferente do juiz ordinário, possui maior margem de apreciação.' },
        { term: 'Auctoritas', definition: 'Poder de validação jurídica ligado à tradição e ao reconhecimento social. Nas XII Tábuas, refere-se à legitimidade do domínio ou da transmissão de bens ao longo do tempo.' },
        { term: 'Caput', definition: 'Condição jurídica da pessoa. Abrange status de liberdade, cidadania e posição familiar. Leis relativas ao caput envolvem sanções graves, inclusive de natureza política ou corporal.' },
        { term: 'Civis', definition: 'Membro da comunidade política romana. O termo não implica igualdade jurídica universal, pois mulheres, libertos e clientes possuem capacidades restritas.' },
        { term: 'Cliens', definition: 'Indivíduo ligado a um patrono por relação de dependência e proteção. A violação dessa relação, sobretudo pelo patrono, é tratada como falta grave.' },
        { term: 'Conubium', definition: 'Capacidade jurídica para contrair casamento válido segundo o Direito romano. Nas XII Tábuas, o casamento entre patrícios e plebeus é proibido.' },
        { term: 'Curator', definition: 'Responsável legal pela administração dos bens de pessoas consideradas incapazes, como pródigos ou insanos.' },
        { term: 'Decemviri', definition: 'Comissão de dez homens encarregada da redação das XII Tábuas entre 451 e 450 a.C. Exercia funções legislativas e judiciais durante seu mandato.' },
        { term: 'Delictum', definition: 'Ato ilícito de natureza privada, que gera obrigação de reparação ou punição. Abrange desde lesões corporais até furtos e danos patrimoniais.' },
        { term: 'Furiosus', definition: 'Pessoa considerada mentalmente incapaz. A administração de seus bens é transferida aos parentes agnáticos ou ao grupo familiar.' },
        { term: 'In ius', definition: 'Expressão que designa o comparecimento formal perante a autoridade judicial. Marca o início do procedimento legal.' },
        { term: 'Iniuria', definition: 'Ofensa ou dano injusto causado a alguém. Pode envolver agressão física, insulto ou violação de direitos reconhecidos.' },
        { term: 'Intestatus', definition: 'Pessoa que morre sem deixar testamento válido. A sucessão segue regras estritas de parentesco agnático.' },
        { term: 'Iudex', definition: 'Juiz privado designado para decidir um caso específico, após a fase inicial perante o magistrado.' },
        { term: 'Lex', definition: 'Norma formalmente aprovada pela comunidade política. Nas XII Tábuas, a lex se apresenta como fixação escrita de costumes anteriormente controlados pela elite patrícia.' },
        { term: 'Manus', definition: 'Poder marital exercido pelo marido sobre a esposa em determinadas formas de casamento. Implica transferência da mulher para a família do marido.' },
        { term: 'Mancipatio', definition: 'Forma solene de transferência de propriedade de certos bens considerados essenciais, como terras, escravos e animais de trabalho.' },
        { term: 'Mos maiorum', definition: 'Conjunto de costumes ancestrais que fundamentam a vida social e jurídica romana. As XII Tábuas não substituem o mos, mas o fixam parcialmente por escrito.' },
        { term: 'Nexum', definition: 'Forma arcaica de vínculo obrigacional que podia implicar sujeição pessoal do devedor ao credor, inclusive com perda da liberdade.' },
        { term: 'Patronus', definition: 'Antigo senhor de um liberto ou chefe de uma rede de clientela. Possui deveres de proteção e lealdade.' },
        { term: 'Pater familias', definition: 'Chefe masculino do grupo doméstico, detentor da autoridade plena sobre pessoas e bens da família. Sua potência inclui poderes extremos, como o de vida e morte em certos contextos arcaicos.' },
        { term: 'Pignoris capio', definition: 'Apreensão direta de bens como forma de execução sem necessidade de decisão judicial prévia, em situações previstas pela lei.' },
        { term: 'Proletarius', definition: 'Cidadão romano sem patrimônio suficiente para contribuir com impostos significativos. Possui direitos políticos limitados.' },
        { term: 'Sacramentum', definition: 'Depósito ritual feito pelas partes em litígio. A parte vencida perde o valor, que é destinado ao culto religioso, reforçando a dimensão sagrada do processo.' },
        { term: 'Sacer', definition: 'Indivíduo colocado fora da proteção jurídica e religiosa da comunidade. Pode ser morto sem que isso configure homicídio ritual.' },
        { term: 'Talio', definition: 'Princípio da retaliação corporal direta, aplicado em certos casos de lesão física, salvo acordo de compensação.' },
        { term: 'Testamentum', definition: 'Ato formal pelo qual o pater familias dispõe de seus bens e da tutela dos dependentes após sua morte.' },
        { term: 'Tutela', definition: 'Regime de proteção jurídica aplicado a mulheres e menores, limitando sua autonomia patrimonial.' },
        { term: 'Usucapio', definition: 'Aquisição da propriedade pela posse prolongada, desde que atendidos os requisitos legais de tempo e boa-fé.' },
        { term: 'Vindicia', definition: 'Posse provisória concedida durante o curso de um processo, especialmente relevante em disputas sobre liberdade pessoal.' },
      ]
    }
  ]
};
