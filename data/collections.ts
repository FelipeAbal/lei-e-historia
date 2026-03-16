import { DocumentCollection } from '../types';
import { corpusIurisCivilis } from './corpus-iuris/collection';
import { institutas } from './corpus-iuris/institutas';
import { digestoJustiniano } from './corpus-iuris/digesto';
import { codexJustiniano } from './corpus-iuris/codex';
import { leiSalica } from './lei-salica/lei-salica';
import { codigoManu } from './codigo-de-manu/collection';
import { livroDosMortos } from './livro-dos-mortos/collection';

export const collections: DocumentCollection[] = [
  livroDosMortos,
  corpusIurisCivilis,
  institutas,
  digestoJustiniano,
  codexJustiniano,
  leiSalica,
  codigoManu,
];
