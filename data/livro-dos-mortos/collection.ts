import { DocumentCollection } from '../../types';

export const livroDosMortos: DocumentCollection = {
  id: 'livro-dos-mortos',
  title: 'Livro dos Mortos',
  subtitle: 'Textos das Pirâmides ao Papiro de Ani',
  date: 'c. 1550–50 a.C.',
  era: 'Egito Antigo',
  language: 'Hierático',
  description: 'O principal conjunto de textos rituais funerários do Egito Antigo. Coleção de feitiços e declarações destinados a guiar o falecido pelo Duat (mundo dos mortos), com destaque para as 42 Confissões Negativas, pronunciadas no Salão das Duas Verdades diante dos juízes de Osíris.',
  sections: [
    {
      id: 'introducao',
      title: 'Introdução',
      content: `O *Livro dos Mortos* — cujo título egípcio é *Reu Nu Pert Em Hru*, "O Livro de Sair para a Luz do Dia" — é o nome moderno dado a uma coleção de textos funerários do Antigo Egito, utilizados do Novo Império (c. 1550 a.C.) até o período ptolomaico (c. 50 a.C.). O título europeu foi cunhado pelo arqueólogo Karl Richard Lepsius em 1842, ao publicar a primeira edição sistemática desses textos.

O conjunto descende de tradições funerárias mais antigas: os *Textos das Pirâmides* (Antigo Império, c. 2400–2300 a.C.), inscritos nas paredes das câmaras funerárias reais; e os *Textos dos Sarcófagos* (Primeiro Período Intermediário e Médio Império), que democratizaram o acesso aos rituais de proteção para além da realeza. Com o Novo Império, os textos passam a ser registrados em papiros que eram depositados junto às múmias, tornando-se acessíveis a qualquer pessoa com posses suficientes para encomendá-los.

O *Livro dos Mortos* não é um livro no sentido moderno — não possui uma versão canônica fixa nem uma ordem imutável. Era uma compilação personalizada, selecionada por escribas segundo as necessidades e recursos de cada cliente. O Papiro de Ani, hoje no Museu Britânico (EA 10470), é o mais célebre e bem preservado exemplar, datado do reinado de Ramsés II (c. 1275 a.C.). O Papiro de Nebseni, datado de c. 1400 a.C., é outro exemplar importante que apresenta variações significativas, revelando a natureza fluida desse corpus.

O texto mais relevante do ponto de vista jurídico e moral é o *Capítulo 125*, que contém a **Declaração de Inocência** — as 42 Confissões Negativas — pronunciada pelo falecido no *Maati*, o Salão das Duas Verdades. O coração do morto era pesado na balança de Osíris contra a pena de Maat, deusa da verdade, justiça e ordem cósmica. Se o coração e a pena estivessem em equilíbrio, o falecido tornava-se *Maakheru* ("Justo de Voz") e era admitido na companhia dos deuses. Se pesasse mais que a pena, seria devorado pelo monstro Amemit — a "Devoradora" — e o falecido cessaria de existir para sempre.

Este acervo reúne o Papiro de Ani e o Papiro de Nebseni como documentos comparativos, permitindo ao leitor observar as variações entre as versões e compreender a natureza editorial e ritual desse corpus fundamental da civilização egípcia.`,
    },
  ],
  childDocumentIds: [
    'confissoes-maat-ani',
    'confissoes-maat-nebseni',
  ],
};
