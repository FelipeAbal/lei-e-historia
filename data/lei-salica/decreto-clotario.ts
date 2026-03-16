import { HistoricalDocument } from '../../types';

export const leiSalicaDecretoClotario: HistoricalDocument = {
  id: 'lei-salica-decreto-clotario',
  title: 'Lei Sálica — Decreto do Rei Clotário',
  subtitle: 'Títulos LXXXIV a LXLIII — Fim do Livro III',
  date: 'c. 507–511',
  era: 'Idade Média',
  language: 'Latim',
  description: 'Decreto do Rei Clotário acrescido à Lei Sálica, cobrindo os Títulos LXXXIV a LXLIII (XCIII). Trata da responsabilidade das centenas pelo rastreamento de ladrões, bens roubados encontrados em domicílios, ordálio por sorte, prova judicial para diferentes tipos de escravos, penalidades para escravos acusados, ocultamento de ladrões e ladrões que fogem para igrejas. Inclui nota histórica sobre a composição dos quatro livros da Lei Sálica.',
  parentCollectionId: 'lei-salica',
  sections: [
    {
      id: 'decreto-clotario-intro',
      title: 'O Decreto do Rei Clotário',
      type: 'text',
      content: `Aqui Começa o Livro III.`,
    },
    {
      id: 'titulo-lxxxiv',
      title: 'LXXXIV.',
      type: 'text',
      content: `É decretado que as centenas (centenas) deverão exercer vigilância sempre que a vigília noturna não capturar ladrões, tendo seus crimes sido negligenciados como resultado de alguma conspiração. Que aquele que perdeu propriedade receba seu valor total de sua centena; e que o ladrão seja perseguido e, se ele aparecer em outra centena, que [aquela centena] o escolte [de volta] e seja advertida de que se ela [a segunda centena] negligenciar em fazer isso, será condenada a pagar quinze soldos. De fato, aquele que perdeu [a propriedade] receberá sem dúvida [seu valor] daquela centena [para a qual o ladrão fugiu], que é a segunda ou terceira. Se o rastro do ladrão for provado seja no tempo presente ou em um longo tempo no futuro, se aquele que persegue o ladrão o capturar, ele receberá a composição total por ele. Se ele for encontrado por alguém em confiança (per truste), essa pessoa terá metade da composição e exigirá o valor total do ladrão.`,
    },
    {
      id: 'titulo-lxxxv',
      title: 'LXXXV.',
      type: 'text',
      content: `Se alguém encontrar bens roubados (furtum) na casa de outro homem que está sob tranca e chave, o dono da casa fará composição com sua vida.`,
    },
    {
      id: 'titulo-lxxxvi',
      title: 'LXXXVI.',
      type: 'text',
      content: `Se alguém for levado a qualquer lugar com bens roubados, ele será submetido à lei acima. Se ele for acusado sob suspeita, ele será submetido ao ordálio por sorte (adsortem venial). Se ele escolher a sorte errada (malam sortem priserit) [isto é, falhar no ordálio], ele será um ladrão. Não obstante, cada parte selecionará três homens cada [para observar o ordálio] para que não possa haver conspiração.`,
    },
    {
      id: 'titulo-lxxxvii',
      title: 'LXXXVII. SOBRE A PROVA JUDICIAL PARA DIFERENTES TIPOS DE ESCRAVOS',
      type: 'text',
      content: `Se escravos da igreja, do fisco, ou de qualquer outro forem acusados por qualquer um de algum crime, que eles vão ao ordálio por sorte (adsortem veniat), ou que eles apelem (promoveatur) ao povo, ou que seu valor (preço — pretius) seja penhorado (reformetur) por seus senhores. Se isto [a acusação] for provado, eles serão submetidos a punição.`,
    },
    {
      id: 'titulo-lxxxviii',
      title: 'LXXXVIII. SOBRE A PENALIDADE PARA ESCRAVOS ACUSADOS',
      type: 'text',
      content: `Se o escravo de uma pessoa poderosa (de potentibus) que possui muitas coisas for suspeito de ter cometido um crime, em cada caso que o senhor do escravo concorde na presença de testemunhas que ele o apresentará [o escravo] perante o juiz dentro de vinte dias. Se o senhor do escravo não o tiver apresentado no tempo acordado, intervindo alguma conspiração, ele pagará a multa e a composição (inter fredo et faido) de acordo com a natureza da acusação. Se o escravo fugir antes que seu senhor seja advertido, seu senhor fará restituição integral pelo crime; e quando o escravo for encontrado, seu senhor entregará o escravo para ser punido.`,
    },
    {
      id: 'titulo-lxxxix',
      title: 'LXXXIX.',
      type: 'text',
      content: `Se alguém secretamente aceita de um ladrão composição por propriedade roubada, que ambos sejam culpados de roubo. Ladrões devem ser apresentados perante os juízes; ninguém deve presumir ocultar ninguém culpado de roubo. Aquele que fizer isto será culpado da mesma ofensa.`,
    },
    {
      id: 'titulo-lxl',
      title: 'LXL. SOBRE LADRÕES QUE FOGEM PARA UMA IGREJA',
      type: 'articles',
      articles: [
        {
          id: 'ls-lxl-1',
          number: '1',
          text: `Foi acordado com os bispos que ninguém deve presumir arrastar um ladrão ou outra pessoa culpada do pórtico (de atrio) de uma igreja; [se um homem fizer isto], ele será punido de acordo com os cânones (ccmonibus). Se houver igrejas que não tenham pórticos fechados, então um arpennis de terra de cada lado da parede deve ser considerado como o pórtico; ninguém por causa do anseio por sua tarefa pode tirar um fugitivo do supracitado lugar. Se ele fizer isto e for pego, ele será condenado a uma punição adequada.`,
        },
        {
          id: 'ls-lxl-2',
          number: '2',
          text: `Mas se um escravo abandonando seu senhor foge para uma igreja onde seu senhor chegou primeiro, que ele permaneça lá impune; e se um preço puder ser acordado depois disso, que não seja recusado. Mas se a ele [o senhor] não tiver sido dado o preço exigido por seu escravo e ele [o escravo] fugir [para outra pessoa], que aquele que não o devolver pague seu preço (pretium); depois se ele for encontrado e for agradável, que ele faça restituição por (reformetur) o preço recebido por seu senhor. Nós decretamos isto a respeito de escravos fiscais (fiscalibus) e [a respeito dos escravos] de todos os senhores.`,
        },
      ],
    },
    {
      id: 'titulo-lxli',
      title: 'LXLI. QUE CENTENÁRIOS (centenarii) SELECIONADOS SERÃO COLOCADOS EM CONFIANÇA',
      type: 'text',
      content: `A fim de manter a paz nós ordenamos que centenários selecionados sejam colocados em confiança para que através de sua fé e cuidado a supracitada paz possa ser observada.`,
    },
    {
      id: 'titulo-lxlii',
      title: 'LXLII.',
      type: 'text',
      content: `E porque em apaziguar a Deus o afeto de irmandade guarda uma corrente inquebrável entre nós, os centenários ou aqueles ditos estar em confiança terão o direito de perseguir ladrões entre comunidades provinciais e seguir rastros marcados, e que a ação permaneça em confiança onde a violência foi feita, justo como foi dito, para que ele [o ladrão] se apresse em fazer restituição total àquele que perdeu sua propriedade, contanto não obstante que ele perseguiu o ladrão. Se ele [o ladrão] foi encontrado por alguém em confiança, que metade da composição e o pagamento pelo tempo em que o uso da propriedade foi perdido sejam pagos àquele que a perdeu da propriedade do ladrão. Aquele que seguiu o ladrão receberá uma composição total e pagamento ou o que quer que tenha sido perdido; não obstante a multa (fredus) será reservada para o juiz em cuja província o ladrão está.`,
    },
    {
      id: 'titulo-lxliii',
      title: 'LXLIII.',
      type: 'text',
      content: `Aquele que seguindo rastros ou perseguindo um ladrão não desejar entrar [perante a corte], se ele foi convocado e nenhuma escusa legítima o detém, será judicialmente condenado a pagar cinco soldos.\n\nDe fato nós estabelecemos este pacto para manter a paz em nome de Deus e é nosso desejo que estas coisas prescritas sejam observadas perpetuamente; e que seja sabido que se qualquer juiz presumir violar este decreto, ele será submetido à perda de sua vida; e nós ordenamos que todas as coisas ditas acima permaneçam como antes.\n\nAqui Termina o Livro III da Lei Sálica.`,
    },
    {
      id: 'nota-historica',
      title: 'De Que Maneira a Coleção [de Leis] Contida Aqui é Vista por Conter Quatro Livros',
      type: 'text',
      content: `O primeiro rei dos Francos determinou e fez provisões para aquelas questões a serem adjudicadas nos Títulos I a LXV; algum tempo depois disso com seus optimates ele adicionou os Títulos LXVI a LXXVIII. Muito tempo depois o Rei Childeberto considerou o que deveria ser adicionado e assim proveu os títulos de LXXVIII a LXXXIII, que são reconhecidos por terem sido dignamente adicionados lá, e ele além disso confiou estes escritos a seu irmão Clotário. Clotário de bom grado recebeu estes títulos de seu irmão mais velho e depois, já que ele tinha assumido seu reino, ele determinou aquilo que ele deveria adicionar e arranjar mais plenamente, que se tornaram os Títulos LXXXIII a LXLIII. Mais tarde com seu irmão ele emitiu estas leis revisadas. E foi acordado entre eles que todas as coisas deveriam permanecer como previamente provido.\n\n1. O Rei Teodorico reinou dezessete anos.\n2. O Rei Clóvis reinou três anos.\n3. O Rei Childeberto reinou dezessete anos.\n4. O Rei Dagoberto reinou cinco anos.\n5. O Rei Chilperico reinou cinco anos.\n6. Igualmente o Rei Teodorico reinou dezessete anos.\n7. Por sete anos nenhum rei reinou.\n8. O Rei Childerico reinou oito anos.\n\nEm suma, há 78 anos.`,
    },
  ],
};
