import { HistoricalDocument } from '../../types';

export const eshnunna: HistoricalDocument = {
  id: 'eshnunna',
  title: 'Leis de Eshnunna',
  subtitle: 'Economia e Preços',
  date: 'c. 1800 a.C.',
  era: 'Mesopotâmia',
  language: 'Acadiano',
  description: 'Um conjunto de leis da cidade-estado de Eshnunna. Notável por sua tabela de preços detalhada, fornecendo uma visão única da economia antiga antes de listar leis civis.',
  sections: [
    {
      id: 'context',
      title: 'Contexto Histórico',
      type: 'text',
      content: `Eshnunna foi uma importante cidade-Estado da Mesopotâmia, localizada no vale do rio Diyala, região estratégica entre a Suméria e o norte mesopotâmico. O chamado Código de Eshnunna é geralmente datado do início do século XVIII a.C., em um período anterior ou contemporâneo às primeiras formulações do Código de Hamurabi.

Diferentemente dos códigos associados diretamente a um grande rei legislador, como Ur-Nammu ou Lipit-Ishtar, as Leis de Eshnunna parecem refletir um direito urbano e administrativo fortemente voltado à regulação da vida econômica cotidiana. O texto revela preocupações com preços, salários, alugueles, contratos, danos, escravidão, família e sucessões, indicando uma sociedade complexa, marcada por intensa circulação de bens, pessoas e trabalho.

O código também evidencia a consolidação de uma lógica jurídica cada vez mais casuística, com normas formuladas em hipóteses concretas e sanções proporcionais, sobretudo de natureza indenizatória. Esse conjunto normativo ajuda a compreender o ambiente jurídico no qual, algumas décadas depois, surgiria o Código de Hamurabi.`
    },
    {
      id: 'about',
      title: 'Sobre o texto',
      type: 'text',
      content: `As Leis de Eshnunna não sobreviveram em uma versão única e contínua. O texto foi reconstruído a partir de diversas tábuas de argila encontradas em diferentes contextos arqueológicos, sobretudo no início do século XX. A composição que conhecemos hoje resulta do trabalho comparativo de assiriólogos, que reuniram fragmentos dispersos em uma sequência normativa relativamente coerente.

A tradução utilizada neste projeto baseia-se em edições acadêmicas consolidadas e em traduções amplamente difundidas em língua portuguesa, que apresentam o corpo das leis de forma organizada e numerada. Embora existam lacunas e incertezas pontuais, o conjunto preservado permite acompanhar com clareza os principais eixos do direito de Eshnunna.

O texto deve ser lido como um documento histórico fragmentário, representativo de práticas jurídicas urbanas da Mesopotâmia antiga, e não como um código sistemático no sentido moderno. Ainda assim, seu valor é central para a história do Direito, especialmente por antecipar soluções normativas que seriam desenvolvidas de modo mais amplo em legislações posteriores.`
    },
    {
      id: 'structure',
      title: 'Estrutura do código',
      type: 'text',
      content: `O Código de Eshnunna é composto majoritariamente por dispositivos casuísticos, formulados no esquema "se... então...". As leis podem ser agrupadas, de forma aproximada, nos seguintes blocos temáticos:

* Regulação de preços, salários e alugueles
* Contratos de trabalho e prestação de serviços
* Danos a pessoas, animais e propriedades
* Escravidão e status jurídico
* Direito de família e sucessões
* Responsabilidade por omissão e negligência`
    },
    {
      id: 'editorial',
      title: 'Observação editorial',
      type: 'text',
      content: `Para fins de clareza e acessibilidade, o corpo das leis será apresentado neste site em sequência numerada contínua, conforme a tradição das traduções modernas. Eventuais lacunas do texto original serão indicadas expressamente como [lacuna no texto].

A opção editorial privilegia a leitura direta das normas, sem comentários intercalados, reservando explicações terminológicas e contextuais a um glossário próprio.`
    },
    {
      id: 'price-table',
      title: 'Tabela Oficial de Preços (Leis 1-12)',
      type: 'table',
      tableData: [
        { item: '300 ka (c. 300 l) de grão', price: '1 shekel de prata' },
        { item: '3 ka (c. 3 l) de óleo de ungir', price: '1 shekel de prata' },
        { item: '12 ka (c. 12 l) de óleo de sésamo', price: '1 shekel de prata' },
        { item: '4 sat (c. 40 l) de óleo de betume', price: '1 shekel de prata' },
        { item: '6 minas (c. 3 kg) de lã', price: '1 shekel de prata' },
        { item: '2 gur (c. 600 l) de sal', price: '1 shekel de prata' },
        { item: '1 gur (c. 300 l) de potassa', price: '1 shekel de prata' },
        { item: '3 minas (c. 1.500 g) de cobre', price: '1 shekel de prata' },
        { item: '2 minas (c. 1.000 g) de cobre trabalhado', price: '1 shekel de prata' },
        { item: '1 qa de óleo de sésamo "ša nishatim"', price: '3 sat de cevada' },
        { item: '1 qa de gordura de porco "ša nishatim"', price: '1 sat e 5 qa de cevada' },
        { item: '1 qa de "óleo do rio" "ša nishatim"', price: '8 qa de cevada' },
      ]
    },
    {
      id: 'laws',
      title: 'Leis (13-68)',
      type: 'articles',
      articles: [
        { id: 'es-13', number: '§ 13', text: 'O aluguel de um carro com seus bois e seu condutor é de 1 pan e 4 sat (c. 100 l) de cevada. Se o pagamento for em prata, o aluguel é de um terço de shekel. O condutor deverá trabalhar o dia inteiro.' },
        { id: 'es-14', number: '§ 14', text: 'O aluguel de um barco é de 2 qa por 1 gur, além do salário do barqueiro. Ele deverá conduzi-lo o dia inteiro.' },
        { id: 'es-15', number: '§ 15', text: 'Se um barqueiro for negligente e afundar o barco, deverá restituir tudo o que tiver afundado.' },
        { id: 'es-16', number: '§ 16', text: 'Se um awilum tomar de forma fraudulenta um barco que não lhe pertence, deverá pagar 10 shekels de prata.' },
        { id: 'es-17', number: '§ 17', text: '2 sat (c. 20 l) de cevada constituem o salário de um ceifador. Se o pagamento for em prata, o salário é de 12 še.' },
        { id: 'es-18', number: '§ 18', text: '1 sut (c. 10 l) de cevada constitui o salário de um joeireiro.' },
        { id: 'es-19', number: '§ 19', text: 'Se um awilum der a um mercenário um shekel de prata para trabalhar na colheita e este não se apresentar nem trabalhar durante toda a colheita, deverá pagar 10 shekels de prata.' },
        { id: 'es-20', number: '§ 20', text: '1 sut e 5 qa correspondem ao aluguel de uma foice; a corda deverá ser devolvida ao seu dono.' },
        { id: 'es-21', number: '§ 21', text: '1 sut de cevada constitui o aluguel de um jumento, e 1 sut de cevada constitui o salário de seu condutor. Ele deverá conduzi-lo o dia inteiro.' },
        { id: 'es-22', number: '§ 22', text: 'O salário de um mercenário é de um shekel de prata, além de 1 pan (c. 60 l) de cevada para sua alimentação. Ele deverá trabalhar por um mês.' },
        { id: 'es-23', number: '§ 23', text: 'O awilum que for apanhado no campo de um muškênum, ao meio-dia, junto aos feixes de grão, deverá pagar 10 shekels de prata.' },
        { id: 'es-24', number: '§ 24', text: 'Aquele que for apanhado de noite junto aos feixes de grão será morto; ele não viverá.' },
        { id: 'es-25', number: '§ 25', text: 'O awilum que for apanhado na casa de um muškênum, ao meio-dia, com um pedaço de pau, deverá pagar 10 shekels de prata.' },
        { id: 'es-26', number: '§ 26', text: 'Aquele que for apanhado de noite com um pedaço de pau será morto; ele não viverá.' },
        { id: 'es-27', number: '§ 27', text: 'O salário de um alfaiate é de um shekel de prata se a roupa custar cinco shekels; se custar dez shekels, o salário será de dois shekels.' },
        { id: 'es-28', number: '§ 28', text: 'De um escravo ou de uma escrava, o comerciante ou a taberneira não deverá receber prata, cevada, lã ou óleo de sésamo, nem mesmo em pequena quantidade.' },
        { id: 'es-29', number: '§ 29', text: 'Ao filho de um awilum não separado ou a um escravo não deverá ser concedido empréstimo.' },
        { id: 'es-30', number: '§ 30', text: 'O filho de um awilum que levou a terkatum para a casa de seu sogro: se um dos dois morrer, a prata deverá retornar ao seu proprietário.' },
        { id: 'es-31', number: '§ 31', text: 'Se ele a tomou como esposa e ela entrou em sua casa, e se o noivo ou a noiva vier a morrer, aquilo que ele tiver trazido não poderá ser retirado; ele tomará apenas o excedente.' },
        { id: 'es-32', number: '§ 32', text: 'Por um shekel de prata deverá acrescentar um sexto de shekel e seis grãos como juros; por um gur de cevada deverá acrescentar um pan e quatro sat de cevada como juros.' },
        { id: 'es-33', number: '§ 33', text: 'O awilum que conceder um empréstimo a outro awilum igual a ele deverá receber o pagamento na eira.' },
        { id: 'es-34', number: '§ 34', text: 'Se um awilum deu cevada e a converteu em prata, na colheita ele tomará a cevada e seus juros: por um gur, um pan e quatro sat.' },
        { id: 'es-35', number: '§ 35', text: 'Se um awilum deu prata ana panišu, ele tomará a prata e seus juros: por um shekel de prata, um sexto de shekel e seis grãos.' },
        { id: 'es-36', number: '§ 36', text: 'Se um awilum não tem nada contra outro awilum, mas penhora a escrava daquele, o proprietário da escrava prestará juramento por deus: "Tu não tens nada contra mim", e aquele deverá pesar a prata correspondente ao valor da escrava.' },
        { id: 'es-37', number: '§ 37', text: 'Se um awilum não tem nada contra outro awilum, mas penhora a escrava dele, retém o penhor em sua causa e lhe causa a morte, deverá restituir duas escravas ao proprietário.' },
        { id: 'es-38', number: '§ 38', text: 'Se não tem nada contra ele, mas penhora a mulher de um muškênum ou o filho de um muškênum, retém o penhor em sua casa e lhe causa a morte, trata-se de um processo de vida: aquele que penhorou deverá morrer.' },
        { id: 'es-39', number: '§ 39', text: 'Se um awilum reclamou a consumação do casamento, mas seu sogro o tratou injustamente e deu sua filha a outro, o pai da filha deverá restituir em dobro a terkatum recebida.' },
        { id: 'es-40', number: '§ 40', text: 'Se um awilum trouxe a terkatum pela filha de outro awilum, mas um terceiro, sem consultar o pai ou a mãe, a raptou e a deflorou, trata-se de um processo de vida: ele deverá morrer.' },
        { id: 'es-41', number: '§ 41', text: 'Se um awilum tomou por esposa a filha de outro awilum sem consultar o pai ou a mãe, e não deu banquete de núpcias nem contrato ao pai ou à mãe, ainda que more um ano em sua casa, ela não é esposa.' },
        { id: 'es-42', number: '§ 42', text: 'Se, porém, deu contrato e banquete de núpcias ao pai e à mãe e a tomou por esposa, ela é esposa. No dia em que for apanhada no seio de outro awilum, morrerá; ela não poderá continuar viva.' },
        { id: 'es-43', number: '§ 43', text: 'Se um awilum foi feito prisioneiro durante uma expedição militar, de razia ou de reconhecimento, ou foi levado à força e permaneceu por longo tempo em outra terra, e um outro awilum tomou sua mulher por esposa e ela gerou um filho, quando ele regressar sua mulher deverá retornar para ele.' },
        { id: 'es-44', number: '§ 44', text: 'Se um awilum odiou sua cidade e seu senhor e fugiu, e um outro awilum tomou sua mulher por esposa, quando ele regressar não poderá reclamar sua mulher.' },
        { id: 'es-45', number: '§ 45', text: 'Se um awilum desflorou a escrava de outro awilum, deverá pagar um terço de mina de prata; a escrava permanecerá propriedade de seu senhor.' },
        { id: 'es-46', number: '§ 46', text: 'Se um awilum deu seu filho a uma ama para amamentar e criar, mas não forneceu alimento, unguento e roupa por três anos, deverá pagar dez minas de prata pela educação de seu filho e poderá retomá-lo.' },
        { id: 'es-47', number: '§ 47', text: 'Se uma escrava cometeu fraude entregando seu filho à filha de um awilum, e quando ele já estava crescido seu senhor o reconheceu, ele poderá prendê-lo e retomá-lo.' },
        { id: 'es-48', number: '§ 48', text: 'Se uma escrava do palácio entregou seu filho ou sua filha a um awilum como filho de criação, o palácio poderá retomá-lo; ou então o adotante deverá entregar ao palácio um substituto equivalente.' },
        { id: 'es-49', number: '§ 49', text: 'Se um awilum entregou seus bens em custódia a um napṭarum e a casa não foi arrombada, a porta não foi quebrada nem a janela arrancada, mas o depositário deixou desaparecer o bem confiado, deverá restituí-lo.' },
        { id: 'es-50', number: '§ 50', text: 'Se a casa do depositário foi roubada juntamente com o bem confiado e houve perda de bens do dono da casa, este jurará no templo de Tišpak: "Com os teus bens desapareceram também os meus bens, não cometi fraude", e nada poderá ser exigido dele.' },
        { id: 'es-51', number: '§ 51', text: 'Se um dos irmãos quiser vender sua parte e o outro desejar comprar, deverá pagar a parte correspondente do outro.' },
        { id: 'es-52', number: '§ 52', text: 'Se um awilum se tornou pobre e vendeu sua casa, no dia em que o comprador quiser revendê-la, o antigo proprietário poderá resgatá-la.' },
        { id: 'es-53', number: '§ 53', text: 'Se um awilum comprou um escravo, uma escrava, um boi ou qualquer mercadoria e não pode indicar o vendedor, ele é um ladrão.' },
        { id: 'es-54', number: '§ 54', text: 'Se um ubārum, um napṭarum ou um mūdû quiser vender sua cerveja, a taberneira deverá vendê-la pelo preço corrente.' },
        { id: 'es-55', number: '§ 55', text: 'Se um awilum arrancou o nariz de outro awilum, deverá pagar uma mina de prata; por um olho, uma mina; por um dente, meia mina; por uma bofetada, dez shekels de prata.' },
        { id: 'es-56', number: '§ 56', text: 'Se um awilum cortou o dedo de outro awilum, deverá pagar dois terços de mina de prata.' },
        { id: 'es-57', number: '§ 57', text: 'Se um awilum empurrou outro awilum no escuro e quebrou seu braço, deverá pagar meia mina de prata; se quebrou seu pé, também meia mina.' },
        { id: 'es-58', number: '§ 58', text: 'Se um awilum feriu outro awilum e quebrou seu [...], deverá pagar dois terços de mina de prata.' },
        { id: 'es-59', number: '§ 59', text: 'Se um awilum, numa briga, feriu outro awilum, deverá pagar dez shekels de prata. Em causas de um terço de mina até uma mina de prata, os juízes julgarão; os processos de vida pertencem ao rei.' },
        { id: 'es-60', number: '§ 60', text: 'Se um awilum for apanhado em posse de um escravo ou escrava roubados, o escravo trará outro escravo e a escrava outra escrava.' },
        { id: 'es-61', number: '§ 61', text: 'Se um šakkanakkum, um šapir nārim ou um bēl têrtim capturar um escravo fugitivo ou um jumento fugitivo do palácio ou de um muškênum e não o conduzir a Eshnunna, mas o reter por mais de um mês, o palácio o acusará de roubo.' },
        { id: 'es-62', number: '§ 62', text: 'Um escravo ou escrava de Eshnunna marcado com kannum não poderá sair pela porta da cidade sem seu dono.' },
        { id: 'es-63', number: '§ 63', text: 'Um escravo ou escrava que, sob custódia de um mensageiro, entrou pela porta de Eshnunna, será marcado com kannum, mašhanum ou abbuttum e ficará sob custódia de seu dono.' },
        { id: 'es-64', number: '§ 64', text: 'Se um boi escorneou outro boi e lhe causou a morte, os proprietários dividirão entre si o valor do boi vivo e a carne do boi morto.' },
        { id: 'es-65', number: '§ 65', text: 'Se um boi conhecido por escorneador matou um awilum e o proprietário havia sido advertido, mas não o vigiou, deverá pagar dois terços de mina de prata; se matou um escravo, pagará quinze shekels de prata.' },
        { id: 'es-66', number: '§ 66', text: 'Se um cão feroz, cujo dono foi advertido, matou um awilum, o dono pagará dois terços de mina de prata; se matou um escravo, pagará quinze shekels de prata.' },
        { id: 'es-67', number: '§ 67', text: 'Se um muro ameaçava cair e o distrito advertiu o proprietário, mas ele não reforçou o muro e o muro caiu e causou a morte de um awilum, trata-se de um processo de vida. Decreto do réu.' },
        { id: 'es-68', number: '§ 68', text: 'Se um awilum repudiou sua esposa depois de ter gerado filhos com ela e tomou outra como esposa, ele será afastado de sua casa e de tudo o que nela há, e poderá seguir aquela a quem ama.' }
      ]
    },
    {
      id: 'glossary',
      title: 'Glossário',
      type: 'glossary',
      glossaryEntries: [
        { term: 'Ana panišu', definition: 'Expressão técnica acádica, literalmente "diante dele", utilizada para indicar um tipo específico de empréstimo concedido diretamente ao devedor.' },
        { term: 'Awilum', definition: 'Cidadão plenamente livre, em oposição tanto aos escravos quanto a outras categorias intermediárias. Constitui a camada social mais elevada do ponto de vista jurídico.' },
        { term: 'Bēl têrtim', definition: 'Delegado ou comissário real, incumbido de funções administrativas específicas.' },
        { term: 'Distrito', definition: 'Autoridade local encarregada da manutenção da ordem e da fiscalização de riscos urbanos, como animais perigosos ou construções instáveis.' },
        { term: 'Enlil', definition: 'Na mitologia suméria, divindade central da nova geração dos deuses. Deus dos ares e também associado ao domínio sobre a terra. Inicialmente patrono de Eshnunna, com templos como E-sikil e E-kurmah. Pai de Ningishzida, concebido durante a descida de Enlil e Ninlil ao mundo subterrâneo. Posteriormente substituído por Tišpak como deus patrono da cidade.' },
        { term: 'Filho não separado', definition: 'Filho menor que, após a morte do pai, permanece em comunhão de bens com os irmãos, sem divisão formal da herança.' },
        { term: 'Grão (še)', definition: 'Medida expressa pelo sumerograma ŠE, correspondente ao acádico uttetum. Um shekel equivale a cerca de 180 grãos, sendo cada grão aproximadamente 1/180 do shekel.' },
        { term: 'Gur', definition: 'Medida de volume usada principalmente para cereais. Um gur corresponde a cerca de 300 litros de cevada.' },
        { term: 'Juros', definition: 'Acréscimo devido em contratos de empréstimo, fixado em proporções específicas. Algumas leis visam limitar práticas abusivas e proteger o devedor contra a usura.' },
        { term: 'Ka, qa, sat, pan', definition: 'Unidades de volume empregadas na Mesopotâmia antiga. Aparecem nas leis para indicar salários, preços e aluguéis de bens e serviços.' },
        { term: 'Kannum, mašhanum, abbuttum', definition: 'Marcas corporais ou sinais distintivos aplicados a escravos em Eshnunna. Podiam consistir em faixas, correntes ou formas específicas de cortar ou pentear os cabelos.' },
        { term: 'Muškênum', definition: 'Classe social intermediária entre os awilum e os escravos. Eram juridicamente livres, mas social e politicamente inferiores aos awilum, mantendo relação de dependência e proteção em relação ao palácio.' },
        { term: 'Naptarum', definition: 'Membro da elite social, atuava como depositário profissional. Gozava de privilégios jurídicos e imunidades, o que tornava sua residência local adequado para custódia de bens.' },
        { term: 'Ninazu', definition: 'Divindade associada à cura e à magia. Conhecido como "Senhor Médico". Filho do deus Enki e irmão de Ninmada. Em alguns contextos, assimilado a outras divindades terapêuticas.' },
        { term: 'Óleo de betume', definition: 'Substância extraída de terrenos betuminosos, abundantes na região de Eshnunna, utilizada para impermeabilização e outros fins práticos.' },
        { term: 'Penhor', definition: 'Garantia real entregue pelo devedor ao credor. As leis distinguem claramente entre penhor legítimo e penhor ilegal, prevendo sanções severas neste último caso.' },
        { term: 'Potassa', definition: 'Produto obtido das cinzas de determinadas plantas, contendo sais alcalinos, empregado no fabrico de sabão e em processos artesanais.' },
        { term: 'Processo de vida', definition: 'Categoria de processo reservada aos casos que envolviam pena de morte. O julgamento desses casos competia exclusivamente ao rei.' },
        { term: 'Shekel (siclo)', definition: 'Unidade de peso e de valor baseada na prata. Um shekel corresponde aproximadamente a 8 gramas de prata.' },
        { term: 'Šabitum (taberneira)', definition: 'Figura que não se limitava à venda de bebidas, mas atuava no comércio de bens de primeira necessidade, funcionando como intermediária econômica.' },
        { term: 'Šakkanakkum', definition: 'Chefe da administração de uma cidade, representante mais elevado do rei no âmbito local.' },
        { term: 'Šapir nārim', definition: 'Funcionário responsável pela administração dos rios e do sistema de irrigação, essencial para a economia agrícola.' },
        { term: 'Terkatum', definition: 'Quantia de prata paga pelo pai do noivo ao pai da noiva no contexto do casamento. Em caso de morte de um dos noivos, havia regras específicas para restituição total ou parcial desse valor.' },
        { term: 'Tišpak', definition: 'Divindade patrona de Eshnunna em período posterior, possivelmente assimilada a Ninazu. O templo de Tišpak aparece como local de juramento solene.' },
      ]
    }
  ]
};
