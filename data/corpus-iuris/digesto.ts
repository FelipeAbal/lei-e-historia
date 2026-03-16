import { DocumentCollection } from '../../types';

export const digestoJustiniano: DocumentCollection = {
  id: 'digesto-justiniano',
  title: 'Digesto',
  subtitle: 'Pandectae — Excertos Selecionados',
  date: '533 d.C.',
  era: 'Roma',
  language: 'Latim',
  description: 'A mais extensa e doutrinariamente rica parte do Corpus Iuris Civilis. Compilação de extratos das obras dos grandes jurisconsultos romanos, organizada em cinquenta livros.',
  parentCollectionId: 'corpus-iuris-civilis',
  sections: [
    {
      id: 'introducao',
      title: 'O Digesto ou Pandectas: A Arquitetura da Razão Jurídica',
      content: `Publicado em 16 de dezembro de 533 d.C. por ordem do Imperador Justiniano, o Digesto (do latim Digesta, "coisas ordenadas") ou Pandectas (do grego Pandectae, "o que contém tudo") representa a peça central e tecnicamente mais sofisticada de todo o Corpus Juris Civilis. Diferente das Institutas, que serviam como manual elementar de ensino, ou do Código, que reunia as ordens diretas dos imperadores, o Digesto foi concebido como uma antologia monumental da jurisprudência romana. Trata-se não de um conjunto de leis estatais em sentido estrito, mas da preservação do raciocínio jurídico e da casuística desenvolvida pelos maiores jurisconsultos da Era Clássica, principalmente entre os séculos I e III d.C.

Sob a liderança do questor Triboniano, uma comissão de juristas e advogados empreendeu a tarefa hercúlea de analisar cerca de dois mil livros antigos, totalizando mais de três milhões de linhas de texto, para condensar a sabedoria jurídica de Roma em uma obra única e coerente. O resultado foi uma compilação de cinquenta livros que harmonizava séculos de debates, eliminando contradições, repetições e obsoletismos, adaptando o direito antigo à realidade social e política do Império Bizantino do século VI.

A obra não possui um autor único, sendo antes uma polifonia de vozes autorizadas. A grande maioria dos fragmentos provém de cinco juristas cuja autoridade fora consagrada pela Lei das Citações de 426 d.C.: Ulpiano, Paulo, Papiniano, Gaio e Modestino. No entanto, é fundamental para o pesquisador moderno compreender que os textos ali presentes não são reproduções literais das fontes clássicas. Os compiladores bizantinos realizaram alterações conhecidas como interpolações ou emblemata Triboniani, modificando os originais para adequá-los ao absolutismo imperial e à moral cristã vigente na época de Justiniano.

Estruturalmente, o Digesto organiza-se em Livros, Títulos, Fragmentos e Parágrafos, cobrindo desde as definições filosóficas de Justiça e Direito até a complexa regulação de contratos, delitos, heranças e o estatuto das pessoas. Mais do que um código de normas, o Digesto é um testemunho da metodologia romana de resolver conflitos, baseada na análise do caso concreto e na busca pela equidade, influenciando de maneira decisiva a formação de todos os sistemas jurídicos ocidentais modernos.

Os excertos a seguir foram selecionados por sua relevância histórica e doutrinária, representando passagens célebres que influenciaram decisivamente a tradição jurídica ocidental. Para melhor compreensão, cada Livro e Título é apresentado separadamente.`,
    },
  ],
  childDocumentIds: [
    'digesto-livro-1-titulo-1',
    'digesto-livro-9-titulo-2',
    'digesto-livro-12-titulo-6',
    'digesto-livro-41-titulo-1',
    'digesto-livro-41-extra',
    'digesto-livro-44-titulo-7',
    'digesto-livro-47-titulo-2',
    'digesto-livro-50-titulo-16',
  ],
};
