import { HistoricalDocument } from '../../types';

export const decretoGracianoDistincaoI: HistoricalDocument = {
  id: 'decreto-graciano-distincao-i',
  title: 'Decreto de Graciano — Distinção I',
  subtitle: 'Sobre o Direito da Natureza e da Constituição',
  date: 'c. 1140',
  era: 'Idade Média',
  language: 'Latim',
  description: 'Primeira distinção do Decreto de Graciano. Estabelece os fundamentos teóricos do direito: a distinção entre direito natural e humano, entre *fas* e *ius*, e a classificação do direito em natural, civil, das gentes, militar e público, a partir de Isidoro de Sevilha.',
  parentCollectionId: 'decreto-graciano',
  sections: [
    {
      id: 'introducao',
      title: 'Introdução — Distinções I e II',
      type: 'text',
      content: `As duas primeiras Distinções do *Decretum* funcionam como uma introdução teórica à obra inteira. Antes de apresentar qualquer norma eclesiástica concreta, Graciano precisa estabelecer o que é o direito, de onde ele vem e como suas diferentes espécies se relacionam entre si. Para isso, recorre massivamente a Isidoro de Sevilha (c. 560–636), cujas *Etimologias* — uma enciclopédia do saber tardoantigo — serão a principal fonte dos conceitos jurídicos fundamentais.

A abertura é programática e célebre: "O gênero humano é regido por dois meios, a saber: pelo direito natural e pelos costumes." A partir daí, Graciano constrói uma arquitetura conceitual que opõe o *fas* — a lei divina ou natural — ao *ius* — o direito humano positivo —, e que distingue dentro deste último o direito civil, o direito das gentes e o direito militar, entre outros. A Distinção I termina com a célebre tipologia isidoriana das fontes: lei (*lex*), costume (*mos*) e consuetude (*consuetudo*), conceitos que permanecerão centrais na teoria jurídica ocidental por séculos.

A Distinção II, mais breve, aprofunda a análise das fontes humanas do direito, distinguindo leis, plebiscitos, senatusconsultos, constituições imperiais, editos e respostas dos prudentes — numa clara absorção da estrutura das fontes do direito romano clássico, mediada pelo filtro isidoriano. A referência às leis Pápia Pompeia e Falcídia, às leis Ródias do comércio marítimo e à lei sátira revela o alcance enciclopédico desta abertura, que não é apenas uma introdução ao direito canônico, mas uma síntese da cultura jurídica ocidental até o século XII.

Lidas em conjunto, as Distinções I e II são indispensáveis para compreender como o pensamento jurídico medieval articula lei divina e lei humana, razão e costume, natureza e convenção — questões que a escolástica posterior, de Tomás de Aquino a Guilherme de Ockham, continuará a debater a partir exatamente deste vocabulário.`,
    },
    {
      id: 'distincao-i',
      title: 'Distinção I — Texto',
      type: 'articles',
      articles: [
        {
          id: 'd1-dac1',
          number: 'D.1 d.a.c.1',
          text: 'O género humano é regido por dois [meios], a saber: pelo direito natural e pelos costumes. O direito da natureza é aquele que se contém na lei e no evangelho, pelo qual se ordena a cada um fazer ao outro o que quer que seja feito a si mesmo, e se proíbe inferir ao outro o que não queira que se lhe faça. Onde Cristo no evangelho [diz]: "Tudo quanto quereis que os homens vos façam, fazei-o vós também a eles. Esta é, pois, a lei e os profetas."\n\n*Hinc* Isidoro, no livro V das Etimologias, diz:',
        },
        {
          id: 'd1-c1',
          number: 'D.1 c.1',
          text: '**As leis divinas constam pela natureza, as humanas pelos costumes**\n\nTodas as leis ou são divinas ou são humanas. As divinas constam pela natureza, as humanas pelos costumes. E por isso estas discrepam, visto que umas aprazem a uns povos e outras a outros.\n\n(§ 1) *Fas* é a lei divina, *ius* é a lei humana. Transitar pelo campo alheio é *fas* [permitido pela lei divina], não é *ius* [direito humano].',
        },
        {
          id: 'd1-dpc1',
          number: 'D.1 d.p.c.1',
          text: 'Pelas palavras desta autoridade dá-se a entender evidentemente em que diferem entre si a lei divina ou a humana, visto que tudo o que é *fas* seja aceito sob o nome de lei divina ou natural, mas sob o nome de lei humana entendam-se os costumes redigidos por direito e transmitidos.\n\n(§ 1) O direito [*ius*], porém, é um nome geral que contém em si muitas espécies.\n\nDonde, no mesmo livro, Isidoro diz:',
        },
        {
          id: 'd1-c2',
          number: 'D.1 c.2',
          text: '**O direito é o género, a lei porém é sua espécie**\n\nDireito [*ius*] é o nome geral. A lei [*lex*], porém, é espécie do direito. Diz-se direito [*ius*] porque é justo [*iustum*]. Todo o direito, entretanto, consta de leis e costumes.',
        },
        {
          id: 'd1-c3',
          number: 'D.1 c.3',
          text: '**O que seja a lei**\n\nA lei é a constituição escrita.',
        },
        {
          id: 'd1-c4',
          number: 'D.1 c.4',
          text: '**O que seja o *mos* [costume]**\n\nO *mos* [costume], entretanto, é a longa consuetude extraída apenas dos costumes [*moribus*].',
        },
        {
          id: 'd1-c5',
          number: 'D.1 c.5',
          text: '**O que seja a consuetude**\n\nA consuetude, porém, é um certo direito instituído pelos costumes, que é recebido como lei, quando a lei falta.\n\n(§ 1) Nem difere se consiste na escritura ou na razão, visto que a razão também recomenda a lei.\n\n(§ 2) Logo, se a lei consta pela razão, será lei tudo o que já constar pela razão, contanto que seja congruente com a religião, convenha à disciplina [ou: instrução] e aproveite à salvação.\n\n(§ 3) Chama-se, porém, consuetude porque está em uso comum.',
        },
        {
          id: 'd1-dpc5',
          number: 'D.1 d.p.c.5',
          text: 'Quando, portanto, se diz "não difere se a consuetude consiste na escritura ou na razão", aparece que a consuetude em parte está redigida em escritos, em parte está reservada apenas aos costumes dos que a usam. A que está redigida em escritos chama-se constituição ou direito. A que, todavia, não está redigida em escritos, denomina-se pelo nome geral, a saber, consuetude.\n\n(§ 1) Há também outra divisão do direito, como no mesmo livro atesta Isidoro, dizendo assim:',
        },
        {
          id: 'd1-c6',
          number: 'D.1 c.6',
          text: '**O direito ou é natural, ou civil, ou das gentes**',
        },
        {
          id: 'd1-c7',
          number: 'D.1 c.7',
          text: '**Direito natural**\n\nO direito natural é comum de todas as nações, pelo facto de que se possui em todo lugar pelo instinto da natureza, não por alguma constituição, como a conjunção do varão e da fêmea, a sucessão e educação dos filhos, a posse comum de todos e a única liberdade de todos, a aquisição daquelas coisas que se capturam no céu, na terra e no mar. Item: a restituição da coisa depositada ou do dinheiro confiado, a repulsão da violência pela força.\n\n(§ 1) Pois isto, ou se algo é semelhante a isto, nunca é tido por injusto, mas por natural e equitativo.',
        },
        {
          id: 'd1-c8',
          number: 'D.1 c.8',
          text: '**O que é o direito civil**\n\nDireito civil é o que cada povo ou cidade constituiu para si como próprio por causa humana e divina.',
        },
        {
          id: 'd1-c9',
          number: 'D.1 c.9',
          text: '**O que é o direito das gentes**\n\nDireito das gentes é a ocupação de sedes, a edificação, a fortificação, as guerras, as catividades, as servidões, os postlimínios, os tratados de paz, as tréguas, a religião de não violar os legados [embaixadores], os matrimónios proibidos entre estrangeiros.\n\n(§ 1) Por isso se chama direito das gentes, porque quase todas as gentes usam desse direito.',
        },
        {
          id: 'd1-c10',
          number: 'D.1 c.10',
          text: '**O que é o direito militar**\n\nDireito militar são as solenidades de inferir guerra, os nexos de fazer tratado, a saída contra o inimigo dado o sinal ou o combate. Item: a recepção dado o sinal. Item: a disciplina do crime militar, se o posto for desertado. Item: o modo dos estipêndios, os graus das dignidades, a honra dos prémios, como quando se doam coroas ou colares. Item: a decisão da presa [saque] e, conforme as qualidades e labores das pessoas, a justa divisão e a porção do príncipe.',
        },
        {
          id: 'd1-c11',
          number: 'D.1 c.11',
          text: '**Direito público**\n\nO direito público está nas coisas sagradas e nos sacerdotes e nos magistrados.',
        },
        {
          id: 'd1-c12',
          number: 'D.1 c.12',
          text: '**O que é o direito dos Quirites**\n\nO direito dos Quirites é propriamente dos Romanos, o qual nenhuns detêm senão os Quirites, isto é, os Romanos.\n\n(§ 1) No qual se trata das legítimas heranças, das curatelas, das tutelas, das usucapiões, cujos direitos em nenhum outro povo se encontram, mas são próprios dos Romanos e apenas para eles constituídos.',
        },
      ],
    },
  ],
};
