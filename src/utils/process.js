import marked from "marked";

export default function processMarkdown(source) {
  const m = marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
  });
  console.warn(source);
  return m(source);
}
