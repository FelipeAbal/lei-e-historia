import { DocumentCollection } from '../../types';

export const institutas: DocumentCollection = {
  id: 'institutas',
  title: 'Institutas',
  subtitle: 'O Monumento Jurídico do Ocidente',
  date: '533 d.C.',
  era: 'Roma',
  language: 'Latim',
  description: 'O manual introdutório do Corpus Iuris Civilis, dividido em quatro livros, destinado ao ensino do Direito. Apresenta de forma didática os princípios fundamentais do Direito Romano.',
  parentCollectionId: 'corpus-iuris-civilis',
  sections: [
    {
      id: 'introducao',
      title: 'Introdução',
      content: `Promulgadas em 21 de novembro de 533 d.C. pelo Imperador Justiniano, as Institutas (Institutiones) foram concebidas originalmente como um manual didático para estudantes de direito em Constantinopla. No entanto, o imperador conferiu-lhes força de lei imperial, transformando a teoria em dogma estatal.

Enquanto o Império Romano do Ocidente já havia ruído, Justiniano buscou na codificação do direito a restauração da "ordem romana". Este documento é a chave para compreender a mentalidade jurídica que o Ocidente herdou: uma estrutura racional e sistemática que, sob a aparência de neutralidade técnica, codificou as relações de produção baseadas na escravidão e na propriedade privada absoluta.

Ao contrário das leis arcaicas (como as XII Tábuas), aqui o Direito não é mais um rito mágico ou um acordo entre clãs, mas uma ciência de governo. É nas Institutas que encontramos a gramática do poder que seria resgatada pela burguesia napoleônica, mais de mil anos depois, para construir o Direito Civil moderno.

Para melhor compreensão vamos colocar separadamente cada um dos livros.`
    },
  ],
  childDocumentIds: [
    'institutas-livro-1',
    'institutas-livro-2',
    'institutas-livro-3',
    'institutas-livro-4',
  ],
};
