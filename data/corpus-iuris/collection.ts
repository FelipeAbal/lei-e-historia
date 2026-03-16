import { DocumentCollection } from '../../types';

export const corpusIurisCivilis: DocumentCollection = {
  id: 'corpus-iuris-civilis',
  title: 'Corpus Iuris Civilis',
  subtitle: 'A Compilação de Justiniano',
  date: '529–534 d.C.',
  era: 'Roma',
  language: 'Latim',
  description: 'A monumental compilação jurídica ordenada pelo imperador Justiniano I, reunindo séculos de Direito Romano em uma obra sistematizada que se tornou a base do Direito civil ocidental.',
  sections: [
    {
      id: 'introducao',
      title: 'Introdução',
      content: `A expressão Corpus Iuris Civilis não é romana. Foi cunhada pelo jurista francês Denis Godefroy em 1583, na edição que publicou em Lyon reunindo os textos da compilação legislativa do imperador Justiniano I (527–565 d.C.). O nome pegou. Desde então, designa o conjunto de quatro obras jurídicas produzidas entre 529 e 534 em Constantinopla, capital do Império Romano do Oriente, por iniciativa de Justiniano e sob a coordenação do jurista Triboniano.

O projeto tinha uma ambição declarada. Justiniano queria reunir em um corpo coerente a totalidade do direito romano acumulado ao longo de mais de mil anos. Isso significava compilar as constituições imperiais promulgadas desde Adriano (século II d.C.), organizar os escritos dos jurisconsultos clássicos, produzir um manual de ensino e, por fim, incorporar a legislação do próprio Justiniano. O resultado foram quatro obras distintas, produzidas em sequência ao longo de cerca de seis anos.`
    },
    {
      id: 'quatro-partes',
      title: 'As quatro partes',
      content: `O Codex (Codex Iustinianus) foi a primeira peça do conjunto. Promulgado em sua primeira versão em abril de 529, reunia as constituições imperiais vigentes desde Adriano até o próprio Justiniano, organizadas por matéria em doze livros. Uma segunda edição, o Codex repetitae praelectionis, foi promulgada em novembro de 534 para incorporar a legislação posterior a 529. É esta segunda versão que chegou até nós, embora de forma incompleta.

O Digesto (Digesta ou Pandectae) é a parte mais extensa e, do ponto de vista da ciência jurídica, a mais rica. Promulgado em dezembro de 533, compõe-se de cinquenta livros que reúnem fragmentos extraídos das obras de trinta e nove jurisconsultos romanos, desde Quinto Múcio Cévola (século I a.C.) até Hermogeniano (século IV d.C.). A comissão encarregada, liderada por Triboniano, selecionou e organizou trechos de quase dois mil livros. Os fragmentos foram distribuídos por matéria e, dentro de cada título, identificados pelo nome do jurista e pela obra de origem. O Digesto preservou assim uma parte considerável da produção intelectual dos juristas romanos clássicos, textos que de outro modo teriam se perdido.

As Institutas (Institutiones) foram promulgadas simultaneamente ao Digesto, em 21 de novembro de 533, e entraram em vigor junto com ele em 30 de dezembro do mesmo ano. São quatro livros organizados segundo a tripartição do jurista Gaio (século II d.C.) em pessoas, coisas e ações. Justiniano concebeu as Institutas como manual de ensino para o primeiro ano das escolas de direito, mas lhes conferiu força de lei, o que as torna um caso peculiar de texto simultaneamente didático e normativo. A comissão redatora foi composta por Triboniano, Teófilo (professor em Constantinopla) e Doroteu (professor em Beirute).

As Novelas (Novellae Constitutiones) são as constituições promulgadas por Justiniano após a conclusão do Codex em sua segunda edição (534). Diferentemente das demais partes, as Novelas nunca receberam uma compilação oficial. Chegaram até nós por meio de coleções privadas, as mais conhecidas sendo o Epitome Iuliani (resumo em latim de 124 novelas, composto por Juliano, professor em Constantinopla), a coleção grega de 168 novelas conhecida como Authenticum na tradição medieval, e a coleção de 168 novelas preservada em manuscritos gregos. A maioria das Novelas foi redigida em grego, não em latim, refletindo a realidade linguística do Império do Oriente no século VI.`
    },
    {
      id: 'contexto-historico',
      title: 'Contexto histórico',
      content: `O Corpus Iuris Civilis foi produzido em um momento específico da história do Império Romano do Oriente. Justiniano havia ascendido ao trono em 527 com um programa de restauração imperial que incluía a reconquista dos territórios ocidentais perdidos, a unificação religiosa em torno da ortodoxia cristã e a reorganização do aparato jurídico. A compilação do direito era parte desse projeto mais amplo.

O direito romano encontrava-se, na prática, em estado de considerável desordem. As constituições imperiais acumuladas ao longo de séculos eram numerosas, contraditórias e de difícil acesso. Os escritos dos jurisconsultos clássicos, embora ainda invocados nos tribunais, circulavam em cópias fragmentárias e nem sempre confiáveis. A chamada Lei das Citações de 426, promulgada pelos imperadores Teodósio II e Valentiniano III, já havia tentado resolver parte do problema ao limitar a cinco os juristas cuja autoridade podia ser invocada em juízo (Gaio, Papiniano, Paulo, Ulpiano e Modestino), mas a solução era paliativa.

Justiniano decidiu enfrentar o problema de forma sistemática. A rapidez da execução é notável. Entre a constituição Haec quae necessario (528) e a promulgação do Codex repetitae praelectionis (534), passaram-se apenas seis anos. A comissão do Digesto, em particular, realizou em três anos um trabalho que o próprio Justiniano, na constituição Tanta, reconheceu que muitos julgavam impossível.

O preço dessa rapidez foi um conjunto de intervenções nos textos originais. A comissão tinha autorização expressa de Justiniano para alterar os fragmentos dos jurisconsultos clássicos, eliminando contradições e adaptando o conteúdo ao direito vigente. Essas alterações, que a romanística moderna denomina interpolações (emblemata Triboniani), foram objeto de intensa investigação filológica nos séculos XIX e XX, gerando uma vasta literatura dedicada a distinguir o texto original dos juristas clássicos das modificações introduzidas pela comissão justinianeia.`
    },
    {
      id: 'recepcao-influencia',
      title: 'Recepção e influência',
      content: `Após a queda do Império Romano do Ocidente em 476, o direito romano sobreviveu no Oriente por meio da compilação justinianeia e de seus desdobramentos na tradição jurídica bizantina. No Ocidente, o Corpus permaneceu largamente desconhecido durante a Alta Idade Média. A situação mudou a partir do final do século XI, quando um manuscrito do Digesto (a chamada Littera Florentina, hoje preservado em Florença) foi redescoberto e passou a ser estudado na Universidade de Bolonha.

O trabalho de Irnério e dos glosadores bolonheses sobre o Corpus a partir do início do século XII inaugurou uma tradição de estudo e comentário que se estendeu por séculos. Os glosadores (entre os quais Acúrsio, autor da Glossa Ordinaria) e depois os comentadores ou pós-glosadores (Bártolo de Sassoferrato, Baldo de Ubaldis) construíram sobre o texto justinianeu um edifício interpretativo que moldou a ciência jurídica europeia. O direito romano, tal como organizado no Corpus, foi progressivamente recebido nos ordenamentos jurídicos europeus ao longo da Idade Média e da Idade Moderna, em um processo que os historiadores chamam de recepção do direito romano.

A influência do Corpus sobre as codificações modernas é direta e documentável. O Code civil francês de 1804, o Bürgerliches Gesetzbuch alemão de 1900 e os códigos civis que deles derivaram (incluindo os brasileiros de 1916 e 2002) organizam o direito privado segundo categorias e conceitos que remontam à compilação justinianeia. Boa parte da terminologia jurídica contemporânea em matéria de obrigações, propriedade, posse e sucessões tem origem nos textos do Corpus.`
    },
    {
      id: 'sobre-edicao',
      title: 'Sobre esta edição',
      content: `Este repositório apresenta as Institutas na íntegra, divididas por livros e títulos, por serem a parte mais acessível e didática do Corpus. Do Digesto, do Codex e das Novelas, apresentamos uma seleção de excertos representativos, escolhidos por sua relevância para o estudo da História do Direito e pela frequência com que são citados na literatura jurídica. Cada excerto é acompanhado de sua referência no sistema convencional de citação das fontes romanas e de uma breve nota de contexto.

A opção por apresentar o Corpus desta forma reflete uma escolha prática. As Institutas, com seus quatro livros, são um texto de extensão manejável e estrutura clara. O Digesto, com cinquenta livros, e o Codex, com doze, demandariam um esforço editorial que excede o escopo deste projeto. A seleção de excertos procura oferecer ao leitor uma amostra representativa dessas obras sem pretensão de exaustividade.`
    },
  ],
  childDocumentIds: ['institutas', 'digesto-justiniano', 'codex-justiniano'],
};
