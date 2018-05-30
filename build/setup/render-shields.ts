/**
 * Converts the input array of shields into Markdown.
 */
export default function renderShields(shields: Shield[]) {
  return shields.map(([title, img, link]) => `[![${title}](https://img.shields.io/${img}.svg?style=flat-square)](${link})`).join(' ')
}

export type Shield = [string, string, string]
