import { DocumentCollection } from '../../types';

export const ordenacoesFilipinas: DocumentCollection = {
  id: 'ordenacoes-filipinas',
  title: 'Ordenações Filipinas',
  subtitle: 'O Código da Monarquia Ibérica',
  date: '1603',
  era: 'Idade Moderna',
  language: 'Português',
  description: 'A compilação de leis portuguesas promulgada por Filipe I durante a União Ibérica, que regeu Portugal e o Brasil colonial por mais de três séculos. Organizada em cinco livros, é a mais duradoura codificação do Direito português e a base normativa sobre a qual se construiu boa parte do Direito brasileiro até o início do século XX.',
  sections: [
    {
      id: 'introducao',
      title: 'Introdução',
      content: `As Ordenações Filipinas são a terceira e última das grandes compilações gerais do Direito português da era moderna, sucedendo às Ordenações Afonsinas (1446) e Manuelinas (1521). Foram promulgadas por Filipe I de Portugal — Filipe II de Espanha — em 1603, no contexto da União Ibérica (1580–1640), período em que as coroas de Portugal e Espanha estiveram unidas sob um mesmo monarca.

A compilação resulta de um projeto iniciado ainda sob Filipe I mas concluído e publicado sob seu filho, Filipe II de Portugal. Seu objetivo era atualizar e sistematizar o Direito manuelino, incorporando a legislação extravagante produzida ao longo do século XVI e adaptando o texto às necessidades administrativas de um império que se estendia por Portugal, suas possessões atlânticas e o Estado do Brasil.

O texto está dividido em cinco livros, cada um dedicado a uma esfera distinta do Direito: o primeiro trata da organização judiciária e administrativa do reino; o segundo, das relações entre a Coroa, a Igreja e os estamentos privilegiados; o terceiro, do processo civil; o quarto, do Direito civil substantivo (contratos, sucessões, propriedade); e o quinto, do Direito penal e processual penal.`
    },
    {
      id: 'vigencia-brasil',
      title: 'Vigência em Portugal e no Brasil',
      content: `A Restauração portuguesa de 1640, que pôs fim à União Ibérica, não revogou as Ordenações Filipinas — pelo contrário, a Lei de 29 de Janeiro de 1643 as confirmou e revalidou expressamente, e o texto permaneceu como Direito vigente em Portugal até ser substituído por codificações setoriais ao longo do século XIX.

No Brasil, sua trajetória foi ainda mais longa. A Lei de 20 de Outubro de 1823 determinou que as Ordenações, leis e decretos portugueses promulgados até 25 de abril de 1821 continuassem em vigor no Império recém-independente, "pelas quaes se governava o Brazil até aquella data", até a organização de novos códigos nacionais. Dessa forma, as Ordenações Filipinas seguiram regendo, parcial ou totalmente, diferentes áreas do Direito brasileiro: o Direito penal até o Código Criminal de 1830, o processo penal até o Código de Processo Criminal de 1832, o Direito comercial até o Código Comercial de 1850 e, de modo mais notável, o Direito civil — sobretudo a disciplina da família, dos contratos e das sucessões do Livro IV — até a entrada em vigor do primeiro Código Civil brasileiro, em 1917. Poucas normas de origem europeia tiveram vida tão longa em solo americano.`
    },
    {
      id: 'sobre-a-colecao',
      title: 'Sobre esta coleção',
      content: `Este repositório reúne o texto das Ordenações Filipinas dividido pelos cinco livros originais. A publicação é gradual: começamos pelo Livro Primeiro — o mais extenso em número de títulos e o que trata da organização da Justiça e da administração régia —, ao qual se seguirão os demais livros conforme forem preparados.`
    },
  ],
  childDocumentIds: ['ordenacoes-livro-1'],
};
