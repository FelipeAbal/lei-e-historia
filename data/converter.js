const fs = require('fs');

const raw = fs.readFileSync('Livro III.md', 'utf-8');

// Divide por títulos
const blocks = raw.split(/\*\*TÍTULO/i).filter(Boolean);

const sections = blocks.map((block, index) => {
  const fullTitle = block.split('**')[0].trim();
  const content = block.replace(fullTitle, '').trim();

  // Separa artigos numerados
  const articles = content.split(/\(\d+\)/).filter(Boolean);

  if (articles.length > 1) {
    return {
      id: `titulo-${index + 1}`,
      title: `TÍTULO ${fullTitle}`,
      type: 'articles',
      articles: articles.map((text, i) => ({
        id: `t${index + 1}-${i + 1}`,
        number: `(${i + 1})`,
        text: text.trim()
      }))
    };
  }

  return {
    id: `titulo-${index + 1}`,
    title: `TÍTULO ${fullTitle}`,
    type: 'text',
    content: content.trim()
  };
});

const output = `
import { HistoricalDocument } from '../types';

export const livroIII: HistoricalDocument = {
  id: 'livro-iii',
  title: 'Livro III',
  sections: ${JSON.stringify(sections, null, 2)}
};
`;

fs.writeFileSync('LivroIII.ts', output);

console.log('Arquivo convertido com sucesso.');
