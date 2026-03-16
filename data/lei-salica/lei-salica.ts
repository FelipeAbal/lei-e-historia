import { DocumentCollection } from '../../types';

export const leiSalica: DocumentCollection = {
  id: 'lei-salica',
  title: 'Lei Sálica',
  subtitle: 'O Direito dos Francos',
  date: 'c. 507–511',
  era: 'Idade Média',
  language: 'Latim',
  description: 'Compilação dos costumes jurídicos dos Francos, elaborada durante o reinado de Clóvis I entre o final do século V e o início do século VI. Representa a transição do direito oral para o escrito na Europa medieval, com forte ênfase na composição pecuniária (wergeld) e na hierarquia social.',
  sections: [
    {
      id: 'introducao',
      title: 'Introdução',
      content: `A chamada Lei Sálica (Lex Salica) é um dos mais importantes textos jurídicos do início da Idade Média europeia. Elaborada entre o final do século V e o início do século VI, durante o reinado de Clóvis I, rei dos Francos, a Lei Sálica representa um momento decisivo na transição entre o direito consuetudinário das sociedades germânicas e a fixação escrita das normas jurídicas.

Trata-se de um texto que não deve ser compreendido como um "código" no sentido moderno do termo. A Lei Sálica não pretende ser sistemática, exaustiva ou coerente segundo uma lógica abstrata. Ela é, antes, uma compilação de práticas costumeiras, decisões reiteradas e composições pecuniárias, fixadas por escrito em um contexto de consolidação do poder régio e de expansão territorial.

A escrita da Lei Sálica deve ser entendida como uma tecnologia de poder. Ao registrar os costumes em um texto escrito, o rei e sua administração passam a controlar o acesso ao direito, a interpretação das normas e os mecanismos de resolução de conflitos. A oralidade, característica central do direito consuetudinário, é progressivamente substituída por um direito mediado pela escrita e pela autoridade política.

Outro aspecto central da Lei Sálica é a centralidade da composição pecuniária (wergeld). A maioria das infrações não é punida com penas corporais ou privativas de liberdade, mas com o pagamento de valores em dinheiro, variáveis conforme a gravidade da ofensa, a condição social da vítima e a posição do agressor. Isso revela uma sociedade profundamente hierarquizada, na qual o valor jurídico da vida e do corpo não é igual para todos.

A Lei Sálica também evidencia a coexistência de diferentes estatutos jurídicos: homens livres, semi-livres (liti), escravos, mulheres, crianças e estrangeiros são tratados de maneira distinta. A igualdade perante a lei, princípio central do direito moderno, é completamente inexistente nesse contexto.

Por fim, o texto mostra como o direito medieval inicial está profundamente imbricado com relações de parentesco, honra, propriedade e proteção régia. Crimes como furto, rapto, homicídio e dano à propriedade são regulados não apenas como violações abstratas da norma, mas como rupturas de equilíbrios sociais que exigem compensação.

A Lei Sálica, portanto, é uma fonte privilegiada para compreender o nascimento do direito escrito no Ocidente medieval, bem como os limites e as tensões desse processo. Longe de representar um avanço linear em direção à modernidade jurídica, ela revela um direito profundamente marcado pela desigualdade, pela violência e pela função política da escrita.`
    },
  ],
  childDocumentIds: ['lei-salica-titulos-i-x', 'lei-salica-titulos-xi-xx', 'lei-salica-titulos-xxi-xxx', 'lei-salica-titulos-xxxi-xl', 'lei-salica-titulos-xli-l', 'lei-salica-titulos-li-lx', 'lei-salica-titulos-lxi-lxv', 'lei-salica-capitular-i', 'lei-salica-capitular-ii', 'lei-salica-decreto-clotario', 'lei-salica-capitular-iii', 'lei-salica-capitular-iv', 'lei-salica-capitular-v', 'lei-salica-capitular-vi-sete-tipos'],
};
