import { HistoricalDocument } from '../types';

export const declaracao1789: HistoricalDocument = {
  id: 'declaracao-1789',
  title: 'Declaração dos Direitos do Homem e do Cidadão',
  subtitle: 'Revolução Francesa, 1789',
  date: '26 de agosto de 1789',
  era: 'Idade Contemporânea',
  language: 'Francês',
  description: 'Documento fundador da modernidade política, aprovado pela Assembleia Nacional francesa em 1789. Proclamou os direitos naturais, inalienáveis e sagrados do homem: liberdade, igualdade, soberania popular e separação dos poderes, influenciando constituições em todo o mundo.',
  sections: [
    {
      id: 'context',
      title: 'Introdução',
      type: 'text',
      content: `Em agosto de 1789, a França atravessava a crise mais profunda de sua história. A bancarrota do Estado, a fome generalizada e a convocação dos Estados Gerais haviam desencadeado um processo revolucionário irreversível. Em julho, o povo de Paris havia tomado a Bastilha. Em agosto, a nobreza renunciou a seus privilégios feudais numa sessão noturna memorável. Era preciso, agora, fundar algo novo.

A Assembleia Nacional Constituinte, formada pelos representantes do Terceiro Estado que se haviam autoproclamado soberanos em junho, encarregou-se de redigir uma declaração de direitos antes de elaborar a nova constituição. O modelo norte-americano era presente: a Declaração de Independência de 1776 e as declarações de direitos dos estados americanos, especialmente a da Virgínia (1776), redigida por George Mason, forneceram o vocabulário político. Mas a versão francesa universalizou a linguagem: enquanto as americanas falavam em direitos "dos habitantes deste Estado", a Declaração de 1789 proclamou os direitos do *Homem*, sem fronteiras.

O texto aprovado em 26 de agosto de 1789 sintetizou décadas de filosofia iluminista (Locke, Montesquieu, Rousseau) numa linguagem lapidar de 17 artigos. Tornou-se o documento fundador do constitucionalismo moderno e da tradição dos direitos humanos, sendo incorporado ao preâmbulo da Constituição francesa de 1958, ainda em vigor.

Seu impacto foi imediato e duradouro: influenciou a Constituição francesa de 1791, inspirou movimentos de independência na América Latina, incluindo o Brasil, antecipou a Declaração Universal dos Direitos Humanos da ONU de 1948 e permanece como referência fundamental do direito constitucional e da filosofia política ocidental.`
    },
    {
      id: 'preambulo',
      title: 'Preâmbulo',
      type: 'text',
      content: `Os representantes do povo francês, constituídos em Assembleia Nacional, considerando que a ignorância, o esquecimento ou o desprezo dos direitos do homem são as únicas causas das desgraças públicas e da corrupção dos Governos, resolveram expor em declaração solene os Direitos naturais, inalienáveis e sagrados do Homem, a fim de que esta declaração, constantemente presente em todos os membros do corpo social, lhes lembre sem cessar os seus direitos e os seus deveres; a fim de que os atos do Poder legislativo e do Poder executivo, a instituição política, sejam por isso mais respeitados; a fim de que as reclamações dos cidadãos, doravante fundadas em princípios simples e incontestáveis, se dirijam sempre à conservação da Constituição e à felicidade geral.

Por consequência, a Assembleia Nacional reconhece e declara, na presença e sob os auspícios do Ser Supremo, os seguintes direitos do Homem e do Cidadão:`
    },
    {
      id: 'articles',
      title: 'Artigos I a XVII',
      type: 'articles',
      articles: [
        {
          id: 'art-1',
          number: '1º',
          text: 'Os homens nascem e são livres e iguais em direitos. As distinções sociais só podem fundar-se na utilidade comum.'
        },
        {
          id: 'art-2',
          number: '2º',
          text: 'O fim de toda a associação política é a conservação dos direitos naturais e imprescritíveis do homem. Esses Direitos são a liberdade, a propriedade, a segurança e a resistência à opressão.'
        },
        {
          id: 'art-3',
          number: '3º',
          text: 'O princípio de toda a soberania reside essencialmente na Nação. Nenhuma corporação, nenhum indivíduo pode exercer autoridade que aquela não emane expressamente.'
        },
        {
          id: 'art-4',
          number: '4º',
          text: 'A liberdade consiste em poder fazer tudo aquilo que não prejudique outrem: assim, o exercício dos direitos naturais de cada homem não tem por limites senão os que asseguram aos outros membros da sociedade o gozo dos mesmos direitos. Estes limites apenas podem ser determinados pela Lei.'
        },
        {
          id: 'art-5',
          number: '5º',
          text: 'A Lei não proíbe senão as ações prejudiciais à sociedade. Tudo aquilo que não pode ser impedido pela Lei não pode ser proibido, e ninguém pode ser constrangido a fazer o que ela não ordene.'
        },
        {
          id: 'art-6',
          number: '6º',
          text: 'A Lei é a expressão da vontade geral. Todos os cidadãos têm o direito de concorrer, pessoalmente ou através dos seus representantes, para a sua formação. Ela deve ser a mesma para todos, quer se destine a proteger quer a punir. Todos os cidadãos são iguais a seus olhos, são igualmente admissíveis a todas as dignidades, lugares e empregos públicos, segundo a sua capacidade, e sem outra distinção que não seja a das suas virtudes e dos seus talentos.'
        },
        {
          id: 'art-7',
          number: '7º',
          text: 'Ninguém pode ser acusado, preso ou detido senão nos casos determinados pela Lei e de acordo com as formas por esta prescritas. Os que solicitam, expedem, executam ou mandam executar ordens arbitrárias devem ser castigados; mas qualquer cidadão convocado ou detido em virtude da Lei deve obedecer imediatamente, senão torna-se culpado de resistência.'
        },
        {
          id: 'art-8',
          number: '8º',
          text: 'A Lei apenas deve estabelecer penas estrita e evidentemente necessárias, e ninguém pode ser punido senão em virtude de uma lei estabelecida e promulgada antes do delito e legalmente aplicada.'
        },
        {
          id: 'art-9',
          number: '9º',
          text: 'Todo o acusado se presume inocente até ser declarado culpado e, se se julgar indispensável prendê-lo, todo o rigor não necessário à guarda da sua pessoa deverá ser severamente reprimido pela Lei.'
        },
        {
          id: 'art-10',
          number: '10º',
          text: 'Ninguém pode ser inquietado pelas suas opiniões, incluindo opiniões religiosas, contanto que a manifestação delas não perturbe a ordem pública estabelecida pela Lei.'
        },
        {
          id: 'art-11',
          number: '11º',
          text: 'A livre comunicação dos pensamentos e das opiniões é um dos mais preciosos direitos do Homem; todo o cidadão pode, portanto, falar, escrever, imprimir livremente, respondendo, todavia, pelos abusos desta liberdade nos termos previstos na Lei.'
        },
        {
          id: 'art-12',
          number: '12º',
          text: 'A garantia dos direitos do Homem e do Cidadão carece de uma força pública; esta força é, pois, instituída para vantagem de todos, e não para utilidade particular daqueles a quem é confiada.'
        },
        {
          id: 'art-13',
          number: '13º',
          text: 'Para a manutenção da força pública e para as despesas de administração é indispensável uma contribuição comum, que deve ser repartida entre os cidadãos de acordo com as suas possibilidades.'
        },
        {
          id: 'art-14',
          number: '14º',
          text: 'Todos os cidadãos têm o direito de verificar, por si ou pelos seus representantes, a necessidade da contribuição pública, de consenti-la livremente, de observar o seu emprego e de lhe fixar a repartição, a coleta, a cobrança e a duração.'
        },
        {
          id: 'art-15',
          number: '15º',
          text: 'A sociedade tem o direito de pedir contas a todo o agente público pela sua administração.'
        },
        {
          id: 'art-16',
          number: '16º',
          text: 'Qualquer sociedade em que não esteja assegurada a garantia dos direitos, nem estabelecida a separação dos poderes não tem Constituição.'
        },
        {
          id: 'art-17',
          number: '17º',
          text: 'Como a propriedade é um direito inviolável e sagrado, ninguém dela pode ser privado, a não ser quando a necessidade pública legalmente comprovada o exigir evidentemente e sob condição de justa e prévia indenização.'
        }
      ]
    },
    {
      id: 'fontes',
      title: 'Fontes e referências',
      type: 'text',
      content: `O texto-base desta tradução é a versão francesa disponibilizada pela Digithèque MJP (Matériaux pour l'histoire politique de la France), da Université de Perpignan.

UNIVERSITÉ DE PERPIGNAN. Digithèque MJP. Déclaration des droits de l'homme et du citoyen de 1789. Perpignan: Université de Perpignan, [200-?]. Disponível em: https://mjp.univ-perp.fr/france/ddh1789.htm. Acesso em: 2 ago. 2026.

Língua do original: francês.

Tradução para o português: própria, elaborada a partir da versão francesa da Digithèque MJP indicada acima.`
    }
  ]
};
