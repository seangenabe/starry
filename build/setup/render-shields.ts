/**
 * Converts the input array of shields into Markdown.
 */
export = function renderShields(shields: Shield[]) {
  return shields.map(([title, img, link]) => `[![${title}](https://img.shields.io/${img}.svg?style=flat-square)](${link})`).join(' ')
}

type Shield = [string, string, string]
