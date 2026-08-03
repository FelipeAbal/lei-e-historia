# CLAUDE.md — Lei e História

## O que é este projeto

Repositório digital de fontes primárias da história do direito. O objetivo é reunir textos legislativos históricos (códigos, leis, éditos, compilações) traduzidos e comentados, acessíveis para pesquisadores, estudantes e professores de história do direito. Não existe nada equivalente em português.

**URL:** https://leiehistoria.netlify.app  
**Autor:** Felipe Cittolin Abal — Professor de Direito e História na Universidade de Passo Fundo (UPF)

---

## Stack técnica

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 6
- **Roteamento:** React Router DOM 7 (BrowserRouter, com fallback SPA via `public/_redirects` no Netlify — URLs limpas tipo `/document/xii-tabuas`, sem `#`, para indexação no Google)
- **Estilização:** Tailwind CSS via CDN (configurado inline no `index.html`, NÃO via PostCSS)
- **Ícones:** Lucide React
- **Deploy:** Netlify (build: `vite build`, output: `dist/`)
- **Sem backend.** Todos os dados são arquivos .ts estáticos importados no bundle.

---

## Estrutura de pastas

```
/
├── index.html          # Entry point, carrega Tailwind via CDN + importmap
├── index.tsx            # ReactDOM.render, monta <App />
├── App.tsx              # Router principal (HashRouter)
├── types.ts             # Tipos globais (HistoricalDocument, DocumentCollection, etc.)
├── vite.config.ts
├── package.json
├── metadata.json
│
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CollectionCard.tsx    # Card de coleção na Home
│   └── DocumentCard.tsx      # Card de documento individual
│
├── pages/
│   ├── Home.tsx              # Página inicial — lista coleções e documentos
│   ├── DocumentReader.tsx    # Leitura de documento completo (rota /document/:id)
│   ├── CollectionHub.tsx     # Hub de coleção com docs filhos (rota /colecao/:id)
│   ├── About.tsx             # Página institucional
│   └── Contact.tsx           # Página de contato
│
├── utils/
│   └── renderMarkdown.tsx    # Renderiza markdown inline nos textos
│
└── data/
    ├── documents.ts          # Array central: exporta todos os HistoricalDocument[]
    ├── collections.ts        # Array central: exporta todos os DocumentCollection[]
    ├── converter.js          # Script utilitário para converter .md → .ts
    │
    ├── mesopotamia/          # Subpasta por civilização
    │   ├── hamurabi.ts
    │   ├── ur-nammu.ts
    │   ├── lipit-ishtar.ts
    │   └── eshnunna.ts
    │
    ├── grecia/
    │   ├── dracon.ts
    │   └── solon.ts
    │
    ├── roma/
    │   ├── xii-tabuas.ts
    │   ├── edito-caracala.ts
    │   └── conflito-ordens.ts
    │
    ├── codigo-de-manu/       # Subpasta por obra (quando grande)
    │   ├── collection.ts
    │   ├── glossario.ts
    │   ├── capitulo-1.ts ... capitulo-12.ts
    │   └── codigo-de-manu.md          # fonte de trabalho
    │
    ├── corpus-iuris/
    │   ├── collection.ts
    │   ├── institutas.ts              # sub-coleção
    │   ├── institutas-livro-1.ts ... institutas-livro-4.ts
    │   ├── digesto.ts                 # sub-coleção
    │   ├── digesto-livro-1-titulo-1.ts ...
    │   ├── codex.ts                   # sub-coleção
    │   ├── codex-livro-1-titulo-1.ts ...
    │   └── ...
    │
    ├── lei-salica/
    │   ├── lei-salica.ts              # documento principal
    │   ├── titulos-i-a-x.ts ...       # blocos de títulos
    │   ├── capitular-i.ts ...         # capitulares
    │   ├── decreto-clotario.ts
    │   └── *.md                       # fontes de trabalho
    │
    └── livro-dos-mortos/
        ├── collection.ts
        ├── confissoes-ani.ts
        └── confissoes-nebseni.ts
```

---

## Rotas

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `Home` | Lista todas as coleções e documentos avulsos |
| `/document/:id` | `DocumentReader` | Leitura de um documento (sem Header) |
| `/colecao/:id` | `CollectionHub` | Hub de uma coleção com seus documentos filhos |
| `/sobre` | `About` | Página institucional |
| `/contato` | `Contact` | Página de contato |

---

## Sistema de tipos (types.ts)

### HistoricalDocument
Representa um texto legislativo individual (ex: Código de Hamurabi, Institutas Livro I).

```typescript
{
  id: string;              // slug único, ex: "hamurabi", "institutas-livro-1"
  title: string;
  subtitle: string;
  date: string;            // ex: "c. 1754 a.C."
  description: string;     // resumo curto para o card
  era: string;             // ex: "Mesopotâmia", "Roma Antiga"
  language?: string;       // língua original, ex: "Acádio"
  sections: DocumentSection[];
  parentCollectionId?: string;  // se pertence a uma coleção
}
```

### DocumentCollection
Agrupa documentos relacionados (ex: Corpus Iuris Civilis agrupa Institutas, Digesto, Codex).

```typescript
{
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  era: string;
  sections: CollectionSection[];       // textos introdutórios da coleção
  childDocumentIds: string[];          // ids dos documentos filhos
  parentCollectionId?: string;         // para sub-coleções
}
```

### DocumentSection
Cada seção de um documento pode ser de 4 tipos:

| type | Campos usados | Exemplo |
|---|---|---|
| `'text'` | `content` (string com markdown) | Introdução, contexto histórico |
| `'articles'` | `articles[]` (LawArticle) | Dispositivos legais numerados |
| `'table'` | `tableData[]` (PriceRow) | Tabela de preços/equivalências |
| `'glossary'` | `glossaryEntries[]` (GlossaryEntry) | Glossário de termos |

---

## Regras obrigatórias

### 1. Um arquivo por documento — SEMPRE
Cada documento (`HistoricalDocument`) DEVE estar em seu próprio arquivo `.ts`. Nunca colocar múltiplos documentos no mesmo arquivo. Isso evita que um erro em um documento corrompa outros.

### 2. Subpasta por civilização/obra
Todo documento DEVE estar dentro de uma subpasta temática em `data/`. A convenção é:

- **Civilizações com poucos documentos:** subpasta por civilização (`mesopotamia/`, `grecia/`, `roma/`)
- **Obras grandes com múltiplos documentos:** subpasta por obra (`corpus-iuris/`, `codigo-de-manu/`, `lei-salica/`, `livro-dos-mortos/`)
- **NUNCA** colocar arquivos .ts de dados soltos na raiz de `data/`

### 3. Coleções precisam de collection.ts
Toda subpasta que representa uma coleção deve ter um `collection.ts` que exporta o objeto `DocumentCollection`.

### 4. Registrar em documents.ts e collections.ts
Ao criar um novo documento, importá-lo e adicioná-lo ao array em `data/documents.ts`. Se for uma coleção, também em `data/collections.ts`.

### 5. IDs são slugs kebab-case
Exemplos: `"hamurabi"`, `"xii-tabuas"`, `"institutas-livro-1"`, `"digesto-livro-9-titulo-2"`.

### 6. Nomes de arquivo seguem o ID
O arquivo `data/roma/xii-tabuas.ts` exporta o documento com `id: "xii-tabuas"`.

### 7. Markdown nos textos
O campo `content` das seções do tipo `text` aceita markdown (processado por `utils/renderMarkdown.tsx`). Usar `\n\n` para separar parágrafos. O primeiro parágrafo de cada seção `text` recebe automaticamente capitular decorativa (first-letter styling).

### 8. Arquivos-fonte (.md, .docx) ficam na subpasta da obra
Arquivos .md e .docx usados como fonte para converter em .ts devem ficar dentro da mesma subpasta do documento, nunca soltos em `data/`.

### 9. Não alterar a configuração do Tailwind
As cores (`paper`, `ink`, `wine`, `gold`, `gold-dark`) e fontes (`Merriweather`, `Playfair Display`, `Source Sans 3`) estão definidas inline no `index.html`. Não mudar sem instrução explícita.

### 10. Não alterar componentes de layout sem instrução
`Header.tsx`, `Footer.tsx`, `DocumentReader.tsx` e `CollectionHub.tsx` são estáveis. Alterações nesses componentes só com pedido explícito.

### 11. Glossários usam type 'glossary' — NUNCA type 'articles'
Seções de glossário DEVEM usar `type: 'glossary'` com o campo `glossaryEntries: GlossaryEntry[]` (cada entry com `term` e `definition`). Nunca usar `type: 'articles'` com `number`/`text` para representar glossários. O `DocumentReader` renderiza glossários com layout próprio (termo em destaque + definição), diferente do layout de dispositivos legais.

---

## Fluxo para adicionar um novo documento

1. Criar subpasta em `data/` se não existir (ex: `data/grecia/`)
2. Criar arquivo `.ts` com o nome do documento (ex: `data/grecia/solon.ts`)
3. Exportar um objeto `HistoricalDocument` com todos os campos preenchidos
4. Importar em `data/documents.ts` e adicionar ao array
5. Se faz parte de uma coleção:
   - Adicionar o `id` ao `childDocumentIds` da coleção
   - Definir `parentCollectionId` no documento
6. Rodar `npm run dev` e testar a navegação
7. `npm run build` antes de deploy

## Fluxo para adicionar uma nova coleção

1. Criar subpasta em `data/` (ex: `data/direito-medieval/`)
2. Criar `collection.ts` exportando o `DocumentCollection`
3. Criar os documentos filhos como arquivos separados na mesma subpasta
4. Registrar a coleção em `data/collections.ts`
5. Registrar os documentos filhos em `data/documents.ts`

---

## Design e identidade visual

- **Paleta:** fundo pergaminho `#FDFBF7` (paper), texto `#1A1A1A` (ink), destaque vinho `#8C2F39` (wine), dourado `#C59D5F` (gold)
- **Tipografia:** Playfair Display (títulos), Merriweather (corpo serifado), Source Sans 3 (UI/sans)
- **Tom:** editorial acadêmico, sóbrio, sem excessos visuais
- **Cards:** fundo branco, borda cinza, hover com sombra e borda wine
- **Artigos/dispositivos:** cards brancos com borda esquerda wine de 4px
- **Sidebar no DocumentReader:** índice sticky + ficha técnica (era, língua, nº dispositivos)
- **Seleção de texto:** fundo wine com texto branco

---

## Convenções de conteúdo

- Datas usam formato histórico: "c. 1754 a.C.", "c. 621 a.C.", "534 d.C."
- O campo `era` deve ser consistente: "Mesopotâmia", "Grécia Antiga", "Roma Antiga", "Índia Antiga", "Egito Antigo", "Idade Média"
- Textos introdutórios (seções type `text`) devem contextualizar historicamente o documento, explicar sua importância e indicar fontes da tradução
- Dispositivos legais mantêm a numeração original quando disponível
- Notas de tradução e comentários acadêmicos são bem-vindos nas introduções

---

## Alterações Cirúrgicas

Toque apenas no que for necessário. Não arrume o que não está quebrado.

Ao editar código existente:
- Não "melhore" código adjacente, comentários ou formatação
- Não refatore coisas que funcionam
- Mantenha o estilo existente, mesmo que faria diferente
- Se notar código morto não relacionado, mencione — não delete

Quando suas mudanças deixarem órfãos:
- Remova imports/variáveis/funções que AS SUAS alterações tornaram desnecessários
- Não remova código morto pré-existente sem instrução explícita

Critério: cada linha alterada deve rastrear diretamente ao pedido do usuário.
