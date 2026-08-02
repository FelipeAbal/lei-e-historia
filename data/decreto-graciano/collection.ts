import { DocumentCollection } from '../../types';

export const decretoGraciano: DocumentCollection = {
  id: 'decreto-graciano',
  title: 'Decreto de Graciano',
  subtitle: 'Concórdia dos Cânones Discordantes',
  date: 'c. 1140',
  era: 'Idade Média',
  language: 'Latim',
  description: 'A obra fundadora do direito canônico clássico, composta por Graciano de Bolonha por volta de 1140. Reuniu e harmonizou mais de três mil cânones eclesiásticos acumulados ao longo de mil anos de cristandade, inaugurando o ensino sistemático do direito canônico nas universidades medievais.',
  sections: [
    {
      id: 'introducao-geral',
      title: 'Introdução Geral',
      content: `Por volta de 1140, um monge camaldulense chamado Graciano, provavelmente ligado ao convento de São Félix em Bolonha, concluiu uma obra que mudaria a história do direito ocidental. O título que ela recebeu — *Concordia discordantium canonum*, "Concórdia dos cânones discordantes" — já revela o seu propósito: reunir, harmonizar e sistematizar a enorme massa de normas eclesiásticas acumuladas ao longo de mais de mil anos de cristandade. Cânones conciliares, decretos papais, textos dos Padres da Igreja, fragmentos do direito romano: tudo isso, aparentemente contraditório, deveria ser articulado numa síntese coerente. O resultado foi o que a tradição canonística logo chamaria simplesmente de *Decretum* — o Decreto — e que se tornaria a pedra fundadora do direito canônico clássico.

A importância do *Decretum* para a história do direito dificilmente pode ser superestimada. Ele inaugurou o ensino sistemático do direito canônico nas universidades medievais, especialmente em Bolonha, e deu origem a uma tradição de comentadores — os *decretistas* — que durante séculos debateram, glossaram e desenvolveram os seus textos. O método de Graciano, aliás, não é apenas uma compilação: intercalados aos cânones estão os *dicta Gratiani*, passagens em que o próprio autor analisa as contradições, propõe soluções e constrói argumentos. É por isso que o *Decretum* é ao mesmo tempo uma fonte do direito e um dos primeiros tratados jurídicos medievais.

A obra está dividida em três partes principais. A primeira compreende 101 Distinções, nas quais Graciano trata das fontes do direito, da hierarquia eclesiástica e da ordenação clerical. A segunda parte — a mais extensa — é formada por 36 Causas, cada uma construída em torno de um caso hipotético que suscita questões jurídicas complexas. A terceira parte, o *De consecratione*, trata de liturgia e sacramentos. Ao todo, são cerca de 3.800 cânones, o que torna qualquer tradução integral inviável e, para fins pedagógicos, desnecessária.

**Por que estas seções?** A seleção traduzida neste repositório obedece a um critério de relevância histórico-jurídica. As **Distinções I e II** foram escolhidas por conterem o núcleo teórico do *Decretum*: a famosa abertura sobre o direito natural, a distinção entre *fas* e *ius*, a tipologia das fontes do direito (lei, costume, consuetude) e a classificação do direito em natural, civil e das gentes — tudo absorvido diretamente de Isidoro de Sevilha. São textos que dialogam diretamente com a tradição romanística e com o pensamento jurídico que viria a seguir. A **Causa 23**, por sua vez, é provavelmente a seção mais influente do *Decretum* do ponto de vista da história política e do direito internacional: é ali que Graciano sistematiza a doutrina da guerra justa, discute os limites da coação estatal e religiosa, examina a relação entre poder eclesiástico e poder secular e trata do estatuto jurídico dos bens eclesiásticos.

A tradução que aqui se apresenta foi realizada a partir da primeira recension do *Decretum Gratiani* editada por Anders Winroth. Optou-se por uma tradução fiel ao original, preservando a estrutura dos argumentos e os termos técnicos em latim quando a tradução implicaria perda significativa de sentido. Os termos latinos mais relevantes aparecem em itálico, seguidos de sua tradução entre colchetes.`,
    },
  ],
  childDocumentIds: [
    'decreto-graciano-distincao-i',
    'decreto-graciano-distincao-ii',
    'decreto-graciano-causa-23',
  ],
};
