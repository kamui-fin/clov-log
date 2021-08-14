export const previewMd = (markdown: string): string => {
    return markdown.length <= 300
        ? markdown
        : `${markdown.slice(0, 300).trim()}...`;
};
