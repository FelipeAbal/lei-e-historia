import { HistoricalDocument } from '../../types';

export const confissoesMaatAni: HistoricalDocument = {
  id: 'confissoes-maat-ani',
  title: 'As 42 Confissões Negativas',
  subtitle: 'Papiro de Ani — Livro dos Mortos, Capítulo 125',
  date: 'c. 1275 a.C.',
  era: 'Egito Antigo',
  language: 'Hierático',
  description: 'A Declaração de Inocência pronunciada por Ani no Salão das Duas Verdades, diante de 42 juízes divinos. O texto, extraído das Pranchas XXXI e XXXII do Papiro de Ani, representa o momento culminante do julgamento da alma no Antigo Egito.',
  parentCollectionId: 'livro-dos-mortos',
  sections: [
    {
      id: 'introducao',
      title: 'O Tribunal de Maat',
      type: 'text',
      content: `As **Confissões Negativas**, também conhecidas como a "Declaração de Inocência", representam o momento culminante do julgamento da alma no Antigo Egito. Ao entrar no **Salão das Duas Verdades** (*Maati*), o falecido deve apelar a 42 juízes divinos, declarando não ter cometido uma lista específica de pecados.

Diferente dos códigos de leis civis, como o Código de Manu ou o de Hamurabi, estas confissões operam no plano ritual e mágico: o conhecimento do nome de cada divindade e a afirmação da pureza pessoal eram as chaves para que o coração — a consciência — não pesasse mais que a pena de **Maat** (a Verdade/Ordem) na balança de Osíris. Se aprovado, o falecido tornava-se um *Maakheru* ("Justo de Voz") e era admitido à vida eterna na companhia dos deuses. Se o coração pesasse mais que a pena, seria devorado pelo monstro **Amemit** — parte leão, parte hipopótamo, parte crocodilo — e o falecido deixaria de existir para sempre.

O texto aqui apresentado é extraído do **Papiro de Ani**, o mais célebre exemplar do *Livro dos Mortos*, hoje conservado no Museu Britânico (EA 10470). O papiro foi produzido para Ani, um escriba real e superintendente dos celeiros de Tebas, durante o reinado de Ramsés II (c. 1275 a.C.). Com mais de 23 metros de comprimento, é um dos papiros funerários mais longos e mais ricamente ilustrados que sobreviveram da Antiguidade.`,
    },
    {
      id: 'vinhetas',
      title: 'Pranchas XXXI e XXXII — As Vinhetas',
      type: 'text',
      content: `**Vinheta:** O Salão das Duas Verdades e da Justiça, onde Ani deve dirigir-se individualmente aos quarenta e dois deuses, que estão sentados em uma fileira no meio do salão. Em cada extremidade há uma porta; a da direita chama-se *"Neb-Maat-heri-tep-retui-f"* e a da esquerda *"Neb-pehti-thesu-menment"*. No centro do teto, coroado por uma série de *uræi* (serpentes sagradas) e penas emblemáticas de Maat, há uma divindade sentada com as mãos estendidas.

À direita do salão (Prancha XXXII), encontram-se quatro pequenas vinhetas retratando:

1. Duas figuras sentadas da deusa **Maat**, personificação da verdade, da justiça e da ordem cósmica.
2. **Osíris** sentado em seu trono, com Ani em adoração diante de um altar repleto de oferendas.
3. A **Balança** pesando o coração de Ani contra a pena da Verdade, com o monstro **Amemit** aguardando ao lado; **Hórus** e **Anúbis** assistem ao processo.
4. **Thoth**, com cabeça de íbis, registrando o veredito em seu escriba divino.

A cena da pesagem do coração (*psykostasia*) é uma das representações mais icônicas da civilização egípcia e ilustra a concepção de que a moralidade individual tinha consequências cósmicas — não apenas sociais ou políticas.`,
    },
    {
      id: 'confissoes',
      title: 'A Confissão Negativa',
      type: 'articles',
      articles: [
        { id: 'ani-1', number: '(1)', text: 'Ani diz: "Salve, tu de passos largos, que vens de Annu, eu não cometi iniquidade."' },
        { id: 'ani-2', number: '(2)', text: '"Salve, tu que és abraçado pela chama, que vens de Kheraba, eu não roubei com violência."' },
        { id: 'ani-3', number: '(3)', text: '"Salve, Fentiu, que vens de Khemennu, eu não furtei."' },
        { id: 'ani-4', number: '(4)', text: '"Salve, Devorador de Sombras, que vens de Qernet, eu não assassinei; eu não causei dano."' },
        { id: 'ani-5', number: '(5)', text: '"Salve, Nehau, que vens de Re-stau, eu não desviei oferendas."' },
        { id: 'ani-6', number: '(6)', text: '"Salve, deus na forma de dois leões, que vens do céu, eu não diminuí as oblações."' },
        { id: 'ani-7', number: '(7)', text: '"Salve, tu cujos olhos são de fogo, que vens de Saut, eu não saqueei o que pertence aos deuses."' },
        { id: 'ani-8', number: '(8)', text: '"Salve, tu Chama, que vens e vais, eu não proferi mentiras."' },
        { id: 'ani-9', number: '(9)', text: '"Salve, Triturador de ossos, que vens de Suten-henen, eu não roubei comida."' },
        { id: 'ani-10', number: '(10)', text: '"Salve, tu que lanças a Chama, que vens de Het-Ptah-ka, eu não causei dor."' },
        { id: 'ani-11', number: '(11)', text: '"Salve, Qerer, que vens de Amentet, eu não cometi fornicação."' },
        { id: 'ani-12', number: '(12)', text: '"Salve, tu cujo rosto é voltado para trás, que vens de teu esconderijo, eu não causei o derramamento de lágrimas."' },
        { id: 'ani-13', number: '(13)', text: '"Salve, Bast, que vens do lugar secreto, eu não agi enganosamente."' },
        { id: 'ani-14', number: '(14)', text: '"Salve, tu cujas pernas são de fogo, que vens das trevas, eu não transgredi."' },
        { id: 'ani-15', number: '(15)', text: '"Salve, Devorador de Sangue, que vens do bloco de matança, eu não agi com astúcia."' },
        { id: 'ani-16', number: '(16)', text: '"Salve, Devorador de entranhas, que vens de Mabet, eu não devastei terras aradas."' },
        { id: 'ani-17', number: '(17)', text: '"Salve, Senhor da Justiça e da Verdade, que vens da cidade da Justiça e da Verdade, eu não fui um bisbilhoteiro."' },
        { id: 'ani-18', number: '(18)', text: '"Salve, tu que caminhas para trás, que vens da cidade de Bast, eu não movi meus lábios [contra homem algum]."' },
        { id: 'ani-19', number: '(19)', text: '"Salve, Sertiu, que vens de Annu, eu não me irei exceto por uma causa justa."' },
        { id: 'ani-20', number: '(20)', text: '"Salve, tu de dupla maldade, que vens de Ati, eu não violei a esposa de homem algum."' },
        { id: 'ani-21', number: '(21)', text: '"Salve, serpente de duas cabeças, que vens da câmara de tortura, eu não violei a esposa de homem algum."' },
        { id: 'ani-22', number: '(22)', text: '"Salve, tu que observas o que te é trazido, que vens de Pa-Amsu, eu não me polui."' },
        { id: 'ani-23', number: '(23)', text: '"Salve, Chefe dos poderosos, que vens de Amentet, eu não causei terror."' },
        { id: 'ani-24', number: '(24)', text: '"Salve, tu Destruidor, que vens de Kesiu, eu não transgredi."' },
        { id: 'ani-25', number: '(25)', text: '"Salve, tu que ordenas a fala, que vens de Urit, eu não ardi de fúria."' },
        { id: 'ani-26', number: '(26)', text: '"Salve, tu Bebê, que vens de Uab, eu não fechei meus ouvidos às palavras da Justiça e da Verdade."' },
        { id: 'ani-27', number: '(27)', text: '"Salve, Kenemti, que vens de Kenemet, eu não causei aflição."' },
        { id: 'ani-28', number: '(28)', text: '"Salve, tu que trazes tua oferenda, eu não agi com insolência."' },
        { id: 'ani-29', number: '(29)', text: '"Salve, tu que ordenas a fala, que vens de Unaset, eu não instiguei contendas."' },
        { id: 'ani-30', number: '(30)', text: '"Salve, Senhor dos rostos, que vens de Netchfet, eu não julguei apressadamente."' },
        { id: 'ani-31', number: '(31)', text: '"Salve, Sekheriu, que vens de Utten, eu não fui um bisbilhoteiro."' },
        { id: 'ani-32', number: '(32)', text: '"Salve, Senhor dos dois chifres, que vens de Saïs, eu não multipliquei palavras excessivamente."' },
        { id: 'ani-33', number: '(33)', text: '"Salve, Nefer-Tmu, que vens de Het-Ptah-ka, eu não causei dano nem mal."' },
        { id: 'ani-34', number: '(34)', text: '"Salve, Tmu em tua hora, que vens de Tattu, eu nunca amaldiçoei o rei."' },
        { id: 'ani-35', number: '(35)', text: '"Salve, tu que trabalhas conforme tua vontade, que vens de Tebu, eu nunca sujei a água."' },
        { id: 'ani-36', number: '(36)', text: '"Salve, tu portador do sistro, que vens de Nu, eu não falei com desprezo."' },
        { id: 'ani-37', number: '(37)', text: '"Salve, tu que fazes a humanidade florescer, que vens de Saïs, eu nunca amaldiçoei Deus."' },
        { id: 'ani-38', number: '(38)', text: '"Salve, Neheb-ka, que vens de teu esconderijo, eu não roubei."' },
        { id: 'ani-39', number: '(39)', text: '"Salve, Neheb-nefert, que vens de teu esconderijo, eu não desviei as oferendas dos deuses."' },
        { id: 'ani-40', number: '(40)', text: '"Salve, tu que pões em ordem a cabeça, que vens de teu santuário, eu não saqueei oferendas destinadas aos mortos abençoados."' },
        { id: 'ani-41', number: '(41)', text: '"Salve, tu que trazes teu braço, que vens da cidade de Maati, eu não furtei a comida de crianças, nem pequei contra o deus de minha cidade natal."' },
        { id: 'ani-42', number: '(42)', text: '"Salve, tu cujos dentes são brancos, que vens de Ta-she, eu não abati com má intenção o gado do deus."' },
      ],
    },
  ],
};
