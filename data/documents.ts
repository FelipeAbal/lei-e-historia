import { HistoricalDocument } from '../types';
import codigoVisigoticoLivro1 from './codigo-visigotico/codigo-visigótico-livro-1';
import codigoVisigoticoLivro2Titulo1 from './codigo-visigotico/codigo-visigótico-livro-2-titulo-1';
import codigoVisigoticoLivro2Titulo4 from './codigo-visigotico/codigo-visigotico-livro-2-titulo-4';
import codigoVisigoticoLivro3 from './codigo-visigotico/codigo-visigotico-livro-3';
import codigoVisigoticoLivro4Titulo2 from './codigo-visigotico/codigo-visigotico-livro-4-titulo-2';
import codigoVisigoticoLivro5Titulo7 from './codigo-visigotico/codigo-visigotico-livro-5-titulo-7';
import codigoVisigoticoLivro6 from './codigo-visigotico/codigo-visigotico-livro-6';
import codigoVisigoticoLivro7Titulo2 from './codigo-visigotico/codigo-visigotico-livro-7-titulo-2';
import codigoVisigoticoLivro12 from './codigo-visigotico/codigo-visigotico-livro-12';
import { decretoGracianoDistincaoI } from './decreto-graciano/distincao-i';
import { decretoGracianoDistincaoII } from './decreto-graciano/distincao-ii';
import { decretoGracianoCausa23 } from './decreto-graciano/causa-23';
import { magnaCarta } from './magna-carta/magna-carta';
import { leiSalicaTitulosIX } from './lei-salica/titulos-i-a-x';
import { leiSalicaTitulosXIXX } from './lei-salica/titulos-xi-a-xx';
import { leiSalicaTitulosXxiXxx } from './lei-salica/titulos-xxi-a-xxx';
import { leiSalicaTitulosXxxiXl } from './lei-salica/titulos-xxxi-a-xl';
import { leiSalicaTitulosXliL } from './lei-salica/titulos-xli-a-l';
import { leiSalicaTitulosLiLx } from './lei-salica/titulos-li-a-lx';
import { leiSalicaTitulosLxiLxv } from './lei-salica/titulos-lxi-a-lxv';
import { leiSalicaCapitularI } from './lei-salica/capitular-i';
import { leiSalicaCapitularIi } from './lei-salica/capitular-ii';
import { leiSalicaDecretoClotario } from './lei-salica/decreto-clotario';
import { leiSalicaCapitularIii } from './lei-salica/capitular-iii';
import { leiSalicaCapitularIv } from './lei-salica/capitular-iv';
import { leiSalicaCapitularV } from './lei-salica/capitular-v';
import { leiSalicaCapitularViSeteTipos } from './lei-salica/capitular-vi-sete-tipos';
import { urNammu } from './mesopotamia/ur-nammu';
import { lipitIshtar } from './mesopotamia/lipit-ishtar';
import { eshnunna } from './mesopotamia/eshnunna';
import { hamurabi } from './mesopotamia/hamurabi';
import { leisHititas } from './hititas/leis-hititas';
import { confissoesMaatAni } from './livro-dos-mortos/confissoes-ani';
import { confissoesMaatNebseni } from './livro-dos-mortos/confissoes-nebseni';
import { dracon } from './grecia/dracon';
import { solon } from './grecia/solon';
import { xiiTabuas } from './roma/xii-tabuas';
import { conflitoOrdens } from './roma/conflito-ordens';
import { editoCaracala } from './roma/edito-caracala';
import { lexAquilia } from './roma/lex-aquilia';
import { institutasLivro1 } from './corpus-iuris/institutas-livro-1';
import { institutasLivro2 } from './corpus-iuris/institutas-livro-2';
import { institutasLivro3 } from './corpus-iuris/institutas-livro-3';
import { institutasLivro4 } from './corpus-iuris/institutas-livro-4';
import { digestoLivro1Titulo1 } from './corpus-iuris/digesto-livro-1-titulo-1';
import { digestoLivro9Titulo2 } from './corpus-iuris/digesto-livro-9-titulo-2';
import { digestoLivro12Titulo6 } from './corpus-iuris/digesto-livro-12-titulo-6';
import { digestoLivro41Titulo1 } from './corpus-iuris/digesto-livro-41-titulo-1';
import { digestoLivro41Extra } from './corpus-iuris/digesto-livro-41-titulo-1-extra';
import { digestoLivro44Titulo7 } from './corpus-iuris/digesto-livro-44-titulo-7';
import { digestoLivro47Titulo2 } from './corpus-iuris/digesto-livro-47-titulo-2';
import { digestoLivro50Titulo16 } from './corpus-iuris/digesto-livro-50-titulo-16';
import { codexLivro1Titulo1 } from './corpus-iuris/codex-livro-1-titulo-1';
import { codexLivro1Titulo14 } from './corpus-iuris/codex-livro-1-titulo-14';
import { codexLivro2Titulo3 } from './corpus-iuris/codex-livro-2-titulo-3';
import { codexLivro9Titulo9 } from './corpus-iuris/codex-livro-9-titulo-9';
import { codexLivro9Titulo16 } from './corpus-iuris/codex-livro-9-titulo-16';
import { codigoManuCapitulo1 } from './codigo-de-manu/capitulo-1';
import { codigoManuCapitulo2 } from './codigo-de-manu/capitulo-2';
import { codigoManuCapitulo3 } from './codigo-de-manu/capitulo-3';
import { codigoManuCapitulo4 } from './codigo-de-manu/capitulo-4';
import { codigoManuCapitulo5 } from './codigo-de-manu/capitulo-5';
import { codigoManuCapitulo6 } from './codigo-de-manu/capitulo-6';
import { codigoManuCapitulo7 } from './codigo-de-manu/capitulo-7';
import { codigoManuCapitulo8 } from './codigo-de-manu/capitulo-8';
import { codigoManuCapitulo9 } from './codigo-de-manu/capitulo-9';
import { codigoManuCapitulo10 } from './codigo-de-manu/capitulo-10';
import { codigoManuCapitulo11 } from './codigo-de-manu/capitulo-11';
import { codigoManuCapitulo12 } from './codigo-de-manu/capitulo-12';
import { codigoManuGlossario } from './codigo-de-manu/glossario';
import { declaracao1789 } from './revolucao-francesa/declaracao-1789';
import { declaracaoIndependenciaEua } from './revolucao-americana/declaracao-independencia-eua';
import { declaracaoDireitosVirginia } from './revolucao-americana/declaracao-direitos-virginia';
import { constituicaoHaiti1805 } from './haiti/constituicao-1805';

export const documents: HistoricalDocument[] = [
  urNammu,
  lipitIshtar,
  eshnunna,
  hamurabi,
  leisHititas,
  confissoesMaatAni,
  confissoesMaatNebseni,
  dracon,
  solon,
  xiiTabuas,
  conflitoOrdens,
  editoCaracala,
  lexAquilia,
  institutasLivro1,
  institutasLivro2,
  institutasLivro3,
  institutasLivro4,
  digestoLivro1Titulo1,
  digestoLivro9Titulo2,
  digestoLivro12Titulo6,
  digestoLivro41Titulo1,
  digestoLivro41Extra,
  digestoLivro44Titulo7,
  digestoLivro47Titulo2,
  digestoLivro50Titulo16,
  codexLivro1Titulo1,
  codexLivro1Titulo14,
  codexLivro2Titulo3,
  codexLivro9Titulo9,
  codexLivro9Titulo16,
  leiSalicaTitulosIX,
  leiSalicaTitulosXIXX,
  leiSalicaTitulosXxiXxx,
  leiSalicaTitulosXxxiXl,
  leiSalicaTitulosXliL,
  leiSalicaTitulosLiLx,
  leiSalicaTitulosLxiLxv,
  leiSalicaCapitularI,
  leiSalicaCapitularIi,
  leiSalicaDecretoClotario,
  leiSalicaCapitularIii,
  leiSalicaCapitularIv,
  leiSalicaCapitularV,
  leiSalicaCapitularViSeteTipos,
  codigoManuCapitulo1,
  codigoManuCapitulo2,
  codigoManuCapitulo3,
  codigoManuCapitulo4,
  codigoManuCapitulo5,
  codigoManuCapitulo6,
  codigoManuCapitulo7,
  codigoManuCapitulo8,
  codigoManuCapitulo9,
  codigoManuCapitulo10,
  codigoManuCapitulo11,
  codigoManuCapitulo12,
  codigoManuGlossario,
  codigoVisigoticoLivro1,
  codigoVisigoticoLivro2Titulo1,
  codigoVisigoticoLivro2Titulo4,
  codigoVisigoticoLivro3,
  codigoVisigoticoLivro4Titulo2,
  codigoVisigoticoLivro5Titulo7,
  codigoVisigoticoLivro6,
  codigoVisigoticoLivro7Titulo2,
  codigoVisigoticoLivro12,
  decretoGracianoDistincaoI,
  decretoGracianoDistincaoII,
  decretoGracianoCausa23,
  magnaCarta,
  declaracaoDireitosVirginia,
  declaracaoIndependenciaEua,
  declaracao1789,
  constituicaoHaiti1805,
];