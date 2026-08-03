import { HistoricalDocument } from '../types';

export const declaracaoDireitosVirginia: HistoricalDocument = {
  id: 'declaracao-direitos-virginia',
  title: 'Declaração de Direitos de Virgínia',
  subtitle: 'Williamsburg, 12 de junho de 1776',
  date: '12 de junho de 1776',
  era: 'Idade Contemporânea',
  language: 'Inglês',
  description: 'O primeiro catálogo formal de direitos individuais da história moderna, redigido por George Mason e adotado pela Convenção de Virgínia em junho de 1776. Proclamou a igualdade natural dos homens, a soberania popular e as liberdades civis, influenciando diretamente a Declaração de Independência dos EUA e a Declaração dos Direitos do Homem e do Cidadão francesa de 1789.',
  sections: [
    {
      id: 'context',
      title: 'Introdução',
      type: 'text',
      content: `Em maio de 1776, enquanto as colônias americanas caminhavam para a ruptura definitiva com a Grã-Bretanha, a Convenção de Virgínia reuniu-se em Williamsburg com uma dupla missão: redigir uma constituição para o novo Estado e proclamar os direitos fundamentais de seu povo. George Mason, fazendeiro e pensador político autodidata da Virgínia, encarregou-se da redação do catálogo de direitos. O texto foi aprovado em 12 de junho de 1776, três semanas antes da Declaração de Independência dos Estados Unidos.

A Declaração de Direitos de Virgínia é frequentemente considerada o primeiro bill of rights formal da história moderna. Ela antecipou e influenciou diretamente Thomas Jefferson na redação da Declaração de Independência: a segunda frase desta ("todos os homens são criados iguais...") ecoa o Artigo 1º de Mason. Décadas depois, Lafayette levou o documento para a França, onde serviu de modelo para a Declaração dos Direitos do Homem e do Cidadão de 1789. O próprio James Madison a utilizou como base para redigir a Bill of Rights norte-americana (1791), os dez primeiros aditamentos à Constituição dos EUA.

O documento sintetizou as ideias do contratualismo lockeano (direitos naturais, governo por consentimento, direito de resistência) e as transformou em norma jurídica positiva pela primeira vez. Sua linguagem e estrutura tornaram-se o modelo canônico do constitucionalismo de direitos.

O Artigo 16º merece atenção especial: o rascunho original de Mason previa apenas tolerância religiosa, conceito que pressupõe que o Estado concede uma permissão revogável. Madison substituiu o termo por livre exercício da religião, antecipando o princípio da separação entre Igreja e Estado que seria consagrado na Primeira Emenda da Constituição americana.`
    },
    {
      id: 'preambulo',
      title: 'Preâmbulo',
      type: 'text',
      content: `Declaração dos direitos que nos devem pertencer a nós e à nossa posteridade e que devem ser considerados como o fundamento e a base do governo, feita pelos representantes do bom povo da Virgínia, reunidos em plena e livre convenção.`
    },
    {
      id: 'articles',
      title: 'Artigos',
      type: 'articles',
      articles: [
        {
          id: 'art-1',
          number: '1º',
          text: 'Todos os homens nascem igualmente livres e independentes e têm direitos certos, essenciais e naturais dos quais não podem, por nenhum contrato, privar nem despojar sua posteridade: tais são o direito de gozar a vida e a liberdade com os meios de adquirir e possuir propriedades, e de procurar obter a felicidade e a segurança.'
        },
        {
          id: 'art-2',
          number: '2º',
          text: 'Toda a autoridade pertence ao povo e por consequência dele emana; os magistrados são os seus mandatários, seus servidores, responsáveis perante ele em qualquer tempo.'
        },
        {
          id: 'art-3',
          number: '3º',
          text: 'O governo é ou deve ser instituído para o bem comum, para a proteção e segurança do povo, da nação ou da comunidade. Dos métodos ou formas, o melhor será aquele que possa garantir, no mais alto grau, a felicidade e a segurança, e o que mais realmente resguarde contra o perigo de má administração. Todas as vezes que um governo seja incapaz de preencher essa finalidade, ou lhe seja contrário, a maioria da comunidade tem o direito indubitável, inalienável e imprescritível de reformar, mudar ou abolir da maneira que julgar mais própria a proporcionar o benefício público.'
        },
        {
          id: 'art-4',
          number: '4º',
          text: 'Nenhum homem, e nenhum colégio ou associação de homens, pode ter outros títulos para obter vantagens ou prestígios particulares, exclusivos e distintos dos da comunidade, a não ser em consideração de serviços prestados ao público; e a este título não serão transmissíveis aos descendentes nem hereditários. A ideia de que um homem nasça magistrado, legislador ou juiz é absurda e contrária à natureza.'
        },
        {
          id: 'art-5',
          number: '5º',
          text: 'O poder legislativo e o poder executivo do Estado devem ser distintos e separados da autoridade judiciária. A fim de que todo o desejo de opressão dos membros dos dois primeiros poderes possa ser reprimido, e para que também eles possam suportar os encargos do povo e deles participar, devem estes, em tempo determinado, voltar à vida privada e reentrar no corpo da comunidade de onde foram originariamente tirados. Os lugares vagos deverão ser preenchidos por eleições frequentes, certas e regulares.'
        },
        {
          id: 'art-6',
          number: '6º',
          text: 'As eleições dos membros que devem representar o povo nas assembleias serão livres; e todo indivíduo que demonstre interesse permanente e o consequente zelo pelo bem geral da comunidade tem direito ao sufrágio.'
        },
        {
          id: 'art-7',
          number: '7º',
          text: 'Todo o poder de suspender as leis ou embaraçar a sua execução, exercido por qualquer autoridade sem o consentimento dos representantes do povo, é um atentado aos seus direitos e não tem cabimento.'
        },
        {
          id: 'art-8',
          number: '8º',
          text: 'Em todos os processos por crimes capitais ou outros, todo indivíduo tem o direito de indagar da causa e da natureza da acusação que lhe é intentada; tem de ser acareado com os seus acusadores e com as testemunhas; de apresentar ou requerer a apresentação de testemunhas e de tudo que for a seu favor; de exigir processo rápido por um júri imparcial e de sua circunvizinhança, sem o consentimento unânime do qual ele não poderá ser declarado culpado. Não pode ser forçado a produzir provas contra si próprio; e nenhum indivíduo pode ser privado de sua liberdade, a não ser por julgamento de seus pares, em virtude da lei do país.'
        },
        {
          id: 'art-9',
          number: '9º',
          text: 'Não devem ser exigidas cauções excessivas, nem impostas multas demasiadamente fortes, nem aplicadas penas cruéis e incomuns.'
        },
        {
          id: 'art-10',
          number: '10º',
          text: 'Todas as ordens de prisão são vexatórias e opressivas se forem expedidas sem provas suficientes; e se a ordem ou requisição transmitida a um oficial ou mensageiro do Estado, para efetuar buscas em lugares suspeitos, deter uma ou várias pessoas, ou tomar seus bens, não contiver uma indicação e uma descrição especiais dos lugares, das pessoas ou das coisas que dela forem objeto. Semelhantes ordens jamais devem ser concedidas.'
        },
        {
          id: 'art-11',
          number: '11º',
          text: 'Nas causas que interessem à propriedade ou a negócios pessoais, a antiga forma de processo por jurados é preferível a qualquer outra e deve ser considerada como sagrada.'
        },
        {
          id: 'art-12',
          number: '12º',
          text: 'A liberdade de imprensa é um dos mais fortes baluartes da liberdade do Estado e só pode ser restringida pelos governos despóticos.'
        },
        {
          id: 'art-13',
          number: '13º',
          text: 'Uma milícia disciplinada, tirada da massa do povo e habituada à guerra, é a defesa própria, natural e segura de um Estado livre. Os exércitos permanentes em tempo de paz devem ser evitados como perigosos para a liberdade; em todo o caso, o poder militar deve ser mantido em rigorosa subordinação à autoridade civil e sempre governado por ela.'
        },
        {
          id: 'art-14',
          number: '14º',
          text: 'O povo tem direito a um governo uniforme; deste modo, não deve legitimamente ser instituído nem organizado nenhum governo separado ou independente do da Virgínia, nos limites do Estado.'
        },
        {
          id: 'art-15',
          number: '15º',
          text: 'Um povo não pode conservar um governo livre e a felicidade da liberdade a não ser pela adesão firme e constante às regras da justiça, da moderação, da temperança, da economia e da virtude, e pelo apelo frequente aos seus princípios fundamentais.'
        },
        {
          id: 'art-16',
          number: '16º',
          text: 'A religião, ou o culto devido ao Criador, e a maneira de se desobrigar dele, devem ser dirigidos unicamente pela razão e pela convicção, e jamais pela força e pela violência. Donde se segue que todo homem deve gozar de inteira liberdade no exercício do culto ditado por sua consciência, e não deve ser embaraçado nem punido pelo magistrado, a menos que, sob pretexto de religião, ele perturbe a paz ou a segurança da sociedade. É dever recíproco de todos os cidadãos praticar a tolerância, o amor e a caridade uns com os outros.'
        }
      ]
    },
    {
      id: 'fontes',
      title: 'Fontes e referências',
      type: 'text',
      content: `O texto-base desta tradução é a versão inglesa disponibilizada pelo Avalon Project, da Lillian Goldman Law Library da Yale Law School.

YALE LAW SCHOOL. Lillian Goldman Law Library. The Avalon Project: Virginia Declaration of Rights, June 12, 1776. New Haven: Yale Law School, [200-?]. Disponível em: https://avalon.law.yale.edu/18th_century/virginia.asp. Acesso em: 2 ago. 2026.

Língua do original: inglês.

Tradução para o português: própria, elaborada a partir da versão inglesa do Avalon Project indicada acima.`
    }
  ]
};
