import { DocumentCollection } from '../../types';

export const ordenacoesLivro1: DocumentCollection = {
  id: 'ordenacoes-livro-1',
  title: 'Livro Primeiro',
  subtitle: 'Dos Officios e Administração da Justiça',
  date: '1603',
  era: 'Idade Moderna',
  language: 'Português',
  description: 'Cem títulos que organizam a estrutura judiciária e administrativa do reino: da Casa da Suplicação ao mais humilde juiz de aldeia, passando pelo Desembargo do Paço, pelos corregedores, tabeliães, escrivães e órgãos fiscais. Acompanhado dos Additamentos, a legislação portuguesa e brasileira posterior que emendou, revogou ou atualizou o texto até meados do século XIX.',
  parentCollectionId: 'ordenacoes-filipinas',
  sections: [
    {
      id: 'introducao',
      title: 'Introdução',
      content: `O Livro Primeiro das Ordenações Filipinas é o mais extenso dos cinco em número de títulos: cem ao todo. Nele se organiza toda a hierarquia da Justiça e da administração régia em Portugal e em seus domínios, desde a Casa da Suplicação — o mais alto tribunal do reino, cujo regimento abre o livro — até os juízes de aldeia, os menores oficiais de justiça no interior do território.

O livro percorre, título a título, os cargos e tribunais do Antigo Regime português: o Regedor e os desembargadores da Casa da Suplicação, o Desembargo do Paço, o Chanceler-mor, os corregedores e ouvidores das comarcas, os juízes de fora, os tabeliães e escrivães, os provedores de resíduos e capelas, os contadores de custas, os juízes dos órfãos, entre dezenas de outros. Cada título define as atribuições, os deveres, os salários e as responsabilidades do respectivo ofício. É, em essência, um tratado de Direito administrativo e organização judiciária avant la lettre — a estrutura burocrática que sustentou o governo português na Europa e no Ultramar por mais de três séculos.

Este Livro Primeiro é ele próprio uma fonte privilegiada para a história das instituições coloniais brasileiras: foi com base nele que se organizaram os primeiros tribunais e ofícios de justiça na América portuguesa, e é dele que derivam, direta ou indiretamente, muitas das estruturas administrativas e judiciárias que o Brasil independente herdou e adaptou ao longo do século XIX.`
    },
    {
      id: 'sobre-esta-edicao',
      title: 'Sobre esta edição',
      content: `O texto aqui publicado foi digitalizado por reconhecimento óptico de caracteres (OCR) a partir de uma edição anotada das Ordenações Filipinas — a compilação preparada por Cândido Mendes de Almeida no século XIX, com notas de concordância e comentários próprios do editor, reproduzida em fac-símile pela Fundação Calouste Gulbenkian em 1985. Até onde temos conhecimento, esta é a primeira disponibilização online do texto completo do Livro Primeiro das Ordenações Filipinas em português — não localizamos, no momento da publicação, outro repositório digital que reúna a integralidade do livro de forma aberta e consultável.

Nesta primeira etapa de digitalização, optamos por publicar o texto normativo das Ordenações e dos Additamentos — a legislação complementar reunida ao final do livro — sem o extenso aparato de notas de rodapé de Cândido Mendes, que remetem sobretudo a legislação brasileira do século XIX cruzando cada dispositivo com sua história posterior. Trata-se de um material valioso, mas de natureza distinta do texto normativo em si; sua incorporação fica como possível trabalho futuro.

O processo de OCR e limpeza do texto não é isento de imperfeições, sobretudo porque a diagramação do fac-símile intercala notas de rodapé no meio de frases interrompidas por quebras de página. Sempre que uma nota de rodapé cortava uma frase ao meio, reconectamos as duas metades do texto normativo removendo a nota interposta — nunca o inverso. Em um único ponto do texto, logo após o título "ADDITAMENTOS", não foi possível recuperar a passagem perdida entre uma etapa de processamento e outra; o trecho está sinalizado no texto com a marca "[LACUNA]".

Nos Additamentos em particular, várias notas de rodapé extensas continham suas próprias listas numeradas ilustrativas — muitas vezes citando trechos de outras leis ou convenções — que inicialmente foram confundidas pelo processo automatizado com artigos do próprio diploma. Identificamos e removemos essa contaminação: mais de cem entradas espúrias foram descartadas de nove diplomas dos Additamentos após verificação cruzada com o texto original. Ainda assim, dada a extensão do conjunto — cem títulos e cerca de quarenta diplomas complementares, somando quase 2.700 dispositivos —, a verificação foi feita por amostragem sistemática e por varreduras dirigidas (anacronismos, finais de frase suspeitos, numeração duplicada), não dispositivo por dispositivo. É possível que restem pequenas imperfeições pontuais, sobretudo nos Additamentos, cujo aparato de notas é mais denso que o do texto de 1603. Agradecemos o alerta de quem encontrar alguma.`
    },
  ],
  childDocumentIds: [
    'ordenacoes-livro-1-titulos-i-a-x',
    'ordenacoes-livro-1-titulos-xi-a-xx',
    'ordenacoes-livro-1-titulos-xxi-a-xxx',
    'ordenacoes-livro-1-titulos-xxxi-a-xl',
    'ordenacoes-livro-1-titulos-xli-a-l',
    'ordenacoes-livro-1-titulos-li-a-lx',
    'ordenacoes-livro-1-titulos-lxi-a-lxx',
    'ordenacoes-livro-1-titulos-lxxi-a-lxxx',
    'ordenacoes-livro-1-titulos-lxxxi-a-xc',
    'ordenacoes-livro-1-titulos-xci-a-c',
    'ordenacoes-livro-1-additamentos-1',
    'ordenacoes-livro-1-additamentos-2',
    'ordenacoes-livro-1-additamentos-3',
    'ordenacoes-livro-1-additamentos-4',
    'ordenacoes-livro-1-additamentos-5',
    'ordenacoes-livro-1-additamentos-6',
    'ordenacoes-livro-1-additamentos-7',
    'ordenacoes-livro-1-additamentos-8',
    'ordenacoes-livro-1-additamentos-9',
    'ordenacoes-livro-1-additamentos-10',
    'ordenacoes-livro-1-additamentos-11',
    'ordenacoes-livro-1-additamentos-12',
    'ordenacoes-livro-1-additamentos-13',
    'ordenacoes-livro-1-additamentos-14',
    'ordenacoes-livro-1-additamentos-15',
  ],
};
