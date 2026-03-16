import { HistoricalDocument } from '../../types';

export const urNammu: HistoricalDocument = {
  id: 'ur-nammu',
  title: 'Código de Ur-Nammu',
  subtitle: 'O Primeiro Código',
  date: 'c. 2100 a.C.',
  era: 'Mesopotâmia',
  language: 'Sumério',
  description: 'O mais antigo código de leis conhecido que sobreviveu até os dias atuais. Escrito em sumério, enfatiza a compensação monetária em vez da lei de talião ("olho por olho").',
  sections: [
    {
      id: 'context',
      title: 'Contexto Histórico',
      type: 'text',
      content: `O Código de Ur-Nammu está associado ao reinado de Ur-Nammu, fundador da Terceira Dinastia de Ur, por volta de 2100 a.C., no sul da Mesopotâmia. Esse período corresponde a um momento de reorganização política após a expulsão dos gutianos e à consolidação de um poder central que buscava controlar território, economia e vida social por meio de normas escritas.

A produção normativa estava profundamente ligada à religião e à administração. O rei aparece como figura legitimada pelos deuses para instaurar justiça na terra, regular pesos e medidas, organizar tributos e conter conflitos sociais. A escrita jurídica, nesse contexto, não tem caráter abstrato, mas responde a problemas concretos da vida urbana, como propriedade, família, trabalho, escravidão e violência.

Em comparação com códigos posteriores, o de Ur-Nammu chama atenção pelo uso recorrente de compensações em prata como forma de sanção, em vez de punições corporais. Isso não significa um sistema mais brando, mas revela uma lógica jurídica que combina repressão, reparação econômica e hierarquia social bem definida entre homens livres e escravizados.`
    },
    {
      id: 'about',
      title: 'Sobre o texto',
      type: 'text',
      content: `O texto do Código de Ur-Nammu não chegou até nós de forma integral. O original, redigido em língua suméria, perdeu-se, e o que conhecemos hoje resulta da reunião de fragmentos preservados em tábuas de argila e de cópias produzidas séculos depois, no período paleo-babilônico. A partir desse material, pesquisadores conseguiram reconstruir parte do conteúdo normativo, estimado em cerca de cinquenta dispositivos, dos quais pouco mais da metade é conhecida.

As traduções modernas baseiam-se nessas reconstruções e apresentam lacunas reais do texto antigo, perceptíveis na numeração descontínua das leis e na ausência de alguns trechos. O prólogo, relativamente bem preservado, é especialmente relevante, pois expõe a justificativa política e religiosa do poder do rei e a finalidade declarada da legislação, vinculada à justiça, à ordem e à proteção de grupos vulneráveis.

O texto apresentado nesta página segue traduções acadêmicas consolidadas em língua inglesa, com adaptações para o português, e deve ser lido como um documento histórico fragmentário. Ele não representa um sistema jurídico completo no sentido moderno, mas um conjunto normativo essencial para compreender as origens da escrita jurídica e da autoridade legal no mundo antigo.`
    },
    {
      id: 'prologue',
      title: 'Prólogo',
      type: 'text',
      content: `Depois que An e Enlil entregaram a realeza da cidade de Ur ao deus Nanna, naquele tempo Ur-Nammu, filho de Ninsun, a quem sua amada mãe deu à luz, agindo de acordo com os princípios da equidade e da verdade, fez valer a justiça na terra.

Ur-Nammu, o poderoso guerreiro, rei de Ur, rei de Suméria e Acádia, pela força de Nanna, senhor da cidade, e segundo a palavra verdadeira de Utu, estabeleceu a justiça no país. Ele baniu a maldição, a violência e a discórdia, fixou as despesas mensais do templo em noventa gur de cevada, trinta ovelhas e trinta sila de manteiga.

Ele instituiu a medida de sila em bronze, padronizou o peso de uma mina e estabeleceu o peso em pedra de um siclo de prata em relação à mina. O órfão não foi entregue ao homem rico, a viúva não foi entregue ao homem poderoso, e o homem de um siclo não foi entregue ao homem de uma mina.`
    },
    {
      id: 'laws',
      title: 'Leis',
      type: 'articles',
      articles: [
        { id: 'un-1', number: '§ 1', text: 'Se um homem cometer homicídio, esse homem deverá ser morto.' },
        { id: 'un-2', number: '§ 2', text: 'Se um homem cometer roubo, ele deverá ser morto.' },
        { id: 'un-3', number: '§ 3', text: 'Se um homem cometer sequestro, ele deverá ser preso e deverá pagar quinze siclos de prata.' },
        { id: 'un-4', number: '§ 4', text: 'Se um escravizado se casar com um escravizado e esse escravizado for libertado, ele não deixará a casa do seu senhor.' },
        { id: 'un-5', number: '§ 5', text: 'Se um escravizado se casar com uma pessoa livre, o primeiro filho deverá ser entregue ao senhor do escravizado.' },
        { id: 'un-6', number: '§ 6', text: 'Se um homem violar o direito de outro homem e deflorar a esposa virgem de um jovem, esse homem deverá ser morto.' },
        { id: 'un-7', number: '§ 7', text: 'Se a esposa de um homem seguir outro homem e ele se deitar com ela, essa mulher deverá ser morta, mas o homem será libertado.' },
        { id: 'un-8', number: '§ 8', text: 'Se um homem, usando força, deflorar a escravizada virgem de outro homem, deverá pagar cinco siclos de prata.' },
        { id: 'un-9', number: '§ 9', text: 'Se um homem se divorciar de sua esposa com quem se casou pela primeira vez, deverá pagar a ela uma mina de prata.' },
        { id: 'un-10', number: '§ 10', text: 'Se for uma viúva a quem ele se divorcia, deverá pagar meia mina de prata.' },
        { id: 'un-11', number: '§ 11', text: 'Se um homem tiver relações com uma viúva sem que exista contrato de casamento, ele não deverá pagar prata.' },
        { id: 'un-13', number: '§ 13', text: 'Se um homem for acusado de feitiçaria, deverá submeter-se à prova do rio. Se for considerado inocente, o acusador deverá pagar três siclos de prata.' },
        { id: 'un-14', number: '§ 14', text: 'Se um homem acusar a esposa de outro homem de adultério e a prova do rio provar sua inocência, o acusador deverá pagar um terço de mina de prata.' },
        { id: 'un-15', number: '§ 15', text: 'Se um futuro genro entrar na casa de seu futuro sogro, mas o sogro depois entregar sua filha a outro homem, o sogro deverá devolver ao genro rejeitado o dobro dos presentes nupciais recebidos.' },
        { id: 'un-17', number: '§ 17', text: 'Se um escravizado fugir dos limites da cidade e alguém o devolver, o senhor deverá pagar dois siclos de prata àquele que o devolveu.' },
        { id: 'un-18', number: '§ 18', text: 'Se um homem arrancar o olho de outro homem, deverá pagar meia mina de prata.' },
        { id: 'un-19', number: '§ 19', text: 'Se um homem amputar o pé de outro homem, deverá pagar dez siclos de prata.' },
        { id: 'un-20', number: '§ 20', text: 'Se um homem, durante uma briga, quebrar o membro de outro homem com um bastão, deverá pagar uma mina de prata.' },
        { id: 'un-21', number: '§ 21', text: 'Se alguém cortar o nariz de outro homem com uma faca de cobre, deverá pagar dois terços de uma mina de prata.' },
        { id: 'un-22', number: '§ 22', text: 'Se um homem arrancar o dente de outro homem, deverá pagar dois siclos de prata.' },
        { id: 'un-24', number: '§ 24', text: '[...]' },
        { id: 'un-25', number: '§ 25', text: 'Se a escravizada de um homem, comparando-se à sua senhora, falar de forma insolente com ela, sua boca deverá ser esfregada com um quartilho de sal.' },
        { id: 'un-28', number: '§ 28', text: 'Se um homem comparecer como testemunha e for demonstrado que mentiu, deverá pagar quinze siclos de prata.' },
        { id: 'un-29', number: '§ 29', text: 'Se um homem comparecer como testemunha e depois retirar seu juramento, deverá pagar de acordo com o valor do litígio.' },
        { id: 'un-30', number: '§ 30', text: 'Se um homem cultivar de forma clandestina o campo de outro homem e este apresentar queixa, a reclamação será rejeitada e o cultivador perderá seus gastos.' },
        { id: 'un-31', number: '§ 31', text: 'Se um homem inundar o campo de outro homem com água, deverá pagar três kur de cevada por iku de campo.' },
        { id: 'un-32', number: '§ 32', text: 'Se um homem entregar um campo arável a outro para cultivo e este não o cultivar, transformando-o em terra improdutiva, deverá pagar três kur de cevada por iku de campo.' }
      ]
    },
    {
      id: 'glossary',
      title: 'Glossário',
      type: 'glossary',
      glossaryEntries: [
        { term: 'Escravizado', definition: 'Pessoa submetida à condição de escravidão. O uso do termo destaca a condição social imposta, e não uma característica essencial do indivíduo. O código estabelece tratamento jurídico diferenciado para pessoas escravizadas, sobretudo em matérias de família e propriedade.' },
        { term: 'Homem livre', definition: 'Indivíduo que não se encontrava em condição de escravidão. No Código de Ur-Nammu, o status de homem livre implica proteção jurídica distinta e, em geral, indenizações mais elevadas quando há lesão.' },
        { term: 'Iku', definition: 'Unidade de medida de área agrícola. Um iku correspondia aproximadamente à extensão de terra que poderia ser irrigada de forma eficiente. As leis que utilizam essa medida tratam de danos causados a campos cultiváveis.' },
        { term: 'Kur', definition: 'Medida de volume utilizada sobretudo para cereais, como a cevada. No código, o kur aparece como forma de compensação em conflitos agrários, indicando a ligação direta entre Direito e produção agrícola.' },
        { term: 'Mina', definition: 'Unidade de peso maior que o siclo. No sistema mesopotâmico, uma mina equivalia a sessenta siclos. No texto legal, a mina é usada para indicar compensações de maior valor, especialmente em casos de lesão grave ou divórcio.' },
        { term: 'Ordálio do rio', definition: 'Procedimento jurídico-religioso no qual a pessoa acusada era submetida a uma prova física no rio para que os deuses revelassem sua culpa ou inocência. A sobrevivência ou o resultado da prova determinava o desfecho do caso.' },
        { term: 'Prata', definition: 'Principal meio de valor econômico no período, utilizada como referência para multas, compensações e pagamentos. A prata funciona como base do sistema de reparação jurídica presente no código.' },
        { term: 'Siclo (shekel)', definition: 'Unidade de peso e de valor utilizada na Mesopotâmia antiga. No contexto do Código de Ur-Nammu, o siclo aparece principalmente como medida de prata empregada para indenizações e multas. Um siclo correspondia a uma fração da mina.' },
        { term: 'Sila', definition: 'Medida de volume menor, usada para líquidos e alguns alimentos. O prólogo menciona a padronização do sila como parte das atribuições administrativas do rei.' },
      ]
    }
  ]
};
