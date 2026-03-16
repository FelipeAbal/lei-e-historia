import React from 'react';

function stripHeadingMarkers(line: string): string {
  return line
    .replace(/^\\?#{1,6}\s*/, '')
    .replace(/\\\*/g, '');
}

export function parseInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const re = /(\\\*\\\*(.+?)\\\*\\\*)|(\*\*(.+?)\*\*)|(\\\*(.+?)\\\*)|(\*(.+?)\*)/g;
  let last = 0;
  let match;

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    if (match[1] || match[3]) {
      const content = match[2] ?? match[4];
      parts.push(<strong key={match.index} className="font-bold text-ink">{content}</strong>);
    } else if (match[5] || match[7]) {
      const content = match[6] ?? match[8];
      parts.push(<em key={match.index} className="italic">{content}</em>);
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) {
    parts.push(text.slice(last));
  }
  return parts;
}

export function renderMarkdown(text: string): React.ReactNode[] {
  const lines = text.split('\n');
  const result: React.ReactNode[] = [];

  lines.forEach((line, i) => {
    const key = i;

    if (/^\\?####\s/.test(line)) {
      result.push(<h4 key={key} className="font-display text-base font-bold text-ink mt-3 mb-1">{stripHeadingMarkers(line)}</h4>);
    } else if (/^\\?###\s/.test(line)) {
      result.push(<h3 key={key} className="font-display text-lg font-bold text-ink mt-4 mb-1">{stripHeadingMarkers(line)}</h3>);
    } else {
      const parsed = parseInline(line);
      if (line.trim() === '') {
        result.push(<br key={key} />);
      } else {
        result.push(<span key={key}>{parsed}<br /></span>);
      }
    }
  });

  return result;
}
