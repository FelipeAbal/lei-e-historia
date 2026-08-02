import { HistoricalDocument } from '../types';

export const declaracaoIndependenciaEua: HistoricalDocument = {
  id: 'declaracao-independencia-eua',
  title: 'Declaração de Independência dos Estados Unidos',
  subtitle: 'No Congresso, 4 de julho de 1776',
  date: '4 de julho de 1776',
  era: 'Idade Contemporânea',
  language: 'Inglês',
  description: 'Documento fundador dos Estados Unidos da América, aprovado pelo Congresso Continental em 4 de julho de 1776. Proclamou a independência das treze colônias britânicas e enunciou os princípios de que todos os homens são criados iguais e dotados de direitos inalienáveis — influenciando revoluções em todo o mundo.',
  sections: [
    {
      id: 'context',
      title: 'Contexto Histórico',
      type: 'text',
      content: `Desde 1763, as relações entre as treze colônias britânicas da América do Norte e a metrópole vinham se deteriorando. A Guerra dos Sete Anos deixara a Grã-Bretanha com dívidas colossais, e o Parlamento decidiu que as colônias deveriam contribuir para seu pagamento. Uma série de leis tributárias — o Stamp Act (1765), o Townshend Acts (1767), o Tea Act (1773) — foi aprovada sem que os colonos tivessem representação no Parlamento. O lema "nenhuma tributação sem representação" tornou-se o grito de guerra do movimento de resistência.

O Massacre de Boston (1770) e o Motim do Chá (1773) escalaram o conflito. Em abril de 1775, os primeiros tiros da guerra foram disparados em Lexington e Concord. O Segundo Congresso Continental, reunido na Filadélfia, ainda tentava uma reconciliação quando, em junho de 1776, Richard Henry Lee apresentou uma resolução formal de independência. Um comitê de cinco foi designado para redigir o documento: Thomas Jefferson, John Adams, Benjamin Franklin, Roger Sherman e Robert Livingston. Jefferson ficou encarregado da redação principal.

O texto aprovado em 4 de julho de 1776 — com algumas alterações feitas pelo Congresso, incluindo a supressão de uma passagem que condenava a escravidão — tornou-se um dos documentos mais influentes da história política mundial. Sua segunda frase ("consideramos estas verdades como evidentes por si mesmas...") é frequentemente citada como a formulação mais concisa do ideal democrático moderno.`
    },
    {
      id: 'preambulo',
      title: 'Preâmbulo',
      type: 'text',
      content: `Quando no curso dos eventos humanos se torna necessário que um povo dissolva os laços políticos que o conectavam a outro, e assuma entre as potências da Terra a posição separada e igual a que as Leis da Natureza e do Deus da Natureza lhe dão direito, um decente respeito pelas opiniões da humanidade exige que declare as causas que o impelem à separação.

Consideramos estas verdades como evidentes por si mesmas: que todos os homens são criados iguais, que são dotados pelo seu Criador de certos direitos inalienáveis, entre os quais estão a Vida, a Liberdade e a busca da Felicidade. — Que para assegurar esses direitos, os Governos são instituídos entre os Homens, derivando seus justos poderes do consentimento dos governados; — Que sempre que qualquer Forma de Governo se tornar destruidora desses fins, é Direito do Povo alterá-la ou aboli-la e instituir novo Governo, lançando seus fundamentos em tais princípios e organizando seus poderes de tal forma que lhes pareça mais adequada para promover sua Segurança e Felicidade. A prudência, de fato, ditará que os Governos há muito estabelecidos não devem ser mudados por causas leves e transitórias; e por isso toda a experiência tem demonstrado que a humanidade está mais disposta a suportar, enquanto os males forem suportáveis, do que a corrigir a si mesma abolindo as formas às quais está acostumada. Mas quando uma longa série de abusos e usurpações, perseguindo invariavelmente o mesmo objetivo, evidencia um plano de reduzi-la a um Despotismo absoluto, é seu direito, é seu dever, repudiar tal Governo e prover novos Guardiões para sua segurança futura. — Tal tem sido a paciente tolerância destas Colônias; e tal é agora a necessidade que as constrange a alterar seus anteriores Sistemas de Governo. A história do atual Rei da Grã-Bretanha é uma história de repetidas injúrias e usurpações, todas tendo por objeto direto o estabelecimento de uma Tirania absoluta sobre estes Estados. Para provar isso, que os fatos sejam submetidos a um mundo imparcial.`
    },
    {
      id: 'acusacoes',
      title: 'Acusações ao Rei Jorge III',
      type: 'articles',
      articles: [
        {
          id: 'ac-1',
          number: 'Acusação 1',
          text: 'Recusou sua sanção às leis mais salutares e necessárias ao bem público.'
        },
        {
          id: 'ac-2',
          number: 'Acusação 2',
          text: 'Proibiu seus Governadores de promulgar leis de importância imediata e urgente, a menos que ficassem suspensas em sua execução até que obtivessem sua sanção; e, quando assim suspensas, negligenciou completamente atendê-las.'
        },
        {
          id: 'ac-3',
          number: 'Acusação 3',
          text: 'Recusou-se a promulgar outras leis para acomodação de grandes distritos populacionais, a menos que esses povos renunciassem ao direito de Representação na Legislatura, direito inestimável para eles e temível apenas para os tiranos.'
        },
        {
          id: 'ac-4',
          number: 'Acusação 4',
          text: 'Convocou corpos legislativos em lugares incomuns, inconfortáveis e distantes do repositório de seus registros públicos, com o único propósito de fatigá-los até a conformidade com suas medidas.'
        },
        {
          id: 'ac-5',
          number: 'Acusação 5',
          text: 'Dissolveu repetidamente as Câmaras Representativas por se oporem com viril firmeza às suas invasões dos direitos do povo.'
        },
        {
          id: 'ac-6',
          number: 'Acusação 6',
          text: 'Recusou-se por longo tempo, após tais dissoluções, a permitir que outros fossem eleitos; com isso os poderes Legislativos, incapazes de Aniquilação, retornaram ao Povo em geral para seu exercício; permanecendo o Estado entretanto exposto a todos os perigos de invasão externa e de convulsões internas.'
        },
        {
          id: 'ac-7',
          number: 'Acusação 7',
          text: 'Procurou impedir o crescimento populacional destes Estados; para isso obstruindo as Leis de Naturalização de Estrangeiros; recusando-se a promulgar outras para encorajar sua imigração para cá, e elevando as condições para novas Concessões de Terras.'
        },
        {
          id: 'ac-8',
          number: 'Acusação 8',
          text: 'Obstruiu a Administração da Justiça, recusando sua sanção às leis para o estabelecimento de poderes Judiciários.'
        },
        {
          id: 'ac-9',
          number: 'Acusação 9',
          text: 'Tornou os Juízes dependentes apenas de sua Vontade quanto ao exercício de seus cargos e ao montante e pagamento de seus salários.'
        },
        {
          id: 'ac-10',
          number: 'Acusação 10',
          text: 'Criou uma multidão de Novos Ofícios e enviou para cá enxames de Funcionários para assediar nosso povo e consumir-lhe a substância.'
        },
        {
          id: 'ac-11',
          number: 'Acusação 11',
          text: 'Manteve entre nós, em tempos de paz, Exércitos Permanentes sem o Consentimento de nossas legislaturas.'
        },
        {
          id: 'ac-12',
          number: 'Acusação 12',
          text: 'Procurou tornar o Poder Militar independente do e superior ao Poder Civil.'
        },
        {
          id: 'ac-13',
          number: 'Acusação 13',
          text: 'Combinou-se com outros para nos sujeitar a uma jurisdição estranha à nossa constituição e não reconhecida por nossas leis; dando sua sanção aos seguintes Atos de pretensa Legislação:'
        },
        {
          id: 'ato-1',
          number: 'Ato I',
          text: 'Aquartelamento de grandes contingentes de tropas armadas entre nós.'
        },
        {
          id: 'ato-2',
          number: 'Ato II',
          text: 'Proteção dessas tropas, por meio de julgamentos simulados, da punição por quaisquer Assassinatos que devessem cometer sobre os Habitantes destes Estados.'
        },
        {
          id: 'ato-3',
          number: 'Ato III',
          text: 'Corte de nosso Comércio com todas as partes do mundo.'
        },
        {
          id: 'ato-4',
          number: 'Ato IV',
          text: 'Imposição de Tributos sem nosso Consentimento.'
        },
        {
          id: 'ato-5',
          number: 'Ato V',
          text: 'Privação, em muitos casos, dos benefícios do Julgamento por Júri.'
        },
        {
          id: 'ato-6',
          number: 'Ato VI',
          text: 'Transporte de cidadãos além-mar para serem julgados por pretensas ofensas.'
        },
        {
          id: 'ato-7',
          number: 'Ato VII',
          text: 'Abolição do livre Sistema das Leis Inglesas numa Província vizinha, estabelecendo ali um governo Arbitrário e ampliando suas Fronteiras de modo a torná-la ao mesmo tempo exemplo e instrumento adequado para introduzir o mesmo domínio absoluto nestas Colônias.'
        },
        {
          id: 'ato-8',
          number: 'Ato VIII',
          text: 'Supressão de nossas Cartas, abolição de nossas mais valiosas Leis e alteração fundamental das Formas de nossos Governos.'
        },
        {
          id: 'ato-9',
          number: 'Ato IX',
          text: 'Suspensão de nossas próprias Legislaturas e declaração de estar investido de poder para legislar para nós em todos os casos, quaisquer que sejam.'
        },
        {
          id: 'ac-14',
          number: 'Acusação 14',
          text: 'Abdicou do Governo aqui, ao nos declarar fora de sua Proteção e mover-nos Guerra.'
        },
        {
          id: 'ac-15',
          number: 'Acusação 15',
          text: 'Saqueou nossos mares, devastou nossas Costas, incendiou nossas cidades e destruiu a vida de nosso povo.'
        },
        {
          id: 'ac-16',
          number: 'Acusação 16',
          text: 'Está neste momento transportando grandes Exércitos de Mercenários estrangeiros para consumar as obras de morte, desolação e tirania, já iniciadas com circunstâncias de Crueldade e perfídia raramente igualadas nas eras mais bárbaras, e totalmente indignas do Chefe de uma nação civilizada.'
        },
        {
          id: 'ac-17',
          number: 'Acusação 17',
          text: 'Constraniu nossos concidadãos aprisionados nos altos mares a portarem armas contra seu País, tornando-os executores de seus amigos e Irmãos, ou a caírem eles próprios por suas mãos.'
        },
        {
          id: 'ac-18',
          number: 'Acusação 18',
          text: 'Fomentou insurreições domésticas entre nós e se esforçou para trazer sobre os habitantes de nossas fronteiras os impiedosos Selvagens das terras indígenas, cuja conhecida regra de guerra é uma destruição indiscriminada de todas as idades, sexos e condições.'
        }
      ]
    },
    {
      id: 'declaracao-final',
      title: 'Declaração Final',
      type: 'text',
      content: `Em cada estágio dessas Opressões, Peticionamos por Reparação nos termos mais humildes: nossas repetidas Petições foram respondidas apenas com repetidas injúrias. Um Príncipe, cujo caráter é assim marcado por cada ato que pode definir um Tirano, é inapto para ser o governante de um povo livre.

Tampouco deixamos de dar atenção aos nossos irmãos britânicos. Advertimo-los de tempos em tempos sobre as tentativas de sua legislatura de estender sobre nós uma jurisdição injustificável. Lembramo-los das circunstâncias de nossa emigração e estabelecimento aqui. Apelamos para sua nativa justiça e magnanimidade, e os conjuramos pelos laços de nosso parentesco comum a desautorizar essas usurpações, que inevitavelmente interromperiam nossas conexões e correspondência. Eles também têm sido surdos à voz da justiça e da consanguinidade. Devemos, portanto, aquiescer na necessidade que anuncia nossa Separação, e considerá-los, como consideramos o restante da humanidade, Inimigos na Guerra, Amigos na Paz.

Nós, portanto, os Representantes dos Estados Unidos da América, reunidos em Congresso Geral, apelando ao Supremo Juiz do mundo pela retidão de nossas intenções, fazemos, em Nome e por Autoridade do bom Povo destas Colônias, solenemente publicar e declarar: Que estas Colônias Unidas são, e de Direito devem ser, Estados Livres e Independentes; que estão Absolvidas de toda Lealdade à Coroa Britânica, e que toda conexão política entre elas e o Estado da Grã-Bretanha é, e deve ser, totalmente dissolvida; e que, como Estados Livres e Independentes, têm pleno Poder para declarar Guerra, concluir Paz, contrair Alianças, estabelecer Comércio, e fazer todos os outros Atos e Coisas que os Estados Independentes podem de direito fazer. E em apoio a esta Declaração, com firme confiança na proteção da divina Providência, empenhamos mutuamente uns aos outros nossas Vidas, nossas Fortunas e nossa sagrada Honra.`
    },
    {
      id: 'sobre',
      title: 'Sobre o Texto',
      type: 'text',
      content: `A tradução apresentada é original, realizada a partir do texto inglês aprovado pelo Congresso Continental em 4 de julho de 1776, cotejado com edições críticas modernas. O documento original, redigido por Thomas Jefferson e revisado pelo Congresso, encontra-se preservado nos Arquivos Nacionais dos Estados Unidos, em Washington D.C.

O Congresso suprimiu do rascunho original de Jefferson uma longa passagem que responsabilizava Jorge III por ter imposto a escravidão às colônias — um parágrafo que teria criado contradições insuperáveis com a manutenção da escravidão pelos próprios signatários. A omissão é historicamente significativa: dos 56 signatários, 41 eram ou haviam sido proprietários de escravizados, e o próprio Jefferson mantinha mais de 600 pessoas em cativeiro ao longo de sua vida.

A expressão "impiedosos Selvagens" (*merciless Indian Savages*), mantida no texto por fidelidade histórica, reflete a linguagem colonial e racista da época. O documento, portanto, deve ser lido em sua contradição constitutiva: proclamou os ideais mais universais de liberdade e igualdade ao mesmo tempo em que os negava sistematicamente a africanos escravizados e a povos indígenas.

A Declaração influenciou diretamente a Declaração dos Direitos do Homem e do Cidadão francesa (1789), as constituições latino-americanas do século XIX — incluindo as brasileiras — e a Declaração Universal dos Direitos Humanos da ONU (1948).`
    }
  ]
};
