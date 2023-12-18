import { DateTime } from "luxon";

export const previewMd = (markdown: string): string => {
    return markdown.length <= 300
        ? markdown
        : `${markdown.slice(0, 300).trim()}...`;
};

export const slugify = (input: string): string => {
    return input.toLowerCase().replace(/[ /]/, "-");
};

export const formatArticleDate = (date: string): string => {
    const dt = DateTime.fromFormat(date, "L-dd-y");
    return dt.toLocaleString(DateTime.DATE_FULL);
};
