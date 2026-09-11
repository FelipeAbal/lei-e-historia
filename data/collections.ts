import { DocumentCollection } from '../types';
import { decretoGraciano } from './decreto-graciano/collection';
import codigoVisigotico from './codigo-visigotico/codigo-visigotico-collection';
import { corpusIurisCivilis } from './corpus-iuris/collection';
import { institutas } from './corpus-iuris/institutas';
import { digestoJustiniano } from './corpus-iuris/digesto';
import { codexJustiniano } from './corpus-iuris/codex';
import { leiSalica } from './lei-salica/lei-salica';
import { codigoManu } from './codigo-de-manu/collection';
import { livroDosMortos } from './livro-dos-mortos/collection';
import { ordenacoesFilipinas } from './ordenacoes-filipinas/collection';
import { ordenacoesLivro1 } from './ordenacoes-filipinas/livro-1';

export const collections: DocumentCollection[] = [
  livroDosMortos,
  corpusIurisCivilis,
  institutas,
  digestoJustiniano,
  codexJustiniano,
  leiSalica,
  codigoVisigotico,
  decretoGraciano,
  codigoManu,
  ordenacoesFilipinas,
  ordenacoesLivro1,
];
