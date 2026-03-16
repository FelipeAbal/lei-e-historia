import { HistoricalDocument } from '../../types';

export const lipitIshtar: HistoricalDocument = {
  id: 'lipit-ishtar',
  title: 'Código de Lipit-Ishtar',
  subtitle: 'Reforma e Família',
  date: 'c. 1930 a.C.',
  era: 'Mesopotâmia',
  language: 'Sumério',
  description: 'Um código legal da antiga Mesopotâmia escrito durante o reinado de Lipit-Ishtar, rei de Isin. Foca fortemente em questões de herança, propriedade e relações familiares.',
  sections: [
    {
      id: 'context',
      title: 'Contexto Histórico',
      type: 'text',
      content: `O Código de Lipit-Ishtar está associado ao reinado de Lipit-Ishtar, rei da cidade de Isin, no início do século XIX a.C., em um período marcado pela fragmentação política da Mesopotâmia após o declínio da Terceira Dinastia de Ur. Isin buscava afirmar sua legitimidade como herdeira da tradição política e jurídica suméria, em concorrência direta com outras cidades-Estado da região.

Nesse contexto, a promulgação de um conjunto normativo escrito cumpria uma função política clara. O rei se apresentava como garantidor da justiça, da ordem social e da proteção dos grupos considerados vulneráveis, ao mesmo tempo em que reforçava seu papel na administração econômica, na organização familiar e na regulação da propriedade.

O código revela uma sociedade profundamente hierarquizada, na qual o status jurídico das pessoas determina o tipo de proteção ou sanção aplicável. Questões relacionadas a herança, casamento, filiação, adoção, arrendamento agrícola e trabalho aparecem com destaque, refletindo problemas cotidianos das cidades mesopotâmicas do período.`
    },
    {
      id: 'about',
      title: 'Sobre o texto',
      type: 'text',
      content: `O Código de Lipit-Ishtar não sobreviveu em uma versão única e completa. O texto é conhecido a partir de diversos fragmentos preservados em tábuas de argila, em sua maioria provenientes de Nippur, datadas do período paleo-babilônico. Esses fragmentos pertencem a diferentes manuscritos, o que torna a reconstrução do conjunto normativo um trabalho complexo e, em alguns pontos, incerto.

As edições modernas do código resultam da comparação entre essas fontes fragmentárias, com lacunas visíveis no texto e dúvidas quanto à ordem original de alguns dispositivos. Por esse motivo, a numeração das leis segue convenções acadêmicas e não corresponde necessariamente à sequência original da composição.

O texto apresentado nesta página baseia-se em traduções acadêmicas consolidadas em língua inglesa, produzidas a partir dessas reconstruções. Ele deve ser lido como um documento histórico fragmentário, fundamental para compreender a continuidade da tradição jurídica suméria entre os séculos XXI e XIX a.C., mas distante da ideia moderna de um código sistemático e completo.`
    },
    {
      id: 'prologue',
      title: 'Prólogo',
      type: 'text',
      content: `[Quando] o grande deus An, pai dos deuses, e o deus Enlil, rei das terras, o senhor que determina os destinos, concederam um reinado favorável e a realeza das terras da Suméria e da Acádia à deusa Ninisina, filha de An, senhora piedosa, por cujo reinado houve alegria [...], por cujo olhar brilhante..., na cidade de Isin, seu tesouro(?), estabelecido pelo deus An,

naquele tempo os deuses An e Enlil chamaram Lipit-Ishtar ao principado da terra, Lipit-Ishtar, o sábio pastor, cujo nome foi pronunciado pelo deus Nunamnir, para estabelecer a justiça na terra, eliminar os clamores por justiça, erradicar a inimizade e a violência armada, e trazer bem-estar às terras da Suméria e da Acádia.

Naquele tempo, eu, Lipit-Ishtar, o pastor piedoso da cidade de Nippur, o fiel cultivador da cidade de Ur, aquele que não abandona a cidade de Eridu, o senhor adequado da cidade de Uruk, o rei da cidade de Isin, rei das terras da Suméria e da Acádia, desejo do coração da deusa Inanna, por ordem do deus Enlil, estabeleci a justiça nas terras da Suméria e da Acádia.

Naquele tempo, libertei os filhos e as filhas da cidade de Nippur, os filhos e as filhas da cidade de Ur, os filhos e as filhas da cidade de Isin, os filhos e as filhas das terras da Suméria e da Acádia, que estavam submetidos [ao jugo(?)], e restabeleci a ordem.

Por meio de um decreto [...] fiz com que o pai sustentasse seus filhos e com que o filho sustentasse seu pai. Fiz com que o pai permanecesse ao lado de seus filhos e com que o filho permanecesse ao lado de seu pai. Impus prestação de serviços, de forma igual, tanto à casa de um pai vivo quanto à casa indivisa de irmãos.

Eu, Lipit-Ishtar, filho do deus Enlil, obriguei os membros da casa de um pai vivo e da casa indivisa de irmãos a prestar serviço por setenta dias ao ano. Obriguei os membros das casas de trabalhadores dependentes a prestar serviço por dez dias ao mês.... a esposa de um homem ... o filho de um homem ... [(mais de duas colunas perdidas)].

[...] as tropas, ... (coluna VI) ... a propriedade do patrimônio paterno ... (coluna VII) ... o filho do governador, o filho do oficial do palácio, ...

[Naquele tempo:]`
    },
    {
      id: 'laws',
      title: 'Leis',
      type: 'articles',
      articles: [
        { id: 'li-1', number: '§ 1', text: 'Se um homem alugar um boi para a parte traseira da junta, deverá medir e entregar 2.400 sila de grãos como pagamento por dois anos. Se for um boi para a parte dianteira ou intermediária da junta, deverá medir e entregar 1.800 sila de grãos como pagamento por dois anos.' },
        { id: 'li-2', number: '§ 2', text: 'Se um homem morrer sem deixar descendente masculino, sua filha solteira será sua herdeira.' },
        { id: 'li-3', number: '§ 3', text: 'Se [um homem morrer] e sua filha [for casada(?)], a propriedade do patrimônio paterno [...], uma irmã mais nova, depois de [...], a casa [...].' },
        { id: 'li-4', number: '§ 4', text: 'Se [...] golpear a filha de um homem e causar a perda de seu feto, deverá pesar e entregar trinta siclos de prata.' },
        { id: 'li-5', number: '§ 5', text: 'Se ela morrer, esse homem deverá ser morto.' },
        { id: 'li-6', number: '§ 6', text: 'Se [...] golpear a escravizada de um homem e causar a perda de seu feto, deverá pesar e entregar cinco siclos de prata.' },
        { id: 'li-7', number: '§ 7', text: 'Se [...].' },
        { id: 'li-8', number: '§ 8', text: 'Se [...] o barco [for perdido], deverá [substituir] o barco.' },
        { id: 'li-9', number: '§ 9', text: 'Se um homem alugar um barco e lhe for estabelecida uma rota acordada, mas ele violar essa rota e o barco [...] naquele local, ele terá agido de forma ilícita. O homem que alugou o barco deverá substituir o barco e [deverá medir e entregar, em grãos, o pagamento correspondente].' },
        { id: 'li-10', number: '§ 10', text: 'Se [...], deverá entregar como dádiva.' },
        { id: 'li-11', number: '§ 11', text: 'Se um homem arrendar seu pomar a um jardineiro em contrato de arrendamento, o jardineiro deverá plantar [...] para o proprietário do pomar e terá o uso dos frutos de um décimo das palmeiras.' },
        { id: 'li-12', number: '§ 12', text: 'Se um homem entregar a outro uma terra em pousio para o plantio de um pomar, mas este não completar o plantio do pomar, a terra negligenciada deverá ser entregue àquele que estiver disposto a plantar o pomar, como sua parte.' },
        { id: 'li-13', number: '§ 13', text: 'Se um homem entrar no pomar de outro homem e for surpreendido ali cometendo furto, deverá pesar e entregar dez siclos de prata.' },
        { id: 'li-14', number: '§ 14', text: 'Se um homem cortar uma árvore no pomar de outro homem, deverá pesar e entregar vinte siclos de prata.' },
        { id: 'li-15', number: '§ 15', text: 'Se um homem, ao lado de cuja casa outro homem tenha negligenciado sua terra em pousio, advertir formalmente o proprietário dessa terra dizendo: "Tua terra em pousio foi negligenciada; alguém pode arrombar minha casa. Protege tua propriedade", e se ficar confirmado que essa advertência foi feita, o proprietário da terra em pousio deverá restituir ao dono da casa qualquer bem que venha a ser perdido.' },
        { id: 'li-16', number: '§ 16', text: 'Se a escravizada ou o escravizado de um homem fugir dentro da cidade e ficar comprovado que esse escravizado permaneceu por um mês na casa de outro homem, aquele que acolheu o escravizado fugitivo deverá entregar um escravizado em substituição.' },
        { id: 'li-17', number: '§ 17', text: 'Se ele não possuir um escravizado, deverá pesar e entregar quinze siclos de prata.' },
        { id: 'li-18', number: '§ 18', text: 'Se o escravizado de um homem contestar sua condição de escravidão perante seu senhor, e ficar comprovado que o senhor já foi compensado em dobro por essa escravidão, esse escravizado deverá ser libertado.' },
        { id: 'li-19', number: '§ 19', text: 'Se uma pessoa miqtu for um presente do rei, ela não poderá ser apropriada.' },
        { id: 'li-20', number: '§ 20', text: 'Se uma pessoa miqtu ingressar a serviço de um homem por vontade própria, esse homem não deverá restringi-la; a pessoa miqtu poderá ir aonde desejar.' },
        { id: 'li-21', number: '§ 21', text: 'Se um homem, sem fundamento(?), acusar outro homem de um fato do qual não tem conhecimento e não conseguir provar a acusação, ele deverá sofrer a pena correspondente ao fato pelo qual acusou.' },
        { id: 'li-22', number: '§ 22', text: 'Se o senhor ou a senhora de uma propriedade deixar de pagar os tributos devidos e um terceiro assumir esse encargo, o proprietário não será despejado por três anos. Após três anos de inadimplência, aquele que assumiu o pagamento dos tributos tomará posse da propriedade, e o proprietário original não poderá apresentar qualquer reivindicação.' },
        { id: 'li-23', number: '§ 23', text: 'Se o senhor da propriedade [...].' },
        { id: 'li-24', number: '§ 24', text: 'Se um homem resgatar uma criança de um poço, deverá [registrar] seus pés [e selar uma tábua com o tamanho de seus pés, para fins de identificação].' },
        { id: 'li-gap1', number: '...', text: '[Lacuna no texto]' },
        { id: 'li-25', number: '§ 25', text: '[... quando ...] tutela.' },
        { id: 'li-26', number: '§ 26', text: 'Se um homem não criar o filho que se comprometeu a criar em regime de aprendizagem, e isso for confirmado perante os juízes, a criança deverá ser devolvida à sua mãe biológica.' },
        { id: 'li-27', number: '§ 27', text: 'Se um homem [não criar] a filha que se comprometeu a criar [...].' },
        { id: 'li-gap2', number: '...', text: '[Lacuna no texto]' },
        { id: 'li-28', number: '§ 28', text: 'Se [...] contrair matrimônio, o presente nupcial que foi dado por seu patrimônio paterno deverá ser destinado ao seu herdeiro. [...]. Se [...] for dado a uma esposa, seus irmãos não deverão incluir, na partilha da herança, o presente nupcial que foi concedido por seu patrimônio paterno, mas [...].' },
        { id: 'li-29', number: '§ 29', text: 'Se, durante a vida de seu pai, uma filha se tornar ugbabtu, naditu ou qadištu, seus irmãos deverão dividir a herança considerando-a como herdeira em condição de igualdade.' },
        { id: 'li-30', number: '§ 30', text: 'Se uma filha não for dada em casamento enquanto seu pai estiver vivo, seus irmãos deverão providenciar seu casamento.' },
        { id: 'li-31', number: '§ 31', text: 'Se ele tomar uma pessoa escravizada [...] se ela morrer [...] um estranho [...] contrair matrimônio(?).' },
        { id: 'li-32', number: '§ 32', text: 'Se um homem [...].' },
        { id: 'li-33', number: '§ 33', text: 'Se a segunda esposa que ele contrair em matrimônio lhe der um filho, o dote que ela trouxe da casa paterna pertencerá exclusivamente a seus filhos. Os filhos da esposa principal e os filhos da segunda esposa deverão dividir igualmente a propriedade de seu pai.' },
        { id: 'li-34', number: '§ 34', text: 'Se um homem se casar com uma mulher e ela lhe der um filho, e esse filho viver, e se uma mulher escravizada também der um filho a seu senhor, o pai deverá libertar a mulher escravizada e seus filhos. Os filhos da mulher escravizada não deverão dividir a herança com os filhos do senhor.' },
        { id: 'li-35', number: '§ 35', text: 'Se a esposa principal morrer e, após sua morte, o homem se casar com a mulher escravizada que lhe havia dado filhos, o filho da esposa principal será o herdeiro principal. O filho que a mulher escravizada deu ao seu senhor será considerado igual a um filho livre nativo, e eles deverão receber sua parte na herança.' },
        { id: 'li-36', number: '§ 36', text: 'Se a esposa de um homem não lhe der um filho, mas uma prostituta da rua lhe der um filho, ele deverá fornecer grãos, óleo e vestimentas à prostituta. O filho que a prostituta lhe deu será seu herdeiro. Enquanto a esposa estiver viva, a prostituta não deverá residir na casa com a esposa principal.' },
        { id: 'li-37', number: '§ 37', text: 'Se a esposa principal de um homem perder sua atratividade ou se tornar paralítica, ela não será expulsa da casa. Contudo, o marido poderá se casar com uma esposa saudável, e a segunda esposa deverá sustentar a esposa principal.' },
        { id: 'li-38', number: '§ 38', text: 'Se um genro entrar na casa de seu sogro e realizar a entrega do dote nupcial, mas posteriormente for expulso e sua esposa for dada a seu companheiro, deverá ser restituído a ele o dobro do dote que trouxe, e seu companheiro não poderá se casar com sua esposa.' },
        { id: 'li-39', number: '§ 39', text: 'Se um jovem casado mantiver relações sexuais com uma prostituta da rua e os juízes lhe ordenarem que não retorne à prostituta, e se, posteriormente, ele se divorciar de sua esposa principal e lhe entregar a prata referente ao divórcio, ainda assim ele não poderá se casar com a prostituta.' },
        { id: 'li-40', number: '§ 40', text: 'Se um pai, durante sua vida, conceder a seu filho favorito um presente para o qual redigir um documento selado, após a morte do pai os herdeiros deverão dividir o restante do patrimônio paterno. Eles não poderão contestar a parte atribuída nem rejeitar a palavra do pai.' },
        { id: 'li-41', number: '§ 41', text: 'Se um pai, durante sua vida, designar o dote nupcial de seu filho mais velho e este se casar enquanto o pai ainda estiver vivo, após a morte do pai os herdeiros deverão [...], a herança [...] do patrimônio paterno [...], o dote nupcial deverá [...].' },
        { id: 'li-41a', number: '§ 41a', text: '[...].' },
        { id: 'li-42', number: '§ 42', text: 'Se um homem afirmar que a filha virgem de outro homem manteve relações sexuais, mas ficar comprovado que ela não manteve relações sexuais, ele deverá pesar e entregar dez siclos de prata.' },
        { id: 'li-43', number: '§ 43', text: 'Se um homem alugar um boi e cortar o tendão do casco, deverá pesar e entregar um terço de seu valor em prata.' },
        { id: 'li-44', number: '§ 44', text: 'Se um homem alugar um boi e destruir seu olho, deverá pesar e entregar metade de seu valor em prata.' },
        { id: 'li-45', number: '§ 45', text: 'Se um homem alugar um boi e quebrar seu chifre, deverá pesar e entregar um quarto de seu valor em prata.' },
        { id: 'li-46', number: '§ 46', text: 'Se um homem alugar um boi e quebrar sua cauda, deverá pesar e entregar um quarto de seu valor em prata.' },
        { id: 'li-47', number: '§ 47', text: 'Se um homem [...], deverá pesar e entregar [em prata].' }
      ]
    },
    {
      id: 'epilogue',
      title: 'Epílogo',
      type: 'text',
      content: `De acordo com a palavra verdadeira do deus Utu, fiz com que as terras da Suméria e da Acádia observassem um procedimento judicial justo. Segundo a determinação do deus Enlil, eu, Lipit-Ishtar, filho de Enlil, erradiquei a inimizade e a violência. Tornei tabu o pranto, a lamentação, os clamores por justiça e os litígios. Fiz resplandecer o direito e a verdade e trouxe bem-estar às terras da Suméria e da Acádia, a toda a humanidade.

Quando estabeleci a justiça nas terras da Suméria e da Acádia, ergui esta estela. Aquele que nada fizer de mau contra ela, que não danificar minha obra, que não apagar minha inscrição nem escrever seu próprio nome sobre ela, que não a remover de seu lugar, a esse sejam concedidos vida e o sopro de longos dias. Que ele erga o pescoço ao céu no templo Ekur, e que o semblante luminoso do deus Enlil se volte para ele do alto.

Mas aquele que fizer algo de mau contra ela, que danificar minha obra, que entrar na sala do tesouro, que alterar seu pedestal, que apagar esta inscrição e escrever seu próprio nome em lugar do meu, ou que, por causa desta maldição, induzir um estranho a removê-la, seja ele rei, senhor enu ou governante ensi, que ele seja completamente apagado [...].

[lacuna no texto]

Que [...] o deus [...], filho primogênito do deus Enlil, não se aproxime; que sua descendência não prospere; que aquele que escapar da arma, ao entrar na segurança de sua casa, não tenha herdeiros. Que os deuses [...], Ashnan e Sumukan, senhores da abundância, retenham o favor do céu e da terra [...].

[lacuna no texto]

Que o deus Enlil revogue o dom do sublime templo Ekur. Que o deus Utu, juiz do céu e da terra, retire a palavra augustíssima. [...] Que ele transforme suas cidades em montes de ruínas. Que os fundamentos de sua terra não sejam firmes, que ela não tenha rei. Que o deus Ninurta, poderoso guerreiro, filho do deus Enlil, [...].

[texto final fragmentário]`
    },
    {
      id: 'glossary',
      title: 'Glossário',
      type: 'glossary',
      glossaryEntries: [
        { term: 'Boi (em contratos)', definition: 'Animal essencial para o trabalho agrícola. As leis que tratam do aluguel de bois regulam danos específicos, como lesões nos cascos, olhos, chifres e cauda, com indenizações proporcionais ao valor do animal.' },
        { term: 'Dote / presente nupcial', definition: 'Bens ou valores entregues no contexto do casamento, geralmente provenientes do patrimônio paterno. O código regula sua destinação em casos de divórcio, morte e sucessão.' },
        { term: 'Esposa principal', definition: 'Mulher que ocupa a posição jurídica central no casamento. O código estabelece proteção específica a essa esposa, inclusive em casos de doença, envelhecimento ou perda de atratividade.' },
        { term: 'Herança / patrimônio paterno', definition: 'Conjunto de bens pertencentes ao pai, a ser dividido entre os herdeiros após sua morte, segundo regras que consideram filiação, casamento e doações feitas em vida.' },
        { term: 'Mina', definition: 'Unidade de peso superior ao siclo. Uma mina correspondia a sessenta siclos. É utilizada para indicar valores mais elevados em indenizações e compensações.' },
        { term: 'Miqtu', definition: 'Categoria jurídica específica, de difícil tradução direta. Designa uma pessoa em condição intermediária, distinta do homem livre e do escravizado, com certa mobilidade e proteção jurídica própria.' },
        { term: 'Prólogo e epílogo', definition: 'Partes não normativas do código. O prólogo apresenta a legitimação divina e os objetivos do reinado; o epílogo reafirma a justiça do governante e estabelece bênçãos e maldições' },
        { term: 'Siclo (shekel)', definition: 'Unidade de peso e de valor utilizada na Mesopotâmia antiga, geralmente referida em prata. No Código de Lipit-Ishtar, o siclo aparece como forma padrão de indenização e multa.' },
        { term: 'Sila', definition: 'Medida de volume, usada principalmente para grãos. No código, aparece como forma de pagamento em contratos de locação e prestação de serviços.' },
        { term: 'Ugbabtu, Naditu, Qadištu', definition: 'Categorias femininas associadas a funções religiosas ou a formas específicas de consagração. O código reconhece essas mulheres como herdeiras em igualdade de condições com seus irmãos.' },
      ]
    }
  ]
};
