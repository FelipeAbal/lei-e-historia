import { HistoricalDocument } from '../types';

export const hamurabi: HistoricalDocument = {
  id: 'hamurabi',
  title: 'Código de Hamurabi',
  subtitle: 'A Lei de Talião',
  date: 'c. 1750 a.C.',
  era: 'Mesopotâmia',
  language: 'Acadiano',
  description: 'O mais célebre código de leis da Antiguidade, promulgado pelo rei Hamurabi da Babilônia. Com cerca de 282 dispositivos, abrange desde direito penal e familiar até regulação comercial e agrária, consolidando o princípio da lei de talião.',
  sections: [
    {
      id: 'context',
      title: 'Contexto Histórico',
      type: 'text',
      content: `O Código de Hamurabi foi promulgado durante o reinado de Hamurabi, rei da Babilônia, que governou aproximadamente entre 1792 e 1750 a.C. O texto deve ser situado na primeira metade do século XVIII a.C., em um período de profunda reorganização política da Mesopotâmia, marcado pela ascensão da Babilônia como potência regional e pela incorporação de diversas cidades e populações sob uma autoridade central.

Hamurabi não foi apenas um legislador, mas sobretudo um governante hábil, cuja atuação combinou diplomacia, campanhas militares e reformas administrativas. Ao longo de seu reinado, ampliou significativamente o território babilônico, submetendo cidades rivais como Larsa, Eshnunna e Mari, e transformando a Babilônia no principal centro político da região. A legislação associada ao seu nome deve ser compreendida nesse contexto de consolidação do poder e de necessidade de padronização das práticas jurídicas em um território socialmente heterogêneo.

No prólogo do código, Hamurabi apresenta sua autoridade como derivada da vontade divina. Os deuses Anu e Enlil lhe conferem o poder régio, enquanto o deus Shamash, divindade associada à justiça, é invocado como fonte última da lei. Essa legitimação religiosa cumpre função política central, ao posicionar o rei como mediador entre a ordem divina e a vida social, responsável por garantir justiça, estabilidade e previsibilidade nas relações jurídicas.

O texto constrói a imagem de um soberano cuja missão é "fazer justiça na terra", protegendo os fracos contra os fortes e assegurando a ordem social. A lei, contudo, não se apresenta como expressão de igualdade abstrata. Ao contrário, o código reflete uma sociedade hierarquizada, na qual o status jurídico das pessoas condiciona o tipo de proteção, a gravidade das penas e o valor das compensações.

O conjunto normativo atribuído a Hamurabi é composto por disposições casuísticas, formuladas em hipóteses concretas. Essa técnica revela uma preocupação prática com conflitos recorrentes da vida urbana, agrícola e comercial, oferecendo soluções padronizadas para disputas envolvendo trabalho, crédito, propriedade, família, escravidão e violência.

O prólogo cumpre, assim, dupla função. Por um lado, afirma a autoridade do rei e a origem divina da legislação. Por outro, apresenta o direito como instrumento fundamental da organização política babilônica, capaz de produzir estabilidade em um território amplo e diverso. Lido hoje, o texto não deve ser interpretado como uma declaração de direitos universais, mas como um documento essencial para compreender as relações entre poder, justiça e direito no mundo antigo.`
    },
    {
      id: 'about',
      title: 'Sobre o texto',
      type: 'text',
      content: `O Código de Hamurabi é conhecido principalmente a partir de uma estela de diorito negro descoberta em 1901, na cidade de Susa, no atual Irã, onde havia sido levada como espólio de guerra séculos após sua promulgação. A estela apresenta, na parte superior, uma representação do rei Hamurabi diante do deus Shamash, reforçando visualmente a ideia de que a lei tem origem divina.

O texto foi gravado em escrita cuneiforme acádica e organiza-se em três grandes partes: prólogo, corpo das leis e epílogo. O corpo normativo é tradicionalmente numerado em 282 artigos, embora existam lacunas e trechos danificados na estela, o que torna essa numeração uma convenção moderna adotada para facilitar a leitura e a referência.

As leis são redigidas de forma casuística, seguindo a estrutura "se... então...", e abordam uma ampla gama de temas, como contratos, propriedade, família, escravidão, trabalho, crédito, responsabilidade civil e penal. A aplicação das sanções varia conforme o status jurídico das pessoas envolvidas, refletindo a organização hierárquica da sociedade babilônica.

O texto apresentado neste site baseia-se em traduções acadêmicas consolidadas e em edições críticas amplamente utilizadas na historiografia do Direito Antigo. A linguagem foi ajustada para o português do Brasil, com preservação de termos técnicos e categorias jurídicas do período. Eventuais lacunas do texto original são indicadas expressamente, e a numeração das leis segue convenção editorial moderna, sem pretensão de reproduzir uma ordem "original" inexistente no sentido contemporâneo.`
    },
    {
      id: 'prologue',
      title: 'Prólogo',
      type: 'text',
      content: `Esta seção apresenta o prólogo antigo do Código de Hamurabi, distinto do prólogo editorial moderno. O texto é organizado em blocos contínuos, respeitando a estrutura original da estela, com linguagem ajustada ao português do Brasil, preservação de termos técnicos e indicação explícita de eventuais lacunas.

A versão aqui apresentada tem finalidade histórica e documental, permitindo a leitura direta do discurso régio e de sua legitimação divina, sem comentários intercalados.

Quando o grande Anu, rei dos Anunnaki, e Bel, senhor da terra e dos céus, determinador dos destinos do mundo, confiaram a Marduk o governo de toda a humanidade; quando foi pronunciado o elevado nome da Babilônia, quando ele a tornou célebre no mundo e nela estabeleceu um reino duradouro, cujos alicerces são firmes como o céu e a terra, então Anu e Bel me chamaram, a mim, Hamurabi, o príncipe eminente, o adorador dos deuses, para fazer justiça na terra, para destruir o mau e o injusto, para impedir que o forte oprimisse o fraco, para iluminar o mundo e assegurar o bem-estar do povo.

Eu sou Hamurabi, governador escolhido por Bel, aquele que fez a abundância chegar à terra, que realizou obras completas para Nippur e Durilu, que deu vida à cidade de Uruk, que forneceu água em abundância aos seus habitantes, que embelezou a cidade de Borsippa, que acumulou grãos para a poderosa Urash, que socorreu o povo em tempos de necessidade e que estabeleceu a segurança na Babilônia, o governador do povo, o servo cujas ações são agradáveis à deusa Anunit.`
    },
    {
      id: 'laws-1',
      title: 'I – Sortilégios, juízo divino, falso testemunho e prevaricação de juízes',
      type: 'articles',
      articles: [
        { id: 'h-1', number: '§ 1', text: 'Se alguém acusa outro e lhe imputa a prática de sortilégio, mas não consegue apresentar prova, aquele que fez a acusação deverá ser morto.' },
        { id: 'h-2', number: '§ 2', text: 'Se alguém imputa a outro a prática de sortilégio e não consegue prová-la, e aquele contra quem a acusação foi feita vai ao rio e se lança nele, se o rio o submerge, o acusador tomará posse da casa daquele. Mas, se o rio demonstrar sua inocência e ele sair ileso, o acusador deverá ser morto, e aquele que se lançou ao rio tomará posse da casa de seu acusador.' },
        { id: 'h-3', number: '§ 3', text: 'Se alguém, em um processo, se apresenta como testemunha de acusação e não prova o que declarou, e se o processo implicar perda de vida, essa testemunha deverá ser morta.' },
        { id: 'h-4', number: '§ 4', text: 'Se alguém se apresenta como testemunha em um processo relativo a grão ou dinheiro, deverá suportar a pena cominada naquele processo.' },
        { id: 'h-5', number: '§ 5', text: 'Se um juiz conduz um processo, profere uma decisão e a registra por escrito, e se posteriormente se demonstrar que sua decisão é errada, e esse juiz for considerado responsável pelo erro no processo que conduziu, ele deverá pagar doze vezes a pena prevista naquele processo e será publicamente afastado de sua cadeira de juiz. Ele não poderá jamais voltar a exercer a função de juiz em qualquer processo.' },
      ]
    },
    {
      id: 'laws-2',
      title: 'II – Crimes de furto e de roubo, reivindicação de bens móveis',
      type: 'articles',
      articles: [
        { id: 'h-6', number: '§ 6', text: 'Se alguém furta bens pertencentes a um deus ou à corte, deverá ser morto; igualmente deverá ser morto aquele que recebeu a coisa furtada.' },
        { id: 'h-7', number: '§ 7', text: 'Se alguém, sem testemunhas ou contrato, compra ou recebe em depósito ouro, prata, um escravo ou uma escrava, um boi, uma ovelha, um asno ou qualquer outro bem de um filho alheio ou de um escravo, será considerado ladrão e deverá ser morto.' },
        { id: 'h-8', number: '§ 8', text: 'Se alguém rouba um boi, uma ovelha, um asno, um porco ou um barco, e a coisa pertence a um deus ou à corte, deverá restituir trinta vezes o valor; se pertence a um liberto, deverá restituir dez vezes o valor. Se o ladrão não tiver com o que pagar, deverá ser morto.' },
        { id: 'h-9', number: '§ 9', text: 'Se alguém que perdeu um objeto o encontra em posse de outro, e este afirma que o comprou diante de testemunhas e o pagou, enquanto o proprietário afirma que trará testemunhas que reconhecem o objeto perdido, o comprador deverá apresentar o vendedor e as testemunhas da compra, e o proprietário deverá apresentar testemunhas que reconheçam o objeto. O juiz examinará os depoimentos diante de Deus. Se o vendedor for reconhecido como ladrão, deverá ser morto; o proprietário recuperará o objeto, e o comprador receberá da casa do vendedor o dinheiro que pagou.' },
        { id: 'h-10', number: '§ 10', text: 'Se o comprador não apresenta o vendedor nem as testemunhas da compra, mas o proprietário apresenta testemunhas que reconhecem o objeto, o comprador é o ladrão e deverá ser morto; o proprietário retomará o objeto perdido.' },
        { id: 'h-11', number: '§ 11', text: 'Se o proprietário do objeto perdido não apresenta testemunhas que o reconheçam, ele é um caluniador e deverá ser morto.' },
        { id: 'h-12', number: '§ 12', text: 'Se o vendedor for morto, o comprador deverá receber da casa do vendedor o quíntuplo do valor pago.' },
        { id: 'h-13', number: '§ 13', text: 'Se as testemunhas do vendedor não estiverem presentes, o juiz deverá fixar um prazo de seis meses. Se, ao fim desse prazo, as testemunhas não comparecerem, ele será considerado culpado e suportará a pena do processo.' },
        { id: 'h-14', number: '§ 14', text: 'Se alguém rouba o filho impúbere de outro, deverá ser morto.' },
        { id: 'h-15', number: '§ 15', text: 'Se alguém furta, pela porta da cidade, um escravo ou uma escrava da corte ou de um liberto, deverá ser morto.' },
        { id: 'h-16', number: '§ 16', text: 'Se alguém acolhe em sua casa um escravo ou uma escrava fugitivos da corte ou de um liberto e, após proclamação pública do mordomo, não os apresenta, o dono da casa deverá ser morto.' },
        { id: 'h-17', number: '§ 17', text: 'Se alguém apreende em campo aberto um escravo ou uma escrava fugitivos e os reconduz ao seu dono, o dono do escravo deverá pagar-lhe dois siclos de prata.' },
        { id: 'h-18', number: '§ 18', text: 'Se o escravo não nomeia seu senhor, deverá ser levado ao palácio; após as indagações necessárias, será reconduzido ao seu senhor.' },
        { id: 'h-19', number: '§ 19', text: 'Se alguém retém esse escravo em sua casa e posteriormente se descobre o escravo ali, deverá ser morto.' },
        { id: 'h-20', number: '§ 20', text: 'Se o escravo foge daquele que o apreendeu, este deverá jurar em nome de Deus ao dono do escravo e ficará livre de responsabilidade.' },
        { id: 'h-21', number: '§ 21', text: 'Se alguém faz um buraco em uma casa, deverá ser morto diante desse buraco e ali sepultado.' },
        { id: 'h-22', number: '§ 22', text: 'Se alguém comete roubo e é preso, deverá ser morto.' },
        { id: 'h-23', number: '§ 23', text: 'Se o salteador não for preso, aquele que foi roubado deverá reclamar diante de Deus tudo o que lhe foi subtraído; a aldeia e o governador, em cuja jurisdição o roubo ocorreu, deverão indenizar o prejuízo.' },
        { id: 'h-24', number: '§ 24', text: 'Se foram pessoas que pereceram, a aldeia e o governador deverão pagar uma mina de prata aos parentes.' },
        { id: 'h-25', number: '§ 25', text: 'Se ocorrer um incêndio na casa de alguém e aquele que vem apagar o fogo se apropria dos bens do dono da casa, deverá ser lançado no mesmo fogo.' },
      ]
    },
    {
      id: 'laws-3',
      title: 'III – Direitos e deveres dos oficiais, dos gregários e dos vassalos',
      type: 'articles',
      articles: [
        { id: 'h-26', number: '§ 26', text: 'Se um oficial ou um gregário, convocado para o serviço do rei, não comparece e coloca um mercenário em seu lugar, e este parte em seu lugar, o oficial ou o gregário deverá ser morto; aquele que o substituiu tomará posse de sua casa.' },
        { id: 'h-27', number: '§ 27', text: 'Se um oficial ou um gregário for feito prisioneiro durante uma derrota do rei, e em seguida seu campo e seu horto forem dados a outro que deles toma posse, quando ele retornar à sua aldeia, o campo e o horto deverão ser-lhe restituídos, e ele retomará sua posse.' },
        { id: 'h-28', number: '§ 28', text: 'Se um oficial ou um gregário for feito prisioneiro durante uma derrota do rei e, em sua ausência, seu filho puder ser investido do benefício, o campo e o horto deverão ser-lhe dados, e ele assumirá o encargo de seu pai.' },
        { id: 'h-29', number: '§ 29', text: 'Se o filho ainda for criança e não puder ser investido do benefício, um terço do campo e do horto deverá ser entregue à mãe, para que ela sustente o filho.' },
        { id: 'h-30', number: '§ 30', text: 'Se um oficial ou um gregário abandona seu campo, seu horto e sua casa, e outro toma posse desses bens e os utiliza, se o primeiro retorna e reivindica seus bens, eles não lhe deverão ser devolvidos; aquele que deles tomou posse continuará a usufruí-los.' },
        { id: 'h-31', number: '§ 31', text: 'Se ele abandona os bens por um ano e retorna, o campo, o horto e a casa deverão ser-lhe restituídos, e ele reassumirá sua posse.' },
        { id: 'h-32', number: '§ 32', text: 'Se um negociante resgata um oficial ou soldado feito prisioneiro no serviço do rei e o conduz de volta à sua aldeia, se houver recursos em sua casa, ele deverá pagar o próprio resgate; se não houver, o templo de sua aldeia deverá resgatá-lo; se o templo não dispuser de recursos, a corte deverá fazê-lo. Em nenhum caso o campo, o horto ou a casa poderão ser dados como pagamento do resgate.' },
        { id: 'h-33', number: '§ 33', text: 'Se um oficial superior abandona o serviço e coloca um mercenário em seu lugar, e este parte para o serviço do rei, o oficial superior deverá ser morto.' },
        { id: 'h-34', number: '§ 34', text: 'Se um oficial superior se apropria dos bens de um oficial inferior, o prejudica, o obriga a trabalhar por soldada, o entrega a um poderoso em um processo ou se apropria do presente que o rei concedeu ao oficial, ele deverá ser morto.' },
        { id: 'h-35', number: '§ 35', text: 'Se alguém compra de um oficial bois ou ovelhas que o rei lhe concedeu, perderá o dinheiro pago.' },
        { id: 'h-36', number: '§ 36', text: 'O campo, o horto e a casa de um oficial, de um gregário ou de um vassalo não podem ser vendidos.' },
        { id: 'h-37', number: '§ 37', text: 'Se alguém compra o campo, o horto ou a casa de um oficial, de um gregário ou de um vassalo, a tábua do contrato de venda deverá ser quebrada, ele perderá o dinheiro pago, e o campo, o horto e a casa retornarão ao proprietário.' },
        { id: 'h-38', number: '§ 38', text: 'Um oficial, gregário ou vassalo não pode dar em pagamento de obrigação, nem obrigar por escrito, à própria mulher ou à filha, o campo, o horto ou a casa de seu benefício.' },
        { id: 'h-39', number: '§ 39', text: 'O campo, o horto e a casa que tenham adquirido como propriedade particular podem ser obrigados por escrito e dados em pagamento de obrigação à própria mulher ou à filha.' },
        { id: 'h-40', number: '§ 40', text: 'Eles podem vender a um negociante ou a outro funcionário do Estado o campo, o horto ou a casa que possuam como propriedade; o comprador receberá o usufruto desses bens.' },
        { id: 'h-41', number: '§ 41', text: 'Se alguém cercou com sebes o campo, o horto ou a casa de um oficial, gregário ou vassalo e forneceu as estacas necessárias, quando o oficial, gregário ou vassalo retornar ao campo, horto ou casa, as estacas passarão a integrar sua propriedade.' },
      ]
    },
    {
      id: 'laws-4',
      title: 'IV – Locações e regime geral dos fundos rústicos, mútuo, locação de casas',
      type: 'articles',
      articles: [
        { id: 'h-42', number: '§ 42', text: 'Se alguém tomou um campo para cultivar e nele não fez crescer trigo, deverá ser demonstrado que realizou trabalhos no campo e deverá fornecer ao proprietário do campo a mesma quantidade de trigo que existe no campo vizinho.' },
        { id: 'h-43', number: '§ 43', text: 'Se ele não cultiva o campo e o deixa em abandono, deverá entregar ao proprietário do campo a quantidade de trigo existente no campo vizinho e deverá cavar, destorroar e restituir ao proprietário o campo que deixou inculto.' },
        { id: 'h-44', number: '§ 44', text: 'Se alguém se obriga a pôr em cultura, dentro de três anos, um campo que jaz inculto, mas é negligente e não o cultiva, deverá, no quarto ano, cavar, destorroar e cultivar o campo inculto, restituí-lo ao proprietário e pagar, por cada dez gan, dez gur de trigo.' },
        { id: 'h-45', number: '§ 45', text: 'Se alguém dá seu campo para cultivo mediante renda e recebe essa renda, mas sobrevém uma tempestade que destrói a safra, o prejuízo recai sobre o cultivador.' },
        { id: 'h-46', number: '§ 46', text: 'Se ele não recebe renda do campo, mas o concede pela terça ou pela quarta parte, o trigo existente no campo deverá ser dividido entre o cultivador e o proprietário conforme as partes ajustadas.' },
        { id: 'h-47', number: '§ 47', text: 'Se o cultivador, por não ter plantado sua estância no primeiro ano, deu o campo a cultivar, o proprietário não deverá culpá-lo; o campo foi cultivado e, na colheita, o proprietário receberá o trigo conforme o contrato.' },
        { id: 'h-48', number: '§ 48', text: 'Se alguém tem um débito a juros e uma tempestade devasta seu campo, destrói a colheita ou, por falta de água, o trigo não cresce, ele não deverá, nesse ano, entregar trigo ao credor; deverá alterar a tábua do contrato e não pagará juros naquele ano.' },
        { id: 'h-49', number: '§ 49', text: 'Se alguém toma dinheiro de um negociante e lhe concede um campo cultivável de trigo ou de sésamo, incumbindo-o de cultivá-lo e colher o produto para si, e se o cultivador semeia trigo ou sésamo no campo, por ocasião da colheita o proprietário receberá o trigo ou o sésamo existentes no campo e entregará ao negociante trigo correspondente ao dinheiro recebido, aos juros e à subsistência do cultivador.' },
        { id: 'h-50', number: '§ 50', text: 'Se ele concede um campo cultivável de trigo ou de sésamo, o proprietário receberá o trigo ou o sésamo existentes no campo e restituirá ao negociante o dinheiro com os juros.' },
        { id: 'h-51', number: '§ 51', text: 'Se não tiver dinheiro para entregar, deverá dar ao negociante trigo ou sésamo pelo valor do dinheiro recebido, acrescido dos juros conforme a taxa real.' },
        { id: 'h-52', number: '§ 52', text: 'Se o cultivador não semeou trigo ou sésamo no campo, o contrato não será considerado inválido.' },
        { id: 'h-53', number: '§ 53', text: 'Se alguém é negligente na manutenção de seu dique e, em consequência, forma-se uma fenda que inunda os campos da aldeia, aquele em cujo dique ocorreu a ruptura deverá ressarcir o trigo que fez perder.' },
        { id: 'h-54', number: '§ 54', text: 'Se não puder ressarcir o trigo perdido, deverá ser vendido por dinheiro juntamente com seus bens, e os agricultores prejudicados dividirão entre si o valor obtido.' },
        { id: 'h-55', number: '§ 55', text: 'Se alguém abre seu reservatório de água para irrigar, mas é negligente e a água inunda o campo do vizinho, deverá restituir o trigo conforme a produção do campo vizinho.' },
        { id: 'h-56', number: '§ 56', text: 'Se alguém deixa passar a água e ela inunda as culturas do vizinho, deverá pagar, por cada dez gan, dez gur de trigo.' },
        { id: 'h-57', number: '§ 57', text: 'Se um pastor não pede licença ao proprietário do campo para fazer pastar a erva às ovelhas e, sem o consentimento deste, faz pastar as ovelhas no campo, deverá pagar ao proprietário vinte gur de trigo por cada dez gan.' },
        { id: 'h-58', number: '§ 58', text: 'Se, depois que as ovelhas deixaram o campo da aldeia e ocuparam o recinto comum à porta da cidade, um pastor ainda assim deixa as ovelhas no campo e as faz pastar ali, deverá conservar o campo em que fez pastar e, por ocasião da colheita, deverá pagar ao proprietário sessenta gur por cada dez gan.' },
        { id: 'h-59', number: '§ 59', text: 'Se alguém, sem o conhecimento do proprietário do horto, corta lenha em horto alheio, deverá pagar meia mina de prata.' },
        { id: 'h-60', number: '§ 60', text: 'Se alguém entrega a um hortelão um campo para transformá-lo em horto, e este o planta e o cultiva por quatro anos, no quinto ano proprietário e hortelão deverão dividir entre si o produto, cabendo ao proprietário a sua parte do horto.' },
        { id: 'h-61', number: '§ 61', text: 'Se o hortelão não leva a termo a plantação do campo e deixa uma parte inculta, essa parte será consignada ao seu quinhão.' },
        { id: 'h-62', number: '§ 62', text: 'Se ele não transforma em horto o campo que lhe foi confiado e, sendo este um campo de espigas, o hortelão deverá pagar ao proprietário o produto do campo pelos anos em que permaneceu inculto, segundo a produção da herdade vizinha, plantar o campo cultivável e devolvê-lo ao proprietário.' },
        { id: 'h-63', number: '§ 63', text: 'Se ele transforma uma terra inculta em campo cultivado e a restitui ao proprietário, deverá pagar, a cada ano, dez gur de trigo por cada dez gan.' },
        { id: 'h-64', number: '§ 64', text: 'Se alguém dá o horto para lavra a um hortelão pelo tempo do arrendamento, o hortelão deverá entregar ao proprietário duas partes do produto do horto e conservar para si a terça parte.' },
        { id: 'h-65', number: '§ 65', text: 'Se o hortelão não lavra o horto e o produto diminui, ele deverá calcular o produto com base na produção do fundo vizinho.' },
      ]
    },
    {
      id: 'laws-lacuna-1',
      title: 'Lacuna no texto',
      type: 'text',
      content: `Após este ponto, o texto original apresenta lacunas correspondentes a aproximadamente cinco colunas da estela, tradicionalmente estimadas em cerca de trinta e cinco parágrafos.`
    },
    {
      id: 'laws-5',
      title: 'V – Relações entre comerciantes e comissionários',
      type: 'articles',
      articles: [
        { id: 'h-100', number: '§ 100', text: 'Com os juros do dinheiro, conforme a soma recebida, o comissionário deverá entregar uma obrigação por escrito e pagar o negociante no dia do vencimento.' },
        { id: 'h-101', number: '§ 101', text: 'Se, no lugar para onde foi, o comissionário não realizou negócio algum, deverá manter intacto o dinheiro que recebeu e restituí-lo ao negociante.' },
        { id: 'h-102', number: '§ 102', text: 'Se um negociante emprestou dinheiro a um comissionário para suas atividades comerciais e este, no local para onde se dirigiu, sofre um prejuízo, deverá indenizar o capital ao negociante.' },
        { id: 'h-103', number: '§ 103', text: 'Se, durante a viagem, o inimigo lhe subtrai alguma coisa do que transportava, o comissionário deverá jurar em nome de Deus e ficará livre de responsabilidade.' },
        { id: 'h-104', number: '§ 104', text: 'Se um negociante confia a um comissionário, para venda, trigo, lã, azeite ou outras mercadorias, o comissionário deverá lavrar escritura do valor recebido e reembolsar o negociante, recebendo deste a quitação da soma paga.' },
        { id: 'h-105', number: '§ 105', text: 'Se o comissionário for negligente e não obtiver a quitação da quantia entregue ao negociante, não poderá reclamar a soma que não estiver quitada.' },
        { id: 'h-106', number: '§ 106', text: 'Se o comissionário recebe dinheiro do negociante e surge controvérsia entre eles, o negociante deverá, perante Deus e os anciãos, provar o valor entregue; comprovado o recebimento, o comissionário deverá devolver três vezes a quantia recebida.' },
        { id: 'h-107', number: '§ 107', text: 'Se o negociante engana o comissionário, embora este lhe tenha restituído integralmente o que recebeu, e o negociante nega o valor restituído, o comissionário deverá provar o fato perante Deus e os anciãos, e o negociante, por ter negado o recebimento, deverá restituir seis vezes o valor.' },
      ]
    },
    {
      id: 'laws-6',
      title: 'VI – Regulamento das tabernas',
      type: 'articles',
      articles: [
        { id: 'h-108', number: '§ 108', text: 'Se uma taberneira não aceita trigo pelo preço das bebidas a peso, mas recebe dinheiro, e o preço da bebida é inferior ao do trigo, deverá ser convencida disso e lançada na água.' },
        { id: 'h-109', number: '§ 109', text: 'Se, na casa de uma taberneira, se reúnem conjurados e ela não os detém nem os conduz à corte, a taberneira deverá ser morta.' },
        { id: 'h-110', number: '§ 110', text: 'Se uma irmã de Deus, que não vive com marido ou filhos, mulher consagrada que não pode casar, abre uma taberna ou entra em uma taberna para beber, essa mulher deverá ser queimada.' },
        { id: 'h-111', number: '§ 111', text: 'Se uma taberneira fornece sessenta qa de bebida usakami, deverá receber, no tempo da colheita, cinquenta ka de trigo.' },
      ]
    },
    {
      id: 'laws-7',
      title: 'VII – Obrigações, contratos de transporte, mútuo, processo executivo e servidão por dívidas',
      type: 'articles',
      articles: [
        { id: 'h-112', number: '§ 112', text: 'Se alguém está em viagem e confia a outro prata, ouro, pedras preciosas ou outros bens móveis para transporte, e este não conduz ao destino tudo o que lhe foi confiado, apropriando-se dos bens, deverá ser convencido disso e pagar ao proprietário da expedição cinco vezes o que recebeu.' },
        { id: 'h-113', number: '§ 113', text: 'Se alguém tem crédito de grãos ou dinheiro contra outro e, sem ciência do proprietário, retira grãos do armazém ou do celeiro, deverá ser convencido em juízo de que retirou sem autorização e deverá restituir os grãos retirados; tudo o que ele houver dado será perdido para ele.' },
        { id: 'h-114', number: '§ 114', text: 'Se alguém não tem crédito de grãos ou dinheiro contra outro e procede à execução, deverá pagar um terço de mina de prata por cada execução.' },
        { id: 'h-115', number: '§ 115', text: 'Se alguém tem crédito de grãos ou dinheiro contra outro e procede à execução, e o detido na casa de detenção morre de morte natural, não haverá pena.' },
        { id: 'h-116', number: '§ 116', text: 'Se o detido na casa de detenção morre em consequência de pancadas ou maus-tratos, o credor deverá ser convencido disso perante o tribunal; se o morto era homem livre, matar-se-á o filho do credor; se era escravo, o credor deverá pagar um terço de mina de prata e perder tudo o que houver dado.' },
        { id: 'h-117', number: '§ 117', text: 'Se alguém tem um débito vencido e vende por dinheiro sua mulher, seu filho ou sua filha, ou os entrega para trabalhar a fim de quitar o débito, eles deverão trabalhar por três anos na casa do comprador ou do senhor; no quarto ano deverão ser libertados.' },
        { id: 'h-118', number: '§ 118', text: 'Se ele entrega um escravo ou uma escrava para trabalhar pelo débito e o credor os concede a outrem ou os vende por dinheiro, não há lugar para oposição.' },
        { id: 'h-119', number: '§ 119', text: 'Se alguém tem um débito vencido e vende por dinheiro a sua escrava que lhe deu filhos, o senhor da escrava deverá restituir o dinheiro pago e resgatar a sua escrava.' },
      ]
    },
    {
      id: 'laws-8',
      title: 'VIII – Contratos de depósito',
      type: 'articles',
      articles: [
        { id: 'h-120', number: '§ 120', text: 'Se alguém deposita seu trigo na casa de outro e ocorre dano ao monte de trigo, ou se o proprietário da casa abre o celeiro e subtrai o trigo, ou ainda nega que o trigo tenha sido depositado em sua casa, o dono do trigo deverá reclamar seu bem perante Deus, e o proprietário da casa deverá restituir ao dono, sem diminuição, o trigo que tomou.' },
        { id: 'h-121', number: '§ 121', text: 'Se alguém deposita trigo na casa de outro, deverá pagar-lhe, como aluguel do armazém, cinco ka de trigo por ano para cada gur de trigo depositado.' },
        { id: 'h-122', number: '§ 122', text: 'Se alguém dá em depósito a outro prata, ouro ou outros objetos, deverá mostrar tudo o que entrega diante de testemunhas, lavrar contrato e, então, consignar o depósito.' },
        { id: 'h-123', number: '§ 123', text: 'Se alguém entrega bens em depósito sem testemunhas ou contrato e, no local em que se fez a consignação, o depósito é negado, não haverá ação.' },
        { id: 'h-124', number: '§ 124', text: 'Se alguém entrega a outro em depósito prata, ouro ou outros objetos diante de testemunhas e este os nega, deverá ser convencido em juízo e restituir, sem diminuição, tudo o que negou.' },
        { id: 'h-125', number: '§ 125', text: 'Se alguém dá seus bens em depósito e, por negligência ou roubo, esses bens se perdem juntamente com os bens do proprietário da casa, este, que suporta a culpa da negligência, deverá indenizar integralmente tudo o que lhe foi confiado em depósito. O proprietário da casa poderá, entretanto, procurar seus bens perdidos e recuperá-los do ladrão.' },
        { id: 'h-126', number: '§ 126', text: 'Se alguém que não perdeu bens afirma tê-los perdido e sustenta falsamente seu dano, se intenta ação por bens inexistentes e pelo suposto prejuízo, deverá, perante Deus, ser condenado a indenizar tudo o que pretendeu obter com sua falsa reclamação.' },
      ]
    },
    {
      id: 'laws-9',
      title: 'IX – Injúria e difamação',
      type: 'articles',
      articles: [
        { id: 'h-127', number: '§ 127', text: 'Se alguém difama uma mulher consagrada ou a esposa de um homem livre e não consegue provar a acusação, esse homem deverá ser levado perante o juiz e terá a fronte tosquiada.' },
      ]
    },
    {
      id: 'laws-10',
      title: 'X – Matrimônio e família, delitos contra a ordem da família',
      type: 'articles',
      articles: [
        { id: 'h-128', number: '§ 128', text: 'Se alguém toma uma mulher, mas não conclui contrato com ela, essa mulher não é esposa.' },
        { id: 'h-129', number: '§ 129', text: 'Se a esposa de alguém é encontrada em contato sexual com outro homem, ambos deverão ser amarrados e lançados à água, salvo se o marido perdoar sua esposa e o rei perdoar seu escravo.' },
        { id: 'h-130', number: '§ 130', text: 'Se alguém viola uma mulher que ainda não conheceu homem, que vive na casa paterna, e tem contato com ela sendo surpreendido, esse homem deverá ser morto; a mulher ficará livre de culpa.' },
        { id: 'h-131', number: '§ 131', text: 'Se a esposa de um homem livre é acusada pelo próprio marido, mas não é surpreendida em contato com outro, ela deverá jurar em nome de Deus e retornar à sua casa.' },
        { id: 'h-132', number: '§ 132', text: 'Se contra a esposa de um homem livre é proferida difamação por causa de outro homem, mas ela não é encontrada em contato com outro, ela deverá saltar no rio por seu marido.' },
        { id: 'h-133', number: '§ 133', text: 'Se alguém é feito prisioneiro e em sua casa há meios de subsistência, mas sua esposa abandona a casa e vai para outra, por não ter guardado sua casa, ela deverá ser judicialmente convencida e lançada à água.' },
        { id: 'h-134', number: '§ 134', text: 'Se alguém é feito prisioneiro de guerra e em sua casa não há meios de subsistência, e sua esposa vai para outra casa, essa mulher deverá ser absolvida.' },
        { id: 'h-135', number: '§ 135', text: 'Se alguém é feito prisioneiro de guerra e em sua casa não há meios de subsistência, e sua esposa vai para outra casa e tem filhos, se mais tarde o marido retorna à pátria, a mulher deverá voltar ao marido, mas os filhos seguirão seu próprio pai.' },
        { id: 'h-136', number: '§ 136', text: 'Se alguém abandona a pátria e foge, e depois sua esposa vai para outra casa, se aquele regressa e pretende retomar a esposa, esta não deverá voltar ao marido fugitivo.' },
        { id: 'h-137', number: '§ 137', text: 'Se alguém decide repudiar uma concubina que lhe deu filhos, ou uma esposa que lhe deu filhos, deverá restituir a essa mulher o donativo que lhe foi dado e conceder-lhe uma quota em usufruto do campo, do horto e de seus bens, para que crie os filhos. Após criá-los, deverá receber, entre os bens atribuídos aos filhos, uma parte igual à de um filho, podendo então casar-se com o homem de sua escolha.' },
        { id: 'h-138', number: '§ 138', text: 'Se alguém repudia uma esposa que não lhe deu filhos, deverá devolver-lhe o valor do presente nupcial e restituir o donativo que ela trouxe da casa de seu pai, e assim mandá-la embora.' },
        { id: 'h-139', number: '§ 139', text: 'Se não houve presente nupcial, ele deverá dar-lhe uma mina de prata como donativo de repúdio.' },
        { id: 'h-140', number: '§ 140', text: 'Se o marido for um liberto, deverá dar-lhe um terço de mina de prata.' },
        { id: 'h-141', number: '§ 141', text: 'Se a esposa de alguém, que habita na casa do marido, decide abandoná-la, passa a conduzir-se com leviandade, dissipa os bens da casa, descura do marido e é convencida disso em juízo, se o marido pronuncia o repúdio, poderá mandá-la embora sem lhe conceder qualquer donativo de repúdio. Se o marido não quiser repudiá-la e tomar outra mulher, aquela permanecerá como serva na casa do marido.' },
        { id: 'h-142', number: '§ 142', text: 'Se uma mulher entra em litígio com o marido e declara: "Tu não tens comércio comigo", deverão ser produzidas provas do seu prejuízo. Se ela for inocente, não houver falta de sua parte e o marido se ausentar e a descuidar gravemente, essa mulher não terá culpa; poderá tomar seu donativo e retornar à casa de seu pai.' },
        { id: 'h-143', number: '§ 143', text: 'Se ela não for inocente, se se ausentar, dissipar os bens da casa e descuidar do marido, essa mulher deverá ser lançada à água.' },
        { id: 'h-144', number: '§ 144', text: 'Se alguém toma uma esposa e esta dá ao marido uma serva, que lhe gera filhos, e o marido pensa em tomar uma concubina, isso não lhe será permitido; ele não poderá tomar concubina.' },
        { id: 'h-145', number: '§ 145', text: 'Se alguém toma uma esposa e ela não lhe dá filhos, e ele decide tomar uma concubina, se a concubina for introduzida na casa, esta não deverá ser equiparada à esposa.' },
        { id: 'h-146', number: '§ 146', text: 'Se alguém toma uma esposa e essa esposa dá ao marido uma serva, que lhe gera filhos, e depois essa serva rivaliza com sua senhora por ter gerado filhos, a senhora não poderá vendê-la por dinheiro; deverá reduzi-la à condição de serva e contá-la entre as servas.' },
        { id: 'h-147', number: '§ 147', text: 'Se a serva não gerou filhos, sua senhora poderá vendê-la por dinheiro.' },
        { id: 'h-148', number: '§ 148', text: 'Se alguém toma uma esposa e essa esposa é acometida por doença, e ele pensa em tomar uma segunda mulher, não deverá repudiar a esposa enferma; deverá conservá-la na casa que construiu e sustentá-la enquanto ela viver.' },
        { id: 'h-149', number: '§ 149', text: 'Se essa mulher não quiser continuar a habitar na casa do marido, ele deverá entregar-lhe o donativo que ela trouxe da casa paterna e deixá-la partir.' },
        { id: 'h-150', number: '§ 150', text: 'Se alguém concede à esposa campo, horto, casa e bens, e lhe entrega um ato escrito, após a morte do marido os filhos não poderão contestar. A mãe poderá legar o que lhe foi concedido a um dos filhos que preferir, não devendo nada aos irmãos.' },
        { id: 'h-151', number: '§ 151', text: 'Se uma mulher que vive na casa de um homem obtém dele um compromisso escrito impedindo a execução de um credor contra ela, e se esse homem possuía um débito antes do casamento, o credor não poderá agir contra a mulher. Mas, se a mulher possuía um débito antes de entrar na casa do marido, o credor não poderá agir contra o marido.' },
        { id: 'h-152', number: '§ 152', text: 'Se, depois que a mulher entra na casa do marido, ambos contraem um débito, ambos deverão pagar ao negociante.' },
        { id: 'h-153', number: '§ 153', text: 'Se a esposa de um homem livre faz matar o marido por causa de outro homem, ela deverá ser cravada em uma estaca.' },
        { id: 'h-154', number: '§ 154', text: 'Se alguém tem relações com a própria filha, deverá ser expulso da terra.' },
        { id: 'h-155', number: '§ 155', text: 'Se alguém promete uma jovem a seu filho e o filho tem relações com ela, e depois o pai tem relações com ela e é surpreendido, deverá ser amarrado e lançado à água.' },
        { id: 'h-156', number: '§ 156', text: 'Se alguém promete uma jovem a seu filho e o filho não tem relações com ela, mas depois o pai tem relações com ela, deverá pagar-lhe meia mina de prata e indenizá-la por tudo o que ela trouxe da casa paterna. Ela poderá casar-se com o homem de sua escolha.' },
        { id: 'h-157', number: '§ 157', text: 'Se alguém, na ausência do pai, tem relações com sua própria mãe, ambos deverão ser queimados.' },
        { id: 'h-158', number: '§ 158', text: 'Se alguém, na ausência do pai, é surpreendido com a esposa principal de seu pai, que lhe deu filhos, deverá ser expulso da casa paterna.' },
        { id: 'h-159', number: '§ 159', text: 'Se alguém envia bens móveis à casa do sogro e entrega o presente nupcial, mas depois se volta para outra mulher e diz ao sogro: "Não quero mais tomar tua filha", o pai da jovem poderá reter tudo o que lhe foi enviado.' },
        { id: 'h-160', number: '§ 160', text: 'Se alguém envia bens móveis à casa do sogro e paga o presente nupcial, e depois o pai da jovem diz: "Não quero mais dar-te minha filha", deverá restituir, sem diminuição, tudo o que recebeu.' },
        { id: 'h-161', number: '§ 161', text: 'Se alguém envia bens móveis à casa do sogro e paga o presente nupcial, e depois é caluniado por um amigo, e o sogro diz ao jovem esposo: "Tu não desposarás minha filha", o sogro deverá restituir, sem diminuição, tudo o que recebeu, e o amigo não poderá desposar a jovem.' },
        { id: 'h-162', number: '§ 162', text: 'Se alguém toma uma mulher e ela lhe dá filhos, e depois essa mulher morre, o pai dela não poderá intentar ação sobre o donativo; este pertence aos filhos.' },
        { id: 'h-163', number: '§ 163', text: 'Se alguém toma uma mulher e ela não lhe dá filhos, e depois essa mulher morre, e o sogro restitui o presente nupcial que foi pago, o marido não poderá reclamar o donativo da esposa; este pertence à casa paterna dela.' },
        { id: 'h-164', number: '§ 164', text: 'Se o sogro não restitui o presente nupcial, deverá deduzir do donativo o valor do presente nupcial e, em seguida, devolver o restante à casa paterna da mulher.' },
        { id: 'h-165', number: '§ 165', text: 'Se alguém doa ao filho predileto campo, horto e casa, e lavra sobre isso um ato escrito, e depois o pai morre e os irmãos fazem a partilha, eles deverão entregar ao filho predileto a doação feita pelo pai, e ele a conservará; quanto ao restante, os irmãos dividirão entre si os bens paternos.' },
        { id: 'h-166', number: '§ 166', text: 'Se alguém providencia esposa para seus filhos, mas não providencia esposa ao filho impúbere, e depois o pai morre, quando os irmãos fizerem a partilha deverão destinar ao irmão impúbere, que ainda não teve esposa, além de sua quota, o dinheiro necessário ao donativo nupcial e providenciar-lhe uma esposa.' },
        { id: 'h-167', number: '§ 167', text: 'Se alguém toma uma mulher e ela lhe dá filhos, e essa mulher morre, e ele toma depois uma segunda mulher que também lhe dá filhos, quando o pai morre os filhos não deverão dividir a herança segundo as mães; eles receberão os donativos de suas respectivas mães, mas dividirão igualmente entre si os bens paternos.' },
        { id: 'h-168', number: '§ 168', text: 'Se alguém deseja renegar seu filho e declara ao juiz: "Quero renegar meu filho", o juiz deverá examinar as razões apresentadas; se o filho não cometeu falta grave que justifique a perda do estado de filho, o pai não poderá renegá-lo.' },
        { id: 'h-169', number: '§ 169', text: 'Se o filho cometeu falta grave que justifique a perda do estado de filho, deverá ser perdoado na primeira vez; se cometer falta grave pela segunda vez, o pai poderá então renegá-lo.' },
        { id: 'h-170', number: '§ 170', text: 'Se a esposa ou a serva de alguém lhe deu filhos, e o pai, enquanto vive, declara aos filhos da serva: "Vocês são meus filhos", contando-os entre os filhos da esposa, quando o pai morre os filhos da serva e os da esposa dividirão conjuntamente a propriedade paterna. O filho da esposa terá o direito de organizar as quotas e escolher primeiro.' },
        { id: 'h-171', number: '§ 171', text: 'Se, porém, o pai não declarou em vida aos filhos da serva: "Vocês são meus filhos", quando ele morre os filhos da serva não dividirão a herança com os filhos da esposa. A serva e seus filhos deverão ser libertados, e os filhos da esposa não poderão intentar qualquer ação de escravidão contra eles. A esposa poderá tomar seu donativo e a doação que o marido lhe fez por ato escrito, e permanecer na casa do marido enquanto viver; não poderá vendê-la. A herança dessa casa pertencerá aos seus filhos.' },
        { id: 'h-172', number: '§ 172', text: 'Se o marido não lhe fez doação alguma, deverá ser restituído à esposa o seu donativo, e ela receberá, da propriedade do marido, uma quota equivalente à de um filho. Se os filhos a oprimirem para expulsá-la da casa, o juiz deverá examinar a situação; se os filhos estiverem em culpa, a mulher não deverá deixar a casa do marido.' },
        { id: 'h-173a', number: '§ 173', text: 'Se a mulher decidir deixar a casa, deverá abandonar aos filhos a doação que o marido lhe fez, mas poderá levar consigo o donativo da casa paterna. Ela poderá, então, casar-se com o homem de sua escolha.' },
        { id: 'h-173b', number: '§ 173b', text: 'Se essa mulher, para onde se transferiu, tem filhos do segundo marido e depois morre, o seu donativo deverá ser dividido entre os filhos do primeiro e do segundo casamento.' },
        { id: 'h-174', number: '§ 174', text: 'Se ela não teve filhos do segundo marido, o seu donativo deverá ser recebido pelos filhos do primeiro marido.' },
        { id: 'h-175', number: '§ 175', text: 'Se um escravo da Corte ou um escravo de um liberto desposa a mulher de um homem livre e gera filhos, o senhor do escravo não poderá intentar ação de escravidão contra os filhos da mulher livre.' },
        { id: 'h-176', number: '§ 176', text: 'Se um escravo da Corte ou um escravo de um liberto desposa a filha de um homem livre e, após o casamento, a mulher se transfere para a casa dele com um donativo da casa paterna, e se o casal adquire bens, quando o escravo morrer os bens adquiridos desde o casamento deverão ser divididos em duas partes: uma metade caberá ao senhor do escravo, e a outra metade à mulher livre para seus filhos. Se a mulher livre não trouxe donativo, todos os bens adquiridos desde o casamento deverão igualmente ser divididos em duas partes, uma para o senhor do escravo e outra para a mulher livre e seus filhos.' },
        { id: 'h-177', number: '§ 177', text: 'Se uma viúva cujos filhos ainda são crianças deseja entrar em outra casa, deverá fazê-lo com ciência do juiz. Ao entrar em outra casa, o juiz deverá verificar a herança do primeiro marido e confiar a administração dessa casa ao segundo marido e à mulher, fazendo lavrar um ato escrito. Eles deverão manter a casa em ordem e criar os filhos, não podendo vender os utensílios domésticos. Quem comprar utensílios pertencentes aos filhos da viúva perderá o dinheiro pago, e os bens retornarão ao verdadeiro proprietário.' },
      ]
    },
    {
      id: 'laws-10b',
      title: 'Mulheres consagradas e herança feminina (§178–§184)',
      type: 'articles',
      articles: [
        { id: 'h-178', number: '§ 178', text: 'Se uma mulher consagrada ou uma meretriz recebeu de seu pai um donativo formalizado por ato escrito, mas nesse ato não consta que poderia dispor livremente do patrimônio, após a morte do pai seus irmãos receberão o campo e o horto, devendo fornecer-lhe trigo, azeite e leite em proporção à sua quota, de modo a satisfazê-la. Se os irmãos não lhe fornecerem o necessário, o campo e o horto deverão ser confiados a um feitor que a agrade, o qual deverá mantê-la. Ela conservará o usufruto do campo, do horto e de tudo o que deriva do pai enquanto viver, mas não poderá vender nem transferir esses bens. A quota como filha pertence aos irmãos.' },
        { id: 'h-179', number: '§ 179', text: 'Se uma mulher consagrada ou uma meretriz recebeu de seu pai um donativo por ato escrito que lhe concede plena liberdade para dispor de seu patrimônio, após a morte do pai poderá legar sua herança a quem desejar, e seus irmãos não poderão levantar qualquer ação.' },
        { id: 'h-180', number: '§ 180', text: 'Se um pai não faz donativo à sua filha núbil ou meretriz e depois morre, ela deverá tomar dos bens paternos uma quota como filha e gozá-la enquanto viver. A herança, após sua morte, pertencerá aos seus irmãos.' },
        { id: 'h-181', number: '§ 181', text: 'Se um pai consagra a Deus uma serva do templo ou uma virgem e não lhes faz donativo, quando o pai morrer elas receberão da herança paterna um terço da quota de filha e fruirão desse direito enquanto viverem. A herança pertencerá aos irmãos.' },
        { id: 'h-182', number: '§ 182', text: 'Se um pai não faz donativo nem lavra ato escrito para sua filha consagrada a Marduk de Babilônia, quando o pai morrer os irmãos deverão destinar-lhe, sobre a herança da casa paterna, um terço da sua quota de filha, mas ela não poderá administrar esses bens. A mulher de Marduk poderá legar sua sucessão a quem quiser.' },
        { id: 'h-183', number: '§ 183', text: 'Se alguém faz um donativo à sua filha nascida de uma concubina, incluindo casa, e lavra ato escrito, quando o pai morrer essa filha não deverá receber nenhuma parte da herança paterna.' },
        { id: 'h-184', number: '§ 184', text: 'Se alguém não faz donativo à sua filha nascida de uma concubina e não lhe providencia marido, quando o pai morrer os irmãos deverão, conforme a importância do patrimônio paterno, conceder-lhe um presente e providenciar-lhe marido.' },
      ]
    },
    {
      id: 'laws-11',
      title: 'XI – Adoção, ofensas aos pais, substituição de criança',
      type: 'articles',
      articles: [
        { id: 'h-185', number: '§ 185', text: 'Se alguém dá seu nome a uma criança e a cria como filho, esse filho adotivo não poderá mais ser reclamado.' },
        { id: 'h-186', number: '§ 186', text: 'Se alguém adota um menino como filho e, depois da adoção, ele se volta contra seu pai e sua mãe adotivos, esse filho adotivo deverá retornar à sua casa paterna.' },
        { id: 'h-187', number: '§ 187', text: 'O filho de um dissoluto a serviço da Corte ou de uma meretriz não poderá ser reclamado.' },
        { id: 'h-188', number: '§ 188', text: 'Se um membro de uma corporação operária toma um menino para criar e lhe ensina o seu ofício, esse menino não poderá mais ser reclamado.' },
        { id: 'h-189', number: '§ 189', text: 'Se não lhe ensinou o seu ofício, o adotado poderá retornar à sua casa paterna.' },
        { id: 'h-190', number: '§ 190', text: 'Se alguém não reconhece entre seus filhos aquele que tomou e criou como filho, o adotado poderá retornar à sua casa paterna.' },
        { id: 'h-191', number: '§ 191', text: 'Se alguém que tomou e criou um menino como filho constitui casa e tem filhos e deseja renegar o adotado, o filho adotivo não deverá ser expulso sem compensação. O pai adotivo deverá conceder-lhe, do patrimônio móvel, um terço da quota de um filho, e então ele deverá afastar-se. Do campo, do horto e da casa não deverá receber nada.' },
        { id: 'h-192', number: '§ 192', text: 'Se o filho de um dissoluto ou de uma meretriz disser ao pai ou à mãe adotivos: "Tu não és meu pai" ou "Tu não és minha mãe", deverá ter a língua cortada.' },
        { id: 'h-193', number: '§ 193', text: 'Se o filho de um dissoluto ou de uma meretriz deseja retornar à casa paterna, abandona o pai e a mãe adotivos e volta à sua casa de origem, deverão ser-lhe arrancados os olhos.' },
        { id: 'h-194', number: '§ 194', text: 'Se alguém entrega seu filho a uma ama de leite e a criança morre sob seus cuidados, e a ama, sem ciência do pai e da mãe, amamenta outra criança, deverá ser convencida disso e ter o seio cortado.' },
        { id: 'h-195', number: '§ 195', text: 'Se um filho espanca seu pai, deverão ser-lhe decepadas as mãos.' },
      ]
    },
    {
      id: 'laws-12',
      title: 'XII – Delitos e penas (lesões corporais, talião, indenização)',
      type: 'articles',
      articles: [
        { id: 'h-196', number: '§ 196', text: 'Se alguém arranca o olho de outro, deverá ter o olho arrancado.' },
        { id: 'h-197', number: '§ 197', text: 'Se alguém quebra o osso de outro, deverá ter o osso quebrado.' },
        { id: 'h-198', number: '§ 198', text: 'Se alguém arranca o olho de um liberto, deverá pagar uma mina de prata.' },
        { id: 'h-199', number: '§ 199', text: 'Se alguém arranca o olho do escravo de outrem ou lhe quebra um osso, deverá pagar a metade do seu valor.' },
        { id: 'h-200', number: '§ 200', text: 'Se alguém quebra os dentes de outro de igual condição, deverá ter os dentes quebrados.' },
        { id: 'h-201', number: '§ 201', text: 'Se quebra os dentes de um liberto, deverá pagar um terço de mina de prata.' },
        { id: 'h-202', number: '§ 202', text: 'Se alguém espanca pessoa de condição superior à sua, deverá ser espancado publicamente sessenta vezes com chicote de couro de boi.' },
        { id: 'h-203', number: '§ 203', text: 'Se um homem livre espanca outro homem livre de igual condição, deverá pagar uma mina de prata.' },
        { id: 'h-204', number: '§ 204', text: 'Se um liberto espanca outro liberto, deverá pagar dez siclos de prata.' },
        { id: 'h-205', number: '§ 205', text: 'Se o escravo de um homem livre espanca um homem livre, deverá ter a orelha cortada.' },
        { id: 'h-206', number: '§ 206', text: 'Se alguém, numa rixa, fere outro, deverá jurar: "Não o feri de propósito", e pagar o médico.' },
        { id: 'h-207', number: '§ 207', text: 'Se o ferido morre em consequência das pancadas, o agressor deverá jurar igualmente; se a vítima era homem livre, deverá pagar meia mina de prata.' },
        { id: 'h-208', number: '§ 208', text: 'Se a vítima era um liberto, o agressor deverá pagar um terço de mina de prata.' },
        { id: 'h-209', number: '§ 209', text: 'Se alguém golpeia uma mulher livre e lhe provoca aborto, deverá pagar dez siclos de prata pelo feto.' },
        { id: 'h-210', number: '§ 210', text: 'Se essa mulher morrer, deverá ser morto o filho do agressor.' },
        { id: 'h-211', number: '§ 211', text: 'Se a filha de um liberto aborta em consequência de pancada, o agressor deverá pagar cinco siclos de prata.' },
        { id: 'h-212', number: '§ 212', text: 'Se essa mulher morrer, deverá pagar meia mina de prata.' },
        { id: 'h-213', number: '§ 213', text: 'Se alguém espanca a serva de outrem e ela aborta, deverá pagar dois siclos de prata.' },
        { id: 'h-214', number: '§ 214', text: 'Se essa serva morrer, deverá pagar um terço de mina de prata.' },
      ]
    },
    {
      id: 'laws-13',
      title: 'XIII – Médicos e veterinários; arquitetos e bateleiros',
      type: 'articles',
      articles: [
        { id: 'h-215', number: '§ 215', text: 'Se um médico trata alguém de uma ferida grave com a lanceta de bronze e o cura, ou se abre uma incisão com a lanceta de bronze e o olho é salvo, deverá receber dez siclos de prata.' },
        { id: 'h-216', number: '§ 216', text: 'Se o paciente é um liberto, o médico receberá cinco siclos de prata.' },
        { id: 'h-217', number: '§ 217', text: 'Se o paciente é escravo de alguém, o proprietário deverá pagar ao médico dois siclos de prata.' },
        { id: 'h-218', number: '§ 218', text: 'Se um médico trata alguém de uma ferida grave com a lanceta de bronze e o mata, ou lhe abre uma incisão com a lanceta de bronze e o olho é perdido, deverão ser-lhe cortadas as mãos.' },
        { id: 'h-219', number: '§ 219', text: 'Se o médico trata o escravo de um liberto de uma ferida grave com a lanceta de bronze e o mata, deverá dar escravo por escravo.' },
        { id: 'h-220', number: '§ 220', text: 'Se o médico abre a incisão com a lanceta de bronze e o olho do escravo é perdido, deverá pagar metade do seu valor.' },
        { id: 'h-221', number: '§ 221', text: 'Se um médico restabelece o osso quebrado de alguém ou cura partes moles doentes, o paciente deverá pagar-lhe cinco siclos de prata.' },
        { id: 'h-222', number: '§ 222', text: 'Se o paciente é um liberto, deverá pagar três siclos de prata.' },
        { id: 'h-223', number: '§ 223', text: 'Se o paciente é escravo, o proprietário deverá pagar ao médico dois siclos de prata.' },
        { id: 'h-224', number: '§ 224', text: 'Se o médico de bois e burros trata um boi ou um burro de uma ferida grave e o animal se restabelece, o proprietário deverá pagar ao médico um sexto de siclo de prata.' },
        { id: 'h-225', number: '§ 225', text: 'Se ele trata um boi ou um burro de uma ferida grave e o animal morre, deverá pagar ao proprietário um quarto do seu valor.' },
        { id: 'h-226', number: '§ 226', text: 'Se um tosquiador, sem ciência do senhor do escravo, imprime nele a marca de escravo inalienável, deverão ser-lhe cortadas as mãos.' },
        { id: 'h-227', number: '§ 227', text: 'Se alguém engana um tosquiador e o faz imprimir a marca de escravo inalienável, esse homem deverá ser morto e sepultado em sua casa. O tosquiador deverá jurar: "Não o marquei de propósito", e ficará livre.' },
        { id: 'h-228', number: '§ 228', text: 'Se um arquiteto constrói uma casa para alguém e a conclui, deverá receber, como pagamento, dois siclos de prata por cada sar de superfície edificada.' },
        { id: 'h-229', number: '§ 229', text: 'Se um arquiteto constrói uma casa para alguém e não a faz solidamente, e a casa cai e causa a morte do proprietário, esse arquiteto deverá ser morto.' },
        { id: 'h-230', number: '§ 230', text: 'Se causa a morte do filho do proprietário, deverá ser morto o filho do arquiteto.' },
        { id: 'h-231', number: '§ 231', text: 'Se causa a morte do escravo do proprietário, deverá dar escravo por escravo.' },
        { id: 'h-232', number: '§ 232', text: 'Se destrói bens, deverá indenizar tudo o que destruiu e, por não ter construído solidamente a casa, deverá reconstruí-la à sua custa.' },
        { id: 'h-233', number: '§ 233', text: 'Se um arquiteto constrói uma casa e não a conclui devidamente, ficando as paredes defeituosas, deverá, à sua custa, consolidá-las.' },
        { id: 'h-234', number: '§ 234', text: 'Se um bateleiro constrói para alguém um barco de sessenta gur, deverá receber como pagamento dois siclos de prata.' },
        { id: 'h-235', number: '§ 235', text: 'Se um bateleiro constrói um barco e não o faz solidamente, e no mesmo ano o barco entra em serviço e sofre avaria, o bateleiro deverá desmontá-lo e refazê-lo solidamente à sua custa, entregando o barco reparado ao proprietário.' },
        { id: 'h-236', number: '§ 236', text: 'Se alguém freta seu barco a um bateleiro e este, por negligência, o faz afundar ou o perde, o bateleiro deverá dar barco por barco ao proprietário.' },
        { id: 'h-237', number: '§ 237', text: 'Se alguém freta um bateleiro e lhe confia barco e carga de trigo, lã, azeite, tâmaras ou outros bens, e o bateleiro, por negligência, faz afundar o barco e perde a carga, deverá indenizar o barco e tudo o que causou a perda.' },
        { id: 'h-238', number: '§ 238', text: 'Se um bateleiro faz afundar o barco de alguém, mas o salva, deverá pagar metade do valor do barco.' },
        { id: 'h-239', number: '§ 239', text: 'Se alguém freta um bateleiro, deverá pagar-lhe seis gur de trigo por ano.' },
        { id: 'h-240', number: '§ 240', text: 'Se um barco a remos colide com um barco à vela e o afunda, o proprietário do barco afundado deverá pedir justiça perante Deus; o proprietário do barco a remos deverá indenizar o barco e tudo o que se perdeu.' },
      ]
    },
    {
      id: 'laws-14',
      title: 'XIV – Sequestro, locações de animais, lavradores, pastores, operários',
      type: 'articles',
      articles: [
        { id: 'h-241', number: '§ 241', text: 'Se alguém sequestra um boi e o faz trabalhar, deverá pagar um terço de mina de prata.' },
        { id: 'h-242', number: '§ 242', text: 'Se alguém aluga por um ano um boi para lavrar, deverá pagar quatro gur de trigo.' },
        { id: 'h-243', number: '§ 243', text: 'Como pagamento pelo boi de carga, deverá dar três gur de trigo ao proprietário.' },
        { id: 'h-244', number: '§ 244', text: 'Se alguém aluga um boi e um burro e, no campo, um leão os mata, o prejuízo recai sobre o proprietário.' },
        { id: 'h-245', number: '§ 245', text: 'Se alguém aluga um boi e o faz morrer por maus-tratos ou pancadas, deverá indenizar o proprietário com boi por boi.' },
        { id: 'h-246', number: '§ 246', text: 'Se alguém aluga um boi e lhe quebra uma perna ou lhe corta a pele do pescoço, deverá indenizar o proprietário com boi por boi.' },
        { id: 'h-247', number: '§ 247', text: 'Se alguém aluga um boi e lhe arranca um olho, deverá pagar ao proprietário metade do seu valor.' },
        { id: 'h-248', number: '§ 248', text: 'Se alguém aluga um boi e lhe quebra um chifre, corta-lhe a cauda ou danifica o focinho, deverá pagar um quarto do seu valor.' },
        { id: 'h-249', number: '§ 249', text: 'Se alguém aluga um boi e Deus o fere, vindo o animal a morrer, o locatário deverá jurar em nome de Deus e ficará livre.' },
        { id: 'h-250', number: '§ 250', text: 'Se um boi, andando pela estrada, investe contra alguém e o mata, não há lugar para indenização.' },
        { id: 'h-251', number: '§ 251', text: 'Se o boi de alguém dá chifradas e o seu vício era conhecido, e o dono não cortou os chifres nem prendeu o boi, e o boi mata um homem, o proprietário deverá pagar meia mina de prata.' },
        { id: 'h-252', number: '§ 252', text: 'Se o boi mata um escravo de alguém, deverá ser pago um terço de mina de prata.' },
        { id: 'h-253', number: '§ 253', text: 'Se alguém contrata outro para cultivar seu campo, fornece a semente, confia-lhe os bois e o obriga a lavrar, e este rouba trigo ou plantas para si, deverão ser-lhe cortadas as mãos.' },
        { id: 'h-254', number: '§ 254', text: 'Se ele se apropria da semente e não utiliza os bois, deverá indenizar o valor do trigo e do cultivo.' },
        { id: 'h-255', number: '§ 255', text: 'Se ele subloca os bois ou rouba o grão da semente e não cultiva o campo, deverá ser convencido e pagar, por cada cem gan, sessenta gur de trigo.' },
        { id: 'h-256', number: '§ 256', text: 'Se a comunidade não paga por ele, deverá ser deixado naquele campo, junto aos animais.' },
        { id: 'h-257', number: '§ 257', text: 'Se alguém aluga um lavrador de campo, deverá pagar-lhe oito gur de trigo por ano.' },
        { id: 'h-258', number: '§ 258', text: 'Se alguém aluga um guarda de bois, deverá pagar-lhe seis gur de trigo por ano.' },
        { id: 'h-259', number: '§ 259', text: 'Se alguém rouba do campo uma roda d\'água, deverá pagar ao proprietário cinco siclos de prata.' },
        { id: 'h-260', number: '§ 260', text: 'Se alguém rouba um balde para tirar água ou um arado, deverá pagar três siclos de prata.' },
        { id: 'h-261', number: '§ 261', text: 'Se alguém aluga um pastor para apascentar bois e ovelhas, deverá pagar-lhe oito gur de trigo por ano.' },
        { id: 'h-262', number: '§ 262', text: 'Se alguém aluga um boi ou uma ovelha para serviço, deverá observar o contrato celebrado.' },
        { id: 'h-263', number: '§ 263', text: 'Se ele é causa da perda de um boi ou de uma ovelha que lhe foram confiados, deverá indenizar o proprietário com boi por boi e ovelha por ovelha.' },
        { id: 'h-264', number: '§ 264', text: 'Se um pastor, a quem foram confiados bois e ovelhas e que recebeu sua paga, reduz o rebanho ou diminui o acréscimo natural, deverá restituir as acessões e o produto conforme o contrato.' },
        { id: 'h-265', number: '§ 265', text: 'Se o pastor pratica fraude, falseia o acréscimo natural do rebanho e o vende por dinheiro, deverá ser convencido e indenizar o proprietário em dez vezes o número de bois e ovelhas.' },
        { id: 'h-266', number: '§ 266', text: 'Se ocorre no rebanho um golpe de Deus ou um leão mata os animais, o pastor deverá purgar-se diante de Deus, e o prejuízo será suportado pelo proprietário.' },
        { id: 'h-267', number: '§ 267', text: 'Se o pastor foi negligente e ocorre dano ao rebanho, deverá indenizar o prejuízo causado em bois ou ovelhas e entregá-los ao proprietário.' },
        { id: 'h-268', number: '§ 268', text: 'Se alguém aluga um boi para debulhar, o pagamento será de vinte ka de trigo.' },
        { id: 'h-269', number: '§ 269', text: 'Se alguém aluga um burro para debulhar, o pagamento será de vinte ka de trigo.' },
        { id: 'h-270', number: '§ 270', text: 'Se alguém aluga um animal jovem para debulhar, o pagamento será de dez ka de trigo.' },
        { id: 'h-271', number: '§ 271', text: 'Se alguém aluga bois, carros e guardas, deverá pagar cento e oitenta ka de trigo por dia.' },
        { id: 'h-272', number: '§ 272', text: 'Se alguém aluga apenas um carro, deverá pagar quarenta ka de trigo por dia.' },
        { id: 'h-273', number: '§ 273', text: 'Se alguém aluga um lavrador mercenário, deverá pagar, do ano novo até o quinto mês, seis se por dia; do sexto mês até o fim do ano, cinco se por dia.' },
        { id: 'h-274', number: '§ 274', text: 'Se alguém aluga um operário, deverá pagar diariamente: cinco se ao moldador de tijolos; cinco se ao alfaiate; cinco se ao canteiro; quatro se ao carpinteiro; quatro se ao cordoeiro; quatro se ao pedreiro.' },
        { id: 'h-275', number: '§ 275', text: 'Se alguém aluga um barco à vela, deverá pagar seis se por dia.' },
        { id: 'h-276', number: '§ 276', text: 'Se aluga um barco a remos, deverá pagar dois se e meio por dia.' },
        { id: 'h-277', number: '§ 277', text: 'Se alguém aluga um barco de sessenta gur, deverá pagar um sexto de siclo por dia.' },
        { id: 'h-278', number: '§ 278', text: 'Se alguém compra um escravo ou uma escrava e, antes de decorrido um mês, eles são acometidos do mal benu, deverá devolvê-los ao vendedor, recebendo de volta o dinheiro pago.' },
        { id: 'h-279', number: '§ 279', text: 'Se alguém compra um escravo ou uma escrava e um terceiro propõe ação sobre eles, o vendedor responderá pela evicção.' },
        { id: 'h-280', number: '§ 280', text: 'Se alguém compra em país estrangeiro um escravo ou uma escrava e, ao retornar, o proprietário os reconhece como seus, sendo eles naturais do país, deverão ser restituídos sem indenização.' },
        { id: 'h-281', number: '§ 281', text: 'Se forem nascidos em outro país, o comprador declarará perante Deus o preço pago, e o proprietário deverá reembolsar esse valor para reaver o escravo ou a escrava.' },
        { id: 'h-282', number: '§ 282', text: 'Se um escravo diz a seu senhor: "Tu não és meu senhor", deverá ser convencido disso, e o senhor lhe cortará a orelha.' },
      ]
    },
    {
      id: 'epilogue',
      title: 'Epílogo',
      type: 'text',
      content: `Estas são as justas leis que Hamurabi, o rei sábio, estabeleceu, dando base firme ao governo da terra. Eu sou o governante guardião. Em meu seio trago o povo das terras de Sumer e Acad; em minha sabedoria eu os contenho, para que o forte não oprima o fraco e para que se faça justiça à viúva e ao órfão.

Que todo homem oprimido venha diante de mim, como rei da justiça. Que ele leia a inscrição do meu monumento. Que atente para as minhas palavras ponderadas. Que este monumento lhe esclareça a causa que traz e lhe permita compreender o seu caso. Que ele possa alegrar o coração e dizer: "Hamurabi é verdadeiramente como um pai para o seu povo; estabeleceu a prosperidade para sempre e deu um governo justo à terra".

Quando Anu e Enlil, os grandes deuses de Uruk e Nippur, confiaram-me o governo das terras de Sumer e Acad e colocaram em minhas mãos o cetro do poder, eu abri os canais. Eu, Hamurabi-nukhush-nish, Hamurabi, a abundância do povo, levei água copiosa às terras de Sumer e Acad. Suas margens transformei em campos cultivados; amontoei celeiros de grãos e assegurei água constante a todas as terras.

O povo disperso reuni; concedi-lhe pastagens abundantes e o estabeleci em moradas pacíficas.`
    },
    {
      id: 'glossary',
      title: 'Glossário',
      type: 'glossary',
      glossaryEntries: [
        { term: 'Ação redibitória', definition: 'Direito de desfazer um negócio quando o bem adquirido apresenta vício grave preexistente, como no caso de escravos acometidos por doença logo após a compra.' },
        { term: 'Adotado', definition: 'Criança integrada juridicamente a uma família por ato formal. A adoção cria vínculos legais específicos, mas pode ser desfeita em hipóteses previstas no Código.' },
        { term: 'Anu', definition: 'Deus supremo do céu na tradição mesopotâmica. Figura central na legitimação divina do poder real e da ordem jurídica.' },
        { term: 'Arquitetos', definition: 'Construtores responsáveis por edificações. O Código prevê remuneração, dever técnico e responsabilidade extrema, inclusive penal, por falhas estruturais.' },
        { term: 'Awīlum (homem livre)', definition: 'Categoria social superior, composta por cidadãos plenos, titulares de direitos mais amplos e protegidos por sanções mais severas em caso de ofensa.' },
        { term: 'Bateleiro', definition: 'Construtor ou operador de embarcações fluviais. Responde civilmente por danos, perdas e naufrágios decorrentes de negligência.' },
        { term: 'Concubina', definition: 'Mulher que convive com um homem sem o status jurídico de esposa. Possui proteção limitada e direitos sucessórios condicionados à existência de filhos.' },
        { term: 'Contrato', definition: 'Acordo formal, geralmente escrito e testemunhado, que regula relações de trabalho, locação, depósito, comércio e família.' },
        { term: 'Donativo (ou donativo nupcial)', definition: 'Bens ou valores concedidos por ocasião do casamento. Possui regras específicas de restituição, sucessão e usufruto.' },
        { term: 'Enlil', definition: 'Deus do vento, da autoridade e da ordem cósmica. Associado à legitimação do poder político e jurídico na Mesopotâmia.' },
        { term: 'Escravo (wardum)', definition: 'Pessoa juridicamente subordinada, considerada propriedade. Apesar disso, o Código prevê limites à violência, regras de indenização e hipóteses de libertação.' },
        { term: 'Evicção', definition: 'Perda de um bem adquirido por decisão judicial em favor de terceiro que prova direito anterior. O vendedor responde pela evicção.' },
        { term: 'Gan', definition: 'Unidade de medida de superfície agrícola, utilizada para cálculo de produtividade e indenizações.' },
        { term: 'Gur', definition: 'Unidade de volume, sobretudo para grãos, equivalente a grandes quantidades usadas em contratos agrícolas e salários.' },
        { term: 'Juízo do rio (ordálio)', definition: 'Forma de prova divina. O acusado se lança ao rio para que os deuses revelem sua culpa ou inocência.' },
        { term: 'Ka / Se', definition: 'Unidades menores de volume e peso, empregadas para remuneração diária e pequenas transações.' },
        { term: 'Liberto (muškēnum)', definition: 'Classe intermediária entre o homem livre e o escravo. Goza de liberdade pessoal, mas possui direitos jurídicos mais restritos.' },
        { term: 'Marduk', definition: 'Deus patrono da Babilônia. No Código, aparece como destinatário da autoridade concedida ao rei e fundamento da ordem jurídica.' },
        { term: 'Mina', definition: 'Unidade monetária e de peso, equivalente a sessenta siclos. Usada em indenizações e multas de maior valor.' },
        { term: 'Órfão e viúva', definition: 'Figuras centrais na retórica do Código. Representam os vulneráveis que o rei afirma proteger por meio da justiça.' },
        { term: 'Pastor', definition: 'Responsável por rebanhos. Responde por perdas decorrentes de negligência, fraude ou violação do contrato.' },
        { term: 'Siclo (shekel)', definition: 'Unidade básica de peso e valor monetário, usada em pagamentos, multas e salários.' },
        { term: 'Servidão por dívida', definition: 'Forma temporária de trabalho compulsório para quitação de débitos. Limitada no tempo e regulada pelo Código.' },
        { term: 'Talião', definition: 'Princípio segundo o qual a pena corresponde diretamente ao dano causado, especialmente em lesões corporais.' },
        { term: 'Usufruto', definition: 'Direito de usar e fruir um bem sem ser seu proprietário, comum em disposições sucessórias e familiares.' },
        { term: 'Veterinário', definition: 'Profissional responsável pelo tratamento de animais. Responde por cura ou morte dos animais tratados.' },
      ]
    }
  ]
};
