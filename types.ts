export interface LawArticle {
  id: string;
  number: string;
  text: string;
}

export interface PriceRow {
  item: string;
  price: string;
}

export interface GlossaryEntry {
  term: string;
  definition: string;
}

export interface DocumentSection {
  id: string;
  title: string;
  type: 'text' | 'articles' | 'table' | 'glossary';
  content?: string;
  articles?: LawArticle[];
  tableData?: PriceRow[];
  glossaryEntries?: GlossaryEntry[];
}

export interface HistoricalDocument {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  era: string;
  language?: string;
  coverImage?: string; // Placeholder functionality
  sections: DocumentSection[];
  parentCollectionId?: string;
}

export interface CollectionSection {
  id: string;
  title: string;
  content: string;
}

export interface DocumentCollection {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  era: string;
  language?: string;
  sections: CollectionSection[];
  childDocumentIds: string[];
  parentCollectionId?: string;
}